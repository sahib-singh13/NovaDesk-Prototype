import React from 'react'
import Data from "../data/companyData.json"

export const CompanyInfo = () => {
  return (
     <div className="h-[30rem] w-full flex items-center space-x-12 justify-center ">
     <div className="h-[25rem] w-[20rem] border border-sky-300 items-center space-y-6 justify-center">
     <h2 className="text-center mt-4 text-sky-300 font-bold text-xl">Product Related Issues</h2>
     {Data.issues.productRelated.map((issue,index)=>(
        <button key={issue.id}
        className=" border-sky-300 border-2 rounded-lg p-2 w-[16rem] justify-center ml-7
        hover:bg-sky-400 text-sky-300 font-bold hover:text-white"
        >
        {issue.subproblem}
        </button>
     )

     )}
     </div>

     <div className="h-[25rem] w-[20rem] border border-sky-300 items-center space-y-6 justify-center">
     <h2 className="text-center mt-4 text-sky-300 font-bold text-xl">Delivery Related Issues</h2>
     {Data.issues.deliveryRelated.map((issue,index)=>(
        <button key={issue.id}
        className=" border-sky-300 border-2 rounded-lg p-2 w-[16rem] justify-center ml-7
        hover:bg-sky-400 text-sky-300 font-bold hover:text-white"
        >
        {issue.subproblem}
        </button>
     )

     )}
     </div>

     <div className="h-[25rem] w-[20rem] border border-sky-300 items-center space-y-6 justify-center">
     <h2 className="text-center mt-4 text-sky-300 font-bold text-xl">App Related Issues</h2>
     {Data.issues.applicationRelated.map((issue,index)=>(
        <button key={issue.id}
        className=" border-sky-300 border-2 rounded-lg p-2 w-[16rem] justify-center ml-7
        hover:bg-sky-400 text-sky-300 font-bold hover:text-white"
        >
        {issue.subproblem}
        </button>
     )

     )}
    </div>
     </div>
  )
}
