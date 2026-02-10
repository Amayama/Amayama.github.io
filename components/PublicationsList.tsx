import React from 'react';
import { Publication } from '../types';
import { FileText, ExternalLink } from 'lucide-react';

interface Props {
  publications: Publication[];
}

const PublicationsList: React.FC<Props> = ({ publications }) => {
  const formatAuthors = (authors: string[]) => {
    return authors.map((author, index) => {
      const isMe = author.includes("Linyao Chen");
      return (
        <span key={index}>
          {isMe ? <strong className="text-slate-900 font-semibold">{author}</strong> : <span className="text-slate-600">{author}</span>}
          {index < authors.length - 1 ? ", " : ""}
        </span>
      );
    });
  };

  return (
    <div className="space-y-6">
      {publications.map((pub, idx) => (
        <div key={idx} className="flex gap-4 group">
           <div className="hidden sm:block mt-1 shrink-0">
             <FileText size={20} className="text-slate-300 group-hover:text-primary transition-colors" />
           </div>
           <div>
              {pub.url ? (
                <a 
                  href={pub.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex gap-2 items-baseline font-bold text-slate-800 leading-snug hover:text-primary transition-colors cursor-pointer hover:underline decoration-primary/30 underline-offset-4"
                >
                  {pub.title}
                  <ExternalLink size={14} className="opacity-0 group-hover:opacity-50 transition-opacity self-center" />
                </a>
              ) : (
                <h3 className="font-bold text-slate-800 leading-snug group-hover:text-primary transition-colors">
                  {pub.title}
                </h3>
              )}
              
              <div className="text-sm mt-1.5 leading-relaxed">
                {formatAuthors(pub.authors)}
              </div>
              <div className="flex flex-wrap gap-2 mt-2 items-center text-xs">
                <span className="font-medium text-slate-700 italic bg-slate-100 px-2 py-0.5 rounded">
                    {pub.venue}
                </span>
                {pub.status && (
                    <span className="text-amber-600 font-medium border border-amber-200 bg-amber-50 px-2 py-0.5 rounded">
                        {pub.status}
                    </span>
                )}
                 {pub.year && (
                    <span className="text-slate-400">
                        {pub.year}
                    </span>
                )}
              </div>
           </div>
        </div>
      ))}
    </div>
  );
};

export default PublicationsList;