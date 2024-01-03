import { ToggleProps } from "@/types";
import { PiHamburger } from "react-icons/pi";
type PropTypes = ToggleProps
const Toggle = ({toggleSidebar}: PropTypes) => {
  return (
    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center cursor-pointer lg:hidden" onClick={toggleSidebar}>
        <PiHamburger size={22} />
    </div>
  )
}

export default Toggle