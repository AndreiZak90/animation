export default class Collapse {
  init() {
    const btn = document.querySelector(".collapse_btn");
    const box = document.querySelector(".collapse_box");

    btn.addEventListener("click", () => {
      box.classList.toggle("collapse_box_max");
    });
  }
}
