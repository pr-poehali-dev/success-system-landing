import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="border-t bg-card">
      <div className="container py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Building2" size={24} className="text-primary" />
              <span className="font-bold">СистемаУспех</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Профессиональное внедрение систем управления для роста вашего бизнеса
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="text-muted-foreground hover:text-accent transition-colors">Внедрение Platrum</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-accent transition-colors">Аудит и оптимизация</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-accent transition-colors">Обучение сотрудников</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-accent transition-colors">Поддержка</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Компания</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-accent transition-colors">О нас</Link></li>
              <li><Link to="/cases" className="text-muted-foreground hover:text-accent transition-colors">Кейсы</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-accent transition-colors">Блог</Link></li>
              <li><Link to="/contacts" className="text-muted-foreground hover:text-accent transition-colors">Контакты</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                <a href="tel:+79991234567" className="hover:text-accent transition-colors">+7 (999) 123-45-67</a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                <a href="mailto:info@sistemauspeha.ru" className="hover:text-accent transition-colors">info@sistemauspeha.ru</a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Globe" size={16} />
                <span>sistemauspeha.ru</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link to="/privacy" className="hover:text-accent transition-colors">Политика конфиденциальности</Link>
            <Link to="/terms" className="hover:text-accent transition-colors">Публичная оферта</Link>
          </div>
          
          <div className="text-sm text-muted-foreground">
            © 2025 СистемаУспех. Все права защищены.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
