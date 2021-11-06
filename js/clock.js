const clock = document.querySelector("h2#clock");

function getClock() {
	const date = new Date();
	const hours = String(date.getHours()).padStart(2, "0");
	const minutes = String(date.getMinutes()).padStart(2, "0");
	const seconds = String(date.getSeconds()).padStart(2, "0");

	//clock.innerText = hours + ":" + minutes + ":" + seconds;
	clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);

// function get_XmasDay() {
// 	const dday = new Date("2021, 12, 25, 0:00:00").getTime();
// 	const today = new Date().getTime();
// 	const gapDay = dday - today;
// 	const day = String(Math.floor(gapDay / (1000 * 60 * 60 * 24))).padStart(
// 		2,
// 		"0"
// 	);
// 	const hour = String(
// 		Math.floor((gapDay % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60 * 24))
// 	).padStart(2, "0");
// 	const minutes = String(
// 		Math.floor((gapDay % (1000 * 60 * 60)) / (1000 * 60))
// 	).padStart(2, "0");
// 	const seconds = String(Math.floor((gapDay % (1000 * 60)) / 1000)).padStart(
// 		2,
// 		"0"
// 	);

// 	clock.innerText = `${day}d ${hour}h ${minutes}m ${seconds}s`;
// }

// get_XmasDay();
// setInterval(get_XmasDay, 1000);
