import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/skills';
import { Code2, Monitor, Cpu, Sparkles } from 'lucide-react';

const iconMap = {
  'Game Engines': <Monitor className="w-6 h-6" />,
  'Languages': <Code2 className="w-6 h-6" />,
  'Core Tech': <Cpu className="w-6 h-6" />
};

const SkillsSection = () => {
  return (
    <div className="space-y-12">
      <div className="text-center md:text-left">
        <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4 italic">Technical <span className="text-orange-600 not-italic">Arsenal</span></h2>
        <p className="text-slate-600 text-lg max-w-2xl">
          The tools and technologies I use to translate imagination into interactive 2D reality.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {Object.entries(skills).map(([category, items], catIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: catIndex * 0.1 }}
            className="rough-border bg-white p-8"
          >
            <div className="flex items-center gap-3 mb-8 text-orange-600">
              {iconMap[category]}
              <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">{category}</h3>
            </div>

            <div className="space-y-8">
              {items.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-bold text-slate-700 flex items-center gap-2">
                      <Sparkles className="w-3 h-3 text-orange-400" />
                      {skill.name}
                    </span>
                    <span className="text-xs font-black text-slate-400 font-mono">{skill.level}%</span>
                  </div>
                  <div className="h-4 bg-slate-50 border-2 border-slate-900 rounded-sm overflow-hidden relative">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="absolute inset-0 bg-orange-200 border-r-2 border-slate-900"
                    />
                    {/* Pencil shading effect */}
                    <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,#000_2px,#000_4px)]" />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
