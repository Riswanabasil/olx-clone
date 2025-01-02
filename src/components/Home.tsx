import { useProductContext } from '../context/ProductContext';
import { Link } from "react-router-dom"

// type productProp={
//     products:any
//     search:any
//     menu:any
// }
const Home = () => {
  const { products, search, menu } = useProductContext();
  return (
    
    <div className="grid grid-cols-4 p-5">
      {products?.filter((data)=>data?.title?.includes(search?search: menu)).map((data:any)=>{
        return <Link to='/details' state={{data:data}}> <div className="border border-spacing-1 p-2 ml-3 mt-3">
            <img className="w-60 h-48" src={data?.image}/>
            <h1 className="font-bold text-xl">${data?.price}</h1>
            <h1>{data?.title}</h1>
            <h1>{data?.category}</h1>
        </div>  </Link>
      })}
    </div>
   
  )
}

export default Home
