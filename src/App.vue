<script setup lang="ts">
    import { RouterView, useRoute } from "vue-router";
    import Header from "@/components/Header.vue";
    
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    const handleThemeChange = (isDark: boolean) => {
        isDark ? document.body.classList.add("dark") : document.body.classList.remove("dark");
    };
    handleThemeChange(prefersDark.matches);
    prefersDark.addEventListener("change", (e) => handleThemeChange(e.matches));
    
    const route = useRoute();
</script>

<template>
    <div id="bg_img"></div>
    <div class="Main">
        <div class="Header">
            <Header v-if="route.name !== `home`" />
        </div>
        <RouterView />
    </div>
</template>

<style scoped lang="scss">
    div#bg_img {
        position: fixed;
        width: 100vw;
        height: 100vh;
        background-image: url("https://lingyunawa.top/images/background.webp");
        background-repeat: no-repeat;
        background-size: cover;
        z-index: -1;
    }
    
    div.Main {
        width: 100%;
        background-color: var(--main-bg);
        
        div.Header {
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 999;
        }
    }
</style>
