import Vue from 'vue'
import Router from 'vue-router'
import Navbar from '@/components/Navbar'
import IndexPage from '@/components/IndexPage'
import Footer from '@/components/Footer'
import Classes from '@/components/Classes'
//学友圈二级导航
import SecondNavbar from '@/components/CircleNavbar/SecondNavbar'
import Commend from '@/components/CircleNavbar/Commend'
import Hot from '@/components/CircleNavbar/Hot'
import Paper from '@/components/CircleNavbar/Paper'
import AboutAnswer from '@/components/CircleNavbar/AboutAnswer'

import SchoolClass from '@/components/SchoolClass'
import Lesson from '@/components/Lesson'
//注册
import StuSign from '@/components/Signup/StuSign'
import TeaSign from '@/components/Signup/TeaSign'
//404
import Page404 from '@/components/404/Page404'
//个人中心首页
import Myhead from '@/components/SelfCenter/Myhead'
//个人中心二级组件
import SelfLesson from '@/components/SelfCenter/SelfLesson'
import Work from '@/components/SelfCenter/Work'
import Mission from '@/components/SelfCenter/Mission'
import Grade from '@/components/SelfCenter/Grade'
import Skill from '@/components/SelfCenter/Skill'
import News from '@/components/SelfCenter/News'
//个人设置
import SettingNavbar from '@/components/SelfCenter/Setting/SettingNavbar'
import SetUp from '@/components/SelfCenter/Setting/SetUp'
import Binding from '@/components/SelfCenter/Setting/Binding'
import Identity from '@/components/SelfCenter/Setting/Identity'

const index = r => require.ensure([], () => r(require('@/components/IndexPage')))
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      components: {
        nav:Navbar,
        body:IndexPage,
        footer:Footer
      }
    },
    {
      path: '/classes',
      components: {
        nav: Navbar,
        body: Classes,
        footer:Footer
      }
    },
    {
      path: '/circle',
      components: {
        nav: Navbar,
        body: SecondNavbar,
        footer:Footer
      }, children: [
        // 推荐主页
        { path: '/', component: Commend },
        { path: '/circle/hot', component: Hot },
        { path: '/circle/paper', component: Paper },
        { path: '/circle/aboutanswer', component: AboutAnswer },

        // ...其他子路由
      ]
    }, {
      path: '/schoolclass',
      components: {
        nav: Navbar,
        body: SchoolClass,
        footer: Footer
      }
    }, {
      path: '/lesson/:lessonid',
      components: {
        nav: Navbar,
        body: Lesson,
        footer: Footer
      }
    },
    {
      path: '/stusignup',
      components: {
        nav: Navbar,
        body: StuSign,
        footer: Footer
      }
    }, {
      path: '/teasignup',
      components: {
        nav: Navbar,
        body: TeaSign,
        footer: Footer
      }
    },{
      path:'/404',
      components:{
        nav: Navbar,
        body: Page404,
        footer: Footer
      }
    }, {
      path: '/user/:id', components: {
        nav: Navbar,
        body: Myhead,
        footer: Footer
      },
      children: [
        {
          path:'/',
          component:SelfLesson
        },
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: 'work',
          component: Work
        },
        {
          // 当 /user/:id/posts 匹配成功
          // UserPosts 会被渲染在 User 的 <router-view> 中
          path: 'mission',
          component: Mission
        },
        {
          // 当 /user/:id/posts 匹配成功
          // UserPosts 会被渲染在 User 的 <router-view> 中
          path: 'grade',
          component: Grade
        },
        {
          // 当 /user/:id/posts 匹配成功
          // UserPosts 会被渲染在 User 的 <router-view> 中
          path: 'skill',
          component: Skill
        },
        {
          // 当 /user/:id/setting 匹配成功
          // Setting 会被渲染在 Myhead 的 <router-view> 中
          path: 'news',
          component: News
        }
      ]
    },{
      path: '/user/:id',
      components: {
        nav: Navbar,
        body: SettingNavbar,
        footer:Footer
      },
      children: [
        {
          path: 'setting',
          component: SetUp
        },
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: 'binding',
          component: Binding
        },
        {
          // 当 /user/:id/posts 匹配成功
          // UserPosts 会被渲染在 User 的 <router-view> 中
          path: 'identity',
          component: Identity
        },
        
      ]
    },
    { path: '*', redirect: '/404' }//重定向
  ]
})
