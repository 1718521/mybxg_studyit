define(['jquery','template','bootstrap'],function($,template){
    // 调用接口获取数据
    $.ajax({
        type:'get',
        url:'/api/teacher',
        dataType:'json',
        success:function(data){
            // 渲染列表页
            var html = template('teacherTpl',{list:data.result});
            $("#teacherInfo").html(html);
            // 查看教师信息
            $('#teacherInfo').find('.preview').click(function(){
                var td = $(this).parent();
                var tcId = td.attr('data-tcId');
                console.log(tcId)
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