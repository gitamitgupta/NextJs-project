"use client";
import React  from "react";
import Link from "next/link";
import CourseData from "../data/music_coures.json"
import { p } from "motion/react-client";
import { BackgroundGradient } from "./ui/background-gradient";
interface Course{
    
      id:number ,
      title:string ,
      slug: string,
      description:string ,
      price: number,
      instructor: string,
      isFeatured:boolean,
      image:string
   
}
function FeaturedCourse(){
const FeaturedCoure=  CourseData.courses.filter((data:Course)=>(data.isFeatured))
    return(
        <div className=" py-12 bg-gray-900">
            <div className="text-center"> 
                <h2 className=" text-base text-teal-600 font-semibold 
                tracking-wide uppercase"> FEATURED COURSES </h2>
                <p className="mt-2 text-3xl leading-8 font-semibold 
                tracking-tight text-white sm:text-4xl"> Learn with the best </p>
                </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center pt-10">

{  FeaturedCoure.map((data:Course)=>(
                   <div key={data.id} className="flex justify-center">
                     <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <img
          src={data.image}
          alt="jordans"
          height="400"
          width="400"
            className="w-full h-64 object-contain bg-black rounded-t-lg"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
         {data.title}
        </p>
 
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
         {data.description}
        </p>
      <Link href={"/course"}>
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>Buy now </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            ₹ {data.price}
          </span>
        </button> </Link>
      </BackgroundGradient>
                   </div>
                ))
              }
            </div>
            <div className="mt-20 text-center">
                <Link href={"/Courses"} className=" px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">
                View All Courses</Link>
            </div>
        </div>
    )
}

export default FeaturedCourse