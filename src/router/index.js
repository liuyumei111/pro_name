import Vue from 'vue'
import Router from 'vue-router'

/*首页*/
import home from '@/page/home/home'
import pageOne from '@/page/home/pageOne'
import pageTwo from '@/page/home/pageTwo'
/*我的*/
import my from '@/page/my/my'
import pageThree from '@/page/my/pageThree'
import pageFour from '@/page/my/pageFour'


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/my',
      name: 'my',
      component: my
    },
    {
      path: '/pageOne',
      name: 'pageOne',
      component: pageOne
    },
    {
      path: '/pageTwo',
      name: 'pageTwo',
      component: pageTwo
    },
    {
      path: '/pageFour',
      name: 'pageFour',
      component: pageFour
    },
    {
      path: '/pageThree',
      name: 'pageThree',
      component: pageThree
    }
  ]
})

