import Image from "next/image"
import Toggle from "./Toggle"
import { ToggleProps } from "@/types"
type PropTypes = ToggleProps

const Nav = ({toggleSidebar}: PropTypes) => {
  return (
    <nav className="h-[96px] absolute top-0 left-0 lg:left-[320px] right-0  bg-[#1F1D1D] flex items-center justify-between px-4">
        <div className="flex items-center gap-4">
         <div className="w-14 h-14 relative rounded-full overflow-hidden">
            <Image src="/images/user3.png" alt="user" fill className="w-full h-full object-cover" />
         </div>
         <div>
            <h2 className="text-white text-xl font-semibold capitalize">Darshan Zalavadiya</h2>
            <span className="block text-[#21FF5FFC] mt-[2px] text-xl font-semibold capitalize">online</span>
         </div>
        </div>
        <Toggle toggleSidebar={toggleSidebar} />
    </nav>
  )
}

export default Nav