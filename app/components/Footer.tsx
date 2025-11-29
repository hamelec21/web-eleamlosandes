import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Section 1: About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-secondary">Hogar de Ancianos</h3>
            <p className="text-gray-300 text-sm">
              Brindando cuidado, amor y dignidad a nuestros adultos mayores en nuestros dos centros especializados.
            </p>
          </div>

          {/* Section 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-secondary">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/nosotros" className="hover:text-secondary transition-colors">Nosotros</Link></li>
              <li><Link href="/centros" className="hover:text-secondary transition-colors">Nuestros Centros</Link></li>
              <li><Link href="/transparencia" className="hover:text-secondary transition-colors">Transparencia</Link></li>
              <li><Link href="/contactos" className="hover:text-secondary transition-colors">Contactos</Link></li>
            </ul>
          </div>

          {/* Section 3: Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-secondary">Contacto</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start">
                <span className="mr-2">📍</span>
                <span>Calle Principal 123, Ciudad</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">📞</span>
                <span>+56 9 1234 5678</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">✉️</span>
                <span>contacto@hogardeancianos.cl</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Hogar de Ancianos. Todos los derechos reservados.</p>
          <p className="mt-2 text-xs">
            Sitio diseñado y desarrollado por <a href="https://proscom.cl" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">proscom.cl</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
