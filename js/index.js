// slides

const myImageCont = document.querySelector(".my-image-cont");
const mayImgJs = document.querySelectorAll(".my-img");
const myImgArray = Array.from(mayImgJs);

let nulOrVanC = 0;

function myImageFn() {
  if (nulOrVanC >= 2) {
    nulOrVanC = 1;
  } else {
    nulOrVanC++;
  }

  myImgArray.forEach((el, index) => {
    if (nulOrVanC === 1) {
      myImgArray[1].classList.remove("scale-max");
      myImgArray[1].classList.add("scale-min");

      myImgArray[0].classList.remove("scale-min");
      myImgArray[0].classList.add("scale-max");
    } else {
      myImgArray[1].classList.remove("scale-min");
      myImgArray[1].classList.add("scale-max");

      myImgArray[0].classList.remove("scale-max");
      myImgArray[0].classList.add("scale-min");
    }
  });
}
setInterval(myImageFn, 5000);

// skills

const linerSkilsSpan = document.querySelectorAll(".liner-skils-span");
const linerSkilsSpanArray = Array.from(linerSkilsSpan);

function scrollAnimation(elemenForEach) {
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 700 && window.scrollY <= 1100) {
      elemenForEach.classList.add("active-animation");
      console.log("hahahah");
    } else {
      elemenForEach.classList.remove("active-animation");
    }
  });
}

linerSkilsSpanArray.forEach((el, index) => {
  scrollAnimation(el);
});
