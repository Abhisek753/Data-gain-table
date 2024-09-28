import React from 'react'

function TableHeader() {
  return (
    <div className='container flex items-center p-4'>
        <div className='font-medium	text-sm	text-[#2D2E34] px-2'>
           <span>Appeal Letter</span>
        </div>
        <div className='bg-[#F28372] px-2   rounded-full flex justify-center items-center'>
           <span className='text-xs text-white'>09</span>
        </div>
    </div>
  )
}

export default TableHeader