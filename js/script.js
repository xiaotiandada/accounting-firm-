$(window).load(function() {
	 console.log('如果您看到了这里!');
	 console.log('那么说明你是一个大佬!');
	 console.log('如果不介意的话来一起交流吧!');
	 console.log('QQ:952822399');
 $("#weibo").mouseover(function () {
 	$('.weibo1').css('display','block');
 });
  $("#weibo").mouseout(function () {
 	$('.weibo1').css('display','none');
 });

   $("#weixin").mouseover(function () {
 	$('.weixin1').css('display','block');
 });
  $("#weixin").mouseout(function () {
 	$('.weixin1').css('display','none');
 });
});