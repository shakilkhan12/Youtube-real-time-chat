'use client'

import { useRegisterMutation } from "@/store/services/authService"
import Link from "next/link"
import { ChangeEvent, FormEvent, useState } from "react"

const Register = () => {
    const [state, setState] = useState({
     name: '',
     email: '',
     password: ''
    })
    const onChange = (e:ChangeEvent<HTMLInputElement>) => {
       setState({...state, [e.target.name]: e.target.value})
    }
    const [register, {isLoading}] = useRegisterMutation()
    const onSubmit = (e: FormEvent) => {
        e.preventDefault()
        register(state).unwrap().then(data => {
            console.log(data)
        }).catch(err => {
            console.log(err)
        })
    }
  return (
    <div className="flex">
    <div className="bg-[url('/images/chat.jpg')] bg-no-repeat bg-cover h-screen hidden lg:block lg:w-[50%] xl:w-[65%]"></div>
    <div className="flex-1 flex h-screen items-center justify-center px-4">
        <form className="w-[90%]" onSubmit={onSubmit}>
            <h1 className="text-xl font-semibold text-white capitalize mb-8">new user? signup here!</h1>
            <div>
                <input type="text" name="name" value={state.name} onChange={onChange} placeholder="Name..." className="w-full h-14 rounded-lg outline-none px-4 bg-[#312F2F] text-white" />
            </div>
            <div className="mt-6">
                <input type="email" name="email" value={state.email} onChange={onChange} placeholder="Email..." className="w-full h-14 rounded-lg outline-none px-4 bg-[#312F2F] text-white" />
            </div>
            <div className="mt-6">
                <input type="password" name="password" value={state.password} onChange={onChange} placeholder="Create Password..." className="w-full h-14 rounded-lg outline-none px-4 bg-[#312F2F] text-white" />
            </div>
            <div className="mt-6">
                <input type="submit" value="signup" className="w-full block cursor-pointer bg-[#00FF38] text-black text-lg font-semibold capitalize h-14 px-4 rounded-lg" />
            </div>
            <Link href='/auth/signin' className="inline-block mt-4 text-zinc-400 font-semibold hover:text-white focus:text-white">Already have an account?</Link>
        </form>
    </div>
</div>
  )
}

export default Register