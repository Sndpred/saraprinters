document.addEventListener('DOMContentLoaded',function(){if('onwheel'in document){window.onwheel=function(event){if(typeof(this.RDSmoothScroll)!==undefined){try{window.removeEventListener('DOMMouseScroll',this.RDSmoothScroll.prototype.onWheel);}catch(error){}
event.stopPropagation();}};}else if('onmousewheel'in document){window.onmousewheel=function(event){if(typeof(this.RDSmoothScroll)!==undefined){try{window.removeEventListener('onmousewheel',this.RDSmoothScroll.prototype.onWheel);}catch(error){}
event.stopPropagation();}};}
try{$('body').unmousewheel();}catch(error){}});function include(url){document.write('<script src="'+url+'"></script>');return false;}
include('js/jquery.cookie.js');include('js/device.min.js');include('js/jquery.easing.1.3.js');include('js/jquery.ui.totop.js');$(function(){$().UItoTop({easingType:'easeOutQuart'});});include('js/jquery.mousewheel.min.js');include('js/jquery.simplr.smoothscroll.min.js');$(function(){if($('html').hasClass('desktop')){$.srSmoothscroll({step:150,speed:800});}});var currentYear=(new Date).getFullYear();$(document).ready(function(){$("#copyright-year").text((new Date).getFullYear());});include('js/superfish.js');include('js/jquery.mobilemenu.js');$(function(){var viewportmeta=document.querySelector&&document.querySelector('meta[name="viewport"]'),ua=navigator.userAgent,gestureStart=function(){viewportmeta.content="width=device-width, minimum-scale=0.25, maximum-scale=1.6, initial-scale=1.0";},scaleFix=function(){if(viewportmeta&&/iPhone|iPad/.test(ua)&&!/Opera Mini/.test(ua)){viewportmeta.content="width=device-width, minimum-scale=1.0, maximum-scale=1.0";document.addEventListener("gesturestart",gestureStart,false);}};scaleFix();if(window.orientation!=undefined){var regM=/ipod|ipad|iphone/gi,result=ua.match(regM)
if(!result){$('.sf-menu li').each(function(){if($(">ul",this)[0]){$(">a",this).toggle(function(){return false;},function(){window.location.href=$(this).attr("href");});}})}}});var ua=navigator.userAgent.toLocaleLowerCase(),regV=/ipod|ipad|iphone/gi,result=ua.match(regV),userScale="";if(!result){userScale=",user-scalable=0"}
document.write('<meta name="viewport" content="width=device-width,initial-scale=1.0'+userScale+'">')

 function openRegister() {
  $('#SelectButton').hide();
  $('#LoginForm').hide();  
  $('#RegisterForm').show();
  
  $('#L-Username').val('');
  $('#L-Email').val('');
  $('#L-Password').val('');
  $('#AcceptRelogin').prop('checked', false);
}

function openLogin() {
  $('#SelectButton').hide();
  $('#RegisterForm').hide();  
  $('#LoginForm').show();
  
  $('#Username').val('');
  $('#Email').val('');
  $('#Password').val('');
  $('#C-Password').val('');
  $('#AcceptNewsletter').prop('checked', false);
  $('#AcceptPolicy').prop('checked', false);
}

function backBegin() {
  $('#SelectButton').show();
  $('#RegisterForm').hide();
  $('#LoginForm').hide();
  
  $('#Username').val('');
  $('#Email').val('');
  $('#Password').val('');
  $('#C-Password').val('');
  $('#AcceptNewsletter').prop('checked', false);
  $('#AcceptPolicy').prop('checked', false);
  $('#L-Username').val('');
  $('#L-Email').val('');
  $('#L-Password').val('');
  $('#AcceptRelogin').prop('checked', false);
}

MicroModal.init();

$(document).ready(function() {
  $("#owl-demo").owlCarousel({
      autoPlay: 3000, //Set AutoPlay to 3 seconds
      items: 2,
      itemsDesktop: [1199, 3],
      itemsDesktopSmall: [979, 3]
  });
});