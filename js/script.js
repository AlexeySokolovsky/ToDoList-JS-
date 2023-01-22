document.addEventListener('DOMContentLoaded', () => {
	const addInput = document.querySelector('.add-input'),
		addForm = document.querySelector('form.add'),
		listEvents = document.querySelector('.todolistmain');
	addForm.addEventListener('submit', (event) => {
		event.preventDefault();
		let value = addInput.value;
		if (value) {
			if (listEvents.childNodes.length < 8) {
				if (value.length > 32) {
					value = `${value.substring(0, 32)}...`;

				}
				addToList(value, listEvents);
			}
		}
		event.target.reset();

	});

	let addToList = (item, list) => {
		list.innerHTML += `<li class="todolistli">${item}<div class="apply"></div><div class="delete"></div></li>`;
		document.querySelectorAll('.delete').forEach((elem, i) => {
			elem.addEventListener('click', () => {
				elem.parentElement.remove();
			});
		});
		document.querySelectorAll('.apply').forEach((elem, i) => {
			elem.addEventListener('click', () => {
				elem.parentElement.style.color = '#41B3A3';
			});
		});

	};

});


