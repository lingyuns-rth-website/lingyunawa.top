import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import ProjectView from "@/views/ProjectView.vue";
import OrgView from "@/views/OrgView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView
        },
        {
            path: "/projects",
            name: "projects",
            component: ProjectView
        },
        {
            path: "/organizations",
            name: "organizations",
            component: OrgView
        }
    ]
});

export default router;
