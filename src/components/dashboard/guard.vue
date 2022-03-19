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
<!--                                        <span style="margin-left: 10px">{{ scope.row.status }}</span>-->
                                        <span class="status" style="color: #00aa88" v-if="scope.row.status=='start'">在线</span>
                                        <span class="status" style="color: #de790a" v-if="scope.row.status=='rebooting'" >重启中</span>
                                        <span class="status" style="color: #d40303" v-if="scope.row.status=='close'">离线</span>

                                    </div>
                                </template>
                            </el-table-column>
                            <el-table-column label="操作">
                                <template #default="scope">
                                    <el-button size="small" type="primary"
                                               @click="mntReboot(scope.row.mntname)" v-if="scope.row.status!='rebooting'">重启
                                    </el-button>
                                    <el-button size="small" type="primary"
                                               @click="mntReboot(scope.row.mntname)" v-if="scope.row.status=='rebooting'" disabled>重启中  <el-icon style="margin-left:5px " class="load"><Loading/></el-icon>
                                    </el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>
                </div>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
    import {Loading} from "@element-plus/icons"
    export default {
        name: "guard",
        methods:{
          mntReboot(mntname){
              console.log(mntname)
              this.changeMntStatus(mntname,"rebooting")
          }
        },
        components:{
            Loading
        },
        inject:["changeMntStatus"],
        props:{
            tableData: {
                type: Array,
            },
        },
        data() {
            return {
                activeNames: 1,
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
    .status{
        margin-left: 10px;
        font-size: 10px;
    }
    .load{
        animation:fadenum 5s infinite;
    }
    @keyframes fadenum{

        100%{transform:rotate(360deg);}

    }

</style>