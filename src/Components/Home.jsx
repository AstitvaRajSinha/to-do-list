import React , {useState} from 'react';
import Task from './Task';

const Home = () => {
    const [tasks, setTasks] = useState([]); 
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const subbmitHandler = (e) =>{
        e.preventDefault();
        setTasks([...tasks, {title, description}])
    }
    const deleteTask = (index) =>{
        const newTasks = tasks.filter((task, i) => i !== index);
        setTasks(newTasks);
    }
  return (
    <>
    <section className='w-full p-10 mx-auto flex flex-col items-center bg-slate-500 h-screen'>
        <h1 className='text-4xl font-bold p-8 text-gray-200'>Daily Goals</h1>
        <form className='flex flex-col w-[60%] gap-8'  onSubmit={subbmitHandler}>
            <input className='p-4' type="text" placeholder='title' value={title} onChange={(e) => setTitle(e.target.value)} />
           <textarea  className='p-4' placeholder='description' value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
            <button className='bg-slate-800 text-white p-4' type='submit' onClick={() => console.log(title)}>ADD</button>
        </form>

        {tasks.map((item,index) =>(
            <Task key={index} title={item.title} description={item.description
            } deleteTask={deleteTask} index={index} />
        ))}
    </section>
        

  </>
  )
}

export default Home;