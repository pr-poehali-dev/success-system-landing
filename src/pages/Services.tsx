import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Services = () => {
  const services = [
    { name: 'Базовое внедрение Platrum', desc: 'Быстрый старт, настройка модулей', price: 'от 50 000 ₽', time: '1 неделя' },
    { name: 'Обучение сотрудников', desc: 'Групповое/индивидуальное', price: 'от 20 000 ₽', time: '2-3 часа' },
    { name: 'Внедрение дашбордов', desc: 'Индивидуальные метрики', price: 'от 30 000 ₽', time: '3 дня' },
    { name: 'Аудит отдела продаж', desc: 'Анализ воронки, рекомендации', price: 'от 70 000 ₽', time: '1 неделя' },
    { name: 'Настройка оргструктуры', desc: 'Создание иерархии, роли', price: 'от 40 000 ₽', time: '5 дней' },
    { name: 'База знаний', desc: 'Структурирование документов', price: 'от 35 000 ₽', time: '1 неделя' },
    { name: 'Интеграция с CRM', desc: 'Синхронизация данных', price: 'от 60 000 ₽', time: '2 недели' },
    { name: 'Техническая поддержка', desc: 'Ежемесячное обслуживание', price: 'от 15 000 ₽/мес', time: 'Постоянно' },
  ];

  const packages = [
    {
      name: 'Быстрый старт',
      price: '70 000 ₽',
      desc: 'Для малого бизнеса',
      features: ['Базовое внедрение', 'Обучение 5 сотрудников', 'Настройка дашбордов', 'Поддержка 1 месяц'],
      time: 'до 2 недель',
      popular: false
    },
    {
      name: 'Системный подход',
      price: '180 000 ₽',
      desc: 'Для среднего бизнеса',
      features: ['Полное внедрение', 'Оргструктура', 'Дашборды', 'База знаний', 'Обучение команды', 'Поддержка 3 месяца'],
      time: 'до 1 месяца',
      popular: true
    },
    {
      name: 'Индивидуальное решение',
      price: 'от 350 000 ₽',
      desc: 'Для крупных компаний',
      features: ['Глубокий аудит', 'Индивидуальная архитектура', 'Интеграции', 'Обучение всех сотрудников', 'Долгосрочная поддержка'],
      time: 'от 1 месяца',
      popular: false
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Наши услуги</h1>
            <p className="text-xl text-muted-foreground">
              Мы предлагаем комплексные решения для систематизации управления вашим бизнесом
            </p>
          </div>

          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl">Прайс-лист услуг</CardTitle>
              <CardDescription>Полный перечень услуг с ценами и сроками</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Услуга</TableHead>
                      <TableHead>Описание</TableHead>
                      <TableHead>Стоимость</TableHead>
                      <TableHead>Сроки</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {services.map((service, idx) => (
                      <TableRow key={idx}>
                        <TableCell className="font-medium">{service.name}</TableCell>
                        <TableCell className="text-muted-foreground">{service.desc}</TableCell>
                        <TableCell className="font-semibold">{service.price}</TableCell>
                        <TableCell>{service.time}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Пакетные решения</h2>
            <p className="text-lg text-muted-foreground">Готовые комплексные предложения для разных масштабов бизнеса</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <Card 
                key={idx} 
                className={`hover:shadow-xl transition-all ${pkg.popular ? 'border-accent border-2 scale-105 relative' : 'border-2'}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-6 py-1.5 rounded text-sm font-semibold shadow-md">
                    Популярный
                  </div>
                )}
                <CardHeader>
                  <div className="text-sm font-semibold text-muted-foreground mb-2">{pkg.desc}</div>
                  <CardTitle className="text-2xl mb-2">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold mb-4">{pkg.price}</div>
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
                    <div className="text-sm text-muted-foreground mb-4">Срок: {pkg.time}</div>
                    <Button className="w-full" variant={pkg.popular ? 'default' : 'outline'} asChild>
                      <Link to="/contacts">Заказать</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Нужно индивидуальное решение?</CardTitle>
                <CardDescription>Опишите вашу задачу, и мы подготовим персональное предложение</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Имя</label>
                      <input type="text" className="w-full px-3 py-2 border rounded" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Телефон</label>
                      <input type="tel" className="w-full px-3 py-2 border rounded" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <input type="email" className="w-full px-3 py-2 border rounded" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Опишите вашу задачу</label>
                    <textarea className="w-full px-3 py-2 border rounded h-32"></textarea>
                  </div>
                  <Button className="w-full" size="lg">Отправить запрос</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
