const progressOpen = document.getElementById("progress-open");
const progressClose = document.getElementById("progress-close");

const oneDiv = document.getElementById("one-div");
const twoDiv = document.getElementById("two-div");
const threeDiv = document.getElementById("three-div");
const fourDiv = document.getElementById("four-div");
const fiveDiv = document.getElementById("five-div");

const instructions = document.getElementById("instructions");
const panel = document.getElementById("panel");
const profileName = document.getElementById("profile-name");
const profileNameClose = document.getElementById("profile-name-close");
const notificationPanel = document.getElementById("notification-panel");
const notifOpen = document.getElementById("notif-open");
const notifClose = document.getElementById("notif-close");
const notif = document.getElementById("notif");

const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");

const cancelPlan = document.getElementById("cancel-plan");
const plan = document.getElementById("plan");

const oneP = document.getElementById("one-p");
const twoP = document.getElementById("two-p");
const threeP = document.getElementById("three-p");
const fourP = document.getElementById("four-p");
const fiveP = document.getElementById("five-p");
const oneSpan = document.getElementById("one-span");
const twoSpan = document.getElementById("two-span");
const threeSpan = document.getElementById("three-span");
const fourSpan = document.getElementById("four-span");
const fiveSpan = document.getElementById("five-span");
const oneButton = document.getElementById("one-button");
const twoButton = document.getElementById("two-button");
const threeButton = document.getElementById("three-button");
const fourButton = document.getElementById("four-button");
const fiveButton = document.getElementById("five-button");
const oneImg = document.getElementById("one-img");
const twoImg = document.getElementById("two-img");
const threeImg = document.getElementById("three-img");
const fourImg = document.getElementById("four-img");
const fiveImg = document.getElementById("five-img");

const checkbox1 = document.getElementById("checkbox1");
const checkbox2 = document.getElementById("checkbox2");
const checkbox3 = document.getElementById("checkbox3");
const checkbox4 = document.getElementById("checkbox4");
const checkbox5 = document.getElementById("checkbox5");

const progressBar = document.getElementById("progress-bar");
const stepNumber = document.getElementById("step-number");

instructions.style.display = "none";
progressClose.style.display = "none";

first.style.display = "none";
second.style.display = "none";
third.style.display = "none";

profileNameClose.style.display = "none";

notifClose.style.display = "none";

oneP.style.display = "none";
twoP.style.display = "none";
threeP.style.display = "none";
fourP.style.display = "none";
fiveP.style.display = "none";
oneSpan.style.display = "none";
twoSpan.style.display = "none";
threeSpan.style.display = "none";
fourSpan.style.display = "none";
fiveSpan.style.display = "none";
oneButton.style.display = "none";
twoButton.style.display = "none";
threeButton.style.display = "none";
fourButton.style.display = "none";
fiveButton.style.display = "none";
oneImg.style.display = "none";
twoImg.style.display = "none";
threeImg.style.display = "none";
fourImg.style.display = "none";
fiveImg.style.display = "none";

var windowWidth = window.innerWidth;

var thresholdWidth = 390

progressOpen.addEventListener("click", function () {
  progressClose.style.display = "block";
  progressOpen.style.display = "none";
  instructions.style.display = "block";
  oneP.style.display = "block";
  oneSpan.style.display = "block";
  oneButton.style.display = "block";
  oneImg.style.display = "block";
  oneDiv.style.backgroundColor = "#F3F3F3";
  oneDiv.style.borderRadius = "10px";
  
  if (windowWidth < thresholdWidth) {
    oneImg.style.display = "none"
    twoImg.style.display = "none"
    threeImg.style.display = "none"
    fourImg.style.display = "none"
    fiveImg.style.display = "none";
  }
});

progressClose.addEventListener("click", function () {
  progressClose.style.display = "none";
  progressOpen.style.display = "block";
  instructions.style.display = "none";
  oneP.style.display = "none";
  oneSpan.style.display = "none";
  oneButton.style.display = "none";
  oneImg.style.display = "none";
});

profileName.addEventListener("click", function () {
  first.style.display = "flex";
  second.style.display = "flex";
  third.style.display = "flex";
  panel.style.width = "320px";
  panel.style.padding = "6px";
  profileNameClose.style.display = "flex";
  profileName.style.display = "none";
  profileNameClose.style.boxShadow =
    "0px 0px 0px 3px #005bd3, 0px 0px 0px 1px #000";
  profileNameClose.style.backgroundColor = "#656266";
});

profileNameClose.addEventListener("click", function () {
  profileNameClose.style.display = "none";
  profileName.style.display = "flex";
  first.style.display = "none";
  second.style.display = "none";
  third.style.display = "none";
  panel.style.width = "0";
  panel.style.padding = "0";
  profileNameClose.style.boxShadow = "0";
});

notifOpen.addEventListener("click", function () {
  notifOpen.style.display = "none";
  notifClose.style.display = "block";
  notif.style.backgroundColor = "#656266";
  notif.style.boxShadow = "0px 0px 0px 3px #005bd3, 0px 0px 0px 1px #000";
  notificationPanel.style.display = "flex";
});

notifClose.addEventListener("click", function () {
  notifOpen.style.display = "block";
  notifClose.style.display = "none";
  notificationPanel.style.display = "none";
  notif.style.boxShadow = "none";
});

cancelPlan.addEventListener("click", function () {
  plan.style.display = "none";
});

checkbox1.addEventListener("change", function () {
  if (checkbox1.checked) {
    oneP.style.display = "none";
    oneSpan.style.display = "none";
    oneButton.style.display = "none";
    oneImg.style.display = "none";
    twoP.style.display = "block";
    twoSpan.style.display = "block";
    twoButton.style.display = "block";
    twoImg.style.display = "block";
    oneDiv.style.backgroundColor = "transparent";
    oneDiv.style.borderRadius = "0";
    oneDiv.style.marginBottom = "15px";
    twoDiv.style.backgroundColor = "#F3F3F3";
    twoDiv.style.borderRadius = "10px";
    progressBar.style.width = "20%";
    stepNumber.innerHTML = "1"

     if (windowWidth < thresholdWidth) {
       oneImg.style.display = "none";
       twoImg.style.display = "none";
       threeImg.style.display = "none";
       fourImg.style.display = "none";
       fiveImg.style.display = "none";
     }
  } else {
    oneP.style.display = "block";
    oneSpan.style.display = "block";
    oneButton.style.display = "block";
    oneImg.style.display = "block";
    twoP.style.display = "none";
    twoSpan.style.display = "none";
    twoButton.style.display = "none";
    twoImg.style.display = "none";
    oneDiv.style.backgroundColor = "#F3F3F3";
    oneDiv.style.borderRadius = "10px";
    oneDiv.style.marginBottom = "15px";
    twoDiv.style.backgroundColor = "transparent";
    twoDiv.style.borderRadius = "0";
    progressBar.style.width = "0";
    stepNumber.innerHTML = "0";

     if (windowWidth < thresholdWidth) {
       oneImg.style.display = "none";
       twoImg.style.display = "none";
       threeImg.style.display = "none";
       fourImg.style.display = "none";
       fiveImg.style.display = "none";
     }
  }
});

checkbox2.addEventListener("change", function () {
  if (checkbox2.checked) {
    twoP.style.display = "none";
    twoSpan.style.display = "none";
    twoButton.style.display = "none";
    twoImg.style.display = "none";
    threeP.style.display = "block";
    threeSpan.style.display = "block";
    threeButton.style.display = "block";
    threeImg.style.display = "block";
    twoDiv.style.backgroundColor = "transparent";
    twoDiv.style.borderRadius = "0";
    twoDiv.style.marginBottom = "15px";
    threeDiv.style.backgroundColor = "#F3F3F3";
    threeDiv.style.borderRadius = "10px";
    progressBar.style.width = "40%";
    stepNumber.innerHTML = "2";

     if (windowWidth < thresholdWidth) {
       oneImg.style.display = "none";
       twoImg.style.display = "none";
       threeImg.style.display = "none";
       fourImg.style.display = "none";
       fiveImg.style.display = "none";
     }
  } else {
    twoP.style.display = "block";
    twoSpan.style.display = "block";
    twoButton.style.display = "block";
    twoImg.style.display = "block";
    threeP.style.display = "none";
    threeSpan.style.display = "none";
    threeButton.style.display = "none";
    threeImg.style.display = "none";
    twoDiv.style.backgroundColor = "#F3F3F3";
    twoDiv.style.borderRadius = "10px";
    twoDiv.style.marginBottom = "15px";
    threeDiv.style.backgroundColor = "transparent";
    threeDiv.style.borderRadius = "0";
    progressBar.style.width = "20%";
    stepNumber.innerHTML = "1";

     if (windowWidth < thresholdWidth) {
       oneImg.style.display = "none";
       twoImg.style.display = "none";
       threeImg.style.display = "none";
       fourImg.style.display = "none";
       fiveImg.style.display = "none";
     }
  }
});

checkbox3.addEventListener("change", function () {
  if (checkbox3.checked) {
    threeP.style.display = "none";
    threeSpan.style.display = "none";
    threeButton.style.display = "none";
    threeImg.style.display = "none";
    fourP.style.display = "block";
    fourSpan.style.display = "block";
    fourButton.style.display = "block";
    fourImg.style.display = "block";
    threeDiv.style.backgroundColor = "transparent";
    threeDiv.style.borderRadius = "0";
    threeDiv.style.marginBottom = "15px";
    fourDiv.style.backgroundColor = "#F3F3F3";
    fourDiv.style.borderRadius = "10px";
    progressBar.style.width = "60%";
    stepNumber.innerHTML = "3";

     if (windowWidth < thresholdWidth) {
       oneImg.style.display = "none";
       twoImg.style.display = "none";
       threeImg.style.display = "none";
       fourImg.style.display = "none";
       fiveImg.style.display = "none";
     }
  } else {
    threeP.style.display = "block";
    threeSpan.style.display = "block";
    threeButton.style.display = "block";
    threeImg.style.display = "block";
    fourP.style.display = "none";
    fourSpan.style.display = "none";
    fourButton.style.display = "none";
    fourImg.style.display = "none";
    threeDiv.style.backgroundColor = "#F3F3F3";
    threeDiv.style.borderRadius = "10px";
    threeDiv.style.marginBottom = "15px";
    fourDiv.style.backgroundColor = "transparent";
    fourDiv.style.borderRadius = "0";
    progressBar.style.width = "40%";
    stepNumber.innerHTML = "2";

     if (windowWidth < thresholdWidth) {
       oneImg.style.display = "none";
       twoImg.style.display = "none";
       threeImg.style.display = "none";
       fourImg.style.display = "none";
       fiveImg.style.display = "none";
     }
  }
});

checkbox4.addEventListener("change", function () {
  if (checkbox4.checked) {
    fourP.style.display = "none";
    fourSpan.style.display = "none";
    fourButton.style.display = "none";
    fourImg.style.display = "none";
    fiveP.style.display = "block";
    fiveSpan.style.display = "block";
    fiveButton.style.display = "block";
    fiveImg.style.display = "block";
    fourDiv.style.backgroundColor = "transparent";
    fourDiv.style.borderRadius = "0";
    fourDiv.style.marginBottom = "15px";
    fiveDiv.style.backgroundColor = "#F3F3F3";
    fiveDiv.style.borderRadius = "10px";
    progressBar.style.width = "80%";
    stepNumber.innerHTML = "4";

     if (windowWidth < thresholdWidth) {
       oneImg.style.display = "none";
       twoImg.style.display = "none";
       threeImg.style.display = "none";
       fourImg.style.display = "none";
       fiveImg.style.display = "none";
     }
  } else {
    fourP.style.display = "block";
    fourSpan.style.display = "block";
    fourButton.style.display = "block";
    fourImg.style.display = "block";
    fiveP.style.display = "none";
    fiveSpan.style.display = "none";
    fiveButton.style.display = "none";
    fiveImg.style.display = "none";
    fourDiv.style.backgroundColor = "#F3F3F3";
    fourDiv.style.borderRadius = "10px";
    fourDiv.style.marginBottom = "15px";
    fiveDiv.style.backgroundColor = "transparent";
    fiveDiv.style.borderRadius = "0";
    progressBar.style.width = "60%";
    stepNumber.innerHTML = "3";

     if (windowWidth < thresholdWidth) {
       oneImg.style.display = "none";
       twoImg.style.display = "none";
       threeImg.style.display = "none";
       fourImg.style.display = "none";
       fiveImg.style.display = "none";
     }
  }
});

checkbox5.addEventListener("change", function () {
  if (checkbox5.checked) {
    fiveP.style.display = "none";
    fiveSpan.style.display = "none";
    fiveButton.style.display = "none";
    fiveImg.style.display = "none";
    // fiveP.style.display = "block";
    // fiveSpan.style.display = "block";
    // fiveButton.style.display = "block";
    // fiveImg.style.display = "block";
    fiveDiv.style.backgroundColor = "transparent";
    fiveDiv.style.borderRadius = "0";
    fiveDiv.style.marginBottom = "15px";
    // fiveDiv.style.backgroundColor = "#F3F3F3";
    // fiveDiv.style.borderRadius = "10px";
    progressBar.style.width = "100%";
    stepNumber.innerHTML = "5";

     if (windowWidth < thresholdWidth) {
       oneImg.style.display = "none";
       twoImg.style.display = "none";
       threeImg.style.display = "none";
       fourImg.style.display = "none";
       fiveImg.style.display = "none";
     }
  } else {
    fiveP.style.display = "block";
    fiveSpan.style.display = "block";
    fiveButton.style.display = "block";
    fiveImg.style.display = "block";
    // fiveP.style.display = "none";
    // fiveSpan.style.display = "none";
    // fiveButton.style.display = "none";
    // fiveImg.style.display = "none";
    fiveDiv.style.backgroundColor = "#F3F3F3";
    fiveDiv.style.borderRadius = "10px";
    fiveDiv.style.marginBottom = "15px";
    // fiveDiv.style.backgroundColor = "transparent";
    // fiveDiv.style.borderRadius = "0";
    progressBar.style.width = "80%";
    stepNumber.innerHTML = "4";

     if (windowWidth < thresholdWidth) {
       oneImg.style.display = "none";
       twoImg.style.display = "none";
       threeImg.style.display = "none";
       fourImg.style.display = "none";
       fiveImg.style.display = "none";
     }
  }
});


function myFunction(x) {
  if (x.matches) { // If media query matches
    oneImg.classList.add ("media-query-image")
  } else {
    
  }
}

var x = window.matchMedia("(max-width: 390px)")
myFunction(x) // Call listener function at run time
