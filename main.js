var score;
var last_play;
var broom;
var has_ball;
var is_in_tree;
var crying;



//Player One
         score = 193;
         last_play = 'Q';
         broom = 'handle';
         has_ball = false;
         is_in_tree = false;
        crying = false;

//Player Two
        var score = 394;
        var last_play = "W";
        var broom = "none";
        var has_ball = true;
        var is_in_tree = true;
        var crying = false; 
        

//Player Three
		var score = "f";
        var last_play = 1.5;
        var broom = "brush";
        var has_ball = true;
        var is_in_tree = false;
        var crying = true

if (score ==! 'number') {
	score = 500;
        
}
console.log(score)

if (crying === true) {
	score = score - 300;
}
else {
	score = score + 50;
}
console.log(score)

if (last_play === 'Q') {
	score = score - 77;
}
console.log(score)

if (is_in_tree === true && last_play !== 'number') {
	score = score + 395;
}
console.log(score)

if (broom === 'handle') {
	score = score * 2;
}
else if 
	(broom === 'brush') {
		score = score * 3;
}
else {
	score = score / 2;
}
console.log(score)

if (has_ball === true && is_in_tree === false) {
	score = score * 1.5;
}
else if 
	(crying === true) {
		score = score;
	}
console.log(score)

if (last_play === 'number') {
	score = score * score;
}
console.log(score)