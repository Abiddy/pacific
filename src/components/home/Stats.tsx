export function Stats() {
  return (
    <section className="py-8 md:py-12 border-y border-black/5 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 md:gap-12">
          {/* Item 1 */}
          <div className="text-center space-y-1 md:space-y-2">
            <p className="text-3xl md:text-5xl font-bold text-black tracking-tighter">25+</p>
            <p className="text-[9px] md:text-xs font-bold text-black/40 uppercase tracking-[0.15em] md:tracking-[0.2em] px-2">Years Experience</p>
          </div>
          
          {/* Item 2 */}
          <div className="text-center space-y-1 md:space-y-2 border-l border-black/5">
            <p className="text-3xl md:text-5xl font-bold text-black tracking-tighter">5yr</p>
            <p className="text-[9px] md:text-xs font-bold text-black/40 uppercase tracking-[0.15em] md:tracking-[0.2em] px-2">Min. Warranty</p>
          </div>
          
          {/* Item 3 */}
          <div className="text-center space-y-1 md:space-y-2 border-t md:border-t-0 md:border-l border-black/5 pt-8 md:pt-0 lg:border-l lg:border-black/5">
            <p className="text-3xl md:text-5xl font-bold text-black tracking-tighter">100%</p>
            <p className="text-[9px] md:text-xs font-bold text-black/40 uppercase tracking-[0.15em] md:tracking-[0.2em] px-2">Free Estimates</p>
          </div>
          
          {/* Item 4 */}
          <div className="text-center space-y-1 md:space-y-2 border-t md:border-t-0 border-l border-black/5 pt-8 md:pt-0">
            <p className="text-3xl md:text-5xl font-bold text-black tracking-tighter">A+</p>
            <p className="text-[9px] md:text-xs font-bold text-black/40 uppercase tracking-[0.15em] md:tracking-[0.2em] px-2">Customer Care</p>
          </div>
        </div>
      </div>
    </section>
  );
}
