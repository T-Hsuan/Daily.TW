import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const routesUser = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/plan",
        name: "plan",
        component: () =>
            import(/* webpackChunkName: "plan" */ "@/views/PlanView.vue"),
    },
    {
        path: "/trip",
        name: "trip",
        component: () =>
            import(/* webpackChunkName: "trip" */ "@/views/TripView.vue"),
    },
    {
        path: "/oott",
        name: "oott",
        component: () =>
            import(/* webpackChunkName: "oott" */ "@/views/OottView.vue"),
    },
    {
        path: "/ticket",
        name: "ticket",
        // component: TicketView
        component: () =>
            import(/* webpackChunkName: "ticket" */ "@/views/TicketView.vue"),
    },
    {
        path: "/about",
        name: "about",
        component: () =>
            import(/* webpackChunkName: "about" */ "@/views/AboutView.vue"),
    },
    {
        path: "/login",
        name: "login",
        component: () =>
            import(/* webpackChunkName: "login" */ "@/views/LoginView.vue"),
    },
    {
        path: "/register",
        name: "register",
        component: () =>
            import(
                /* webpackChunkName: "register" */ "@/views/RegisterView.vue"
            ),
    },
    {
        path: "/cart",
        name: "cart",
        component: () =>
            import(/* webpackChunkName: "cart" */ "@/views/CartView.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: routesUser,
});

export default router;
