<template>
  <div class="rrbottom-box">
    <span class="rrheader-box-spen">{{msg}}</span>
    <span class="rrheader-box-spen">{{msg1}}</span>
  </div>
</template>

<script>
  export default {
    name: 'rrbottom',
    data(){
      return{
        msg:'首页',
        msg1:'我的'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .rrbottom-box{
    width: 100%;
    line-height: 40px;
    background: bisque;
    display: flex;
  }
  .rrbottom-box>span{
    color: black;
    flex: 1;
    text-align: center;
  }
</style>
