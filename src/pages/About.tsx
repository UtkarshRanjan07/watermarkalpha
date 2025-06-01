import { Button } from '@/components/ui/button';
import { ExternalLink, Linkedin, Twitter } from 'lucide-react';

const founderData = [
  {
    name: 'Harsh Dalmia',
    title: 'Co-Founder, Chairman & MD',
    image: '/lovable-uploads/Harsh.jpeg',
    bio: `Harsh Dalmia brings over 25 years of distinguished experience in investment banking and financial services. A recognized leader in wealth management innovation, he has served ultra-high-net-worth individuals and family offices globally, crafting bespoke solutions that integrate traditional and emergent asset classes.

With a proven record of syndicating over $3 billion for Indian corporates through complex fundraising and deal structuring, Harsh founded Watermark Capital in 2000, establishing it as a leader in debt syndication and asset management.

An early adopter of crypto since 2016, Harsh has developed sophisticated digital asset allocation and risk management methodologies, underpinned by rigorous market analysis. This expertise culminated in the creation of Watermark Alpha, offering clients compliant, risk-managed exposure to digital assets.

Harsh holds a Bachelor of Business Administration in Economics and Entrepreneurship from Babson College (2000) and is certified by the Securities and Exchange Board of India (SEBI) via the NISM examination. He is an active member of the Punjab and Haryana Chamber of Commerce and Industry and TiE Mumbai, driving economic advancement through technological innovation.`,
    linkedin: 'https://www.linkedin.com/in/harsh-dalmia-9696711b7/'
  },
  {
    name: 'Kushaal Patel',
    title: 'Co-Founder, CEO',
    image: '/lovable-uploads/Kushaal.jpeg',
    bio: `Kushaal Patel has been a pioneering force in the Web3 and crypto space since 2016. Since 2019, he has served as a trusted advisor to high-net-worth individuals and family offices, guiding them through the complexities of digital asset investment.

Prior to founding Watermark Alpha, Kushaal led a private crypto advisory specializing in jurisdiction-specific on/off-ramping, advanced custody solutions, compliance frameworks, risk-adjusted strategies, and deep market research. He also served as Chief Operating Officer at EDDAVerse, a leading Web3 enabler and IP holder, where he oversaw strategic growth and innovation.

Kushaal champions a disciplined, conviction-based approach to digital asset allocation, favoring targeted sectoral exposure over excessive diversification to capitalize on high-conviction opportunities. By integrating traditional finance principles with cutting-edge digital asset strategies, he ensures robust, risk-managed portfolios that deliver consistent value.

Recognized as a thought leader in India’s crypto landscape, Kushaal contributed to the G20 panel on blockchain during India’s presidency, shaping the dialogue around regulation and innovation. Throughout his career, he has remained dedicated to bridging the gap between conventional wealth management and the rapidly evolving digital asset ecosystem.`,
    linkedin: 'https://www.linkedin.com/in/thekushaalpatel/',
    twitter: 'https://x.com/KushaalPatel'
  }
];

const About = () => {
  return (
    <main className="bg-black text-white pt-20">
      {/* Vision Section */}
      <section className="section">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="gold-gradient">Our Vision</span>
              </h1>
              <p className="text-xl text-zinc-300 mb-8">
                We deliver advice that bridges traditional wealth management principles with digital asset opportunities.
              </p>

              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-watermark-gold to-watermark-goldLight rounded-lg blur opacity-25"></div>
                <div className="relative bg-zinc-900 border border-zinc-800 rounded-lg p-8">
                  <h2 className="text-2xl font-bold mb-4">Why Watermark Alpha?</h2>

                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 bg-watermark-gold rounded-full flex items-center justify-center text-black font-bold mr-3 mt-0.5">✓</span>
                      <div>
                        <h3 className="font-semibold text-white">Experienced Leadership</h3>
                        <p className="text-zinc-400">Team of seasoned professionals with deep and extensive market expertise</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 bg-watermark-gold rounded-full flex items-center justify-center text-black font-bold mr-3 mt-0.5">✓</span>
                      <div>
                        <h3 className="font-semibold text-white">Proven Strategies</h3>
                        <p className="text-zinc-400">A data-driven, research-backed approach to crypto investing</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 bg-watermark-gold rounded-full flex items-center justify-center text-black font-bold mr-3 mt-0.5">✓</span>
                      <div>
                        <h3 className="font-semibold text-white">Tax-Efficient Structures</h3>
                        <p className="text-zinc-400">Optimised for long-term capital efficiency</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 bg-watermark-gold rounded-full flex items-center justify-center text-black font-bold mr-3 mt-0.5">✓</span>
                      <div>
                        <h3 className="font-semibold text-white">Control of Assets</h3>
                        <p className="text-zinc-400">Watermark Alpha does not act as an asset manager, client funds continue to remain in complete control and discretion of the client.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-watermark-goldDark to-watermark-gold rounded-xl blur opacity-30"></div>
              <img
                src="https://images.unsplash.com/photo-1605792657660-596af9009e82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2204&q=80"
                alt="Digital Asset Management"
                className="relative rounded-xl object-cover w-full h-[500px] hidden md:block"
              />

            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="section bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            <span className="gold-gradient">Meet the Founders</span>
          </h2>

          <div className="space-y-24">
            {founderData.map((founder, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12`}>
                <div className="w-full md:w-1/3">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-watermark-goldDark to-watermark-gold rounded-xl blur opacity-30"></div>
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="relative w-full h-[400px] object-cover object-center rounded-xl"
                    />
                  </div>
                  <div className="mt-6 space-y-4">
                    <h3 className="text-2xl font-bold">{founder.name}</h3>
                    <p className="text-watermark-gold">{founder.title}</p>
                    <div className="flex space-x-3">
                      {founder.linkedin && (
                        <Button asChild variant="outline" size="icon" className="rounded-full border-zinc-700 hover:border-watermark-gold hover:bg-transparent">
                          <a href={founder.linkedin} target="_blank" rel="noreferrer">
                            <Linkedin size={18} className="text-zinc-400 hover:text-watermark-gold" />
                          </a>
                        </Button>
                      )}
                      {founder.twitter && (
                        <Button asChild variant="outline" size="icon" className="rounded-full border-zinc-700 hover:border-watermark-gold hover:bg-transparent">
                          <a href={founder.twitter} target="_blank" rel="noreferrer">
                            <Twitter size={18} className="text-zinc-400 hover:text-watermark-gold" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <div className="bg-zinc-800 rounded-xl p-8 h-full">
                    <div className="space-y-6">
                      {founder.bio.split('\n\n').map((paragraph, i) => (
                        <p key={i} className="text-zinc-300 leading-relaxed">{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
