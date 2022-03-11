<template>
    <div>
        <template v-for="(item) in menuData">
            <el-submenu v-if="item.children&&item.children.length>0" :key="item.id" :index="item.id + ''">
                <template slot="title">{{item.label}}</template>
                <MenuTree :menuData="item.children"></MenuTree>
            </el-submenu>
            <el-menu-item v-else :key="item.id" :index="item.id+''">
                <span slot="title">{{item.label}}</span>
            </el-menu-item>
        </template>
    </div>
</template>

<script>
    export default {
        props: ['menuData'],
        name: 'MenuTree'
    }
</script>