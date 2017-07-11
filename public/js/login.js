define(['jquery','cookie','nprogress'],function($,nprogress){
     $("#btn").click(function(){
            $.ajax({
                type:"post",
                url:"/api/login",
                // 虚拟主机给设置了跨域请求的命令,所以Apache自动给解析为http://api.botue.login
                data:$('#loginForm').serialize(),
                dataType:"json",
                success:function(data){
                    if(data.code == 200){
                        //吧登录成功的信息保存在cookie，方便页面获取
                        $.cookie('loginInfo',JSON.stringify(data.result),{path:'/'});
                        console.log($.cookie('loginInfo'));
                        //默认返回的是index.php  隐藏index.php 见Apache.md
                        //路径是相对于域名中的路径
                        location.href="/index/index";
                    }
                }
            })
            return false;
        })
})