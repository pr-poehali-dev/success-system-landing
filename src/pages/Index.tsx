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
      <header className="sticky top-0 z-50 w-full border-b bg-card shadow-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Building2" size={28} className="text-primary" />
            <span className="text-xl font-bold">СистемаУспех</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('hero')} className="text-sm font-medium hover:text-accent transition-colors">
              Главная
            </button>
            <button onClick={() => scrollToSection('solutions')} className="text-sm font-medium hover:text-accent transition-colors">
              Решения
            </button>
            <button onClick={() => scrollToSection('cases')} className="text-sm font-medium hover:text-accent transition-colors">
              Кейсы
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-sm font-medium hover:text-accent transition-colors">
              Цены
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-sm font-medium hover:text-accent transition-colors">
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

      <section id="hero" className="relative py-20 md:py-32 overflow-hidden bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded mb-4 text-sm font-medium">
                Профессиональное внедрение систем управления
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground">
                Систематизация бизнес-процессов с платформой Platrum
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Обеспечиваем контроль, прозрачность и масштабируемость бизнеса через проверенные методологии управления. Работаем с компаниями от 10 до 500+ сотрудников.
              </p>
              
              <Card className="max-w-md border-2 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Запросить аудит бизнес-процессов</CardTitle>
                  <CardDescription>Бесплатная диагностика текущего состояния системы управления</CardDescription>
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
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg" />
              <img 
                src="https://cdn.poehali.dev/projects/fae0f8b8-eb04-4ac2-9339-dc749de6e54f/files/397e376d-247a-418d-9028-30427fdebe53.jpg" 
                alt="Корпоративное управление"
                className="rounded-lg shadow-xl w-full relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="problems" className="py-20 bg-card">
        <div className="container">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Типичные вызовы растущего бизнеса</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Системные проблемы, которые мы решаем для наших клиентов
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: 'AlertCircle', title: 'Низкая эффективность', desc: 'Ручные процессы, дублирование задач, системные ошибки' },
              { icon: 'BarChart3', title: 'Отсутствие контроля', desc: 'Невозможность отслеживать KPI и ход выполнения задач' },
              { icon: 'TrendingDown', title: 'Ограничения в росте', desc: 'Устаревшие процессы препятствуют масштабированию' },
              { icon: 'Users', title: 'Управление персоналом', desc: 'Сложности с коммуникацией и координацией команды' },
              { icon: 'DollarSign', title: 'Неэффективные затраты', desc: 'Нерациональное использование ресурсов и бюджета' },
              { icon: 'Clock', title: 'Потеря времени', desc: 'Избыточное время на рутинные операции' },
            ].map((item, idx) => (
              <Card key={idx} className="animate-fade-in-up hover:shadow-lg transition-shadow border" style={{ animationDelay: `${idx * 100}ms` }}>
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

      <section id="solutions" className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Пакеты услуг по внедрению</h2>
            <p className="text-lg text-muted-foreground">Фиксированная стоимость и прозрачные сроки реализации</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all border-2">
              <CardHeader>
                <div className="text-sm font-semibold text-muted-foreground mb-2">ДЛЯ МАЛОГО БИЗНЕСА</div>
                <CardTitle className="text-2xl mb-2">Базовый старт</CardTitle>
                <div className="text-3xl font-bold mb-4">
                  от 70 000 ₽
                </div>
                <CardDescription>Быстрый старт, упорядочивание базовых процессов</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {[
                    'Базовое внедрение Platrum',
                    'Обучение 5 сотрудников',
                    'Настройка дашбордов',
                    'Техническая поддержка 1 месяц',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-0.5" size={20} />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t">
                  <div className="text-sm text-muted-foreground mb-4">Срок реализации: до 2 недель</div>
                  <Button className="w-full" variant="outline">Выбрать пакет</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-accent border-2 shadow-xl scale-105 relative bg-accent/5">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-6 py-1.5 rounded text-sm font-semibold shadow-md">
                Рекомендуем
              </div>
              <CardHeader>
                <div className="text-sm font-semibold text-muted-foreground mb-2">ДЛЯ СРЕДНЕГО БИЗНЕСА</div>
                <CardTitle className="text-2xl mb-2">Комплексная систематизация</CardTitle>
                <div className="text-3xl font-bold mb-4">
                  от 180 000 ₽
                </div>
                <CardDescription>Полный контроль и рост операционной эффективности</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {[
                    'Внедрение организационной схемы',
                    'Настройка аналитических дашбордов',
                    'Создание базы знаний',
                    'Система задач и координаций',
                    'Обучение команды',
                    'Техническая поддержка 3 месяца',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Icon name="Check" className="text-accent mt-0.5" size={20} />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t">
                  <div className="text-sm text-muted-foreground mb-4">Срок реализации: до 1 месяца</div>
                  <Button className="w-full">Заказать внедрение</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all border-2">
              <CardHeader>
                <div className="text-sm font-semibold text-muted-foreground mb-2">ДЛЯ КРУПНОГО БИЗНЕСА</div>
                <CardTitle className="text-2xl mb-2">Премиум решение</CardTitle>
                <div className="text-3xl font-bold mb-4">
                  от 350 000 ₽
                </div>
                <CardDescription>Индивидуальное решение под специфику бизнеса</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {[
                    'Глубокий аудит процессов',
                    'Индивидуальная архитектура',
                    'Полный цикл внедрения',
                    'Интеграция с корп. системами',
                    'Обучение всей команды',
                    'Долгосрочное сопровождение',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-0.5" size={20} />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t">
                  <div className="text-sm text-muted-foreground mb-4">Срок реализации: от 1 месяца</div>
                  <Button className="w-full" variant="outline">Обсудить проект</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            Указанная стоимость является ориентировочной. Точный расчет производится после аудита бизнес-процессов.
          </p>
        </div>
      </section>

      <section id="process" className="py-20 bg-card">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Методология внедрения</h2>
            <p className="text-lg text-muted-foreground">Проверенный процесс из четырех последовательных этапов</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: 'Search', title: 'Диагностика', desc: 'Комплексный аудит бизнес-процессов и определение целей' },
              { icon: 'FileText', title: 'Проектирование', desc: 'Разработка технического задания и согласование плана' },
              { icon: 'Wrench', title: 'Внедрение', desc: 'Конфигурация системы и обучение сотрудников' },
              { icon: 'Rocket', title: 'Запуск', desc: 'Ввод в эксплуатацию и техническое сопровождение' },
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
                  <p className="text-muted-foreground text-sm">{step.desc}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cases" className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Подтвержденные результаты</h2>
            <p className="text-lg text-muted-foreground">Измеримые улучшения ключевых показателей эффективности</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { industry: 'Производственный сектор', result: 'Сокращение времени отчетности на 40% за счет автоматизации', metric: '-40%' },
              { industry: 'Торговая компания', result: 'Увеличение скорости обработки заказов в 2 раза', metric: '×2' },
              { industry: 'Сервисная компания', result: 'Рост пропускной способности на 25% без расширения штата', metric: '+25%' },
            ].map((caseItem, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow border-2">
                <CardHeader>
                  <div className="text-4xl font-bold text-accent mb-2">{caseItem.metric}</div>
                  <CardTitle className="text-lg">{caseItem.industry}</CardTitle>
                  <CardDescription className="text-base">{caseItem.result}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="relative">
            <img 
              src="https://cdn.poehali.dev/projects/fae0f8b8-eb04-4ac2-9339-dc749de6e54f/files/6ded60ca-08ab-4de2-9118-506d8154990a.jpg" 
              alt="Успешные кейсы внедрения"
              className="rounded-lg shadow-xl w-full max-h-96 object-cover"
            />
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 bg-card">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши преимущества</h2>
            <p className="text-lg text-muted-foreground">Почему клиенты выбирают нас в качестве партнера по трансформации</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: 'Target', title: 'Ориентация на результат', desc: 'Решаем бизнес-задачи, а не просто внедряем ПО' },
              { icon: 'Package', title: 'Комплексный подход', desc: 'Полный цикл от аудита до долгосрочной поддержки' },
              { icon: 'Settings', title: 'Индивидуальные решения', desc: 'Настройка платформы под специфику бизнеса' },
              { icon: 'Zap', title: 'Быстрое внедрение', desc: 'Видимые результаты в первые недели работы' },
            ].map((benefit, idx) => (
              <Card key={idx} className="text-center hover:shadow-lg transition-shadow border">
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

      <section id="contact" className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Начните трансформацию вашего бизнеса
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Получите персональное коммерческое предложение в течение 24 часов
            </p>

            <Card className="max-w-md mx-auto border-2 shadow-xl">
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
                  <Button type="submit" className="w-full" size="lg" variant="secondary">
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

      <footer className="py-8 border-t bg-card">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Building2" size={24} className="text-primary" />
              <span className="font-bold">СистемаУспех</span>
            </div>
            
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-accent transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-primary transition-colors">Публичная оферта</a>
            </div>
            
            <div className="text-sm text-muted-foreground">
              © 2025 СистемаУспех. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
