<template>
    <div class="guard">
        <el-collapse v-model="activeNames" accordion>
            <el-collapse-item :name="1">
                <template #title>
                    <div class="title">
                        守护进程
                    </div>
                </template>
                <div class="content">
                    <div>
                        <el-table :data="tableData" style="width: 100%" stripe class="children1">
                            <el-table-column label="#" width="180px">
                                <template #default="scope">
                                    <div style="display: flex; align-items: center">
                                        <span style="margin-left: 10px">{{ scope.$index+1 }}</span>
                                    </div>
                                </template>
                            </el-table-column>
                            <el-table-column label="名称" width="180px">
                                <template #default="scope">
                                    <div style="display: flex; align-items: center">
                                        <span style="margin-left: 10px">{{ scope.row.name }}</span>
                                    </div>
                                </template>
                            </el-table-column>
                            <el-table-column label="状态" width="180px">
                                <template #default="scope">
                                    <div style="display: flex; align-items: center">
                                        <span style="margin-left: 10px">{{ scope.row.status }}</span>
                                    </div>
                                </template>
                            </el-table-column>
                            <el-table-column label="操作">
                                <template #default="scope">
                                    <el-button size="small" type="primary"
                                               @click="handleRestart(scope.$index, scope.row)">重启
                                    </el-button>
                                </template>
                            </el-table-column>
                        </el-table>

                        <!--                        <el-row type="flex" align="middle">-->
                        <!--                            <el-col :span="12" style="position: relative">-->
                        <!--                                <span  class="left">-->
                        <!--                                    <el-icon color="#00aa88" style="vertical-align: middle" ><Compass/></el-icon>-->
                        <!--                                    <text style="vertical-align: middle;padding-left: 20px;font-size: 20px">工作中</text>-->
                        <!--                                </span>-->
                        <!--                                <el-divider direction="vertical" style="float: right;position: absolute;height: 60%;right: 0;top: 20%"></el-divider>-->
                        <!--                            </el-col>-->

                        <!--                            <el-col :span="12">-->
                        <!--                                <div  style="float: left;">-->
                        <!--                                    <text style="text-align: center;font-size: 13px;padding:0 20px;">操作</text>-->
                        <!--                                    <el-icon  color="#00aa88" style="font-size: 13px;display: inline-block;padding-left: 40px;vertical-align: middle"><Compass /></el-icon>-->
                        <!--                                    <text style="text-align: center;font-size: 13px;color: #545c64;">重启</text>-->
                        <!--                                </div>-->
                        <!--                            </el-col>-->
                        <!--                        </el-row>-->

                    </div>
                </div>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
    export default {
        name: "guard",
        data() {
            return {
                activeNames: 1,
                tableData: [{
                    name: '人脸识别网站',
                    status: '在线'
                }, {
                    name: '摄像头',
                    status: '在线'
                }, {
                    name: '盖章模块',
                    status: '在线'
                }]
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

    }

    .guard:hover .children1 {
        --el-table-header-bg-color: #F2F5F7;
        --el-table-tr-bg-color: #F2F5F7;
        --el-table-row-bg-color: #E6E9EA;
    }

    .children1 {
        --el-table-tr-bg-color: #f2f2f2;
        --el-table-row-bg-color: #ffffff;
    }
</style>