import {React,useState} from 'react'
import thali from "../assets/thali.avif";
import menuData from './../components/menuData';


export const Menu = () => {

  const [activeCategory,setActiveCategory] = useState("Starters")



  const category=[
    "All",
    "Starters",
    "Main Couser",
    "Thail",
    "Deserts",
    "Beverages",
    "Drinks"
  ]


  const filteredMenu = activeCategory === "All" ? menuData : menuData.filter(item => item.category === activeCategory);


  return (
    <div className='w-full min-h-screen bg-[#F8EBD2]'>

        <section>
            <div className='text-center '>
                <h2 className='text-3xl md:text-4xl pt-13 py-5'>Menu</h2>
            </div>
        </section>


        <section className='w-full py-16 px-4 sm:px-8 lg:px-16 '>
          <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 px-2 gap-4'>


            {category.map((cat) => (

            <div
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`menu-category cursor-pointer rounded-xl
                transition-all duration-300 border
                ${
                  activeCategory === cat
                    ? 'bg-[#30051F] text-white border-[#30051F] shadow-lg'
                    : 'bg-white text-[#30051F] border-[#30051F]/20 hover:bg-[#30051F] hover:text-white'
                }`}
            >
              <h2 className='text-center py-3 font-semibold'>
                {cat}
              </h2>
            </div>

          ))}




          </div>
         
        </section>




        <section>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-10">
          
                      {filteredMenu.map((item) => (
          
                        <div
                          key={item}
                          className="bg-white rounded-2xl overflow-hidden
                          shadow-md hover:shadow-2xl hover:-translate-y-2
                          transition-all duration-300 group w-90 h-[40vh] "
                        >
          
                          <div className="overflow-hidden">
          
                            <img
                              src={item.img}
                              alt={item.name}
                              className="w-full h-56 object-cover
                              group-hover:scale-110 transition-transform duration-500"
                            />
          
                          </div>
          
                          <div className="p-5 text-center">
          
                            <h2 className="text-lg font-bold text-[#30051F]">
                              {item.name}
                            </h2>
          
                            <p className="text-[#B77900] font-bold text-xl mt-3">
                              Rs. {item.price}
                            </p>
          
                            {/* <button
                              className="mt-4 px-6 py-2 bg-[#30051F]
                              text-white rounded-full hover:bg-[#50052f]
                              transition duration-300"
                            >
                              Order Now
                            </button> */}
          
                          </div>
          
                        </div>
          
                      ))}
          
                    </div>
        </section>

    </div>
  )
}

31