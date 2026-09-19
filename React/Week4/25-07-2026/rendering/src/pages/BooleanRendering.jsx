

const BooleanRendering = () => {
  
   const isActive = "Tghis is valye"
   const isPending = 100

  
    return (
    <>
    <div className="bg-black text-white p-5 h-70">
        
        {isPending>90?<p className="bg-white text-black text-center p-2 rounded w-45">Light</p>:<p className="bg-green-500 text-black text-center p-2 rounded w-45">Dark</p>}


        <h1 className="bg-white my-7 text-black text-center p-2 rounded w-45">{isActive?"light":"dark"}</h1>
    </div>


    <div>
        {isActive ?? <h1>This is Optional</h1>}
    </div>
    </>
  )
}

export default BooleanRendering