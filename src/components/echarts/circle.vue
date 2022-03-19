<template>
    <div class="inner">
        <div id={{this.elid}} class="demo"></div>
    </div>
</template>

<script>
    import * as echarts from 'echarts/lib/echarts';

    export default {
        props: {
            makeUP_val: {
                type: Number,
                default: () => {
                    return 9;
                }
            },
            elid: {
                type: String,
                default: () => {
                    return 'myechart'
                }
            }
        },
        name: "circle",
        mounted() {
            this.makeUpEcharts(this.elid, this.makeUP_val);
        },
        data() {
            return {}
        },
        watch:{
            makeUP_val(newVal,oldVal){
                console.log(newVal)
                this.makeUpEcharts(this.elid,newVal)
            }
        },
        methods: {

            //圆形echarts占比
            makeUpEcharts(elid, makeUp_val) {
                console.log(elid, makeUp_val)
                let color = ['#EAF1FF', '#73A0FA'];//圆环两色
                let el = document.getElementById(elid);
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
    .inner {
        width: 200px;
        height: 200px;

    }

    .demo {
        width: 100px;
    }
</style>