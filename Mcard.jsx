import React from 'react'

export default function Mcard() {
    return (
        <div className='Midcard mt-2'>
            <a href="#" className="block text-left max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow text-black ">
                <button type="button" class="text-black-100 focus:outline-none  font-normal rounded-sm text-sm px-5 py-0.5 mr-2 mb-2 border border-slate-300 font-semibold">
                    Dark
                </button>

                <h5 className="mb-2 text-2xl font-bold tracking-tight text-black  ">Noteworthy technology acquisitions 2021</h5>
                <p className="font-normal text-slate-700 ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <a href='#' className='text-xs text-blue-800 font-bold underline '> Continue Reading </a>
            </a>

        </div>
    )
}
