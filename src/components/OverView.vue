<template>
    <el-container >
        <el-header class="myhead" style="color: #73879C;height: max-content">
            <div  style="display: flex" ref="aaa">
                <div class="num1">
                    <div class="title">
                        <span  style="">
                            <el-icon style="vertical-align: middle"><Avatar/></el-icon>
                            总注册人数
                        </span>
                    </div>
                    <div  class="middle">
                        <h1 >2500</h1>
                    </div>
                    <div class="foot">
                        4%较上周增长
                    </div>
                </div>
                <el-divider direction="vertical" content-position="center" style="height: 80%;margin:10px 30px;border-width: 3px;"></el-divider>
                <div class="num2">
                    <div class="title">
                        <span  style="">
                            <el-icon style="vertical-align: middle"><Timer/></el-icon>
                            平均注册时间
                        </span>
                    </div>
                    <div  class="middle">
                        <h1 >123.50</h1>
                    </div>
                    <div class="foot">
                        3%较上周增长
                    </div>
                </div>
                <el-divider direction="vertical" content-position="center" style="height: 80%;margin:10px 30px;border-width: 3px;"></el-divider>
                <div class="num3">
                    <div class="title">
                        <span  style="">
                            <el-icon style="vertical-align: middle"><Avatar/></el-icon>
                            男生数量
                        </span>
                    </div>
                    <div  class="middle">
                        <h1 >2500</h1>
                    </div>
                    <div class="foot">
                        34%较上周增长
                    </div>
                </div>
                <el-divider direction="vertical" content-position="center" style="height: 80%;margin:10px 30px;border-width: 3px;"></el-divider>
                <div class="num4">
                    <div class="title">
                        <span  style="">
                            <el-icon style="vertical-align: middle"><Avatar/></el-icon>
                            女生数量
                        </span>
                    </div>
                    <div  class="middle">
                        <h1 >2500</h1>
                    </div>
                    <div class="foot">
                        -14%较上周增长
                    </div>
                </div>
                <el-divider direction="vertical" content-position="center" style="height: 80%;margin:10px 30px;border-width: 3px;"></el-divider>
                <div class="num5">
                    <div class="title">
                        <span  style="">
                            <el-icon style="vertical-align: middle"><Avatar/></el-icon>
                            报错次数
                        </span>
                    </div>
                    <div  class="middle">
                        <h1 >12</h1>
                    </div>
                    <div class="foot">
                        1%较上周增长
                    </div>
                </div>
                <el-divider direction="vertical" content-position="center" style="height: 80%;margin:10px 30px;border-width: 3px;"></el-divider>
                <div class="num6">
                    <div class="title">
                        <span  style="">
                            <el-icon style="vertical-align: middle"><Avatar/></el-icon>
                            人脸识别次数
                        </span>
                    </div>
                    <div  class="middle">
                        <h1 >7953</h1>
                    </div>
                    <div class="foot">
                        24%较上周增长
                    </div>
                </div>
            </div>
        </el-header>
        <el-main>
            <div>
                <el-collapse v-model="activeName01" accordion>
                    <el-collapse-item name="1">
                        <template #title>
                            <div class="title">
                                <span >
                                    <h1 style="font-size: 20px">  <text  style="font-size: 30px">注册数量变化表</text>  近一周</h1>
                                </span>

                            </div>
                        </template>
                        <div class="content" >
                            <mychart ></mychart>
                        </div>
                    </el-collapse-item>
                </el-collapse>
            </div>
            <div class="down">
                <el-row :gutter="12">
                    <el-col :span="8"> <el-collapse v-model="activeName02" accordion class="college">
                        <el-collapse-item name="2">
                            <template #title>
                                <div class="title">
                                <span >
                                    <h1 style="font-size: 22px">各学院注册情况</h1>
                                </span>
                                </div>
                            </template>
                            <div class="content">
                                <div style="display: flex;margin:10px 20px;justify-content: space-between" v-for="item in college">
                                    <div style="font-size: 15px;">{{item.collegename}}</div>
                                    <div class="inner" style="width: 70%">
                                        <el-progress :percentage=item.collegeper stroke-width="20"></el-progress>
                                    </div>
                                </div>
                            </div>
                        </el-collapse-item>
                    </el-collapse></el-col>
                    <el-col :span="8"> <el-collapse v-model="activeName03"  accordion class="complete">
                        <el-collapse-item name="3">
                            <template #title>
                                <div class="title">
                                <span >
                                    <h1 style="font-size: 22px">  各机器完成情况</h1>
                                </span>

                                </div>
                            </template>
                            <div class="content">
                                <mypie style="width: 546px;"></mypie>
                            </div>
                        </el-collapse-item>
                    </el-collapse></el-col>
                    <el-col :span="8"> <el-collapse  v-model="activeName04" accordion class="register">
                        <el-collapse-item name="4">
                            <template #title>
                                <div class="title">
                                <span >
                                    <h1 style="font-size: 22px"> 注册总完成进度</h1>
                                </span>

                                </div>
                            </template>
                            <div class="content">
                                <myprogress style="width: 546px"></myprogress>
                            </div>
                        </el-collapse-item>
                    </el-collapse></el-col>
                </el-row>
            </div>
        </el-main>
    </el-container>


</template>

<script>

    import {Avatar,
        Timer
    } from "@element-plus/icons"
    import mychart from "./echarts/chart"
    import mypie from "./echarts/pie"
    import myprogress from "./echarts/progerss"
    export default {
        name: "OverView",
        data() {
            return {
                mywidth:1,
                activeName01:"1",
                activeName02:"2",
                activeName03:"3",
                activeName04:"4",
                college:[{
                    collegename:'信息科学与技术学院',
                    collegeper:'89'
                },{
                    collegename:'数理学院',
                    collegeper:'23'
                }]

            };
        },
        props:{
            mywidth: {
                type: Number,
                default: () => {
                    return 1;
                }
            },
        },
        components: {
            Avatar,
            Timer,
            mychart,
            mypie,
            myprogress
        },
        mounted() {
            console.log("111")
        },
        watch:{
        },
        methods: {

        }
    }
</script>

<style scoped>
    .myhead{
        display: flex;
        margin-top: 20px;
        float: left;
    }
    .title{
        float: left;

    }
    .middle{

        font-size: 50px;
    }
    .foot{
        float: left;
    }
    /deep/ .el-collapse-item__header{
        padding: 10px;
    }
    /deep/ .el-collapse{
        --el-collapse-header-bg-color:#efe6e6;
    }
    .down{
        padding-top: 20px;
    }
    /deep/ .el-progress-bar__outer{
         border-radius: 0;
    }
    /deep/ .el-progress-bar__inner{
        border-radius: 0;
    }
</style>