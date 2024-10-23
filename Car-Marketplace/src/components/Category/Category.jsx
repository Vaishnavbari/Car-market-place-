import React from 'react'
import {Categories} from "@/components/shared/data"


export function Category() {
    return (
        <div className="p-20 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 items-center lg:grid-cols-9 gap-4">
        {Categories.map((category, index) => (
          <div key={category.id} className='flex flex-col items-center justify-center p-4 bg-slate-100 hover:scale-75 cursor-pointer hover:border-[2px]'>
            <img src={category.icon} alt={category.name} width={35} height={35} />
            <p>{category.name}</p>
          </div>
        ))}
      </div>
    );
  }