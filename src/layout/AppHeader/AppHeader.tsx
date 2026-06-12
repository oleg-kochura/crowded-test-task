import { Activity } from 'lucide-react';

export const AppHeader = () => {
  return (
    <header className="sticky top-0 z-20 bg-accent shadow-lg shadow-accent/20">
      <div className="max-w-screen-2xl mx-auto flex items-center gap-3 px-8 py-4">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-foreground/15">
          <Activity size={18} className="text-accent-foreground" />
        </span>
        <span className="text-xl font-bold tracking-tight text-accent-foreground">
          Who's In Town
        </span>
      </div>
    </header>
  );
};
