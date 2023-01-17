<template>
  <div style="float: left; width: 30%; text-align: right; padding-right: 10px;">
    <span class="bookmark-list"><fa icon="bookmark"/></span>
  </div>
</template>

<script>
export default {
  name: "BookMark"
}
</script>

<style scoped>
.bookmark-list {
  font-size: 90%;
  font-weight: 700;
  line-height: 1;
  text-align: right;
  white-space: nowrap;
  /*color: #818896;*/
  cursor: pointer;
}
.bookmark-list:hover {
  color: yellow;
}
</style>