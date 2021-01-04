$(function(){
  /*script 영역 gallery script  만들기 예*/
  var marginLeftPw;
  $("img.prev").css("display","none");//초기실행 시 prev 버튼 삭제
  /*thumb nail 이미지로 작동 하는 스크립트*/
  $("#navi a").click(function(){
    if($("#main img:last").is(":not(:animated)")){
      var imgSrc = $(this).attr("href");
      $("#main img").before("<img src='"+imgSrc+"' alt=''>");
      $("#main img:last").fadeOut("slow",function(){
        $(this).remove();
      });
    }
    // $("#main img").attr("src",$(this).attr("href"));
    return false;
  });


  console.log(parseInt($("#navi .page_wrap").css("margin-left")))
  //parseInt : string 혹은 다른 자료형을 정수형으로 변환해주는 method

  /*prev, next 버튼으로 작동 하는 스크립트*/
  const marginNumber = 300;

  $("img.next").click(function(){
    marginLeftPw = $("#navi .page_wrap").css("margin-left");
    $("#navi .page_wrap").animate({ marginLeft: parseInt(marginLeftPw) - marginNumber +"px"},"fast",function(){
      /*next 버튼을 click 후 animation 끝난 후 실행 영역*/
      marginLeftPw = parseInt($("#navi .page_wrap").css("margin-left"));
      $("img.prev").css("display","inline-block");
      if( marginLeftPw == -600 ){//3번째 페이지 노출 될때
        $("img.next").css("display","none");
      }
    });
  });

  $("img.prev").click(function(){
    marginLeftPw = $("#navi .page_wrap").css("margin-left");
    $("#navi .page_wrap").animate({ marginLeft: parseInt(marginLeftPw) + marginNumber +"px"},"fast",function(){
      /*prev 버튼을 click 후 animation 끝난 후 실행 영역*/
      marginLeftPw = parseInt($("#navi .page_wrap").css("margin-left"));
      $("img.next").css("display","inline-block");
      console.log(marginLeftPw);
      if( marginLeftPw == 0 ){
        $("img.prev").css("display","none");
      }
    });
  });




});// document ready
