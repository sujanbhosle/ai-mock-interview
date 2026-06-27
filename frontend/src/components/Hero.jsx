import React from 'react'

export default function Hero() {
  return (
    <div>
      <section className='text-center py-20 bg-gray-100'>
        <h1 className='text-5x1 font-bold text-blue-600'>
            AI Mock Interview Platform</h1>
        <p className='mt-6 text-lg text-gray-700'>
            practice technical interviews with AI and improve your interview skills
        </p>
        <button className='mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700'>
            start interview</button>

      </section>
    </div>
  )
}
