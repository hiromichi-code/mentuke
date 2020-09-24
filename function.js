'use strict';

// サイズ選択処理に利用する定数
const bookSize = document.querySelectorAll(".size");
const height = document.querySelectorAll(".height");
const width = document.querySelectorAll(".width");
const left = document.querySelectorAll(".paper-size-left");
const right = document.querySelectorAll(".paper-size-right");

// サイズ選択に対する処理
let selectBookSize = "";
let leftLong = 0;
let leftShort = 0;
let rightLong = 0;
let rightShort = 0;
bookSize.forEach(bookSizeElement => {
  bookSizeElement.onclick = function(){
    let height1 = 0;
    let width1 = 0;
    let left1 = 0;
    let right1 = 0;
    selectBookSize = bookSizeElement.innerHTML;
    if(bookSizeElement.innerHTML === "A4"){
      height1 = bookSizeHight["A4"];
      width1  = bookSizeWidth["A4"];
      leftLong = paperSizeLong["kAll"];
      leftShort = paperSizeShort["kAll"];
      rightLong = paperSizeLong["aAll"];
      rightShort = paperSizeShort["aAll"];
      left1 = paperSizeLeft["A4"];
      right1 = paperSizeRight["A4"];
    } else if(bookSizeElement.innerHTML === "A5"){
      height1 = bookSizeHight["A5"];
      width1  = bookSizeWidth["A5"];
      leftLong = paperSizeLong["kHalf"];
      leftShort = paperSizeShort["kHalf"];
      rightLong = paperSizeLong["aHalf"];
      rightShort = paperSizeShort["aHalf"];
      left1 = paperSizeLeft["A5"];
      right1 = paperSizeRight["A5"];
    } else if(bookSizeElement.innerHTML === "A6"){
      height1 = bookSizeHight["A6"];
      width1  = bookSizeWidth["A6"];
      leftLong = paperSizeLong["kFourHalf"];
      leftShort = paperSizeShort["kFourHalf"];
      rightLong = paperSizeLong["aFourHalf"];
      rightShort = paperSizeShort["aFourHalf"];
      left1 = paperSizeLeft["A6"];
      right1 = paperSizeRight["A6"];
    } else if(bookSizeElement.innerHTML === "B5"){
      height1 = bookSizeHight["B5"];
      width1  = bookSizeWidth["B5"];
      leftLong = paperSizeLong["fourSixHalf"];
      leftShort = paperSizeShort["fourSixHalf"];
      rightLong = paperSizeLong["bHalf"];
      rightShort = paperSizeShort["bHalf"];
      left1 = paperSizeLeft["B5"];
      right1 = paperSizeRight["B5"];
    } else if(bookSizeElement.innerHTML === "四六判"){
      height1 = bookSizeHight["fourSix"];
      width1  = bookSizeWidth["fourSix"];
      leftLong = paperSizeLong["fourSixHalfHalf"];
      leftShort = paperSizeShort["fourSixHalfHalf"];
      rightLong = paperSizeLong["bHalfHalf"];
      rightShort = paperSizeShort["bHalfHalf"];
      left1 = paperSizeLeft["fourSix"];
      right1 = paperSizeRight["fourSix"];
    } else if(bookSizeElement.innerHTML === "B6"){
      height1 = bookSizeHight["B6"];
      width1  = bookSizeWidth["B6"];
      leftLong = paperSizeLong["fourSixHalfHalf"];
      leftShort = paperSizeShort["fourSixHalfHalf"];
      rightLong = paperSizeLong["bHalfHalf"];
      rightShort = paperSizeShort["bHalfHalf"];
      left1 = paperSizeLeft["B6"];
      right1 = paperSizeRight["B6"];
    } 
    height.forEach(ele => {
      ele.textContent = height1;
    });
    width.forEach(ele => {
      ele.textContent = width1;
    });
    left.forEach(ele => {
      ele.textContent = left1;
    });
    right.forEach(ele => {
      ele.textContent = right1;
    });
  }
});


// 製本方法処理に利用する定数
const methodBookBinding = document.querySelectorAll(".method");
const methodOutLeft = document.querySelectorAll(".method-out-left");
const methodInLeft = document.querySelectorAll(".method-in-left");
const methodShaveLeft = document.querySelectorAll(".method-shave-left");
const methodClipLeft = document.querySelectorAll(".method-clip-left");
const methodClipOutLeft = document.querySelectorAll(".method-clip-out-left");
const methodMarginLeft = document.querySelectorAll(".method-margin-left");
const methodOutRight = document.querySelectorAll(".method-out-right");
const methodInRight = document.querySelectorAll(".method-in-right");
const methodShaveRight = document.querySelectorAll(".method-shave-right");
const methodClipRight = document.querySelectorAll(".method-clip-right");
const methodClipOutRight = document.querySelectorAll(".method-clip-out-right");
const methodMarginRight = document.querySelectorAll(".method-margin-right");
const shaving = 3;
const noShaving = 0;
const methodMargin = 3;
const countHight = 2;
const countWidth = 4;
const clipMargin = 15;
const rap = 5;

methodBookBinding.forEach(methodElement => {
  methodElement.onclick = function(){
    if(methodElement.innerHTML === "無線"){
      if(selectBookSize === "A4"){
        methodOutLeft.forEach(ele => {
          ele.textContent = Math.floor(((leftLong-shaving*countWidth)-bookSizeWidth["A4"]*countWidth)/countWidth);
        });
        methodInLeft.forEach(ele => {
          ele.textContent = Math.floor(((leftLong-shaving*countWidth)-bookSizeWidth["A4"]*countWidth)/countWidth);
        });
        methodShaveLeft.forEach(ele => {
          ele.textContent = shaving;
        });
        methodClipLeft.forEach(ele => {
          ele.textContent = clipMargin;
        });
        methodMarginLeft.forEach(ele => {
          ele.textContent = methodMargin;
        });
        methodClipOutLeft.forEach(ele => {
          ele.textContent = Math.floor((leftShort-methodMargin*countHight)-(bookSizeHight["A4"]*countHight)-clipMargin);
        });
        methodOutRight.forEach(ele => {
          ele.textContent = Math.floor(((rightLong-shaving*countWidth)-bookSizeWidth["A4"]*countWidth)/countWidth);
        });
        methodInRight.forEach(ele => {
          ele.textContent = Math.floor(((rightLong-shaving*countWidth)-bookSizeWidth["A4"]*countWidth)/countWidth);
        });
        methodShaveRight.forEach(ele => {
          ele.textContent = shaving;
        });
        methodClipRight.forEach(ele => {
          ele.textContent = clipMargin;
        });
        methodMarginRight.forEach(ele => {
          ele.textContent = methodMargin;
        });
        methodClipOutRight.forEach(ele => {
          ele.textContent = Math.floor((rightShort-methodMargin*countHight)-(bookSizeHight["A4"]*countHight)-clipMargin);
        });
      } else if(selectBookSize === "A5"){
        methodOutLeft.forEach(ele => {
          ele.textContent = Math.floor(((leftLong-shaving*countWidth)-bookSizeWidth["A5"]*countWidth)/countWidth);
        });
        methodInLeft.forEach(ele => {
          ele.textContent = Math.floor(((leftLong-shaving*countWidth)-bookSizeWidth["A5"]*countWidth)/countWidth);
        });
        methodShaveLeft.forEach(ele => {
          ele.textContent = shaving;
        });
        methodClipLeft.forEach(ele => {
          ele.textContent = clipMargin;
        });
        methodMarginLeft.forEach(ele => {
          ele.textContent = methodMargin;
        });
        methodClipOutLeft.forEach(ele => {
          ele.textContent = Math.floor((leftShort-methodMargin*countHight)-(bookSizeHight["A5"]*countHight)-clipMargin);
        });
        methodOutRight.forEach(ele => {
          ele.textContent = Math.floor(((rightLong-shaving*countWidth)-bookSizeWidth["A5"]*countWidth)/countWidth);
        });
        methodInRight.forEach(ele => {
          ele.textContent = Math.floor(((rightLong-shaving*countWidth)-bookSizeWidth["A5"]*countWidth)/countWidth);
        });
        methodShaveRight.forEach(ele => {
          ele.textContent = shaving;
        });
        methodClipRight.forEach(ele => {
          ele.textContent = clipMargin;
        });
        methodMarginRight.forEach(ele => {
          ele.textContent = methodMargin;
        });
        methodClipOutRight.forEach(ele => {
          ele.textContent = Math.floor((rightShort-methodMargin*countHight)-(bookSizeHight["A5"]*countHight)-clipMargin);
        });
      } else if(selectBookSize === "A6"){
        methodOutLeft.forEach(ele => {
          ele.textContent = Math.floor(((leftLong-shaving*countWidth)-bookSizeWidth["A6"]*countWidth)/countWidth);
        });
        methodInLeft.forEach(ele => {
          ele.textContent = Math.floor(((leftLong-shaving*countWidth)-bookSizeWidth["A6"]*countWidth)/countWidth);
        });
        methodShaveLeft.forEach(ele => {
          ele.textContent = shaving;
        });
        methodClipLeft.forEach(ele => {
          ele.textContent = clipMargin;
        });
        methodMarginLeft.forEach(ele => {
          ele.textContent = methodMargin;
        });
        methodClipOutLeft.forEach(ele => {
          ele.textContent = Math.floor((leftShort-methodMargin*countHight)-(bookSizeHight["A6"]*countHight)-clipMargin);
        });
        methodOutRight.forEach(ele => {
          ele.textContent = Math.floor(((rightLong-shaving*countWidth)-bookSizeWidth["A6"]*countWidth)/countWidth);
        });
        methodInRight.forEach(ele => {
          ele.textContent = Math.floor(((rightLong-shaving*countWidth)-bookSizeWidth["A6"]*countWidth)/countWidth);
        });
        methodShaveRight.forEach(ele => {
          ele.textContent = shaving;
        });
        methodClipRight.forEach(ele => {
          ele.textContent = clipMargin;
        });
        methodMarginRight.forEach(ele => {
          ele.textContent = methodMargin;
        });
        methodClipOutRight.forEach(ele => {
          ele.textContent = Math.floor((rightShort-methodMargin*countHight)-(bookSizeHight["A6"]*countHight)-clipMargin);
        });
      } else if(selectBookSize === "B5"){
        methodOutLeft.forEach(ele => {
          ele.textContent = Math.floor(((leftLong-shaving*countWidth)-bookSizeWidth["B5"]*countWidth)/countWidth);
        });
        methodInLeft.forEach(ele => {
          ele.textContent = Math.floor(((leftLong-shaving*countWidth)-bookSizeWidth["B5"]*countWidth)/countWidth);
        });
        methodShaveLeft.forEach(ele => {
          ele.textContent = shaving;
        });
        methodClipLeft.forEach(ele => {
          ele.textContent = clipMargin;
        });
        methodMarginLeft.forEach(ele => {
          ele.textContent = methodMargin;
        });
        methodClipOutLeft.forEach(ele => {
          ele.textContent = Math.floor((leftShort-methodMargin*countHight)-(bookSizeHight["B5"]*countHight)-clipMargin);
        });
        methodOutRight.forEach(ele => {
          ele.textContent = Math.floor(((rightLong-shaving*countWidth)-bookSizeWidth["B5"]*countWidth)/countWidth);
        });
        methodInRight.forEach(ele => {
          ele.textContent = Math.floor(((rightLong-shaving*countWidth)-bookSizeWidth["B5"]*countWidth)/countWidth);
        });
        methodShaveRight.forEach(ele => {
          ele.textContent = shaving;
        });
        methodClipRight.forEach(ele => {
          ele.textContent = clipMargin;
        });
        methodMarginRight.forEach(ele => {
          ele.textContent = methodMargin;
        });
        methodClipOutRight.forEach(ele => {
          ele.textContent = Math.floor((rightShort-methodMargin*countHight)-(bookSizeHight["B5"]*countHight)-clipMargin);
        });
      } else if(selectBookSize === "B6"){
        methodOutLeft.forEach(ele => {
          ele.textContent = Math.floor(((leftLong-shaving*countWidth)-bookSizeWidth["B6"]*countWidth)/countWidth);
        });
        methodInLeft.forEach(ele => {
          ele.textContent = Math.floor(((leftLong-shaving*countWidth)-bookSizeWidth["B6"]*countWidth)/countWidth);
        });
        methodShaveLeft.forEach(ele => {
          ele.textContent = shaving;
        });
        methodClipLeft.forEach(ele => {
          ele.textContent = clipMargin;
        });
        methodMarginLeft.forEach(ele => {
          ele.textContent = methodMargin;
        });
        methodClipOutLeft.forEach(ele => {
          ele.textContent = Math.floor((leftShort-methodMargin*countHight)-(bookSizeHight["B6"]*countHight)-clipMargin);
        });
        methodOutRight.forEach(ele => {
          ele.textContent = Math.floor(((rightLong-shaving*countWidth)-bookSizeWidth["B6"]*countWidth)/countWidth);
        });
        methodInRight.forEach(ele => {
          ele.textContent = Math.floor(((rightLong-shaving*countWidth)-bookSizeWidth["B6"]*countWidth)/countWidth);
        });
        methodShaveRight.forEach(ele => {
          ele.textContent = shaving;
        });
        methodClipRight.forEach(ele => {
          ele.textContent = clipMargin;
        });
        methodMarginRight.forEach(ele => {
          ele.textContent = methodMargin;
        });
        methodClipOutRight.forEach(ele => {
          ele.textContent = Math.floor((rightShort-methodMargin*countHight)-(bookSizeHight["B6"]*countHight)-clipMargin);
        });
      } else if(selectBookSize === "四六判"){
        methodOutLeft.forEach(ele => {
          ele.textContent = Math.floor(((leftLong-shaving*countWidth)-bookSizeWidth["fourSix"]*countWidth)/countWidth);
        });
        methodInLeft.forEach(ele => {
          ele.textContent = Math.floor(((leftLong-shaving*countWidth)-bookSizeWidth["fourSix"]*countWidth)/countWidth);
        });
        methodShaveLeft.forEach(ele => {
          ele.textContent = shaving;
        });
        methodClipLeft.forEach(ele => {
          ele.textContent = clipMargin;
        });
        methodMarginLeft.forEach(ele => {
          ele.textContent = methodMargin;
        });
        methodClipOutLeft.forEach(ele => {
          ele.textContent = Math.floor((leftShort-methodMargin*countHight)-(bookSizeHight["fourSix"]*countHight)-clipMargin);
        });
        methodOutRight.forEach(ele => {
          ele.textContent = Math.floor(((rightLong-shaving*countWidth)-bookSizeWidth["fourSix"]*countWidth)/countWidth);
        });
        methodInRight.forEach(ele => {
          ele.textContent = Math.floor(((rightLong-shaving*countWidth)-bookSizeWidth["fourSix"]*countWidth)/countWidth);
        });
        methodShaveRight.forEach(ele => {
          ele.textContent = shaving;
        });
        methodClipRight.forEach(ele => {
          ele.textContent = clipMargin;
        });
        methodMarginRight.forEach(ele => {
          ele.textContent = methodMargin;
        });
        methodClipOutRight.forEach(ele => {
          ele.textContent = Math.floor((rightShort-methodMargin*countHight)-(bookSizeHight["fourSix"]*countHight)-clipMargin);
        });
      }
    } else if(methodElement.innerHTML === "アジロ"){
      if(selectBookSize === "A4"){
        methodOutLeft.forEach(ele => {
          ele.textContent = Math.floor((leftLong-bookSizeWidth["A4"]*countWidth)/countWidth);
        });
        methodInLeft.forEach(ele => {
          ele.textContent = Math.floor((leftLong-bookSizeWidth["A4"]*countWidth)/countWidth);
        });
        methodShaveLeft.forEach(ele => {
          ele.textContent = noShaving;
        });
        methodClipLeft.forEach(ele => {
          ele.textContent = clipMargin;
        });
        methodMarginLeft.forEach(ele => {
          ele.textContent = methodMargin;
        });
        methodClipOutLeft.forEach(ele => {
          ele.textContent = Math.floor((leftShort-methodMargin*countHight)-(bookSizeHight["A4"]*countHight)-clipMargin);
        });
        methodOutRight.forEach(ele => {
          ele.textContent = Math.floor((rightLong-bookSizeWidth["A4"]*countWidth)/countWidth);
        });
        methodInRight.forEach(ele => {
          ele.textContent = Math.floor((rightLong-bookSizeWidth["A4"]*countWidth)/countWidth);
        });
        methodShaveRight.forEach(ele => {
          ele.textContent = noShaving;
        });
        methodClipRight.forEach(ele => {
          ele.textContent = clipMargin;
        });
        methodMarginRight.forEach(ele => {
          ele.textContent = methodMargin;
        });
        methodClipOutRight.forEach(ele => {
          ele.textContent = Math.floor((rightShort-methodMargin*countHight)-(bookSizeHight["A4"]*countHight)-clipMargin);
        });
      } else if(selectBookSize === "A5"){
        methodOutLeft.forEach(ele => {
          ele.textContent = Math.floor((leftLong-bookSizeWidth["A5"]*countWidth)/countWidth);
        });
        methodInLeft.forEach(ele => {
          ele.textContent = Math.floor((leftLong-bookSizeWidth["A5"]*countWidth)/countWidth);
        });
        methodShaveLeft.forEach(ele => {
          ele.textContent = noShaving;
        });
        methodClipLeft.forEach(ele => {
          ele.textContent = clipMargin;
        });
        methodMarginLeft.forEach(ele => {
          ele.textContent = methodMargin;
        });
        methodClipOutLeft.forEach(ele => {
          ele.textContent = Math.floor((leftShort-methodMargin*countHight)-(bookSizeHight["A5"]*countHight)-clipMargin);
        });
        methodOutRight.forEach(ele => {
          ele.textContent = Math.floor((rightLong-bookSizeWidth["A5"]*countWidth)/countWidth);
        });
        methodInRight.forEach(ele => {
          ele.textContent = Math.floor((rightLong-bookSizeWidth["A5"]*countWidth)/countWidth);
        });
        methodShaveRight.forEach(ele => {
          ele.textContent = noShaving;
        });
        methodClipRight.forEach(ele => {
          ele.textContent = clipMargin;
        });
        methodMarginRight.forEach(ele => {
          ele.textContent = methodMargin;
        });
        methodClipOutRight.forEach(ele => {
          ele.textContent = Math.floor((rightShort-methodMargin*countHight)-(bookSizeHight["A5"]*countHight)-clipMargin);
        });
      } else if(selectBookSize === "A6"){
        methodOutLeft.forEach(ele => {
          ele.textContent = Math.floor((leftLong-bookSizeWidth["A6"]*countWidth)/countWidth);
        });
        methodInLeft.forEach(ele => {
          ele.textContent = Math.floor((leftLong-bookSizeWidth["A6"]*countWidth)/countWidth);
        });
        methodShaveLeft.forEach(ele => {
          ele.textContent = noShaving;
        });
        methodClipLeft.forEach(ele => {
          ele.textContent = clipMargin;
        });
        methodMarginLeft.forEach(ele => {
          ele.textContent = methodMargin;
        });
        methodClipOutLeft.forEach(ele => {
          ele.textContent = Math.floor((leftShort-methodMargin*countHight)-(bookSizeHight["A6"]*countHight)-clipMargin);
        });
        methodOutRight.forEach(ele => {
          ele.textContent = Math.floor((rightLong-bookSizeWidth["A6"]*countWidth)/countWidth);
        });
        methodInRight.forEach(ele => {
          ele.textContent = Math.floor((rightLong-bookSizeWidth["A6"]*countWidth)/countWidth);
        });
        methodShaveRight.forEach(ele => {
          ele.textContent = noShaving;
        });
        methodClipRight.forEach(ele => {
          ele.textContent = clipMargin;
        });
        methodMarginRight.forEach(ele => {
          ele.textContent = methodMargin;
        });
        methodClipOutRight.forEach(ele => {
          ele.textContent = Math.floor((rightShort-methodMargin*countHight)-(bookSizeHight["A6"]*countHight)-clipMargin);
        });
      } else if(selectBookSize === "B5"){
        methodOutLeft.forEach(ele => {
          ele.textContent = Math.floor((leftLong-bookSizeWidth["B5"]*countWidth)/countWidth);
        });
        methodInLeft.forEach(ele => {
          ele.textContent = Math.floor((leftLong-bookSizeWidth["B5"]*countWidth)/countWidth);
        });
        methodShaveLeft.forEach(ele => {
          ele.textContent = noShaving;
        });
        methodClipLeft.forEach(ele => {
          ele.textContent = clipMargin;
        });
        methodMarginLeft.forEach(ele => {
          ele.textContent = methodMargin;
        });
        methodClipOutLeft.forEach(ele => {
          ele.textContent = Math.floor((leftShort-methodMargin*countHight)-(bookSizeHight["B5"]*countHight)-clipMargin);
        });
        methodOutRight.forEach(ele => {
          ele.textContent = Math.floor((rightLong-bookSizeWidth["B5"]*countWidth)/countWidth);
        });
        methodInRight.forEach(ele => {
          ele.textContent = Math.floor((rightLong-bookSizeWidth["B5"]*countWidth)/countWidth);
        });
        methodShaveRight.forEach(ele => {
          ele.textContent = noShaving;
        });
        methodClipRight.forEach(ele => {
          ele.textContent = clipMargin;
        });
        methodMarginRight.forEach(ele => {
          ele.textContent = methodMargin;
        });
        methodClipOutRight.forEach(ele => {
          ele.textContent = Math.floor((rightShort-methodMargin*countHight)-(bookSizeHight["B5"]*countHight)-clipMargin);
        });
      } else if(selectBookSize === "B6"){
        methodOutLeft.forEach(ele => {
          ele.textContent = Math.floor((leftLong-bookSizeWidth["B6"]*countWidth)/countWidth);
        });
        methodInLeft.forEach(ele => {
          ele.textContent = Math.floor((leftLong-bookSizeWidth["B6"]*countWidth)/countWidth);
        });
        methodShaveLeft.forEach(ele => {
          ele.textContent = noShaving;
        });
        methodClipLeft.forEach(ele => {
          ele.textContent = clipMargin;
        });
        methodMarginLeft.forEach(ele => {
          ele.textContent = methodMargin;
        });
        methodClipOutLeft.forEach(ele => {
          ele.textContent = Math.floor((leftShort-methodMargin*countHight)-(bookSizeHight["B6"]*countHight)-clipMargin);
        });
        methodOutRight.forEach(ele => {
          ele.textContent = Math.floor((rightLong-bookSizeWidth["B6"]*countWidth)/countWidth);
        });
        methodInRight.forEach(ele => {
          ele.textContent = Math.floor((rightLong-bookSizeWidth["B6"]*countWidth)/countWidth);
        });
        methodShaveRight.forEach(ele => {
          ele.textContent = noShaving;
        });
        methodClipRight.forEach(ele => {
          ele.textContent = clipMargin;
        });
        methodMarginRight.forEach(ele => {
          ele.textContent = methodMargin;
        });
        methodClipOutRight.forEach(ele => {
          ele.textContent = Math.floor((rightShort-methodMargin*countHight)-(bookSizeHight["B6"]*countHight)-clipMargin);
        });
      } else if(selectBookSize === "四六判"){
        methodOutLeft.forEach(ele => {
          ele.textContent = Math.floor((leftLong-bookSizeWidth["fourSix"]*countWidth)/countWidth);
        });
        methodInLeft.forEach(ele => {
          ele.textContent = Math.floor((leftLong-bookSizeWidth["fourSix"]*countWidth)/countWidth);
        });
        methodShaveLeft.forEach(ele => {
          ele.textContent = noShaving;
        });
        methodClipLeft.forEach(ele => {
          ele.textContent = clipMargin;
        });
        methodMarginLeft.forEach(ele => {
          ele.textContent = methodMargin;
        });
        methodClipOutLeft.forEach(ele => {
          ele.textContent = Math.floor((leftShort-methodMargin*countHight)-(bookSizeHight["fourSix"]*countHight)-clipMargin);
        });
        methodOutRight.forEach(ele => {
          ele.textContent = Math.floor((rightLong-bookSizeWidth["fourSix"]*countWidth)/countWidth);
        });
        methodInRight.forEach(ele => {
          ele.textContent = Math.floor((rightLong-bookSizeWidth["fourSix"]*countWidth)/countWidth);
        });
        methodShaveRight.forEach(ele => {
          ele.textContent = noShaving;
        });
        methodClipRight.forEach(ele => {
          ele.textContent = clipMargin;
        });
        methodMarginRight.forEach(ele => {
          ele.textContent = methodMargin;
        });
        methodClipOutRight.forEach(ele => {
          ele.textContent = Math.floor((rightShort-methodMargin*countHight)-(bookSizeHight["fourSix"]*countHight)-clipMargin);
        });
      }
    } else if(methodElement.innerHTML === "糸かがり"){
      if(selectBookSize === "A4"){
        methodOutLeft.forEach(ele => {
          ele.textContent = Math.floor((leftLong-bookSizeWidth["A4"]*countWidth)/countWidth+rap);
        });
        methodInLeft.forEach(ele => {
          ele.textContent = Math.floor((leftLong-bookSizeWidth["A4"]*countWidth)/countWidth-rap);
        });
        methodShaveLeft.forEach(ele => {
          ele.textContent = noShaving;
        });
        methodClipLeft.forEach(ele => {
          ele.textContent = clipMargin;
        });
        methodMarginLeft.forEach(ele => {
          ele.textContent = methodMargin;
        });
        methodClipOutLeft.forEach(ele => {
          ele.textContent = Math.floor((leftShort-methodMargin*countHight)-(bookSizeHight["A4"]*countHight)-clipMargin);
        });
        methodOutRight.forEach(ele => {
          ele.textContent = Math.floor((rightLong-bookSizeWidth["A4"]*countWidth)/countWidth+rap);
        });
        methodInRight.forEach(ele => {
          ele.textContent = Math.floor((rightLong-bookSizeWidth["A4"]*countWidth)/countWidth-rap);
        });
        methodShaveRight.forEach(ele => {
          ele.textContent = noShaving;
        });
        methodClipRight.forEach(ele => {
          ele.textContent = clipMargin;
        });
        methodMarginRight.forEach(ele => {
          ele.textContent = methodMargin;
        });
        methodClipOutRight.forEach(ele => {
          ele.textContent = Math.floor((rightShort-methodMargin*countHight)-(bookSizeHight["A4"]*countHight)-clipMargin);
        });
      } else if(selectBookSize === "A5"){
        methodOutLeft.forEach(ele => {
          ele.textContent = Math.floor((leftLong-bookSizeWidth["A5"]*countWidth)/countWidth+rap);
        });
        methodInLeft.forEach(ele => {
          ele.textContent = Math.floor((leftLong-bookSizeWidth["A5"]*countWidth)/countWidth-rap);
        });
        methodShaveLeft.forEach(ele => {
          ele.textContent = noShaving;
        });
        methodClipLeft.forEach(ele => {
          ele.textContent = clipMargin;
        });
        methodMarginLeft.forEach(ele => {
          ele.textContent = methodMargin;
        });
        methodClipOutLeft.forEach(ele => {
          ele.textContent = Math.floor((leftShort-methodMargin*countHight)-(bookSizeHight["A5"]*countHight)-clipMargin);
        });
        methodOutRight.forEach(ele => {
          ele.textContent = Math.floor((rightLong-bookSizeWidth["A5"]*countWidth)/countWidth+rap);
        });
        methodInRight.forEach(ele => {
          ele.textContent = Math.floor((rightLong-bookSizeWidth["A5"]*countWidth)/countWidth-rap);
        });
        methodShaveRight.forEach(ele => {
          ele.textContent = noShaving;
        });
        methodClipRight.forEach(ele => {
          ele.textContent = clipMargin;
        });
        methodMarginRight.forEach(ele => {
          ele.textContent = methodMargin;
        });
        methodClipOutRight.forEach(ele => {
          ele.textContent = Math.floor((rightShort-methodMargin*countHight)-(bookSizeHight["A5"]*countHight)-clipMargin);
        });
      } else if(selectBookSize === "A6"){
        methodOutLeft.forEach(ele => {
          ele.textContent = Math.floor((leftLong-bookSizeWidth["A6"]*countWidth)/countWidth+rap);
        });
        methodInLeft.forEach(ele => {
          ele.textContent = Math.floor((leftLong-bookSizeWidth["A6"]*countWidth)/countWidth-rap);
        });
        methodShaveLeft.forEach(ele => {
          ele.textContent = noShaving;
        });
        methodClipLeft.forEach(ele => {
          ele.textContent = clipMargin;
        });
        methodMarginLeft.forEach(ele => {
          ele.textContent = methodMargin;
        });
        methodClipOutLeft.forEach(ele => {
          ele.textContent = Math.floor((leftShort-methodMargin*countHight)-(bookSizeHight["A6"]*countHight)-clipMargin);
        });
        methodOutRight.forEach(ele => {
          ele.textContent = Math.floor((rightLong-bookSizeWidth["A6"]*countWidth)/countWidth+rap);
        });
        methodInRight.forEach(ele => {
          ele.textContent = Math.floor((rightLong-bookSizeWidth["A6"]*countWidth)/countWidth-rap);
        });
        methodShaveRight.forEach(ele => {
          ele.textContent = noShaving;
        });
        methodClipRight.forEach(ele => {
          ele.textContent = clipMargin;
        });
        methodMarginRight.forEach(ele => {
          ele.textContent = methodMargin;
        });
        methodClipOutRight.forEach(ele => {
          ele.textContent = Math.floor((rightShort-methodMargin*countHight)-(bookSizeHight["A6"]*countHight)-clipMargin);
        });
      } else if(selectBookSize === "B5"){
        methodOutLeft.forEach(ele => {
          ele.textContent = Math.floor((leftLong-bookSizeWidth["B5"]*countWidth)/countWidth+rap);
        });
        methodInLeft.forEach(ele => {
          ele.textContent = Math.floor((leftLong-bookSizeWidth["B5"]*countWidth)/countWidth-rap);
        });
        methodShaveLeft.forEach(ele => {
          ele.textContent = noShaving;
        });
        methodClipLeft.forEach(ele => {
          ele.textContent = clipMargin;
        });
        methodMarginLeft.forEach(ele => {
          ele.textContent = methodMargin;
        });
        methodClipOutLeft.forEach(ele => {
          ele.textContent = Math.floor((leftShort-methodMargin*countHight)-(bookSizeHight["B5"]*countHight)-clipMargin);
        });
        methodOutRight.forEach(ele => {
          ele.textContent = Math.floor((rightLong-bookSizeWidth["B5"]*countWidth)/countWidth+rap);
        });
        methodInRight.forEach(ele => {
          ele.textContent = Math.floor((rightLong-bookSizeWidth["B5"]*countWidth)/countWidth-rap);
        });
        methodShaveRight.forEach(ele => {
          ele.textContent = noShaving;
        });
        methodClipRight.forEach(ele => {
          ele.textContent = clipMargin;
        });
        methodMarginRight.forEach(ele => {
          ele.textContent = methodMargin;
        });
        methodClipOutRight.forEach(ele => {
          ele.textContent = Math.floor((rightShort-methodMargin*countHight)-(bookSizeHight["B5"]*countHight)-clipMargin);
        });
      } else if(selectBookSize === "B6"){
        methodOutLeft.forEach(ele => {
          ele.textContent = Math.floor((leftLong-bookSizeWidth["B6"]*countWidth)/countWidth+rap);
        });
        methodInLeft.forEach(ele => {
          ele.textContent = Math.floor((leftLong-bookSizeWidth["B6"]*countWidth)/countWidth-rap);
        });
        methodShaveLeft.forEach(ele => {
          ele.textContent = noShaving;
        });
        methodClipLeft.forEach(ele => {
          ele.textContent = clipMargin;
        });
        methodMarginLeft.forEach(ele => {
          ele.textContent = methodMargin;
        });
        methodClipOutLeft.forEach(ele => {
          ele.textContent = Math.floor((leftShort-methodMargin*countHight)-(bookSizeHight["B6"]*countHight)-clipMargin);
        });
        methodOutRight.forEach(ele => {
          ele.textContent = Math.floor((rightLong-bookSizeWidth["B6"]*countWidth)/countWidth+rap);
        });
        methodInRight.forEach(ele => {
          ele.textContent = Math.floor((rightLong-bookSizeWidth["B6"]*countWidth)/countWidth-rap);
        });
        methodShaveRight.forEach(ele => {
          ele.textContent = noShaving;
        });
        methodClipRight.forEach(ele => {
          ele.textContent = clipMargin;
        });
        methodMarginRight.forEach(ele => {
          ele.textContent = methodMargin;
        });
        methodClipOutRight.forEach(ele => {
          ele.textContent = Math.floor((rightShort-methodMargin*countHight)-(bookSizeHight["B6"]*countHight)-clipMargin);
        });
      } else if(selectBookSize === "四六判"){
        methodOutLeft.forEach(ele => {
          ele.textContent = Math.floor((leftLong-bookSizeWidth["fourSix"]*countWidth)/countWidth+rap);
        });
        methodInLeft.forEach(ele => {
          ele.textContent = Math.floor((leftLong-bookSizeWidth["fourSix"]*countWidth)/countWidth-rap);
        });
        methodShaveLeft.forEach(ele => {
          ele.textContent = noShaving;
        });
        methodClipLeft.forEach(ele => {
          ele.textContent = clipMargin;
        });
        methodMarginLeft.forEach(ele => {
          ele.textContent = methodMargin;
        });
        methodClipOutLeft.forEach(ele => {
          ele.textContent = Math.floor((leftShort-methodMargin*countHight)-(bookSizeHight["fourSix"]*countHight)-clipMargin);
        });
        methodOutRight.forEach(ele => {
          ele.textContent = Math.floor((rightLong-bookSizeWidth["fourSix"]*countWidth)/countWidth+rap);
        });
        methodInRight.forEach(ele => {
          ele.textContent = Math.floor((rightLong-bookSizeWidth["fourSix"]*countWidth)/countWidth-rap);
        });
        methodShaveRight.forEach(ele => {
          ele.textContent = noShaving;
        });
        methodClipRight.forEach(ele => {
          ele.textContent = clipMargin;
        });
        methodMarginRight.forEach(ele => {
          ele.textContent = methodMargin;
        });
        methodClipOutRight.forEach(ele => {
          ele.textContent = Math.floor((rightShort-methodMargin*countHight)-(bookSizeHight["fourSix"]*countHight)-clipMargin);
        });
      }
    } else if(methodElement.innerHTML === "中綴じ"){
      if(selectBookSize === "A4"){
        methodOutLeft.forEach(ele => {
          ele.textContent = Math.floor((leftLong-bookSizeWidth["A4"]*countWidth)/countWidth-rap);
        });
        methodInLeft.forEach(ele => {
          ele.textContent = Math.floor((leftLong-bookSizeWidth["A4"]*countWidth)/countWidth+rap);
        });
        methodShaveLeft.forEach(ele => {
          ele.textContent = noShaving;
        });
        methodClipLeft.forEach(ele => {
          ele.textContent = clipMargin;
        });
        methodMarginLeft.forEach(ele => {
          ele.textContent = methodMargin;
        });
        methodClipOutLeft.forEach(ele => {
          ele.textContent = Math.floor((leftShort-methodMargin*countHight)-(bookSizeHight["A4"]*countHight)-clipMargin);
        });
        methodOutRight.forEach(ele => {
          ele.textContent = Math.floor((rightLong-bookSizeWidth["A4"]*countWidth)/countWidth-rap);
        });
        methodInRight.forEach(ele => {
          ele.textContent = Math.floor((rightLong-bookSizeWidth["A4"]*countWidth)/countWidth+rap);
        });
        methodShaveRight.forEach(ele => {
          ele.textContent = noShaving;
        });
        methodClipRight.forEach(ele => {
          ele.textContent = clipMargin;
        });
        methodMarginRight.forEach(ele => {
          ele.textContent = methodMargin;
        });
        methodClipOutRight.forEach(ele => {
          ele.textContent = Math.floor((rightShort-methodMargin*countHight)-(bookSizeHight["A4"]*countHight)-clipMargin);
        });
      } else if(selectBookSize === "A5"){
        methodOutLeft.forEach(ele => {
          ele.textContent = Math.floor((leftLong-bookSizeWidth["A5"]*countWidth)/countWidth-rap);
        });
        methodInLeft.forEach(ele => {
          ele.textContent = Math.floor((leftLong-bookSizeWidth["A5"]*countWidth)/countWidth+rap);
        });
        methodShaveLeft.forEach(ele => {
          ele.textContent = noShaving;
        });
        methodClipLeft.forEach(ele => {
          ele.textContent = clipMargin;
        });
        methodMarginLeft.forEach(ele => {
          ele.textContent = methodMargin;
        });
        methodClipOutLeft.forEach(ele => {
          ele.textContent = Math.floor((leftShort-methodMargin*countHight)-(bookSizeHight["A5"]*countHight)-clipMargin);
        });
        methodOutRight.forEach(ele => {
          ele.textContent = Math.floor((rightLong-bookSizeWidth["A5"]*countWidth)/countWidth-rap);
        });
        methodInRight.forEach(ele => {
          ele.textContent = Math.floor((rightLong-bookSizeWidth["A5"]*countWidth)/countWidth+rap);
        });
        methodShaveRight.forEach(ele => {
          ele.textContent = noShaving;
        });
        methodClipRight.forEach(ele => {
          ele.textContent = clipMargin;
        });
        methodMarginRight.forEach(ele => {
          ele.textContent = methodMargin;
        });
        methodClipOutRight.forEach(ele => {
          ele.textContent = Math.floor((rightShort-methodMargin*countHight)-(bookSizeHight["A5"]*countHight)-clipMargin);
        });
      } else if(selectBookSize === "A6"){
        methodOutLeft.forEach(ele => {
          ele.textContent = Math.floor((leftLong-bookSizeWidth["A6"]*countWidth)/countWidth-rap);
        });
        methodInLeft.forEach(ele => {
          ele.textContent = Math.floor((leftLong-bookSizeWidth["A6"]*countWidth)/countWidth+rap);
        });
        methodShaveLeft.forEach(ele => {
          ele.textContent = noShaving;
        });
        methodClipLeft.forEach(ele => {
          ele.textContent = clipMargin;
        });
        methodMarginLeft.forEach(ele => {
          ele.textContent = methodMargin;
        });
        methodClipOutLeft.forEach(ele => {
          ele.textContent = Math.floor((leftShort-methodMargin*countHight)-(bookSizeHight["A6"]*countHight)-clipMargin);
        });
        methodOutRight.forEach(ele => {
          ele.textContent = Math.floor((rightLong-bookSizeWidth["A6"]*countWidth)/countWidth-rap);
        });
        methodInRight.forEach(ele => {
          ele.textContent = Math.floor((rightLong-bookSizeWidth["A6"]*countWidth)/countWidth+rap);
        });
        methodShaveRight.forEach(ele => {
          ele.textContent = noShaving;
        });
        methodClipRight.forEach(ele => {
          ele.textContent = clipMargin;
        });
        methodMarginRight.forEach(ele => {
          ele.textContent = methodMargin;
        });
        methodClipOutRight.forEach(ele => {
          ele.textContent = Math.floor((rightShort-methodMargin*countHight)-(bookSizeHight["A6"]*countHight)-clipMargin);
        });
      } else if(selectBookSize === "B5"){
        methodOutLeft.forEach(ele => {
          ele.textContent = Math.floor((leftLong-bookSizeWidth["B5"]*countWidth)/countWidth-rap);
        });
        methodInLeft.forEach(ele => {
          ele.textContent = Math.floor((leftLong-bookSizeWidth["B5"]*countWidth)/countWidth+rap);
        });
        methodShaveLeft.forEach(ele => {
          ele.textContent = noShaving;
        });
        methodClipLeft.forEach(ele => {
          ele.textContent = clipMargin;
        });
        methodMarginLeft.forEach(ele => {
          ele.textContent = methodMargin;
        });
        methodClipOutLeft.forEach(ele => {
          ele.textContent = Math.floor((leftShort-methodMargin*countHight)-(bookSizeHight["B5"]*countHight)-clipMargin);
        });
        methodOutRight.forEach(ele => {
          ele.textContent = Math.floor((rightLong-bookSizeWidth["B5"]*countWidth)/countWidth-rap);
        });
        methodInRight.forEach(ele => {
          ele.textContent = Math.floor((rightLong-bookSizeWidth["B5"]*countWidth)/countWidth+rap);
        });
        methodShaveRight.forEach(ele => {
          ele.textContent = noShaving;
        });
        methodClipRight.forEach(ele => {
          ele.textContent = clipMargin;
        });
        methodMarginRight.forEach(ele => {
          ele.textContent = methodMargin;
        });
        methodClipOutRight.forEach(ele => {
          ele.textContent = Math.floor((rightShort-methodMargin*countHight)-(bookSizeHight["B5"]*countHight)-clipMargin);
        });
      } else if(selectBookSize === "B6"){
        methodOutLeft.forEach(ele => {
          ele.textContent = Math.floor((leftLong-bookSizeWidth["B6"]*countWidth)/countWidth-rap);
        });
        methodInLeft.forEach(ele => {
          ele.textContent = Math.floor((leftLong-bookSizeWidth["B6"]*countWidth)/countWidth+rap);
        });
        methodShaveLeft.forEach(ele => {
          ele.textContent = noShaving;
        });
        methodClipLeft.forEach(ele => {
          ele.textContent = clipMargin;
        });
        methodMarginLeft.forEach(ele => {
          ele.textContent = methodMargin;
        });
        methodClipOutLeft.forEach(ele => {
          ele.textContent = Math.floor((leftShort-methodMargin*countHight)-(bookSizeHight["B6"]*countHight)-clipMargin);
        });
        methodOutRight.forEach(ele => {
          ele.textContent = Math.floor((rightLong-bookSizeWidth["B6"]*countWidth)/countWidth-rap);
        });
        methodInRight.forEach(ele => {
          ele.textContent = Math.floor((rightLong-bookSizeWidth["B6"]*countWidth)/countWidth+rap);
        });
        methodShaveRight.forEach(ele => {
          ele.textContent = noShaving;
        });
        methodClipRight.forEach(ele => {
          ele.textContent = clipMargin;
        });
        methodMarginRight.forEach(ele => {
          ele.textContent = methodMargin;
        });
        methodClipOutRight.forEach(ele => {
          ele.textContent = Math.floor((rightShort-methodMargin*countHight)-(bookSizeHight["B6"]*countHight)-clipMargin);
        });
      } else if(selectBookSize === "四六判"){
        methodOutLeft.forEach(ele => {
          ele.textContent = Math.floor((leftLong-bookSizeWidth["fourSix"]*countWidth)/countWidth-rap);
        });
        methodInLeft.forEach(ele => {
          ele.textContent = Math.floor((leftLong-bookSizeWidth["fourSix"]*countWidth)/countWidth+rap);
        });
        methodShaveLeft.forEach(ele => {
          ele.textContent = noShaving;
        });
        methodClipLeft.forEach(ele => {
          ele.textContent = clipMargin;
        });
        methodMarginLeft.forEach(ele => {
          ele.textContent = methodMargin;
        });
        methodClipOutLeft.forEach(ele => {
          ele.textContent = Math.floor((leftShort-methodMargin*countHight)-(bookSizeHight["fourSix"]*countHight)-clipMargin);
        });
        methodOutRight.forEach(ele => {
          ele.textContent = Math.floor((rightLong-bookSizeWidth["fourSix"]*countWidth)/countWidth-rap);
        });
        methodInRight.forEach(ele => {
          ele.textContent = Math.floor((rightLong-bookSizeWidth["fourSix"]*countWidth)/countWidth+rap);
        });
        methodShaveRight.forEach(ele => {
          ele.textContent = noShaving;
        });
        methodClipRight.forEach(ele => {
          ele.textContent = clipMargin;
        });
        methodMarginRight.forEach(ele => {
          ele.textContent = methodMargin;
        });
        methodClipOutRight.forEach(ele => {
          ele.textContent = Math.floor((rightShort-methodMargin*countHight)-(bookSizeHight["fourSix"]*countHight)-clipMargin);
        });
      }
    }
  }
});



