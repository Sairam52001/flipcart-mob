
import Mobile from  "./components/Mobile.jsx"
import './App.css'
function App() {
  const mob=[
    {
      src:'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/v/0/e/-original-imahagbrshzhznjc.jpeg?q=70&crop=false',
      name:'SAMSUNG Galaxy F06 5G (128 GB)  (4 GB RAM)',
      price:'14,999',
      discount:'₹18,99923% ',
      f1:'8 GB RAM | 128 GB ROM',
      f2:'17.2 cm (6.77 inch) Full HD+ Display',
      f3:'50MP (Main) + 50MP (3X Periscope)+ 8MP| 50MP Front Camera',
      f4:'5000 mAh Battery',
      f5:'7s Gen3 Processor'
    },
    { 
      src:'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/6/1/v/-original-imah5f2tqawgznhv.jpeg?q=70&crop=false',
      name:'MOTOROLA g05 (Plum Red, 64 GB)  (4 GB RAM)',
      price:'18,999',
      discount:'₹20,923% ',
      f1 :'6 GB RAM | 128 GB ROM | Expandable Upto 2 TB',
      f2:'16.94 cm (6.67 inch) Full HD+ Display',
      f3:'50MP + 2MP | 16MP Front Camera', 
      f4:'6000 mAh Battery',
      f5:'6 Gen 4 Processor',
    },
    {
      src:'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/e/6/4/g35-5g-pb3h0002in-motorola-original-imah7c6wzezymef7.jpeg?q=70',
      name:'POCO C61 (Ethereal Blue, 64 GB)  (4 GB RAM)',
      price:'22,499',
      discount:'₹23,999% ',
      f1:'4 GB RAM | 64 GB ROM | Expandable Upto 1 TB',
      f2:'17.04 cm (6.71 inch) HD+ Display',
      f3:'8MP Rear Camera | 5MP Front Camera',
      f4:'5000 mAh Battery',
      f5:'Helio G36 Processor',
    },
    {
      src:'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/8/w/5/-original-imah4jyfwr3bfjbg.jpeg?q=70',
      name:'Apple iPhone 16 (Black, 128 GB)',
       price:'69,999',
       discount:'₹79,900% ',
       f1:'28 GB ROM',
       f2:' 15.49 cm (6.1 inch) Super Retina XDR Display',
      f3:'48MP + 12MP | 12MP Front Camera',
      f4:'5000 mAh Battery',
      f5:' A18 Chip, 6 Core Processor Processor',
    }
  ]
  return (
    <>
       <h1 className="heading">FlipCard Component</h1>
       <div className="main">
       <Mobile
        src ={mob[0].src}
        name ={mob[0].name}
        price={mob[0].price}
        discount={mob[0].discount}
        f1={mob[0].f1}
        f2={mob[0].f2}
        f3={mob[0].f3}
        f4={mob[0].f4}
        f5={mob[0].f5}/>
       
       <Mobile
        src={mob[1].src} 
        name={mob[1].name}
        price={mob[1].price}
        discount={mob[1].discount}
        f1={mob[1].f1}
        f2={mob[1].f2}
        f3={mob[1].f3}
        f4={mob[1].f4}
        f5={mob[1].f5}/>
    
       <Mobile
       src={mob[2].src} 
        name={mob[2].name}
        price={mob[2].price}
        discount={mob[2].discount}
        f1={mob[2].f1}
        f2={mob[2].f2}
        f3={mob[2].f3}
        f4={mob[2].f4}
        f5={mob[2].f5}/>

       <Mobile
       src={mob[3].src} 
        name={mob[3].name}
        price={mob[3].price}
        discount={mob[3].discount}
        f1={mob[3].f1}
        f2={mob[3].f2}
        f3={mob[3].f3}
        f4={mob[3].f4}
        f5={mob[3].f5}/>
       
      
      </div>
       
    </>
  )
}

export default App
