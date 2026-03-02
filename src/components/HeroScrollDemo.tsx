"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden pb-[100px] pt-[100px]">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-electric">
                Premium Detailing
              </span>
            </h1>
          </>
        }
      >
        <img
          src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=2000"
          alt="hero"
          className="mx-auto rounded-2xl object-cover h-full w-full object-center"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
