import React from 'react'
import { HiOutlineArrowDownCircle } from "react-icons/hi2";
const list = [
    {name:"Daily Mix 1",id:1},
    {name:"Discover Weekly",id:2},
    {name:"Malayalam",id:3},
    {name:"Dance / Electronix Mix",id:4},
    {name:"EDM / Popular",id:5},
]
function List() {
  return (
    <div className="mt-[25px]">
        <span className="md:text-[19px] font-medium text">FAV</span>
        <ul className="mt-[20px]">
            {
                list.map((list)=>{
                    return(
                        <li key={list.id} className="md:text-[16px] text-[13px] font-bold hover:bg-[#747474b5] p-[5px] rounded-[5px] cursor-pointer">{list.name}</li>
                    )
                })
            }
        </ul>
        <div className="flex items-center mt-[15px] hover:bg-[#747474b5] p-[5px] rounded-[5px] cursor-pointer">
        <div className="md:text-[30px] mr-[10px]">
        <HiOutlineArrowDownCircle />
        </div>
        <span className="md:text-[20px]">Install App</span>
        </div>
    </div>
  )
}

export default List