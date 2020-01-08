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
    

    // shop_list_slider
    $(".first_picture ").mouseover(function () {
        $(".about .first a").removeClass("slide")
        $(".about .first span").addClass("slide")
    })

    $(".first_picture").mouseout(function () {
        $(".about .first a").addClass("slide")
        $(".about .first span").removeClass("slide")
    })

    $(".second_picture ").mouseover(function () {
        $(".about .second a").removeClass("slide")
        $(".about .second span").addClass("slide")
    })

    $(".second_picture").mouseout(function () {
        $(".about .second a").addClass("slide")
        $(".about .second span").removeClass("slide")
    })

    $(".third_picture ").mouseover(function () {
        $(".about .third a").removeClass("slide")
        $(".about .third span").addClass("slide")
    })

    $(".third_picture").mouseout(function () {
        $(".about .third a").addClass("slide")
        $(".about .third span").removeClass("slide")
    })

    $(".fourth_picture ").mouseover(function () {
        $(".about .fourth a").removeClass("slide")
        $(".about .fourth span").addClass("slide")
    })

    $(".fourth_picture").mouseout(function () {
        $(".about .fourth a").addClass("slide")
        $(".about .fourth span").removeClass("slide")
    })

    $(".fifth_picture ").mouseover(function () {
        $(".about .fifth a").removeClass("slide")
        $(".about .fifth span").addClass("slide")
    })

    $(".fifth_picture").mouseout(function () {
        $(".about .fifth a").addClass("slide")
        $(".about .fifth span").removeClass("slide")
    })


    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 1000
    });

}); 
