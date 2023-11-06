
let windowtopimg=$("#testop").offset().top;
$(window).scroll(function () {  
    let windowscroll  = $ (window).scrollTop();
    if (windowscroll > windowtopimg ){
      $(".iamchang").remove();
      $(".itemnew").html(`<h3 class="text-center w-50 border border-3 ">John Doe</h3>      `);
      $( "#btnup").show(500);
      
      
     
    }
    else{
      $( "#btnup").hide(500);
      $(".itemnew").html(` <img class=" w-50 rounded-circle border border-3 border-white iamchang" src="imgs/avatar.jpg" alt="">`);
      



    
    
    

     

    }
    

});
