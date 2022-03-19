<template>
    <div id="terminal"></div>
</template>

<script>
    import {WSSHClient} from "../../../public/webssh"
    import {Terminal} from "xterm"
    import "xterm/dist/xterm.css"
    export default {
        name: "xterm",
        props:{

        },
        data(){
          return {
              initoptions:{
                  operate: 'connect',
                  host: this.$route.params.ip,//IP
                  port: '22',//端口号
                  username: this.$route.params.username,//用户名
                  password: this.$route.params.password//密码
              }
          }
        },
        mounted() {
          this.openTerminal(this.initoptions)
        },
        methods:{
            openTerminal(options) {
                console.log(options)
                var client = new WSSHClient();
                var term = new Terminal({
                    cols: 97,
                    rows: 45,
                    cursorBlink: true, // 光标闪烁
                    cursorStyle: "block", // 光标样式  null | 'block' | 'underline' | 'bar'
                    scrollback: 800, //回滚
                    tabStopWidth: 8, //制表宽度
                    screenKeys: true
                });
                term.on('data', function (data) {
                    //键盘输入时的回调函数
                    console.log(data);
                    client.sendClientData(data);
                });
                term.open(document.getElementById('terminal'));
                //在页面上显示连接中...
                term.write('Connecting...');
                //执行连接操作
                client.connect({
                    onError: function (error) {
                        //连接失败回调
                        term.write('Error: ' + error + '\r\n');
                    },
                    onConnect: function () {
                        //连接成功回调
                        client.sendInitData(options);
                        term.focus()
                    },
                    onClose: function () {
                        //连接关闭回调
                        term.write("\rconnection closed");
                    },
                    onData: function (data) {
                        //收到数据时回调
                        term.write(data);
                    }
            });
        }}
    }
</script>

<style scoped>

</style>
