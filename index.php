<?php
    // 后端路由(分发URL请求)
    $pathname = "index";
    $filename = "index";

    // var_dump($_SERVER);
    if(isset($_SERVER['PATH_INFO'])){
        $urlpath = $_SERVER['PATH_INFO'];
        
        $str = substr($urlpath,'1');
        $arr = explode("/",$str);
        if(count($arr == 2)){
            $pathname = $arr[0];
            $filename = $arr[1];
        }else{
            $filename = "login";
        }
    }else{
        $filename = "login";
    }
    include('./views/'.$pathname.'/'.$filename.'.html');
?>