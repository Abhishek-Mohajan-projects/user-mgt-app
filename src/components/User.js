import React from "react";
import style from "./user.module.css";

const User = ({ id, name, email, phone }) => {
  return (
    <article className={style.user}>
      <h3>{id}</h3>
      <h2>{name}</h2>
      <p className={style.email}>{email}</p>
      <a href={"tel:+" + phone}>{phone}</a>
    </article>
  );
};

export default User;
