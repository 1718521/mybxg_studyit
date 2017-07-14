require.config({
    baseUrl:'/public/assets',
    paths:{
        jquery:'jquery/jquery.min',
        template:'artTemplate/template-web',
        cookie:'jquery-cookie/jquery.cookie',
        bootstrap : 'bootstrap/js/bootstrap.min',
        // index页面的条形图
        echarts:'echarts/echarts.min',
        // 入职日期的日历
        datepicker:'bootstrap-datepicker/js/bootstrap-datepicker.min',
        // 中文周几
        language : 'bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
        // 表单验证
        validate:'validate/jquery-validate.min',
        // 表单提交
        form:'jquery-form/jquery.form',
        common : '../js/common',
        login : '../js/login',
        index : '../js/index',
        // 教师列表
        teacher_list : '../js/teacher-list',
        // 查询添加教师信息
        add_teacher:'../js/add-teacher',
        // 工具类的（设置菜单导航高亮，把url转化为对象）
        util:'../js/util'
    },
    shim:{
        bootstrap:{
            deps:['jquery']
        },
        language:{
            deps:['jquery','datepicker']
        },
        validate:{
            deps:['jquery']
        }

    }
})