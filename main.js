(()=>{"use strict";(new class{init(){const e=document.querySelector(".collapse_btn"),A=document.querySelector(".collapse_box");e.addEventListener("click",(()=>{A.classList.toggle("collapse_box_max")}))}}).init();(new class{init(){const e=document.querySelector(".red_button"),A=document.querySelector(".box_form"),s=document.querySelector(".form_closes"),t=document.createElement("img");t.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAABOCAYAAACOqiAdAAAACXBIWXMAAAsTAAALEwEAmpwYAAABfUlEQVR4nO3aYU7CMByG8fcG7gIwj9As8YqSHUHhUkyT4RmUeARNk/KFiGxl7f6szy/pN5K2TzYdoxIAAAAAAAAAAEisktRK6iQdJG0l1crnUdIuzN2Ftfg1mVZJepf0czY+JTUZ5m/CXOfz+zU9yLD2j0WfxjFxvCbMcWn+jQzr/ll4ynjXovmxl2GHK4tPEW9IND96GbYdsIEp4w2N5seLDKsv/HFOEW9MNL+mlYxzkr4Gbuhb0pPROWbhEm5ssdFSbnDx0VJstJhoU264uGhTbLzYaLcEKD5azLPXceRnc7xEmJUbceUVe3umjldUtKniFRnt1nhFR4uNR7SAcBG4VSPwzyECjyMReACOwFeuCHzJj8BrpczRTop7veR4dT5vtGKuPMfPg7aiLfbKqw0fgVjLsF2maDHxXmXYR8ZoY+P5I2hmdZmjLeZgYTtDtEUcZa2MHp5+s354WmGBm3Br9OEkZM5DfeswZx/W8HwP0QAAAAAAAAAA0H37BU1S7R0rc+DOAAAAAElFTkSuQmCC",t.classList.add("img_btn_close"),s.append(t),e.addEventListener("click",(()=>{e.classList.add("red_button_close"),A.classList.add("box_form_max")})),s.addEventListener("click",(()=>{e.classList.remove("red_button_close"),A.classList.remove("box_form_max")}))}}).init()})();