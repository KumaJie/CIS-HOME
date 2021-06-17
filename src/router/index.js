import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '@/views/index.vue'
import user from '@/views/user.vue'
import userAdd from '@/views/userAdd.vue';
import department from '@/views/department.vue'
import job from '@/views/job.vue'
import employee from '@/views/employee.vue'
import notice from '@/views/notice.vue'
import downLoad from '@/views/downLoad.vue'


Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: "/index"
}, {
  path: '/index',
  component: index,
  children: [{
      path: 'user',
      component: user
    }, {
      path: 'userAdd',
      component: userAdd
    },{
      path: 'department',
      component: department
    }, {
      path: 'job',
      component: job
    },
    {
      path: 'employee',
      component: employee
    }, {
      path: 'notice',
      component: notice
    }, {
      path: 'downLoad',
      component: downLoad
    }
  ]
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router