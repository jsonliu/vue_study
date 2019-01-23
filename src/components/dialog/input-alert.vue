<template>
  <div class="input-alert-view">
    <div class="wx-confirm-kuang">
      <div class="wx-big-wrap">
        <div class="wx-content-wrap">
          <div class="wx-line-one">
            <span class="spanWord"
                  style="color:#333333">消费金额：<span class="spanMoney"
                    style="color:#D7000F">￥{{ewalletAmount}}</span></span>
          </div>
          <div class="wx-line-two">
            <span style="color:#333333">支付密码：</span>
            <div class="wx-input-ctrl">
              <input v-model="inputPayPasssword"
                     class="wx-line-input"
                     type="password">
            </div>
          </div>
          <div v-show="!isTruePassword"
               class="wx-line-password">支付密码不正确，请重新输入</div>
          <div class="wx-line-Three">
            <a class="wx-quxiao"
               href="javascript:;"
               @click="cancelPay">取消</a>
            <a class="wx-pay"
               href="javascript:;"
               @click="surePay">确定</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    components: {
    },
    data () {
      return {
        ewalletAmount: 1000,
        isTruePassword: false,
        inputPayPasssword: '',
      }
    },
    created () {
    },
    methods: {
      cancelPay () {
        this.$emit('cancelevent')
      },
      surePay () {
        this.$emit('sureevent')
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import "../../style/mixin";
  .input-alert-view {
    .wx-confirm-kuang {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.6);
      display: flex;
      justify-content: center;
      align-items: Center;
      z-index: 1000;
      .wx-big-wrap {
        width: 100%;
        .wx-content-wrap {
          border-radius: 4px;
          width: 270px;
          min-height: 120px;
          background-color: #fff;
          margin: 0 auto;
          .wx-line-one {
            height: 49px;
            line-height: 49px;
            font-size: 18px;
            width: 100%;
            text-align: left;
            color: #333;
            .spanWord {
              margin-left: 30px;
              .spanMoney {
                margin-left: 0px;
              }
            }
            span {
              text-align: left;
            }
          }
          .wx-line-two {
            height: 35px;
            line-height: 35px;
            display: flex;
            text-align: center;
            span {
              flex: 0 0 100px;
              width: 60px;
              height: 35px;
              font-size: 15px;
              margin-left: 20px;
            }
            .wx-input-ctrl {
              flex: 1;
              height: 33px;
              border: 1px solid lightgray;
              margin-left: 0px;
              margin-right: 40px;
              input {
                box-sizing: border-box;
                width: 100%;
                height: 32px;
                padding-left: 5px;
              }
            }
          }
          .wx-line-password {
            color: #d7000f;
            height: 20px;
            font-size: 12px;
            margin-left: 32px;
            margin-top: 10px;
          }
          .wx-line-Three {
            margin: 12px 0px 0px 0px;
            border-top: 1px solid #ddd;
            height: 49px;
            line-height: 49px;
            display: flex;
            a {
              flex: 1;
              text-align: center;
            }
            .wx-quxiao {
              border-right: 1px solid #ddd;
              color: #333333;
              font-size: 18px;
            }
            .wx-pay {
              color: #d7000f;
              font-size: 18px;
            }
          }
        }
      }
    }
  }
</style>
