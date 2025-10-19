import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const detailedServices = [
    {
      id: 1,
      category: 'implementation',
      icon: 'Settings',
      name: 'Базовое внедрение Platrum',
      shortDesc: 'Быстрый старт с ключевыми модулями',
      fullDesc: 'Настройка базовых модулей системы Platrum для оперативного начала работы. Включает конфигурацию рабочих мест, базовую структуру и обучение ключевых пользователей.',
      price: 'от 50 000 ₽',
      time: '1 неделя',
      includes: [
        'Установка и настройка системы',
        'Конфигурация базовых модулей',
        'Создание до 5 пользователей',
        'Настройка базовых прав доступа',
        'Обучение администратора'
      ],
      forWhom: 'Малый бизнес, стартапы, команды до 20 человек'
    },
    {
      id: 2,
      category: 'implementation',
      icon: 'Layers',
      name: 'Полное внедрение Platrum',
      shortDesc: 'Комплексное решение для всей компании',
      fullDesc: 'Глубокое внедрение всех модулей Platrum с индивидуальной настройкой под бизнес-процессы компании. Включает миграцию данных, интеграции и полное обучение команды.',
      price: 'от 180 000 ₽',
      time: '1 месяц',
      includes: [
        'Полная установка всех модулей',
        'Настройка оргструктуры компании',
        'Миграция данных из текущих систем',
        'Настройка всех прав и ролей',
        'Обучение всех сотрудников',
        'Техническая поддержка 3 месяца'
      ],
      forWhom: 'Средний и крупный бизнес, компании от 50 человек'
    },
    {
      id: 3,
      category: 'analytics',
      icon: 'BarChart3',
      name: 'Внедрение дашбордов',
      shortDesc: 'Индивидуальные панели аналитики',
      fullDesc: 'Разработка и настройка персонализированных дашбордов для отслеживания ключевых метрик бизнеса в реальном времени. Визуализация данных и автоматические отчеты.',
      price: 'от 30 000 ₽',
      time: '3-5 дней',
      includes: [
        'Анализ требований к метрикам',
        'Разработка до 5 дашбордов',
        'Настройка автообновления данных',
        'Визуализация и графики',
        'Обучение работе с дашбордами'
      ],
      forWhom: 'Руководители, аналитики, владельцы бизнеса'
    },
    {
      id: 4,
      category: 'analytics',
      icon: 'TrendingUp',
      name: 'Аудит отдела продаж',
      shortDesc: 'Анализ воронки и точек роста',
      fullDesc: 'Комплексный аудит процессов продаж с выявлением узких мест и разработкой рекомендаций по увеличению конверсии. Включает анализ воронки, CRM-процессов и KPI.',
      price: 'от 70 000 ₽',
      time: '1-2 недели',
      includes: [
        'Анализ текущих процессов продаж',
        'Аудит воронки продаж',
        'Оценка эффективности менеджеров',
        'Выявление узких мест',
        'Разработка рекомендаций',
        'План оптимизации'
      ],
      forWhom: 'Коммерческие директора, руководители продаж'
    },
    {
      id: 5,
      category: 'optimization',
      icon: 'Sitemap',
      name: 'Настройка оргструктуры',
      shortDesc: 'Построение иерархии и распределение ролей',
      fullDesc: 'Создание четкой организационной структуры в Platrum с распределением ролей, полномочий и зон ответственности каждого сотрудника.',
      price: 'от 40 000 ₽',
      time: '5-7 дней',
      includes: [
        'Анализ текущей структуры',
        'Построение оргсхемы в системе',
        'Настройка ролей и полномочий',
        'Распределение зон ответственности',
        'Настройка иерархии отчетности'
      ],
      forWhom: 'HR-директора, топ-менеджеры'
    },
    {
      id: 6,
      category: 'optimization',
      icon: 'BookOpen',
      name: 'База знаний',
      shortDesc: 'Систематизация корпоративной информации',
      fullDesc: 'Создание структурированной базы знаний компании с документами, регламентами, инструкциями и FAQ. Быстрый доступ к информации для всех сотрудников.',
      price: 'от 35 000 ₽',
      time: '1 неделя',
      includes: [
        'Структурирование документов',
        'Создание разделов и категорий',
        'Загрузка до 100 документов',
        'Настройка прав доступа',
        'Система поиска по базе'
      ],
      forWhom: 'Все компании, особенно с большой текучкой кадров'
    },
    {
      id: 7,
      category: 'integration',
      icon: 'Link',
      name: 'Интеграция с CRM',
      shortDesc: 'Синхронизация с внешними системами',
      fullDesc: 'Настройка двусторонней интеграции Platrum с вашей CRM-системой для автоматической синхронизации данных о клиентах, сделках и контактах.',
      price: 'от 60 000 ₽',
      time: '2 недели',
      includes: [
        'Анализ требований к интеграции',
        'Настройка API-соединения',
        'Синхронизация данных',
        'Тестирование интеграции',
        'Документация по работе'
      ],
      forWhom: 'Компании с действующей CRM-системой'
    },
    {
      id: 8,
      category: 'training',
      icon: 'GraduationCap',
      name: 'Обучение сотрудников',
      shortDesc: 'Групповые и индивидуальные программы',
      fullDesc: 'Профессиональное обучение работе с Platrum для сотрудников всех уровней. Доступны групповые сессии, индивидуальные занятия и вебинары.',
      price: 'от 20 000 ₽',
      time: '2-3 часа',
      includes: [
        'Программа под уровень пользователей',
        'Практические упражнения',
        'Методические материалы',
        'Запись вебинара (при онлайн)',
        'Сертификат о прохождении'
      ],
      forWhom: 'Все сотрудники, работающие с системой'
    },
    {
      id: 9,
      category: 'support',
      icon: 'Headphones',
      name: 'Техническая поддержка',
      shortDesc: 'Ежемесячное сопровождение',
      fullDesc: 'Постоянная техническая поддержка и консультации по работе с Platrum. Решение технических вопросов, обновления системы и оптимизация процессов.',
      price: 'от 15 000 ₽/мес',
      time: 'Постоянно',
      includes: [
        'Консультации по телефону/email',
        'Решение технических проблем',
        'Обновления системы',
        'Backup данных',
        'Ежемесячные отчеты'
      ],
      forWhom: 'Все клиенты, использующие Platrum'
    },
    {
      id: 10,
      category: 'analytics',
      icon: 'FileBarChart',
      name: 'Аудит бизнес-процессов',
      shortDesc: 'Комплексный анализ эффективности',
      fullDesc: 'Глубокий анализ всех бизнес-процессов компании с выявлением неэффективных участков и разработкой детального плана оптимизации.',
      price: 'от 90 000 ₽',
      time: '2-3 недели',
      includes: [
        'Интервью с ключевыми сотрудниками',
        'Анализ документооборота',
        'Оценка эффективности процессов',
        'Выявление узких мест',
        'Детальный отчет',
        'План внедрения улучшений'
      ],
      forWhom: 'Собственники бизнеса, топ-менеджеры'
    }
  ];

  const packages = [
    {
      name: 'Быстрый старт',
      price: '70 000 ₽',
      desc: 'Для малого бизнеса',
      subtitle: 'Идеально для команд до 20 человек',
      features: ['Базовое внедрение Platrum', 'Обучение 5 сотрудников', 'Настройка 3 дашбордов', 'Техподдержка 1 месяц', 'База знаний (до 50 документов)'],
      time: 'до 2 недель',
      popular: false,
      savings: null
    },
    {
      name: 'Системный подход',
      price: '180 000 ₽',
      desc: 'Для среднего бизнеса',
      subtitle: 'Оптимально для компаний 20-100 человек',
      features: ['Полное внедрение всех модулей', 'Настройка оргструктуры', 'Дашборды для всех отделов', 'База знаний (до 200 документов)', 'Обучение команды', 'Техподдержка 3 месяца'],
      time: 'до 1 месяца',
      popular: true,
      savings: 'Экономия 40 000 ₽'
    },
    {
      name: 'Индивидуальное решение',
      price: 'от 350 000 ₽',
      desc: 'Для крупных компаний',
      subtitle: 'Для компаний от 100 сотрудников',
      features: ['Глубокий аудит всех процессов', 'Индивидуальная архитектура', 'Интеграция с корп. системами', 'Неограниченная база знаний', 'Обучение всех сотрудников', 'Персональный менеджер', 'Техподдержка 24/7'],
      time: 'от 1 месяца',
      popular: false,
      savings: 'Экономия до 100 000 ₽'
    },
  ];

  const categories = [
    { id: 'all', name: 'Все услуги', icon: 'Grid3x3' },
    { id: 'implementation', name: 'Внедрение', icon: 'Settings' },
    { id: 'analytics', name: 'Аналитика', icon: 'BarChart3' },
    { id: 'optimization', name: 'Оптимизация', icon: 'Zap' },
    { id: 'integration', name: 'Интеграции', icon: 'Link' },
    { id: 'training', name: 'Обучение', icon: 'GraduationCap' },
    { id: 'support', name: 'Поддержка', icon: 'Headphones' },
  ];

  const filteredServices = activeCategory === 'all' 
    ? detailedServices 
    : detailedServices.filter(s => s.category === activeCategory);

  const faq = [
    {
      q: 'Как быстро можно начать работу с Platrum?',
      a: 'При выборе пакета "Быстрый старт" базовая система будет готова к работе через 1-2 недели. Полное внедрение занимает до 1 месяца в зависимости от масштаба компании.'
    },
    {
      q: 'Какие гарантии вы предоставляете?',
      a: 'Мы гарантируем работоспособность системы и соответствие заявленному функционалу. В пакеты включена техническая поддержка от 1 до 3 месяцев, в течение которой мы оперативно решаем любые вопросы.'
    },
    {
      q: 'Можно ли оплатить услуги частями?',
      a: 'Да, для проектов стоимостью от 100 000 ₽ доступна рассрочка платежа. Обычно это 50% предоплата и 50% после завершения работ.'
    },
    {
      q: 'Нужно ли покупать дополнительное ПО?',
      a: 'Нет, Platrum — это готовое облачное решение. Вам нужен только браузер и интернет. Все лицензии и инфраструктура включены в стоимость.'
    },
    {
      q: 'Что входит в техническую поддержку?',
      a: 'Консультации по работе с системой, решение технических вопросов, помощь с настройками, регулярные обновления и backup данных.'
    },
    {
      q: 'Можно ли доработать систему под наши процессы?',
      a: 'Да, мы предлагаем индивидуальные доработки и кастомизацию. Стоимость рассчитывается отдельно после анализа требований.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="mb-4" variant="secondary">Полный каталог услуг</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Наши услуги</h1>
            <p className="text-xl text-muted-foreground">
              Комплексные решения для систематизации управления — от быстрого старта до полной трансформации бизнеса
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={activeCategory === cat.id ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveCategory(cat.id)}
                className="gap-2"
              >
                <Icon name={cat.icon} size={16} />
                {cat.name}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <Card key={service.id} className="border-2 hover:shadow-xl transition-all group">
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <Icon name={service.icon} className="text-accent" size={28} />
                  </div>
                  <CardTitle className="text-lg mb-2">{service.name}</CardTitle>
                  <CardDescription>{service.shortDesc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">{service.fullDesc}</p>
                    
                    <div className="space-y-2">
                      <div className="text-sm font-medium">Что входит:</div>
                      <ul className="space-y-1">
                        {service.includes.slice(0, 3).map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={16} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      {service.includes.length > 3 && (
                        <p className="text-xs text-muted-foreground">+ ещё {service.includes.length - 3}</p>
                      )}
                    </div>

                    <div className="pt-4 border-t space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Стоимость:</span>
                        <span className="text-lg font-bold">{service.price}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Срок:</span>
                        <span className="text-sm font-medium">{service.time}</span>
                      </div>
                      <div className="text-xs text-muted-foreground mt-2">
                        <Icon name="Users" size={12} className="inline mr-1" />
                        {service.forWhom}
                      </div>
                    </div>

                    <Button className="w-full" variant="outline" asChild>
                      <Link to="/contacts">Заказать услугу</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Пакетные решения</h2>
            <p className="text-lg text-muted-foreground">Готовые комплексы услуг со скидкой до 30%</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {packages.map((pkg, idx) => (
              <Card 
                key={idx} 
                className={`hover:shadow-xl transition-all ${pkg.popular ? 'border-accent border-2 scale-105 relative' : 'border-2'}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-6 py-1.5 rounded text-sm font-semibold shadow-md">
                    Хит продаж
                  </div>
                )}
                <CardHeader>
                  <div className="text-sm font-semibold text-muted-foreground mb-1">{pkg.desc}</div>
                  <CardTitle className="text-2xl mb-1">{pkg.name}</CardTitle>
                  <p className="text-sm text-muted-foreground mb-3">{pkg.subtitle}</p>
                  <div className="text-4xl font-bold mb-2">{pkg.price}</div>
                  {pkg.savings && (
                    <Badge variant="outline" className="text-green-600 border-green-600 w-fit">
                      {pkg.savings}
                    </Badge>
                  )}
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {pkg.features.map((feature, fidx) => (
                      <div key={fidx} className="flex items-start gap-2">
                        <Icon name="Check" className={pkg.popular ? 'text-accent' : 'text-primary'} size={20} />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t">
                    <div className="text-sm text-muted-foreground mb-4 flex items-center gap-2">
                      <Icon name="Clock" size={16} />
                      Срок реализации: {pkg.time}
                    </div>
                    <Button className="w-full" variant={pkg.popular ? 'default' : 'outline'} size="lg" asChild>
                      <Link to="/contacts">Заказать пакет</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-2 bg-muted/30">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Percent" className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Специальное предложение</h3>
                  <p className="text-muted-foreground mb-4">
                    При заказе пакета "Системный подход" или "Индивидуальное решение" — бесплатная миграция данных из вашей текущей системы (стоимость до 50 000 ₽)
                  </p>
                  <Button variant="outline" asChild>
                    <Link to="/contacts">Узнать подробнее</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Часто задаваемые вопросы</h2>
            <p className="text-lg text-muted-foreground">Ответы на популярные вопросы об услугах</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faq.map((item, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold hover:text-accent">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Не нашли нужную услугу?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Опишите вашу задачу, и мы разработаем индивидуальное решение с учетом специфики вашего бизнеса
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contacts">Обсудить проект</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link to="/cases">Смотреть кейсы</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
