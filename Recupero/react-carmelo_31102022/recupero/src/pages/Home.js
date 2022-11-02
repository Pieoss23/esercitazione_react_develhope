import Children from "../components/Children";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [user, setUser] = useState({ username: "", password: "" });

  useEffect(() => {
    setUser({ ...user, username: "Mario" });
  }, []);

  const users = [
    { id: 1, name: "Mario" },
    { id: 2, name: "Luigi" },
    { id: 3, name: "Marco" },
  ];

  const printHello = (name) => {
    console.log(`Hello ${name}`);
  };

  const handleValue = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setUser({ ...user, [name]: value });
  };
  const printName = () => {
    console.log(user);
  };

  return (
    <div className="Home">
      <h1>Hello to home</h1>
      <div>
        {users.map((u) => (
          <li key={u.id}>
            <Children printHello={printHello} name={u.name} />
          </li>
        ))}
      </div>

      <hr />
      <label htmlFor="username">Username</label>
      <br />
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleValue}
      />
      <br />

      <label htmlFor="password">Password</label>
      <br />
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleValue}
      />
      <button onClick={() => printName()}>Stampa</button>
    </div>
  );
};

export default Home;
