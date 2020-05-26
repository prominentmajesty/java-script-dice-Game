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

var scores, roundScore, activePlayer;

scores = [0,0];
roundScore = 0; 
activePlayer = 1 ;


console.log(dice);
document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
var x = document.querySelector('#score-0').textContent;
document.querySelector('.dice').style.display = 'none';


 document.querySelector('.btn-roll').addEventListener('click', function(){
 var dice = Math.floor(Math.random() * 6) + 1;

 var diceDom = document.querySelector('.dice');
 diceDom.style.display = 'block';
 });