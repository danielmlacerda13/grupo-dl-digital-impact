interface PageHeaderProps {
  title: string;
  subtitle: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <div className="relative overflow-hidden flex items-center justify-center py-24" style={{ background: 'var(--gradient-hero)' }}>
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6 text-primary-foreground animate-fade-in">{title}</h1>
        <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto animate-fade-in">{subtitle}</p>
      </div>
    </div>
  );
};

export default PageHeader;
