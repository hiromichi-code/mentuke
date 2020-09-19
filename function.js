'use strict';

// サイズ選択処理に利用する定数
const bookSize = document.querySelectorAll(".size");
const valueHeight = document.querySelectorAll(".height");
const valueWidth = document.querySelectorAll(".width");
const valueLeft = document.querySelectorAll(".paper-size-left");
const valueRight = document.querySelectorAll(".paper-size-right");

// サイズ選択に対する処理
bookSize.forEach(element => {
  element.onclick = function(){
    let height = 0;
    let width = 0;
    let left = 0;
    let right = 0;
    if(element.innerHTML === "A4"){
      height = bookSizeHight["A4"];
      width  = bookSizeWidth["A4"];
      left = paperSizeLeft["A4"];
      right = paperSizeRight["A4"];
    } else if(element.innerHTML === "A5"){
      height = bookSizeHight["A5"];
      width  = bookSizeWidth["A5"];
      left = paperSizeLeft["A5"];
      right = paperSizeRight["A5"];
    } else if(element.innerHTML === "A6"){
      height = bookSizeHight["A6"];
      width  = bookSizeWidth["A6"];
      left = paperSizeLeft["A6"];
      right = paperSizeRight["A6"];
    } else if(element.innerHTML === "B5"){
      height = bookSizeHight["B5"];
      width  = bookSizeWidth["B5"];
      left = paperSizeLeft["B5"];
      right = paperSizeRight["B5"];
    } else if(element.innerHTML === "四六判"){
      height = bookSizeHight["fourSix"];
      width  = bookSizeWidth["fourSix"];
      left = paperSizeLeft["fourSix"];
      right = paperSizeRight["fourSix"];
    } else if(element.innerHTML === "B6"){
      height = bookSizeHight["B6"];
      width  = bookSizeWidth["B6"];
      left = paperSizeLeft["B6"];
      right = paperSizeRight["B6"];
    } 
    valueHeight.forEach(ele => {
      ele.textContent = height;
    });
    valueWidth.forEach(ele => {
      ele.textContent = width;
    });
    valueLeft.forEach(ele => {
      ele.textContent = left;
    });
    valueRight.forEach(ele => {
      ele.textContent = right;
    });
  }
});



