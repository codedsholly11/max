import React, {useState, useEffect} from 'react'

const Api = () => {
    const [data, setData] = useState(null)
    useEffect(()=>{
        async function fetchApi() {
            const baseUrl ="https://reqres.in/api/users"
            const response= await fetch(baseUrl)
            .then((res)=>res.json())
            const newData = await response.data
            setData(newData)
            console.log(newData);
        }

        fetchApi()
    }, [])
  return (
    <>
    <h1>user Data</h1>
      {
        data && data.map((n)=>(
            <div>
                <div key={n.id} className='flex gap-5'>
                    <h1>first name is :{n.first_name}</h1>
                    <h1>last name is :{n.last_name}</h1>
                    <img className='rounded-full h-[40px]' src={n.avatar} alt="" />
                </div>
            </div>
        ))
      }
    </>
  )
}

export default Api
