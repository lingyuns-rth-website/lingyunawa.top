<template>
    <button class="icon-button">
        <slot></slot>
    </button>
</template>

<style scoped lang="scss">
    button.icon-button {
        width: 48px;
        height: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
        font-size: 1.2rem;
        color: var(--neutral-90);
        background-color: transparent;
        border: none;
        border-radius: 100%;
        cursor: pointer;
        transition: background-color .2s ease-in-out;
        
        &:hover {
            background-color: rgba(var(--neutral-10-rgb), 0.75);
        }
    }
</style>
