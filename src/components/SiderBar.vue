<template>
    <div class="myside">
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
                <el-menu-item index="1" style="" >
                    <el-icon size="30px">
                        <icon-menu/>
                    </el-icon>
                    <span style="font-size: x-large">后台管理仪表盘</span>
                </el-menu-item>
            </div>
            <div v-if="!isCollapse">
                <el-menu-item index="2" style="height: 100px">
                    <el-avatar shape="circle" :size="60" :src=this.userinfo.avatar></el-avatar>
                    <div style=" float: left;padding-left: 40px">
                        <div style="line-height: 30px">Welcome, <br/>{{this.userinfo.username}}</div>
                    </div>
                </el-menu-item>
            </div>
            <el-menu-item index="3" @click.native="this.$router.push('/overview')">
                <el-icon>
                    <Odometer/>
                </el-icon>
                <span>总览</span>
            </el-menu-item>
            <el-sub-menu index="4">
                <template #title>
                    <el-icon>
                        <location/>
                    </el-icon>
                    <span>设备列表</span>
                </template>
                <el-menu-item
                        v-for="item in tmns"
                        :key="item.id"
                        :index="item.id"
                        @click.native="this.$router.push({path:'/dashboard/'+item.id})"
                >
                    <span>{{item.area}}</span>
                </el-menu-item>
            </el-sub-menu>
        </el-menu>
    </div>
</template>

<script setup lang="js">
    import {
        Location,
        Document,
        Menu as IconMenu,
        Setting,
        CaretBottom,
        Monitor,
        Odometer
    } from '@element-plus/icons'
    import {getTmnsApi} from "@/utils/api";

    export default {
        name: "SiderBar.vue",
        props:{
            isCollapse: {
              type: Boolean,
              default: () => {
                  return true;
              }
             },
        },
        components: {
            Location,
            Document,
            IconMenu,
            Setting,
            CaretBottom,
            Monitor,
            Odometer
        },
        data() {
            return {
                collapseBtnClick: false,
                isCollapse: false,
                userinfo:this.$store.getters.getUser,
                tmns:''
            }
        },
        mounted() {
            this.getTmns();
        },
        computed:{
            key() {
                return this.$route.name !== undefined? this.$route.name +new Date(): this.$route +new Date()
            }
        },
        methods: {
            //获取tmns数据
            getTmns(){
                const _this = this;
              getTmnsApi().then(res=>{
                  if(res.data.code=="200"){
                      _this.tmns=res.data.data
                  }
                  else {
                      alert(res.data.msg)
                  }

              })
            },
            // 锁定侧边栏
            collapseStatus() {
                if(!this.collapseBtnClick){
                    this.collapseBtnClick = true;
                }
                else {
                    this.isCollapse = !this.isCollapse;
                }
            },
            //取消锁定侧边栏
            cancelcollapseStatus(){
                this.collapseBtnClick = false;
                this.isCollapse = true;
            },
            //关闭侧边栏
            collapseOpen() {
                if (this.collapseBtnClick) return;
                this.isCollapse = true;
            },
            //打开侧边栏
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
    .myside {
        overflow-x: hidden;
    }
    .el-menu-vertical {
        height: 100vh;
        border: 0;


    }
    /deep/ .el-sub-menu .el-menu-item {
        min-width: 100px;
    }

    .group1 {
        width: 100%;
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

</style>