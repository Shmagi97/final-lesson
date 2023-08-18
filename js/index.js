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
    } else {
      elemenForEach.classList.remove("active-animation");
    }
  });
}

linerSkilsSpanArray.forEach((el, indexi) => {
  scrollAnimation(el);
});

// rekomendation spans click

const rekomendationInfo = [
  {
    info: "Senior developers have a deep understanding of multiple technologies and frameworks, They can architect and design complex systems, making informed technical decisions.",
    image: "foto/developer.jpg",
    name: "Alison brie",
    profesion: "Senior developer",
  },

  {
    info: "Back-end development involves building the server-side logic and databases that power a web application,  A full stack developer skilled in back-end development is proficient in server-side languages (e.g., Python, Java, Ruby, Node.js) and frameworks.",
    image: "foto/back and developer.jfif",
    name: "Nicholas Baca",
    profesion: "Back-end developer",
  },

  {
    info: "A web designer is responsible for creating the design and layout of a website or web pages.",
    image: "foto/veb dizainer.jpg",
    name: "Mau Thomas",
    profesion: "web designer",
  },
];

const bacgroundImageSection = document.querySelector(
  "#bacgroundImageSectionJs"
);

// ფუნქცია addElementsInHtmlFn-ი უზრუნველყოფს მასივიდან bacgroundImageSection-ში ელემენტების დახატვას

function addElementsInHtmlFn() {
  const addRekomendationElementInHtmlStart = document.createElement("div");
  addRekomendationElementInHtmlStart.innerHTML = `
  <p class="rekomendaition-info-p">
  ${rekomendationInfo[1].info}
  </p>
  <div class="foto">
  <img src="${rekomendationInfo[1].image}" />
  </div>
  <div>
  <span>"</span>
  <span>${rekomendationInfo[1].profesion}</span>
  <span>${rekomendationInfo[1].name}</span>
  </div>
  <div>
  <span class="rekomendation-span-click"></span>
  <span class="rekomendation-span-click"></span>
  <span class="rekomendation-span-click"></span>
</div>
 

 
 `;

  addRekomendationElementInHtmlStart.classList.add("divJsActive");

  // spanClick- სპან ელემენტები რომლის დახატვაც მოხდამასივიდან addRekomendationElementInHtmlStart- ში არსებული
  //სპან ელემენტები დავასელექთე რათა შემძლებოდა მასზე ფორიჩიშ გამოყენება
  //

  const spanClick = addRekomendationElementInHtmlStart.querySelectorAll(
    ".rekomendation-span-click"
  );
  const spanClickArray = Array.from(spanClick);

  // ამ forEach- ში მოთავსებული ფუნქცია rekomendationInfoMapFn უზრუნველყოფს addElementsInHtmlFn-იტ დახატულ ელემენტების სპანზე კლიკით
  // ელემენტების ცვლილებას, თავისმხრივ ამ ფუნქციის შესრულებისას bacgroundImageSection-ში გადაეცემა ახალი სპან ელემენტები რომელზეც ასევე გემოყენებულია
  // forEach-ი სპანებზე bacgroundImageSection-ში ახალი ელემენტების ჩასახატად

  let lastAddedRecommendation = null;

  spanClickArray.forEach((span, index) => {
    function rekomendationInfoMapFn(indexFunction) {
      const addRekomendationElementInHtml = document.createElement("div");

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

      addRekomendationElementInHtml.classList.add("divJsActive");
      // console.log(addRekomendationElementInHtml);

      if (lastAddedRecommendation) {
        bacgroundImageSection.removeChild(lastAddedRecommendation);
      }

      bacgroundImageSection.appendChild(addRekomendationElementInHtml);

      // სპანზე პირველი კლიკისას lastAddedRecommendation- არის ნალი მეორე კლიკის შემდეგ  lastAddedRecommendation = addRekomendationElementInHtml; სინტაქსით
      // lastAddedRecommendation გადაეცემა ის ელემენტები რომელის სპანზე კლიკიც მოხდა ოღონდ 1 კლიკით ადრე, ანუ ის ელემენტები რომელიც წასაშლელია.

      lastAddedRecommendation = addRekomendationElementInHtml;

      const spanClickInRekomendationFn =
        addRekomendationElementInHtml.querySelectorAll(
          ".rekomendation-span-click"
        );

      const spanClickArraynRekomendationFn = Array.from(
        spanClickInRekomendationFn
      );

      spanClickArraynRekomendationFn[indexFunction].style.border = "solid red";

      spanClickArraynRekomendationFn.forEach((btn, indexSpans) => {
        btn.addEventListener("click", () => {
          rekomendationInfoMapFn(indexSpans);
        });
      });
    }

    span.addEventListener("click", () => {
      rekomendationInfoMapFn(index);
      // ეს სინტაქსი უზრუნველყოფს ფუნქცია addElementsInHtmlFn - ში დახატული პირველადი ელემენტების none-ს, ვინაიდან მისი დინამიურად ამორება არ არის საჭირო
      // რადგან მისი ამოღება მხოლოდ ერთხელ ხდება.
      addRekomendationElementInHtmlStart.style.display = "none";
    });
  });

  bacgroundImageSection.appendChild(addRekomendationElementInHtmlStart);
}

// გასაწერია მოხდეს ამ ფუნქციის გამოძახება სქროლზე

let funqciisArGameoreba = false;

function scrolStartAddElementsInHtmlFn() {
  window.addEventListener("scroll", () => {
    if (
      window.scrollY >= 2500 &&
      window.scrollY <= 2800 &&
      !funqciisArGameoreba
    ) {
      addElementsInHtmlFn();

      funqciisArGameoreba = true;
    }
  });
}

scrolStartAddElementsInHtmlFn();
