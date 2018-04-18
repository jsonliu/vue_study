<template>
    <div class="wx-main-view">
      <app-header>
        {{$route.meta.title}}
      </app-header>

      <ul>
        <v-tree-item class="item" :model="treeData"></v-tree-item>
        <!--<v-tree-item class="item" :model="model" v-for="(model,index) in treeData" :key="index"></v-tree-item>-->
      </ul>
    </div>
</template>

<script type="text/ecmascript-6">
  import vTreeItem from './tree-item.vue'
  import AppHeader from 'components/common/header.vue'
    export default {
        components: {
          vTreeItem,
          AppHeader
        },
        data(){
            return {
              treeData: {
                name: 'My Tree',
                children: [
                  { name: 'hello' },
                  { name: 'wat' },
                  {
                    name: 'child folder',
                    children: [
                      {
                        name: 'child folder',
                        children: [
                          { name: 'hello' },
                          { name: 'wat' }
                        ]
                      },
                      { name: 'hello' },
                      { name: 'wat' },
                      {
                        name: 'child folder',
                        children: [
                          { name: 'hello' },
                          { name: 'wat' }
                        ]
                      }
                    ]
                  }
                ]
              }
            }
        },
        created(){

        }
    }
</script>

<style lang="less" rel="stylesheet/less">
  .wx-main-view{
    font-family: Menlo, Consolas, monospace;
    color: #444;

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
