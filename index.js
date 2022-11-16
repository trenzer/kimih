// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');

//why im amazing
for (var i = 0; i < 100; i++) {
  const newelement = document.createElement('p');
  newelement.innerText =
    i +
    '. my iq is: ' +
    'very '.repeat(i) +
    'high. (it is: ' +
    i * ((i + 1) * 10) +
    ')';
  appDiv.appendChild(newelement);
}
