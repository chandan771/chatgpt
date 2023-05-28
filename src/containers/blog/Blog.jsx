import React from 'react'
import './blog.css'
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';




const Blog = () => {
  return (
    <div className='blog section-padding' id='blog'>
      <div className='blog-heading'>
         <h1 className='gradient__text'>A lot is happening,
             We are blogging about it.
         </h1>
      </div>
       <div className='blog-container'>

         <div className='cont-group-a'>
           <Article 
             imgUrl={blog01} 
             date="March 23, 2023" 
             title="OpenAI released the new version of GPT-3 called “text-davinci-003”.
             This model builds on top of our previous InstructGPT models and improves on a number of behaviors that we’ve heard are important to you as developers.
             `text-davinci-003` includes the following improvements:

             It produces higher-quality writing. This will help your applications deliver clearer, more engaging, and more compelling content.
             It can handle more complex instructions, meaning you can get even more creative with how you make use of its capabilities now." 
            />
         </div>

         <div className='cont-group-b'>
         <Article 
           imgUrl={blog02} 
           date="March 23, 2023" 
           title=" GPT-3 is one of the largest and most powerful language processing AI models to date, with 175 billion parameters." 
          />

         <Article 
           imgUrl={blog03} 
           date="March 23, 2023"
           title="GPT-3 was released in 2020 and is the largest and most powerful AI model to date. It has 175 billion parameters."  
          />

         <Article 
           imgUrl={blog04} 
           date="March 23, 2023"
           title="The newest version of OpenAI's language model system, GPT-4, was officially launched on March 13, 2023 with a paid subscription allowing users access to the Chat GPT-4 tool."  
          />

         <Article 
           imgUrl={blog05} 
           date="March 23, 2023"
           title="Analysts and technologists estimate that the critical process of training a large language model such as GPT-3 could cost over $4 million."  
         />
         </div>
       </div>
    </div>
  )
}

export default Blog
