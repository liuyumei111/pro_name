<template>
  <div>
    <rrheader class="rrheader"></rrheader>
    <div class="body-box">
      <h1>rem单位演示</h1>
      <div class="rembox">3rem</div>
      <div class="pxbox">60px</div>
      <div>
        <b class="title-rem">操作描述：</b>
        <p>
          在src目录下增加了config文件，文件中有计算rem的js.在main.js中引入了该js
        </p>
        <b class="title-px">相关解释：</b>
        <p>
         1) rem：是相对单位，相对的只是HTML根元素，rem.js就是计算根元素大小的
        </p>
        <p>
         2) px：是相对于显示屏幕分辨率而言，值固定
        </p>
        <p style="font-size: .7rem;color: #FF0000;">
          查看效果：打开控制台，手机浏览模式，切换各个型号设备，会发现“操作描述”“相关解释”字体大小不一样，那是因为
          “操作描述”使用的是rem单位，“相关解释”使用的是px单位
        </p>
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
    data() {
      return {}
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
    color: #FF0000;
  }

  .rembox {
    width: 3rem;
    height: 3rem;
    background: #FF0000;
    font-size: 1rem;
    color: #fff;
  }

  .pxbox {
    width: 60px;
    height: 60px;
    background: purple;
    font-size: 20px;
    color: #fff;
  }
  p{
    text-align: left;
    font-size: .7rem;
  }
  .title-rem{
    font-size: .8rem;
  }
  .title-px{
    font-size: 14px;
  }

</style>
