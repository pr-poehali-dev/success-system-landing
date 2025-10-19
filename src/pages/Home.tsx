import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Home = () => {
  const pages = [
    {
      title: 'Услуги',
      route: '/services',
      description: 'Полный каталог услуг по внедрению и оптимизации',
      icon: 'Briefcase',
      color: 'bg-blue-500',
      highlights: ['10 типов услуг', 'Фильтры по категориям', 'Детальное описание'],
      preview: 'Внедрение, аналитика, обучение, интеграции и техподдержка'
    },
    {
      title: 'Цены',
      route: '/pricing',
      description: 'Прозрачные цены и готовые пакеты решений',
      icon: 'DollarSign',
      color: 'bg-green-500',
      highlights: ['3 готовых пакета', 'Экономия до 30%', 'Гибкая рассрочка'],
      preview: 'От 70 000 ₽ — Быстрый старт для малого бизнеса'
    },
    {
      title: 'Кейсы',
      route: '/cases',
      description: 'Реальные истории успеха наших клиентов',
      icon: 'Trophy',
      color: 'bg-purple-500',
      highlights: ['3 детальных кейса', 'Отзывы с рейтингами', 'Измеримые результаты'],
      preview: 'Производство, IT, Логистика — рост от 35% до 120%'
    },
    {
      title: 'О нас',
      route: '/about',
      description: 'Наша команда, миссия и подход к работе',
      icon: 'Users',
      color: 'bg-orange-500',
      highlights: ['История компании', 'Команда экспертов', 'Наши ценности'],
      preview: 'Более 50 успешных проектов с 2018 года'
    },
    {
      title: 'Блог',
      route: '/blog',
      description: 'Статьи об управлении и эффективности',
      icon: 'BookOpen',
      color: 'bg-pink-500',
      highlights: ['Экспертные статьи', 'Кейс-стади', 'Практические советы'],
      preview: 'Регулярные публикации о системном управлении'
    },
    {
      title: 'Контакты',
      route: '/contacts',
      description: 'Все способы связи и форма обратной связи',
      icon: 'Phone',
      color: 'bg-cyan-500',
      highlights: ['Телефон и email', 'Форма заявки', 'Соцсети и мессенджеры'],
      preview: '+7 (495) 123-45-67 • info@sistemauspeha.ru'
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Badge className="mb-6" variant="secondary">Навигация по сайту СистемаУспех</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Структура сайта
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Обзор всех разделов сайта — от услуг до контактов. Выберите нужную страницу для перехода
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pages.map((page, idx) => (
              <Link to={page.route} key={idx}>
                <Card className="h-full border-2 hover:shadow-2xl hover:border-accent transition-all group cursor-pointer">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-14 h-14 rounded-xl ${page.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <Icon name={page.icon} className="text-white" size={28} />
                      </div>
                      <Badge variant="outline" className="group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                        Открыть
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl mb-2 group-hover:text-accent transition-colors">
                      {page.title}
                    </CardTitle>
                    <CardDescription className="text-base">{page.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      {page.highlights.map((highlight, hidx) => (
                        <div key={hidx} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                          <span className="text-muted-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="pt-4 border-t">
                      <div className="text-sm text-muted-foreground italic">
                        {page.preview}
                      </div>
                    </div>

                    <Button className="w-full group-hover:bg-accent group-hover:text-accent-foreground" variant="outline">
                      Перейти к разделу
                      <Icon name="ArrowRight" size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                    <Icon name="Info" className="text-white" size={28} />
                  </div>
                  <div>
                    <CardTitle className="text-2xl mb-2">О структуре сайта</CardTitle>
                    <CardDescription className="text-base">
                      Сайт СистемаУспех организован логично и удобно для навигации
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h3 className="font-semibold flex items-center gap-2">
                      <Icon name="Target" size={18} className="text-primary" />
                      Коммерческие разделы
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Услуги</strong> — детальный каталог всех предложений</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Цены</strong> — прозрачные тарифы и пакеты</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Кейсы</strong> — социальные доказательства</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-semibold flex items-center gap-2">
                      <Icon name="MessageCircle" size={18} className="text-primary" />
                      Информационные разделы
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>О нас</strong> — доверие и экспертность</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Блог</strong> — контент-маркетинг</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Контакты</strong> — максимум способов связи</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="pt-6 border-t">
                  <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                    <div className="flex items-start gap-3">
                      <Icon name="Lightbulb" className="text-accent mt-0.5 flex-shrink-0" size={20} />
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Совет по навигации</p>
                        <p className="text-sm text-muted-foreground">
                          Начните с раздела <strong>Услуги</strong> для понимания возможностей, затем изучите <strong>Кейсы</strong> для оценки результатов, и переходите в <strong>Контакты</strong> для заявки
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-4">
                  <Button asChild>
                    <Link to="/services">
                      <Icon name="Briefcase" size={16} className="mr-2" />
                      Начать с услуг
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link to="/contacts">
                      <Icon name="Phone" size={16} className="mr-2" />
                      Связаться с нами
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Icon name="Rocket" size={48} className="mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Готовы начать?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Выберите удобный раздел и узнайте, как СистемаУспех поможет систематизировать ваш бизнес
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/services">Изучить услуги</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link to="/cases">Посмотреть результаты</Link>
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
