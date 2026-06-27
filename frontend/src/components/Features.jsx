import React from 'react'

export default function Features() {
  return (
    <div>
      <section className='py-16 bg-white'>
        <h2 className='text-4x1 font-bold text-center mb-10'>
            why choose our platform?

        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 px-10'>
            <div className='shadow-lg rounded-xl p-6 text-center'>
                <h3 className='text-2xl font-semibold mb-3'>
                    AI Interview

                </h3>
                <p>
                    practice interviews with AI-generated questions.
                </p>

            </div>
            <div className='shadow-lg rounded-xl p-6 text-center'>
                <h3 className='text-2xl font-semibold mb-3'>
                    progress tracking

                </h3>
                <p>
                    monitor yor interview performance over time
                </p>

            </div>

        </div>

      </section>
    </div>
  )
}
