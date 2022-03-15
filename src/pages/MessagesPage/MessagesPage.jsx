import React from "react";
import './MessagesPage.css'
import MessageBoard from '../../components/MessageBoard/MessageBoard'

export default function Messages() {

    return (
      <main>
        <h1>Message Board</h1>
        <div>
          <MessageBoard/>
        </div>
      </main>
    );
  }
  