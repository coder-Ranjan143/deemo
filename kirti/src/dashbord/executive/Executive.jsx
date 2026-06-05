import React from 'react'
import { Link } from "react-router-dom";
import MfgUnitComm from './pages/MfgUnitComm';

const Executive = () => {
  return (
    <div>
        
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      
      <div className="bg-zinc-900 p-8 rounded-2xl w-[350px]">
        
        <h1 className="text-3xl font-bold mb-6 text-center text-cyan-400">
          Executive
        </h1>

        <div className="flex flex-col gap-4">
           
             <Link
            to="/mfgunit"
            className="bg-cyan-500 hover:bg-cyan-600 p-3 rounded-xl text-center"
          >
            Critical Camera Down
          </Link>

         

        </div>


      </div>

    </div>

    </div>
  )
}

export default Executive
