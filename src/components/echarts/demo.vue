<template>
    <div id="echart1" class="demo"></div>
</template>

<script>
    import * as echarts from 'echarts/lib/echarts';

    export default {
        name: "circle",
        mounted() {
            this.makeUpEcharts(56);
        },
        data() {
            return {}
        },
        methods: {
            makeUpEcharts(makeUp_val) {
                let color = ['#EAF1FF', '#73A0FA'];//圆环两色
                let el = document.getElementById("echart1");
                let echartData = [{
                    value: 100 - makeUp_val
                },
                    {
                        value: makeUp_val
                    }
                ];

                let formatNumber = function (num) {
                    let reg = /(?=(\B)(\d{3})+$)/g;
                    return num.toString().replace(reg, ',');
                }
                let total = echartData.reduce((a, b) => {
                    return b.value + '%'
                }, 0);

                var option = {

                    color: color,
                    title: [{
                        text: '{val|' + formatNumber(total) + '}',
                        top: 'center',
                        left: 'center',
                        textStyle: {
                            rich: {
                                val: {
                                    fontSize: 16,
                                    fontWeight: 'bold',
                                    color: '#73A0FA',//圆环中心文字字体颜色
                                }
                            }
                        }
                    }],
                    legend: {
                        data: []
                    },
                    grid: {
                        right: "100%"
                    },
                    series: [{
                        type: 'pie',
                        radius: ['60%', '90%'], //控制圆环大小
                        center: ['50%', '50%'], //控制圆环位置
                        data: echartData,
                        width: "100%",
                        hoverAnimation: false,
                        itemStyle: {
                            normal: {

                                borderWidth: 2
                            }
                        },
                        labelLine: {
                            normal: {
                                length: 0,
                                length2: 0,
                                lineStyle: {
                                    color: '#e6e6e6'
                                }
                            }
                        }
                    }]

                };
                let myChart = echarts.init(el);
                myChart.setOption(option)
            },
        }
    }
</script>

<style scoped>
    .demo {
        width: 100px;
        height: 200px;
    }
</style>