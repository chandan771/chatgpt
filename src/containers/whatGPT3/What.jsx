import React from 'react'
import './what.css'
import  Feature  from '../../components/feature/Feature'



const What = () => {
  return (
    <div className='whatgpt3 section-margin' id='whpt3'>
      <div className='feature'>
         <Feature 
           title="What is GPT-3"
           text="GPT-3, or the third-generation Generative Pre-trained Transformer, is a neural network machine learning model trained using internet data to generate any type of text. Developed by OpenAI, it requires a small amount of input text to generate large volumes of relevant and sophisticated machine-generated text."
          />
      </div>

      <div className='heading'>
         <h1 className='gradient__text'>
           The possibilities are beyond your imagination.
         </h1>
         <p>Explore the Library</p>
      </div>

      <div className='container-feat'>
         <Feature 
          title="Chatbots" 
          text="A chatbot is a computer program that uses artificial intelligence (AI) and natural language processing (NLP) to understand customer questions and automate responses to them, simulating human conversation." 
         />

         <Feature 
           title="Knowledge Base"
           text="As technology evolves, knowledge will exist in more and more disparate places. Information gets stuck in email, social media interactions, forum discussions, comments, tickets, and even in the brains of individual service desk agents."
          />

         <Feature
           title="Artificial intelligence"
           text="Artificial intelligence (AI) is a set of technologies that enable computers to perform a variety of advanced functions, including the ability to see, understand and translate spoken and written language, analyze data, make recommendations"
          />
      </div>
    </div>
  )
}

export default What
