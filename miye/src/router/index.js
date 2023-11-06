import { createRouter, createWebHistory } from "vue-router";
import ContactView from "@/views/ContactView.vue";
import HomeView from "@/views/HomeView.vue";
import ServicesView from "@/views/ServicesView.vue";
const routes = [
    {
        path: "/",
        name: "HomeView",
        component: HomeView,

    },
    {
        path: "/servicios",
        name: "ServicesView",
        component: ServicesView,

    },
    {
        path: "/contacto",
        name: "ContactView",
        component: ContactView
        

    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;