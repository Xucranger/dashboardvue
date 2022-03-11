<template>
    <div class="manage_page">

        <el-container>

            <el-aside
                    style="background: #2a3f54"
                    width="auto"
                    @mouseenter.native="collapseClose"
                    @mouseleave.native="collapseOpen">
                <el-menu
                        active-text-color="#ffd04b"
                        background-color="#2a3f54"
                        class="el-menu-vertical"
                        default-active="2"
                        text-color="#fff"
                        @open="handleOpen"
                        @close="handleClose"
                        :collapse="isCollapse"
                >
                    <div v-if="!isCollapse">
                        <el-menu-item index="1" style="">
                            <el-icon size="30px">
                                <icon-menu/>
                            </el-icon>
                            <span style="font-size: x-large">后台管理仪表盘</span>
                        </el-menu-item>
                    </div>

                    <div v-if="!isCollapse">
                        <el-menu-item index="2" style="height: 100px">
                            <el-avatar shape="circle" :size="60" :src="squareUrl"></el-avatar>
                            <div style=" float: left;padding-left: 40px">
                                <div style="line-height: 30px">Welcome, <br/>Xu Hexiang</div>
                            </div>
                        </el-menu-item>
                    </div>

                    <el-sub-menu index="3">
                        <template #title>
                            <el-icon>
                                <location/>
                            </el-icon>
                            <span>Navigator One</span>
                        </template>
                        <el-menu-item-group title="Group One" class="group1">
                            <el-menu-item index="1-1">item one</el-menu-item>
                            <el-menu-item index="1-2">item one</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="Group Two">
                            <el-menu-item index="1-3">item three</el-menu-item>
                        </el-menu-item-group>
                        <el-sub-menu index="1-4">
                            <template #title>item four</template>
                            <el-menu-item index="1-4-1">item one</el-menu-item>
                        </el-sub-menu>
                    </el-sub-menu>
                    <el-menu-item index="4">
                        <el-icon>
                            <icon-menu/>
                        </el-icon>
                        <span>Navigator Two</span>
                    </el-menu-item>
                    <el-menu-item index="5" disabled>
                        <el-icon>
                            <document/>
                        </el-icon>
                        <span>Navigator Three</span>
                    </el-menu-item>
                    <el-menu-item index="6">
                        <el-icon>
                            <setting/>
                        </el-icon>
                        <span>Navigator Four</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-container>
                <el-header
                        style="background: #545c64;display: flex;align-items: center">
                    <div class="left">
                        <el-radio-group style="">
                            <el-radio-button @click.prevent="collapseStatus">锁定</el-radio-button>
                        </el-radio-group>
                    </div>
                    <div class="right">
                        <el-dropdown trigger="click">
                            <span class="el-dropdown-link"
                                  style="color:var(--el-color-primary-light-9);display: flex;align-items: center"

                            >
                                <span style="margin-right: 10px">
                                    <el-avatar shape="circle" :size="small" :src="squareUrl"></el-avatar>
                                </span>
                                 <span>
                                    XuHexiang
                                 </span>
                                    <el-icon class="el-icon--right"><caret-bottom/></el-icon>

                            </span>
                            <template #dropdown>
                                <el-dropdown-menu>
                                    <el-dropdown-item class="clearfix">
                                        资料修改
                                        <el-badge class="mark" :value="12"/>
                                    </el-dropdown-item>
                                    <el-dropdown-item class="clearfix">
                                        信息
                                        <el-badge class="mark" :value="3"/>
                                    </el-dropdown-item>
                                </el-dropdown-menu>
                            </template>
                        </el-dropdown>

                    </div>
                </el-header>
                <el-main class="main">
                    <board></board>
                </el-main>
                <!--                <el-footer>-->
                <!--                    <div  class="headnav">-->
                <!--                    </div>-->
                <!--                </el-footer>-->
            </el-container>

        </el-container>

    </div>
</template>

<script setup lang="js">
    import {
        Location,
        Document,
        Menu as IconMenu,
        Setting,
        CaretBottom
    } from '@element-plus/icons'
    import MenuTree from '@/components/MenuTree'
    import board from "@/components/dashboard/board";
    import guard from "@/components/dashboard/guard";

    export default {
        name: "SiderBar.vue",
        components: {
            Location,
            Document,
            IconMenu,
            Setting,
            CaretBottom,
            MenuTree,
            board,
            guard
        },
        data() {
            return {
                squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
                collapseBtnClick: false,
                isCollapse: false,


            }
        },
        methods: {
            collapseStatus() {
                this.collapseBtnClick = true;
                this.isCollapse = !this.isCollapse;
            },
            collapseOpen() {
                if (this.collapseBtnClick) return;
                this.isCollapse = true;
            },
            collapseClose() {
                if (this.collapseBtnClick) return;
                this.isCollapse = false;
            },

            subtitleIsExist(item) {
                if (item) {
                    return true
                } else {
                    return false
                }
            }

        }
    }
</script>

<style scoped>
    .manage_page {
        overflow-x: hidden;

    }

    .el-menu-vertical {
        height: 100vh;
        border: 0;


    }

    :deep(.el-menu-item-group) {

    }

    /deep/ .el-sub-menu .el-menu-item {
        min-width: 100px;
    }

    el-table {

    }

    .group1 {
        width: 100%;

    }

    .el-menu-demo {


    }

    .right {
        width: max-content;
        position: absolute;
        right: 10px;
        background: #545c64;
        display: flex;
        align-items: center;
    }

    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }

    .main {
        background: white;
        padding-left: 20px;
        padding: 0;
    }

</style>