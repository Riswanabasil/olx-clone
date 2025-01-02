import { useProductContext } from '../context/ProductContext';
// type menuProp={
//   setMenu:any
// }
const Menubar = () => {
  const { setMenu } = useProductContext();
  return (
    <div className="flex shadow-md">
      <h1 onClick={()=>setMenu("Shirt")} className="ml-48 cursor-pointer">Shirt</h1>
      <h1 onClick={()=>setMenu("Jacket")} className="ml-5 cursor-pointer">Jacket</h1>
      <h1 onClick={()=>setMenu("Mobile phones")} className="ml-5 cursor-pointer">Mobile phones</h1>
      <h1 onClick={()=>setMenu("House")} className="ml-5 cursor-pointer">House</h1>
      <h1 onClick={()=>setMenu("Scooters")} className="ml-5 cursor-pointer">Scooters</h1>
      <h1  onClick={()=>setMenu("Bike")}className="ml-5 cursor-pointer" >Bike</h1>
      <h1  onClick={()=>setMenu("Apartment")}className="ml-5 cursor-pointer">Apartment</h1>
    </div>
  )
}

export default Menubar
