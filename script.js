"use strict";

const infoObject = {
  user1: [
    "Arif Rahman",
    "Software Engineer",
    "The SaaS platform offers flexibility and ease of use, making it a great tool for developers to streamline workflows",
    "img1.jpg",
  ],
  user2: [
    "Hasan Ahmed",
    "University Lecturer",
    "It’s an excellent resource for educational institutions, allowing seamless collaboration and access to data without complex infrastructure",
    "img2.jpg",
  ],
  user3: [
    "Aisha Khan",
    "Data Scientist",
    "The data analytics features of this SaaS are very powerful, allowing us to derive insights much faster and more efficiently",
    "img3.jpg",
  ],
  user4: [
    "Nusrat Jahan",
    "Medical Doctor",
    "As a doctor, I appreciate how the SaaS platform enhances patient record management and communication within healthcare systems",
    "img4.jpg",
  ],
  user5: [
    "Farah Akter",
    "Graphic Designer",
    "Its cloud-based design tools provide great flexibility, allowing me to work on projects anytime, anywhere",
    "img5.jpg",
  ],
  user6: [
    "Sumi Chowdhury",
    "Marketing Manager",
    "This SaaS product has revolutionized our marketing strategies by offering real-time data tracking and automated campaign management",
    "img6.jpg",
  ],
};
const btnS = document.querySelector(".btn-s");
const btnAll = document.querySelectorAll(".btn");
const carouselImg = document.querySelector(".carousel-img");
const personName = document.querySelector(".person-name");
const personJob = document.querySelector(".person-job");
const opinion = document.querySelector(".opinion");
let count = 1;

let len = 100;
const fixLength = (mess) => {
  if (mess.length > len) {
    return mess.slice(0, len - 3) + "...";
  } else {
    return mess.padEnd(targetLength, " ");
  }
};

const setValue = function (name, job, op, img) {
  personName.textContent = name;
  personJob.textContent = job;
  opinion.textContent = fixLength(op);
  carouselImg.src = `img/${img}`;
};

setValue(
  infoObject[`user${count}`][0],
  infoObject[`user${count}`][1],
  infoObject[`user${count}`][2],
  infoObject[`user${count}`][3]
);

for (const btn of btnAll) {
  btn.addEventListener("click", function (e) {
    if (e.target.classList.contains("btn--right") && count > 0 && count <= 5) {
      count++;
      setValue(
        infoObject[`user${count}`][0],
        infoObject[`user${count}`][1],
        infoObject[`user${count}`][2],
        infoObject[`user${count}`][3]
      );
    } else if (
      e.target.classList.contains("btn--left") &&
      count > 1 &&
      count <= 6
    ) {
      count--;
      setValue(
        infoObject[`user${count}`][0],
        infoObject[`user${count}`][1],
        infoObject[`user${count}`][2],
        infoObject[`user${count}`][3]
      );
    } else if (count === 6) {
      count = 1;
    } else if (count === 1) {
      count = 6;
    }
  });
}

const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

btnS.addEventListener("click", () => {
  const randomUser = random(1, 6);
  setValue(
    infoObject[`user${randomUser}`][0],
    infoObject[`user${randomUser}`][1],
    infoObject[`user${randomUser}`][2],
    infoObject[`user${randomUser}`][3]
  );
});
