<template>
    <div >
        <div class="line"></div>
    </div>
</template>
<script>
export default {
    name:'Line'
}
</script>
<style scoped>
.line {
  display: flex;
  align-items: center;
  font-size: 1em;
  color: #999;
  /* margin: 1% 2.5%; */
}
.line::before,
.line::after {
  content: "";
  flex: 1;
  height: 0.006em;
  background: #ccc;
}
</style>