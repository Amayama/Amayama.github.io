import React from 'react';
import { Experience } from '../types';
import { Calendar, User } from 'lucide-react';

interface Props {
  experiences: Experience[];
}

const ExperienceTimeline: React.FC<Props> = ({ experiences }) => {
  return (
    <div className="relative border-l-2 border-slate-100 ml-3 space-y-10 py-2">
      {experiences.map((exp, idx) => (
        <div key={idx} className="relative pl-8">
          {/* Dot */}
          <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-white border-2 border-primary rounded-full"></div>
          
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
            <h3 className="text-lg font-bold text-slate-800">{exp.role}</h3>
            <div className="flex items-center text-xs font-medium text-slate-400 bg-slate-50 px-2 py-1 rounded-full mt-1 sm:mt-0">
               <Calendar size={12} className="mr-1.5" />
               {exp.period}
            </div>
          </div>
          
          <div className="text-primary font-medium text-sm mb-3">
            {exp.company}
          </div>

          {exp.supervisor && (
             <div className="flex items-center text-xs text-slate-500 mb-2 italic">
                <User size={12} className="mr-1.5" />
                Supervisor: {exp.supervisor}
             </div>
          )}
          
          <ul className="list-disc list-outside ml-4 space-y-1.5 text-sm text-slate-600 marker:text-slate-300">
            {exp.description.map((desc, dIdx) => (
                // Filter out supervisor lines from description if they were parsed separately, though current data keeps them.
                // We'll just display all lines.
                !desc.startsWith('Supervisor:') && (
                    <li key={dIdx} className="leading-relaxed">
                        {desc}
                    </li>
                )
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ExperienceTimeline;