<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="nav-center">购物街</div>
    </nav-bar>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            :pull-up-load="true"
            @pullingUp="loadMore">
      <home-swiper :banners="banners"/>
      <home-recommend :recommends="recommends"/>
      <home-feature/>
      <tab-control class="tab-control"
                   :titles="['流行','新款','精选']"
                   @tabClick="tabClick"

      />
      <goods-list :goods="showGoods"/>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper";
import {getHomeMultidata, getHomeGoods} from "network/home";
import HomeRecommend from "./childComps/HomeRecommend";
import HomeFeature from "./childComps/HomeFeature";

import TabControl from "components/cotent/tabControl/TabControl";
import GoodsList from "components/cotent/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/cotent/backTop/BackTop";


export default {
  name: "Home",
  components: {
    HomeRecommend,
    NavBar,
    HomeSwiper,
    HomeFeature,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []},
      },
      currentType: 'pop',
      isShowBackTop: false
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  created() {
    //1.请求多个数据
    this.getHomeMultidata()
    //请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')

  },
  mounted() {
    //3.开始监听item中图片加载完成
    const refresh=this.debounce(this.$refs.scroll.refresh,50)
    this.$bus.$on("itemImageLoad",()=>{
      //console.log('....');
      //this.$refs.scroll.refresh()
      refresh()
    })
  },
  methods: {
    //防抖函数delay为延迟多久
    debounce(func,delay){
      let timer=null
      return function(...args){
        if(timer)clearTimeout(timer)
        timer=setTimeout(()=>{
          func.apply(this,args)
        },delay)
      }
    },
    /**
     * 事件监听相关的方法
     */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0)
    },
    contentScroll(position) {
      //console.log(position);
      this.isShowBackTop = -position.y > 1000
    },
    loadMore() {
      //console.log('上啦加载');
      this.getHomeGoods(this.currentType)
      this.$refs.scroll.scroll.refresh()
    },


    /**
     * 网络请求相关的方法
     */
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
        this.$refs.scroll.finishPullUp()
      })
    }
  }
}
</script>

<style scoped>
#home {
  position: relative;
  height: 100vh;
}

.home-nav {
  background-color: deeppink;
  color: #fff;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}

.tab-control {
  position: sticky;
  top: 44px;
  z-index: 9;
}

.content {
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
}

</style>
