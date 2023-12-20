import Image from "next/image"


const Nav = () => {
  return (
    <nav className="h-[96px] absolute top-0 left-[320px] right-0 w-[100vw-320px] bg-[#1F1D1D] flex items-center px-4">
        <div className="flex items-center gap-4">
         <div className="w-14 h-14 relative rounded-full overflow-hidden">
            <Image src="/images/user3.png" alt="user" fill className="w-full h-full object-cover" />
         </div>
         <div>
            <h2 className="text-white text-xl font-semibold capitalize">Darshan Zalavadiya</h2>
            <span className="block text-[#21FF5FFC] mt-[2px] text-xl font-semibold capitalize">online</span>
         </div>
        </div>
    </nav>
  )
}

export default Nav