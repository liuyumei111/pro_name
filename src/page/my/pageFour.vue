<template>
  <div>
    <rrheader class="rrheader"></rrheader>
    <div class="body-box">
      <h1>第四个页面</h1>
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
    color: purple;
  }


</style>
