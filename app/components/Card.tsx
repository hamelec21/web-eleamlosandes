export default function Card({ title, children, className = "" }: { title?: string, children: React.ReactNode, className?: string }) {
  return (
    <div className={`bg-neutral-warm rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-8 border border-gray-100 ${className}`}>
      {title && <h3 className="text-xl font-bold text-primary-dark mb-4 tracking-tight">{title}</h3>}
      <div className="text-gray-700 leading-relaxed">
        {children}
      </div>
    </div>
  );
}
