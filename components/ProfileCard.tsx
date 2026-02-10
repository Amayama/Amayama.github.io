import React from 'react';
import { Mail, Phone, MapPin, GraduationCap, Github, Linkedin, Globe } from 'lucide-react';
import { profile } from '../data';

const ProfileCard: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:sticky md:top-8">
      <div className="flex flex-col items-center text-center">
        {/* Profile Image - Styling updated for the new illustration */}
        <div className="w-32 h-32 rounded-2xl overflow-hidden mb-4 ring-4 ring-slate-50 shadow-md bg-white">
           <img 
            src="./avatar.png" 
            alt={profile.name} 
            className="w-full h-full object-cover"
           />
        </div>
        
        <h1 className="text-2xl font-bold text-slate-900 mb-1">{profile.name}</h1>
        <p className="text-primary font-medium mb-4">PhD Student @ UTokyo</p>
        
        <div className="w-full space-y-3 text-sm text-slate-600 text-left mt-2">
          <div className="flex items-center gap-3">
             <Mail size={16} className="shrink-0 text-slate-400" />
             <a href={`mailto:${profile.email}`} className="hover:text-primary break-all transition-colors">{profile.email}</a>
          </div>
          <div className="flex items-center gap-3">
             <Phone size={16} className="shrink-0 text-slate-400" />
             <span>{profile.phone}</span>
          </div>
          {/* Links */}
          <div className="flex items-center gap-3">
             <Github size={16} className="shrink-0 text-slate-400" />
             <a href="https://github.com/Amayama" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">github.com/Amayama</a>
          </div>
           <div className="flex items-center gap-3">
             <GraduationCap size={16} className="shrink-0 text-slate-400" />
             <a href="https://scholar.google.com/citations?view_op=list_works&hl=zh-CN&user=MDy7J7gAAAAJ" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Google Scholar</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;