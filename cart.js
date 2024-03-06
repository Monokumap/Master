//Для карточки

const cart_wrapper = document.querySelector('.cart_wrapper')

window.addEventListener('click',function(event){

if (event.target.hasAttribute('data-cart')){

	const card = event.target.closest('.card');

	const productInfo = {

		id: card.dataset.id,

		imgSrc: card.querySelector('.img_preparat').getAttribute('src'),

		title: card.querySelector('.opisanie_tovara').innerText,

		price: card.querySelector('.new_price').innerText,

		counter: card.querySelector('[data-counter]').innerText,

	};



const items_in_cart = cart_wrapper.querySelector(`[data-id="${productInfo.id}"]`);



console.log(items_in_cart);

if(items_in_cart){

const counter_elements = items_in_cart.querySelector('[data-counter]');

counter_elements.innerText = parseInt(counter_elements.innerText) + parseInt(productInfo.counter);
}

else  {


	const cart_items_html = 

          `<figure data-id="${productInfo.id}" class="card">
		<img class="img_preparat" src="${productInfo.imgSrc}">
		<p class="opisanie_tovara">${productInfo.title}</p>
		<p class="${productInfo.price}">649₽</p>
			<div class="items_couter_obertka">
			<button class="but" data-action="add">+</button>
		<label  data-counter="counter">${productInfo.counter}</label>
		<button class="but2" data-action="minus">-</button>
		</div>
	</figure>`;



cart_wrapper.insertAdjacentHTML('beforeend',cart_items_html);



}

//Сброс счетчика

card.querySelector('[data-counter]').innerText = '1';

}

})