type Props = {
  children: React.ReactNode;
};

export const SectionTitle = ({ children }: Props) => {
  return (
    <h2 className="text-xs font-semibold uppercase tracking-wider text-default-400">{children}</h2>
  );
};
