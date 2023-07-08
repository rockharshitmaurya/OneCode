import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

const Home = () => {
  const [roomid, setroomid] = useState("");
  const [username, setusername] = useState("");
  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuidv4();
    setroomid(id);
  };
  return (
    <div className="maincontainer">
      <div className="formcontainer">
        <img className="logo" src="/images/logo.png" alt="logo" />
        <h4 className="mainLabel">Paste invitation ROOM ID</h4>
        <div className="inputGroup">
          <input
            type="text"
            className="inputBox"
            value={roomid}
            onChange={(e) => setroomid(e.target.value)}
            placeholder="ROOM ID"
          />
          <input
            type="text"
            className="inputBox"
            value={username}
            onChange={(e) => setusername(e.target.value)}
            placeholder="USERNAME"
          />
          <button className="btn joinBtn">Join</button>
          <span className="createInfo">
            If you don't have invite then create &nbsp;
            <a onClick={createNewRoom} href="fg" className="createNewBtn">
              new room
            </a>
          </span>
        </div>
      </div>
      <footer>
        <h4>
          Built with 💚 by <a href="fd">Vedant Sharma</a>
        </h4>
      </footer>
    </div>
  );
};

export default Home;
