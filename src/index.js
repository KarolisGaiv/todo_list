import "./styles.scss";

console.log("This is a test message");
console.log("Another test message");

const testBtn = document.querySelector(".test-btn");
const btn = document.querySelector(".btn")

testBtn.addEventListener("click", () => {
  console.log("Clicked");
});
  