'use strict';
function qustions()
{
let answers = [];
let q1 = prompt("are you married..?");
let q2= prompt("are smoker..?");
let q3 = prompt("are you above 25..?");
answers.push(q1);
answers.push(q2);
answers.push(q3);
}

if (q1 && q2 && q3 == null)
{
console.log("invalid answer.");

}
else if (q1 && q2 && q3 == 'yes'||'no')
{
console.log("your welcome");

}
else
{
console.log("wrong answers please answer yes or no just..");
}

for(let i =0 ; i<answers.length; i++)
{

console.log(answers[i]);

}   
qustions();