$(function() {
  //主轮播图
  $("#bannerBox").slider({
    boxh: 434, //盒子的高度
    w: 1000, //盒子的宽度
    h: 400, //图片的高度
    isShow: true, //是否显示控制器
    isShowBtn: true, //是否显示左右按钮
    controltop: 5, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
    controlsW: 20, //控制按钮宽度
    controlsH: 20, //控制按钮高度
    radius: 10, //控制按钮圆角度数
    controlsColor: "#d7d7d7", //普通控制按钮的颜色
    controlsCurrentColor: "#ff6600", //当前控制按钮的颜色
    isShowNum: true //是否显示数字
  });

  // 书籍轮播图
  $(".ebookSlide").slider({
    boxh: 217, //盒子的高度
    w: 330, //盒子的宽度
    h: 217, //图片的高度
    isShow: true, //是否显示控制器
    isShowBtn: true, //是否显示左右按钮
    controltop: 5, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
    controlsW: 20, //控制按钮宽度
    controlsH: 5, //控制按钮高度
    radius: 0, //控制按钮圆角度数
    controlsColor: "#d7d7d7", //普通控制按钮的颜色
    controlsCurrentColor: "#ff6600", //当前控制按钮的颜色
    isShowNum: true //是否显示数字
  });

  // 服装轮播

  $(".clothesSlide").slider({
    boxh: 338, //盒子的高度
    w: 427, //盒子的宽度
    h: 338, //图片的高度
    isShow: true, //是否显示控制器
    isShowBtn: true, //是否显示左右按钮
    controltop: 5, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
    controlsW: 20, //控制按钮宽度
    controlsH: 3, //控制按钮高度
    radius: 0, //控制按钮圆角度数
    controlsColor: "#d7d7d7", //普通控制按钮的颜色
    controlsCurrentColor: "#ff6600", //当前控制按钮的颜色
    isShowNum: true //是否显示数字
  });

  // 电子书激活样式
  //缓存li
  $lis = $(".ebooksHead >ul li");

  $lis.mouseenter(function() {
    //先清除所以li样式
    $lis.removeClass("active");
    //给当前li添加样式
    $(this).addClass("active");

    // tab切换样式
    // 获取当前选择索引
    var index = $(this).index();

    $(".rightContent > ul")
      .hide()
      .eq(index)
      .show();
  });

  // 电子书手风琴效果
  $(".ebooksRight >ul >li").mouseenter(function() {
    // 操作所有的部分
    // 显示所有li的标题
    $(".ebooksRight >ul >li .ebookTitle").removeClass("none");
    // 隐藏所有的li详情
    $(".ebooksRight >ul >li .ebookWord").removeClass("block");

    // 给当前选中的标题 隐藏
    $(".ebookTitle", this).addClass("none");
    // 给当前选中的详情显示
    $(".ebookWord", this).addClass("block");
  });

  // 服装激活样式
  $liclothes = $(".clothesHead>ul li");

  $liclothes.mouseenter(function() {
    //先清除所以li样式
    $liclothes.removeClass("active");
    //给当前li添加样式
    $(this).addClass("active");

    // tab切换样式
    // 获取当前选择索引
    var index = $(this).index();

    $(".clothesRight")
      .hide()
      .eq(index)
      .show();
  });

  //户外运动激活样式
  $liClothes = $(".sportsHead > ul li");

  $liClothes.mouseenter(function() {
    $liClothes.removeClass("active");
    $(this).addClass("active");
    // tab切换样式
    // 获取当前选择索引
    var index = $(this).index();

    $(".sportsRight")
      .hide()
      .eq(index)
      .show();
  });

  // 童装激活样式
  $lichildren = $(".childrenClothesHead > ul li");

  $lichildren.mouseenter(function() {
    $lichildren.removeClass("active");
    $(this).addClass("active");

    var index = $(this).index();
    $(".childrenClothesRight")
      .hide()
      .eq(index)
      .show();
  });

  // 推广商品激活样式
  $lipromotion = $(".promotionHead > ul >li");
  $lipromotion.mouseenter(function() {
    $lipromotion.removeClass("active");
    $(this).addClass("active");

    var index = $(this).index();
    $(".promotionContentWrapper").animate(
      {
        left: -index * 1170
      },
      500
    );
  });

  // 回到顶部事件

  // $(window).on("scroll",function(){

  // // 获取当前的窗口到顶部的距离
  // var distanceTop = $(this).scrollTop();
  // console.log(distanceTop);

  // if (distanceTop > 300) {

  //   $('.scrollTop').fadeIn();

  // }else{
  //   $(".scrollTop").fadeOut();
  // }

  // // 点击回到顶部
  // $(".scrollTop").click(function(){
  //   $("html,body").animate({
  //     "scrollTop":0
  //   },150)
  // })

  // })

  // 顶部搜索框

  //  $(`<div class="topSearchInput">
  //     <div class="topSearchInputLayout container clear">
  //   <div class="logo fl">
  //     logo
  //   </div>
  //     <div class="searchBox fr clear">
  //       <input type="text" placeholder="创意文具" >
  //       <button ></button>
  //     </div>
  //   </div>
  // </div>`) .appendTo("body");

  // // 监听事件
  // $(window).on("scroll",function(){

  //   // // 获取当前的窗口到顶部的距离
  //  var distanceTop = $(this).scrollTop();
  // console.log(distanceTop);

  // if (distanceTop > 500) {

  //   $('.topSearchInput').slideDown();

  // }else{
  //   $(".topSearchInput").slideUp();
  // }

  // })

  // 左侧楼梯事件
  // li移入移出事件

  $(".floor > ul > li").hover( function() {
        // 定义颜色数组

        var bgColor = [
          "#CAFF70",
          "#93d46f",
          "#f65727",
          "#bb9dee",
          "#ff7394",
          "#c2ec51",
          "#00E5EE"
        ];
        var index = $(this).index();

        // 移入事件
        $(this).css({
          "background-color": bgColor[index],
          "background-position-x": -40
        });
        $(this).animate(
          {
            width: "80px"
          },
          50
        );
      }, function() {
        $(this).animate(
          {
            width: "40px"
          },
          50,
          function() {
            $(this).css({
              "background-color": " ",
              "background-position-x": 0
            });
          }
        );
      }).click(function() {
      // 获取索引
      var index = $(this).index();
      // 获取到顶部的距离
      var distanceTop = $(" .floorWrapper")
        .eq(index)
        .offset().top;
      // 滚动到指定的距离
      $("html , body").animate(
        {
          scrollTop: distanceTop - 50
        },
        500
      );
    });




    
});
