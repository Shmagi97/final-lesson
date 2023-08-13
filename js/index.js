const myImageCont = document.querySelector(".my-image-cont");
const mayImgJs = document.querySelectorAll(".my-img");
const myImgArray = Array.from(mayImgJs);

// console.log(myImgArray);
let nulOrVanC = 0;
// function nulOrVan() {
//   if (nulOrVanC >= 2) {
//     nulOrVanC = 1;
//   } else {
//     nulOrVanC++;
//   }
//     console.log(nulOrVanC);
// }

// setInterval(nulOrVan, 1000);

function myImageFn() {
  if (nulOrVanC >= 2) {
    nulOrVanC = 1;
  } else {
    nulOrVanC++;
  }

  //   console.log(nulOrVanC);
  myImgArray.forEach((el, index) => {
    if (nulOrVanC === 1) {
      myImgArray[1].classList.remove("scale-max");
      myImgArray[1].classList.add("scale-min");

      myImgArray[0].classList.remove("scale-min");
      myImgArray[0].classList.add("scale-max");
      //   console.log(myImgArray[0]);
    } else {
      myImgArray[1].classList.remove("scale-min");
      myImgArray[1].classList.add("scale-max");

      myImgArray[0].classList.remove("scale-max");
      myImgArray[0].classList.add("scale-min");
      //   console.log(2);
    }
  });
}
setInterval(myImageFn, 5000);
// myImageFn();
