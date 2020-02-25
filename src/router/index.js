import Vue from 'vue'
import Router from 'vue-router'
import platform from '@/components/view/platform'
import userlist from '@/components/view/user/userlist'
import userstatisc from '@/components/view/user/userstatisc'
import proMap from '@/components/view/user/map'
import cityMap from '@/components/view/user/map1'
import articlelist from '@/components/view/user/articlelist'
import timu1 from '@/components/view/user/timu1'
import timu2 from '@/components/view/user/timu2'
import timu3 from '@/components/view/user/timu3'


import login from '@/components/view/login'
import home from '@/components/home';
import iView from 'iview';

Vue.use(iView);


Vue.use(Router)

const router = new Router({

    routes: [{

            path: '/login',
            component: login,
            meta: {
                title: "登录",


            }
        },
        {
            path: '/',
            component: home,
            children: [{
                    path: '',
                    component: platform,
                    meta: {
                        title: "工作平台",

                    }
                },
                {
                    path: '/userlist',
                    component: userlist,
                    meta: {
                        title: "用户列表",

                    }
                },
                {
                    path: '/userstatisc',
                    component: userstatisc,
                    meta: {
                        title: "用户统计",

                    }
                },
                {
                    path: '/proMap',
                    component: proMap,
                    meta: {
                        title: "省地图",

                    }
                },
                {
                    path: '/cityMap',
                    component: cityMap,
                    meta: {
                        title: "市地图",

                    }
                },
                {
                    path: '/articlelist',
                    component: articlelist,
                    meta: {
                        title: "文章列表",

                    }
                },
                {
                    path: '/timu1',
                    component: timu1,
                    meta: {
                        title: "题目列表",

                    }
                },
                {
                    path: '/timu2',
                    component: timu2,
                    meta: {
                        title: "新建题目",

                    }
                },
                {
                    path: '/timu3',
                    component: timu3,
                    meta: {
                        title: "试卷预览",

                    }
                },

            ]
        },


    ]
})

iView.LoadingBar.config({
    color: " skyblue"
})



export default router
var vm = new Vue()
    //前置守卫
router.beforeEach((to, from, next) => {
        // iView.LoadingBar.start();
        vm.$Loading.start();
        if (to.meta && to.meta.title) document.title = "[OA] - " + to.meta.title;
        next()
    }),
    //后置守卫
    router.afterEach((to, from) => {
        vm.$Loading.finish();
        // iView.LoadingBar.finish();
    })