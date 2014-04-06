var	question = document.getElementById("question"),
	trueClick = document.getElementById("true"),
	falseClick = document.getElementById("false"),
	scoreDispley = document.getElementById("scoreDispley"),
	modal = document.getElementById("modal"),
	congrats = document.getElementById('congrats'),
	newGame = document.getElementById("newGame"),
	modalCorrect = document.getElementById("modalCorrect"),
	modalWrong = document.getElementById("modalWrong"),
	score = 0,
	currentQuestion = 0,
	questionsArray = [	
					{
						question:'Is a brick alive?',
						answer: false
					},
					{
						question: 'Is a tree alive?',
						answer: true
					},
					{
						question:'Is ivy alive?',
						answer: true
					},
					{
						question:'Is a TV alive?',
						answer: false
					},
					{
						question:'Is a dog alive?',
						answer: true
					},
					],
	questionCount = questionsArray.length;

newGame.addEventListener("click", setStage, false);
trueClick.addEventListener("click", function(){playerAnswer(true)}, false);
falseClick.addEventListener("click", function(){playerAnswer(false)}, false);


modalCorrect.addEventListener("click", function(){
	modalCorrect.removeAttribute('class');
})

modalWrong.addEventListener("click", function(){
	modalWrong.removeAttribute('class');
})

function setStage(){
	currentQuestion = 0;
	score = 0;
	scoreDispley.innerHTML = score;	
	questionCount = questionsArray.length;
	question.innerHTML = questionsArray[currentQuestion].question;

	console.log('This quiz has ' + (questionCount)  + ' questions.');
	console.log('Your score is ' + score);
}
setStage();


function processAnswer(num) {
	if(num < questionsArray.length) {
		question.innerHTML = questionsArray[num].question;
		questionCount--;
		console.log('Question: ' + num);		
	} else {
		gameOver();
	}
}


function playerAnswer(answer) {
	if(answer == questionsArray[currentQuestion].answer) {
		score++;
		modalCorrect.className = "is-visible";
	} else {
		modalWrong.className = "is-visible";
	}

	currentQuestion++;
	processAnswer(currentQuestion);
	scoreDispley.innerHTML = score;
}


function gameOver() {
	trueClick.removeEventListener("click", playerAnswer, false);
	falseClick.removeEventListener("click", playerAnswer, false);

	congrats.innerHTML = 'game over, youre score is: ' + score;
	modal.className = 'is-visible';
	modal.addEventListener("click", function(){
		modal.removeAttribute('class')
		setStage();
	}, false);
}
