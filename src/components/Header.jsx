import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone,faBars,faXmark} from '@fortawesome/free-solid-svg-icons'
import { icon } from '@fortawesome/fontawesome-svg-core'

const Header = () => {

  const [open,onOpen]=useState(true)

  const toggle=()=>{
    onOpen(!open)
  }

  return (
    <div className='bg-[rgb(25, 25, 25)] sm:bg-none'>
      <div className={`flex flex-row w-[95%] sm:min-h-fit  m-auto pt-6 justify-between items-center`}>
    {/*1st div*/}
        <div className={`sm:min-h-fit min-h-[30vh]  absolute flex flex-col items-center sm:flex-row w-full sm:w-auto sm:static ${open? `top-[-100%]`:`top-[8%]`} ${open? `rgb(10, 10, 10)`:`bg-black left-0 pt-3`} `}>
            <a className='text-[17px] p-4 uppercase text-[#ebe1e1] hover:bg-[#4b4a4a43] rounded-sm duration-200 font-[500] cursor-pointer'>Projects</a>
            <a className='text-[17px] p-4 uppercase text-[#ebe1e1] hover:bg-[#4c4b4a43] rounded-sm duration-200 font-[500] cursor-pointer'>Our Process</a>
            <a className='text-[17px] p-4 uppercase text-[#ebe1e1] hover:bg-[#4c4b4a43] rounded-sm duration-200 font-[500] cursor-pointer'>FAQ</a>
            <button className='static sm:hidden text-[#FFF0E9] text-[22px] font-[500] px-6 py-3 w-[170px] rounded-[10px] hover:text-[#DBFA9B] max-sm:py-4 max-sm:px-6 max-sm:text-[1.125rem] flex items-center gap-2 bg-[#4c4b4a43]'> <FontAwesomeIcon icon={faPhone} /> Book a call</button>
        </div>
        <div className='text-[22px]'>Eonco Digital</div>
        <div>
            <button className='hidden text-[#FFF0E9] text-[22px] font-[500] px-6 py-3 rounded-[10px] hover:text-[#DBFA9B] max-sm:py-2 max-sm:px-4 max-sm:text-[1.125rem] sm:flex items-center gap-2 bg-[#4c4b4a43]'> <FontAwesomeIcon icon={faPhone} /> Book a call</button>
            <FontAwesomeIcon className='static sm:hidden text-[40px]' onClick={toggle} icon={open ? faBars : faXmark} />
        </div>
    </div>
    </div>
  )
}

export default Header