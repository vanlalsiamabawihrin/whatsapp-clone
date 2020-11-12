import { Avatar, IconButton } from "@material-ui/core";
import {React, useState } from "react";
import { AttachFile, MoreVert, SearchOutlined, SettingsInputAntenna} from "@material-ui/icons";
import "./Chat.css";
import InsertEmoticonicon from  "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
var currentDate=new Date();

const Chat = () => {

  const [input, setInput] = useState("")
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar/>
        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>Last seen at...</p>
        </div>
        <div className="chat__headerRight">
        <IconButton>
          <SearchOutlined/>
          </IconButton>
          <IconButton>
            <AttachFile/>
          </IconButton>
          <IconButton> 
            <MoreVert/> 
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <p className="chat__message">
          <span className="chat__name">Siam </span>
          This is a message 
          <span className="chat__timestamp">{
             currentDate.toDateString}</span>
          </p>
          <p className="chat__receiver chat__message">
          <span className="chat__name">Siam </span>
          This is a message 
          <span className="chat__timestamp">{
             currentDate.toDateString}</span>
          </p>
          <p className="chat__message">
          <span className="chat__name">Siam </span>
          This is a message 
          <span className="chat__timestamp">{
             currentDate.toDateString}</span>
          </p>
      </div>
      <div className="chat__footer">
      <InsertEmoticonicon/>
        <form >
          <input value = {input} onChange = {(e) => setInput(e.target.value)} 
          placeholder = "Type a message" type="text"/>
          <button type="submit">Send a message</button>
        </form>
         <MicIcon/>   
      </div>
    </div>
  );
};

export default Chat;
