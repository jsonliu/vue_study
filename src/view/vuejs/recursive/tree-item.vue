<template>
    <div class="tree-view">
      <li>
        <div
          :class="{bold: isFolder}"
          @click="toggle"
          @dblclick="changeType">
          {{model.name}}
          <span v-if="isFolder">[{{open ? '-' : '+'}}]</span>
        </div>

        <ul v-show="open" v-if="isFolder">
          <v-tree-item
            class="item"
            v-for="(model,index) in model.children"
            :model="model" :key="index">
          </v-tree-item>
          <li class="add" @click="addChild">+</li>
        </ul>

      </li>

    </div>
</template>

<script type="text/ecmascript-6">
//  import vTreeItem from './tree-item.vue'
    export default {
        name:'v-tree-item',
        components: {
//          vTreeItem
        },
//        props: {
//          model: Object
//        },
        props: ['model'],
        data(){
            return {
                open:false,
//                model:{
//                  name: 'My Tree',
//                  children: [
//                    { name: 'hello' },
//                    { name: 'wat' },
//                    {
//                      name: 'child folder',
//                      children: [
//                        {
//                          name: 'child folder',
//                          children: [
//                            { name: 'hello' },
//                            { name: 'wat' }
//                          ]
//                        },
//                        { name: 'hello' },
//                        { name: 'wat' },
//                        {
//                          name: 'child folder',
//                          children: [
//                            { name: 'hello' },
//                            { name: 'wat' }
//                          ]
//                        }
//                      ]
//                    }
//                  ]
//
//                }
            }
        },
  
        computed:{
          isFolder: function () {
            return this.model.children &&
              this.model.children.length
          }
        },
        methods: {
          toggle: function () {
            if (this.isFolder) {
              this.open = !this.open
            }
          },
          changeType: function () {
            if (!this.isFolder) {
              Vue.set(this.model, 'children', [])
              this.addChild()
              this.open = true
            }
          },
          addChild: function () {
            this.model.children.push({
              name: 'new stuff'
            })
          }
        },
        created(){

        }
    }
</script>

<style lang="less" rel="stylesheet/less">
    @import "../../../style/mixin";
    .tree-view{
      .bold {
        font-weight: bold;
      }
      .item {
        cursor: pointer;
      }
      ul {
        padding-left: 1em;
        line-height: 1.5em;
        list-style-type: dot;
      }
    }

</style>
