import React from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-brand-dark text-gray-800 dark:text-gray-100 min-h-screen pb-24">
      <header className="sticky top-0 z-50 bg-primary h-[64px] flex items-center px-4 shadow-md">
        <div className="flex-1 flex items-center">
          <button onClick={() => navigate('/')} className="text-white p-2 -ml-2 hover:bg-white/10 rounded-full transition-colors">
            <span className="material-icons">chevron_left</span>
          </button>
        </div>
        <div className="flex-none">
          <h1 className="text-white text-lg font-bold tracking-widest font-display uppercase">CONTACT US</h1>
        </div>
        <div className="flex-1 flex justify-end">
          <div className="w-10"></div>
        </div>
      </header>

      <main className="max-w-md mx-auto p-4 space-y-6">
        <div className="relative w-full rounded-[2.5rem] overflow-hidden shadow-xl bg-white p-3">
          <div className="rounded-[2rem] overflow-hidden relative">
            <img alt="Map showing restaurant locations" className="w-full h-80 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1XFPVvQsAdrFysqkZEdDdi2GtuXm8X0eHEe_0IIKcN7cFPYfJdWDK4wzCJsNQKoliiuRnYczXuro8-3rXqK9UTA3qp0yn-pYBMysrevB2Ls9-O1IGPLc7Jib0PjGRco5pyfRZlWkL-_BIdjJtcE1kSVSgNfpMswsjfyp-Rpv4W3UZ-BvTJ2z_FAAik3ToQMAhqDUZ05a3sPieb2QDyuINEV8I-7L63H5DKG-Pb9A3OqLVEY9CuynMMKDtdV_iNPbIW2BsnZQRmFD3" />
            <div className="absolute bottom-4 right-4">
              <button className="bg-white text-primary p-2.5 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                <span className="material-icons text-xl">directions</span>
              </button>
            </div>
          </div>
        </div>

        <div className="bg-[#F2F6EC] dark:bg-gray-800/50 p-6 rounded-[2.5rem] border border-primary/5 space-y-4 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="bg-primary p-3 rounded-xl text-white shadow-sm shrink-0">
              <span className="material-icons text-2xl">location_on</span>
            </div>
            <div className="flex-1">
              <h2 className="font-bold text-primary text-xl font-display mb-4 tracking-wider">LOCATIONS</h2>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-start">
                    <p className="text-[11px] text-primary/70 font-bold uppercase font-display mb-1">NEW HARTFORD</p>
                    <span className="text-[8px] font-bold bg-primary/10 text-primary px-2 py-0.5 rounded-full uppercase tracking-wider font-body">Online Order Ready</span>
                  </div>
                  <p className="text-gray-900 dark:text-gray-200 text-base leading-tight font-bold font-body">
                    4759 Commercial Dr,<br />
                    Suite 500, New Hartford, NY 13413
                  </p>
                  <div className="flex items-center gap-1 mt-1.5 mb-3">
                    <span className="material-icons text-primary text-sm">phone</span>
                    <a href="tel:(315)765-0787" className="text-sm text-primary font-bold hover:underline">(315) 765-0787</a>
                  </div>
                  <a 
                    href="https://www.onlineorder.abcpos.com/Mitsuba/abb5b349f05741f5b06eab726db1aa60" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-primary hover:bg-opacity-90 text-white font-bold py-2 px-4 rounded-xl shadow-md transition-all active:scale-[0.98] font-display text-[10px] uppercase tracking-widest gap-1"
                  >
                    <span className="material-icons text-xs">shopping_bag</span>
                    Order Online
                  </a>
                </div>

                <div className="pt-6 border-t border-gray-200/50 dark:border-gray-700">
                  <div className="flex justify-between items-start">
                    <p className="text-[11px] text-gray-400 font-bold uppercase font-display mb-1">SYRACUSE</p>
                    <span className="text-[8px] font-bold bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full uppercase tracking-wider font-body border border-gray-200">Phone Order Only</span>
                  </div>
                  <p className="text-gray-900 dark:text-gray-200 text-base leading-tight font-bold font-body">
                    3206 Erie Blvd E,<br />
                    Syracuse, NY 13214
                  </p>
                  <div className="flex items-center gap-1 mt-1.5">
                    <span className="material-icons text-gray-400 text-sm">phone</span>
                    <a href="tel:(315)373-0038" className="text-sm text-primary font-bold hover:underline">(315) 373-0038</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] shadow-sm border border-gray-100 dark:border-gray-700">
          <h2 className="font-display text-xl text-primary mb-8 text-center tracking-widest font-bold">HOURS OF OPERATION</h2>
          <div className="space-y-5 font-body">
            <div className="flex justify-between items-center">
              <span className="text-base font-bold text-gray-700 dark:text-gray-300">Mon - Thu</span>
              <span className="text-base font-bold">11:00 AM - 9:30 PM</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-base font-bold text-gray-700 dark:text-gray-300">Fri - Sat</span>
              <span className="text-base font-bold text-primary">11:00 AM - 10:30 PM</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-base font-bold text-gray-700 dark:text-gray-300">Sun</span>
              <span className="text-base font-bold">12:00 PM - 9:00 PM</span>
            </div>
          </div>
        </div>

        <div className="space-y-4 pt-4">
          <h2 className="font-display text-xl text-primary font-bold tracking-widest">SEND A MESSAGE</h2>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input className="w-full bg-white dark:bg-gray-800 border-none rounded-2xl py-5 px-6 text-sm shadow-sm focus:ring-2 focus:ring-primary placeholder:text-gray-500 font-bold font-body" placeholder="Your Name" type="text" />
            <input className="w-full bg-white dark:bg-gray-800 border-none rounded-2xl py-5 px-6 text-sm shadow-sm focus:ring-2 focus:ring-primary placeholder:text-gray-500 font-bold font-body" placeholder="Email Address" type="email" />
            <textarea className="w-full bg-white dark:bg-gray-800 border-none rounded-2xl py-5 px-6 text-sm shadow-sm focus:ring-2 focus:ring-primary placeholder:text-gray-500 font-bold font-body" placeholder="How can we help you?" rows={5}></textarea>
            <button className="w-full bg-primary hover:bg-opacity-90 text-white font-bold py-5 rounded-2xl transition-all shadow-xl active:scale-[0.98] font-display text-lg uppercase tracking-widest" type="submit">
              Send Inquiry
            </button>
          </form>
        </div>

        <div className="flex flex-col items-center gap-6 pt-10 pb-8">
          <div className="flex gap-8">
            <a className="w-14 h-14 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-xl text-primary hover:scale-110 transition-transform" href="#">
              <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
            </a>
            <a className="w-14 h-14 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-xl text-primary hover:scale-110 transition-transform" href="#">
              <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg>
            </a>
            <a className="w-14 h-14 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-xl text-primary hover:scale-110 transition-transform" href="#">
              <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
            </a>
          </div>
          <p className="text-[10px] text-gray-400 font-bold uppercase font-display tracking-widest">© 2024 Mitsuba Ramen & Poke Bowl</p>
        </div>
      </main>
    </div>
  );
};

export default Contact;