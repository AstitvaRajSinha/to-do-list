import React from 'react'

const Task = ({title,description, deleteTask, index}) => {
  return (
    <>
    <section className='w-[60%] text-white flex items-center bg-slate-700 justify-between p-8 m-4'>
      <div className=''>
         <h1 className='text-xl'>
      {index+1}.  {title}
    </h1>
    <h1 className='text-slate-300'>
        {description}
    </h1>
      </div>
    <button className='w-[34px] h-[30px] rounded-full bg-slate-900 text-white text-3xl flex justify-center items-center text-center' onClick={() => deleteTask(index)}>-</button>
    </section>
    
    </>
   
  )
}

export default Task