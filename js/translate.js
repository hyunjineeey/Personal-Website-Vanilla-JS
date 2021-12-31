$(document).ready(function() {
    $.engFun = function(){ 
        $(".kr").addClass("hide");
        $('.eng').removeClass("hide");
    }

    $.krFun = function(){ 
        $(".kr").removeClass("hide");
        $('.eng').addClass("hide");
    }

    $("#translateToEng").on("click touchstart", function() {
        $.engFun();
        console.log("Translated to English");
        localStorage.setItem('language', 'english');
    });

    $("#translateToKr").on("click touchstart", function() {
        $.krFun();
        console.log("Translated to Korean");
        localStorage.setItem('language', 'korean');
    });

    if (localStorage.getItem('language') == 'english') {
        $.engFun();
    }
    if (localStorage.getItem('language') == 'korean') {
        $.krFun();
    }
});

