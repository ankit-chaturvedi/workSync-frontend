"use client"

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Table from "@/components/Table"
import { Pencil, Plus, SendHorizonal, CircleX} from 'lucide-react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'




function Timesheet() {


    const [loading, setLoading] = useState(true)
    const router = useRouter();
    const [isActive, setIsActive] = useState(true)
    
    
    
        // useEffect(() => {
        //     const checkAuth = async () => {
        //       const token = localStorage.getItem("worksync_token");
        
        //       if (!token) {
        //         router.replace("/"); 
        //         return;
        //       }
        
        //       try {
        //         const response = await fetch("http://127.0.0.1:9898/logincheck", {
        //           method: "GET",
        //           headers: {
        //             "Authorization": `Bearer ${token}`,
        //             "Content-Type": "application/json",
        //           },
        //         });
        
        //         if (!response.ok) {
        //           localStorage.removeItem("worksync_token")
        //           router.push("/")
        //         } else {
        //           setLoading(false); 
        //         }
        //       } catch (error) {
        //         console.error("Error validating token:", error);
        //         localStorage.removeItem("worksync_token");
        //         router.push("/")
        //       }
        //     };
        
        //     checkAuth();
        //   }, [router]);
    
        //   if (loading) {
        //     return (
        //         <div className="flex items-center justify-center min-h-screen bg-gray-900">
        //             <span className="loading loading-infinity w-48 text-white"></span>
        //         </div>
        //     );
        //   }

        function toggleVisibility(){
            setIsActive(!isActive)
            console.log((isActive));
            
            
        }

       



    return(
        <>
        <div className="timesheet w-full bg-slate-700 min-h-screen flex flex-col   gap-4 p-4 ">
            <div className={`new_work w-full bg-slate-900 px-4 rounded-lg text-slate-200 flex flex-col items-start justify-start ${isActive ? "hidden": ""}`}>
                <form action="" className="w-full h-full  flex flex-col justify-center pt-4 px-4 gap-2 ">
                    <div className="work_heading flex items-center justify-between">
                    <h3 className="text-lg">Enter work details</h3>
                    <CircleX className="text-red-200 hover:text-slate-200 cursor-pointer" onClick={() => toggleVisibility()}/>

                    </div>

                <div className="entity&activity&worktime flex items-center justify-evenly gap-1 flex-wrap">
                    <select defaultValue="Pick an activity" className="select focus:outline-0 ">
                        <option disabled={true}>Pick an activity</option>
                        <option>Crimson</option>
                        <option>Amber</option>
                        <option>Velvet</option>
                    </select>

 

                    <select defaultValue="Select amount of work in hours" className="select focus:outline-0 bg-slate-300 text-black">
                        <option disabled={true}>Select amount of work in hours</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                    </select>


                    <select defaultValue="Pick an entity" className="select focus:outline-0 ">
                        <option disabled={true}>Pick an entity</option>
                        <option>Crimson</option>
                        <option>Amber</option>
                        <option>Velvet</option>
                    </select>

                    <select defaultValue="Pick a project" className="select focus:outline-0 ">
                        <option disabled={true}>Pick a project</option>
                        <option>Crimson</option>
                        <option>Amber</option>
                        <option>Velvet</option>
                    </select>

                    
                </div>

                <div className="text-area w-full flex items-center h-24 justify-evenly gap-4 flex-wrap">
                <textarea className="textarea flex-grow focus:outline-0 h-full text-lg" placeholder="Enter some details about your work"></textarea>
                </div>

                <div className="button flex justify-center items-center gap-8 p-2 flex-wrap">
                    <button className="btn px-8 bg-pink-900 hover:bg-slate-200 hover:text-slate-900 rounded-md"><Pencil/>Edit</button>
                    <button className="btn px-8 bg-blue-900 hover:bg-slate-200 hover:text-slate-900"><Plus/>Add</button>
                </div>

            
                </form>
            </div>
            <button className={` ${isActive ? "btn w-32" : "btn w-32 hidden"} `} onClick={() => toggleVisibility()}>New Work</button>
            <div className="work_stats w-full bg-slate-900 p-2 flex flex-col  flex-grow items-center justify-center  rounded-lg gap-6  ">
                <Table/>
                <div className="table_submit flex items-center justify-center">
                  <button className='btn bg-emerald-800 hover:bg-slate-200 hover:text-slate-900'><SendHorizonal/> Submit</button>

                </div>
            </div>

            
        </div>
        </>
    )
    
}
export default Timesheet