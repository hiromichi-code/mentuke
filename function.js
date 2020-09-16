'use strict';

const bookSize = document.querySelectorAll(".size");
const value = document.querySelector(".size").textContent;
const valueText = document.querySelector(".right>.out-two,.right>.out-five").textContent;

bookSize.onclick = function(){
  if(value === "A4"){
    valueText = bookSizeHight["A4"];
  }
}

