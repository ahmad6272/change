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

    $(".second").click(function () {
        $(".second_body").not($(this).next()).slideUp(500);
        $(this).next().slideToggle(500);
    });

    $(".third").click(function () {
        $(".third_body").not($(this).next()).slideUp(500);
        $(this).next().slideToggle(500);
    });

    $(".fourth").click(function () {
        $(".fourth_body").not($(this).next()).slideUp(500);
        $(this).next().slideToggle(500);
    });

    $(".card-header").click(function () {
        $(this).addClass("color");
    })


    // tab
    $("#tab_item a").click(function(){
		$(".tab div").hide(); 
		$(".tab div").filter(this.hash).show(); 
		$("#tab_item a").removeClass("show");
		$(this).addClass("show");
	})



}); 
