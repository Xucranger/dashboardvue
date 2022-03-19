<template>
    <div class="process">
        <el-collapse v-model="activeNames" accordion>
            <el-collapse-item :name="1">
                <template #title>
                    <div class="title">
                        {{this.processname}}
                    </div>
                </template>
                <div class="content">
                    <div class="children1">
                        <el-row type="flex" align="middle">
                            <el-col :span="12" style="position: relative">
<!--                                正常状态下-->
                                <span class="left" v-if="this.processStatus=='start'">
                                    <el-icon color="#00aa88" style="vertical-align: middle"><Compass/></el-icon>
                                    <text style="vertical-align: middle;padding-left: 20px;font-size: 20px">工作中</text>
                                </span>
<!--                                重启状态下-->
                                <span class="left" v-if="this.processStatus=='rebooting'">
                                    <el-icon color="#de790a" style="vertical-align: middle"><Compass/></el-icon>
                                    <text style="vertical-align: middle;padding-left: 20px;font-size: 20px;color: #de790a" >重启中</text>
                                </span>
<!--                                关闭状态下-->
                                <span class="left" v-if="this.processStatus=='close'">
                                    <el-icon color="#d40303" style="vertical-align: middle"><Compass/></el-icon>
                                    <text style="vertical-align: middle;padding-left: 20px;font-size: 20px;color: #d40303">离线中</text>
                                </span>
                                <el-divider direction="vertical"
                                            style="float: right;position: absolute;height: 60%;right: 0;top: 20%"></el-divider>
                            </el-col>

                            <el-col :span="12">
                                <div style="float: left;">
                                    <text style="text-align: center;font-size: 13px;padding:0 20px;">操作</text>
                                    <el-icon color="#00aa88"
                                             style="font-size: 13px;display: inline-block;padding-left: 40px;vertical-align: middle">
                                        <Compass/>
                                    </el-icon>
                                    <el-button type="text" style="text-align: center;font-size: 13px;color: #545c64;" @click="reboot()" v-if="this.processStatus!='rebooting'">重启</el-button>
                                    <el-button disabled type="text"  style="text-align: center;font-size: 13px;color: #c7cdd3;"  v-if="this.processStatus=='rebooting'">重启中..</el-button>
<!--                                    <text >重启</text>-->
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </div>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
    import {Compass} from '@element-plus/icons'

    export default {
        name: "process",
        components: {
            Compass
        },
        data() {
            return {
                activeNames: 1,
            }
        },
        inject: ["changeStatus"],
        methods:{
          reboot(){
            this.changeStatus(this.processname,"rebooting")
          }
        },
        props: {
            processname: {
                type: String,
                default: () => {
                    return "人脸识别网页";
                }
            },
            processStatus: {
                type: String,
                default: () =>{
                    return "close"
                }
            }
        }
    }
</script>

<style scoped>
    .left {
        font-size: 40px;
        float: left;
        padding-left: 20px;

    }

    .title {

        font-size: 15px;

    }

    /deep/ .el-collapse-item__header {
        background: #F2F5F7;
        padding-left: 10px;
        padding-text-outline: 10px;;
        padding-bottom: 10px;
        border-bottom: #F2F5F7;
    }

    /deep/ .el-collapse-item__content {
        padding-bottom: 0;
    }

    .children1 {
        padding: 0 16px;
    }

    .process:hover .children1 {
        background: #F2F5F7;
    }
</style>