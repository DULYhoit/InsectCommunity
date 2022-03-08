$('.pull-right').click(function () {
    
    $('.defult').slideUp();
    
   if ($('.defult').is(':hidden')) {
       $('.defult').slideDown();
    
    } else {
        
        $('.defult').slideUp();  
    }
});