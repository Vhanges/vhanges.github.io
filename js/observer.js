
const aboutmehSection = document.getElementById("aboutmeh");
const nabitem = document.getElementsByClassName("t-change");
const nabitem2 = document.getElementsByClassName("t-change2");
const nab = document.getElementsByClassName("nab");
const aboutcontainerSection = document.getElementById("aboutme-container");



function callbackFunction(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio >= .6) {
       
            Array.from(nabitem).forEach(item => {
                item.classList.add('white-change');
            });
        } else {
      
            Array.from(nabitem).forEach(item => {
                item.classList.remove('white-change');
            });
        }
    });


}

function callbackFunction1(entries1){
    entries1.forEach(entry1 => {
    if (entry1.isIntersecting && entry1.intersectionRatio >= .08) {
       
        Array.from(nab).forEach(item1 => {
            item1.classList.add('nab-border');
        });
        Array.from(nabitem).forEach(item2 => {
            item2.classList.add('waytiwayt');
        });
        Array.from(nabitem2).forEach(item3 => {
            item3.classList.add('waytiwayt');
        });
    } else {
  
        Array.from(nab).forEach(item1 => {
            item1.classList.remove('nab-border');
        });
        Array.from(nabitem).forEach(item2 => {
            item2.classList.remove('waytiwayt');
        });
        Array.from(nabitem2).forEach(item3 => {
            item3.classList.remove('waytiwayt');
        });
    }
  });
}



const options = {
    rootMargin: "0px 0px 0px 0px",
    threshold: .6
};

const options1 ={
    rootMargin: "0px 0px 0px 0px",
    threshold: .08
}

const observer = new IntersectionObserver(callbackFunction, options);

const observer1 = new IntersectionObserver(callbackFunction1, options1);

observer.observe(aboutmehSection);

observer1.observe(aboutcontainerSection);

