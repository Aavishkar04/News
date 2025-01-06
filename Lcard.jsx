import React from 'react'

export default function Lcard() {
  return (
    <div className='Lcard'>
        <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 ml-6 shadow-xl">
  <div className="relative h-75 m-0 overflow-hidden text-white ">
    <img src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80" alt="card-image" />
  </div>
  <div className="mt-2 ml-3">
    <p className='font-xxs text-left font-semibold text-slate-400'>April 17,2022</p>
    <h6 className="mb-2 text-slate-800 text-xl font-bold flex justify-start">
      Website Review Check
    </h6>
    <div class="flex flex-col items-start">

  <p class="text-slate-500 mr-2 text-left text-xs font-semibold flex justify-start tracking-tight">
    The place is close to Barceloneta Beach and bus stop just 2 min by walk
    and near to "Naviglio" where you can enjoy the main night life in
    Barcelona.
  </p>
</div>

<div class="flex mt-3">
  <img class="w-20 h-11 mr-3" src="https://placehold.co/600x400/png" alt="Image 1" />
  <img class="w-20 h-11 mr-3 " src="https://placehold.co/600x400/png" alt="Image 2" />
  <img class="w-20 h-11 mr-3 " src="https://placehold.co/600x400/png" alt="Image 3" />
</div>
<div class="flex justify-start">
  <a class="text-xs mb-4 mt-2 text-blue-800 font-bold underline text-left ml-2" href="#">Continue Reading</a>
</div>

  </div>
 
</div>  
      
    </div>
  )
}
