import React from 'react';
import { News } from '../types';

interface Props {
  news: News[];
}

const NewsList: React.FC<Props> = ({ news }) => {
  return (
    <div className="space-y-4">
      {news.map((item, idx) => (
        <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 group">
          <span className="font-mono text-xs font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded shrink-0 w-fit group-hover:text-primary group-hover:bg-blue-50 transition-colors">
            {item.date}
          </span>
          <span className="text-sm text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors">
            {item.content}
          </span>
        </div>
      ))}
    </div>
  );
};

export default NewsList;