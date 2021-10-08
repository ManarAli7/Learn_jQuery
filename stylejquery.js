$(document).ready(function() {
    /*
    $("p").css("color","red");

    //Events mouseenter, mouseleave
    $("button").mouseenter(function(){ 
        $(this).css("backgroundColor","pink");
    });
    
    //Events click, dblclick
    $("button").click(function(){
        //$("p").toggle(2000); //show, hide, toggle(speed,callfunction)
        //$("p").show(2000);
        $("p").hide(2000,function(){
            $("button").hide(2000);
        });
    });

    //Events hover
    $("button").hover(function(){
        $(this).css("backgroundColor","pink");
    },function(){
        $(this).css("backgroundColor","#DDD");
    });

    */

    //Effect fadeIn,fadeOut,fadeToggle(speed,callfunction), fadeTo(speed,opacity,callfunction)
    $("button").click(function() {
        //$(".div1").fadeIn(1000); //div display : none convert display:block 
        //$(".div1").fadeOut(1000, function() { $("button").fadeOut(1000); }); //div display : block convert display:none
        //$(".div1").fadeToggle(4000); //if div display : none convert display:block and if div display : block convert display:none
        //$(".div1").fadeTo(2000, 0.7, function() { $("button").fadeTo(1000, 0.7); });
    });

    //Effect slideDown, slideUp, slideToggle(speed,callfunction)
    $("button").click(function() {
        //$(".div2").slideDown(1000);    //div display : none convert display:block 
        //$(".div2").slideUp(2000);      //div display : block convert display:none
        //$(".div2").slideToggle(4000); //if div display : none convert display:block and if div display : block convert display:none
    });

    //stop(clearQuene,goToEnd), stop(default value false,default value false)
    $(".stop").click(function() {
        //$(".div2").stop(false, true);
    });

    //Effect Animate({css property,css property, speed,callfunction })
    $("button").click(function() {
        $(".div2").animate({ width: "600px", height: "200px", top: "300px", borderRadius: "50px", color: "#fff", backgroundColor: "#aa0000" }, 3000);
        $(".div2 input").animate({ display: "inline", height: "40px", width: "300px", background: "red" }, 4000);
    });

    //Chain Of Effect
    $(".div1").css({ background: "#a4a4a4" }).fadeIn(4000).fadeOut(4000).slideUp(4000).slideDown(4000);

    //text, html, val, attr
    //var div = $(".div1").text();
    //$("p").text(div); //p is empty take text .div1
    //alert(div);

    /*var div = $(".div1").html(); //
    $(".emptyp").html(div); //p is empty take text  and style.div1
    */


    $("button").click(function() {
        //$(".div2 input").val("Manar"); //value input = Manar
        //$(".div2 input").val($(".div1").text()); //value input = text div
        $("input").val($("a").attr("href")); //input take href a
        $(".emptyp").text($("input").val()); //p take value input

    });


    //Add Element Append , Prepend, After,Before, AppendTo, PrependTo
    $(".div3").append("<p>Append End</p>");
    $(".div3").prepend("<p>Prepend Start</p>");

    $(".div3").after("<h3>After</h3>");
    $(".div3").before("<h3>Before</h3>");

    $("<p>Append To</p>").appendTo(".div3");
    $("<p>Prepend To</p>").prependTo(".div3");


    //Remove Element , Empty Element
    $(".div4").click(function() {
        $(".div4").empty(); //Remove Any Element Inside .div4
    });
    $(".div4").dblclick(function() {
        $(this).remove(); //Remove .div4
        //$("div").remove(":contains('is')"); //Remove any div contain 'is' 
    });

    //CSS Classes(Add, Remove, Toggle)
    $("h1").click(function() {
        $(this).addClass("div4"); //Add Class
    });

    $("h1").dblclick(function() {
        $(this).removeClass("div4"); //Remove Class
    });

    /*$("h1").click(function() {
        $(this).toggleClass("div4"); //If Not Found Add Class ,If Found Remove
    });*/

    $("div.toggleclass").click(function() {
        $(this).toggleClass("border"); //Add Class
    });

    $("p.clickclass").click(function() {
        var color = $(".div1").css('color');
        $('p.classcolor').text(color);
    });



});