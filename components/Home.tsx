import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="pb-24">
      <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="px-4 py-3 flex items-center justify-between">
          <h1 className="font-display font-bold text-xl tracking-tighter text-primary">MITSUBA</h1>
          <div className="flex items-center space-x-5">
            <span className="material-symbols-outlined text-2xl text-slate-600 dark:text-slate-300">search</span>
            <Link to="/contact" className="relative flex items-center" aria-label="Contact Mitsuba">
              <span className="material-symbols-outlined text-2xl text-slate-600 dark:text-slate-300">contact_support</span>
            </Link>
          </div>
        </div>
        <div className="px-4 pb-3 flex space-x-3">
          <a 
            href="https://www.onlineorder.abcpos.com/Mitsuba/abb5b349f05741f5b06eab726db1aa60"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2.5 px-4 rounded-full text-xs font-bold font-display bg-primary text-white shadow-lg flex items-center justify-center space-x-2 active:scale-95 transition-transform"
          >
            <span className="material-symbols-outlined text-sm">shopping_bag</span>
            <span>ORDER ONLINE</span>
          </a>
          <Link to="/menu" className="flex-1 py-2.5 px-4 rounded-full text-xs font-bold font-display bg-white dark:bg-slate-800 text-slate-500 border border-slate-200 dark:border-slate-700 flex items-center justify-center space-x-2 active:scale-95 transition-transform">
            <span className="material-symbols-outlined text-sm">restaurant_menu</span>
            <span>VIEW MENU</span>
          </Link>
        </div>
      </header>
      
      <main className="p-4 space-y-6">
        {/* Card 1 */}
        <div className="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-md border border-slate-100 dark:border-slate-700 group">
          <div className="relative h-72 cursor-pointer" onClick={() => navigate('/menu')}>
            <img alt="Special Ramen Bowl" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBb2NOoIS7oGSl_VqccxG-mDkEJz98hmutvDPn_VEXp4WCWz8yDRHbRr6GFm0oV1m5lLlr5X6_sfHNO1uNwwfpjUjpLhpo8mOuQpJVvdApqwOzBX3-UGwbsXWQMqHcQzgSew4AsOcmcydmFdItp-jO87LsdG_fMvT3nuNcjV5_cYxLqN76TnBK0lvocejusBflTC_fIIkQt983z7DKby_fCSRWs9wcaIJRZkJJo3IzwyUXWzSMkUqIEr28KY6PjlrNraQHCj3fn-8KF" />
            <div className="absolute top-4 left-4 bg-secondary text-slate-800 px-3 py-1.5 rounded-lg text-[10px] font-bold font-display uppercase tracking-wider shadow-sm">
              Popular Choice
            </div>
            <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm dark:bg-slate-900/95 text-slate-900 dark:text-white px-3 py-1.5 rounded-lg font-bold shadow-sm font-display">
              $11.95
            </div>
          </div>
          <div className="p-6">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-display text-2xl font-bold leading-none text-slate-800 dark:text-white">Tonkatsu Ramen</h3>
              <div className="flex items-center text-yellow-500">
                <span className="material-symbols-outlined text-sm fill-1">star</span>
                <span className="text-xs font-bold ml-1">4.9</span>
              </div>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8">
              Pork ramen, chasu (roasted pork belly), kikurage, eggs, green onion, menma (bamboo) and narutomaki.
            </p>
            <div className="flex gap-3">
              <button onClick={() => navigate('/menu')} className="flex-1 bg-secondary text-slate-800 shadow-md font-bold py-3.5 rounded-2xl font-display text-xs uppercase tracking-widest hover:brightness-105 transition-all active:scale-95">
                View Menu
              </button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-md border border-slate-100 dark:border-slate-700 group">
          <div className="relative h-72 cursor-pointer" onClick={() => navigate('/menu')}>
            <img alt="Poke Bowl" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcKGJiw4FA-Z5l0NwJJT934SsMx1vxssXql5QQKqHAy314181Fjz6fCnbUzbW2xNaaMG8s-UWXut8zPYqyIYapyaK8RAKr-X_O-SHJz4vbXchKNqVPOBtGRNKgvT_HffNWxG-jTBit61Ql-NbesgnIogP4R2yLh21TgLcNIfvpVQW-k1lNoccMcSZxFYgU-Wh6iagp_J7bWwh_59w7eN4b4G_RJtYAxi6NIjpCsuWDAk7LihumuSU0rukrHy8DrULOn8EOHoQB48rL" />
            <div className="absolute top-4 left-4 bg-secondary text-slate-800 px-3 py-1.5 rounded-lg text-[10px] font-bold font-display uppercase tracking-wider shadow-sm">
              Fresh & Spicy
            </div>
            <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm dark:bg-slate-900/95 text-slate-900 dark:text-white px-3 py-1.5 rounded-lg font-bold shadow-sm font-display">
              $10.95
            </div>
          </div>
          <div className="p-6">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-display text-2xl font-bold leading-none text-slate-800 dark:text-white">Wasabi Shrimp</h3>
              <div className="flex items-center text-yellow-500">
                <span className="material-symbols-outlined text-sm fill-1">star</span>
                <span className="text-xs font-bold ml-1">4.7</span>
              </div>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8">
              Chili shrimp, green and sweet onion, cucumber, masago (fish egg), sesame seeds, wasabi aioli.
            </p>
            <div className="flex gap-3">
              <button onClick={() => navigate('/menu')} className="flex-1 bg-secondary text-slate-800 shadow-md font-bold py-3.5 rounded-2xl font-display text-xs uppercase tracking-widest hover:brightness-105 transition-all active:scale-95">
                View Menu
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;