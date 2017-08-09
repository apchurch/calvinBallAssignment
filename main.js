//here I have listed the applicable variables for calvinBall
var score;
var last_play;
var broom;
var has_ball;
var is_in_tree;
var crying;


//here are the players, which can only play one at a time
//Player One
        //  score = 193;
        //  last_play = 'Q';
        //  broom = 'handle';
        //  has_ball = false;
        //  is_in_tree = false;
        // crying = false;

//Player Two
         // score = 394;
         // last_play = "W";
         // broom = "none";
         // has_ball = true;
         // is_in_tree = true;
         // crying = false; 
        

//Player Three
	score = "f";
        last_play = 1.5;
        broom = "brush";
        has_ball = true;
        is_in_tree = false;
        crying = true
//here I have fixed the bug, using 'typeof' so that Player Three begins with 500 points & can now play the game correctly.
if (typeof score !== 'number') {
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