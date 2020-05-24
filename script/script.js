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

var scores, roundScore, activePlayer, dice;

scores = [0,0];
roundScore = 0; 
activePlayer = 0;

dice = 6;
