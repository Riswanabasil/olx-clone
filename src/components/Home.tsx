import { Link } from "react-router-dom"

type productProp={
    products:any
    search:any
    menu:any
}
const Home = (props:productProp) => {

  return (
    
    <div className="grid grid-cols-4 p-5">
      {props?.products?.filter((data:any)=>data?.title?.includes(props?.search? props?.search: props?.menu)).map((data:any)=>{
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
