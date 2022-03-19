<template>
    <div class="manage_page">
        <el-container>
            <el-aside
                    style="background: #2a3f54"
                    width="auto"
                    @mouseenter.native="collapseClose"
                    @mouseleave.native="collapseOpen">
                <!--                我来组成四肢！-->
                <SiderBar isCollapse="{{this.isCollapse}}" ref="myside" ></SiderBar>
            </el-aside>
            <el-container>
                <!--                我来组成头部！-->
                <el-header class="myhead">
                    <myheader></myheader>
                </el-header>
                <!--                我来组成身体！-->
                <el-main class="main">
                    <router-view :key="key" ref="mybody"></router-view>
<!--                    <router-view/>-->
                </el-main>
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
    import myheader  from "@/components/dashboard/myheader";
    import SiderBar from "@/components/SiderBar";
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
            guard,
            myheader,
            SiderBar
        },
        data() {
            return {
                squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
                mywidth:19
            }
        },
        provide(){
            return {
                collapseStatus: this.collapseStatus,
                cancelcollapseStatus: this.cancelcollapseStatus,
                collapseOpen: this.collapseOpen
            }
        },
        // computed:{
        //     key() {
        //         return this.$route.name !== undefined? this.$route.name +new Date(): this.$route +new Date()
        //     }
        // },
        methods: {
            //加载loading
            openloading() {
                this.loading = this.$loading({
                    lock: true,
                    text: "Loading",
                    spinner: "el-icon-loading",
                    background: "rgba(0, 0, 0, 0.7)",
                    target: document.querySelector(".main") // 指定区域
                });
            },


            collapseStatus() {
                this.$refs.myside.collapseStatus();
            },
            cancelcollapseStatus(){
                this.$refs.myside.cancelcollapseStatus();
            },
            collapseOpen() {
                this.$refs.myside.collapseOpen();
            },
            collapseClose() {
                this.$refs.myside.collapseClose();

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
        background: #F7F7F7;
        padding-left: 20px;
        padding: 0;
    }
    .myhead{
        background: #545c64;
        display:flex;
        align-items:center;
    }
</style>