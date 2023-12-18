import { CiSearch } from "react-icons/ci";
const Search = () => {
  return (
    <div className="h-[96px] w-full flex items-center px-4">
     <div className="flex items-center bg-[#5436397A] w-full px-3 py-2 rounded-full space-x-1">
     <CiSearch className="text-xl text-white" />
       <input type="text" name="" id="" className="bg-transparent outline-none placeholder:text-[#FFFFFF99] text-xs font-light flex-1 text-white" placeholder="Search..." />
     </div>
    </div>
  )
}

export default Search