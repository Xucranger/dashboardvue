<template>
    <div class="process">
        <el-collapse v-model="activeNames" accordion>
            <el-collapse-item :name="1">
                <template #title>
                    <div class="title">
                        {{this.process}}
                    </div>
                </template>
                <div class="content">
                    <div class="children1">
                        <el-row type="flex" align="middle">
                            <el-col :span="12" style="position: relative">
                                <span class="left">
                                    <el-icon color="#00aa88" style="vertical-align: middle"><Compass/></el-icon>
                                    <text style="vertical-align: middle;padding-left: 20px;font-size: 20px">工作中</text>
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
                                    <text style="text-align: center;font-size: 13px;color: #545c64;">重启</text>
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
        props: {
            process: {
                type: String,
                default: () => {
                    return "人脸识别网页";
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