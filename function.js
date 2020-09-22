'use strict';

// サイズ選択処理に利用する定数
const bookSize = document.querySelectorAll(".size");
const height = document.querySelectorAll(".height");
const width = document.querySelectorAll(".width");
const left = document.querySelectorAll(".paper-size-left");
const right = document.querySelectorAll(".paper-size-right");

// サイズ選択に対する処理
bookSize.forEach(bookSizeElement => {
  bookSizeElement.onclick = function(){
    let height = 0;
    let width = 0;
    let left = 0;
    let right = 0;
    if(bookSizeElement.innerHTML === "A4"){
      height = bookSizeHight["A4"];
      width  = bookSizeWidth["A4"];
      left = paperSizeLeft["A4"];
      right = paperSizeRight["A4"];
    } else if(bookSizeElement.innerHTML === "A5"){
      height = bookSizeHight["A5"];
      width  = bookSizeWidth["A5"];
      left = paperSizeLeft["A5"];
      right = paperSizeRight["A5"];
    } else if(bookSizeElement.innerHTML === "A6"){
      height = bookSizeHight["A6"];
      width  = bookSizeWidth["A6"];
      left = paperSizeLeft["A6"];
      right = paperSizeRight["A6"];
    } else if(bookSizeElement.innerHTML === "B5"){
      height = bookSizeHight["B5"];
      width  = bookSizeWidth["B5"];
      left = paperSizeLeft["B5"];
      right = paperSizeRight["B5"];
    } else if(bookSizeElement.innerHTML === "四六判"){
      height = bookSizeHight["fourSix"];
      width  = bookSizeWidth["fourSix"];
      left = paperSizeLeft["fourSix"];
      right = paperSizeRight["fourSix"];
    } else if(bookSizeElement.innerHTML === "B6"){
      height = bookSizeHight["B6"];
      width  = bookSizeWidth["B6"];
      left = paperSizeLeft["B6"];
      right = paperSizeRight["B6"];
    } 
    height.forEach(ele => {
      ele.textContent = height;
    });
    width.forEach(ele => {
      ele.textContent = width;
    });
    left.forEach(ele => {
      ele.textContent = left;
    });
    right.forEach(ele => {
      ele.textContent = right;
    });
    // return bookSizeElement;
  }
});


// 製本方法処理に利用する定数
// const methodBookBinding = document.querySelectorAll(".method");
// const methodOutLeft = document.querySelectorAll(".method-out-left");
// const methodInLeft = document.querySelectorAll(".method-in-left");
// const methodShaveLeft = document.querySelectorAll(".method-shave-left");
// const methodClipLeft = document.querySelectorAll(".method-clip-left");
// const methodClipOutLeft = document.querySelectorAll(".method-clip-out-left");
// const methodMarginLeft = document.querySelectorAll(".method-margin-left");
// const methodOutRight = document.querySelectorAll(".method-out-right");
// const methodInRight = document.querySelectorAll(".method-in-right");
// const methodShaveRight = document.querySelectorAll(".method-shave-right");
// const methodClipRight = document.querySelectorAll(".method-clip-right");
// const methodClipOutRight = document.querySelectorAll(".method-clip-out-right");
// const methodMarginRight = document.querySelectorAll(".method-margin-right");

// methodBookBinding.forEach(methodElement => {
//   methodElement.onclick = function(){
//     let leftLong = 0;
//     let LeftShort = 0;
//     let rightLong = 0;
//     let rightShort = 0;
//     if(methodElement.innerHTML === "無線"){
//       if(bookSizeElement === "A4"){
//         let leftLong = paperSizeLong["kAll"];
//         let LeftShort = paperSizeShort["kAll"];
//         let rightLong = paperSizeLong["aALl"];
//         let rightShort = paperSizeShort["aAll"];
//         methodOutLeft
//       }
//     }
//   }
// });



