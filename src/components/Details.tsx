import { useLocation } from "react-router-dom"

const Details = () => {

    const location= useLocation()

    console.log(location);
    
  return (
    <div className="flex flex-col md:flex-row p-6 items-center bg-gray-100 rounded-lg shadow-md max-w-5xl mx-auto" >
     <div className="w-full md:w-1/2">
     
     <img className="" src={location?.state?.data?.image}/>
     </div>
     {/* <div>
        <h1 className="font-bold text-3xl">$ {location?.state?.data?.price}</h1>
        <h1 className="mt-5"><span className="font-semibold">Category</span>:{location?.state?.data?.category}</h1>
        <h1 className="mt-5"><span className="font-semibold">Title</span>: {location?.state?.data?.title}</h1>
        <h1 className="mt-5"><span className="font-semibold">Description</span>:{location?.state?.data?.description}</h1>
     </div> */}

<div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-6">
        <h1 className="font-bold text-4xl text-gray-800 mb-4">
          ${location?.state?.data?.price}
        </h1>

        <p className="text-gray-600 text-lg mb-2">
          <span className="font-semibold text-gray-700">Category:</span>{" "}
          {location?.state?.data?.category}
        </p>

        <p className="text-gray-600 text-lg mb-2">
          <span className="font-semibold text-gray-700">Title:</span>{" "}
          {location?.state?.data?.title}
        </p>

        <p className="text-gray-600 text-lg mb-4 leading-relaxed">
          <span className="font-semibold text-gray-700">Description:</span>{" "}
          {location?.state?.data?.description}
        </p>
       
      </div>
    </div>
  )
}

export default Details
