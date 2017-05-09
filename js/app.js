document.addEventListener('DOMContentLoaded', function() {

	var subMenu = document.querySelector('ul.subMenu');
	var subMenuParent = document.querySelector('li.hasChildren');

	subMenuParent.addEventListener('mousemove', function() {
		subMenu.classList.add('subMenuVisible');
	});
	subMenuParent.addEventListener('mouseout', function() {
		subMenu.classList.remove('subMenuVisible');
	});









});
