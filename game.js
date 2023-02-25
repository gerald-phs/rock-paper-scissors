// define RNG
function RNG(range) {
  return Math.floor(Math.random() * range);
}

// computer chooses, store in variable
let CPU_MOVE = RNG(3);

// define all other variables
let reasons = "${MOTIVE}";
let chell = "${TEST_SUBJECT_NAME}";
let gameRuns = true;

// game variables
let rock = 0;
let paper = 1;
let scissors = 2;

// define the user moves as parts of the window object so compiler actually gets them instead of 'undefined'
window.rock = 0;
window.paper = 1;
window.scissors = 2;

// create this object that'll associate a variable name to its value so we don't change the pretty backticks and ${variable} things because i love them. i don't think this'll make the code any more reusable or modular but okay this is a simple game plus apparently there's no way to access the variable's name itself and transform it into a string so yeah, leave this here for future reference
let showUserMove = {0: "rock", 1: "paper", 2: "scissors"};
let showComputerMove = {0: "rock", 1: "paper", 2: "scissors"};

// spin 'er up
while (gameRuns) {
	CPU_MOVE = RNG(3);
	let rawUserInput = prompt(`Hello ${chell}! Welcome to the Aperture Science computer-aided enrichment center. We appreciate your cooperation. It's time for 'Rock, Paper, Scissors' now because of ${reasons}! Just type in your move and see if you can beat GLaDOS! Make your choice.`, "");

	// get user input from window object, treat it
	let userMove = window[rawUserInput.trim().toLowerCase().replace(/\s+/g, '')];

	// handle invalid moves and draws
	if (userMove === undefined) {
		alert("That move is invalid.");
	} else if (userMove == CPU_MOVE) {
		alert(`That's a draw! You chose ${showUserMove[userMove]}, and GLaDOS chose ${showComputerMove[CPU_MOVE]}.`)
	
	// actual game
	} else if (CPU_MOVE === rock && userMove === paper) { 
		alert(`Nice, ${showUserMove[userMove]} beats ${showComputerMove[CPU_MOVE]}, which means you win! Congratulations!`);
	} else if (CPU_MOVE === rock && userMove === scissors) {
		alert(`Too bad... ${showComputerMove[CPU_MOVE]} beats ${showUserMove[userMove]}, which means you lose! Try again!`);
	} else if (CPU_MOVE === paper && userMove === rock) {
		alert(`Too bad... ${showComputerMove[CPU_MOVE]} beats ${showUserMove[userMove]}! GLaDOS wins. Try again!`);
	} else if (CPU_MOVE === paper && userMove === scissors) {
		alert(`Nice, ${showUserMove[userMove]} beats ${showComputerMove[CPU_MOVE]}, which means you win! Congratulations!`);
	} else if (CPU_MOVE === scissors && userMove === rock) {
		alert(`Outstanding! It seems that ${showUserMove[userMove]} beats ${showComputerMove[CPU_MOVE]}. GLaDOS is crying now. You monster. Nonetheless, congratulations!`);
	} else if (CPU_MOVE === scissors && userMove === paper) {
		alert(`Too bad! You chose ${showUserMove[userMove]}, and GLaDOS chose ${showComputerMove[CPU_MOVE]}, which means you lose! Try again!`);
	}
}


