import React from 'react';
import Section from '../../components/Section';

const Skills = ({ data }) => {
  // A quick helper to render a uniform column section for each skill type
  const renderSkillCategory = (title, skillList, hoverColorClass) => (
  // Added flex-col and items-center to make sure the entire category stack stays centered
  <div className="w-full flex flex-col items-center">
    
    {/* Forced text-center across all breakpoints */}
    <h5 className="text-slate-400 text-sm font-semibold tracking-wider uppercase mb-4 text-center">
      {title}
    </h5>
    
    {/* Changed justify-center sm:justify-start to just justify-center */}
    <div className="flex flex-wrap gap-4 justify-center">
      {skillList?.map((skill) => (
        <div 
          key={skill.name}
          className={`flex flex-col items-center justify-center w-24 h-24 sm:w-28 sm:h-28 bg-white border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] rounded-2xl p-3 transition-all duration-300 hover:-translate-y-1 group ${hoverColorClass}`}
        >
          {/* FontAwesome Icon Element */}
          <div className="text-2xl sm:text-3xl mb-2 text-slate-700 transition-colors duration-300">
            <i className={skill.icon}></i>
          </div>
          <span className="text-xs font-bold text-slate-600 text-center truncate w-full">
            {skill.name}
          </span>
        </div>
      ))}
    </div>
  </div>
);

  return (
    <Section id="skills">
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center">
        
        {/* Header Title Card */}
        <div className="relative w-full max-w-2xl bg-white/70 backdrop-blur-md border border-cyan-500/10 shadow-[0_4px_24px_rgba(8,145,178,0.04)] rounded-2xl p-6 text-center mb-10">

          <h2 className="text-3xl font-bold text-slate-800 tracking-tight mb-2">Skills</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mb-3" />
          <p className="text-slate-500 text-xs sm:text-sm max-w-md mx-auto">
            Tools, technologies, and languages I've mastered and currently work with.
          </p>
        </div>

        {/* Categories Stack */}
        <div className="w-full flex flex-col gap-8">
          {renderSkillCategory("Languages", data.languages, "hover:shadow-[0_10px_25px_rgba(6,182,212,0.12)] hover:text-cyan-500")}
          {renderSkillCategory("Frameworks & Libraries", data.frameworks, "hover:shadow-[0_10px_25px_rgba(59,130,246,0.12)] hover:text-blue-500")}
          {renderSkillCategory("Tools & Databases", data.tools, "hover:shadow-[0_10px_25px_rgba(15,23,42,0.08)] hover:text-slate-800")}
        </div>

      </div>
    </Section>
  );
};

export default Skills;