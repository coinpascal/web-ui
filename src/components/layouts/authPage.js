import React from "react"
import Slider from 'react-slick'
import {HiOutlineDocumentReport} from 'react-icons/hi'
import {MdOutlineSupervisedUserCircle} from 'react-icons/md'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const AuthPageLayout = ({ children }) => {
  return (
    <>
      <div className="flex w-screen items-center justify-center align-middle h-screen">
          <div className="w-2/4 h-[65%] flex border flex-row shadow-2xl shadow-gray-300 rounded-xl">
            <div className="w-1/2 border-r-2 py-8 px-3 bg-slate-800 rounded-tl-xl rounded-bl-xl">
              <div className="z-10 px-4">
                <h1 className="text-[48px] font-extrabold text-white">
                  <MdOutlineSupervisedUserCircle />Why Login?
                </h1>
                <span className="block text-lg text-gray-300">By loggin, Get acess to <span>Features</span> like</span>
                <Slider dots={false} infinite pauseOnHover arrows={false} slidesToShow={1} autoplay autoplaySpeed={10000}>
                  <div>
                    <div className="pb-6">
                    <a href="/" className="group cursor-pointer w-[fit-content] block">
                      <h1 className="text-[20px] font-bold text-white w-min px-2">Reports</h1>
                      <div className="bg-gradient-to-r from-green-400 transition-all to-blue-500 group-hover:from-pink-500 group-hover:to-yellow-500 h-1 rounded-lg w-24 mb-4"></div>
                    </a>
                      <Slider className="slick-center-one" slidesToShow={1} variableWidth autoplay autoplaySpeed={3000} arrows={false} dots={false} centerMode={true} speed={500} initialSlide={1} infinite={true}>
                        <div>
                          <div className="bg-slate-800 actualbox mr-5 w-40 rounded-lg border border-blue-700 p-2 shadow-lg shadow-slate-800">
                          <div className="flex flex-col items-center gap-2 mb-2">
                            <div className="text-2xl bg-blue-100 w-min p-1 rounded text-blue-500">
                              <HiOutlineDocumentReport/>
                            </div>
                            <div>
                              <p className="text-blue-500 font-medium text-[16px]">Daily Market Reports</p>
                              <p className="leading-3 text-sm font-semibold text-gray-400">Your selected coin's market reports.</p>
                            </div>
                          </div>
                          </div>
                        </div>
                        <div>
                          <div className="bg-slate-800 actualbox mr-5 w-40 rounded-lg border border-blue-700 p-2 shadow-lg shadow-gray-800">
                          <div className="flex flex-col items-center gap-2 mb-2">
                            <div className="text-2xl bg-blue-100 w-min p-1 rounded text-blue-500">
                              <HiOutlineDocumentReport/>
                            </div>
                            <div>
                              <p className="text-blue-500 font-medium text-[16px]">Daily Market Reports</p>
                              <p className="leading-3 text-sm font-semibold text-gray-400">Your selected coin's market reports.</p>
                            </div>
                          </div>
                          </div>
                        </div>
                        <div>
                          <div className="bg-slate-800 actualbox mr-5 w-40 rounded-lg border border-blue-700 p-2 shadow-lg shadow-gray-800">
                          <div className="flex flex-col items-center gap-2 mb-2">
                            <div className="text-2xl bg-blue-100 w-min p-1 rounded text-blue-500">
                              <HiOutlineDocumentReport/>
                            </div>
                            <div>
                              <p className="text-blue-500 font-medium text-[16px]">Daily Market Reports</p>
                              <p className="leading-3 text-sm font-semibold text-gray-400">Your selected coin's market reports.</p>
                            </div>
                          </div>
                          </div>
                        </div>
                      </Slider>
                    </div>
                  </div>
                  <div>
                    <div className="pb-6">
                    <a href="/" className="group cursor-pointer w-[fit-content] block">
                      <h1 className="text-[20px] font-bold text-white w-min px-2">Portfolio</h1>
                      <div className="bg-gradient-to-r from-red-400 transition-all to-indigo-500 group-hover:from-indigo-500 group-hover:to-yellow-500 h-1 rounded-lg w-24 mb-4"></div>
                    </a>
                      <Slider className="slick-center-one" slidesToShow={1} variableWidth autoplay autoplaySpeed={3000} arrows={false} dots={false} centerMode={true} speed={500} initialSlide={1} infinite={true}>
                        <div>
                          <div className="bg-slate-800 actualbox mr-5 w-40 rounded-lg border border-blue-700 p-2 shadow-lg shadow-slate-800">
                          <div className="flex flex-col items-center gap-2 mb-2">
                            <div className="text-2xl bg-blue-100 w-min p-1 rounded text-blue-500">
                              <HiOutlineDocumentReport/>
                            </div>
                            <div>
                              <p className="text-blue-500 font-medium text-[16px]">Daily Market Reports</p>
                              <p className="leading-3 text-sm font-semibold text-gray-400">Your selected coin's market reports.</p>
                            </div>
                          </div>
                          </div>
                        </div>
                        <div>
                          <div className="bg-slate-800 actualbox mr-5 w-40 rounded-lg border border-blue-700 p-2 shadow-lg shadow-gray-800">
                          <div className="flex flex-col items-center gap-2 mb-2">
                            <div className="text-2xl bg-blue-100 w-min p-1 rounded text-blue-500">
                              <HiOutlineDocumentReport/>
                            </div>
                            <div>
                              <p className="text-blue-500 font-medium text-[16px]">Daily Market Reports</p>
                              <p className="leading-3 text-sm font-semibold text-gray-400">Your selected coin's market reports.</p>
                            </div>
                          </div>
                          </div>
                        </div>
                        <div>
                          <div className="bg-slate-800 actualbox mr-5 w-40 rounded-lg border border-blue-700 p-2 shadow-lg shadow-gray-800">
                          <div className="flex flex-col items-center gap-2 mb-2">
                            <div className="text-2xl bg-blue-100 w-min p-1 rounded text-blue-500">
                              <HiOutlineDocumentReport/>
                            </div>
                            <div>
                              <p className="text-blue-500 font-medium text-[16px]">Daily Market Reports</p>
                              <p className="leading-3 text-sm font-semibold text-gray-400">Your selected coin's market reports.</p>
                            </div>
                          </div>
                          </div>
                        </div>
                      </Slider>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
            <div className="w-1/2 p-3">
              { children }
            </div>
          </div>
      </div>
    </>
  )
}
export default AuthPageLayout