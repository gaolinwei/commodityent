import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../page"
import Commodity from "../page/commodity"

Vue.use(VueRouter)

const routes = [
    {
        path: '/', component: HomePage,
        children: [
            { path: '/', component: Commodity }
        ]
    }
]
const router = new VueRouter({
    routes
})
export default router
