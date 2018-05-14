import Vue from 'vue'
import Router from 'vue-router'
import Navbar from '@/components/Navbar'
import Index from '@/components/Index'
import Classes from '@/components/Classes'
import Circle from '@/components/Circle'
import Footer from '@/components/Footer'
import Hot from '@/components/Hot'
import Paper from '@/components/Paper'
import AboutAnswer from '@/components/AboutAnswer'
import SchoolClass from '@/components/SchoolClass'
import Lesson from '@/components/Lesson'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      components: {
        nav:Navbar,
        body:Index,
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
        body: Circle,
        footer:Footer
      }
    }, {
      path: '/hot',
      components: {
        nav: Navbar,
        body: Hot,
        footer: Footer
      }
    }, {
      path: '/paper',
      components: {
        nav: Navbar,
        body: Paper,
        footer: Footer
      }
    }, {
      path: '/aboutanswer',
      components: {
        nav: Navbar,
        body: AboutAnswer,
        footer: Footer
      }
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
  ]
})
