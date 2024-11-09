<script setup lang="ts">
    // Components
    import IconButton from "@/components/IconButton.vue";
    // Icon
    import OcticonChevronRight12 from "@/icons/OcticonChevronRight12.vue";
    
    const props = defineProps<{
        imageUrl?: string;
        orgName: string;
        displayName?: string;
    }>();
    
    const openOrganizationWebsite = (orgName: string) => {
        if (!orgName) return;
        window.open(`https://github.com/${orgName}`, "_blank");
    };
</script>

<template>
    <div class="project-card">
        <div class="container">
            <img v-if="imageUrl" :src="imageUrl" alt="" width="96" height="96" />
            <div>
                <span class="org-name">{{ props.displayName ?? props.orgName }}</span>
                <slot name="org-description"></slot>
            </div>
            <IconButton @click="openOrganizationWebsite(props.orgName)"
                        style="margin: auto; width: 32px; height: 32px;">
                <OcticonChevronRight12 />
            </IconButton>
        </div>
    </div>
</template>

<style scoped lang="scss">
    div.project-card {
        background-color: rgba(var(--neutral-60-rgb), 1);
        border-radius: 10px;
        padding: 24px 20px 20px 36px;
        margin-bottom: 24px;
        
        div.container {
            display: flex;
            gap: 24px;
            margin-bottom: 8px;
            
            img {
                border-radius: 16px;
            }
            
            div {
                span.org-name {
                    font-size: 2rem;
                    font-weight: 600;
                    margin-bottom: 12px;
                }
            }
        }
    }
</style>