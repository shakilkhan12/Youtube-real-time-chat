import ConversationsList from "./ConversationsList"
import Search from "./Search"


const Conversation = () => {
  return (
    <div className="absolute w-[320px] h-screen left-0 top-0 bottom-0 bg-[#1F1D1D]">
        <Search />
        <ConversationsList />
    </div>
  )
}

export default Conversation