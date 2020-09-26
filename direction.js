'use strict';

const directionValue = document.querySelectorAll(".direction");
const directionOne = document.querySelector(".direction-one");
const directionTwo = document.querySelector(".direction-two");
const directionThree = document.querySelector(".direction-three");
const directionFour = document.querySelector(".direction-four");
const directionFive = document.querySelector(".direction-five");
const directionSix = document.querySelector(".direction-six");
const directionSeven = document.querySelector(".direction-seven");
const directionEight = document.querySelector(".direction-eight");
const directionNine = document.querySelector(".direction-nine");
const directionTen = document.querySelector(".direction-ten");
const directionEleven = document.querySelector(".direction-eleven");
const directionTwelve = document.querySelector(".direction-twelve");
const directionThirteen = document.querySelector(".direction-thirteen");
const directionFourteen = document.querySelector(".direction-fourteen");
const directionFifteen = document.querySelector(".direction-fifteen");
const directionSixteen = document.querySelector(".direction-sixteen");
const pageNumber = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: "六",
  seven: 7,
  eight: "八",
  nine: "九",
  ten: 10,
  eleven: 11,
  twelve: 12,
  thirteen: 13,
  fourteen: 14,
  fifteen: 15,
  sixteen: 16
}
const rotateDirection = document.querySelectorAll(".rotate-direction");

directionValue.forEach(directionElement => {
  directionElement.onclick = function(){
    if(directionElement.innerHTML === "左綴じ"){
      directionOne.innerHTML = pageNumber["one"];
      directionTwo.innerHTML = pageNumber["two"];
      directionThree.innerHTML = pageNumber["three"];
      directionFour.innerHTML = pageNumber["four"];
      directionFive.innerHTML = pageNumber["five"];
      directionSix.innerHTML = pageNumber["six"];
      directionSeven.innerHTML = pageNumber["seven"];
      directionEight.innerHTML = pageNumber["eight"];
      directionNine.innerHTML = pageNumber["nine"];
      directionTen.innerHTML = pageNumber["ten"];
      directionEleven.innerHTML = pageNumber["eleven"];
      directionTwelve.innerHTML = pageNumber["twelve"];
      directionThirteen.innerHTML = pageNumber["thirteen"];
      directionFourteen.innerHTML = pageNumber["fourteen"];
      directionFifteen.innerHTML = pageNumber["fifteen"];
      directionSixteen.innerHTML = pageNumber["sixteen"];
      rotateDirection.forEach((element, index) => {
        if(index % 2 === 0){
          element.style.transform = 'rotate(180deg)';
        } else {
          element.style.transform = 'rotate(0deg)';
        }
      });
    } else if(directionElement.innerHTML === "右綴じ") {
      directionOne.innerHTML = pageNumber["one"];
      directionTwo.innerHTML = pageNumber["two"];
      directionThree.innerHTML = pageNumber["three"];
      directionFour.innerHTML = pageNumber["four"];
      directionFive.innerHTML = pageNumber["five"];
      directionSix.innerHTML = pageNumber["six"];
      directionSeven.innerHTML = pageNumber["seven"];
      directionEight.innerHTML = pageNumber["eight"];
      directionNine.innerHTML = pageNumber["nine"];
      directionTen.innerHTML = pageNumber["ten"];
      directionEleven.innerHTML = pageNumber["eleven"];
      directionTwelve.innerHTML = pageNumber["twelve"];
      directionThirteen.innerHTML = pageNumber["thirteen"];
      directionFourteen.innerHTML = pageNumber["fourteen"];
      directionFifteen.innerHTML = pageNumber["fifteen"];
      directionSixteen.innerHTML = pageNumber["sixteen"];
      rotateDirection.forEach((element, index) => {
        if(index % 2 === 0){
          element.style.transform = 'rotate(0deg)';
        } else {
          element.style.transform = 'rotate(180deg)';
        }
      });
    }
  }
});