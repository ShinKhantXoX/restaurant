$(document).ready(function(){
  
  $(window).scroll(function(){
  	let abc =$(this).scrollTop();
  	if(abc >= 50){
  	   $(".navbar").addClass("menus");
  	   $(".mbrand").addClass("smal");
  	}else{
  		$(".navbar").removeClass("menus");
  		 $(".mbrand").removeClass("smal");
  	}
  });

	$(".lunch").hide();
	$(".dinner").hide();
	$(".kid").hide();
	$(".desserts").hide();


	$(".order-menus").click(function () {
		$(this).siblings().removeClass("activeitems");
		$(this).addClass("activeitems");

		let getattvalue = $(this).attr('data-filter');
		if(getattvalue === "brunch"){
			$(".filters").hide();
			$('.brunch').show('slide',500);
		}else{
			$('.filters').hide();
			$('.filters').not('.'+getattvalue).hide('drop',1500);
			$('.filters').filter('.'+getattvalue).show('slide',1000)
		}
	});
	let d = new Date();
	let getfullyear = d.getFullYear();
	$("#copyright").html(getfullyear)

   
})

  