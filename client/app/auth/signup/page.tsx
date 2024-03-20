
import { Metadata } from "next"
import Register from "./Register"

export const metadata: Metadata = {
    title: 'Signup',
    description: 'Real time chat application',
  }
const page = () => {
  return (
   <Register />
  )
}

export default page