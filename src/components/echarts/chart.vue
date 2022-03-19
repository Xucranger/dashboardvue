<template>
    <div id=mychart class="demo" ref="demo"></div>
</template>

<script>
    import * as echarts from 'echarts/lib/echarts';

    export default {
        props: {
        },
        name: "mychart",
        mounted() {
            this.makeUpEcharts("mychart");
        },
        data() {
            return {}
        },
        watch:{
        },
        methods: {

            //圆形echarts占比
            makeUpEcharts(elid) {
                console.log(elid)
                let el = document.getElementById(elid);
                var myChart = echarts.init(el);
                var option;

                option = {

                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            label: {
                                backgroundColor: '#6a7985'
                            }
                        }
                    },
                    legend: {
                        data: ['男生', '女生']
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {}
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            boundaryGap: false,
                            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value'
                        }
                    ],
                    series: [
                        {
                            name: '女生',
                            type: 'line',
                            stack: 'Total',
                            areaStyle: {},
                            emphasis: {
                                focus: 'series'
                            },
                            data: [320, 332, 301, 334, 390, 330, 320]
                        },
                        {
                            name: '男生',
                            type: 'line',
                            stack: 'Total',
                            label: {
                                show: true,
                                position: 'top'
                            },
                            areaStyle: {},
                            emphasis: {
                                focus: 'series'
                            },
                            data: [820, 932, 901, 934, 1290, 1330, 1320]
                        }
                    ]
                };

                myChart.setOption(option);

            },
        }
    }
</script>

<style scoped>
    .demo {
        width:1650px;
        height: 400px;
    }
</style>