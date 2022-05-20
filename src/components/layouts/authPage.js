import Router from "next/router"
import { CgClose } from "react-icons/cg"
import { motion } from "framer-motion"
const AuthPageLayout = ({ children }) => {
  return (
    <>
      <div className="flex w-screen items-center justify-center align-middle h-screen">
          <motion.div className="w-1/4 h-auto flex border relative flex-row shadow-2xl shadow-gray-300 rounded-xl">
            <button onClick={()=>{Router.push('/')}} className="absolute active:shadow-inner hover:text-gray-700 duration-200 text-gray-500 right-0 top-0 border border-r-0 text-2xl border-t-0 bg-gray-100 p-2 rounded-tr-lg rounded-bl-lg"><CgClose></CgClose></button>
            { children }
          </motion.div>
      </div>
    </>
  )
}
export default AuthPageLayout