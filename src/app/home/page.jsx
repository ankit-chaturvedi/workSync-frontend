"use client"

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

function Home() {

    const [loading, setLoading] = useState(true)
    const router = useRouter();


    useEffect(() => {
        const checkAuth = async () => {
          const token = localStorage.getItem("worksync_token");
    
          if (!token) {
            router.replace("/"); 
            return;
          }
    
          try {
            const response = await fetch("http://127.0.0.1:9898/logincheck", {
              method: "GET",
              headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            });
    
            if (!response.ok) {
              localStorage.removeItem("worksync_token")
              router.push("/")
            } else {
              setLoading(false); 
            }
          } catch (error) {
            console.error("Error validating token:", error);
            localStorage.removeItem("worksync_token");
            router.push("/")
          }
        };
    
        checkAuth();
      }, [router]);

      if (loading) return null;

    

    return(
        <>
        <div className="home min-h-screen w-full bg-gray-700">
            <h1>THIS IS HOME</h1>
        </div>

        </>
    )
    
}


export default Home