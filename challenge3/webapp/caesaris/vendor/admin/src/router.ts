import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/Layout.vue'

Vue.use(Router)

/*
  redirect:                      if `redirect: noredirect`, it won't redirect if click on the breadcrumb
  meta: {
    title: 'title'               the name showed in subMenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon showed in the sidebar
    breadcrumb: false            if false, the item will be hidden in breadcrumb (default is true)
    hidden: true                 if true, this route will not show in the sidebar (default is false)
  }
*/

export default new Router({
  // mode: 'history',  // Disabled due to Github Pages doesn't support this, enable this if you need.
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      component: () => import(/* webpackChunkName: "login" */ '@/views/login/index.vue'),
      meta: { hidden: true }
    },
    {
      path: '/404',
      component: () => import(/* webpackChunkName: "404" */ '@/views/404.vue'),
      meta: { hidden: true }
    },
    {
      path: '/',
      component: Layout,
      redirect: '/dashboard',
      name: 'Dashboard',
      // meta: { title: 'Dashboard', icon: 'dashboard' },
      meta: { hidden: true },
      children: [{
        path: 'dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/index.vue')
      }]
    },
    {
      path: '/challenges',
      component: Layout,
      redirect: '/challenges/challenge-3', // TODO: change to `challenge-1`
      name: 'Challenges',
      meta: { title: 'Challenges', icon: 'tree' },
      children: [
        {
          path: 'challenge-1',
          name: 'Challenge 1',
          // component: Layout,
          component: () => import(/* webpackChunkName: "challenge-1" */ '@/views/challenges/challenge-1/index.vue'),
          meta: { title: 'Challenge 1', icon: 'example', hidden: true }
        },
        {
          path: 'challenge-2',
          name: 'Challenge 2',
          component: () => import(/* webpackChunkName: "challenge-2" */ '@/views/challenges/challenge-2/index.vue'),
          meta: { title: 'Challenge 2', icon: 'example', hidden: true }
        },
        {
          path: 'challenge-3',
          name: 'Challenge 3',
          component: () => import(/* webpackChunkName: "challenge-3" */ '@/views/challenges/challenge-3/index.vue'),
          meta: { title: 'Challenge 3', icon: 'example' }
        },
        {
          path: 'challenge-4',
          name: 'Challenge 4',
          component: () => import(/* webpackChunkName: "challenge-4" */ '@/views/challenges/challenge-4/index.vue'),
          meta: { title: 'Challenge 4', icon: 'example', hidden: true }
        }
      ]
    },
    {
      path: '/form',
      component: Layout,
      children: [
        {
          path: 'index',
          name: 'Form',
          component: () => import(/* webpackChunkName: "form" */ '@/views/form/index.vue'),
          meta: { title: 'Form', icon: 'form' }
        }
      ]
    },
    {
      path: '/nested',
      component: Layout,
      redirect: '/nested/menu1',
      name: 'Nested',
      meta: { title: 'Nested', icon: 'nested' },
      children: [
        {
          path: 'menu1',
          component: () => import(/* webpackChunkName: "menu1" */ '@/views/nested/menu1/index.vue'),
          name: 'Menu1',
          meta: { title: 'Menu1' },
          children: [
            {
              path: 'menu1-1',
              component: () => import(/* webpackChunkName: "menu1-1" */ '@/views/nested/menu1/menu1-1/index.vue'),
              name: 'Menu1-1',
              meta: { title: 'Menu1-1' }
            },
            {
              path: 'menu1-2',
              component: () => import(/* webpackChunkName: "menu1-2" */ '@/views/nested/menu1/menu1-2/index.vue'),
              name: 'Menu1-2',
              meta: { title: 'Menu1-2' },
              children: [
                {
                  path: 'menu1-2-1',
                  component: () => import(/* webpackChunkName: "menu1-2-1" */ '@/views/nested/menu1/menu1-2/menu1-2-1/index.vue'),
                  name: 'Menu1-2-1',
                  meta: { title: 'Menu1-2-1' }
                },
                {
                  path: 'menu1-2-2',
                  component: () => import(/* webpackChunkName: "menu1-2-2" */ '@/views/nested/menu1/menu1-2/menu1-2-2/index.vue'),
                  name: 'Menu1-2-2',
                  meta: { title: 'Menu1-2-2' }
                }
              ]
            },
            {
              path: 'menu1-3',
              component: () => import(/* webpackChunkName: "menu1-3" */ '@/views/nested/menu1/menu1-3/index.vue'),
              name: 'Menu1-3',
              meta: { title: 'Menu1-3' }
            }
          ]
        },
        {
          path: 'menu2',
          component: () => import(/* webpackChunkName: "menu2" */ '@/views/nested/menu2/index.vue'),
          name: 'Menu2',
          meta: { title: 'Menu2' }
        }
      ]
    },
    {
      path: 'external-link',
      component: Layout,
      children: [
        {
          path: 'https://github.com/Armour/vue-typescript-admin-template',
          meta: { title: 'External Link', icon: 'link' }
        }
      ]
    },
    {
      path: '*',
      redirect: '/404',
      meta: { hidden: true }
    }
  ]
})