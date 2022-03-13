<template>
  <div>
    <van-action-sheet v-model="show" title="" @close="onCancel">
      <van-tabs v-model="active">
        <van-tab title="礼物">
          <van-grid>
            <van-grid-item
              v-for="(gift, idx) in gifts"
              :icon="gift.icon"
              :style="`color:${gift.color}`"
              :text="gift.name"
              :key="gift.name"
              @click="selectGift(idx)"
              :class="gift.selected ? 'selected' : ''"
            ></van-grid-item>
          </van-grid>
        </van-tab>
        <van-tab title="道具">
          <van-grid :column-num="3">
            <!-- <van-grid-item icon="medal" text="道具" style="color: #ae716e" /> -->
            <van-grid-item v-for="value in 6" :key="value" class="blank" />
          </van-grid>
        </van-tab>
      </van-tabs>
      <div class="sendGiftRow">
        <div class="diamond"><van-icon name="diamond" color="#cb8e85" />15</div>
        <div class="diamond"><van-icon name="diamond" color="#f2debd" />10</div>
        <div class="diamond"><van-icon name="diamond" color="#ff9b6a" />40</div>
        <div class="send-btn">
          <van-button :disabled="!hasSelectedGifts" round type="danger" @click = "sendGift">发送</van-button>
        </div>
      </div>
    </van-action-sheet>
  </div>
</template>
<script>
export default {
  name: "VideoGift",
  data() {
    return {
      active: 0,
      colors: [
        "#1989fa",
        "#ee0a24",
        "#ef5464",
        "#b7d28d",
        "#d9b8f1",
        "#b8f1ed",
        "#ffe543",
        "#cf8888",
      ],
      gifts: [],
    };
  },
  props:{
      show:{
          type:Boolean,
          default:false
      }
  },
  computed: {
    hasSelectedGifts(){
        let selectedGifts = this.gifts.filter(g => g.selected)
        return selectedGifts.length != 0
    },
  },
  mounted() {
    this.gifts = [...Array(this.colors.length).keys()].map((i) => {
      return {
        name: `礼物${i + 1}`,
        color: this.colors[i],
        icon: "gift",
        selected: false,
      };
    });
  },
  methods: {
    selectGift(idx) {
      this.gifts[idx].selected = !this.gifts[idx].selected;
    //   this.gifts = [...this.gifts];
    },
    sendGift(){
        let selectedGifts = this.gifts.filter(g => g.selected).map(g => g.name)
        this.gifts = this.gifts.map(g => {g.selected = false;return g})
        console.log(this.gifts)
        this.$toast.success(`成功送出：${selectedGifts.join(',')}`);
    },
    onCancel(){
        this.$emit('cancelGiftTable',false)
    }
  },
};
</script>
<style scoped>
.content {
  padding: 16px 16px 160px;
}
.van-grid-item {
  height: 6rem;
}
.selected.van-grid-item {
  border-style: solid;
  border-width: 0.09rem;
  border-radius: 10%;
}
.sendGiftRow {
  padding: 0.55rem 1rem;
  display: flex;
  align-items: center;
}
.send-btn {
  flex: 1;
  text-align: right;
}
.diamond {
  margin: 0.5rem;
  vertical-align: middle;
  font-size: 1.05rem;
}
.diamond .van-icon {
  font-size: 1.725rem;
  color: rgb(90, 138, 209);
}
</style>
