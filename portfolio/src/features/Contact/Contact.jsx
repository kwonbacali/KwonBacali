import React, { useState, useRef } from 'react';
import Section from '../../components/Section';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef(); // Attach ref to form to pull native fields cleanly
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState(''); // values: '', 'sending', 'success', 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    // EmailJS credentials configuration matrix
    const SERVICE_ID = 'service_lcnmd8g'; // Verified from your previous dashboard screen
    const TEMPLATE_ID = 'template_8hl1lax'; // Replace with template ID string
    const PUBLIC_KEY = 'Gi_i5PzgrO4wI43Zb';   // Replace with public API key token

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then((result) => {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' }); // Flush input blocks clean
      }, (error) => {
        console.error('EmailJS Error Log Output:', error.text);
        setStatus('error');
      });
  };

  return (
    <Section id="contact" className="scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        
        {/* Header Title Card */}
        <div className="relative w-full max-w-2xl bg-white/70 backdrop-blur-md border border-cyan-500/10 shadow-[0_4px_24px_rgba(8,145,178,0.04)] rounded-2xl p-6 text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 tracking-tight mb-2">Get In Touch</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mb-3" />
          <p className="text-slate-500 text-xs sm:text-sm max-w-md mx-auto">
            Have a project in mind? Let's collaborate and build something amazing together.
          </p>
        </div>

        {/* Form and Contact Detail Layout Grid Area */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Block: Functional Form Module */}
          <form 
            ref={formRef} // Added reference pointer hook here
            onSubmit={handleSubmit}
            className="lg:col-span-7 bg-white/70 backdrop-blur-md border border-slate-100 rounded-3xl p-6 md:p-8 shadow-2xl shadow-slate-100 flex flex-col gap-5 relative overflow-hidden"
          >
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-500 ml-1">Your Name</label>
                <input 
                  type="text"
                  name="name" // Map directly to {{name}} variable in your EmailJS Template dashboard
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 transition outline-none text-slate-700 text-sm bg-white/50"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-500 ml-1">Your Email</label>
                <input 
                  type="email"
                  name="email" // Map directly to {{email}} variable in your EmailJS Template dashboard
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="name@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 transition outline-none text-slate-700 text-sm bg-white/50"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-500 ml-1">Subject</label>
              <input 
                type="text"
                name="subject" // Map directly to {{subject}} variable in your EmailJS Template dashboard
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Project Discussion / Collaboration"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 transition outline-none text-slate-700 text-sm bg-white/50"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-500 ml-1">Your Message</label>
              <textarea 
                name="message" // Map directly to {{message}} variable in your EmailJS Template dashboard
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Tell me about your build objectives..."
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 transition outline-none text-slate-700 text-sm bg-white/50 resize-none"
              />
            </div>

            <div className="flex flex-col items-center justify-center mt-2 gap-2">
              <button 
                type="submit"
                disabled={status === 'sending'}
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full text-sm font-medium shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center gap-2 disabled:opacity-50 disabled:pointer-events-none group"
              >
                {status === 'sending' ? (
                  <>
                    <i className="fa-solid fa-spinner animate-spin text-xs"></i> Sending...
                  </>
                ) : (
                  <>
                    <i className="fa-regular fa-paper-plane text-xs transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"></i> Send Message
                  </>
                )}
              </button>
            </div>

            {/* Success Notification Feedback Banner */}
            {status === 'success' && (
              <p className="text-center text-emerald-600 text-xs font-medium mt-2 animate-fade-in">
                ✓ Message sent safely to Kwon Jin! I'll get back to you shortly.
              </p>
            )}

            {/* Error Notification Feedback Banner */}
            {status === 'error' && (
              <p className="text-center text-rose-600 text-xs font-medium mt-2 animate-fade-in">
                ✕ Failed to route email dispatch request. Please contact me directly.
              </p>
            )}
          </form>

          {/* Right Block: Personal Meta Contact Panels */}
          <div className="lg:col-span-5 flex flex-col gap-4 w-full">
            
            {/* Top Notice Box Card */}
            <div className="bg-white/70 backdrop-blur-md border border-slate-100 rounded-2xl p-5 shadow-xl shadow-slate-100/50">
              <h3 className="text-base font-bold text-cyan-600 mb-1">Contact Information</h3>
              <p className="text-slate-500 text-xs leading-relaxed font-light">
                Currently open to opportunities and system scaling collaborations. Feel free to reach out!
              </p>
            </div>

            {/* Location Card */}
            <div className="bg-white/70 backdrop-blur-md border border-slate-100 hover:border-cyan-400/40 rounded-2xl p-4 shadow-xl shadow-slate-100/50 hover:shadow-2xl hover:shadow-slate-200/60 hover:-translate-y-1 transition-all duration-300 flex items-center gap-4 group">
              <div className="w-11 h-11 rounded-xl bg-cyan-500 flex items-center justify-center text-white shadow-md shadow-cyan-500/20 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <i className="fa-solid fa-location-dot text-base"></i>
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide">Location</h4>
                <p className="text-slate-500 text-sm font-light">Antipolo, Rizal, Philippines</p>
              </div>
            </div>

            {/* Mobile Card */}
            <div className="bg-white/70 backdrop-blur-md border border-slate-100 hover:border-blue-400/40 rounded-2xl p-4 shadow-xl shadow-slate-100/50 hover:shadow-2xl hover:shadow-slate-200/60 hover:-translate-y-1 transition-all duration-300 flex items-center gap-4 group">
              <div className="w-11 h-11 rounded-xl bg-blue-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <i className="fa-solid fa-mobile-alt text-base"></i>
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide">Mobile Number</h4>
                <a href="tel:+639958293503" className="text-slate-600 group-hover:text-blue-500 text-sm font-medium transition-colors duration-300 break-all">
                  +63 995 829 3503
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white/70 backdrop-blur-md border border-slate-100 hover:border-blue-400/40 rounded-2xl p-4 shadow-xl shadow-slate-100/50 hover:shadow-2xl hover:shadow-slate-200/60 hover:-translate-y-1 transition-all duration-300 flex items-center gap-4 group">
              <div className="w-11 h-11 rounded-xl bg-blue-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <i className="fa-solid fa-envelope text-base"></i>
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide">Email Address</h4>
                <a href="mailto:kwon.bacali@gmail.com" className="text-slate-600 group-hover:text-blue-500 text-sm font-medium transition-colors duration-300 break-all">
                  kwon.bacali@gmail.com
                </a>
              </div>
            </div>

            {/* Social Network Platforms Anchor Layer */}
            <div className="bg-white/70 backdrop-blur-md border border-slate-100 rounded-2xl p-5 shadow-xl shadow-slate-100/50 flex flex-col gap-3">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Connect with me</h4>
              <div className="flex items-center gap-3">
                <a 
                  href="https://www.linkedin.com/in/kwon-bacali" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-10 h-10 rounded-full bg-white border border-slate-100 text-slate-600 hover:text-cyan-500 hover:border-cyan-400 hover:-translate-y-0.5 flex items-center justify-center shadow-sm hover:shadow transition-all duration-300"
                  title="LinkedIn Profile"
                >
                  <i className="fa-brands fa-linkedin-in text-sm"></i>
                </a>
                <a 
                  href="https://ph.jobstreet.com/profiles/kwonjin-bacali-R02wL8VD3B" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-10 h-10 rounded-full bg-white border border-slate-100 text-slate-600 hover:text-cyan-500 hover:border-cyan-400 hover:-translate-y-0.5 flex items-center justify-center shadow-sm hover:shadow transition-all duration-300"
                  title="JobStreet Profile"
                >
                  <i className="fa-solid fa-suitcase"></i>
                </a>
                <a 
                  href="https://www.facebook.com/kwon.bacali" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-10 h-10 rounded-full bg-white border border-slate-100 text-slate-600 hover:text-cyan-500 hover:border-cyan-400 hover:-translate-y-0.5 flex items-center justify-center shadow-sm hover:shadow transition-all duration-300"
                  title="Facebook Profile"
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a 
                  href="https://www.instagram.com/kwon.bacali" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-10 h-10 rounded-full bg-white border border-slate-100 text-slate-600 hover:text-cyan-500 hover:border-cyan-400 hover:-translate-y-0.5 flex items-center justify-center shadow-sm hover:shadow transition-all duration-300"
                  title="Instagram Profile"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </Section>
  );
};

export default Contact;