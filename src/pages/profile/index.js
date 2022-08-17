import "../../components/button-arrow";
import "../../components/button";

import "./components/avatar";
import "./components/line";
import "./components/line-link";
import "./components/line-input";
import "./components/list";

import "../../wrappers/profile-wrapper";

import tmpl from "./tmpl.hbs";

const ctx = {
  profile: {
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
      styles: "footer__list",
      fields: [
        { label: "Изменить данные" },
        { label: "Изменить пароль" },
        { label: "Выйти" }, // TODO: прокинуть красный!!1
      ],
    },
  },
  change: {
    content: () => "list",
    contentCtx: {
      lineType: () => "lineInput",
      fields: [
        { key: "Почта", value: "adf@mail.ru" },
        { key: "Логин", value: "adf" },
        { key: "Имя", value: "Восилей" },
        { key: "Фамилия", value: "Пупкен" },
        { key: "Имя в чате", value: "VoPup" },
        { key: "Телефон", value: "+7 (321) 987-45-33" },
      ],
    },
    footer: () => "button",
    footerCtx: {
      styles: "footer__button",
      label: "Сохранить",
    },
  },
  changePassword: {
    content: () => "list",
    contentCtx: {
      lineType: () => "lineInput",
      fields: [
        { key: "Старый пароль", value: "asdasdfasdf", password: true },
        { key: "Новый пароль", value: "adf", password: true },
        { key: "Повторите новый пароль", password: true },
      ],
    },
    footer: () => "button",
    footerCtx: {
      styles: "footer__button",
      label: "Сохранить",
    },
  },
};

const title = {
  profile: "Профиль",
  change: "Изменить профиль",
  changePassword: "Сменить пароль",
};

window.addEventListener("DOMContentLoaded", () => {
  let type = location.hash.replace("#", "");
  type = ctx[type] ? type : "profile";
  document.title = title[type];
  const main = document.getElementsByClassName("main")[0];
  const el = tmpl(ctx[type]);

  main.innerHTML = el;
});
