<script setup lang="ts">
    // Components
    import IconButton from "@/components/IconTextButton.vue";
    // Icon
    import OcticonBrowser16 from "@/icons/OcticonBrowser16.vue";
    import OcticonMarkGithub16 from "@/icons/OcticonMarkGithub16.vue";
    
    const props = defineProps<{
        imageUrl?: string;
        projectName: string;
        websiteUrl?: string;
        githubUrl?: string;
    }>();
    
    const openWebsite = (url: string) => {
        if (!url) return;
        window.open(url, "_blank");
    };
</script>

<template>
    <div class="project-card">
        <div class="container">
            <img v-if="imageUrl" :src="imageUrl" alt="" width="152" height="152" />
            <div>
                <span class="project-name">{{ props.projectName }}</span>
                <slot name="project-description"></slot>
            </div>
        </div>
        <hr v-if="props.websiteUrl || props.githubUrl" />
        <div class="project-links">
            <IconButton @click="openWebsite(props.websiteUrl)" style="border-radius: 999px;" v-if="props.websiteUrl"
                        :icon="OcticonBrowser16">Project
                Website
            </IconButton>
            <IconButton @click="openWebsite(props.githubUrl)" style="border-radius: 999px;" v-if="props.githubUrl"
                        :icon="OcticonMarkGithub16">Project
                GitHub Repository
            </IconButton>
        </div>
    </div>
</template>

<style scoped lang="scss">
    div.project-card {
        background-color: rgba(var(--neutral-60-rgb), 1);
        border-radius: 10px;
        padding: 24px 48px 20px;
        margin-bottom: 24px;
        
        div.container {
            display: flex;
            gap: 24px;
            margin-bottom: 8px;
            
            img {
                border-radius: 16px;
            }
            
            div {
                span.project-name {
                    font-size: 3rem;
                    font-weight: 600;
                    margin-bottom: 12px;
                }
            }
        }
        
        div.project-links {
            display: flex;
            gap: 12px;
        }
    }
</style>