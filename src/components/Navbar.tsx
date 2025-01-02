import olx from "../assets/olx.png"
import lens from "../assets/lens.png"
import arrow from '../assets/arrow.png'
import search from '../assets/search.png'
import Login from "./Login"
import { useState, useEffect } from "react"
import { useProductContext } from '../context/ProductContext';
import { auth } from '../firebase/setup';
import { onAuthStateChanged, signOut, User } from "firebase/auth"
// type searchProp={
//   setSearch:any
// }
const Navbar = () => {
  const [loginPop, setLoginPop] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const { setSearch } = useProductContext();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser); 
    });
    return () => unsubscribe(); 
}, []);

  const logout = async () => {
    try {
        await signOut(auth);
        alert("Logged out successfully");
    } catch (error) {
        console.error("Error logging out:", error);
    }
};
  return (
    <>
 <div className="flex p-4 bg-slate-100 shadow-md">
        <img src={olx} className="w-11 h-9"/>
      <div className="flex border border-spacing-1 w-64 p-2 border-black ml-3 bg-white">
        <img src={lens} className="w-6 h-5 mt-1"/>
        <input placeholder="location" className="ml-3 outline-none"/>
        <img src={arrow} className="w-8 h-7"/>
      </div>
      <div className="flex h-12 ml-4 border-2 bg-white">
        <input onChange={(e)=>setSearch(e.target.value)} placeholder="Find Cars, Mobile phones and more" className="ml-3 w-96 utline-none" />
        <img src={search}/>
      </div>
      <div className="flex h-12 p-3 ml-10 cursor-pointer">
        <h1 className="font-semibold">English</h1>
        <img src={arrow} className="w-8 h-7"/>
      </div>
      {/* <div onClick={()=>setLoginPop(!loginPop)} className="flex h-12 p-3 ml-6 cursor-pointer underline hover:no-underline">
        <h1 className="font-bold text-lg" >Login</h1>
      </div> */}

<div className="flex h-12 p-3 ml-6 cursor-pointer underline hover:no-underline">
                    {!user ? (
                        <h1 className="font-bold text-lg" onClick={() => setLoginPop(!loginPop)}>Login</h1>
                    ) : (
                      
                        <div>
                          <h1 className="font-bold text-lg" onClick={logout}>Logout</h1>
                        </div>
                    )}
                </div>
      <div className="w-28 flex h-12 p-2 ml-6 cursor-pointer rounded-full border border-yellow-500">
        <h1 className="font-bold text-lg ml-3">+ SELL</h1>
      </div>
    </div>
    {loginPop&&<Login setLoginPop={setLoginPop}/>}
    </>
  )
}

export default Navbar
