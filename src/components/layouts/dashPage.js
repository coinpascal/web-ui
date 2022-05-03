import React from "react"
import { Outlet } from "react-router";
const DashPageLayout = () => {
  return (
    <>
    Dashboard Page
    <Outlet/>
    </>
  )
}
export default DashPageLayout;