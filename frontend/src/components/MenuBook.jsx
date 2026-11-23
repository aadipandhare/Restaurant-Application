import React,{useRef, forwardRef,useState} from "react";
import HTMLFlipBook from "react-pageflip"
import{
    ArrowRight,
    ArrowLeft,
    BookOpen,
    ChevronRight
} from 'lucide-react'

import "./menu-book.css";



const menuPages = [
  {
    id: 1,
    title: "Famous Meals",
    subtitle: "Served with chutney / salad",
    kicker: "SHIVAJIMAYA · EST. 2012",
    note: "A little taste of home, prepared fresh.",

    dishes: [
      {
        name: "Maharashtrian Thali",
        description: "A traditional spread with bhaji,amti,rice and chapati",
        price: 299,
        image: "",
      },
      {
        name: "Pithla Bhakri",
        description: "Rustic gram flour curry served with fresh bhakri.",
        price: 180,
        image:
          "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=700&q=85",
      },
      {
        name: "Zunka Bhakri",
        description: "A homestyle Maharashtrian favourite.",
        price: 160,
        image:
          "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=700&q=85",
      },
    ],
  },



  {
    id:2,
    title: "Starters & Snacks",
    subtitle: "A delicious beginning",
    kicker: "FROM OUR KITCHEN",
    note: "Small plates, big flavours.",

    dishes:[
        {
            name: "Misal Pav",
        description:
          "Sprouted matki curry topped with farsan and onion.",
        price: 110,
        image:
          "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=700&q=85"
        },

          {
        name: "Kanda Bhaji",
        description:
          "Crispy onion fritters served with green chutney.",
        price: 80,
        image:
          "https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?w=700&q=85"
      },
      {
        name: "Batata Vada",
        description:
          "Golden potato fritters with traditional spices.",
        price: 70,
        image:
          "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=700&q=85"
      }
    ]

  },


   {
    id: 3,
    title: "Main Course",
    subtitle: "Rich, hearty & full of flavour",
    kicker: "THE MAIN EVENT",
    note: "Traditional recipes made for sharing.",
    dishes: [
      {
        name: "Paneer Tikka Masala",
        description:
          "Chargrilled paneer in creamy tomato gravy.",
        price: 249,
        image:
          "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=700&q=85"
      },
      {
        name: "Kolhapuri Chicken",
        description:
          "Bold regional curry with roasted Kolhapuri masala.",
        price: 290,
        image:
          "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=700&q=85"
      },
      {
        name: "Dal Tadka",
        description:
          "Yellow lentils tempered with garlic and cumin.",
        price: 179,
        image:
          "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=700&q=85"
      }
    ]
  },

  {
    id: 4,
    title: "Rice & Biryani",
    subtitle: "Fragrant favourites",
    kicker: "AROMATIC & SLOW COOKED",
    note: "Every grain carries the aroma of spices.",
    dishes: [
      {
        name: "Chicken Biryani",
        description:
          "Aromatic basmati rice layered with spiced chicken.",
        price: 329,
        image:
          "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=700&q=85"
      },
      {
        name: "Veg Biryani",
        description:
          "Basmati rice cooked with vegetables and spices.",
        price: 229,
        image:
          "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=700&q=85"
      },
      {
        name: "Jeera Rice",
        description:
          "Fluffy steamed rice with cumin and ghee.",
        price: 119,
        image:
          "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=700&q=85"
      }
    ]
  },

  {
    id: 5,
    title: "Desserts",
    subtitle: "Sweet endings",
    kicker: "A LITTLE SOMETHING SWEET",
    note: "A meal is never complete without dessert.",
    dishes: [
      {
        name: "Puran Poli",
        description:
          "Sweet flatbread filled with chana dal and jaggery.",
        price: 90,
        image:
          "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?w=700&q=85"
      },
      {
        name: "Gulab Jamun",
        description:
          "Soft milk dumplings in sugar syrup.",
        price: 80,
        image:
          "https://images.unsplash.com/photo-1666190092159-4b3c8b0c6a6f?w=700&q=85"
      },
      {
        name: "Shrikhand",
        description:
          "Creamy strained yoghurt with cardamom.",
        price: 100,
        image:
          "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=700&q=85"
      }
    ]
  },

    {
    id: 6,
    title: "Beverages",
    subtitle: "Sip, relax & enjoy",
    kicker: "THE PERFECT FINISH",
    note: "Refreshing classics to complement every meal.",
    dishes: [
      {
        name: "Solkadhi",
        description:
          "Cooling kokum and coconut milk drink.",
        price: 50,
        image:
          "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=700&q=85"
      },
      {
        name: "Masala Chaas",
        description:
          "Chilled buttermilk with cumin and herbs.",
        price: 45,
        image:
          "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=700&q=85"
      },
      {
        name: "Mango Lassi",
        description:
          "A thick and creamy mango yoghurt drink.",
        price: 99,
        image:
          "https://images.unsplash.com/photo-1570696516188-ade861b84a49?w=700&q=85"
      }
    ]
  }
];



// book page

const FlipPage = forwardRef(
    
    function FlipPage({page,pageNumber,turnNext}, ref){
        
        return (

            <div ref={ref} className='menu-paper'>

              <div  className='paper-topline'>
                 <span>✦ SHIVAJIMAYA ✦</span>
                 <span>स्वाद परंपरेचा</span>
              </div>


              <div className='paper-heading'>
                
                <span className='page-kicker'>
                  {page.kicker}
                </span>

                <h2>{page.title}</h2>
                
                <p>{page.subtitle}</p>

                <div className='paper-rule'>
                  ❧
                </div>

              </div>










            </div>
        )
    }
)




export default function MenuBook(){
    
    const bookRef = useRef(null)
    const [page,setPage] = useState(0)

    const [orientation,setOriention] = useState("landscape")

    
    //turn next page
    const next = ()=>{
      bookRef.current?.pageFlip()?.flipNext();
    }

    const prev = ()=>{
      bookRef.current?.pageFlip()?.flipPrev();
    }

    const jump = (index) =>{
      bookRef.current?.pageFlip()?.flip(index);
    }

    const spread = Math.floor(page / 2 ) + 1;

    return(

      <main className='menu-book-page'>
        <div className='menu-book-backdrop'/>

         <div className='menu-book-intro'>
            <span className='menu-book-eyebrow'>
              ✦ A TASTE OF TRADITION ✦
            </span>

            <h1>
              OUR <em>Menu</em>
            </h1>

            <p> Turn the pages and discover something delicious.</p>
          </div>



          {/* Book */}
          <div className={`menu-book-stage ${orientation}`}>
            
            <div className='book-shadow'/>

              <HTMLFlipBook
                ref={bookRef}
                width={470}
                height={620}

                size="stretch"

                minWidth={290}
                maxWidth={470}

                minHeight={390}
                maxHeight={620}

                maxShadowOpacity={0.48}
                showCover={false}
                drawShadow={true}
                flippingTime={1050}
                usePortrait={true}
                startPage={0}
                autosize={true}
                showPageCorners={true}
                mobileScrollSupport={true}

                onFlip={(event)=>{
                  setPage(event.data)
                }}

                onChangeOrientation={(event)=>{
                  setOriention(event.data)
                }}

                className='flipBook'  
               >

                  {menuPages.map((menu,index)=>{
                    return(
                    <FlipPage
                    key={menu.id}
                    page={menu}
                    pageNumber={index + 1}
                    turnNext={next}
                  />

                    )
                })}
                 
              </HTMLFlipBook>
              
            



            {/* Navigation */}
            <div className='book-controls'>

              <button
                className='book-control'
                onClick={prev}
                disabled={page === 0}
                
                >
                <ArrowLeft size={17}/>
                Previous
              </button>
              

              <div className='book-page-status'>
                <BookOpen size={16}/>
                
                <span>
                  Spread {spread} of 3
                </span>

                <div className='spread-dots'>
                  {[0,1,2].map((number) => (
                    <button
                      key={number}
                      onClick={() => jump(number * 2)}
                      className={
                        Math.floor(page / 2) === number ? "selected" : ""
                      }
                      arial-label={`Go to spread ${number + 1}`}
                    />
                  ))}


                </div>
              </div>


              <button
                className='book-control primary'
                onClick={next}
                disabled={page >= menuPages.length -2}
              >
                Next
                <ArrowRight size={17}/>
              </button>

            </div>



          
          
          
          </div>
      </main>
    )

}