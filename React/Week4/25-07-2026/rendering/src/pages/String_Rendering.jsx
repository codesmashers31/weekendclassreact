

const String_Rendering = () => {

    

  const datas = "The primary current issue surrounding NEET-UG is a major digital paper leak that forced the complete cancellation of the May 3 examination, triggering a nationwide re-test, intense political protests, and a sweeping structural overhaul of the National Testing Agency (NTA)"
  const ai_datas = "Data AI primarily refers to data.ai (formerly App Annie), a major mobile market intelligence and analytics platform acquired by Sensor Tower, or more broadly, the integration of artificial intelligence with data management and analytics workflows." 
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

export default String_Rendering