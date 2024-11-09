<script setup lang="ts">
    const props = defineProps<{
        icon: any
    }>();
</script>

<template>
    <button class="icon-button">
        <span class="icon-button__icon">
            <component :is="props.icon" />
        </span>
        <span class="icon-button__text">
            <slot></slot>
        </span>
    </button>
</template>

<style scoped lang="scss">
    button.icon-button {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 1.2rem;
        color: var(--neutral-90);
        background-color: transparent;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        padding: 4px 12px;
        transition: background-color .2s ease-in-out;
        
        &:hover {
            background-color: rgba(var(--neutral-10-rgb), 0.75);
        }
        
        span.icon-button__icon {
            transform: translateY(2px);
        }
    }
</style>
