//Открытые корзины:

var model = document.querySelector('[data-action="model_basket"]');

var open_btn = document.querySelector('[data-action="open_model_basket"]');

var close = document.getElementById("close_model_basket");





open_btn.onclick = function (){



	model.style.display = "block";

}

close.onclick = function (){

	model.style.display = "none";

}







var formalk = document.querySelector('[data-action="forma_lk"]');

var open_btn_lk = document.querySelector('[data-action="open_form_lk"]');

var close_lk = document.getElementById("close_form_lk");





open_btn_lk.onclick = function (){



	formalk.style.display = "block";

}

close1.onclick = function (){

	formalk.style.display = "none";

}