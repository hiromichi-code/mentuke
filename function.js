'use strict';

const bookSize = document.querySelectorAll(".size");
const valueText = document.querySelectorAll(".height");

bookSize.forEach(element => {
  element.onclick = function(){
    let height = 0;
    if(element.innerHTML === "A4"){
      height = bookSizeHight["A4"];
    } else if(element.innerHTML === "A5"){
      height = bookSizeHight["A5"];
    } else if(element.innerHTML === "A6"){
      height = bookSizeHight["A6"];
    } else if(element.innerHTML === "B5"){
      height = bookSizeHight["B5"];
    } else if(element.innerHTML === "四六判"){
      height = bookSizeHight["fourSix"];
    } else if(element.innerHTML === "B6"){
      height = bookSizeHight["B6"];
    } else {
      height = 0;
    }
    valueText.forEach(ele => {
      ele.textContent = height;
    });
  }
});

