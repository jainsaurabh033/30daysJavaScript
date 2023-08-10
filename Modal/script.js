const trigger = document.querySelector("#trigger");
const modal_wrapper = document.querySelector(".modal_wrapper");
const close = document.querySelector(".close");

trigger.addEventListener("click", () => {
  console.log("click");
  modal_wrapper.classList.add("active");
});

close.addEventListener("click", () => {
  console.log("click");
  modal_wrapper.classList.remove("active");
});
