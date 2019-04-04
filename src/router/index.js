import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home.vue';
import CallList from '../components/CallList.vue';
import CallRecord from '../components/CallRecord.vue';
// import Client from '../components/Client.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/CallList',
            name: 'CallList',
            component: CallList
        },
        {
            path: '/CallRecord',
            name: 'CallRecord',
            component: CallRecord
        },
        // {
        //     path: '/:Client',
        //     name: 'Client',
        //     component: Client
        // },
    ]
})
