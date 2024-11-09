<script setup lang="ts">
    import { useRoute } from "vue-router";
    // Components
    import IconButton from "@/components/IconTextButton.vue";
    // Icons
    import OcticonChevronLeft12 from "@/icons/OcticonChevronLeft12.vue";
    
    const route = useRoute();
</script>

<template>
    <div class="header" vly-fade-u>
        <span vly-fade-u1>My {{ route.name }}</span>
        <IconButton vly-fade-u1 @click="$router.push('/')" :icon="OcticonChevronLeft12" style="border-radius: 999px">
            Back Home
        </IconButton>
    </div>
</template>

<style scoped lang="scss">
    div.header {
        height: 50px;
        display: flex;
        align-items: center;
        background-color: rgba(var(--neutral-60-rgb), 0.5);
        box-shadow: 0 2px 6px 6px rgba(var(--neutral-10-rgb), 0.2);
        padding: 0 24px;
        margin-bottom: 24px;
        backdrop-filter: blur(12px);
        
        span {
            font-weight: 600;
            font-size: 1.5rem;
            margin-right: auto;
        }
    }
</style>