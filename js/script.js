document.addEventListener('DOMContentLoaded', () => {
	const toDoEvents = {
		events: []
	};


	const addInput = document.querySelector('.add-input'),
		addForm = document.querySelector('form.add'),
		listEvents = document.querySelector('.todolistmain');
	addForm.addEventListener('submit', (event) => {
		event.preventDefault();
		let newEvent = addInput.value;
		if (newEvent.length > 37) {
			newEvent = `${newEvent.substring(0, 38)}...`;
		}
		if (newEvent) {
			if (toDoEvents.events.length < 7) {
				toDoEvents.events.push(newEvent);
				event.target.reset();
				addEvents(toDoEvents.events, listEvents);
			
			}
		}
	});


	function addEvents(events, parent) {
		parent.innerHTML = '';
		events.forEach((event, i) => {
			parent.innerHTML += `<li class="todolistli">${event}<div class="apply"></div><div class="delete"></div></li>`;
		});
		document.querySelectorAll('.delete').forEach((btn, i) => {
			btn.addEventListener('click', () => {
				btn.parentElement.remove();
				toDoEvents.events.splice(i, 1);
				addEvents(events, parent);
			});
		});
		document.querySelectorAll('.apply').forEach((btn, i) => {
			btn.addEventListener('click', () => {
				btn.parentElement.style.color = '#41B3A3';
			});
		});


		addEvents(listEvents);
	}
});

