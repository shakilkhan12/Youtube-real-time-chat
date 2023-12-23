import Chat from "./Chat"
import Conversation from "./Conversation"
import Nav from "./Nav"

const ChatWrapper = () => {
  return (
    <div className="relative">
        <Conversation />
        <Nav />
        <Chat />
    </div>
  )
}

export default ChatWrapper