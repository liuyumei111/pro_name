<template>
  <div>
    <rrheader class="rrheader"></rrheader>
    <div class="body-box">
      <h1>使用less</h1>
      <div class="less-box">
        <div class="less-1">
          <div class="less-2"></div>
        </div>
      </div>
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
      }
    },
    components: {
      rrheader,
      rrbottom
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

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
    margin-top: 2rem;
    width: 100%;
  }
  h1{
    text-align: center;
    font-size: 30px;
    color: aquamarine;
  }

  .less-box{
    margin: 2rem 0;
    width: 100%;
    height: 6rem;
    background: #FF0000;
    .less-1{
      width: 80%;
      height: 4rem;
      background: yellow;
      margin: 0 auto;
      .less-2{
        width: 60%;
        height: 2rem;
        background: darkslategray;
        margin: 0 auto;
      }
    }
  }

</style>
