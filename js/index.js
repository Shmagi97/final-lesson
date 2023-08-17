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

// rekomendation spans click

const rekomendationInfo = [
  {
    info: "Senior developers have a deep understanding of multiple technologies and frameworks, They can architect and design complex systems, making informed technical decisions.",
    image: "foto/developer.jpg",
    name: "Alison brie",
    profesion: "Senior developer",
    id: "1",
  },

  {
    info: "Back-end development involves building the server-side logic and databases that power a web application,  A full stack developer skilled in back-end development is proficient in server-side languages (e.g., Python, Java, Ruby, Node.js) and frameworks.",
    image: "foto/back and developer.jfif",
    name: "Nicholas Baca",
    profesion: "Back-end developer",
    id: "2",
  },

  {
    info: "A web designer is responsible for creating the design and layout of a website or web pages.",
    image: "foto/veb dizainer.jpg",
    name: "Mau Thomas",
    profesion: "web designer",
    id: "3",
  },
];

// const bacgroundImageSection = document.querySelector(
//   "#bacgroundImageSectionJs"
// );

// function getElementsInRekomendationHtml() {
//   const addRekomendationElementInHtml = document.createElement("div");
//   addRekomendationElementInHtml.innerHTML = `

//     <p class="rekomendaition-info-p">
//     ${rekomendationInfo[0].info}
//     </p>
//     <div class="foto">
//     <img src="${rekomendationInfo[0].image}" />
//     </div>
//     <div>
//     <span>"</span>
//     <span>${rekomendationInfo[0].profesion}</span>
//     <span>${rekomendationInfo[0].name}</span>
//     </div>
//     <div>
//     <span class="rekomendation-span-click"></span>
//     <span class="rekomendation-span-click"></span>
//     <span class="rekomendation-span-click"></span>
//     </div>

//   `;

//   bacgroundImageSection.appendChild(addRekomendationElementInHtml);
// }

// getElementsInRekomendationHtml();

const spanClick = document.querySelectorAll(".rekomendation-span-click");
const spanClickArray = Array.from(spanClick);

const bacgroundImageSection = document.querySelector(
  "#bacgroundImageSectionJs"
);
let lastAddedRecommendation = null; // Store reference to the last added recommendation

function rekomendationInfoMapFn(indexFunction, clearZedmetiIndex) {
  // Create a new recommendation element
  const addRekomendationElementInHtml = document.createElement("div");
  addRekomendationElementInHtml.id = rekomendationInfo[indexFunction].id; // Add an id to identify the element
  console.log(addRekomendationElementInHtml.id);
  addRekomendationElementInHtml.innerHTML = `
  <p class="rekomendaition-info-p">
  ${rekomendationInfo[indexFunction].info}
  </p>
  <div class="foto">
  <img src="${rekomendationInfo[indexFunction].image}" />
  </div>
  <div>
  <span>"</span>
  <span>${rekomendationInfo[indexFunction].profesion}</span>
  <span>${rekomendationInfo[indexFunction].name}</span>
  </div>
  <div>
  <span class="rekomendation-span-click"></span>
  <span class="rekomendation-span-click"></span>
  <span class="rekomendation-span-click"></span>
  </div>

  `;

  // Remove the previously added recommendation if it exists
  if (lastAddedRecommendation) {
    bacgroundImageSection.removeChild(lastAddedRecommendation);
  }

  // Append the new recommendation element
  bacgroundImageSection.appendChild(addRekomendationElementInHtml);

  // Store the reference to the last added recommendation
  lastAddedRecommendation = addRekomendationElementInHtml;

  // Filter and log the filtered recommendation array
  const filteredRekomendationInfo = rekomendationInfo.filter(
    (_, index) => index !== indexFunction
  );
  console.log(filteredRekomendationInfo);
}

// rekomendationInfoMapFn();

spanClickArray.forEach((btn, indexSpans) => {
  btn.addEventListener("click", () => {
    rekomendationInfoMapFn(indexSpans);
  });
});

// function rekomendationInfoMapFn(indexFunction, clearZedmetiIndex) {
//   const addRekomendationElementInHtml = document.createElement("div");
//   addRekomendationElementInHtml.innerHTML = `

//     <p class="rekomendaition-info-p">
//     ${rekomendationInfo[indexFunction].info}
//     </p>
//     <div class="foto">
//     <img src="${rekomendationInfo[indexFunction].image}" />
//     </div>
//     <div>
//     <span>"</span>
//     <span>${rekomendationInfo[indexFunction].profesion}</span>
//     <span>${rekomendationInfo[indexFunction].name}</span>
//     </div>
//     <div>
//     <span class="rekomendation-span-click"></span>
//     <span class="rekomendation-span-click"></span>
//     <span class="rekomendation-span-click"></span>
//     </div>

//   `;

//   bacgroundImageSection.appendChild(addRekomendationElementInHtml);

//   const filteredRekomendationInfo = rekomendationInfo.filter(
//     (_, index) => index !== indexFunction
//   );

//   console.log(filteredRekomendationInfo);
// }

// spanClickArray.forEach((btn, indexSpans) => {
//   btn.addEventListener("click", () => {
//     rekomendationInfoMapFn(indexSpans);
//   });
// });
