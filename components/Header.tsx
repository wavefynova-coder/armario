import React from 'react';
import { ChevronLeft, Search, ShoppingCart, MoreHorizontal, ArrowLeft } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <div className="sticky top-0 z-50 bg-white px-3 py-2 flex items-center justify-between shadow-sm">
      <button className="p-2 hover:bg-gray-100 rounded-full">
        <ChevronLeft className="w-7 h-7 text-gray-800" />
      </button>

      <div className="flex-1 mx-3 relative">
        <div className="flex items-center bg-white border border-[#fe2c55] rounded-md px-2 py-1.5">
          <Search className="w-4 h-4 text-[#fe2c55] mr-2" />
          <span className="text-sm text-gray-400 flex-1">Procurar</span>
          <button className="text-[#fe2c55] text-sm font-medium px-1">Procurar</button>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button className="p-1.5 hover:bg-gray-100 rounded-full relative">
           <ShoppingCart className="w-6 h-6 text-gray-800" />
           <span className="absolute top-0 right-0 bg-[#fe2c55] text-white text-[10px] font-bold px-1 rounded-full">2</span>
        </button>
        <button className="p-1.5 hover:bg-gray-100 rounded-full">
          <MoreHorizontal className="w-6 h-6 text-gray-800" />
        </button>
      </div>
    </div>
  );
};