import React from 'react'

const NumberRendering = () => {


    const datas = 10
    const ai_datas = 10000
  return (
   <>
     <div className="bg-green-600 text-white p-10 flex justify-center items-center">
        <div>
            <p className="my-4 mb-10">{datas}</p>
            <div className="bg-white text-black p-4 rounded">
                <h1 className="text-2xl mb-4">This is Ai</h1>
            <p >{ai_datas}</p>
            </div>
        </div>
    </div>
   </>
  )
}

export default NumberRendering