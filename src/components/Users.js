import React from "react";
import App from "../App";
import User from "./User";
import style from "./users.module.css";

const Users = () => {
  const { data, isLoading, error } = App(
    "https://jsonplaceholder.typicode.com/users"
  );

  const userElement =
    data &&
    data.map((data) => (
      <User data={data} key={data.id} id={data.id} {...data} />
    ));

  const loadingMessage = (
    <p style={{ color: "white" }}>Data is Loading Please Wait...</p>
  );
  const errorMessage = <p>{error}</p>;

  return (
    <div className={style.container}>
      <h1>User Management App</h1>
      {isLoading && loadingMessage}
      <main className={style.element}>
        {userElement}
        {error && errorMessage}
      </main>
    </div>
  );
};

export default Users;
