// Challenge 1: Age in days

function ageInDays(){

    var birthYear=prompt('Enter birthyear - ');

    var ageInDayss=(2021-birthYear)*365;   
    var h1 = document.createElement('h1'); 
    var textAnswer = document.createTextNode('You are '+ ageInDayss + 'days old');
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);

}

function reset(){
    document.getElementById('ageInDays').remove();
}

// Challenge 2: Cat Generator

function generateCat(){
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src="http://edgecats.net/";
    div.appendChild(image);
}

// Challenge 3: Rock paper scissors

function rpsGame(yourChoice){
    console.log(yourChoice);
   var humanChoice, botChoice;
   humanChoice = yourChoice.id;
   console.log('Human Choice: ',humanChoice);
   botChoice = numberToChoice(randomToRpsInt());
   console.log('Computer Choice: ',botChoice);
   results = decideWinner(humanChoice,botChoice);   // returns array [1,0] human won bot lost
   var message = finalMessage(results); // {'message':'You won!','color':'green'}
  
   rpsFrontEnd(yourChoice.id,botChoice,message);


}

function randomToRpsInt(){
    return Math.floor(Math.random()*3); // returns an integer between 0,1,2
}

function numberToChoice(number){
    return ['rock','paper','scissors'][number];
}

function decideWinner(yourChoice,computerChoice){
    var rpsDatabase = {
        'rock': {'scissors': 1,'rock': 0.5,'paper': 0},
        'paper': {'rock': 1,'paper': 0.5,'scissors':0},
        'scissors': {'paper':1,'scissors':0.5,'rock':0},
    };

    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore,computerScore];
}

function finalMessage([yourScore,computerScore]){
    if(yourScore===0){
        return {'message':'You Lost!','color':'red'};
    }
   else if(yourScore===1){
        return {'message':'You Won!','color':'green'};
    }
   else return {'message':'You tied!','color':'yellow'};
    
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){

    var imageDatabase={
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src,
    }

    // Removing all the image
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML="<img src='" + imageDatabase[humanImageChoice]+"' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1);'>"
    messageDiv.innerHTML="<h1 style='color: " +finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML="<img src='" + imageDatabase[botImageChoice]+"' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(233,38,24,1);'>"
    
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);

}

//Challenge 4: Change color of all buttons

var all_buttons = document.getElementsByTagName('button');
console.log(all_buttons);
var copyAllButtons = [];

for(let i=0;i<all_buttons.length;i++){
    copyAllButtons.push(all_buttons[i].classList[1]); // get the 2nd class of the element i.e. btn-primary/danger etc
}


function buttonColorChange(buttonThingy){
    if(buttonThingy.value==='red'){
        buttonsRed();
    }
    else if(buttonThingy.value==='green'){
        buttonsGreen();
    }
    else if(buttonThingy.value==='reset'){
        buttonColorReset();
    }
    else if(buttonThingy.value==='random'){
        randomColors();
    }
}

function buttonsRed(){
    for(let i=0;i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);   // Remove the buttons 2nd class i.e. btn-primary/danger etc
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonsGreen(){
    for(let i=0;i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);   // Remove the buttons 2nd class i.e. btn-primary/danger etc
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonColorReset(){
    for(let i=0;i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}

function randomColors(){
    var choices = ['btn-primary','btn-warning','btn-danger','btn-success'];
   
    for(let i=0;i<all_buttons.length;i++){
        let randomNumber=Math.floor(Math.random()*4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomNumber]);
    }
}
