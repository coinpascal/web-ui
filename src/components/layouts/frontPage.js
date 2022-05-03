import React from "react"
import NavigationBar from "../navigationBar";

const FrontPageLayout = ({ children }) => {
  return (
    <>
    <NavigationBar/>
    <main>{children}</main>
    </>
  )
}
export default FrontPageLayout