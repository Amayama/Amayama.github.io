import React, { ReactNode } from 'react';

interface SectionProps {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ title, icon, children, className = "" }) => {
  return (
    <section className={`mb-10 ${className}`}>
      <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-100">
        {icon && <span className="text-primary">{icon}</span>}
        <h2 className="text-xl font-bold text-slate-800 tracking-tight">{title}</h2>
      </div>
      <div>{children}</div>
    </section>
  );
};

export default Section;