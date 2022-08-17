import "../components/label";
import "../components/button";
import "../wrappers/titled-action-wrapper";

import tmpl from "./tmpl.hbs";

const ctx = {
  title: {
    txt: "Загрузите файл",
  },
  content: () => "button",
  contentCtx: {
    label: "Выбрать файл на компьютере",
    mod: "link",
  },
  button: {
    label: "Поменять",
  },
};

window.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementsByClassName("main")[0];
  const el = tmpl(ctx);

  main.innerHTML = el;
});
