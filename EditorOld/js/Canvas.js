/**
 * Created by InvincibleWombat on 17.05.2017.
 */
/**
 * Created by InvincibleWombat on 14.05.2017.
 */

class Canvas extends HTMLElement {

    // mouseX;
    // mouseY;
    // left;
    // right;
    // vertical;
    // canvas;

    constructor(parent_div, index) {
        super(parent_div, index);


        const p = document.createElement('p');
        this.canvas = document.createElement('canvas');
        this.canvas.setAttribute('width', '300');
        this.canvas.setAttribute('height', '300');
        this.canvas.setAttribute('tabindex', '-1');
        this.canvas.setAttribute('class', 'editor_canvas');
        this.canvas.setAttribute('id', 'c');
        const a = this;

        p.setAttribute('align', 'center');
        p.appendChild(this.canvas);

        this.updateHTML(p);

        // create a wrapper around native canvas element (with id="c")
        var canvas = new fabric.Canvas('c');

// create a rectangle object
        var rect = new fabric.Rect({
            left: 100,
            top: 100,
            fill: 'red',
            width: 20,
            height: 20
        });

// "add" rectangle onto canvas
        canvas.add(rect);
    }

    getCanvas() {
        return this.element.firstChild;
    }

    static selectElement(evt, object) {
        if (document.selection) {
            document.selection.empty();
        } else if (window.getSelection) {
            window.getSelection().removeAllRanges();
        }
        if (leftMousePressed(evt)) {
            object.mouseX = evt.clientX;
            object.mouseY = evt.clientY;

            object.vertical = object.canvas.getBoundingClientRect().bottom - object.mouseY < Canvas.margin;
            object.right = object.canvas.getBoundingClientRect().right - object.mouseX < Canvas.margin;
            object.left = object.mouseX - object.canvas.getBoundingClientRect().left < Canvas.margin;
            if (object.vertical || object.left || object.right) {
                window.onkeydown = function (evt) {
                    evt.stopPropagation();
                    Canvas.deselect(evt, object);
                };
                object.canvas.onmousemove = function (evt) {
                    evt.stopPropagation();
                    Canvas.resize(evt, object);
                };
                object.canvas.onmouseup = function (evt) {
                    evt.stopPropagation();
                    Canvas.deselect(evt, object);
                };
                object.canvas.onmouseout = function (evt) {
                    evt.stopPropagation();
                    Canvas.deselect(evt, object);
                };
            }
        }
    }

    static setCursor(evt, object) {
        object.mouseX = evt.clientX;
        object.mouseY = evt.clientY;
        object.vertical = object.canvas.getBoundingClientRect().bottom - object.mouseY < Canvas.margin;
        object.right = object.canvas.getBoundingClientRect().right - object.mouseX < Canvas.margin;
        object.left = object.mouseX - object.canvas.getBoundingClientRect().left < Canvas.margin;

        if (object.left || object.right) {
            $('html,body').css('cursor', 'e-resize');
        }
        else if (object.vertical) {
            $('html,body').css('cursor', 's-resize');
        }
        else {
            $('html,body').css('cursor', '');
        }
    }

    static resize(evt, object) {
        let dx = evt.clientX - object.mouseX;
        let dy = evt.clientY - object.mouseY;

        const h = parseFloat(object.canvas.getAttribute('height')) + dy;
        const w = parseFloat(object.canvas.getAttribute('width')) + (object.left ? -1 : 1) * dx * 2;

        if (object.vertical) object.canvas.setAttribute('height', h.toString());
        if (object.left || object.right) object.canvas.setAttribute('width', w.toString());

        object.mouseX = evt.clientX;
        object.mouseY = evt.clientY;
    }

    static deselect(evt, object) {
        if (object.canvas !== 0) {
            object.canvas.removeAttribute("onmouseup");
            object.canvas.onmousemove = function (evt) {
                evt.stopPropagation();
                Canvas.setCursor(evt, object);
            };
            $('html,body').css('cursor', '');
        }
    }

}
Canvas.margin = 20;