<template>
  <div class="wx-main-view">
    <v-page>{{$route.meta.title}}
      <div slot="content">
        <group>
          <x-input title="手机号码"
                   name="mobile"
                   placeholder="请输入手机号码"
                   keyboard="number"
                   is-type="china-mobile"
                   v-model="mobile"
                   :required="true">

          </x-input>
        </group>

        <group>
          <x-input title="密  码"
                   placeholder="请输入密码"
                   type="password"
                   v-model="password"
                   :min="6"
                   :debounce="500"
                   @on-change="changevalue">

          </x-input>
        </group>

        <div class="btn-sure">
          <x-button class="btn-default"
                    :class="{'btn-active':!isDisable }"
                    @click.native="sureLogin"
                    type=""
                    action-type="button"
                    :disabled="isDisable">确定
          </x-button>
        </div>
      </div>
    </v-page>
  </div>
</template>

<script type="text/ecmascript-6">
  import vPage from 'components/pages/page.vue'
  import { XInput, Group, XButton, Cell } from 'vux'
  import userInfoApi from 'api/axiosApi/userInfo'
  import { mapGetters, mapActions } from 'vuex'
  export default {
    components: {
      vPage,
      XInput,
      XButton,
      Group,
      Cell
    },
    data () {
      return {
        mobile: '',
        password: '',
        isDisable: true
      }
    },
    created () {

    },
    methods: {
      ...mapActions([
        'saveUserInfo',
        'saveToken',
        'saveTabBarSelect',
      ]),
      changevalue (value) {
        if (String(this.mobile).trim().length === 11 && this.password.trim().length >= 6) {
          this.isDisable = false
        } else {
          this.isDisable = true
        }
      },
      sureLogin () {
        this.$showLoading()
        userInfoApi.login(String(this.mobile).trim(), this.password.trim()).then((res) => {
          this.$hideLoading()
          this.saveUserInfo(res.data)
          this.saveToken(res.data.tokenDto.accessToken)
          this.showToast('登陆成功', () => {
            //TODO  跳转有问题
            //                  if (this.$route.query.redirect) {
            //                    window.location.href = this.$route.query.redirect
            //                  } else {
            //                    window.location.href = '/vuejs'
            //                  }

            window.location.href = '/vuejs'
          })
        })
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import "../../../style/mixin";
  .btn-sure {
    height: 50px;
    width: 90% !important;
    text-align: center;
    margin: 40px auto;
    .btn-default {
      background-color: transparent;
      background-color: rgba(214, 0, 15, 0.5) !important;
    }

    .btn-active {
      background-color: red !important;
      color: white !important;
    }
  }
</style>
