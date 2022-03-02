
$('.sidebar-menu').children('.sidemenu-li').click(function () {

    var Class = this.className;

    var active = "sidemenu-li active";
    $(event.target).attr("class", active);
    return false;
});


$('.sidemenu-li').click(function () {
       
        $('.sidemenu-ul').slideUp();

       if ($(this).children('.sidemenu-ul').is(':hidden')) {
           $(this).children('.sidemenu-ul').slideDown();
           
           $('.sidemenu-ul').unbind('click').bind('click', function (e) {
            
            var c1 = $(this).children('.two').is(':hidden');
            console.log(c1);
            if ($(this).children('.two').is(':hidden')) {
                console.log('1');
                $(this).children('.two').slideDown();
                console.log('2');
                
            } else{
                console.log('3');
                $(this).children('.two').slideUp();
                console.log('4');
                flag = true;
            }
            
            return false;

          });
            
            
        } else {
            
            $(this).children('.sidemenu-ul').slideUp();
           
           
        }
        
     
       


});
                    
                   
                   
                

