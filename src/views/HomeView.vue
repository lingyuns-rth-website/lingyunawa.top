<script setup lang="ts">
    import { onMounted, ref } from "vue";
    import { useRouter } from "vue-router";
    // Components
    import Avatar from "@/components/Avatar.vue";
    import IconButton from "@/components/IconTextButton.vue";
    // Icons
    import TwemojiFlagChina from "@/icons/TwemojiFlagChina.vue";
    import MdiMinecraft from "@/icons/MdiMinecraft.vue";
    import MdiCodeBracesBox from "@/icons/MdiCodeBracesBox.vue";
    import OcticonProject16 from "@/icons/OcticonProject16.vue";
    import OcticonOrganization16 from "@/icons/OcticonOrganization16.vue";
    
    const greeting = ref<HTMLTitleElement>();
    
    const typeText = (element: HTMLElement, text: string, interval = 100) => {
        let index = 0;
        
        function insertNextLetter() {
            if (index < text.length) {
                element.textContent += text[index];
                index++;
                setTimeout(insertNextLetter, interval);
            }
        }
        
        insertNextLetter();
    };
    
    const $router = useRouter();
    
    onMounted(() => {
        const greetingEl = greeting.value;
        if (!greetingEl) return;
        typeText(greetingEl, "Welcome to Jim's Personal Website!", 50);
    });
</script>

<template>
    <main>
        <Avatar></Avatar>
        <div id="right">
            <div class="container" vly-fade-u="">
                <h1 class="greeting" ref="greeting"></h1>
                <h1 class="greeting holder">Welcome to Jim's Personal Website!</h1>
            </div>
            <p vly-fade-u1="">Hello! My name is Jim Lin. Welcome to my personal website.</p>
            <p vly-fade-u2="">I'm a G8 Student, live in China
                <TwemojiFlagChina style="transform: translate(-2px, 3px); margin-right: -0.3em" />
                . Learning Programming Technique for 4 years.
            </p>
            <p vly-fade-u3="">I enjoy
                <MdiMinecraft style="transform: translate(-2px, 3px); margin-right: -0.3em" />
                Minecraft and
                <MdiCodeBracesBox style="transform: translate(-2px, 3px); margin-right: -0.3em" />
                Coding.
            </p>
            <div class="button-container" vly-fade-u4="">
                <IconButton @click="$router.push('/projects')" vly-fade-u5="" :icon="OcticonProject16">My Projects</IconButton>
                <IconButton @click="$router.push('/organizations')" vly-fade-u5="" :icon="OcticonOrganization16">My Organizations</IconButton>
            </div>
        </div>
    </main>
</template>

<style scoped lang="scss">
    main {
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 96px;
        
        div#right {
            div.container {
                position: relative;
                
                h1.greeting {
                    font-size: 3rem;
                    margin: 0;
                    
                    &.holder {
                        color: transparent;
                        position: relative;
                        height: 1px;
                    }
                }
            }
            
            p {
                font-size: 1.2rem;
            }
            
            div.button-container {
                background-color: rgba(var(--neutral-60-rgb), 0.5);
                padding: 8px 12px;
                border-radius: 8px;
                display: flex;
                align-items: center;
                gap: 8px;
            }
        }
    }
</style>