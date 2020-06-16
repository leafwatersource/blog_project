var vm = new Vue({
    el: "#wrapper",
    data:{

    },
    created: function () {
        this.close_loading();
        this.set_nav_bg();
    },
    methods:{
        close_loading:function(){
            window.onload = function () {
                $('#wrapper').show();
                $('.loading').hide();
            };
        },//关闭动画
        set_nav_bg:function(){
            window.onscroll = function () {
                var a = document.documentElement.scrollTop || document.body.scrollTop;//滚动条y轴上的距离
                if (a>90) {
                    $('.nav_box_wrap').css('background','black')
                }else{
                    $('.nav_box_wrap').css('background','transparent')
                }
            }
        },//设置导航栏是否是黑色背景
    }
});