<template>
    <div class="demo" id="myprogress"></div>
</template>

<script>
    import * as echarts from 'echarts/lib/echarts';

    export default {
        props: {
            makeUP_val: {
                type: Number,
                default: () => {
                    return 6;
                }
            }
        },
        name: "myprogress",
        mounted() {
            this.makeUpEcharts("myprogress");
        },
        data() {
            return {}
        },
        methods: {
            //圆形echarts占比
            makeUpEcharts(elid) {
                let el = document.getElementById(elid);
                var myChart = echarts.init(el);
                var option;

                option = {
                    tooltip: {
                        formatter: '{a} <br/>{b} : {c}%'
                    },
                    series: [
                        {
                            name: 'Pressure',
                            type: 'gauge',
                            progress: {
                                show: true
                            },
                            detail: {
                                valueAnimation: true,
                                formatter: '{value}'
                            },
                            data: [
                                {
                                    value: 50,
                                    name: 'PERCENT'
                                }
                            ]
                        }
                    ]
                };

                option && myChart.setOption(option);



            },
        }
    }
</script>

<style scoped>
    .demo {
        height: 513px;
    }
</style>