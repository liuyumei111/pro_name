<template>
  <div>
    <rrheader class="rrheader"></rrheader>
    <div class="body-box">
      <h1>我的</h1>
      <a><router-link to="/pageThree">{{msg}}</router-link></a>
      <a><router-link to="/pageFour">{{msg1}}</router-link></a>
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
        msg: 'vue-resource（http请求）插件使用',
        msg1:'第四个页面'
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
    margin-top: 60px;
    width: 100%;
  }
  h1{
    text-align: center;
    font-size: 30px;
  }
  .body-box>a{
    margin-top: 30px;
    width: 100px;
    line-height: 30px;
    text-align: center;
    display: inline-block;
    background: aquamarine;
    text-decoration: underline;
  }


</style>
