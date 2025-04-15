import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, Send, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    const message = messageRef.current?.value || '';
    const wordCount = message.trim().split(/\s+/).length;
    if (wordCount > 60) {
      toast({
        title: 'Message too long',
        description: 'Please limit your message to 60 words.',
        variant: 'destructive',
      });
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(
        'service_zr4kh69',        // your EmailJS service ID
        'template_13pmy4u',       // your template ID
        formRef.current,
        { publicKey: 'n0UaB0mDzQZF9eAUx' } // your public key
      )
      .then(() => {
        toast({
          title: 'Message sent successfully',
          description: "We'll get back to you as soon as possible.",
        });

        formRef.current?.reset();
        setLoading(false);
      })
      .catch((error) => {
        toast({
          title: 'Failed to send message',
          description: error.text || 'Something went wrong.',
          variant: 'destructive',
        });
        setLoading(false);
      });
  };

  return (
    <main className="bg-black text-white pt-20">
      <section className="section">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center">
            <span className="gold-gradient">Get in Touch</span>
          </h1>
          <p className="text-xl text-center text-zinc-300 mb-12 max-w-3xl mx-auto">
            We are here to help you navigate the world of digital asset investments with confidence.
          </p>

          {/* Contact Cards Section - same as before */}
          {/* ... keep Mail, Phone, and Social sections untouched ... */}

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>

            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="from_name" className="block text-sm font-medium text-zinc-400 mb-1">
                    Full Name *
                  </label>
                  <Input
                    id="from_name"
                    name="from_name"
                    required
                    placeholder="Your name"
                    className="bg-zinc-800 border-zinc-700 text-white"
                  />
                </div>
                <div>
                  <label htmlFor="from_email" className="block text-sm font-medium text-zinc-400 mb-1">
                    Email Address *
                  </label>
                  <Input
                    id="from_email"
                    name="from_email"
                    type="email"
                    required
                    placeholder="your.email@example.com"
                    className="bg-zinc-800 border-zinc-700 text-white"
                  />
                </div>
                <div>
                  <label htmlFor="from_phone" className="block text-sm font-medium text-zinc-400 mb-1">
                    Phone Number
                  </label>
                  <Input
                    id="from_phone"
                    name="from_phone"
                    placeholder="Your phone number (optional)"
                    className="bg-zinc-800 border-zinc-700 text-white"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-zinc-400 mb-1">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full h-10 px-3 py-2 bg-zinc-800 border border-zinc-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-watermark-gold"
                  >
                    <option value="" disabled>Select subject</option>
                    <option value="Investment Inquiry">Investment Inquiry</option>
                    <option value="Job Application">Job Application</option>
                    <option value="Partnership Opportunity">Partnership Opportunity</option>
                    <option value="Media Inquiry">Media Inquiry</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-1">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    placeholder="How can we help you?"
                    rows={6}
                    className="bg-zinc-800 border-zinc-700 text-white resize-none"
                    ref={messageRef}
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="gold-button px-8 rounded-md"
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    Send Message
                    <Send size={16} className="ml-2" />
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
