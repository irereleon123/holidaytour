import React from 'react'

const Statscard=({title,amount})=> {
  return (
    <>
 <section className="bg-white py-8 px-6 flex flex-wrap justify-around">
          <div className="w-full md:w-1/3 lg:w-1/4 p-8 rounded-lg border border-black border-solid md:flex items-center">
            <img
              src="https://th.bing.com/th/id/OIP.ZpwmxdxIuENh8NWlQY68jwHaF7?w=190&h=180&c=7&r=0&o=5&pid=1.7"
              alt="Tours"
              width={40}
            />
            <p className="text-black text-xl font-bold"></p>
            <p className="text-black text-xl font-bold">{title}</p>
            <p className="text-black text-xl font-bold">{amount}</p>
          </div>

        </section>
    </>

  )
}

export default Statscard