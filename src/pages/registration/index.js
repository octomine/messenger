import "../../components/button";
import "../../components/label";
import "../../components/form";
import "../../components/input";
import "../../components/titled-action-wrapper";

import tmpl from "./tmpl.hbs";

const ctx = {
  title: {
    txt: "Регистрация",
  },
  content: () => "form",
  contentCtx: {
    styles: "registration__content",
    fields: [
      { title: "Почта", error: "Обязательное поле" },
      { title: "Логин", error: "Обязательное поле" },
      { title: "Имя" },
      { title: "Фамилия" },
      { title: "Телефон" },
      { title: "Пароль", error: "Обязательное поле" },
      { title: "Пароль (ещё раз)", error: "Пароли не совпадают" },
    ],
  },
  button: {
    label: "Зарегистрироваться",
  },
  footer: () => "button",
  footerCtx: {
    styles: "footer",
    label: "Войти",
    mod: "link",
  },
};

window.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementsByClassName("main")[0];
  const el = tmpl(ctx);

  main.innerHTML = el;
});
