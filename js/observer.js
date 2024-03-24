
const aboutmehSection = document.getElementById("aboutmeh");
const nabitem = document.getElementsByClassName("t-change");

function callbackFunction(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.9) {
       
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

const options = {
    rootMargin: "0px 0px 0px 0px",
    threshold: 0.9
};

const observer = new IntersectionObserver(callbackFunction, options);

observer.observe(aboutmehSection);

