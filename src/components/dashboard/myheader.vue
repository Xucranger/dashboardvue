<template>
    <div class="header">
        <div class="left">
            <el-radio-group style="">
                <el-radio-button @click.prevent="abc" v-if="!this.collapseBtnClick" >锁定</el-radio-button>
                <el-radio-button @click.prevent="abc" style="margin-left: 10px" v-if="this.collapseBtnClick">展开/收缩</el-radio-button>
                <el-radio-button @click.prevent="def" style="margin-left: 10px" v-if="this.collapseBtnClick">解除锁定</el-radio-button>
            </el-radio-group>
        </div>
        <div class="right">
            <el-dropdown trigger="click">
                            <span class="el-dropdown-link"
                                  style="color:var(--el-color-primary-light-9);display: flex;align-items: center"

                            >
                                <span style="margin-right: 10px">
                                    <el-avatar shape="circle" :size="small" :src=this.userinfo.avatar></el-avatar>
                                </span>
                                 <span>
                                    {{this.userinfo.username}}
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
    </div>
</template>

<script>
    import {CaretBottom} from "@element-plus/icons"
    export default {
        name: "myheader",
        data(){
            return{
                collapseBtnClick:false,
                userinfo:this.$store.getters.getUser
            }
        },
        components:{
            CaretBottom
        },
        inject: ["collapseStatus","cancelcollapseStatus"],
        methods: {
            abc() {
                this.collapseStatus();
                this.collapseBtnClick=true;
            },
            def(){
                this.cancelcollapseStatus();
                this.collapseBtnClick=false;
            }
        }
    }
</script>

<style scoped>
    .header{
        background: #545c64;display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .left{

    }
    .right{
        width: max-content;
        position: absolute;
        right: 10px;
        background: #545c64;
        display: flex;
        align-items: center;
    }
</style>