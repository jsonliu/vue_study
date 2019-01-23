<template>
  <div class="modal-view">
    <transition name="modal">
      <div class="modal-mask">
        <!--<div class="modal-wrapper"  @click.self="$emit('close')">-->
        <div class="modal-wrapper">
          <div class="modal-container">
            <!--<img src="../assets/img/activityTip/titlebg.png"/>-->
            <div class="close-btn"
                 @click="$emit('close')"></div>
            <div class="content-info">
              <p>如果你贷款成功即可获得</p>
              <p>1次IPhone X和</p>
              <p>免单抽奖机会</p>
            </div>
            <div class="goto-btn"
                 @click="$emit('goto')">
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  import titleimg from '../../assets/images/titlebg.png'
  export default {
    components: {
    },
    data () {
      return {}
    },
    created () {
    }
  }
</script>

<style lang="scss" scoped>
  .modal-view {
    .modal-mask {
      position: fixed;
      z-index: 9998;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      display: table;
      transition: opacity 0.3s ease;
    }
    .modal-wrapper {
      display: table-cell;
      vertical-align: middle;
      .modal-container {
        margin: 0 auto;
        padding: 10px 10px;
        transition: all 0.3s ease;
        background: url("../../assets/images/titlebg.png") no-repeat 0 0;
        background-size: 100%;
        width: 317px;
        height: 277px;
        .close-btn {
          display: inline-block;
          position: relative;
          top: 60px;
          float: right;
          width: 11px;
          height: 11px;
          background: url("../../assets/images/closebtn.png") no-repeat 0 0;
          background-size: 100%;
        }
        .content-info {
          margin-top: 100px;
          height: 90px;
          line-height: 30px;
          text-align: center;
          p {
            color: #ff531e;
            font-size: 20px;
            /*font-family: "Apple Braille";*/
            font-family: Helvetica, Arial, sans-serif;
          }
        }
        .goto-btn {
          background: url("../../assets/images/gobtn.png") no-repeat 0 0;
          background-size: 100%;
          width: 255px;
          height: 66px;
          margin: 20px auto;
        }
      }
    }
  }
</style>
