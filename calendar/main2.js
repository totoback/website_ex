const tableEl = document.querySelector("table");
const dateInput = document.getElementById("date");
const valueInput = document.getElementById("content");
const mainBnt = document.querySelector("button");

let calendar = function (e) {
  if (e.target.tagName === "P") {
    dateInput.value = `2023년 2월 ${e.target.textContent}일`;
  }
};
console.log(calendar)

