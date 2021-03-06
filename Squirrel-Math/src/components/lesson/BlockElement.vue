<template>
    <div 
        :is="tagName"
        :class="{ 
            'bold': marks && marks.some(m => m.type == 'bold'), 
            'italic': marks && marks.some(m => m.type == 'italic'),
            'underline': marks && marks.some(m => m.type == 'underline'),
            'strike': marks && marks.some(m => m.type == 'strike'),
            'inline': text,
        }"
        :attrs="attrs"
    >
        <template v-if="text">{{(marks && marks.some(m => m.type == 'number')) ? '$' + text + '$' : text}}</template>
        <block-element v-for="(block, i) in children" :key="i" :content="block"></block-element>
    </div>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';
import Vue from 'vue';
import DefaultTable from "./DefaultTable.vue";
import TableCell from "./TableCell.vue";
import TableHeader from "./TableHeader.vue";
import SemanticTag from './SemanticTag.vue';
import Proof from "./Proof.vue";
import Example from "./Example.vue";
import Formula from "./Formula.vue";
import Expression from "./Expression.vue";

@Component({
    components: {
        DefaultTable,
        TableCell,
        TableHeader,
        SemanticTag,
        Proof,
        Example,
        Formula,
        Expression,
    }
})
export default class BlockElement extends Vue { 
    @Prop() content?: any;
    type = "";
    marks = [];
    text = "";
    children = [];
    attrs = {};

    constructor() {
        super();
    }

    mounted() {
        this.type = this.content.type;
        this.marks = this.content.marks;
        this.text = this.content.text;
        this.attrs = this.content.attrs;
        this.children = this.content.content;
    }

    private typeToTag: {[type: string]: string} = {
        paragraph: 'p',
        bullet_list: 'ul',
        ordered_list: 'ol',
        list_item: 'li',
        table: 'default-table',
        table_row: 'tr',
        table_header: 'table-header',
        table_cell: 'table-cell',
        semantic_tag: 'semantic-tag',
        proof: 'proof',
        example: 'example',
        formula: 'formula',
        expression: 'expression'
    }

    get tagName() {
        return this.typeToTag[this.type] || 'div';
    }
  
}
</script>

<style scoped lang="scss">
.inline {
    display: inline;
}
.bold {
    font-weight: bold;
}
.italic {
    font-style: italic;
}
.underline {
    text-decoration: underline;
}
.strike {
    text-decoration: line-through;
}
</style>
