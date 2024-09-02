import React from 'react'
import { useParams } from 'react-router-dom'
import { projectsItems } from '../ProjectItems'
import ErrorPage from '../Pages/ErrorPage'

function WorkDetails() {

    const params = useParams()
    
    const filteredItem = projectsItems.find((item) => item.id === params.id);

    console.log(filteredItem)

    if(!filteredItem){
        return <ErrorPage/>
    }

    
  return (
    <div className=' w-full flex flex-col mt-1'>
      <div className=' mt-9 w-full flex justify-center min-h-[30vh] flex-col items-center'>
        <div className=' text-center'>
        <h1 className=' font-extrabold text-[40px]'>{filteredItem.name}</h1>
        <h2 className=' text-[24px]'>{filteredItem.work}</h2>
        </div>

        <img src={filteredItem.photoUrl} alt={filteredItem.name} />
      </div>
      
    </div>
  )
}

export default WorkDetails
