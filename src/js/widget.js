import x from "../src/img/i8.png";
export default class Widget {
  init() {
    const btn = document.querySelector(".red_button");
    const form = document.querySelector(".box_form");
    const btnClose = document.querySelector(".form_closes");
    const img = document.createElement("img");
    img.src = x;
    img.classList.add("img_btn_close");
    btnClose.append(img);

    btn.addEventListener("click", () => {
      btn.classList.add("red_button_close");
      form.classList.add("box_form_max");
    });

    btnClose.addEventListener("click", () => {
      btn.classList.remove("red_button_close");
      form.classList.remove("box_form_max");
    });
  }
}
