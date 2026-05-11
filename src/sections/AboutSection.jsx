import React from 'react';

const AboutSection = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="rough-border bg-white p-8 md:p-16 relative overflow-hidden">
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-orange-100 rounded-full -z-10"></div>

        <h2 className="text-4xl font-bold text-slate-900 mb-8">Story behind the <span className="text-orange-600 underline decoration-wavy">Developer</span></h2>

        <div className="space-y-6 text-slate-700 text-lg leading-relaxed">
          <p>
            I'm a gamer since childhood. Road Rash brought me into the world of gaming, and Pokemon played a very crucial part in making me love 2D art style.</p>
          <p>
            I've always been fascinated by the power of simple lines and colors to create complex worlds. My journey in game development started during the lockdown period in 2020.
          </p>
          <p>
            Today, I specialize in 2D game mechanics, smooth animations, and user-experience . I believe that 2D games offer a unique intimacy that 3D often lacks.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-12">
            <div className="text-center">
              <h4 className="text-3xl font-bold text-slate-900 mb-1">2D</h4>
              <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Expertise</p>
            </div>
            <div className="text-center">
              <h4 className="text-3xl font-bold text-slate-900 mb-1">BJP</h4>
              <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Party</p>
            </div>
            <div className="text-center">
              <h4 className="text-3xl font-bold text-slate-900 mb-1">01</h4>
              <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Released</p>
            </div>
            <div className="text-center">
              <h4 className="text-3xl font-bold text-slate-900 mb-1">18</h4>
              <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Prototypes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
