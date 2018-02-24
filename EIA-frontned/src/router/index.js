import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/register', component: () => import('@/views/register/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index')
    }]
  },

  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: 'Example', icon: 'example' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: 'Table', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Tree', icon: 'tree' }
      }
    ]
  },

  {
    path: '/form',
    component: Layout,
    redirect: '/form/form1',
    name: '/form',
    meta: { title: 'Form', icon: 'form' },
    children: [
      {
        path: 'form1',
        name: 'Form1',
        component: () => import('@/views/form/form1'),
        meta: { title: '基础信息', icon: 'form' }
      },
      {

        path: 'form2',
        name: 'Form2',
        component: () => import('@/views/form/form2'),
        meta: { title: '产品表/材料表/设备表', icon: 'form' }
      },
      {

        path: 'form3',
        name: 'Form3',
        component: () => import('@/views/form/form3'),
        meta: { title: '地理信息', icon: 'form' }
      },
      {

        path: 'form4',
        name: 'Form4',
        component: () => import('@/views/form/form4'),
        meta: { title: '工程组成/敏感点信息/废气排放标准', icon: 'form' }
      },
      {

        path: 'form5',
        name: 'Form5',
        component: () => import('@/views/form/form5'),
        meta: { title: '基础信息附图', icon: 'form' }
      }
    ]
  },

  {
    path: '/project',
    component: Layout,
    redirect: '/project/projectList',
    meta: { title: '我的项目', icon: 'form' },
    children: [
      {
        path: 'projectList',
        name: 'projectList',
        component: () => import('@/views/project/projectList'),
        meta: { title: '项目管理', icon: 'form' }
      }
    ]
  },

  {
    path: '/company',
    component: Layout,
    redirect: '/company/companyList',
    meta: { title: '我的公司', icon: 'form' },
    children: [
      {
        path: 'companyList',
        name: 'companyList',
        component: () => import('@/views/company/companyList'),
        meta: { title: '公司管理', icon: 'form' }
      },
      {
        hidden: true,
        path: 'companyDescription/:company_id',
        name: 'companyDescription',
        component: () => import('@/views/company/companyDescription'),
        meta: { title: '公司详情', icon: 'form' }
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
