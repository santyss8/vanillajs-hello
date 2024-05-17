let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

const EXCUSA = document.getElementById('excusa');

function excusa(){
  let numWho = Math.floor(Math.random() * 4);
  let numAction = Math.floor(Math.random() * 4);
  let numWhat = Math.floor(Math.random() * 3);
  let numWhen = Math.floor(Math.random() * 5);
  EXCUSA.innerHTML = who[numWho] + ' ' + action[numAction] + ' ' + what[numWhat] + ' ' + when[numWhen];
}

window.onload = excusa;