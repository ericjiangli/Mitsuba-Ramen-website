import React from 'react';
import { useNavigate } from 'react-router-dom';
import syracuseImg from '../syracuse-location.png';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-brand-dark text-gray-800 dark:text-gray-100 font-body antialiased min-h-screen">
      <div className="flex flex-col">
        <header className="bg-primary h-16 sticky top-0 z-50 flex items-center px-4 shrink-0 shadow-md">
          <button onClick={() => navigate('/')} className="text-white flex items-center justify-center h-12 w-12 -ml-2 active:opacity-50 transition-opacity hover:bg-white/10 rounded-full">
            <span className="material-symbols-outlined text-[32px]">chevron_left</span>
          </button>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <h1 className="text-white text-base font-display font-bold uppercase tracking-wider">About Us</h1>
          </div>
        </header>

        <main className="px-6 space-y-8 mt-8 flex-grow pb-12">
          <section className="relative rounded-[32px] overflow-hidden shadow-lg h-56 bg-gray-200">
            <img alt="Mitsuba Kitchen and Staff" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2axBl-giFo75wNgGJuIFu3D--64myWXHitIM7qJxAlqt_9o6a5hHdSzMDn3V3AcBJX58ueE3iuyjyPkG4OnU9IxdUKbMK3HuqeflWIiYwFwH3j5-MgwHNfEurWK3kPCEnISm42ASIP4xbYYWSVmh4zQ69aM9XBqH2RRIVVoj1KjmQcfterksDxcSb6Cd1CGDZInEILUOBsmQ_KuSUjg9FSAni-LSiI_t6DaSF9-pULIScM8W1LjQ85WcV3blq4reU-bRqqpoVKEmp" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
              <p className="text-white text-sm italic font-medium font-body">"Crafting every bowl with a piece of our heart."</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-display font-bold text-primary flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">history_edu</span>
              Our Story
            </h2>
            <div className="font-body text-gray-600 dark:text-gray-300 leading-relaxed text-[15px]">
              <p>
                Born from a passion for authentic Japanese flavors, Mitsuba began as a small family dream. Our journey started with a simple mission: to bring the comforting warmth of traditional ramen and the vibrant freshness of poke bowls to our local community.
              </p>
              <p className="mt-4">
                The name <span className="text-primary font-bold">Mitsuba</span> (Japanese parsley) represents our commitment to natural ingredients and the harmony of flavors that defines our kitchen.
              </p>
            </div>
          </section>

          <section className="bg-[#F4F7EE] dark:bg-primary/5 rounded-[40px] p-8 border border-primary/10">
            <h2 className="text-2xl font-display font-bold text-primary mb-8 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">eco</span>
              Our Philosophy
            </h2>
            <div className="grid grid-cols-1 gap-8">
              <div className="flex gap-5">
                <div className="bg-primary text-white p-2 rounded-[14px] h-12 w-12 flex items-center justify-center shrink-0 shadow-sm">
                  <span className="material-symbols-outlined">restaurant</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-gray-900 dark:text-white leading-tight font-body">Traditional Soul</h3>
                  <p className="text-[14px] text-gray-600 dark:text-gray-400 leading-snug font-body">Our broths are simmered for over 12 hours using time-honored techniques to achieve the perfect richness.</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="bg-primary text-white p-2 rounded-[14px] h-12 w-12 flex items-center justify-center shrink-0 shadow-sm">
                  <span className="material-symbols-outlined">set_meal</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-gray-900 dark:text-white leading-tight font-body">Pristine Freshness</h3>
                  <p className="text-[14px] text-gray-600 dark:text-gray-400 leading-snug font-body">For our poke bowls, we source only the highest grade sustainable seafood and seasonal greens daily.</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="bg-primary text-white p-2 rounded-[14px] h-12 w-12 flex items-center justify-center shrink-0 shadow-sm">
                  <span className="material-symbols-outlined">groups</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-gray-900 dark:text-white leading-tight font-body">Community First</h3>
                  <p className="text-[14px] text-gray-600 dark:text-gray-400 leading-snug font-body">Mitsuba is a place for everyone. We strive to create an atmosphere as welcoming as a home kitchen.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="pb-8">
            <div className="flex justify-between items-end mb-4">
              <h2 className="text-xl font-display font-bold text-primary">Visit Our Space</h2>
              <span className="text-[10px] font-display uppercase tracking-widest text-gray-400 font-bold">2 Locations</span>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-4 -mx-2 px-2 snap-x no-scrollbar">
              <div className="min-w-[260px] h-36 rounded-2xl bg-gray-200 snap-start overflow-hidden relative shadow-sm">
                <img alt="New Hartford Dining Hall" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9e9UuYynkDNhhS1Bd1aSyBxhOSGeHASjIR4P1sRezFUkBV7wzNPHKZM96n4OpYi1aeOe9gcAHCQVCbtxiof5Yaoje0ZyMIfDiTtuxD8JZd_o5n3DeXhOhkyiTqoXymdsngLBMTg6w-RS5E_do1dopU_5zma8Qi3bYPS9YhPlgJ_0xy2Ym3ZlZasU_PIn5S65G98YtKTldDd6iUAh0PWjht3WuFC4e4ievZwc-Mr23x1sSsB6gwanSF--myf3N-7VncQsMZ-MvoAzn" />
                <div className="absolute bottom-3 left-3 bg-black/60 px-3 py-1 rounded-full text-[10px] text-white font-bold backdrop-blur-sm">New Hartford</div>
              </div>
              <div className="min-w-[260px] h-36 rounded-2xl bg-gray-200 snap-start overflow-hidden relative shadow-sm">
                <img alt="Syracuse Dining Hall" className="w-full h-full object-cover" src={syracuseImg} />
                <div className="absolute bottom-3 left-3 bg-black/60 px-3 py-1 rounded-full text-[10px] text-white font-bold backdrop-blur-sm">Syracuse</div>
              </div>
            </div>
          </section>

          <section className="pb-8">
            <button onClick={() => navigate('/contact')} className="w-full bg-primary hover:bg-opacity-90 text-white font-display font-bold py-4 rounded-full shadow-lg flex items-center justify-center gap-2 transition-all active:scale-95">
              <span className="material-symbols-outlined text-xl">map</span>
              <span>FIND A LOCATION NEAR YOU</span>
            </button>
          </section>
        </main>
      </div>
    </div>
  );
};

export default About;