import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Icon name="Building2" size={28} className="text-primary" />
          <span className="text-xl font-bold">СистемаУспех</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/services" className="text-sm font-medium hover:text-accent transition-colors">
            Услуги
          </Link>
          <Link to="/pricing" className="text-sm font-medium hover:text-accent transition-colors">
            Цены
          </Link>
          <Link to="/cases" className="text-sm font-medium hover:text-accent transition-colors">
            Кейсы
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-accent transition-colors">
            О нас
          </Link>
          <Link to="/blog" className="text-sm font-medium hover:text-accent transition-colors">
            Блог
          </Link>
          <Link to="/contacts" className="text-sm font-medium hover:text-accent transition-colors">
            Контакты
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <a href="tel:+79991234567" className="hidden md:flex items-center gap-2 text-sm font-medium">
            <Icon name="Phone" size={16} />
            +7 (999) 123-45-67
          </a>
          <Button asChild>
            <Link to="/contacts">Консультация</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
