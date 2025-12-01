// components/CharitySection.jsx
"use client";
import Image from "next/image";
import React from "react";

export default function CharitySection({
  bg = "/back2.jpg",
  title = "Our Charitable Initiatives\nHealth Care Desk Gives Back",
  subtitle = "At Health Care Desk, a portion of our profits are committed to supporting charities and global health research initiatives.",
  logos = [
    "/prostate.png",
    "/american.png",
    "/uspain.png",
    "/diabetes.png",
    "/heart.png",
  ],
}) {
  return (
    <section
      className="relative w-full flex items-center justify-center"
      style={{
        height: "516px",
      }}
    >
      {/* FULL-WIDTH background */}
      <Image
        src={bg}
        alt="Charity background"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Blue tint overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "rgba(25,110,200,0.72)",
        }}
      />

      {/* Content centered inside */}
      <div className="relative z-10 w-full max-w-[1300px] mx-auto px-6 text-center text-white">
        <h2
          className="font-bold whitespace-pre-line"
          style={{ fontSize: "43.19px", lineHeight: 1.15 }}
        >
          {title}
        </h2>

        <p
          className="mt-3 font-normal mx-auto"
          style={{
            fontSize: "21.59px",
            maxWidth: "900px",
            opacity: 0.95,
          }}
        >
          {subtitle}
        </p>

        {/* Logos row */}
        <div className="mt-10 w-full flex justify-center">
  <ul
    className="w-full max-w-[1300px] flex justify-between items-center px-10"
    style={{
      listStyle: "none",
      padding: 0,
      margin: 0,
    }}
  >
    {logos.map((src, i) => (
      <li key={i} className="flex items-center justify-center">
        <Image
          src={src}
          alt={`partner logo ${i + 1}`}
          width={215.93}
          height={87.57}
          className="object-contain"
        />
      </li>
    ))}
  </ul>
</div>

      </div>
    </section>
  );
}
