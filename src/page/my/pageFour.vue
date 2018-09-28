<template>
  <div>
    <rrheader class="rrheader"></rrheader>
    <div class="body-box">
      <h1>url传参</h1>
      <div style="margin-top: 40px;">
        <h3>
          <router-link to="/pageFive/zhagnsan/3322">1）路由配置传参方式</router-link>
        </h3>
        <br>
        <i>注意：参数两个分别是name:zhangsan ； token:3322</i>
      </div>


      <div style="margin-top: 50px;">
        <h3>2）js 接收方式</h3>
        <input type="text" v-model="name">
        <input type="text" v-model="token">
        <span class="entBtn" v-on:click="entBtn">跳转按钮</span>
      </div>
    </div>
    <rrbottom class="rrbottom"></rrbottom>
  </div>
</template>

<script>
  import rrheader from '@/components/rrheader'
  import rrbottom from '@/components/rrbottom.vue'

  export default {
    name: 'pageFour',
    data() {
      return {
        name: 'lisi',
        token: '123456789'
      }
    },
    //生命周期挂载完成，可以访问dom
    mounted() {

    },
    //方法
    methods: {
      entBtn: function () {
        alert('跳转至第六页面')
        this.$router.push({name: 'pageSix',params: { name: this.name,token:this.token }});
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
  .rrheader {
    position: fixed;
    top: 0;
    left: 0;
  }

  .rrbottom {
    position: fixed;
    bottom: 0;
    left: 0;
  }

  .body-box {
    margin-top: 60px;
    width: 100%;
  }

  h1 {
    text-align: center;
    font-size: 30px;
    color: purple;
  }

  .entBtn {
    width: 80px;
    height: 30px;
    line-height: 30px;
    display: block;
    background: red;
    margin: 0 auto;
    border: 1px solid #000000;
    margin-top: 10px
  }


</style>
