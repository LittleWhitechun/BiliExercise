<template>
  <div>
    <input type="text" v-model.number="dataLength">条
    <div class="virtual-scroller" @scroll="onScroll" :style="{height: 600 + 'px'}" ref="scroller">
      <div class="phantom" :style="{height: dataLength * itemHeight + 'px'}">
        <ul :style="{'transform': `translateY(${scrollTop}px)`}">
          <!-- <ul :style="{'margin-top': `${scrollTop}px`}"> -->
          <li v-for="item in visibleList" :key="item.brandId" :style="{height: `${itemHeight}px`, 'line-height': `${itemHeight}px`}">
            <div>
              <div>{{item.name}}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "virtualScroller",
  data() {
    return {
      itemHeight: 60,
      visibleCount: 10,
      dataLength: 500000, // 总数量
      startIndex: 0,
      endIndex: 10,
      scrollTop: 0
    }
  },
  mounted(){
    // this.$refs.scroller.onscroll = this.Debounce(this.onScroll,0)
  },
  computed: {
    dataList() {
      const newDataList = [...Array(this.dataLength || 0).keys()].map((v, i) => ({
        brandId: i + 1,
        name: `当前为${i + 1}行`,
        height: this.itemHeight
      }));
      return newDataList
    },
    visibleList() {
      return this.dataList.slice(this.startIndex, this.endIndex)
    }
  },
  methods: {
    onScroll(e) {
      const scrollTop = e.target.scrollTop
      this.scrollTop = scrollTop
      console.log('scrollTop', scrollTop)
      this.startIndex = Math.floor(scrollTop / this.itemHeight)
      this.endIndex = this.startIndex + 10
    },
    Debounce: (fn, t) => {
      const delay = t || 500
      let timer
      return function() {
        const args = arguments
        if (timer) {
          clearTimeout(timer)
        }
        const context = this
        timer = setTimeout(() => {
          timer = null
          fn.apply(context, args)
        }, delay)
      }
    },
  }
}
</script>

<style scoped>
.virtual-scroller {
  border: solid 1px #E5F1FF;
  margin-top: 10px;
  height: 600px;
  overflow: auto
}

.phantom {
  overflow: hidden
}

ul {
  background: #E5F1FF;
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  outline: solid 1px #fff;
  text-align: center;
}
</style>
