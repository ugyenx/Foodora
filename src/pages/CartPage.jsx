import React, { useState } from 'react';
import { 
  MapPin, 
  Home, 
  Briefcase, 
  Clock, 
  Percent, 
  ChevronRight, 
  Minus, 
  Plus, 
  MessageSquare, 
  ShieldCheck,
  User,
  ShoppingBag,
  Store
} from 'lucide-react';
import { useSelector } from 'react-redux';
// --- Components ---

// 1. Veg/Non-Veg Icon Component
const FoodTypeIcon = ({ type }) => {
  const isVeg = type === 'veg';
  const colorClass = isVeg ? 'border-green-600 text-green-600' : 'border-[#d31b27] text-[#d31b27]';
  const bgClass = isVeg ? 'bg-green-600' : 'bg-[#d31b27]';

  return (
    <div className={`w-4 h-4 border-2 ${colorClass} flex items-center justify-center p-[1px]`}>
      <div className={`w-full h-full rounded-full ${bgClass}`}></div>
    </div>
  );
};

// --- Main Page Component ---
const Cart = () => {
  const data = useSelector((store) => store.cart.items);
  console.log(data)
  // Mock Data
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Paneer Butter Masala',
      price: 249,
      type: 'veg',
      quantity: 1,
      desc: 'Rich creamy gravy with soft paneer cubes'
    },
    {
      id: 2,
      name: 'Chicken Biryani Special',
      price: 399,
      type: 'non-veg',
      quantity: 1,
      desc: 'Served with Raita and Salan'
    },
    {
      id: 3,
      name: 'Butter Naan',
      price: 45,
      type: 'veg',
      quantity: 2,
      desc: 'Topped with generous amount of butter'
    }
  ]);

  const [instructions, setInstructions] = useState('');

  // Handlers
  const updateQuantity = (id, delta) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        return { ...item, quantity: Math.max(0, item.quantity + delta) };
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  // Calculations
  const itemTotal = data.reduce((acc, curr) =>  {return acc + curr.price/100}, 0);
  const deliveryFee = 35;
  const platformFee = 6;
  const gst = itemTotal * 0.05; // 5% GST
  const toPay = itemTotal + deliveryFee + platformFee + gst;

  // -- PALETTE CONSTANTS (for reference in Tailwind classes) --
  // Primary: #d31b27
  // Secondary/Hover: #e64048
  // Soft Gray: #f6f5f3
  // Main BG: #e6e0e0
  // Card BG: #f2f2f2 (We will use white for inner cards to pop against main bg)

  if (data.length === 0) {
    return (
      <div className="min-h-screen bg-[#e6e0e0] flex flex-col items-center justify-center p-4">
        <div className="bg-[#f2f2f2] p-8 rounded-2xl shadow-sm text-center max-w-md w-full">
          <div className="w-20 h-20 bg-[#f6f5f3] rounded-full flex items-center justify-center mx-auto mb-4 text-[#d31b27]">
            <ShoppingBag size={32} />
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Your cart is empty</h2>
          <p className="text-gray-500 mb-6">You can go to home page to view more restaurants</p>
          <button className="bg-[#d31b27] text-white font-bold py-3 px-8 rounded-lg uppercase tracking-wide hover:bg-[#e64048] transition-colors">
            See Restaurants near you
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#e6e0e0] font-sans pb-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* --- LEFT COLUMN (Cart Items & Address) --- */}
          <div className="lg:col-span-8 space-y-6">
            
          
            
            {/* 2. Cart Items Section */}
            <div className="bg-[#f2f2f2] pb-4 shadow-sm rounded-none md:rounded-3xl overflow-hidden">
              
              {/* Header */}
              <div className="bg-white p-6 cursor-pointer flex items-center gap-4 border-b border-[#e6e0e0]">
                <img 
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                  alt="Restaurant" 
                  className="w-14 h-14 object-cover rounded-md"
                />
                <div>
                  <h2 className="text-lg font-bold text-gray-800 border-b-2 border-black inline-block pb-0.5">Spice Symphony</h2>
                  <p className="text-xs text-gray-500 mt-1">HSR Layout • Indian, Mughlai</p>
                </div>
              </div>

              {/* Items List */}
              <div className="bg-white px-6 py-2">
                {data.map((item) => (
                  <div key={item.id} className="py-6 flex items-center justify-between border-b border-dashed border-gray-200 last:border-0">
                    
                    {/* Item Info */}
                    <div className="flex items-start gap-3 w-3/5">
                      <div className="mt-1 flex-shrink-0">
                        <FoodTypeIcon type={item.type} />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-700">{item.name}</h4>
                        <div className="text-xs text-gray-500 mt-1">₹{item.price/100}</div>
                        {item.desc && <p className="text-xs text-gray-400 mt-1 line-clamp-1">{item.description}</p>}
                      </div>
                    </div>

                    {/* Quantity & Price */}
                    <div className="flex items-center gap-6">
                      <div className="flex items-center border border-gray-300 shadow-sm bg-white h-8 w-24 justify-between px-2">
                        <button 
                          onClick={() => updateQuantity(item.id, -1)}
                          className="text-gray-400 font-bold hover:text-[#d31b27]"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="text-sm font-bold text-[#16a34a]">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, 1)}
                          className="text-[#16a34a] font-bold"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <div className="text-sm text-gray-700 w-12 text-right">
                        ₹{item.price * item.quantity}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Suggestions */}
              <div className="bg-[#f6f5f3] p-4 mx-4 mt-4 rounded-lg flex items-start gap-3">
                <MessageSquare size={18} className="text-gray-400 mt-1" />
                <input 
                  type="text" 
                  placeholder="Any suggestions? We will pass it on..."
                  className="bg-transparent text-sm w-full outline-none text-gray-600 placeholder-gray-400"
                  value={instructions}
                  onChange={(e) => setInstructions(e.target.value)}
                />
              </div>

              {/* No Contact Delivery */}
              <div className="mx-4 mt-4 p-4 border border-[#e6e0e0] rounded-lg bg-white flex items-start gap-3 mb-2">
                 <input type="checkbox" className="mt-1 accent-[#d31b27] w-4 h-4" />
                 <div>
                   <h4 className="text-sm font-bold text-gray-700">Opt in for No-contact Delivery</h4>
                   <p className="text-xs text-gray-500 mt-1">Our delivery partner will leave your order at your door/gate (not applicable for COD).</p>
                 </div>
              </div>

            </div>
          </div>

          {/* --- RIGHT COLUMN (Bill Details) --- */}
          <div className="lg:col-span-4">
            <div className="bg-white p-6 shadow-sm rounded-none md:rounded-3xl sticky top-24">
              <h3 className="font-bold text-gray-600 text-sm uppercase tracking-wider mb-4">Bill Details</h3>
              
              <div className="space-y-3 text-sm text-gray-600 border-b border-gray-200 pb-4">
                <div className="flex justify-between">
                  <span>Item Total</span>
                  <span>₹{itemTotal}</span>
                </div>
                
                <div className="flex justify-between items-center text-xs">
                  <span className="border-b border-dashed border-gray-400 cursor-help">Delivery Fee | 2.5 kms</span>
                  <span>₹{deliveryFee}</span>
                </div>
                <div className="text-xs text-[#d31b27] font-medium pl-0.5">
                  Free delivery on orders above ₹500
                </div>

                <div className="flex justify-between items-center text-xs">
                  <span className="border-b border-dashed border-gray-400 cursor-help">Platform Fee</span>
                  <span>₹{platformFee}</span>
                </div>

                <div className="flex justify-between items-center text-xs">
                  <span className="border-b border-dashed border-gray-400 cursor-help">GST and Restaurant Charges</span>
                  <span>₹{gst.toFixed(2)}</span>
                </div>
              </div>

              <div className="pt-4 pb-2 border-b-2 border-black">
                <div className="flex justify-between font-bold text-gray-800 text-lg">
                  <span>TO PAY</span>
                  <span>₹{toPay.toFixed(2)}</span>
                </div>
              </div>

              {/* Savings Policy */}
              <div className="bg-[#f6f5f3] border border-[#e6e0e0] p-3 mt-4 rounded-md flex gap-2">
                <div className="mt-0.5 text-[#d31b27]"><Percent size={14} /></div>
                <div>
                   <p className="text-xs font-bold text-gray-700">Savings of ₹85</p>
                   <p className="text-[10px] text-gray-500">You saved on delivery fee and promo codes.</p>
                </div>
              </div>

              {/* Cancellation Policy */}
              <div className="bg-white border border-[#e6e0e0] p-4 mt-4 rounded-md">
                <div className="flex gap-2">
                  <ShieldCheck size={16} className="text-gray-500 flex-shrink-0" />
                  <p className="text-[10px] text-gray-500 leading-tight">
                    <span className="font-bold text-gray-700">Review your order and address details to avoid cancellations</span><br/>
                    Note: If you cancel within 60 seconds of placing your order, a 100% refund will be issued. No refund for cancellations made after 60 seconds.
                  </p>
                </div>
              </div>

              {/* Primary Action Button */}
              {/* Using Primary color: #d31b27 */}
              <button className="w-full bg-[#d31b27] text-white font-bold rounded-2xl text-base py-3 mt-6 shadow-lg hover:bg-[#e64048] hover:shadow-xl transition-all uppercase flex justify-between px-4 items-center">
                <span>Total: ₹{toPay.toFixed(0)}</span>
                <span className="flex items-center gap-1">
                  Proceed to Pay <ChevronRight size={18} />
                </span>
              </button>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Cart;