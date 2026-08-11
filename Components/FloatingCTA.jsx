"use client";

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingCTA = () => {
  const whatsappNumber = "917024913839";
  const defaultMessage = encodeURIComponent("Hello Aashirwad, I would like to inquire about BroCode Technologies services!");

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col gap-2.5 sm:gap-3.5 items-end select-none">
      {/* WhatsApp Floating CTA */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${defaultMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Aashirwad Singh on WhatsApp"
        className="group relative flex items-center bg-[#25D366] text-white p-3.5 md:p-4 rounded-full shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/50 hover:scale-105 transition-all duration-300 active:scale-95"
      >

        {/* Hover Label Pill showing recipient name */}
        <div className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out flex flex-col pr-0 group-hover:pr-3 pl-0 opacity-0 group-hover:opacity-100 font-sans text-right">
          <span className="text-xs font-extrabold tracking-wide text-white leading-tight">
            Chat with
          </span>
          <span className="text-[10px] text-white/90 font-medium">
            Founder
          </span>
        </div>

        {/* Icon */}
        <FaWhatsapp className="w-6 h-6 relative z-10 text-white" />
      </a>

    </div>
  );
};

export default FloatingCTA;
