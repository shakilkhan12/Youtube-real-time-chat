import Conversation from "./Conversation"
import Nav from "./Nav"

const ChatWrapper = () => {
  return (
    <div className="relative">
        <Conversation />
        <Nav />
    </div>
  )
}

export default ChatWrapper