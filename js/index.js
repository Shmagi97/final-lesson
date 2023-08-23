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
    info: "Senior developers have a deep understanding of multiple technologies and frameworks. ",
    image: "foto/developer.jpg",
    name: "Alison brie",
    profesion: "Senior developer",
  },

  {
    info: "Back-end development involves building the server-side logic and databases that power a web application.  ",
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

// project elements

const projectsElementArray = [
  {
    bacgraundImg: "foto/geo.ge.png",
    bacgraundImgAlt: "projeqt 1",
    iqonHeartAlt: "heart",
    iqonHeart: "icons/heart.svg",
    spanDro: "1 MONTS AGO",
    pProjectInfo: "სოციალური საიტი",
    filterMasiv: "work ideas",
  },

  {
    bacgraundImg: "foto/geo.ge2.png",
    bacgraundImgAlt: "projeqt 2",
    iqonHeartAlt: "heart",
    iqonHeart: "icons/heart.svg",
    spanDro: "1 MONTS AGO",
    pProjectInfo: "სოციალური საიტი",
    filterMasiv: "geo.ge",
  },

  {
    bacgraundImg: "foto/geo.ge3.png",
    bacgraundImgAlt: "projeqt 3",
    iqonHeartAlt: "heart",
    iqonHeart: "icons/heart.svg",
    spanDro: "1 MONTS AGO",
    pProjectInfo: "სოციალური საიტი",
    filterMasiv: "work ideas",
  },

  {
    bacgraundImg: "foto/geo.ge4.png",
    bacgraundImgAlt: "projeqt 4",
    iqonHeartAlt: "heart",
    iqonHeart: "icons/heart.svg",
    spanDro: "1 MONTS AGO",
    pProjectInfo: "სოციალური საიტი",
    filterMasiv: "work ideas",
  },

  {
    bacgraundImg: "foto/projeqt 5.jpg",
    bacgraundImgAlt: "projeqt 5",
    iqonHeartAlt: "heart",
    iqonHeart: "icons/heart.svg",
    spanDro: "9 MONTS AGO",
    pProjectInfo: "3D Mockup Design",
    filterMasiv: "Mockup",
  },

  {
    bacgraundImg: "foto/projeqt 6.jfif",
    bacgraundImgAlt: "projeqt 6",
    iqonHeartAlt: "heart",
    iqonHeart: "icons/heart.svg",
    spanDro: "9 MONTS AGO",
    pProjectInfo: "3D Mockup Design",
    filterMasiv: "Mockup",
  },
];

const projectsJs = document.querySelector(".projects");

function getProjectsInmasiv() {
  const projectsElementArrayCvladi = projectsElementArray.map((el, index) => {
    return `
    <div class="geoGeJs">
    <img src="${el.bacgraundImg}" alt="${el.bacgraundImgAlt}" /> 
    <div>
      <div>
      <img src="${el.iqonHeart}" alt="${el.iqonHeartAlt}" /> 
      </div>
      <span>${el.spanDro}</span>
      <p>${el.pProjectInfo}</p>
    </div>
  </div>
    
    
    `;
  });

  projectsJs.innerHTML = projectsElementArrayCvladi.join("");

  function linkGeoGe(selector) {
    const geoGeLink = document.querySelectorAll(selector);
    const geoGeLinkArray = Array.from(geoGeLink);

    geoGeLinkArray.forEach((btn) => {
      btn.addEventListener("click", () => {
        window.location = "https://shmagi97.github.io/soc-saiti/";
      });
    });
  }

  linkGeoGe(".geoGeJs");
}

getProjectsInmasiv();

const projectLi = document.querySelectorAll(".project-li");
const projectLiArray = Array.from(projectLi);
// console.log(projectLiArray);

const liXaziSpan = document.querySelectorAll(".li-xazi-span");
const liXaziSpanArray = Array.from(liXaziSpan);
// console.log(liXaziSpanArray);

let clearColorLi = null;
let clearColorXazi = null;

function liAndLixaziColorAddClasslist(indexFnColor) {
  if (clearColorLi) {
    clearColorLi.classList.remove("projectsLiJsActive");
  }
  projectLiArray[indexFnColor].classList.add("projectsLiJsActive");
  clearColorLi = projectLiArray[indexFnColor];

  if (clearColorXazi) {
    clearColorXazi.classList.remove("projectsLiJsActiveSpan");
  }
  liXaziSpanArray[indexFnColor].classList.add("projectsLiJsActiveSpan");
  clearColorXazi = liXaziSpanArray[indexFnColor];
}

function liClicisasMasivisElementebisGafiltvra() {
  const filterDaMap = projectsElementArray
    .filter((el) => {
      return el.filterMasiv === "work ideas";
    })
    .map((el) => {
      return `
  
          <div class="geo-ge-in-js">
             <img src="${el.bacgraundImg}" alt="${el.bacgraundImgAlt}" /> 
          <div>
            <div>
               <img src="${el.iqonHeart}" alt="${el.iqonHeartAlt}" /> 
             </div>
             <span>${el.spanDro}</span>
             <p>${el.pProjectInfo}</p>
           </div>
        </div>
  
  `;
    });

  projectsJs.innerHTML = filterDaMap.join("");

  function linkGeoGe(selector) {
    const geoGeLink = document.querySelectorAll(selector);
    const geoGeLinkArray = Array.from(geoGeLink);

    geoGeLinkArray.forEach((btn) => {
      btn.addEventListener("click", () => {
        window.location = "https://shmagi97.github.io/soc-saiti/";
      });
    });
  }

  linkGeoGe(".geo-ge-in-js");
}

function liClickMockupFilter() {
  const mockupFilter = projectsElementArray
    .filter((el) => {
      return el.filterMasiv === "Mockup";
    })
    .map((el) => {
      return `
    
       <div>
            <img src="${el.bacgraundImg}" alt="${el.bacgraundImgAlt}" /> 
          <div>
           <div>
              <img src="${el.iqonHeart}" alt="${el.iqonHeartAlt}" /> 
           </div>
            <span>${el.spanDro}</span>
            <p>${el.pProjectInfo}</p>
          </div>
       </div>
    
    `;
    });

  projectsJs.innerHTML = mockupFilter.join("");
  // console.log(mockupFilter);
}

function geoGeFilter() {
  const geoGe = projectsElementArray
    .filter((el) => {
      return el.filterMasiv === "geo.ge";
    })
    .map((el) => {
      return `
    
    <div class="geo-ge-in-js">
    <img src="${el.bacgraundImg}" alt="${el.bacgraundImgAlt}" /> 
  <div>
   <div>
      <img src="${el.iqonHeart}" alt="${el.iqonHeartAlt}" /> 
   </div>
    <span>${el.spanDro}</span>
    <p>${el.pProjectInfo}</p>
  </div>
</div>
    
    `;
    });

  projectsJs.innerHTML = geoGe.join("");

  function linkGeoGe(selector) {
    const geoGeLink = document.querySelectorAll(selector);
    const geoGeLinkArray = Array.from(geoGeLink);

    geoGeLinkArray.forEach((btn) => {
      btn.addEventListener("click", () => {
        window.location = "https://shmagi97.github.io/soc-saiti/";
      });
    });
  }

  linkGeoGe(".geo-ge-in-js");
}

projectLiArray.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    liAndLixaziColorAddClasslist(index);

    if (index === 0) {
      getProjectsInmasiv();
    } else if (index === 1) {
      liClicisasMasivisElementebisGafiltvra();
    } else if (index === 2) {
      liClickMockupFilter();
    } else if (index === 3) {
      geoGeFilter();
    }
  });
});

// useris informaciis gagzavna serverze
// davalebaSi arsebuli serveri isev igive mizeziT miblokavda amitom serveri shevcvale

const userNameJs = document.querySelector("#userName");
const userEmailJs = document.querySelector("#userEmail");
const userWebsiteJs = document.querySelector("#userWebsite");
const userMessageJs = document.querySelector(".text-area");
const contactInputForm = document.querySelector(".contact-input-form");
// form-modal
const formModal = document.querySelector(".form-modal");
const modalCloseBtn = document.querySelector(".modal-close-btn");

function creatMessageUser(userMessageFnParametr) {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(userMessageFnParametr),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })

    .catch((error) => {
      console.log(error);
    })

    .finally(() => {
      console.log("finaly");
    });
}

contactInputForm.addEventListener("submit", (el) => {
  el.preventDefault();

  const userMessage = {
    name: userNameJs.value,
    email: userEmailJs.value,
    website: userWebsiteJs.value,
    message: userMessageJs.value,
  };

  creatMessageUser(userMessage);

  if (userMessage) {
    formModal.classList.add("form-modalJs");
  } else {
    formModal.classList.remove("form-modalJs");
  }
  modalCloseBtn.addEventListener("click", () => {
    formModal.classList.remove("form-modalJs");
  });
  contactInputForm.reset();
});
