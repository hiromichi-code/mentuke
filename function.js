'use strict';

const bookSize = document.querySelectorAll(".size");
const valueHeight = document.querySelectorAll(".height");
const valueWidth = document.querySelectorAll(".width");

bookSize.forEach(element => {
  element.onclick = function(){
    let height = 0;
    let width = 0;
    if(element.innerHTML === "A4"){
      height = bookSizeHight["A4"];
      width  = bookSizeWidth["A4"];
    } else if(element.innerHTML === "A5"){
      height = bookSizeHight["A5"];
      width  = bookSizeWidth["A5"];
    } else if(element.innerHTML === "A6"){
      height = bookSizeHight["A6"];
      width  = bookSizeWidth["A6"];
    } else if(element.innerHTML === "B5"){
      height = bookSizeHight["B5"];
      width  = bookSizeWidth["B5"];
    } else if(element.innerHTML === "四六判"){
      height = bookSizeHight["fourSix"];
      width  = bookSizeWidth["fourSix"];
    } else if(element.innerHTML === "B6"){
      height = bookSizeHight["B6"];
      width  = bookSizeWidth["B6"];
    } 
    valueHeight.forEach(ele => {
      ele.textContent = height;
    });
    valueWidth.forEach(ele => {
      ele.textContent = width;
    });
  }
});

