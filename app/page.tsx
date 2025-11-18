import React from 'react';

export default function AuthPage() {
return (
<div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
<div className='bg-white shadow-md rounded-lg p-8 w-96'>
<h1 className='text-2xl font-bold mb-4'>Sign In</h1>
<form>
<div className='mb-4'>
<label htmlFor='email' className='block text-sm font-medium text-gray-700'>Email</label>
<input type='email' id='email' className='mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm' />
</div>
<div className='mb-4'>
<label htmlFor='password' className='block text-sm font-medium text-gray-700'>Password</label>
<input type='password' id='password' className='mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm' />
</div>
<button type='submit' className='block w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'>Sign In</button>
</form>
</div>
</div>
);
}
