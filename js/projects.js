$(document).ready(function() {
    $(".all_click").on("click", function() {
        $('.all').removeClass("hide_projects");
    });
    $(".school_click").on("click", function() {
        $('.all:not(".school")').addClass("hide_projects");
        $('.school').removeClass("hide_projects");
    });
    $(".personal_click").on("click", function() {
        $('.all:not(".personal")').addClass("hide_projects");
        $('.personal').removeClass("hide_projects");
    });
    $(".web_click").on("click", function() {
        $('.all:not(".web")').addClass("hide_projects");
        $('.web').removeClass("hide_projects");
    });
    $(".java_click").on("click", function() {
        $('.all:not(".java")').addClass("hide_projects");
        $('.java').removeClass("hide_projects");
    });
    $(".python_click").on("click", function() {
        $('.all:not(".python")').addClass("hide_projects");
        $('.python').removeClass("hide_projects");
    });
    $(".ocaml_click").on("click", function() {
        $('.all:not(".ocaml")').addClass("hide_projects");
        $('.ocaml').removeClass("hide_projects");
    });
    $(".c_click").on("click", function() {
        $('.all:not(".c")').addClass("hide_projects");
        $('.c').removeClass("hide_projects");
    });
});