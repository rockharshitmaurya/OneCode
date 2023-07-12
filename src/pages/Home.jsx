import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [roomid, setroomid] = useState("");
  const [username, setusername] = useState("");
  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuidv4();
    setroomid(id);
    toast.success("Created a new room");
  };

  const joinRoom = () => {
    if (!roomid || !username) {
      toast.error("ROOM ID & Username is Required");
      return;
    }
    //Redirect
    navigate(`/editor/${roomid}`, {
      state: {
        username,
      },
    });
  };
  
  //handle join room when press Enter Key
  const handleInputEnter = (e) => {
    if (e.code === "Enter") {
      joinRoom();
    }
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
            onKeyUp={handleInputEnter}
          />
          <input
            type="text"
            className="inputBox"
            value={username}
            onChange={(e) => setusername(e.target.value)}
            placeholder="USERNAME"
            onKeyUp={handleInputEnter}
          />
          <button className="btn joinBtn" onClick={joinRoom}>
            Join
          </button>
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
