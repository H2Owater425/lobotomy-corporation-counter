(function () {
	const counterList = document.getElementById('counterList');

	document.getElementById('addCounter').addEventListener('click', function () {
			const counter = document.createElement('li');
			const titleInput = document.createElement('input');
			const number = document.createElement('span');
			const increasingButton = document.createElement('button');
			const decreasingButton = document.createElement('button');

			titleInput.setAttribute('type', 'text');
			titleInput.setAttribute('list', 'abnormality');
			
			number['innerText'] = ' 0';

			number.addEventListener('click', function () {
				counter.remove();

				return;
			});
			
			increasingButton['innerText'] = '➕';

			increasingButton.addEventListener('click', function () {
				number['innerText'] = Number(number['innerText']) + 1;

				return;
			});

			decreasingButton['innerText'] = '➖';

			decreasingButton.addEventListener('click', function () {
				if(number['innerText'] !== '0') {
					number['innerText'] = Number(number['innerText']) - 1;
				}

				return;
			})

			counter.appendChild(titleInput);
			counter.appendChild(number);
			counter.appendChild(decreasingButton);
			counter.appendChild(increasingButton);

			counterList.appendChild(counter);
	});

	document.getElementById('removeAllCounter').addEventListener('click', function () {
		for(let i = counterList['childNodes']['length'] - 1; i !== -1; i--) {
			counterList['childNodes'][i].remove();
		}
		
		return;
	});
})();