import React from 'react';
import { MessageCircle, Store } from 'lucide-react';

export const ActionFooter: React.FC = () => {
  return (
    <div className="sticky bottom-0 bg-white border-t border-gray-200 px-3 py-2 flex items-center gap-3 z-50 safe-area-bottom">
        <div className="flex items-center gap-4 px-1">
            <div className="flex flex-col items-center gap-0.5 cursor-pointer">
                <Store className="w-5 h-5 text-black" />
                <span className="text-[10px] text-gray-600">Loja</span>
            </div>
            <div className="flex flex-col items-center gap-0.5 cursor-pointer">
                <MessageCircle className="w-5 h-5 text-black" />
                <span className="text-[10px] text-gray-600">Chat</span>
            </div>
        </div>

        <div className="flex-1 h-10">
            <button className="w-full h-full bg-[#fe2c55] text-white text-sm font-bold rounded-lg flex flex-col items-center justify-center leading-none hover:bg-[#e62a4d] transition-colors">
                <span>Comprar</span>
                <span className="text-[10px] font-normal">agora</span>
            </button>
        </div>
    </div>
  );
};