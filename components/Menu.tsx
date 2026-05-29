import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Types
type Modifier = {
  name: string;
  price?: number;
};

type ModifierGroup = {
  name: string;
  required: boolean;
  options: Modifier[];
  type: 'select' | 'radio' | 'checkbox';
};

type MenuItemData = {
  id: string;
  title: string;
  price: number | string;
  description?: string;
  image?: string;
  category: string;
  tags?: string[];
  modifierGroups?: ModifierGroup[];
};

// Data
const MENU_ITEMS: MenuItemData[] = [
  // RAMEN
  {
    id: 'r1',
    title: 'Tonkatsu Ramen',
    price: 11.95,
    description: 'Pork ramen, chasu, kikurage, eggs, green onion, menma, narutomaki.',
    category: 'Ramen',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASIe_7CyHxCLJuhGhXl1AgyYNBHkNrGPQ2p5JnGc1LKlnCSkNArSa4yfMHNd6pIpIh-Y648XMqBbxZP-ys9cPpbnsyPqRyasa33l-ejcwksJ6WgQnetZKXTeh7JYvVQaaHGEDiFueq3SFD8reHDvioVR3gV-ErTS1fuKm4ZjO-qL6NUm-pR3vTaExQZShfXT9j8XYllPc7suUaZyjLHzjqyJiZvhu3OptXRj1mdfDAdi7mFqIsUKG2dYtTnmnOnQsM0EUSUHzPuAq5',
    modifierGroups: [
      {
        name: 'Broth Options',
        required: false,
        type: 'checkbox',
        options: [{ name: 'Black Garlic Oil', price: 1.0 }, { name: 'Spicy Miso Paste', price: 0.5 }]
      },
      {
        name: 'Noodle Upgrade',
        required: false,
        type: 'radio',
        options: [{ name: 'Regular', price: 0 }, { name: 'Udon Noodle', price: 1.0 }, { name: 'Kale Noodle', price: 1.5 }]
      },
      {
        name: 'Extra Toppings',
        required: false,
        type: 'checkbox',
        options: [
          { name: 'Chashu (2pcs)', price: 3.0 },
          { name: 'Soft Boiled Egg', price: 2.0 },
          { name: 'Menma (Bamboo)', price: 1.5 },
          { name: 'Corn', price: 1.0 },
          { name: 'Nori (Seaweed)', price: 1.0 }
        ]
      }
    ]
  },
  {
    id: 'r2',
    title: 'Tokyo Shoyu Ramen',
    price: 10.95,
    description: 'Chicken ramen, nori, green onion, egg, menma, kikurage, narutomaki, sweet corn.',
    category: 'Ramen',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASIe_7CyHxCLJuhGhXl1AgyYNBHkNrGPQ2p5JnGc1LKlnCSkNArSa4yfMHNd6pIpIh-Y648XMqBbxZP-ys9cPpbnsyPqRyasa33l-ejcwksJ6WgQnetZKXTeh7JYvVQaaHGEDiFueq3SFD8reHDvioVR3gV-ErTS1fuKm4ZjO-qL6NUm-pR3vTaExQZShfXT9j8XYllPc7suUaZyjLHzjqyJiZvhu3OptXRj1mdfDAdi7mFqIsUKG2dYtTnmnOnQsM0EUSUHzPuAq5', 
  },
  {
    id: 'r3',
    title: 'Sapporo Miso Ramen',
    price: 11.95,
    description: 'Chashu, kikurage, bean sprout, onion, narutomaki, green onion, egg, menma in spicy tonkatsu miso broth.',
    category: 'Ramen',
    tags: ['Spicy'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbrHRIGqMvnEbmB-ExSo9rouptKsCJdpcsvTo1awpQUC85W-WmrJ5azSWIaIxBMXLWKDrIUFwtUWx1gOl_KeN0Xrap4O2WOqoKs_dk9ocCjqettGTpUTGPdIXjbcDk8vpTH5io-Ozgrwtntn4vuG0dtIMJbpU3aWlizS9tmicopPIS0QM_atd3sXquzDDYnWaFsUo-UhqnJVJQ99BWeLhFGkX8mPTL3p8ywQbVfFQFWfZmQbHK_6vm3fUjn6N-dtqCzdmxg643uP3y',
  },
  {
    id: 'r4',
    title: 'Kinoko Vegetarian',
    price: 10.95,
    description: 'Bokchoy, corn, bean sprouts, kikurage, mushroom, edamame, tofu in soy bean broth.',
    category: 'Ramen',
    tags: ['Veg'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8LrZO3UGzww2b9oKUmn_rVRrK_AvNeH6oYEN71GgG6TQOykvFueRBiajjPJBBgOWH6yYikkoexPc2BGZC0wN3lPu3y2rF6C8EV6_clzSDiGZcIgJzWIIsvS2N9kD9eaBVDbnDQI-N7qjTUwG_7FZvhHXD_cyjBPCcqWmJqKnBJQHrtUhz_N5nc1TX7Zqblv-Z_p0SzR6vgAdx32uVA41TSCwDfmvc0YJrKkWn--FgpS7jVGmz7PfgoMUjU7snxX1EcnNVJINXUHVh', 
  },
  {
    id: 'r5',
    title: 'Beef Ramen',
    price: 11.95,
    description: 'Braised beef, egg, green onion, bean sprouts, bokchoy, cilantro in beef broth.',
    category: 'Ramen',
    tags: ['Spicy'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASIe_7CyHxCLJuhGhXl1AgyYNBHkNrGPQ2p5JnGc1LKlnCSkNArSa4yfMHNd6pIpIh-Y648XMqBbxZP-ys9cPpbnsyPqRyasa33l-ejcwksJ6WgQnetZKXTeh7JYvVQaaHGEDiFueq3SFD8reHDvioVR3gV-ErTS1fuKm4ZjO-qL6NUm-pR3vTaExQZShfXT9j8XYllPc7suUaZyjLHzjqyJiZvhu3OptXRj1mdfDAdi7mFqIsUKG2dYtTnmnOnQsM0EUSUHzPuAq5',
  },
  // POKE
  {
    id: 'p1',
    title: 'Hawaiian Classic',
    price: 10.95,
    description: 'Ahi tuna, green and sweet onion, hijiki seaweed, cucumber, sesame seeds, Mitsuba classic sauce.',
    category: 'Poke',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIqssB5dVaCkgoDBbOHkIp7F4NUrFykRaEvbhXP_Kg9Eqshm9faBNLD9TSYtGdogAqc6DKoQ3cKSk5QO-L4JxaDSGcAVuevoel1AXeuZ7rz4119c-nkex2jEKeU03lnxDZjavhPYRjrtT3EvN-8hSbs2VBLGh4Ds0Nl-BnZ2BZzpv5hKhoHroMcaczK_TG_yIADxdxL9QCqVOISIyOtL1Qi2gF0YdhMJsFPilVb6olMrQlrNrBzUcUnMR2aE26SmXQbxwOCYXnpSpT',
  },
  {
    id: 'p2',
    title: 'Wasabi Shrimp',
    price: 10.95,
    description: 'Chili Shrimp, green and sweet onion, cucumber, masago, sesame seeds, wasabi aioli.',
    category: 'Poke',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCil2HHVrE09m_UCpK6foPCYflk-l8oLZSoyhBKKT2GhHxvHp9Na0--uO_Eq4GQ_EscPwwr1MC7Ps0COquz78DT6sfymrI8ODUCl2F9r1kxXwcXPwJYnLyiKAxE00GKpXAH_uF3OwkO_Nb9K-tkRpM8fpRmiI4IdwRyz_mQhEE38wY_waiAB-2bApYgchSxkDJ4mUYOa3Om7yJbDmTrgUm9Ez5JzPviQZfo75xUeOEe-HYFpJrs-uv54X23DmiEr_uGXMaCUVHLAncn',
  },
  {
    id: 'p3',
    title: 'Sweet Ginger Chicken',
    price: 10.95,
    description: 'Free range chicken breast, green and sweet onion, edamame, cilantro, sesame seeds, spicy ginger sauce.',
    category: 'Poke',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAcKGJiw4FA-Z5l0NwJJT934SsMx1vxssXql5QQKqHAy314181Fjz6fCnbUzbW2xNaaMG8s-UWXut8zPYqyIYapyaK8RAKr-X_O-SHJz4vbXchKNqVPOBtGRNKgvT_HffNWxG-jTBit61Ql-NbesgnIogP4R2yLh21TgLcNIfvpVQW-k1lNoccMcSZxFYgU-Wh6iagp_J7bWwh_59w7eN4b4G_RJtYAxi6NIjpCsuWDAk7LihumuSU0rukrHy8DrULOn8EOHoQB48rL',
  },
  {
    id: 'p_custom',
    title: 'Build your Poke',
    price: 10.95,
    description: 'Build your own bowl. Choose Base, Protein, Mix-ins, Flavor, Toppings and Crunch.',
    category: 'Poke',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAcKGJiw4FA-Z5l0NwJJT934SsMx1vxssXql5QQKqHAy314181Fjz6fCnbUzbW2xNaaMG8s-UWXut8zPYqyIYapyaK8RAKr-X_O-SHJz4vbXchKNqVPOBtGRNKgvT_HffNWxG-jTBit61Ql-NbesgnIogP4R2yLh21TgLcNIfvpVQW-k1lNoccMcSZxFYgU-Wh6iagp_J7bWwh_59w7eN4b4G_RJtYAxi6NIjpCsuWDAk7LihumuSU0rukrHy8DrULOn8EOHoQB48rL',
    modifierGroups: [
      {
        name: 'Step 1: Base',
        required: true,
        type: 'radio',
        options: [
          { name: 'Sushi Rice' },
          { name: 'Brown Rice' },
          { name: 'Quinoa', price: 1.0 },
          { name: 'Fresh Romaine & Spring Mix' },
          { name: 'Kale Noodles' },
          { name: 'Sushi Burrito (Seaweed Wrap)' },
          { name: 'Sushi Burrito (Soybean Wrap)', price: 1.0 }
        ]
      },
      {
        name: 'Step 2: Protein (Small $8.95, Reg $10.95)',
        required: true,
        type: 'checkbox',
        options: [
          { name: 'Ahi Tuna' }, { name: 'Salmon' }, { name: 'Shrimp' }, { name: 'Organic Tofu' },
          { name: 'Chicken' }, { name: 'Spicy Salmon' }
        ]
      },
      // Simplified for demo
      {
        name: 'Step 4: Flavor',
        required: true,
        type: 'radio',
        options: [
          { name: 'Mitsuba Classic' }, { name: 'Sriracha Aioli' }, { name: 'Wasabi Aioli' },
          { name: 'Ponzu Fresh' }, { name: 'Sweet Chili' }
        ]
      }
    ]
  },
  // SNACKS
  {
    id: 's1',
    title: 'Gyoza',
    price: 4.50,
    description: 'Pan-fried Japanese-style pork dumpling.',
    category: 'Snacks',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASIe_7CyHxCLJuhGhXl1AgyYNBHkNrGPQ2p5JnGc1LKlnCSkNArSa4yfMHNd6pIpIh-Y648XMqBbxZP-ys9cPpbnsyPqRyasa33l-ejcwksJ6WgQnetZKXTeh7JYvVQaaHGEDiFueq3SFD8reHDvioVR3gV-ErTS1fuKm4ZjO-qL6NUm-pR3vTaExQZShfXT9j8XYllPc7suUaZyjLHzjqyJiZvhu3OptXRj1mdfDAdi7mFqIsUKG2dYtTnmnOnQsM0EUSUHzPuAq5' // reused
  },
  {
    id: 's2',
    title: 'Edamame',
    price: 3.95,
    description: 'Japanese young soybean cooked in salt water.',
    category: 'Snacks',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9xInGmo_01m8gTUwkaLoyoDrsSqiA-3g4feZ3Yk54AxcIgkIrCpY2elzdde-eKyv2MwIMYh4vPPetLrcScjuB8ZdrQL2U4_5F8TX3OBCTAjO88ZglGJjyb81lWJUtdm_RiHwTFNgIDA4Bb1w0m8FzB_WL3gKcR4VWUTAwmckrezr9nVQfrpk3-mowsC4-sFdvTS1iiVPdjPz07KXlA39itdUVHkXrzDS6EPhH3tAqGYfww3ao6yYQ__ySfsaZVRzdJXibm6esbDwf' // reused
  },
  // DRINKS - MILK TEA
  {
    id: 'd1',
    title: 'Classic Milk Tea',
    price: 3.25,
    category: 'Drinks',
    tags: ['Milk Tea'],
    modifierGroups: [
      {
        name: 'Size',
        required: true,
        type: 'radio',
        options: [{name: 'Medium', price: 0}, {name: 'Large', price: 1.0}, {name: 'Hot', price: 1.0}]
      },
      {
        name: 'Sugar Level',
        required: true,
        type: 'radio',
        options: [{name: '125% Extra'}, {name: '100% Regular'}, {name: '70% Less'}, {name: '30% Little'}]
      },
      {
        name: 'Ice Level',
        required: true,
        type: 'radio',
        options: [{name: '100% Regular'}, {name: '50% Less'}, {name: 'No Ice'}, {name: 'Warm'}]
      },
      {
        name: 'Toppings',
        required: false,
        type: 'checkbox',
        options: [{name: 'Bubbles', price: 0.5}, {name: 'Oreo', price: 0.5}, {name: 'Boba', price: 0.5}, {name: 'Lychee Jelly', price: 0.5}]
      }
    ]
  },
  {
    id: 'd2',
    title: 'Matcha Milk Tea',
    price: 3.50,
    category: 'Drinks',
    tags: ['Milk Tea']
  },
  {
    id: 'd3',
    title: 'Taro Milk Tea',
    price: 3.50,
    category: 'Drinks',
    tags: ['Milk Tea']
  },
  {
    id: 'd4',
    title: 'Strawberry Milk Tea',
    price: 3.50,
    category: 'Drinks',
    tags: ['Milk Tea']
  },
  // DRINKS - FRUIT TEA
  {
    id: 'd5',
    title: 'Passion Fruit Tea',
    price: 3.50,
    category: 'Drinks',
    tags: ['Fruit Tea']
  },
  {
    id: 'd6',
    title: 'Lychee Tea',
    price: 3.50,
    category: 'Drinks',
    tags: ['Fruit Tea']
  },
  // DRINKS - SLUSH
  {
    id: 'd7',
    title: 'Mango Slush',
    price: 4.25,
    category: 'Drinks',
    tags: ['Slush']
  },
  {
    id: 'd8',
    title: 'Taro Milk Shake',
    price: 4.25,
    category: 'Drinks',
    tags: ['Slush']
  }
];

const Menu = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('Ramen');
  const [selectedItem, setSelectedItem] = useState<MenuItemData | null>(null);
  const [selectedModifiers, setSelectedModifiers] = useState<Record<string, Set<string>>>({});

  // Filter items
  const filteredItems = MENU_ITEMS.filter(item => item.category === activeCategory);
  
  // For drinks, we might want to group them by tag if we are in Drinks category
  const isDrinks = activeCategory === 'Drinks';
  const drinkGroups = isDrinks ? {
    'Milk Tea': filteredItems.filter(i => i.tags?.includes('Milk Tea')),
    'Fruit Tea': filteredItems.filter(i => i.tags?.includes('Fruit Tea')),
    'Slush': filteredItems.filter(i => i.tags?.includes('Slush'))
  } : {};

  const categories = ['Ramen', 'Poke', 'Snacks', 'Drinks'];

  // Reset modifiers when item opens
  useEffect(() => {
    if (selectedItem) {
      const initialModifiers: Record<string, Set<string>> = {};
      
      // Auto-select first option for required radio groups if desired, or leave empty
      selectedItem.modifierGroups?.forEach(group => {
        if (group.required && (group.type === 'radio' || group.type === 'select') && group.options.length > 0) {
           initialModifiers[group.name] = new Set([group.options[0].name]);
        }
      });
      
      setSelectedModifiers(initialModifiers);
    } else {
      setSelectedModifiers({});
    }
  }, [selectedItem]);

  const handleModifierChange = (groupName: string, modifierName: string, type: 'radio' | 'select' | 'checkbox') => {
    setSelectedModifiers(prev => {
      const newModifiers = { ...prev };
      
      if (type === 'radio' || type === 'select') {
        newModifiers[groupName] = new Set([modifierName]);
      } else {
        if (!newModifiers[groupName]) newModifiers[groupName] = new Set();
        const groupSet = new Set(newModifiers[groupName]);
        if (groupSet.has(modifierName)) {
          groupSet.delete(modifierName);
        } else {
          groupSet.add(modifierName);
        }
        newModifiers[groupName] = groupSet;
      }
      
      return newModifiers;
    });
  };


  return (
    <div className="pb-32 bg-background-light dark:bg-background-dark min-h-screen">
      <header className="px-6 py-4 flex items-center justify-between sticky top-0 bg-primary z-50 shadow-md h-16">
        <button onClick={() => navigate('/')} className="p-2 -ml-2 text-white hover:bg-white/10 rounded-full transition-colors">
          <span className="material-icons text-xl">arrow_back_ios</span>
        </button>
        <h1 className="font-display text-xl font-bold text-white tracking-widest uppercase absolute left-1/2 -translate-x-1/2">MENU</h1>
        <div className="flex items-center gap-1 text-white"></div>
      </header>

      {/* Category Scroll */}
      <div className="sticky top-16 z-40 bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-gray-800 shadow-sm">
        <div className="flex overflow-x-auto no-scrollbar py-3 px-4 gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold font-display uppercase tracking-widest whitespace-nowrap transition-all ${
                activeCategory === cat 
                  ? 'bg-primary text-white shadow-lg scale-105' 
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      
      <main className="pt-6 px-4">
        {/* Special Header for Drinks */}
        {isDrinks && (
           <div className="mb-8 rounded-3xl bg-primary p-6 text-white relative overflow-hidden shadow-lg">
             <div className="relative z-10">
               <h2 className="font-display text-2xl font-bold uppercase mb-4">How to Customize?</h2>
               <div className="space-y-2 text-sm font-bold font-body opacity-90">
                 <div className="flex gap-3 items-center"><span className="w-6 h-6 rounded-full bg-white text-primary flex items-center justify-center text-xs">1</span> Choose Drink</div>
                 <div className="flex gap-3 items-center"><span className="w-6 h-6 rounded-full bg-white text-primary flex items-center justify-center text-xs">2</span> Choose Size (M/L)</div>
                 <div className="flex gap-3 items-center"><span className="w-6 h-6 rounded-full bg-white text-primary flex items-center justify-center text-xs">3</span> Sugar Level</div>
                 <div className="flex gap-3 items-center"><span className="w-6 h-6 rounded-full bg-white text-primary flex items-center justify-center text-xs">4</span> Ice Level</div>
                 <div className="flex gap-3 items-center"><span className="w-6 h-6 rounded-full bg-white text-primary flex items-center justify-center text-xs">5</span> Toppings</div>
               </div>
             </div>
             <span className="material-symbols-outlined absolute -bottom-4 -right-4 text-[140px] opacity-10 rotate-12">local_cafe</span>
           </div>
        )}

        <div className="space-y-8">
          {isDrinks ? (
            Object.entries(drinkGroups).map(([groupName, items]) => (
              items.length > 0 && (
                <section key={groupName}>
                  <h3 className="font-display text-xl text-primary font-bold uppercase tracking-wide mb-4 border-b border-primary/20 pb-2">{groupName}</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {items.map(item => (
                      <MenuItem 
                        key={item.id} 
                        item={item} 
                        onCustomize={() => setSelectedItem(item)}
                      />
                    ))}
                  </div>
                </section>
              )
            ))
          ) : (
            <div className="space-y-6">
              {filteredItems.map(item => (
                <MenuItem 
                  key={item.id} 
                  item={item} 
                  onCustomize={() => setSelectedItem(item)}
                />
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Customize Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center pointer-events-none">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm pointer-events-auto transition-opacity" onClick={() => setSelectedItem(null)}></div>
          <div className="bg-white dark:bg-slate-900 w-full max-w-md h-[85vh] sm:h-[80vh] sm:rounded-3xl rounded-t-3xl shadow-2xl flex flex-col pointer-events-auto overflow-hidden animate-slide-up">
            <div className="relative h-48 shrink-0">
               {selectedItem.image ? (
                 <img src={selectedItem.image} className="w-full h-full object-cover" alt={selectedItem.title} />
               ) : (
                 <div className="w-full h-full bg-primary/20 flex items-center justify-center">
                   <span className="material-symbols-outlined text-6xl text-primary/40">restaurant</span>
                 </div>
               )}
               <button 
                 onClick={() => setSelectedItem(null)}
                 className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center backdrop-blur-md transition-colors"
               >
                 <span className="material-symbols-outlined">close</span>
               </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6">
              <div className="mb-6">
                <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white uppercase leading-tight mb-2">{selectedItem.title}</h2>
                <p className="text-primary font-bold text-xl">${typeof selectedItem.price === 'number' ? selectedItem.price.toFixed(2) : selectedItem.price}</p>
                {selectedItem.description && <p className="mt-2 text-slate-500 text-sm leading-relaxed">{selectedItem.description}</p>}
              </div>

              {selectedItem.modifierGroups ? (
                <div className="space-y-8">
                  {selectedItem.modifierGroups.map((group, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="font-display font-bold text-slate-800 dark:text-white uppercase tracking-wider text-sm">{group.name}</h3>
                        {group.required && <span className="text-[10px] font-bold bg-slate-100 text-slate-500 px-2 py-0.5 rounded uppercase">Required</span>}
                      </div>
                      <div className="space-y-2">
                        {group.options.map((opt, optIdx) => {
                          const isSelected = selectedModifiers[group.name]?.has(opt.name) || false;
                          return (
                            <label key={optIdx} className={`flex items-center justify-between p-3 rounded-xl border transition-all cursor-pointer group ${isSelected ? 'border-primary bg-primary/5' : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800'}`}>
                              <div className="flex items-center gap-3">
                                <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${isSelected ? 'border-primary bg-primary' : 'border-slate-300'}`}>
                                   {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                                </div>
                                <input 
                                  type={group.type === 'select' ? 'radio' : group.type} 
                                  name={`group-${idx}`} 
                                  className="hidden"
                                  checked={isSelected}
                                  onChange={() => handleModifierChange(group.name, opt.name, group.type)}
                                />
                                <span className={`text-sm font-bold transition-colors ${isSelected ? 'text-primary' : 'text-slate-700 dark:text-slate-300'}`}>{opt.name}</span>
                              </div>
                              {opt.price && <span className="text-xs font-bold text-slate-500">+{opt.price.toFixed(2)}</span>}
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-slate-400">
                  <span className="material-symbols-outlined text-4xl mb-2">check_circle</span>
                  <p className="text-sm font-bold">No customization available</p>
                </div>
              )}
            </div>

            <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shrink-0">
               <button 
                 onClick={() => setSelectedItem(null)}
                 className="w-full bg-primary text-white font-bold font-display uppercase tracking-widest py-4 rounded-2xl shadow-xl shadow-primary/20 hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center px-6"
               >
                 <span>Back to Menu</span>
               </button>
            </div>
          </div>
        </div>
      )}
      
      <div className="fixed bottom-28 right-6 z-40">
        <button className="bg-secondary text-white w-14 h-14 rounded-2xl shadow-xl shadow-secondary/30 flex items-center justify-center hover:scale-105 transition-transform">
          <span className="material-icons text-2xl">tune</span>
        </button>
      </div>
    </div>
  );
};

const MenuItem: React.FC<{ item: MenuItemData; onCustomize: () => void }> = ({ item, onCustomize }) => (
  <div 
    onClick={onCustomize}
    className="group bg-white dark:bg-slate-800 p-3 rounded-[20px] shadow-sm border border-slate-100 dark:border-slate-700 flex gap-4 cursor-pointer hover:shadow-md transition-all active:scale-[0.99]"
  >
    {item.image ? (
      <img alt={item.title} className="w-24 h-24 rounded-2xl object-cover shadow-sm group-hover:brightness-110 transition-all" src={item.image} />
    ) : (
      <div className="w-24 h-24 rounded-2xl bg-gray-100 dark:bg-slate-700 flex items-center justify-center text-slate-300">
        <span className="material-symbols-outlined text-3xl">restaurant</span>
      </div>
    )}
    <div className="flex-1 py-1">
      <div className="flex justify-between items-start mb-1">
        <h3 className="font-display font-bold text-base leading-tight text-slate-900 dark:text-white uppercase pr-2">{item.title}</h3>
        <span className="font-body text-primary font-bold text-sm whitespace-nowrap">${typeof item.price === 'number' ? item.price.toFixed(2) : item.price}</span>
      </div>
      {item.description && <p className="text-xs text-slate-500 dark:text-slate-400 leading-snug mb-3 line-clamp-2">{item.description}</p>}
      <button className="text-[10px] font-bold text-secondary flex items-center gap-1 uppercase tracking-wider group-hover:text-primary transition-colors">
        <span className="material-icons text-sm">info</span>
        {item.modifierGroups ? 'VIEW OPTIONS' : 'VIEW DETAILS'}
      </button>
    </div>
  </div>
);

export default Menu;