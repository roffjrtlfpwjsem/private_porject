$(document).ready(function(){
$('.bxslider').bxSlider({
auto: true
});
});
// 리사이즈
$(window).on("resize",function () {
  var b = $("body");
  var w = $(window).width();
  if (w >= 1024) {
    b.attr("class","");
    b.addClass("pc");
    $(".btn_mo").hide()
    $(".dim").fadeOut()
    $(".mo_gnb").hide()
  }else if (w >= 480 && w < 1024) {
    b.attr("class","");
    b.addClass("ta");
    $(".btn_mo").show()
    $(".mo_gnb").show()
    $(".dim").fadeOut()
    $(".mo_gnb").css({"margin-left":-300})
  }else{
    b.attr("class","");
    b.addClass("mo");
  }
});
// pc버전 gnb
$(function () {
  $(window).resize()
    $(".h_wrap ul").on("mouseover focus", function () {
      var init = true;
      if (init) {
        $(".gnb").slideDown(500);
        init = false;
      }
      $(".gnb").on("mouseleave blur",function () {
        $(".gnb").stop().slideUp();
        init = true;
      })
    })
})
// 모바일 gnb
$(function () {
  $(".btn_mo").on("click",function (e) {
    e.preventDefault()
      $(".dim").fadeIn()
      $(".mo_gnb").css({"margin-left":0})
      $(this).hide()
  })
  $(".dim").on("click",function (e) {
      e.preventDefault()
    $(".mo_gnb").css({"margin-left":-300})
    $(this).hide()
    $(".btn_mo").show()
  })
  $(".mo_gnb li a").on("click",function (e){
      e.preventDefault()
    var show = $(this).next().css("display")
      $(this).parent().parent().find("a").css({"background":"#fff", "color":"#333"})
      $(this).css({"background":"#00833f", "color":"#fff"})
      if (show == "none") {
        $(this).parent().parent().find(".m_gnb_sub").slideUp()
        $(this).next().slideDown()
      }else {
        $(this).parent().parent().find("a").css({"background":"#fff", "color":"#333"})
        $(this).next().slideUp()
      }
  })
})
// 검색
$(function () {
  $(".serch").on("click",function () {
    alert("준비중!")
  })
})
// 마우스휠
$(function () {
  $("body").on("mousewheel", function (e) {
     console.log(e.originalEvent.wheelDelta);
    //  -120 아래쪽으로휠
    //  120 위쪽으로 휠
    });
})
