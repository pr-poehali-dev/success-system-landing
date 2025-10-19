import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Home = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Наш менеджер свяжется с вами в ближайшее время.",
    });
    setFormData({ name: '', phone: '', email: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-background to-muted/20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded mb-4 text-sm font-medium">
                Внедрение Platrum — ваш путь к эффективности
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Успешное управление бизнесом с Platrum: от хаоса к порядку!
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Внедряем инструменты систематизации менеджмента для роста и эффективности вашей компании
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link to="/services">Подробнее об услугах</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/contacts">Заказать аудит</Link>
                </Button>
              </div>
            </div>

            <Card className="border-2 shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl">Получить бесплатную консультацию</CardTitle>
                <CardDescription>Начните трансформацию вашего бизнеса уже сегодня</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Имя</Label>
                    <Input 
                      id="name" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required 
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input 
                      id="phone" 
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required 
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required 
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Получить консультацию
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-lg text-muted-foreground">Ключевые преимущества работы с СистемаУспех</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: 'Award', title: 'Глубокая экспертиза', desc: 'Более 50 успешных проектов внедрения систем управления' },
              { icon: 'Package', title: 'Комплексный подход', desc: 'Полный цикл от аудита до постоянной поддержки' },
              { icon: 'Lightbulb', title: 'Индивидуальные решения', desc: 'Настройка под специфику вашего бизнеса' },
              { icon: 'Zap', title: 'Быстрый результат', desc: 'Первые улучшения видны уже через 2 недели' },
            ].map((item, idx) => (
              <Card key={idx} className="text-center border-2 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon name={item.icon} className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-lg mb-2">{item.title}</CardTitle>
                  <CardDescription>{item.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ключевые услуги</h2>
            <p className="text-lg text-muted-foreground">Комплексные решения для систематизации вашего бизнеса</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: 'Settings', 
                title: 'Внедрение Platrum', 
                desc: 'Полная настройка и интеграция системы управления',
                link: '/services'
              },
              { 
                icon: 'Search', 
                title: 'Аудит и оптимизация', 
                desc: 'Анализ процессов и рекомендации по улучшению',
                link: '/services'
              },
              { 
                icon: 'GraduationCap', 
                title: 'Обучение сотрудников', 
                desc: 'Групповые и индивидуальные программы обучения',
                link: '/services'
              },
              { 
                icon: 'Headphones', 
                title: 'Поддержка и сопровождение', 
                desc: 'Техническая помощь и консультации 24/7',
                link: '/services'
              },
            ].map((service, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-shadow border-2 group">
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <Icon name={service.icon} className="text-accent" size={28} />
                  </div>
                  <CardTitle className="text-lg mb-2">{service.title}</CardTitle>
                  <CardDescription className="mb-4">{service.desc}</CardDescription>
                  <Button variant="ghost" className="w-full" asChild>
                    <Link to={service.link}>
                      Подробнее <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Link>
                  </Button>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link to="/services">Смотреть все услуги</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши клиенты достигают результатов</h2>
            <p className="text-lg text-muted-foreground">Измеримые улучшения ключевых показателей</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { metric: '-40%', title: 'Сокращение времени на отчетность', industry: 'Производство' },
              { metric: '×2', title: 'Увеличение скорости обработки заказов', industry: 'Торговля' },
              { metric: '+25%', title: 'Рост производительности без найма', industry: 'Услуги' },
            ].map((item, idx) => (
              <Card key={idx} className="text-center border-2">
                <CardHeader>
                  <div className="text-5xl font-bold text-accent mb-3">{item.metric}</div>
                  <CardTitle className="text-lg mb-2">{item.title}</CardTitle>
                  <CardDescription>{item.industry}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" asChild>
              <Link to="/cases">Смотреть все кейсы</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Начните уже сегодня!
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Получите бесплатную консультацию и узнайте, как Platrum поможет вашему бизнесу
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contacts">Заказать консультацию</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link to="/pricing">Узнать цены</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
