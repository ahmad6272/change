$(document).ready(function () {

    // filter in shelf
    $(".filter_menu").hide();
    $(".filter").click(function () {
        $(".filter_menu").removeClass("d-none");
        $(".filter_menu").toggle(1000)
    })


    // accardion
    $(".first").click(function () {
        $(".first_body").not($(this).next()).slideUp(500);
        $(this).next().slideToggle(500);
    });

    $(".card-header").click(function () {
        $(".first div").removeClass("color")
        $(this).addClass("color");
    })

    $(".second").click(function () {
        $(".second_body").not($(this).next()).slideUp(500);
        $(this).next().slideToggle(500);
    });

    $(".card-header").click(function () {
        $(".second div").removeClass("color")
        $(this).addClass("color");
    })

    $(".third").click(function () {
        $(".third_body").not($(this).next()).slideUp(500);
        $(this).next().slideToggle(500);
    });

    $(".card-header").click(function () {
        $(".third div").removeClass("color")
        $(this).addClass("color");
    })

    $(".fourth").click(function () {
        $(".fourth_body").not($(this).next()).slideUp(500);
        $(this).next().slideToggle(500);
    });

    $(".card-header").click(function () {
        $(".fourth div").removeClass("color")
        $(this).addClass("color");
    })  



    // tab
    $("#tab_item a").click(function(){
		$(".tab div").hide(); 
		$(".tab div").filter(this.hash).show(); 
		$("#tab_item a").removeClass("show");
		$(this).addClass("show");
	})

    $("#tab_item2 a").click(function(){
		$(".tab2 div").hide(); 
		$(".tab2 div").filter(this.hash).show(); 
		$("#tab_item2 a").removeClass("show");
		$(this).addClass("show");
	})

    $("#tab_item3 a").click(function(){
		$(".tab3 div").hide(); 
		$(".tab3 div").filter(this.hash).show(); 
		$("#tab_item3 a").removeClass("show");
		$(this).addClass("show");
    })
    
    $("#tab_item4 a").click(function(){
		$(".tab4 div").hide(); 
		$(".tab4 div").filter(this.hash).show(); 
		$("#tab_item4 a").removeClass("show");
		$(this).addClass("show");
    })
    
    // shop_list
    $(".first_image").mouseover(function () {
        $(".first").removeClass("show")
    })  
    $(".first_image").mouseout(function () {
        $(".first").addClass("show")
    })  

    $(".second_image").mouseover(function () {
        $(".second").removeClass("show")
    })  
    $(".second_image").mouseout(function () {
        $(".second").addClass("show")
    })  

    $(".third_image").mouseover(function () {
        $(".third").removeClass("show")
    })  
    $(".third_image").mouseout(function () {
        $(".third").addClass("show")
    })  

    $(".fourth_image").mouseover(function () {
        $(".fourth").removeClass("show")
    })  
    $(".fourth_image").mouseout(function () {
        $(".fourth").addClass("show")
    })  
}); 
