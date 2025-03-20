"use client"

import Image from "next/image"
import Link from "next/link"
import { House, Settings, TimerReset, TentTree, LayoutDashboard, BookOpenCheck, LogOut} from "lucide-react"
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

function Sidebar(){

    const [loading, setLoading] = useState(true)
    const router = useRouter();
    const pathname = usePathname();
    



    // useEffect(() => {
    //         const checkAuth = async () => {
    //           const token = localStorage.getItem("worksync_token");
        
    //           if (!token) {
    //             router.replace("/"); 
    //             return;
    //           }
        
    //           try {
    //             const response = await fetch("http://127.0.0.1:9898/logincheck", {
    //               method: "GET",
    //               headers: {
    //                 "Authorization": `Bearer ${token}`,
    //                 "Content-Type": "application/json",
    //               },
    //             });
        
    //             if (!response.ok) {
    //               localStorage.removeItem("worksync_token")
    //               router.push("/")
    //             } else {
    //               setLoading(false); 
    //             }
    //           } catch (error) {
    //             console.error("Error validating token:", error);
    //             localStorage.removeItem("worksync_token");
    //             router.push("/")
    //           }
    //         };
        
    //         checkAuth();
    //       }, [router]);
    
    //       if (loading) return null;

          const navItems = [
            { name: "Home", href: "/home", icon: <House /> },
            { name: "Timesheet", href: "/home/timesheet", icon: <TimerReset /> },
            { name: "Leaves", href: "/home/leave", icon: <TentTree /> },
            { name: "Dashboard", href: "/home/dashboard", icon: <LayoutDashboard /> },
            { name: "Approvals", href: "/home/approvals", icon: <BookOpenCheck /> },
            { name: "Settings", href: "/home/settings", icon: <Settings /> },
          ];




    return(
        <>
            <div className="nav-container  md:w-38 lg:w-48 h-screen fixed bg-slate-900 text-slate-200 hidden md:flex flex-col shadow-lg gap-8 md:gap-10 lg:gap-12 justify-center items-center ">
                <div className="logo">
                    <Image src={"/workSynclogo.PNG"} width={240} height={240} className="w-full h-auto" alt="logo"/>
                </div>

                <div className="org w-full flex flex-col items-center justify-center bg-slate-800 text-slate-200 text-sm">
                    <h3>Organisation:</h3>
                    <h4>Ramp Infotech</h4>
                    
                </div>
               
                <div className="navigation w-full  ">
                    <ul className="flex flex-col items-center justify-center gap-4 w-full px-4">
                      {navItems.map((item) => (
                            <Link key={item.href} href={item.href} className="w-full">
                              <button
                                className={`btn btn-ghost w-full flex justify-start items-center gap-2 transition ${
                                  pathname === item.href ? "bg-blue-900 text-white" : "hover:bg-slate-200 hover:text-slate-900"
                                }`}
                              >
                                {item.icon} <h2>{item.name}</h2>
                              </button>
                            </Link>
                      ))}
                                    
                    </ul>
                </div>

                <div className="user_details flex flex-col items-center justify-center gap-4">
                <div className="avatar">
                    <div className="w-12 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                    
                </div>
                <div className="user_content flex flex-col items-center justify-center">
                <h3 className="text-sm">Ankit Chaturvedi</h3>
                <h3 className="text-xs">ankit0201@gmail.com</h3>
                </div>
                <Link href={"/home"} className="w-full"><button className=" btn btn-md bg-indigo-900 hover:bg-slate-200 hover:text-slate-900 w-full flex justify-start items-center gap-2 "><LogOut /> <h2>Logout</h2></button></Link>

                </div>

                
                
                
            </div>
        </>
    )
}

export default Sidebar