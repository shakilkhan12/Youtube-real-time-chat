'use client'
import { useState } from "react"
import Chat from "./Chat"
import Conversation from "./Conversation"
import Form from "./Form"
import Nav from "./Nav"

const ChatWrapper = () => {
const [sidebar, setSidebar] = useState<boolean>(false)
const toggleSidebar = () => {
  setSidebar(!sidebar)
}
  return (
    <div className="relative">
        <Conversation sidebar={sidebar} toggleSidebar={toggleSidebar} />
        <Nav toggleSidebar={toggleSidebar} />
        <Chat />
        <Form />
    </div>
  )
}

export default ChatWrapper