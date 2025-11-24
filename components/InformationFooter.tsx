import React from 'react';
import { ChevronDown, Truck, Tag, ArrowUp } from 'lucide-react';

interface InformationFooterProps {
  isEditing?: boolean;
  shopName?: string;
  onShopNameChange?: (name: string) => void;
}

const FooterAccordionItem: React.FC<{ title: string }> = ({ title }) => (
  <div className="flex justify-between items-center py-4 border-b border-gray-100 cursor-pointer group">
    <span className="text-[13px] font-bold text-gray-800 group-hover:text-gray-600 transition-colors">{title}</span>
    <ChevronDown className="w-4 h-4 text-gray-400" />
  </div>
);

export const InformationFooter: React.FC<InformationFooterProps> = ({ 
  isEditing = false, 
  shopName = "TikTok Shop", 
  onShopNameChange 
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-white mt-2 px-4 py-6 pb-8">
      <div className="mb-2">
        {/* Shop Logo/Name Area */}
        <div className="mb-6 flex items-center gap-2">
           <div className="w-7 h-7 bg-black rounded-full flex items-center justify-center text-white">
              <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                 <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
           </div>
           
           {isEditing && onShopNameChange ? (
             <input 
               type="text" 
               value={shopName}
               onChange={(e) => onShopNameChange(e.target.value)}
               className="border-2 border-blue-400 rounded px-2 py-1 text-xl font-bold text-gray-800 w-full max-w-[200px] focus:outline-none"
             />
           ) : (
             <h2 className="text-xl font-bold text-gray-800 tracking-tight">
               {shopName}
             </h2>
           )}
        </div>

        <div className="flex flex-col">
            <FooterAccordionItem title="Comece a comprar" />
            <FooterAccordionItem title="Ganhe dinheiro conosco" />
            <FooterAccordionItem title="Informações da empresa" />
            <FooterAccordionItem title="Suporte ao cliente" />
            <FooterAccordionItem title="Políticas e aspectos legais" />
        </div>
      </div>

      <div className="flex flex-wrap gap-x-6 gap-y-3 mb-8 mt-6 text-gray-600 text-xs">
          <div className="flex items-center gap-1.5">
              <Truck className="w-4 h-4" />
              <span className="font-medium">Frete grátis</span>
          </div>
          <div className="flex items-center gap-1.5">
              <Tag className="w-4 h-4" />
              <span className="font-medium">Ofertas para novos clientes</span>
          </div>
      </div>

      <div className="flex items-end justify-between mt-4">
          <div className="flex gap-3">
              {/* Google Play Button */}
              <button className="border border-gray-300 rounded-md px-2 py-1.5 flex items-center gap-2 hover:bg-gray-50 transition-colors">
                 <div className="w-6 h-6 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-full h-full">
                        <path fill="#4285F4" d="M23.64 13.26A2.26 2.26 0 0 0 24 12a2.27 2.27 0 0 0-.36-1.26l-10.3-10.28a.73.73 0 0 0-.3.06L23.64 13.26z"/>
                        <path fill="#34A853" d="M13 12.5l10.62 10.6a2.3 2.3 0 0 0 .29-.61L13 12.5z"/>
                        <path fill="#EA4335" d="M13 11.5L2.08.64a2.24 2.24 0 0 0-.75.21L13 11.5z"/>
                        <path fill="#FBBC04" d="M1.33 1.48A2.26 2.26 0 0 0 1 2.4v19.2a2.26 2.26 0 0 0 .33.92L12.31 12 1.33 1.48z"/>
                    </svg>
                 </div>
                 <div className="flex flex-col items-start">
                     <span className="text-[8px] uppercase leading-none text-gray-500 mb-0.5">GET IT ON</span>
                     <span className="text-[12px] font-bold leading-none text-gray-800">Google Play</span>
                 </div>
              </button>

              {/* App Store Button */}
              <button className="border border-gray-300 rounded-md px-2 py-1.5 flex items-center gap-2 hover:bg-gray-50 transition-colors">
                 <div className="w-5 h-5 text-black flex items-center justify-center">
                    <svg viewBox="0 0 384 512" fill="currentColor" className="w-full h-full">
                        <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 46.9 126.7 89.8 126.7 19.6 0 35.2-11.8 66.2-11.8s46.1 11.8 63.5 11.8c48.3 0 81.7-86.8 84-91-33.3-16.5-42.8-43.3-43.2-71.7zM249.4 53.4c18.1-26.8 33-61.3 27.2-99.1-27.4 2.4-57.6 19.1-75.5 46-16.2 24.2-31.1 59.5-26.2 97.9 30.6 2.3 55.2-18.5 74.5-44.8z"/>
                    </svg>
                 </div>
                 <div className="flex flex-col items-start">
                     <span className="text-[8px] uppercase leading-none text-gray-500 mb-0.5">Download on the</span>
                     <span className="text-[12px] font-bold leading-none text-gray-800">App Store</span>
                 </div>
              </button>
          </div>
          
          <button onClick={scrollToTop} className="p-2.5 bg-white rounded-full shadow-lg border border-gray-100 hover:bg-gray-50 active:scale-95 transition-transform">
             <ArrowUp className="w-5 h-5 text-gray-800" />
          </button>
      </div>
    </div>
  );
};