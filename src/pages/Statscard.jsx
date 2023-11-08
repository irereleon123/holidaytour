import React from 'react'

const Statscard=({title,amount})=> {
  return (
    <>
<section className="bg-white py-8 px-9 flex flex-wrap justify-around">
  <div class="max-w-sm p-8 rounded-lg border border-black border-solid md:flex items-center">
    <img
      class="flex-shrink-0"
      src="https://th.bing.com/th/id/OIP.ZpwmxdxIuENh8NWlQY68jwHaF7?w=190&h=180&c=7&r=0&o=5&pid=1.7"
      alt="Tours"
      width={40}
    />
    <p class="text-black text-xl font-bold ml-6">{title}</p>
    <p class="text-gray-500 text-xl font-bold">{amount}</p>
  </div>
</section>

    </>

  )
}

export default Statscard