<template>
  <div>
    <rrheader class="rrheader"></rrheader>
    <div class="body-box">
      <p style="color: red;text-align: left">1）vue-resource（http请求）插件使用</p>
      <p style="color: red;text-align: left">2）v-for循环渲染数据</p>
      <ul class="userBox">
        <li style="background: aquamarine">
          <span>姓名</span>
          <span>年龄</span>
          <span>地区</span>
        </li>
        <li v-for="item in userList">
          <span>{{item.name}}</span>
          <span>{{item.age}}</span>
          <span>{{item.city}}</span>
        </li>
      </ul>
    </div>
    <rrbottom class="rrbottom"></rrbottom>
  </div>
</template>

<script>
  import rrheader from '@/components/rrheader'
  import rrbottom from '@/components/rrbottom.vue'

  export default {
    name: 'home',
    data() {
      //存放数据
      return {
        userList: ""
      }
    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
      this.showData();
    },
    //存放方法
    methods: {
      showData: function () {
        this.$http.get('http://localhost:8080/static/data1.json').then((response) => {
          //响应正确回调
          this.userList = response.body;
        }, (response) => {
          // 响应错误回调

        });
      }

    },
    ////import引入的组件需要注入到components对象中才能使用"
    components: {
      rrheader,
      rrbottom
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
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
    color: royalblue;
  }

  .userBox {
    margin-top: 50px !important;
    display: block;
    li {
      display: flex;
      span {
        flex: 1;
        height: 20px;
        line-height: 20px;
        border: 1px solid #000000;
        display: inline-block;
      }
    }
  }

</style>
