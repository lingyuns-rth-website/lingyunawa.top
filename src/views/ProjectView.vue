<script setup lang="ts">
    // Components
    import ProjectCard from "@/components/ProjectCard.vue";
    // Icons
    import MdiMinecraft from "@/icons/MdiMinecraft.vue";
    import MdiGamepadVariant from "@/icons/MdiGamepadVariant.vue";
    import MdiToolbox from "@/icons/MdiToolbox.vue";
</script>

<template>
    <main>
        <h1 vly-fade-u1>
            <MdiMinecraft style="transform: translateY(5px);" />
            About Minecraft
        </h1>
        <div class="project-container">
            <div class="left">
                <ProjectCard image-url="/images/projects/LogoYunMCL.webp" project-name="YunMCL"
                             github-url="https://github.com/Yuns-Lab/YunMCL" vly-fade-u2>
                    <template #project-description>
                        <p style="font-size: 1.2em; margin: 4px 0;">Yun Launchers：Minecraft Client Launcher</p>
                        <p style="font-size: 1.2em; margin: 4px 0;">This is a Minecraft client Launcher made by the
                            Yuns-Lab Dev Group.</p>
                        <p style="font-size: 1.2em; margin: 4px 0;">Advantages: cross-platform; lightweight;
                            easy to get started</p>
                    </template>
                </ProjectCard>
                <ProjectCard image-url="/images/projects/LogoYunMCCM.webp" project-name="YunMCCM"
                             vly-fade-u3>
                    <!-- github-url="https://github.com/Yuns-Lab/YunMCCM" -->
                    <template #project-description>
                        <p style="font-size: 1.2em; margin: 4px 0;">Yun Launchers：Minecraft Console Client (MCC)
                            Manager</p>
                        <p style="font-size: 1.2em; margin: 4px 0;">This is a MCC Manager made by the Yuns-Lab Dev
                            Team.</p>
                        <p style="font-size: 1.2em; margin: 4px 0;">Advantages: Cross-platform; visualization of
                            functions.</p>
                    </template>
                </ProjectCard>
            </div>
            <div class="right">
                <ProjectCard image-url="/images/projects/LogoYunMSL.webp" project-name="YunMSL" vly-fade-u2>
                    <!-- github-url="https://github.com/Yuns-Lab/YunMSL" -->
                    <template #project-description>
                        <p style="font-size: 1.2em; margin: 4px 0;">Yun Launchers: Minecraft Server Launcher</p>
                        <p style="font-size: 1.2em; margin: 4px 0;">This is a Minecraft server Launcher made by the
                            Yuns-Lab Dev Team. </p>
                        <p style="font-size: 1.2em; margin: 4px 0;">Advantages: cross-platform; rich
                            function; suitable for technical reserve operation and
                            maintenance personnel.</p>
                    </template>
                </ProjectCard>
            </div>
        </div>
        <h1 vly-fade-u4>
            <MdiGamepadVariant style="transform: translateY(5px); color: #b46fff;" />
            MiniGames
        </h1>
        <div class="project-container">
            <div class="left">
                <ProjectCard image-url="/images/projects/WordleGame.webp" project-name="WordleGame"
                             website-url="https://yuns-lab.github.io/WordleGame/"
                             github-url="https://github.com/Yuns-Lab/WordleGame" vly-fade-u5>
                    <template #project-description>
                        <p style="font-size: 1.2em; margin: 4px 0;">Wordle Game</p>
                        <p style="font-size: 1.2em; margin: 4px 0;">Free Wordle game website, made by myself</p>
                        <p style="font-size: 1.2em; margin: 4px 0;">The letter prompts to have a small bug, which will
                            be repaired in the future Vue version</p>
                    </template>
                </ProjectCard>
            </div>
            <!-- <div class="right"> -->
            <!-- </div> -->
        </div>
        <h1 vly-fade-u6>
            <MdiToolbox style="transform: translateY(5px); color: #ff7f50;" />
            Tools
        </h1>
        <div class="project-container">
            <div class="left">
                <ProjectCard project-name="MCSCheckTool"
                             github-url="https://github.com/Yuns-Lab/MCSCheckTool" vly-fade-u7>
                    <template #project-description>
                        <p style="font-size: 1.2em; margin: 4px 0;">Quickly, conveniently query the small tool of the MC
                            server</p>
                    </template>
                </ProjectCard>
            </div>
            <div class="right">
                <ProjectCard project-name="YunSchedule"
                             github-url="https://github.com/Yuns-Lab/YunSchedule" vly-fade-u7>
                    <template #project-description>
                        <p style="font-size: 1.2em; margin: 4px 0;">Time planning tools, but it has not actually started production ...</p>
                    </template>
                </ProjectCard>
            </div>
        </div>
    </main>
</template>

<style scoped lang="scss">
    main {
        padding: 96px 48px 48px;
        
        h1 {
            margin-top: 0;
        }
        
        div.project-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 24px;
            
        }
    }
</style>