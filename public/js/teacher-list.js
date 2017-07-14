define(['jquery','template','util','bootstrap'],function($,template,util){
    // 设置导航菜单选中
    util.setMenu(location.pathname);
    // 调用接口获取数据
    $.ajax({
        type:'get',
        url:'/api/teacher',
        dataType:'json',
        success:function(data){
            // 渲染列表页
            var html = template('teacherTpl',{list:data.result});
            $("#teacherInfo").html(html);
            // 实现讲师启用和注销功能
            $('#teacherInfo').find('.switchBtn').click(function(){
                 var td = $(this).parent();
                var tcId = td.attr('data-tcId');
                var tcStatus = td.attr('data-tcStatus');
                var that = this; 
                $.ajax({
                    type:'post',
                    url:'/api/teacher/handle',//api少了斜杠
                    data:{
                        tc_id:tcId,
                        tc_status:tcStatus
                    },
                    dataType:'json',
                    success:function(data){
                        td.attr('data-tcStatus',data.result.tc_status);
                        if(data.result.tc_status == 0){
                            $(that).text('注销'); //that不要加分号
                        }else{
                            $(that).text('启用');
                        }
                    }             
                });
            })
            // 查看教师信息
            $('#teacherInfo').find('.preview').click(function(){
                var td = $(this).parent();
                var tcId = td.attr('data-tcId');
                // console.log(tcId)
                $.ajax({
                type:'get',
                url:'/api/teacher/view',
                data:{
                    tc_id:tcId
                },
                dataType:'json',
                success:function(data){
                    var html = template('ModalTpl',data.result);
                    $('#modalInfo').html(html);
                    $('teacherModal').modal();
                }
            })
            })
            
        }
    })
})