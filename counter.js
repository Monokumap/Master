//Счетчик

window.addEventListener('click',function(event){

var counter;

/*Проверка элемента на кнопку + или -*/

	if (event.target.dataset.action==='add'){

		/*Ищем родителя для того чтобы найти лабел*/

		const counterWrapper = event.target.closest('.items_couter_obertka');

		/*Ищем лабель для того чтобы вписать в него нужное значение*/		

		const counter = counterWrapper.querySelector('[data-counter]');

		console.log(counter);

		counter.innerText = ++counter.innerText;

	}



	if (event.target.dataset.action==='minus'){

		const counterWrapper = event.target.closest('.items_couter_obertka');

		const counter = counterWrapper.querySelector('[data-counter]');

		console.log(counter);

	if (parseInt(counter.innerText)>1){

		counter.innerText = --counter.innerText;

	}	

	}		
	
});