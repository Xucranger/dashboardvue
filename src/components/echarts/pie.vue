<template>
    <div class="demo" id="mypie"></div>
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
        name: "mypie",
        mounted() {
            this.makeUpEcharts("mypie");
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
                        trigger: 'item'
                    },
                    legend: {
                        top: '5%',
                        left: 'center'
                    },
                    series: [
                        {
                            name: 'Top5',
                            type: 'pie',
                            radius: ['40%', '70%'],
                            avoidLabelOverlap: false,
                            itemStyle: {
                                borderRadius: 0,
                                borderColor: '#fff',
                                borderWidth: 2
                            },
                            label: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                label: {
                                    show: true,
                                    fontSize: '20',
                                    fontWeight: 'bold'
                                }
                            },
                            labelLine: {
                                show: false
                            },
                            data: [
                                { value: 1048, name: 'Search Engine' },
                                { value: 735, name: 'Direct' },
                                { value: 580, name: 'Email' },
                                { value: 484, name: 'Union Ads' },
                                { value: 300, name: 'Video Ads' }
                            ]
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
        height: 513px;
    }
</style>