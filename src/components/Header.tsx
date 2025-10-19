import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur-sm shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <button onClick={() => scrollToSection('hero')} className="flex items-center gap-2 cursor-pointer">
          <Icon name="Building2" size={28} className="text-primary" />
          <span className="text-xl font-bold">СистемаУспех</span>
        </button>
        
        <nav className="hidden md:flex items-center gap-6">
          <button onClick={() => scrollToSection('services')} className="text-sm font-medium hover:text-accent transition-colors">
            Услуги
          </button>
          <button onClick={() => scrollToSection('pricing')} className="text-sm font-medium hover:text-accent transition-colors">
            Цены
          </button>
          <button onClick={() => scrollToSection('cases')} className="text-sm font-medium hover:text-accent transition-colors">
            Кейсы
          </button>
          <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-accent transition-colors">
            О нас
          </button>
          <button onClick={() => scrollToSection('blog')} className="text-sm font-medium hover:text-accent transition-colors">
            Блог
          </button>
          <button onClick={() => scrollToSection('contacts')} className="text-sm font-medium hover:text-accent transition-colors">
            Контакты
          </button>
        </nav>

        <div className="flex items-center gap-4">
          <a href="tel:+74951234567" className="hidden md:flex items-center gap-2 text-sm font-medium">
            <Icon name="Phone" size={16} />
            +7 (495) 123-45-67
          </a>
          <Button onClick={() => scrollToSection('contacts')}>
            Консультация
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
