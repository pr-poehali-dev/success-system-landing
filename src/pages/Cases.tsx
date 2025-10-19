import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const Cases = () => {
  const cases = [
    {
      company: 'Производственная компания "ТехноПром"',
      industry: 'Производство',
      challenge: 'Отсутствие прозрачности в производственных процессах, постоянные срывы сроков, высокая текучка кадров',
      solution: 'Внедрили полную систему Platrum с модулями: оргструктура, дашборды производства, система задач и координаций',
      results: [
        'Сократили время формирования отчетов на 40%',
        'Увеличили соблюдение сроков до 92%',
        'Снизили текучку на 30%'
      ],
      metrics: [
        { label: 'Время отчетности', value: '-40%' },
        { label: 'Соблюдение сроков', value: '92%' },
        { label: 'Текучка кадров', value: '-30%' }
      ],
      duration: '1 месяц',
      team: '120 сотрудников'
    },
    {
      company: 'Торговая сеть "МегаМаркет"',
      industry: 'Розничная торговля',
      challenge: 'Хаос в обработке заказов, отсутствие единой базы знаний, сложности с масштабированием на новые регионы',
      solution: 'Настроили систему управления заказами, создали базу знаний для всех регионов, внедрили CRM-интеграцию',
      results: [
        'Ускорили обработку заказов в 2 раза',
        'Открыли 5 новых филиалов без доп. найма',
        'Повысили удовлетворенность клиентов до 4.8/5'
      ],
      metrics: [
        { label: 'Скорость обработки', value: '×2' },
        { label: 'Новых филиалов', value: '+5' },
        { label: 'Рейтинг клиентов', value: '4.8/5' }
      ],
      duration: '6 недель',
      team: '85 сотрудников'
    },
    {
      company: 'IT-компания "DigitalSolutions"',
      industry: 'IT-услуги',
      challenge: 'Невозможность брать новые проекты из-за перегрузки команды, отсутствие контроля над ресурсами',
      solution: 'Внедрили систему проектного управления, настроили дашборды загрузки ресурсов, автоматизировали планирование',
      results: [
        'Увеличили пропускную способность на 25%',
        'Снизили переработки на 35%',
        'Повысили маржинальность проектов на 18%'
      ],
      metrics: [
        { label: 'Пропускная способность', value: '+25%' },
        { label: 'Переработки', value: '-35%' },
        { label: 'Маржинальность', value: '+18%' }
      ],
      duration: '3 недели',
      team: '45 сотрудников'
    }
  ];

  const testimonials = [
    {
      name: 'Алексей Петров',
      position: 'Генеральный директор, ТехноПром',
      text: 'СистемаУспех помогли нам навести порядок в производстве. Теперь мы видим каждый процесс в реальном времени. Результаты превзошли ожидания.',
      rating: 5
    },
    {
      name: 'Мария Иванова',
      position: 'Директор по развитию, МегаМаркет',
      text: 'Благодаря внедрению Platrum мы смогли масштабироваться на новые регионы без потери качества. Команда профессиональная, всё в срок.',
      rating: 5
    },
    {
      name: 'Дмитрий Сергеев',
      position: 'CEO, DigitalSolutions',
      text: 'Отличная работа! Теперь мы берем на 25% больше проектов, при этом команда не перегружена. Система окупилась за 3 месяца.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Кейсы и отзывы</h1>
            <p className="text-xl text-muted-foreground">
              Реальные истории успеха наших клиентов с измеримыми результатами
            </p>
          </div>

          <div className="space-y-12">
            {cases.map((caseItem, idx) => (
              <Card key={idx} className="border-2 overflow-hidden">
                <CardHeader className="bg-muted/30">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <CardTitle className="text-2xl mb-2">{caseItem.company}</CardTitle>
                      <Badge variant="secondary">{caseItem.industry}</Badge>
                    </div>
                    <div className="text-right text-sm text-muted-foreground">
                      <div className="flex items-center gap-2 mb-1">
                        <Icon name="Clock" size={14} />
                        {caseItem.duration}
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Users" size={14} />
                        {caseItem.team}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                          <Icon name="AlertCircle" className="text-destructive" size={20} />
                          Проблема
                        </h3>
                        <p className="text-muted-foreground">{caseItem.challenge}</p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                          <Icon name="Lightbulb" className="text-accent" size={20} />
                          Решение
                        </h3>
                        <p className="text-muted-foreground">{caseItem.solution}</p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                          <Icon name="CheckCircle2" className="text-green-600" size={20} />
                          Результаты
                        </h3>
                        <ul className="space-y-2">
                          {caseItem.results.map((result, ridx) => (
                            <li key={ridx} className="flex items-start gap-2">
                              <Icon name="Check" className="text-primary mt-0.5" size={18} />
                              <span className="text-muted-foreground">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="bg-muted/30 rounded-lg p-6">
                      <h3 className="font-semibold text-lg mb-6 text-center">Ключевые метрики</h3>
                      <div className="space-y-6">
                        {caseItem.metrics.map((metric, midx) => (
                          <div key={midx} className="text-center">
                            <div className="text-4xl font-bold text-accent mb-2">{metric.value}</div>
                            <div className="text-sm text-muted-foreground">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-lg text-muted-foreground">Что говорят о нас руководители компаний</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="border-2">
                <CardHeader>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <CardDescription className="text-base italic">"{testimonial.text}"</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Хотите такие же результаты?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Закажите бесплатную консультацию и узнайте, как мы можем помочь вашему бизнесу
            </p>
            <Button size="lg" asChild>
              <Link to="/contacts">Заказать консультацию</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cases;
