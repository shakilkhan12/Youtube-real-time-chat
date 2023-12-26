import Chat from "./Chat"
import Conversation from "./Conversation"
import Form from "./Form"
import Nav from "./Nav"

const ChatWrapper = () => {
  return (
    <div className="relative">
        <Conversation />
        <Nav />
        <Chat />
        <Form />
    </div>
  )
}

export default ChatWrapper