<template>
  <div class="ad-swiper">
    <swiper :style="swiperStyle"
            :options="swiperOption"
            class="swiper-box"
            ref="adswiper">
      <swiper-slide class="swiper-item"
                    v-for="(imgUrl,index) in adsArr"
                    :key="index"
                    @click.native="onAdClick(index)">
        <img class="adimgview"
             v-lazy="imgUrl" />
      </swiper-slide>
      <div v-show="adsArr.length>1"
           class="swiper-pagination"
           slot="pagination"></div>
    </swiper>
  </div>
</template>
<script type="text/ecmascript-6">
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import XImg from "../../../node_modules/vux/src/components/x-img/index";
  export default {
    components: {
      XImg,
      swiper,
      swiperSlide
    },
    data () {
      return {
        swiperOption: {
          notNextTick: true,
          autoplay: 1000,
          pagination: '.swiper-pagination',
          slidesPerView: 1,
          paginationClickable: true,
          spaceBetween: 30,
          mousewheelControl: false,
          observeParents: true,
          autoplaying: true,
          autoplayDisableOnInteraction: false, // 如果设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay
          loop: true,  //无限滚动
          onSlideChangeEnd: swiper => { //滑动之后回调函数
            //切换结束时，告诉我现在是第几个slide
            console.log('onSlideChangeEnd', swiper.realIndex)
          }
        },
        swiperSlides: [1, 2, 3, 4, 5],
        swiperStyle: {
          height: window.innerWidth * this.aspectRatio + 'px'
        }
      }
    },
    props: {
      adsArr: {
        type: Array,
        default () {
          return []
        }
      },
      // 高宽比(用以根据当前可用宽度计算高度值)
      aspectRatio: {
        type: Number,
        default () {
          return 1 / 2
        }
      }
    },
    created () {
    },
    methods: {
      onAdClick (index) {
        alert(index)
      }
    },
    computed: {
      swiper () {
        return this.$refs.adswiper.swiper
      }
    },
    mounted () {
      console.log('this is current swiper instance object', this.swiper)
      //          this.swiper.slideTo(0, 1000, false)
      this.$Lazyload.$on('loaded', function ({ bindType, el, naturalHeight, naturalWidth, $parent, src, loading, error }, formCache) {
        console.log('高:', naturalHeight, '宽', naturalWidth)
      })
    },
    activated () {
      this.swiper.startAutoplay()
    },
    deactivated () {
      this.swiper.stopAutoplay()
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import "../../style/mixin";
  .ad-swiper {
    .swiper-box {
      .swiper-item {
        .adimgview {
          width: 100%;
          height: 100%;
        }
      }
      swiper-pagination {
        position: relative;
        bottom: 0px;
      }
      .swiper-pagination-bullet-active {
        background-color: red;
      }
    }
  }
</style>
