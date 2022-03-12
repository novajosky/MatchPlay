import React from "react";
import './MessagesPage.css'
import Sidebar from '../../components/Sidebar/Sidebar';
import MessageBoard from '../../components/MessageBoard/MessageBoard'

export default function Messages() {

    return (
      <main>
        {/* <div className="d-flex" style={{ height: '100vh' }}>
          <Sidebar/>
        </div> */}
        <div>
          <MessageBoard/>
        </div>
      </main>
    );
  }
  