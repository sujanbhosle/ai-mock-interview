import React from 'react'

export default function Register() {
  return (
    <div>
     <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='bg-white p-8 rounded-xl shadow-lg w-96'>
        <h1 className='text-3xl font-bold text-center mb-6'>
          create account

        </h1>
        <form className='space-y-4'>
          <input type="text" placeholder='full name' className='w-full border p-3 rounded-lg' />
          <input type="email" placeholder='email' className='w-full border p-3 rounded-lg' />
          <input type="password" placeholder='password' className='w-full border p-3 rounded-lg' />
          <button type="submit" className='w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700' >
            register
          </button>


        </form>

      </div>

     </div>
    </div>
  )
}
