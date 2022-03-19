<template>
    <div class="body">
        <div class="upper">
            <el-row>
                <el-col :span="12">
                    <div class="left">
                        <div>
                        </div>
                        <span>
                            <h4 style="margin-bottom: 20px">欢迎使用 <text style="font-size: 20px;">注册 后台管理系统</text></h4>
                            <p style="float: left"><el-icon><DeleteLocation /></el-icon> SpringBoot</p>
                            <br>
                            <p style="float: left"><el-icon><DeleteLocation /></el-icon> Mybatis-Plus</p>
                            <br>
                            <p style="float: left"><el-icon><DeleteLocation /></el-icon> Shiro</p>
                            <br>
                            <p style="float: left"><el-icon><DeleteLocation /></el-icon> Vue</p>
                            <br>
                            <p style="float: left"><el-icon><DeleteLocation /></el-icon> ELementUi</p>
                        </span>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="right">
                        <span style="line-height: 30px;">
                            <h4 style="margin-left: 50px;display: flex">登陆</h4>
                            <p style="margin-left: 50px;display: flex">还是赶路要紧</p>
                        </span>
                        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                            <el-form-item label="用户名" prop="username" label-width="100px">
                                <el-input v-model="ruleForm.username"></el-input>
                            </el-form-item>
                            <el-form-item label="密码" prop="password">
                                <el-input type="password" v-model="ruleForm.password"></el-input>
                            </el-form-item>

                            <el-form-item>
                                <el-button type="primary" @click="submitForm('ruleForm')">登陆</el-button>
                                <el-button @click="resetForm(ruleForm)">重置</el-button>
                            </el-form-item>
                        </el-form>
                    </div>

<!--                    <el-container>-->
<!--                        <el-main>-->
<!--                           -->

<!--                        </el-main>-->
<!--                    </el-container>-->
                </el-col>
            </el-row>
        </div>

    </div>
</template>

<script>

    import {getUsersApi} from "@/utils/api";
    import {
        DeleteLocation
    } from '@element-plus/icons'
    export default {
        name: "Login",
        data() {
            return {
                imgurl:'/static/logo.png',
                ruleForm: {
                    username: '',
                    password: ''
                },
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                        { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请选择密码', trigger: 'change' }
                    ]
                }
            };
        },
        components:{
            DeleteLocation
        },
        mounted() {

        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        const _this = this
                        getUsersApi(this.ruleForm).then(res => {
                            const jwt = res.headers['authorization']
                            if(res.data.code=="200"){
                                const userInfo = res.data.data
                                console.log(userInfo)
                                // 把数据共享出去
                                _this.$store.commit("SET_TOKEN", jwt)
                                _this.$store.commit("SET_USERINFO", userInfo)
                                // 获取
                                _this.$router.push("/overview")
                            }
                            else{
                                alert(res.data.msg)
                            }

                        })
                    }
                    else {
                        alert('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style scoped>
    .left{
        display: flex;
        float: left;
        margin-left: 0px;
        line-height: 30px;
        margin-top: 30px;
    }
    .right{
        /*position: absolute;*/
        /*top: 0; bottom: 0;*/
        /*left: 0; right: 0;*/
        /*width: 800px;*/
        /*height: 500px;*/
        /*line-height: 2;*/
        margin: auto;
        border-radius: 5px;
        background: rgba(255, 255, 255, .3);
        box-shadow: 3px 3px 6px 3px rgba(0, 0, 0, .3);
        overflow: hidden;
        align-items: center;
        padding: 20px 0;
    }
    .right::before{
        /*content: '';*/
        /*position: absolute;*/
        /*top: 0; bottom: 0;*/
        /*left: 0; right: 0;*/
        /*filter: blur(20px);*/
        /*z-index: -1;*/
        /*margin: -30px;*/
    }
    /*/deep/ .el-form-item_label{*/
    /*    margin-left: 0px;*/
    /*    display: flex;*/
    /*    width: 30px;*/
    /*}*/


    .upper{
        width: 750px;
        margin: 10% auto 0;
        margin-top: 10%;
        margin-right: auto;
        margin-bottom: 0px;
        margin-left: auto;
        color: rgba(255,255,255,.95);
    }

    .body{
        background: url("/public/background.jpg");
        width:100%;
        height:100%;
        position:fixed;
        background-size:100%;
        color: white;
        align-items: center;
    }
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }
    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }
    .el-main {
        /*background-color: #E9EEF3;*/
        color: #333;
        text-align: center;
        line-height: 160px;
    }
    .el-container {
        margin-bottom: 40px;
    }
    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }
    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }
    .mlogo {
        height: 60%;
        margin-top: 10px;
    }
    .demo-ruleForm {
        margin-top: 20px;
        margin-right: 30px;
    }
</style>