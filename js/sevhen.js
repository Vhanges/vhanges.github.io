//Wave Header

var animatedText = document.querySelectorAll(".animated-text");

function animate(element){
  var textArray = element.innerText.split("");
  element.firstChild.remove();
  
  var elArray = textArray.map(
    (letter,index)=>{
      if(letter==" ") letter = '&nbsp;';
      var el = document.createElement("span");
      el.className = "letter";
      el.innerHTML = letter;
      el.style.animationDelay = index/(textArray.length)+"s";
      element.appendChild(el);
      return el;
    }
  );
  element.innerHtml = elArray;
}

Array.from(animatedText).map(animate)

const editable = document.querySelector('.changing-text');

const words = [
  'Software Developer',
  'Project Manager',
  'Graphic Designer',
  'System Analyst',
  'CEO',
  'Bisnis Man',
  'Batman'
];
const animationTimeInms = 45;
const delayInms = 1000;

function close(index) {
  editable.textContent = words[index % words.length];
  const interval = setInterval(function() {
    const text = editable.textContent;
    if (!text) {
      clearInterval(interval);
      setTimeout(function() {
        open(++index);
      }, 100);
    }
    editable.textContent = text.slice(0, -1);
  }, animationTimeInms);
}

function open(index) {
  const initialText = words[index % words.length];
  let i = 1;
  editable.textContent = '';
  const interval = setInterval(function() {
    const text = editable.textContent;
    console.log(text.length === initialText.length);
    if (text.length === initialText.length) {
      clearInterval(interval);
      setTimeout(function() {
        close(index);
      }, delayInms);
    }
    editable.textContent = initialText.slice(0, i++);
  }, animationTimeInms);
}

function writeWords() {
  const i = 0;
  open(i);
}

writeWords();

