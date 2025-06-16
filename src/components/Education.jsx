import React from 'react'
const education = [
    {
      degree: "B.E(Mechanical Engineering)",
      institution: "Government College of Engineering-Dharmapuri",
      year: "2017 - 2021",
      description: "Graduated with a strong foundation in critical thinking and problem-solving.",
      icon: "🎓",
    },
    {
      degree: "Higher Secondary (11th-12th) ",
      institution: "Government Boys Higher Secondary-Uthangarai",
      year: "2016 - 2017",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit Vel molestiae.",
      icon: "🎓",
    },
    {
      degree: "Secondary (10th)",
      institution: "Government Boys Higher Secondary-Uthangarai",
      year: "2015",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit Vel molestiae.",
      icon: "🎓",
    },
  ];

  const experience = [
    
    {
      role: "R&D Technical Engineer(Product Development)",
      company: "Insta 3D Technologies [Coimbatore]",
      year: "JAN-2022 to OCT-2024",
      description: "I am in the product development department and 3D printing service. ",
      icon: "💻",
    },
    {
      role: "React Developer",
      company: "DOTCOD Innovation PVT [Bangalore]",
      year: "DEC-2024 to JUN-2025",
      description: " My role isthey give the client a Figma design. I create the same as a website inReact.",
      icon: "💻",
    },
  ];

const Education = () => {
  return (
    <section id='education' className='bg-gradient-to-r bg-gray-950 py-16 px-6'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-4xl md:text-5xl font-extrabold text-center text-gray-300 mb-12'>Education & Experience</h2>
        <div className='grid md:grid-cols-2 gap-12'>
            {/* Education section */}
            <div>
                <h3 className='text-3xl font-semibold text-gray-300 mb-6'>Education</h3>
                {education.map((edu, index) => (
                    <div key={index} className='flex items-start bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 mb-6'>
                        <div className='text-4xl mr-6 text-blue-500'>{edu.icon}</div>
                        <div>
                            <h4 className='text-xl font-bold text-gray-200'>{edu.degree}</h4>
                            <p className='text-gray-300'>{edu.institution}</p>
                            <p className='text-gray-300 text-sm italic'>{edu.year}</p>
                            <p className='text-gray-300 mt-2'>{edu.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            {/* Experience Section */}
            <div>
                <h3 className='text-3xl font-semibold text-gray-300 mb-6'>Experience</h3>
                {experience.map((exp, index) => (
                    <div key={index} className='flex items-start bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 mb-6'>
                        <div className='text-4xl mr-6 text-blue-500'>{exp.icon}</div>
                        <div>
                            <h4 className='text-xl font-bold text-gray-200'>{exp.role}</h4>
                            <p className='text-gray-300'>{exp.company}</p>
                            <p className='text-gray-300 text-sm italic'>{exp.year}</p>
                            <p className='text-gray-300 mt-2'>{exp.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  )
}

export default Education