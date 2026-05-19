import React from 'react';

// We add 'id' as a prop so Scrollspy can find this section
const Section = ({ title, id, children, bgLight = false }) => (
  <section id={id} className="scroll-mt-19 py-12 bg-gradient-to-b from-sky-100 to-blue-50 border-b border-slate-200" >
    <div className="container mx-auto px-4 max-w-7xl">
      <div className="flex justify-center">
        <div className="w-full lg:w-12/12">
          {title && <h2 className="mb-4 text-blue-600 font-bold text-2xl md:text-3xl">{title}</h2>}
          {children}
        </div>
      </div>
    </div>
  </section>
);

export default Section;