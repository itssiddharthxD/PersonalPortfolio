import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Pencil } from 'lucide-react';
import developerImg from '../assets/dev.png';

const Hero = ({ onNavigate }) => {
  return (
    <div className="min-h-[80vh] flex items-center relative px-4 overflow-visible">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left Content */}
        <div className="text-left z-10">
          <motion.div
            initial={{ rotate: -5, scale: 0.9, opacity: 0 }}
            animate={{ rotate: 2, scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-6 py-2 bg-orange-100 border-2 border-orange-900 text-orange-900 font-bold mb-8 rough-border-thin"
          >
            <Sparkles className="w-4 h-4" />
            <span>Crafting 2D Worlds</span>
          </motion.div>

          <motion.h1
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-7xl font-black text-slate-900 mb-8 leading-[0.9] tracking-tighter"
          >
            Code. Play. <br />
            <span className="relative inline-block underline decoration-wavy italic text-orange-600">
              Repeat.
            </span>
          </motion.h1>

          <motion.p
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-xl text-xl text-slate-600 mb-12 font-medium leading-relaxed"
          >
            I'm <span className="font-bold text-slate-900">"Siddharth Das"</span>, a 2D Game Developer & Gaming Enthusiast. I turn complex ideas into
            playable experiences, combining technical precision with artistic flair.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <button
              onClick={() => onNavigate('projects')}
              className="btn-sketch-orange text-lg px-10 py-4"
            >
              Open Portfolio
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="btn-sketch text-lg px-10 py-4"
            >
              Let's Chat
              <Pencil className="w-5 h-5" />
            </button>
          </motion.div>
        </div>

        {/* Right Content - Developer Image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0, rotate: 5 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative w-full max-w-sm mx-auto lg:max-w-none lg:mx-0 order-first lg:order-last mb-12 lg:mb-0"
        >
          <div className="rough-border bg-white p-4 transform rotate-2 hover:rotate-0 transition-transform duration-500">
            <div className="relative aspect-square overflow-hidden bg-orange-50">
              <img
                src={developerImg}
                alt="Developer Portrait"
                className="w-full h-full object-cover"
              />
            </div>

          </div>

          {/* Decorative elements behind the image */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-100 rounded-full -z-10 opacity-50 blur-2xl" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-100 rounded-full -z-10 opacity-50 blur-2xl" />
        </motion.div>
      </div>

    </div>
  );
};

export default Hero;
