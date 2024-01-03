
import { LuSendHorizonal } from "react-icons/lu";
const Form = () => {
  return (
    <div className="fixed left-0 lg:left-[320px] right-0 bottom-[14px] flex items-center gap-1.5 px-[30px]">
        <input type="text" name="" id="" placeholder="Message......." className="bg-[#312F2F] h-[59px] rounded-[30px] px-6 outline-none flex-1 text-white placeholder:text-[#FFFFFF66] placeholder:text-xl placeholder:font-semibold" />
        <div className="w-[59px] h-[59px] rounded-full bg-[#312F2F] flex items-center justify-center cursor-pointer"><LuSendHorizonal className="text-white text-2xl" /></div>
    </div>
  )
}

export default Form