import Link from "next/link"


const page = () => {
  return (
    <div className="flex">
        <div className="bg-[url('/images/chat.jpg')] bg-no-repeat bg-cover h-screen hidden lg:block lg:w-[50%] xl:w-[65%]"></div>
        <div className="flex-1 flex h-screen items-center justify-center px-4">
            <form className="w-[90%]">
                <h1 className="text-xl font-semibold text-white capitalize mb-8">signin</h1>
         
                <div className="mt-6">
                    <input type="email" name="email" placeholder="Email..." className="w-full h-14 rounded-lg outline-none px-4 bg-[#312F2F] text-white" />
                </div>
                <div className="mt-6">
                    <input type="password" name="password" placeholder="Create Password..." className="w-full h-14 rounded-lg outline-none px-4 bg-[#312F2F] text-white" />
                </div>
                <div className="mt-6">
                    <input type="submit" value="singin" className="w-full block cursor-pointer bg-[#00FF38] text-black text-lg font-semibold capitalize h-14 px-4 rounded-lg" />
                </div>
                <Link href='/auth/signup' className="inline-block mt-4 text-zinc-400 font-semibold hover:text-white focus:text-white">Don't have an account?</Link>
            </form>
        </div>
    </div>
  )
}

export default page