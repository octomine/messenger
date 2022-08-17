import "../../components/button-arrow";
import "../../components/button";

import "./components/avatar";
import "./components/line";
import "./components/line-link";
import "./components/list";

import "../../wrappers/profile-wrapper";

import tmpl from "./tmpl.hbs";

const ctx = {
  content: () => "list",
  contentCtx: {
    title: "Восилей",
    lineType: () => "line",
    fields: [
      { key: "Почта", value: "adf@mail.ru" },
      { key: "Логин", value: "adf" },
      { key: "Имя", value: "Восилей" },
      { key: "Фамилия", value: "Пупкен" },
      { key: "Имя в чате", value: "VoPup" },
      { key: "Телефон", value: "+7 (321) 987-45-33" },
    ],
  },
  footer: () => "list",
  footerCtx: {
    lineType: () => "lineLink",
    fields: [
      { label: "Изменить данные" },
      { label: "Изменить пароль" },
      { label: "Выйти" },
    ],
  },
};

window.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementsByClassName("main")[0];
  const el = tmpl(ctx);

  main.innerHTML = el;
});
