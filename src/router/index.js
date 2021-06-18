import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '@/views/index.vue'
import user from '@/views/user/user.vue'
import userAdd from '@/views/user/userAdd.vue';
import department from '@/views/department/department.vue'
import departmentAdd from '@/views/department/departmentAdd.vue'
import job from '@/views/job/job.vue'
import jobAdd from '@/views/job/jobAdd.vue'
import employee from '@/views/employee/employee.vue'
import employeeAdd from '@/views/employee/employeeAdd.vue'
import notice from '@/views/notice/notice.vue'
import noticeAdd from '@/views/notice/noticeAdd.vue';
import downLoad from '@/views/document/downLoad.vue'
import upLoad from '@/views/document/upLoad.vue'
import FaceRegister from '@/views/register/FaceRegister.vue'
import Login from '@/views/login/Login.vue'
import FaceLogin from '@/views/login/FaceLogin';
import Password from '@/views/password/Password.vue';
Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: "/login"
  }, {
    path: '/index',
    component: index,
    children: [{
        path: 'user',
        component: user
      }, {
        path: 'userAdd',
        component: userAdd
      }, {
        path: 'department',
        component: department
      }, {
        path: 'departmentAdd',
        component: departmentAdd
      }, {
        path: 'job',
        component: job
      }, {
        path: 'jobAdd',
        component: jobAdd
      },
      {
        path: 'employee',
        component: employee
      }, {
        path: 'employeeAdd',
        component: employeeAdd
      }, {
        path: 'notice',
        component: notice
      }, {
        path: 'noticeAdd',
        component: noticeAdd
      }, {
        path: 'downLoad',
        component: downLoad
      }, {
        path: 'upLoad',
        component: upLoad
      }
    ]
  }, {
    path: '/faceRegister',
    component: FaceRegister
  }, {
    path: '/login',
    component: Login
  },
  {
    path: '/faceLogin',
    component: FaceLogin
  },
  {
    path: "/password",
    component: Password
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router