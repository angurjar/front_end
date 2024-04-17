"use client";
import React from "react";

const USERS_DATA = [
  {
    email: "ashish@humblx.com",
    username: "axgurjar",
  },
  {
    email: "anjali@humblx.com",
    username: "angurjar",
  },
];

const UserList = () => {
  return (
    <div className="app-wrapper">
      <div className="app-content">
        <main>
          <h1>UserList</h1>
          <table className="table-auto">
            <thead>
              <tr>
                <th>username</th>
                <th>email</th>
              </tr>
            </thead>
            <tbody>
              {...USERS_DATA.map((u, i) => {
                return (
                  <tr key={i}>
                    <td>{u.username}</td>
                    <td>{u.email}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </main>
      </div>
    </div>
  );
};

export default UserList;
