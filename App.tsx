import React from 'react';
import { profile, publications, news } from './data';
import ProfileCard from './components/ProfileCard';
import Section from './components/Section';
import PublicationsList from './components/PublicationsList';
import NewsList from './components/NewsList';
import { BookOpen, Sparkles, Newspaper } from 'lucide-react';

const App: React.FC = () => {
  // Filter out "Under Review" publications
  const selectedPublications = publications.filter(pub => pub.status !== 'Under Review');

  return (
    <div className="min-h-screen bg-slate-50/50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Sidebar (Profile) */}
        <aside className="lg:col-span-4 xl:col-span-3">
          <ProfileCard />
        </aside>

        {/* Main Content */}
        <main className="lg:col-span-8 xl:col-span-9 space-y-12 bg-white p-8 sm:p-10 rounded-xl shadow-sm border border-slate-200">
          
          {/* About Me */}
          <Section title="About Me" icon={<Sparkles size={24} />}>
            <div className="text-slate-600 leading-relaxed text-sm space-y-4">
              <p>
                Hi, I am currently a Ph.D. student at the University of Tokyo. My research focuses on building intelligent agents driven by Large Language Models (LLMs), with specific interests in multimodal interactions and multi-agent systems.
              </p>
              <p>
                Feel free to contact me for discussion and collaboration!
              </p>
            </div>
          </Section>

          {/* News */}
          <Section title="News" icon={<Newspaper size={24} />}>
            <NewsList news={news} />
          </Section>

          {/* Publications */}
          <Section title="Selected Publications" icon={<BookOpen size={24} />}>
            <div className="bg-slate-50 border border-slate-100 rounded-lg p-4 mb-6 text-sm text-slate-600">
              <span className="font-bold">*</span> denotes equal contribution.
            </div>
            <PublicationsList publications={selectedPublications} />
          </Section>

          {/* Footer for Main Content */}
          <div className="pt-8 mt-12 border-t border-slate-100 text-center text-slate-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Linyao Chen. Built with React & Tailwind.</p>
          </div>

        </main>
      </div>
    </div>
  );
};

export default App;