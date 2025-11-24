import React, { useState } from 'react';
import { Header } from './components/Header';
import { ProductImage } from './components/ProductImage';
import { ProductInfo } from './components/ProductInfo';
import { ActionFooter } from './components/ActionFooter';
import { InformationFooter } from './components/InformationFooter';
import { ChevronRight, Truck, ShieldCheck, Pencil, Check } from 'lucide-react';
import { Product } from './types';

// Initial Mock Data based on the screenshot
const INITIAL_PRODUCT: Product = {
  id: '1',
  title: 'Sapateira Multiuso Para Calçados 5/6/7 Andares Organizador Desmontável armário organizador',
  priceMin: 29.90,
  priceMax: 29.90,
  originalPrice: 59.90,
  discountPercentage: 50,
  soldCount: 1200,
  rating: 4.4,
  reviewCount: 89,
  sellerName: 'QUE BOM',
  shippingCost: 9.60,
  images: [
    'https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/8e69aa8c15f04e5dae4f4c9bd9484665~tplv-o3syd03w52-resize-webp:800:800.webp?dr=15584&t=555f072d&ps=933b5bde&shp=6ce186a1&shcp=e1be8f53&idc=my&from=1826719393',
    'https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/5f6def9a7b104fa889f8181f2bfda5c2~tplv-o3syd03w52-resize-webp:800:800.webp?dr=15584&t=555f072d&ps=933b5bde&shp=6ce186a1&shcp=e1be8f53&idc=my&from=1826719393',
    'https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/1f1f3bdfc16c4028a765edd5a0421102~tplv-o3syd03w52-resize-webp:800:800.webp?dr=15584&t=555f072d&ps=933b5bde&shp=6ce186a1&shcp=e1be8f53&idc=my&from=1826719393',
    'https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/e6bfa268d80849c9afbc104167c5ce10~tplv-o3syd03w52-resize-webp:800:800.webp?dr=15584&t=555f072d&ps=933b5bde&shp=6ce186a1&shcp=e1be8f53&idc=my&from=1826719393',
    'https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/b65d30749b084a27b5bbe6bca69e3513~tplv-o3syd03w52-resize-webp:800:800.webp?dr=15584&t=555f072d&ps=933b5bde&shp=6ce186a1&shcp=e1be8f53&idc=my&from=1826719393',
    'https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/d811df3fa03641da9b0a0cca4f8046b9~tplv-o3syd03w52-resize-webp:800:800.webp?dr=15584&t=555f072d&ps=933b5bde&shp=6ce186a1&shcp=e1be8f53&idc=my&from=1826719393'
  ]
};

const MOCK_REVIEWS = [
  {
    id: 1,
    user: 'Maria S.',
    avatar: 'https://picsum.photos/seed/user1/50/50',
    rating: 5,
    text: 'Amei a sapateira! Muito fácil de montar e coube todos os meus sapatos. Recomendo demais a loja, chegou super rápido.'
  },
  {
    id: 2,
    user: 'João Paulo',
    avatar: 'https://picsum.photos/seed/user2/50/50',
    rating: 4,
    text: 'Produto conforme o anúncio. O material parece frágil no início, mas depois de montado fica bem firme. Ótimo custo benefício.'
  },
  {
    id: 3,
    user: 'Ana Clara',
    avatar: 'https://picsum.photos/seed/user3/50/50',
    rating: 5,
    text: 'Chegou antes do prazo! Ajudou muito a organizar meu quarto. Só achei um pouco difícil de encaixar algumas peças, mas deu certo.'
  },
  {
    id: 4,
    user: 'Fernanda L.',
    avatar: 'https://picsum.photos/seed/user4/50/50',
    rating: 5,
    text: 'Gostei bastante, cabe muita coisa. Comprarei outra para o quarto dos meus filhos.'
  }
];

const App: React.FC = () => {
  const [product, setProduct] = useState<Product>(INITIAL_PRODUCT);
  const [isEditing, setIsEditing] = useState(false);
  const [shopName, setShopName] = useState('TikTok Shop');

  return (
    <div className="max-w-md mx-auto bg-[#f1f1f2] min-h-screen pb-20 relative shadow-2xl">
      <Header />

      {/* Edit Toggle (Floating for demo purposes) */}
      <button 
        onClick={() => setIsEditing(!isEditing)}
        className={`fixed bottom-24 right-4 z-50 p-3 rounded-full shadow-lg transition-all ${isEditing ? 'bg-green-500 text-white' : 'bg-gray-800 text-white'}`}
        title="Toggle Edit Mode"
      >
        {isEditing ? <Check className="w-6 h-6" /> : <Pencil className="w-6 h-6" />}
      </button>

      <main>
        <ProductImage images={product.images} />
        
        <ProductInfo 
            product={product} 
            isEditing={isEditing} 
            onUpdate={setProduct} 
        />

        {/* Select Options */}
        <div className="bg-white p-3 mb-2 flex items-center justify-between cursor-pointer hover:bg-gray-50">
            <span className="text-sm font-medium text-gray-800">Selecionar opções</span>
            <div className="flex items-center text-gray-400 text-sm gap-1">
                <span>Selecionar</span>
                <ChevronRight className="w-4 h-4" />
            </div>
        </div>

        {/* Shipping Info */}
        <div className="bg-white p-3 mb-2">
            <div className="flex justify-between items-start mb-1">
                <span className="text-sm font-bold text-gray-800">Envio</span>
                <div className="flex items-center text-gray-400 text-sm">
                     <span>A partir de R$ {product.shippingCost.toFixed(2).replace('.', ',')}</span>
                </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                <Truck className="w-3 h-3" />
                <span>Entrega até Nov 27 - Dec 1</span>
            </div>
             <div className="flex items-center gap-2 text-xs text-gray-500">
                <ShieldCheck className="w-3 h-3" />
                <span>Proteção ao comprador de 75 dias</span>
            </div>
        </div>

        {/* Reviews Preview */}
        <div className="bg-white p-3 mb-2">
             <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-gray-800">Avaliações ({product.reviewCount})</span>
                    <span className="text-xs text-gray-500 flex items-center gap-0.5">
                        4.4 <StarIcon filled />
                    </span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
            </div>
            
            {/* Review Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-100 text-xs px-2 py-1 rounded-full text-gray-700">Ótima qualidade (12)</span>
                <span className="bg-gray-100 text-xs px-2 py-1 rounded-full text-gray-700">Entrega rápida (8)</span>
                <span className="bg-gray-100 text-xs px-2 py-1 rounded-full text-gray-700">Muito útil (5)</span>
            </div>

             {/* Review List */}
             <div className="flex flex-col gap-4">
                {MOCK_REVIEWS.map((review) => (
                    <div key={review.id} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                        <div className="flex items-center gap-2 mb-1.5">
                            <div className="w-6 h-6 bg-gray-200 rounded-full overflow-hidden">
                                <img src={review.avatar} alt={review.user} className="w-full h-full object-cover" />
                            </div>
                            <span className="text-xs text-gray-600 font-medium">{review.user}</span>
                            <div className="flex gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <StarIcon key={i} filled={i < review.rating} />
                                ))}
                            </div>
                        </div>
                        <p className="text-xs text-gray-800 leading-relaxed">
                            {review.text}
                        </p>
                    </div>
                ))}
             </div>

             <button className="w-full text-center text-xs text-gray-500 font-medium mt-3 pt-2">
                Ver tudo ({product.reviewCount})
             </button>
        </div>
        
        {/* Description */}
         <div className="bg-white p-3 mb-2 min-h-[200px]">
             <h3 className="text-sm font-bold text-gray-800 mb-2">Descrição do produto</h3>
             <div className="text-xs text-gray-600 leading-relaxed space-y-3">
                 <p>
                    Talvez você ainda se preocupe sobre como armazenar seus sapatos desarrumados. Esta sapateira é sua melhor aposta, resistente para segurar seus sapatos. Material plástico de alta qualidade, peso leve e fácil de limpar, tem proteção fina para seus sapatos, excelente para o seu uso duradouro, os materiais de alumínio resistentes oferecem a melhor capacidade de sustentação.
                 </p>

                 <p className="font-bold text-gray-800">Características:</p>
                 <ul className="space-y-2">
                    <li>Os suportes de alumínio e plástico asseguram seus sapatos, muito resistente e durável de usar.</li>
                    <li>Esta sapateira permite a visibilidade máxima para que você encontre os sapatos de forma rápida e prática, muito conveniente.</li>
                    <li>Nenhuma ferramenta especial é necessária para montar este rack de sapato, basta encaixar as camada juntas.</li>
                    <li>Economia de espaço; tem espaço suficiente para você armazenar todos os tipos de sapatos, como sapatos esportivos, sapatos de salto alto, chinelos e muito mais.</li>
                    <li>Leve e compacto, fácil de mover e limpar, torna sua casa mais organizada.</li>
                 </ul>

                 <p className="font-bold text-gray-800">Especificação:</p>
                 <p>Condição: 100% novo</p>
                 <p>Material: plástico + alumínio</p>
                 <p>Cor: Branco</p>

                 <p className="font-bold text-gray-800 uppercase">TAMANHO :</p>
                 <p>Escolha o número de camadas de sua preferência</p>

                 <div>
                    <p className="font-bold text-gray-800 mt-2">5 ANDARES</p>
                    <p>Altura sapateira: 1 metro</p>
                    <p>Altura prateleiras: 19 cm</p>
                    <p>Largura: 62 cm</p>
                    <p>Comprimento: 29 cm</p>
                 </div>

                 <div>
                    <p className="font-bold text-gray-800 mt-2">6 ANDARES</p>
                    <p>Altura sapateira: 1,20 metros</p>
                    <p>Altura prateleiras: 19 cm</p>
                    <p>Largura: 62 cm</p>
                    <p>Comprimento: 29 cm</p>
                 </div>

                 <div>
                    <p className="font-bold text-gray-800 mt-2">7 ANDARES</p>
                    <p>Altura sapateira: 1,40 metros</p>
                    <p>Altura prateleiras: 19 cm</p>
                    <p>Largura: 62 cm</p>
                    <p>Comprimento: 29 cm</p>
                 </div>

                 <p className="font-bold text-gray-800 mt-2 uppercase">LEVE E PORTATIL</p>
                 <p className="font-bold text-gray-800 uppercase">FACIL DE MONTAR</p>

                 <p className="font-bold text-xs mt-3">*IMAGENS MERAMENTE ILUSTRATIVAS*</p>
                 <p className="font-bold text-xs">*AS CORES PODEM VARIAR DAS FOTOS DE ACORDO COM A RESOLUÇÃO DA SUA TELA*</p>

                 <p className="font-bold text-gray-800 mt-3">TEMPO DE GARANTIA: 1 MÊS</p>
                 <p className="font-bold text-gray-800">TIPO DE GARANTIA: GARANTIA DO FORNECEDOR</p>
             </div>
         </div>
         
         <InformationFooter 
           isEditing={isEditing} 
           shopName={shopName} 
           onShopNameChange={setShopName}
         />
      </main>
      
      <ActionFooter />
    </div>
  );
};

// Helper component for the star icon within this file just for the review section
const StarIcon: React.FC<{ filled?: boolean }> = ({ filled }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill={filled ? "#FFD700" : "#e5e7eb"} 
        className="w-3 h-3"
    >
        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
    </svg>
);

export default App;