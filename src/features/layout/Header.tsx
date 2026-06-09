import { Ticket } from 'lucide-react';

export const Header = () => {
  return (
    <header className="sticky top-0 z-20 border-b border-default-200 bg-background/80 backdrop-blur-md">
      <div className="max-w-screen-xl mx-auto flex items-center gap-2.5 px-6 py-3.5">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Ticket size={18} />
        </span>
        <div className="flex flex-col leading-tight">
          <span className="text-base font-semibold tracking-tight text-foreground">
            Who's In Town
          </span>
          <span className="text-xs text-default-400">Find live shows from your favourite artists</span>
        </div>
      </div>
    </header>
  );
};
