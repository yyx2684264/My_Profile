var em = 16;
var min_height = 640;
var my_info = document.getElementById("my_info");
var big_content = document.getElementById("big_content");
var main_content = document.getElementById("main_content");
var checkbox = document.getElementById("nav_checkbox");

function item_click() {
    checkbox.checked = false;
};

function resize_info() {
    my_info.style.height = window.innerHeight - 55 + "px";
    big_content.style.height = window.innerHeight - 55 + "px";
    main_content.style.height = window.innerHeight - 55 + "px";
    $(".info_block").css("height", window.innerHeight - 55 - 16 + "px");
    if ((window.innerHeight >= min_height && window.innerWidth >= 56 * em) || (window.innerWidth <= 56 * em)) {
        $(".title_div h1").css("opacity", "");
        $(".title_div h1").css("height", "");
        $(".title_div h1").css("width", "");
        $(".title_div h1").css("border-radius", "");
        $(".title_div h1").css("color", "");
        $(".title_div h1").css("background-image", "");
        $(".title_div h1").css("line-height", "");
        $(".title_div h1").css("animation", "");
    } else if (window.innerHeight <= min_height && window.innerWidth >= 56 * em) {
        $(".title_div h1").css("opacity", "0.8");
        $(".title_div h1").css("height", "50px");
        $(".title_div h1").css("width", "99%");
        $(".title_div h1").css("border-radius", "1%");
        $(".title_div h1").css("color", "white");
        $(".title_div h1").css("background-image", "none");
        $(".title_div h1").css("line-height", "50px");
        $(".title_div h1").css("animation", "none");
    };
};

window.onresize = function() {
    resize_info();
};

resize_info();