<template>
    <el-container>
        <el-header class="head">
            <h2 align="left">
                机器仪表盘
                远程连接
            </h2>
        </el-header>
        <el-main class="main">
            <el-row :gutter="20">
                <el-col :span="10">
                    <div>
                        <el-card class="box-card">
                            <template #header>
                                <div class="card-header">
                                    <div style="float: left;">
                                        <el-icon style="font-size: 30px;display: inline-block;vertical-align: top">
                                            <Grid/>
                                        </el-icon>
                                        <text style="text-align: center;font-size: 20px">
                                            机器信息
                                        </text>
                                    </div>

                                    <el-button class="button" type="text">操作按钮</el-button>
                                </div>
                            </template>
                            <div style="height: 200px">
                                <el-table :data="tableData" style="width: 100%" :show-header="false" class="mytable">
                                    <el-table-column prop="name" label="Date" width="200"/>
                                    <el-table-column prop="info" label="info"/>
                                </el-table>
                            </div>
                        </el-card>
                    </div>
                    <div style="">
                        <el-card class="box-card">
                            <template #header>
                                <div class="card-header">
                                    <div style="float: left;">
                                        <el-icon style="font-size: 30px;display: inline-block;vertical-align: top">
                                            <Grid/>
                                        </el-icon>
                                        <text style="text-align: center;font-size: 20px">
                                            性能指标
                                        </text>
                                    </div>
                                    <el-button class="button" type="text">操作按钮</el-button>
                                </div>
                            </template>
                            <div style="height: max-content;">
                                <el-row :gutter="10">
                                    <el-col :span="12" style="">
                                        <el-card>
                                            <template #header>
                                                CPU占比
                                            </template>
                                            <div style="">
                                                <mycircle make-u-p_val=89 elid="echart1" id="echart1"
                                                          style="margin: 0 auto"></mycircle>
                                            </div>
                                        </el-card>
                                    </el-col>
                                    <el-col :span="12" style="">
                                        <el-card>
                                            <template #header>
                                                内存占比
                                            </template>
                                            <div>
                                                <mycircle make-u-p_val=6 elid="echart2" id="echart2"
                                                          style="margin: 0 auto"></mycircle>
                                            </div>
                                        </el-card>
                                    </el-col>
                                </el-row>
                            </div>
                        </el-card>
                    </div>
                </el-col>
                <el-col :span="14">
                    <el-card>
                        <div class="demo-collapse">
                            <div class="title">
                                <el-row class="row  align-items-center">
                                    <el-col :span="6">
                                        <div>
                                            <div style="float: left;">
                                                <el-icon color="#00aa88"
                                                         style="font-size: 40px;display: inline-block;vertical-align: middle">
                                                    <UploadFilled/>
                                                </el-icon>
                                                <text style="text-align: center;font-size: 20px;color: #545c64;padding-left: 16px;vertical-align: middle">
                                                    运行中
                                                </text>
                                            </div>
                                        </div>
                                    </el-col>
                                    <el-divider direction="vertical" style="height: 40px;"></el-divider>
                                    <el-col :span="6">
                                        <div>
                                            <div style="float: left;padding: 10px 0;">
                                                <text style="text-align: center;font-size: 13px;padding:0 10px;">监控
                                                </text>
                                                <el-icon color="#00aa88"
                                                         style="font-size: 13px;display: inline-block;vertical-align: middle;padding-left: 40px">
                                                    <Compass/>
                                                </el-icon>
                                                <text style="text-align: center;font-size: 13px;color: #545c64;vertical-align: middle">
                                                    监控中
                                                </text>
                                            </div>
                                        </div>
                                    </el-col>
                                    <el-divider direction="vertical"
                                                style="height: 20px;position: relative;top: 10px"></el-divider>
                                    <el-col :span="6">
                                        <div>
                                            <div style="float: left;padding: 10px 0;">
                                                <text style="text-align: center;font-size: 13px;padding:0 10px;">健康情况
                                                </text>
                                                <el-icon color="#00aa88"
                                                         style="font-size: 13px;display: inline-block;vertical-align: middle;padding-left: 40px">
                                                    <SuccessFilled/>
                                                </el-icon>
                                                <text style="text-align: center;font-size: 13px;color: #545c64;vertical-align: middle">
                                                    安全
                                                </text>
                                            </div>
                                        </div>
                                    </el-col>
                                    <el-col :span="6" class="col-md-3 col-sm-3">

                                    </el-col>
                                </el-row>
                                <br>
                            </div>
                            <div class="content">
                                <guard style="padding-bottom: 15px"></guard>
                                <process process="人脸识别网页" style="padding-bottom: 15px"></process>
                                <process process="盖章模块" style="padding-bottom: 15px"></process>
                                <process process="人脸识别模块" style="padding-bottom: 15px"></process>
                            </div>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </el-main>

    </el-container>
</template>

<script>
    import {
        Grid,
        UploadFilled,
        Stopwatch,
        SuccessFilled,
        Compass
    } from '@element-plus/icons'
    import mycircle from "@/components/echarts/circle";
    import process from "@/components/dashboard/process";
    import guard from "@/components/dashboard/guard";
    import * as echarts from 'echarts/lib/echarts';

    export default {
        name: "board",
        data() {
            return {
                tableData: [
                    {
                        name: 'ID',
                        info: 'b4334a23-c47c-47ba-b2e2-dfe3e34ea498f',
                    },
                    {
                        name: '名称',
                        info: '设备二',
                    },
                    {
                        name: '描述',
                        info: '打杂的',
                    },
                    {
                        name: '区域',
                        info: '教学楼1',
                    },
                    {
                        name: '已注册人数',
                        info: '657',
                    }
                ]
            }

        },
        components: {
            Grid,
            UploadFilled,
            Stopwatch,
            Compass,
            SuccessFilled,
            mycircle,
            process,
            guard
        },
        mounted() {

        },
        methods: {
            // demo(){
            //     var canvas = document.getElementById("echart");
            //     var context = canvas.getContext("2d");
            //     context.rect(0,0,50,50);
            //     context.clip();
            // }
        }
    }


</script>

<style scoped>
    .head {
        /*position: relative;*/
        left: 0;
        color: #333;
        text-align: center;
        height: max-content;
        /*line-height: 60px;*/
    }

    .main {
        /*margin-top: 40px;*/
    }

    .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 0px;
        margin-top: 10px;
    }

    .box-card {
        width: 100%;
        margin-bottom: 20px;
    }

    /deep/ .el-card {

        margin-right: 0px;
        transition: all .5s;
    }

    /deep/ .el-card:hover {
        margin-top: -5px;
    }

    /deep/ .el-divider--vertical {
        margin: 0 8px;
    }

    .mytable_row > td {
        border: none;
    }

    .el-card ::v-deep .el-card__body {
        padding: 10px;
    }
</style>