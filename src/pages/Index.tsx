import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="TrendingUp" size={28} className="text-primary" />
            <span className="text-xl font-bold">СистемаУспех</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('hero')} className="text-sm font-medium hover:text-primary transition-colors">
              Главная
            </button>
            <button onClick={() => scrollToSection('solutions')} className="text-sm font-medium hover:text-primary transition-colors">
              Решения
            </button>
            <button onClick={() => scrollToSection('cases')} className="text-sm font-medium hover:text-primary transition-colors">
              Кейсы
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-sm font-medium hover:text-primary transition-colors">
              Цены
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-sm font-medium hover:text-primary transition-colors">
              Контакты
            </button>
          </nav>

          <div className="flex items-center gap-4">
            <a href="tel:+79991234567" className="hidden md:flex items-center gap-2 text-sm font-medium">
              <Icon name="Phone" size={16} />
              +7 (999) 123-45-67
            </a>
            <Button onClick={() => scrollToSection('contact')}>Консультация</Button>
          </div>
        </div>
      </header>

      <section id="hero" className="relative py-20 md:py-32 overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Быстрая и эффективная систематизация вашего бизнеса с Platrum
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                От хаоса к порядку за считанные недели. Повышаем эффективность, прозрачность и масштабируемость вашего бизнеса.
              </p>
              
              <Card className="max-w-md">
                <CardHeader>
                  <CardTitle>Получить бесплатный аудит</CardTitle>
                  <CardDescription>Оставьте контакты, и мы проведем диагностику ваших процессов</CardDescription>
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
                      Запросить аудит
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="relative animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/fae0f8b8-eb04-4ac2-9339-dc749de6e54f/files/e21042a3-4a01-4d4d-a16b-4b36a7a1db48.jpg" 
                alt="Систематизация бизнеса"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="problems" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Знакомы ли вам эти проблемы?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мы знаем, как превратить эти проблемы в возможности для роста
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: 'AlertCircle', title: 'Низкая эффективность', desc: 'Ручные процессы, дублирование задач, ошибки' },
              { icon: 'BarChart3', title: 'Отсутствие контроля', desc: 'Не видите KPI, сложно отслеживать задачи' },
              { icon: 'TrendingDown', title: 'Ограничения в росте', desc: 'Старые процессы не позволяют масштабироваться' },
              { icon: 'Users', title: 'Проблемы в команде', desc: 'Сложности с коммуникацией и управлением' },
              { icon: 'DollarSign', title: 'Высокие затраты', desc: 'Неэффективное использование ресурсов' },
              { icon: 'Clock', title: 'Потеря времени', desc: 'Тратите часы на рутину вместо развития' },
            ].map((item, idx) => (
              <Card key={idx} className="animate-fade-in-up hover:shadow-lg transition-shadow" style={{ animationDelay: `${idx * 100}ms` }}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={item.icon} className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription className="text-base">{item.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="solutions" className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Готовые решения для вашего бизнеса</h2>
            <p className="text-xl text-muted-foreground">Выберите пакет под ваши задачи и масштаб компании</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="text-sm font-semibold text-muted-foreground mb-2">ДЛЯ МАЛОГО БИЗНЕСА</div>
                <CardTitle className="text-2xl mb-2">Базовый старт</CardTitle>
                <div className="text-3xl font-bold mb-4">
                  от 70 000 ₽
                </div>
                <CardDescription>Быстрый старт, порядок в процессах</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {[
                    'Базовое внедрение Platrum',
                    'Обучение 5 сотрудников',
                    'Настройка дашбордов',
                    'Поддержка 1 месяц',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-0.5" size={20} />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t">
                  <div className="text-sm text-muted-foreground mb-4">Срок: до 2 недель</div>
                  <Button className="w-full" variant="outline">Выбрать</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary shadow-xl scale-105 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                Популярный
              </div>
              <CardHeader>
                <div className="text-sm font-semibold text-muted-foreground mb-2">ДЛЯ СРЕДНЕГО БИЗНЕСА</div>
                <CardTitle className="text-2xl mb-2">Комплексная систематизация</CardTitle>
                <div className="text-3xl font-bold mb-4">
                  от 180 000 ₽
                </div>
                <CardDescription>Полный контроль и рост эффективности</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {[
                    'Внедрение Оргсхемы',
                    'Настройка Дашбордов',
                    'База Знаний',
                    'Системы Задач и Координаций',
                    'Обучение команды',
                    'Поддержка 3 месяца',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-0.5" size={20} />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t">
                  <div className="text-sm text-muted-foreground mb-4">Срок: до 1 месяца</div>
                  <Button className="w-full">Заказать внедрение</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="text-sm font-semibold text-muted-foreground mb-2">ДЛЯ КРУПНОГО БИЗНЕСА</div>
                <CardTitle className="text-2xl mb-2">Премиум решение</CardTitle>
                <div className="text-3xl font-bold mb-4">
                  от 350 000 ₽
                </div>
                <CardDescription>Индивидуальная система под ваши цели</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {[
                    'Глубокий аудит процессов',
                    'Индивидуальная настройка',
                    'Полный пакет внедрения',
                    'Интеграции с системами',
                    'Обучение всей команды',
                    'Долгосрочная поддержка',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-0.5" size={20} />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t">
                  <div className="text-sm text-muted-foreground mb-4">Срок: от 1 месяца</div>
                  <Button className="w-full" variant="outline">Обсудить проект</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <p className="text-center text-muted-foreground mt-8">
            Все цены ориентировочные. Рассчитаем точную стоимость под ваши задачи.
          </p>
        </div>
      </section>

      <section id="process" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">От первой консультации до результата — всего 4 шага</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: 'Search', title: 'Диагностика', desc: 'Бесплатный аудит ваших процессов и постановка целей' },
              { icon: 'FileText', title: 'Проект', desc: 'Разрабатываем и согласовываем план внедрения' },
              { icon: 'Wrench', title: 'Внедрение', desc: 'Настраиваем Platrum, обучаем вашу команду' },
              { icon: 'Rocket', title: 'Результат', desc: 'Запускаем систему и сопровождаем вас' },
            ].map((step, idx) => (
              <div key={idx} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">
                    {idx + 1}
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={step.icon} className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.desc}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-primary/20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cases" className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Мы помогли компаниям, похожим на вашу</h2>
            <p className="text-xl text-muted-foreground">Реальные результаты наших клиентов</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { industry: 'Производство', result: 'Сократили время отчетности на 40%', metric: '-40%' },
              { industry: 'Торговля', result: 'Увеличили скорость выполнения задач в 2 раза', metric: '×2' },
              { industry: 'Услуги', result: 'Брали на 25% больше клиентов благодаря автоматизации', metric: '+25%' },
            ].map((caseItem, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-4xl font-bold text-primary mb-2">{caseItem.metric}</div>
                  <CardTitle>{caseItem.industry}</CardTitle>
                  <CardDescription className="text-base">{caseItem.result}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="relative">
            <img 
              src="https://cdn.poehali.dev/projects/fae0f8b8-eb04-4ac2-9339-dc749de6e54f/files/6ded60ca-08ab-4de2-9118-506d8154990a.jpg" 
              alt="Успешные кейсы"
              className="rounded-lg shadow-xl w-full max-h-96 object-cover"
            />
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Экспертиза, которой можно доверять</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: 'Target', title: 'Фокус на результате', desc: 'Мы не просто настраиваем софт, мы решаем ваши бизнес-задачи' },
              { icon: 'Package', title: 'Комплексный подход', desc: 'От аудита до долгосрочной поддержки' },
              { icon: 'Settings', title: 'Индивидуальный подход', desc: 'Настраиваем Platrum именно под ваши процессы' },
              { icon: 'Zap', title: 'Быстрое внедрение', desc: 'Первые результаты уже через несколько недель' },
            ].map((benefit, idx) => (
              <Card key={idx} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon name={benefit.icon} className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-lg mb-2">{benefit.title}</CardTitle>
                  <CardDescription>{benefit.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-secondary text-secondary-foreground">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Готовы вывести ваш бизнес на новый уровень?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Оставьте заявку и получите коммерческое предложение в течение 24 часов
            </p>

            <Card className="max-w-md mx-auto">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="contact-name">Имя</Label>
                    <Input 
                      id="contact-name" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required 
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-phone">Телефон</Label>
                    <Input 
                      id="contact-phone" 
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required 
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-email">Email</Label>
                    <Input 
                      id="contact-email" 
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required 
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Получить коммерческое предложение
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
              <div>
                <Icon name="Phone" className="mx-auto mb-2" size={24} />
                <div className="font-semibold">+7 (999) 123-45-67</div>
              </div>
              <div>
                <Icon name="Mail" className="mx-auto mb-2" size={24} />
                <div className="font-semibold">info@sistemauspeha.ru</div>
              </div>
              <div>
                <Icon name="Globe" className="mx-auto mb-2" size={24} />
                <div className="font-semibold">sistemauspeha.ru</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="TrendingUp" size={24} className="text-primary" />
              <span className="font-bold">СистемаУспех</span>
            </div>
            
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-primary transition-colors">Публичная оферта</a>
            </div>
            
            <div className="text-sm text-muted-foreground">
              © 2025 СистемаУспех
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
