<script setup lang="ts">
    //
    import OrgCard from "@/components/OrgCard.vue";
    // Icons
    import FluentColorPeopleTeam16 from "@/icons/FluentColorPeopleTeam16.vue";
    import SkillIconsJavaLight from "@/icons/SkillIconsJavaLight.vue";
    import MdiMinecraft from "@/icons/MdiMinecraft.vue";
</script>

<template>
    <main>
        <h1 vly-fade-u1>
            <FluentColorPeopleTeam16 style="transform: translateY(5px);" />
            Programming Teams
        </h1>
        <div class="container" vly-fade-u2>
            <div class="left">
                <OrgCard org-name="Yuns-Lab" display-name="Yun's Lab"
                         image-url="/images/organizations/Yuns-Lab.webp">
                    <template #org-description>
                        <p style="font-size: 1.2rem; margin: 2px 0;">The front-end hobby organization created by a group
                            of students</p>
                    </template>
                </OrgCard>
            </div>
            <div class="center">
                <OrgCard org-name="PCL-Community" display-name="PCL Community"
                         image-url="/images/organizations/PCL-Community.webp">
                    <template #org-description>
                        <p style="font-size: 1.2rem; margin: 2px 0;">The unofficial PCL community that is jointly
                            maintained by PCL enthusiasts and communities</p>
                    </template>
                </OrgCard>
            </div>
            <div class="right">
                <OrgCard org-name="Homeplaza-Of-PCL2" display-name="PCL HomePlaza"
                         image-url="/images/organizations/Homeplaza-Of-PCL2.webp">
                    <template #org-description>
                        <p style="font-size: 1.2rem; margin: 2px 0;">The exchange community created by the PCL homepage author and enthusiasts</p>
                    </template>
                </OrgCard>
            </div>
        </div>
        <h1 vly-fade-u3>
            <SkillIconsJavaLight style="transform: translateY(5px);" />
            Java Programming: Minecraft Mod
        </h1>
        <div class="container" vly-fade-u4>
            <div class="left">
                <OrgCard org-name="NewSignal-of-Create" display-name="NewSignal of C..."
                         image-url="/images/organizations/NewSignal-of-Create.webp">
                    <template #org-description>
                        <p style="font-size: 1.2rem; margin: 2px 0;">Adding China Railway Signal into CreateMod!</p>
                    </template>
                </OrgCard>
            </div>
            <div class="center">
                <OrgCard org-name="KuaYueTeam" display-name="KuaYue Team"
                         image-url="/images/organizations/KuaYueTeam.webp">
                    <template #org-description>
                        <p style="font-size: 1.2rem; margin: 2px 0;">Developer Team of Minecraft Mod: KuaYue</p>
                    </template>
                </OrgCard>
            </div>
        </div>
        <h1 vly-fade-u5>
            <MdiMinecraft style="transform: translateY(5px);" />
            Minecraft Community
        </h1>
        <div class="container" vly-fade-u6>
            <div class="left">
                <OrgCard org-name="CIR-OpenSource" display-name="CIR OpenSource"
                         image-url="/images/organizations/CIR-OpenSource.webp">
                    <template #org-description>
                        <p style="font-size: 1.2rem; margin: 2px 0;">Occasionally open source community of Minecraft CIR Server</p>
                    </template>
                </OrgCard>
            </div>
            <div class="center">
                <OrgCard org-name="RIT-OpenSource" display-name="RIT OpenSource"
                         image-url="/images/organizations/RIT-OpenSource.webp">
                    <template #org-description>
                        <p style="font-size: 1.2rem; margin: 2px 0;">Occasionally open source community of Minecraft CIR Server</p>
                        <p style="font-size: 1.2rem; margin: 2px 0;">At present, the server has stopped operating, keep it only for memorial</p>
                    </template>
                </OrgCard>
            </div>
        </div>
    </main>
</template>

<style scoped lang="scss">
    main {
        padding: 64px 48px 48px;
        min-height: calc(100vh - 128px);
        
        div.container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 32px;
        }
    }
</style>