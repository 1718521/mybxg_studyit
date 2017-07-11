require.config({
    baseUrl:'/public/assets',
    paths:{
        jquery:'jquery/jquery.min',
        template:'artTemplate/template-web',
        cookie:'jquery-cookie/jquery.cookie',
        bootstrap : 'bootstrap/js/bootstrap.min',
        echarts:'echarts/echarts.min',
        common : '../js/common',
        login : '../js/login',
        index : '../js/index',
        teacher_list : '../js/teacher-list'
    },
    shim:{
        bootstrap:{
            deps:['jquery']
        }
    }
})