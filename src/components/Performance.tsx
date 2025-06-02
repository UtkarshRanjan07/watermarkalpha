import LivePerformanceChart from './LivePerformanceChart';

const Performance = () => {
  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="gold-gradient">Benchmark Selection</span>
        </h2>
        <p className="text-center text-zinc-400 mb-12 max-w-2xl mx-auto">
        Watermark Alpha’s target is for client’s returns to surpass Bitcoin, Nasdaq-100, and Nifty 50.
        </p>
        
        <LivePerformanceChart />
      </div>
    </section>
  );
};

export default Performance;