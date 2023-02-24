// define RNG
function RNG(range) {
  return Math.floor(Math.random() * range);
}

// the die is cast
let CPU_MOVE = RNG(3);

// define variables
let reasons = "${MOTIVE}";
let chell = "${TEST_SUBJECT_NAME}";
let badMove = true;
let isDraw = false;

// let's spin 'er up
while (badMove) {
	let rawUserInput = prompt(`Hello ${chell}! Welcome to the Aperture Science computer-aided enrichment center. We appreciate your cooperation. You are to play 'Rock, Paper, Scissors' now because of ${reasons}! Just type in your move and see if you can beat GLaDOS! Please, do make your choice.`, "");

	// treats user input
	rawUserInput.toLowerCase();
	rawUserInput.replace(/\s+/g, '');

	// gets user input from window object
	let userMove = window[rawUserInput];

	// handles demonic behavior
	if (userMove != rock && userMove != paper && userMove != scissors) {
		alert("That move is invalid.");
		badMove = true; 
	} else if (userMove == CPU_MOVE) {
		alert(`That's a draw! You chose ${userMove}, and CPU chose ${CPU_MOVE}.`)
		badMove = true;
	} else {
		badMove = false;
	}
}

// game logic
if (CPU_MOVE == rock && userMove == paper) {
	alert(`Nice! You chose ${userMove}, and GLaDOS chose ${CPU_MOVE}, which means you win! Congratulations!`);
} else if (CPU_MOVE == rock && userMove == scissors) {
	alert(`Too bad! You chose ${userMove}, and GLaDOS chose ${CPU_MOVE}, which means you lose! Try again!`);
} else if (CPU_MOVE == paper && userMove == rock) {
	alert(`Too bad! You chose ${userMove}, and GLaDOS chose ${CPU_MOVE}, which means you lose! Try again!`);
} else if (CPU_MOVE == paper && userMove == scissors) {
	alert(`Nice! You chose ${userMove}, and GLaDOS chose ${CPU_MOVE}, which means you win! Congratulations!`);
} else if (CPU_MOVE == scissors && userMove == rock) {
	alert(`Nice! You chose ${userMove}, and GLaDOS chose ${CPU_MOVE}, which means you win! Congratulations!`);
} else if (CPU_MOVE == scissors && userMove == paper) {
	alert(`Too bad! You chose ${userMove}, and GLaDOS chose ${CPU_MOVE}, which means you lose! Try again!`);
}