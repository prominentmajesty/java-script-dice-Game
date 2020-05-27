/*var john = {
    name : 'john',
    yearOfBirth : '1990',
    job : 'teacher'
};

var Person = function(name,yearOfBirth,job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.calculateAge = function(){
        console.log(2016 - this.yearOfBirth);
    
};

Person.prototype.calculateAge = function(){
    console.log(2016 - this.yearOfBirth);
};

var john = new Person('john',1990,'teacher');
john.calculateAge();
var jane = new Person('jane',1990,'designer');
jane.calculateAge();
var mark = new Person('Mark', 1969, 'retired')
mark.calculateAge();}*/

var scores, roundScore, activePlayer, gamePlaying;

init();

 document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying){

        var dice = Math.floor(Math.random() * 6) + 1;

        var diceDom = document.querySelector('.dice');
        diceDom.style.display = 'block';
        diceDom.src = './css/images/dice-' + dice + '.JPG';
       
        if(dice !== 1){
           roundScore += dice;
           document.querySelector('#current-' + activePlayer).textContent = roundScore;
        
       }else{
           
           nextPlayer();
           // document.querySelector('.player-0-panel').classList.remove('active'); 
           // document.querySelector('.player-1-panel').classList.add('active');
        }
    }

 });

 document.querySelector('.btn-hold').addEventListener('click', function(){
    
    if(gamePlaying){
        scores[activePlayer] += roundScore;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        
        if(scores[activePlayer] >=100){
           document.querySelector('#name-' + activePlayer).textContent = 'winner!';
           document.querySelector('.dice').style.display = 'none';
           document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
           document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
           gamePlaying = false;
       }else{
           nextPlayer();
        } 
    }

 });

 function nextPlayer(){
      activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active'); 
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
 }

 document.querySelector('.btn-new').addEventListener('click', init);

 function init(){
    scores = [0,0];
    roundScore = 0; 
    activePlayer = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'player 1';
    document.getElementById('name-1').textContent = 'player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
 }
 //document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
//var x = document.querySelector('#score-0').textContent; 