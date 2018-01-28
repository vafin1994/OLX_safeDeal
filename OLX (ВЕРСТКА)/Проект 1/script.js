
//SLIDER HOW TO DEAL
var Slide2Title = "Название слайда 2";
var Slide2Instr = "Инструкция которая будет распологаться в слайде 2";
var Slide3Title = "Название слайда 3";
var Slide3Instr = "Инструкция которая будет распологаться в слайде 3";
var Slide4Title = "Название слайда 4";
var Slide4Instr = "Инструкция которая будет распологаться в слайде 4";
var Slide5Title = "Название слайда 5";
var Slide5Instr = "Инструкция которая будет распологаться в слайде 5";
var Slide6Title = "Название слайда 6";
var Slide6Instr = "Инструкция которая будет распологаться в слайде 6";
$(document).ready(function(){
	$("#nav_menu_triangle_one").on("click", function(){
		$(".slider #text p").text(Slide2Title);
		$(".slider #text span").text(Slide2Instr);
		$("#array span").text("2")
		
	});
	$("#nav_menu_triangle_two").on("click", function(){
		$(".slider #text p").text(Slide3Title);
		$(".slider #text span").text(Slide3Instr);
		$("#array span").text("3")
		
	});
	$("#nav_menu_triangle_three").on("click", function(){
		$(".slider #text p").text(Slide4Title);
		$(".slider #text span").text(Slide4Instr);
		$("#array span").text("4")
		
	});
	$("#nav_menu_triangle_four").on("click", function(){
		$(".slider #text p").text(Slide5Title);
		$(".slider #text span").text(Slide5Instr);
		$("#array span").text("5")
		
	});
	$("#nav_menu_triangle_five").on("click", function(){
		$(".slider #text p").text(Slide6Title);
		$(".slider #text span").text(Slide6Instr);
		$("#array span").text("6")
		
	});
});
