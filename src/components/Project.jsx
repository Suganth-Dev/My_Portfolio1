import React from 'react'
import Todo from '../assets/todo.png'
import NotesApp from '../assets/notes.jpg'
import Ecommerce from '../assets/e-commerce.jpg'
import { FaGithub } from 'react-icons/fa'
import Dashboard from '../assets/Dashboard.png'
import Rewardify from '../assets/Rewardify.png'
import coming from '../assets/coming.jpg'

const Project = () => {
    const projects = [
        {
          title: "WEHR",
          description:
            "Dashboard Design: Users can add, update, complete, and delete tasks easily.",
          techStack: ["React.js",  "Tailwind CSS",],
          link: "https://wehr.onrender.com",
          github: 'https://github.com/Suganth-Dev/WeHr',
          image: Dashboard, 
        },
        {
          title: "REWARDIFY",
          description:
            "Store App: [Currently working on....]",
          techStack: ["React.js",  "Tailwind CSS", ],
          link: "https://rewardify-q3j5.onrender.com/",
          github: 'https://github.com/Suganth-Dev/Rewardify',
          image: Rewardify, 
        },
        {
          title: "NOTES_MERN",
          description:
            "Full-Stack Functionality: Uses MongoDB for storage, Express.js and Node.js for the backend, and React for the front end, enabling CRUD operations for notes.",
          techStack: ["React.js", "MongoDB", "Node.js", "Tailwind CSS", "Express.js"],
          link: "https://mern-notesapp-frontend-kwxs.onrender.com/login",
          github: 'https://github.com/Suganth-Dev/Mern_NotesApp',
          image: NotesApp,
        },
        {
          title: "TODO_MERN",
          description:
            "Efficient Task Management: Users can add, update, complete, and delete tasks easily.",
          techStack: ["React.js", "MongoDB", "Node.js", "Tailwind CSS", "Express.js"],
          link: "https://mern-todo-frontend-q6as.onrender.com/",
          github: 'https://github.com/Suganth-Dev/mern_todo_org',
          image: Todo, 
        },
        {
          title: "E-COMMERCE_REACT",
          description:
            "I built this website out of personal interest and to meet the needs of my mobile shop. This platform serves as a standard product purchasing website.",
          techStack: ["javascript", "React.js", "TailwindCss"],
          link: "https://suganth-dev.github.io/S-S_Techayo-shop/",
          github: 'https://github.com/Suganth-Dev/S-S_Techayo-shop',
          image: Ecommerce, 
        },
         {
         
          techStack: ["MERN STACK"],
          
     
          image: coming, 
        },
        
      ];
  return (
    <section id='project' className='bg-gradient-to-r bg-gray-900 py-16 px-6'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-5xl font-bold text-center text-gray-300 mb-12'>Projects</h2>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10'>
            {projects.map((project, index) => (
                <div key={index} className='bg-gray-950 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105'>
                    <img src={project.image} alt={project.title} className='w-full h-48 object-cover px-3 pt-3 rounded-2xl'/>
                    <div className='p-6'>
                        <h3 className='text-2xl font-semibold text-gray-300 mb-2'>{project.title}</h3>
                        <p className='text-gray-300 mb-4'>{project.description}</p>
                        <div className='flex flex-wrap gap-2 mb-4'>
                            {project.techStack.map((tech, idx) => (
                                <div key={idx} className='bg-gray-900 text-gray-300 text-sm font-medium px-3 py-1 rounded-full'>{tech}</div>
                            ))}
                        </div>
                        <div className='flex gap-3'>
                            <a href={project.link} target='_blank' rel='noopener noreferrer' className='inline-block bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors'>View Project</a>
                            <a href={project.github} target='_blank' rel='noopener noreferrer' className='flex gap-2 items-center bg-gray-800 text-white px-6 py-2 rounded-lg shadow-md hover:bg-gray-900 transition-colors'><FaGithub/> Github</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Project