"use client"

import { useState, useEffect, useRef } from "react";

import { useRouter } from "next/navigation";
import Link from "next/link";




export default function Login() {

  const vantaRef = useRef(null);
  const vantaInstance = useRef(null);
  const [loading, setLoading] = useState(false)
 

  useEffect(() => {
    const loadVanta = async () => {
      const THREE = await import("three");
      const FOG = (await import("vanta/dist/vanta..min.js")).default;

      if (FOG) {
        vantaInstance.current = FOG({
          el: "#vanta",
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          highlightColor: 0x449cb6,
          midtoneColor: 0xc4a3e,
          lowlightColor: 0x2bf2ab,
          baseColor: 0xb0339,
          blurFactor: 0.7,
          speed: 1.2,
          zoom: 1,
        });
      }
    };

    loadVanta();

    return () => {
      if (vantaInstance.current) {
        vantaInstance.current.destroy();
        vantaInstance.current = null;
      }
    };
  }, []);

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [displayError, setDisplayError] = useState("")
  const router = useRouter()

 

  

  const userLogIn = async (e) => {
    e.preventDefault()
    setLoading(true)

    const token = localStorage.getItem("worksync_token");

    try {
      const response = await fetch("http://127.0.0.1:9898/login", {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email:email, password:password }),
      });

      const data = await response.json()
      
      console.log(data);
      
      if(!response.ok){
        setLoading(false)
        throw new Error(data.detail[0].msg || "Invalid credentials")
      }

      localStorage.setItem("worksync_token", data.access_token);
      
      localStorage.setItem("worksync_token", data.access_token);

    setTimeout(() => {
      console.log("timed out");
      <span className="loading loading-infinity loading-xl"></span>
      
      router.push("/home");
    
    }, 1000);
            
    } catch (error) {
      setLoading(false)
      
      const errorString = String(error)
      console.log(errorString);
      setDisplayError(errorString)
      setEmail("")
      setPassword("")
    
      
    }
  }

  return (
    <div className="login bg-slate-900 min-h-screen w-full flex items-center justify-center" id="vanta">
    
      <form onSubmit={userLogIn} className="bg-slate-800 flex items-center justify-center flex-col gap-10 w-full md:w-4/6 lg:w-2/6  p-10 rounded-2xl">

        <div className="heading w-full flex flex-col items-center justify-center gap-4 ">
          <h2 className="text-3xl">Welcome Back!</h2>
          <h3>enter your credentials to login.</h3>
        </div>

        <div className="content w-full flex items-center justify-center flex-col gap-6">
        
          <input type="text" placeholder="Email:" className="input input-lg focus:outline-0 w-5/6" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password:" className="input input-lg focus:outline-0 w-5/6"  value={password} onChange={(e) => setPassword(e.target.value)} />
          {displayError && <h3 className="w-5/6 text-red-300">{displayError}</h3>}
        </div>

        <div className="button  w-full flex items-center justify-center flex-col gap-6">
        <button className="w-3/4 btn rounded-full py-6 bg-emerald-800 hover:bg-slate-200 hover:text-slate-900">
            {loading ? <span className="loading loading-infinity loading-xl"></span> : "Login"}
          </button>

        </div>

        <div className="signup w-full flex items-center justify-center flex-col gap-6">
          <h4>Are you a new user?</h4>
          <Link href= "/signup" className="flex items-center justify-center w-full">
            <button  className="w-3/4 btn rounded-md py-6 bg-blue-900   hover:bg-slate-200 hover:text-slate-900 ">Signup</button>
          </Link>

        </div>
      </form>
      

      <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/vanta/dist/vanta.waves.min.js"></script>
    </div>
  );
}
