const size = 10;

let html = '';

for (let i = 0; i <= size; i++) {
	for (let j = 0; j <= size; j++) {
		let counter = i === 0
			? j
			: j === 0
				? i
				: i*j;
		html += `<div${j === i ? ' class="accent"' : ""} data-index="${i}_${j}">${counter || "X"}</div>`;
	}
}

document.getElementById("wrapper").innerHTML = html;