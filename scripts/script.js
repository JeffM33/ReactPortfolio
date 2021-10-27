$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scroll > 20){
            $('.navbar').addClass('stickey');
        } else {
            $('.navbar').removeClass('stickey');
        }
    });

    //toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass('active');
    });
});