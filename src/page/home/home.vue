<template>
  <div>
    <rrheader class="rrheader"></rrheader>
    <div class="body-box">
      <h1>我是首頁</h1>
      <a href="">{{msg}}</a>
      <a href="">{{msg1}}</a>
    </div>
    <rrbottom class="rrbottom"></rrbottom>
  </div>
</template>

<script>
  import rrheader from '@/components/rrheader'
  import rrbottom from '@/components/rrbottom.vue'

  export default {
    name: 'home',
    data () {
      return {
        msg: '第一个页面',
        msg1:'第二个页面'
      }
    },
    components: {
      rrheader,
      rrbottom
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .rrheader{
    position: fixed;
    top: 0;
    left: 0;
  }
  .rrbottom{
    position: fixed;
    bottom: 0;
    left: 0;
  }
  .body-box{
    margin-top: 40px;
    width: 100%;
  }
  h1{
    text-align: center;
  }


</style>
