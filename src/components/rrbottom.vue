<template>
  <div class="rrbottom-box">
    <a><router-link to="/">{{msg}}</router-link></a>
    <a><router-link to="/my">{{msg1}}</router-link></a>
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
  .rrbottom-box>a{
    color: black;
    flex: 1;
    text-align: center;
    text-decoration: underline;
  }
</style>
