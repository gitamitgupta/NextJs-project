"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import coursesdata from "../../data/music_coures.json";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
}

export default function ThreeDCardDemo() {
  const filteredCourses = coursesdata.courses.filter(
    (course: Course) => course.isFeatured
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredCourses.map((course: Course) => (
          <CardContainer key={course.id} className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border h-full flex flex-col justify-between">
              
              {/* Title */}
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {course.title}
              </CardItem>

              {/* Description */}
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm mt-2 dark:text-neutral-300"
              >
                {course.description}
              </CardItem>

              {/* Image */}
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src={course.image}
                  alt={course.title}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                />
              </CardItem>

              {/* Footer buttons */}
              <div className="flex justify-between items-center mt-6">
                <CardItem
                  translateZ={20}
                  as="a"
                  href={`/courses/${course.slug}`}
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  View Details →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Buy Now – ${course.price}
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}
