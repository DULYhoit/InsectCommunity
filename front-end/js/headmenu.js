$('.menu-li').mouseover(function () {
    
    $(this).find('.menubox-ul').addClass('menu-active');

    $('.menubox-li').mouseover(function () {
        
        $(this).find('.menubox-tree-ul').addClass('menu-active');
        
        
    })

    
    return false;
});
    
   
$('.menu-li').mouseleave(function () {
    
    $(this).find('.menubox-ul').removeClass('menu-active');
    
    $('.menubox-li').mouseleave(function () {
        
        $(this).find('.menubox-tree-ul').removeClass('menu-active');
        
       
    })
    return false
});
 
    




