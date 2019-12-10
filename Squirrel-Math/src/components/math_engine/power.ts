import { Expression } from './expression';
import { Integer, Number, instanceOfNumber } from './numbers';
import { Sum } from './sum';
import { Product } from './product';
import { Variable } from './variable';
import { Quotient } from './quotient';

export class Power implements Expression {
    base: Expression;
    exponent: Expression;
    constructor(base: Expression, exponent: Expression) {
        this.base = base;
        this.exponent = exponent;
    }

    toMathJax(): string {
        return (this.base.precedence() <= this.precedence() ? "\\left(" + this.base.toMathJax() + "\\right)" :  "{" + this.base.toMathJax() + "}") + "^{" + this.exponent.toMathJax() + "}";
    }

    isNegative(): boolean {
        return false;
    }

    simplify(): Expression {
        this.base = this.base.simplify();
        this.exponent = this.exponent.simplify();
        if (this.exponent.equals(new Integer(0)))
            return new Integer(1);
        else if (this.exponent.equals(new Integer(1)))
            return this.base;
        else if (this.base.equals(new Integer(0)))
            return new Integer(0);
        else if (this.base.equals(new Integer(1)))
            return new Integer(1);
        if (this.exponent.isNegative())
            return new Quotient(Integer.one, new Power(this.base, Product.of(new Integer(-1), this.exponent))).simplify();
        if (this.base instanceof Sum && this.exponent instanceof Integer) {
            let result = new Product();
            for (let i = 0; i < this.exponent.int; i++)
                result.factors.push(this.base);
            return result.simplify();
        }
        return this;
    }

    equals(other: Expression): boolean {
        let own = this.simplify();
        other = other.simplify();
        if (!(own instanceof Power))
            return own.equals(other);
        if (other instanceof Power)
            return own.base.equals(other.base) && own.exponent.equals(other.exponent);
        return false;
    }

    precedence(): number {
        return 3;
    }

    inSumBefore(other: Expression): boolean {
        if (other instanceof Number)
            return true;
        if (other instanceof Variable)
            return true;
        if (other instanceof Power) {
            if (instanceOfNumber(this.exponent) && instanceOfNumber(other.exponent)) {
                if (!this.exponent.equals(other.exponent))
                    return other.exponent.lessThan(this.exponent);
            }
            return this.base.inSumBefore(other.base);
        }
        if (other instanceof Product)
            return other.factors.length == 0 || this.inSumBefore(other.factors[0]);
        return this.base.inSumBefore(other);
    }
    inProductBefore(other: Expression): boolean {
        if (other instanceof Power)
            return this.base.inProductBefore(other.base);
        return this.base.inProductBefore(other);
    }
}