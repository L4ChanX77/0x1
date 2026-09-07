import { motion } from 'framer-motion';
import { BookOpen, Calendar } from 'lucide-react';
import { ARTICLES_DATA } from '@/data';

export default function Articles() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8 pb-10">
      <header className="mb-8">
        <h1 className="text-3xl font-bold font-mono text-foreground uppercase tracking-widest flex items-center gap-3">
          <BookOpen className="text-primary" /> Articles & Guides
        </h1>
        <p className="text-muted-foreground mt-2 font-mono text-sm">In-depth technical articles and tutorials.</p>
      </header>

      <div className="space-y-6">
        {ARTICLES_DATA.map((article) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-all hover:shadow-[0_0_25px_rgba(255,0,68,0.08)]"
          >
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <h2 className="text-xl font-bold font-mono text-foreground">{article.title}</h2>
              <span className="text-xs font-mono bg-primary/10 text-primary border border-primary/20 px-2 py-0.5 rounded">{article.category}</span>
            </div>
            <div className="flex items-center gap-4 text-xs text-muted-foreground font-mono mb-4">
              <span className="flex items-center gap-1"><Calendar size={12} /> {article.date}</span>
            </div>
            <div className="prose prose-invert prose-sm max-w-none font-sans text-muted-foreground leading-relaxed">
              {article.content.split('\n').map((line, idx) => {
                if (line.startsWith('### ')) {
                  return <h3 key={idx} className="text-primary font-mono text-lg mt-4 mb-2">{line.replace('### ', '')}</h3>;
                }
                if (line.startsWith('**') && line.endsWith('**')) {
                  return <p key={idx} className="font-bold text-foreground">{line.replace(/\*\*/g, '')}</p>;
                }
                if (line.startsWith('> ')) {
                  return <blockquote key={idx} className="border-l-4 border-primary pl-4 my-2 text-muted-foreground/70">{line.replace('> ', '')}</blockquote>;
                }
                if (line.trim() === '') return <br key={idx} />;
                return <p key={idx} className="mb-2">{line}</p>;
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
