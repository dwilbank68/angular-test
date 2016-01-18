$(document).ready(function() {

    console.log('hey');

    $(".item").hover(
        function(){
            console.log('fade in');
            $(this).find('.overlay').fadeIn();
        },
        function(){
            console.log('fade out');
            $(this).find('.overlay').fadeOut();
        }
    );


});
