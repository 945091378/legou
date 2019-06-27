// 顶部搜索框
$(function(){
    window.searchObj={

topSearchInput:function(){


$(`<div class="topSearchInput">
<div class="topSearchInputLayout container clear">
<div class="logo fl">
logo
</div>
<div class="searchBox fr clear">
  <input type="text" placeholder="创意文具" >
  <button ></button>
</div>
</div>
</div>`) .appendTo("body");

// 监听事件
$(window).on("scroll",function(){

// // 获取当前的窗口到顶部的距离
var distanceTop = $(this).scrollTop();



if (distanceTop > 500) {

$('.topSearchInput').slideDown(0);

}else{
$(".topSearchInput").slideUp(0);
}

})
}
}
})