import React, { useState } from 'react';
import { Star, ChevronRight, Sparkles, RefreshCw } from 'lucide-react';
import { Product } from '../types';
import { generateMarketingCopy } from '../services/geminiService';

interface ProductInfoProps {
  product: Product;
  isEditing: boolean;
  onUpdate: (updatedProduct: Product) => void;
}

export const ProductInfo: React.FC<ProductInfoProps> = ({ product, isEditing, onUpdate }) => {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleInputChange = (field: keyof Product, value: string | number) => {
    onUpdate({
      ...product,
      [field]: value,
    });
  };

  const handleGenerateTitle = async () => {
    setIsGenerating(true);
    const newTitle = await generateMarketingCopy(product.title);
    onUpdate({ ...product, title: newTitle });
    setIsGenerating(false);
  };

  const formatPrice = (value: number) => {
    return value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  const isPriceRange = product.priceMin !== product.priceMax;

  return (
    <div className="bg-white p-3 mb-2 pb-4">
      {/* Price Section */}
      <div className="mb-1">
        <div className="flex items-baseline gap-2">
          <span className="text-[#fe2c55] text-xl font-bold">
            R$ {isEditing ? (
              <input 
                type="number" 
                value={product.priceMin}
                onChange={(e) => handleInputChange('priceMin', parseFloat(e.target.value))}
                className="w-20 border border-gray-300 rounded px-1 text-sm"
              />
            ) : formatPrice(product.priceMin)}
            
            {(isPriceRange || isEditing) && (
              <>
                &nbsp;-&nbsp; 
                {isEditing ? (
                  <input 
                    type="number" 
                    value={product.priceMax}
                    onChange={(e) => handleInputChange('priceMax', parseFloat(e.target.value))}
                    className="w-20 border border-gray-300 rounded px-1 text-sm"
                  />
                ) : formatPrice(product.priceMax)}
              </>
            )}
          </span>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-gray-400 text-xs line-through decoration-gray-400">
            R${formatPrice(product.originalPrice)}
          </span>
          <span className="text-[#fe2c55] bg-[#fe2c55]/10 text-xs px-1 py-0.5 rounded">
            Economize até {product.discountPercentage}%
          </span>
        </div>
      </div>

      {/* Deals Banner */}
      <div className="flex items-center justify-between bg-pink-50 border border-pink-100 rounded p-1.5 mb-3">
         <div className="flex items-center gap-1">
            <span className="text-[#fe2c55] text-xs font-bold">
                Oferta Relâmpago
            </span>
            <span className="text-[#fe2c55] text-xs">oferecida pela TikTok Shop</span>
         </div>
         <ChevronRight className="w-4 h-4 text-gray-400" />
      </div>

      {/* Title - EDITABLE */}
      <div className="mb-2 relative group">
        {isEditing ? (
          <div className="flex flex-col gap-2">
            <textarea
                value={product.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                className="w-full border-2 border-blue-400 rounded p-2 text-sm font-medium text-gray-800 focus:outline-none"
                rows={3}
            />
            <button 
                onClick={handleGenerateTitle}
                disabled={isGenerating}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs py-2 rounded shadow-sm hover:opacity-90 disabled:opacity-50"
            >
                {isGenerating ? <RefreshCw className="w-3 h-3 animate-spin" /> : <Sparkles className="w-3 h-3" />}
                Gerar Título Viral com IA
            </button>
          </div>
        ) : (
          <h1 className="text-gray-800 text-[15px] leading-tight font-normal">
            <span className="inline-block bg-black text-white text-[10px] font-bold px-1.5 py-0.5 rounded-sm mr-1.5 align-middle">
                Black Friday
            </span>
            {product.title}
          </h1>
        )}
      </div>

      {/* Seller Info */}
      <div className="flex items-center gap-1 text-xs text-gray-500 mb-2">
        <span>Vendido por</span>
        <span className="font-medium text-gray-700 uppercase">{product.sellerName}</span>
      </div>

      {/* Social Proof */}
      <div className="flex items-center text-xs gap-3 border-b border-gray-100 pb-3">
        <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-black text-black" />
            <span className="font-bold text-black">{product.rating}</span>
            <span className="text-gray-500">({product.reviewCount})</span>
        </div>
        <div className="w-[1px] h-3 bg-gray-300"></div>
        <div className="text-gray-500">
            {product.soldCount >= 1000 ? (product.soldCount / 1000).toFixed(1) + 'K' : product.soldCount} vendido(s)
        </div>
      </div>
    </div>
  );
};