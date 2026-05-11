import React from 'react';
import { Send, Mail, MessageSquare, User } from 'lucide-react';

const Contact = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">Drop a <span className="text-orange-600 underline decoration-wavy underline-offset-8">Mission</span></h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Have a 2D project in mind or just want to talk about game design? I'm always open to new adventures.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 rough-border-thin bg-orange-100 flex items-center justify-center text-orange-900 group-hover:rotate-6 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Email Me</p>
                <p className="text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors">siddharthhere00@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 rough-border-thin bg-blue-50 flex items-center justify-center text-blue-900 group-hover:-rotate-6 transition-transform">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Discord</p>
                <p className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">User18</p>
              </div>
            </div>
          </div>
        </div>

        <form className="rough-border bg-white p-8 space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-black text-slate-900 uppercase tracking-widest flex items-center gap-2">
              <User className="w-4 h-4 text-orange-600" />
              Your Name
            </label>
            <input
              type="text"
              className="w-full bg-slate-50 border-2 border-slate-900 px-4 py-3 focus:outline-none focus:ring-0 focus:border-orange-600 transition-colors rounded-sm"
              placeholder="Adventurer Name"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-black text-slate-900 uppercase tracking-widest flex items-center gap-2">
              <Mail className="w-4 h-4 text-orange-600" />
              Email Address
            </label>
            <input
              type="email"
              className="w-full bg-slate-50 border-2 border-slate-900 px-4 py-3 focus:outline-none focus:ring-0 focus:border-orange-600 transition-colors rounded-sm"
              placeholder="hello@world.com"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-black text-slate-900 uppercase tracking-widest flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-orange-600" />
              Message
            </label>
            <textarea
              rows="4"
              className="w-full bg-slate-50 border-2 border-slate-900 px-4 py-3 focus:outline-none focus:ring-0 focus:border-orange-600 transition-colors rounded-sm resize-none"
              placeholder="What's on your mind?"
            ></textarea>
          </div>

          <button className="btn-sketch-orange w-full py-4 text-lg">
            Send Message
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
