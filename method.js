'use strict';

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