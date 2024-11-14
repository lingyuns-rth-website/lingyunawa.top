<script setup lang="ts">
    // Icons
    import TwemojiFlagChina from "@/icons/TwemojiFlagChina.vue";
    // Skills
    import DeviconHtml5 from "@/icons/skills/DeviconHtml5.vue";
    import DeviconCss3 from "@/icons/skills/DeviconCss3.vue";
    import DeviconJavascript from "@/icons/skills/DeviconJavascript.vue";
    import DeviconTypescript from "@/icons/skills/DeviconTypescript.vue";
    import DeviconVuejs from "@/icons/skills/DeviconVuejs.vue";
    import DeviconVitejs from "@/icons/skills/DeviconVitejs.vue";
    import DeviconTauri from "@/icons/skills/DeviconTauri.vue";
    import DeviconTailwindcss from "@/icons/skills/DeviconTailwindcss.vue";
    import DeviconSass from "@/icons/skills/DeviconSass.vue";
    import DeviconRust from "@/icons/skills/DeviconRust.vue";
    import DeviconNodejs from "@/icons/skills/DeviconNodejs.vue";
    import DeviconPython from "@/icons/skills/DeviconPython.vue";
    import DeviconVscode from "@/icons/skills/DeviconVscode.vue";
    import DeviconVisualstudio from "@/icons/skills/DeviconVisualstudio.vue";
    import DeviconGithubcodespaces from "@/icons/skills/DeviconGithubcodespaces.vue";
    import DeviconNpm from "@/icons/skills/DeviconNpm.vue";
    import DeviconPnpm from "@/icons/skills/DeviconPnpm.vue";
    import DeviconYarn from "@/icons/skills/DeviconYarn.vue";
    import DeviconGithub from "@/icons/skills/DeviconGithub.vue";
    import DeviconIntellij from "@/icons/skills/DeviconIntellij.vue";
    import DeviconWebstorm from "@/icons/skills/DeviconWebstorm.vue";
    import DeviconWeblate from "@/icons/skills/DeviconWeblate.vue";
    import DeviconSqlite from "@/icons/skills/DeviconSqlite.vue";
    import DeviconMysql from "@/icons/skills/DeviconMysql.vue";
    import DeviconCloudflare from "@/icons/skills/DeviconCloudflare.vue";
    import DeviconPhotoshop from "@/icons/skills/DeviconPhotoshop.vue";
    import DeviconPremierepro from "@/icons/skills/DeviconPremierepro.vue";
    import DeviconWindows8 from "@/icons/skills/DeviconWindows8.vue";
    import DeviconWindows11 from "@/icons/skills/DeviconWindows11.vue";
    import DeviconChrome from "@/icons/skills/DeviconChrome.vue";
    import DeviconUbuntu from "@/icons/skills/DeviconUbuntu.vue";
    import DeviconDebian from "@/icons/skills/DeviconDebian.vue";
</script>

<template>
    <main>
        <h1>Introduction</h1>
        <ul>
            <li>💻 A learning indie developer</li>
            <li>🧠 Always try new cool ideas</li>
            <li>🏫 G8 Student in Fuzhou, Fujian,
                <TwemojiFlagChina style="transform: translate(-2px, 3px); margin-left: 2px; margin-right: -0.3em" />
                China
            </li>
        </ul>
        <br><br>
        <h1>Developing Skills</h1>
        <ul>
            <li>
                <h2>Frontend</h2>
                <p>
                    <DeviconHtml5 />
                    <DeviconCss3 />
                    <span style="margin: 0 2px" />
                    <DeviconJavascript />
                    <span style="margin: 0 3px" />
                    <DeviconTypescript />
                    <span style="margin: 0 16px" />
                    <DeviconTailwindcss />
                    <span style="margin: 0 3px" />
                    <DeviconSass />
                    <span style="margin: 0 16px" />
                    <DeviconVuejs />
                    <span style="margin: 0 3px" />
                    <DeviconVitejs />
                    <span style="margin: 0 2px" />
                    <DeviconTauri />
                </p>
            </li>
            <li>
                <h2>Backend</h2>
                <p>
                    <DeviconRust />
                    <span style="margin: 0 16px" />
                    <DeviconNodejs />
                    <DeviconPython />
                    <span style="margin: 0 16px" />
                    <DeviconSqlite />
                    <span style="margin: 0 8px" />
                    <DeviconMysql style="transform: scale(1.3)" />
                </p>
            </li>
            <li>
                <h2>Tools</h2>
                <p>
                    <DeviconVscode />
                    <span style="margin: 0 6px" />
                    <DeviconVisualstudio />
                    <span style="margin: 0 4px" />
                    <DeviconIntellij />
                    <span style="margin: 0 4px" />
                    <DeviconWebstorm />
                    <span style="margin: 0 4px" />
                    <DeviconGithubcodespaces />
                    <span style="margin: 0 22px" />
                    <DeviconNpm />
                    <span style="margin: 0 4px" />
                    <DeviconPnpm />
                    <span style="margin: 0 4px" />
                    <DeviconYarn />
                </p>
                <p>
                    <DeviconGithub />
                    <span style="margin: 0 4px" />
                    <DeviconCloudflare />
                    <span style="margin: 0 4px" />
                    <DeviconWeblate />
                    <span style="margin: 0 22px" />
                    <DeviconPhotoshop />
                    <span style="margin: 0 4px" />
                    <DeviconPremierepro />
                </p>
            </li>
            <li>
                <h2>Platform</h2>
                <p>
                    <DeviconWindows8 />
                    <span style="margin: 0 4px" />
                    <DeviconWindows11 />
                    <span style="margin: 0 2px" />
                    <DeviconUbuntu />
                    <span style="margin: 0 1px" />
                    <DeviconDebian />
                    <span style="margin: 0 16px" />
                    <DeviconChrome />
                </p>
            </li>
        </ul>
        <br><br>
        <h1 style="margin-bottom: -8px;">GitHub Overview</h1>
        <p>Update at: Nov. 15</p>
        <img src="/images/ghcont.png"
             alt="JingHai-Lingyun's Github Commit Graph" style="border-radius: 12px; margin-left: -2px;" />
    </main>
</template>

<style scoped lang="scss">
    main {
        padding: 96px 128px 48px;
        
        h1 {
            margin-top: 0;
        }
        
        ul li {
            font-size: 1.2rem;
            
            h2 {
                margin: 0;
                font-size: 1.5rem;
            }
            
            p {
                font-size: 3rem;
                margin: 8px 0 0;
            }
        }
    }
</style>