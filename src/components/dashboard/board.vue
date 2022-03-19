<template>
    <el-container v-loading="loading">
        <el-header class="head">
            <h2 align="left">
                机器仪表盘
                <el-button class="button-bar" type="text"  @click="this.$router.push({name:'webssh',params:this.tmninfo})">远程连接</el-button>

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
                                                <mycircle :make-u-p_val="this.result.cpu_usage" elid="echart1" id="echart1"
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
                                                <mycircle :makeUP_val="this.result.mem_usage" elid="echart2" id="echart2"
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
                                                    <Monitor/>
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
                                <guard style="padding-bottom: 15px" :table-data="mntData"></guard>
                                <process processname="人脸识别网页" style="padding-bottom: 15px" :process-status="this.result.web" ></process>
                                <process processname="盖章模块" style="padding-bottom: 15px" :process-status="this.result.stamp"></process>
                                <process processname="人脸识别模块" style="padding-bottom: 15px" :process-status="this.result.camera"></process>
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
        Compass,
        Monitor
    } from '@element-plus/icons'
    import mycircle from "@/components/echarts/circle";
    import process from "@/components/dashboard/process";
    import guard from "@/components/dashboard/guard";
    import {getTmndetail} from "@/utils/api"
    import * as echarts from 'echarts/lib/echarts';
    import {WSSHClient} from "../../../public/webssh"
    import {Terminal} from "xterm"
    import "xterm/dist/xterm.css"
    export default {
        name: "board",
        data() {
            return {
                client : new WSSHClient(),
                loading: true,
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
                ],
                mntData:'',
                tmninfo:'',
                result:'',
                cmdmatch: [{
                    name: "人脸识别网页",
                    cmd: "python /opt/web_restart.py\n",
                    status: "web"
                },{
                    name: "盖章模块",
                    cmd: "python 111\n",
                    status: "stamp"
                },{
                    name: "人脸识别模块",
                    cmd: "python 222\n",
                    status: "camera"
                }]
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
            guard,
            Monitor,
            getTmndetail,
            Terminal,
            WSSHClient
        },
        mounted() {
            this.getTmninfo();
        },
        provide() {
          return {
              changeStatus:this.changeStatus,
              changeMntStatus:this.changeMntStatus
          }
        },
        watch: { //通过watch来监听路由变化
            $route: function(){
                this.getTmninfo();
            },
        },
        methods: {
            //改变监控模块状态
            changeMntStatus(param,status){
                console.log(param)
                var cmdmatch = this.mntData
                for(var i=0;i<cmdmatch.length;i++){
                    if(cmdmatch[i].mntname==param){
                        var matched = cmdmatch[i]
                        if(status=="rebooting"){
                            console.log(this.client)
                            this.client.sendClientData(matched.cmd);
                        }
                        this.mntData[i]["status"] = status;
                    }
                }

            },
            //改变模块状态
            changeStatus(param,status){
                console.log(param)
                var cmdmatch = this.cmdmatch
                for(var i=0;i<cmdmatch.length;i++){
                    if(cmdmatch[i].name==param){
                        var matched = cmdmatch[i]
                        if(status=="rebooting"){
                            console.log(this.client)
                            this.client.sendClientData(matched.cmd);
                        }
                        this.result[matched.status] = status
                    }
                }
            },
            //获取终端信息
            getTmninfo(){
                const _this = this
                var ID = this.$route.params;
                var tablelist = this.tableData;
                if(ID){
                    getTmndetail(ID).then(res=>{

                        if(res.data.code="200"){
                            _this.tmninfo=res.data.data

                            for(var i=0;i<tablelist.length;i++){
                                if(tablelist[i].name=="ID"){
                                    tablelist[i].info=res.data.data.id
                                }
                                if(tablelist[i].name=="名称"){
                                    tablelist[i].info=res.data.data.name
                                }
                                if(tablelist[i].name=="描述"){
                                    tablelist[i].info=res.data.data.describe
                                }
                                if(tablelist[i].name=="区域"){
                                    tablelist[i].info=res.data.data.area
                                }
                                if(tablelist[i].name=="已注册人数"){
                                    tablelist[i].info=res.data.data.regnum
                                }
                            }
                            this.getDetail();
                        }
                        else{
                            alert(res.data.msg)
                        }
                    })
                }
            },
            //获得运行信息
            getDetail(){
                var client = this.client
                var isready = 0;
                const _this = this;
                this.result = '';
                this.mntData = '';
                client.connect({
                    onError: function (error) {
                        //连接失败回调
                        console.log('Error: ' + error + '\r\n');
                    },
                    onConnect: function () {
                        console.log(_this.tmninfo)
                        var options = {
                            operate: 'connect',
                            host: _this.tmninfo.ip,//IP
                            port: '22',//端口号
                            username: _this.tmninfo.username,//用户名
                            password: _this.tmninfo.password //密码
                        };
                        client.sendInitData(options);
                    },
                    onData: function (data) {
                        //收到数据时回调
                        isready = isready + 1;
                        if (isready == 1) {
                            //获取初始内容：内存占比etc..
                            var message = 'python /opt/demo.py\n';
                            client.sendClientData(message);
                            _this.loading = false;
                        }
                        console.log(data)
                        data = data.split("\r");
                        //收到result
                        if (data[0].match('{')) {
                            _this.result = JSON.parse(data[0]);
                            _this.mntData = JSON.parse(data[0]).mntData;
                        }
                        //收到重启成功回复!
                        if (data[0].match('restart success')) {
                            var recmsg = data[0].split('-');
                            if(recmsg[0].match('mnt')){
                                var name = recmsg[0];
                                for(var i=0;i<_this.mntData.length;i++){
                                    if(_this.mntData[i].mntname==name){
                                        _this.changeMntStatus(name,"start")
                                    }
                                }
                            }
                            else {
                                var name = recmsg[0];
                                for(var i=0;i<_this.cmdmatch.length;i++){
                                    if(_this.cmdmatch[i].status==name){
                                        name=_this.cmdmatch[i].name
                                        _this.changeStatus(name,"start")

                                    }
                                }
                            }

                        }
                    },
                    onClose: function () {
                        //连接关闭回调
                        console.log("\rconnection closed");
                    }
                })
            }
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
    /deep/ .el-button--text{
        color: #a0a5ab;
    }
    .mytable_row > td {
        border: none;
    }

    .el-card ::v-deep .el-card__body {
        padding: 10px;
    }
</style>