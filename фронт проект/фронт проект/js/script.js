$(document).ready(function(){
    // home
    $(".home_menu").hide();
    $(".home").click(function(){
        $(".home_menu").removeClass("d-none");
        $(".home_menu").toggle(1000);
    })
    
    // page
    $(".pages_menu").hide();
    $(".page").click(function(){
        $(".page_menu").removeClass("d-none");
        $(".page_menu").toggle(1000);
    })
    
    // shop

    // portfolio
    $(".portfolio_menu").hide();
    $(".portfolio").click(function(){
        $(".portfolio_menu").removeClass("d-none");
        $(".portfolio_menu").toggle(1000)
    })

    // blog
    $(".blog_menu").hide();
    $(".blog").click(function(){
        $(".blog_menu").removeClass("d-none");
        $(".blog_menu").toggle(1000)
    })

    // elements
    $(".elements_menu").hide();
    $(".elm").click(function(){
        $(".elements_menu").removeClass("d-none");
        $(".elements_menu").toggle(1000)
    })


    // slider
    
    // filter in shelf
    $(".filter_menu").hide();
    $(".filter").click(function(){
        $(".filter_menu").removeClass("d-none");
        $(".filter_menu").toggle(1000)
    })
          

}); 