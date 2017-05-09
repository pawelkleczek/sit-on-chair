document.addEventListener('DOMContentLoaded', function() {

	var subMenu = document.querySelector('ul.subMenu');
	var subMenuParent = document.querySelector('li.hasChildren');

	subMenuParent.addEventListener('mousemove', function() {
		subMenu.classList.add('subMenuVisible');
	});
	subMenuParent.addEventListener('mouseout', function() {
		subMenu.classList.remove('subMenuVisible');
	});

	var products = document.querySelectorAll('[class*=product]');
	console.log(products[0].firstElementChild);

	for (var i = 0; i < products.length; i++) {
		products[i].addEventListener('mousemove', function() {
			this.firstElementChild.classList.add('hide');
		});
		products[i].addEventListener('mouseout', function() {
			this.firstElementChild.classList.remove('hide');
		});
	}

	var images = ['black_chair.png', 'red_chair.png', 'orange_chair.png'];

	var chair = document.querySelector('#slider img');

	var prev = document.getElementById('prev');
	var next = document.getElementById('next');
		var i = 1;

		next.addEventListener('click', function() {
			chair.src = './images/slider/' + images[i];
			if (i < 2) {
				i++;
			} else {
				i = 0;
			}
		});

		prev.addEventListener('click', function() {
			chair.src = './images/slider/' + images[i];
			if (i > 0) {
				i--;
			} else {
				i = 2;
			}
		});










});
