import "../../components/button";
import "../../components/label";
import "../../components/form";
import "../../components/input";
import "../../components/titled-action-wrapper";

import tmpl from "./tmpl.hbs";

const ctx = {
  title: {
    txt: "Вход",
  },
  content: () => "form",
  contentCtx: {
    styles: "login__content",
    fields: [
      { title: "Логин", error: "Неверный логин" },
      { title: "Пароль", error: "Неверный пароль", password: true },
    ],
  },
  button: {
    label: "Авторизоваться",
  },
  footer: () => "button",
  footerCtx: {
    styles: "footer",
    label: "Нет аккаунта?",
    mod: "link",
  },
};

window.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementsByClassName("main")[0];
  const el = tmpl(ctx);

  main.innerHTML = el;
});
