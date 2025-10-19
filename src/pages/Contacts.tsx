import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Contacts = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Контакты</h1>
            <p className="text-xl text-muted-foreground">
              Свяжитесь с нами удобным способом или оставьте заявку на консультацию
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Card className="border-2 mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl">Связаться с нами</CardTitle>
                  <CardDescription>Выберите удобный способ связи</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" className="text-primary" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Телефон</div>
                      <a href="tel:+79991234567" className="text-muted-foreground hover:text-accent transition-colors">
                        +7 (999) 123-45-67
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">Пн-Пт: 9:00 - 18:00 МСК</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" className="text-primary" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Email</div>
                      <a href="mailto:info@sistemauspeha.ru" className="text-muted-foreground hover:text-accent transition-colors">
                        info@sistemauspeha.ru
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">Ответим в течение 24 часов</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" className="text-primary" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Офис</div>
                      <p className="text-muted-foreground">г. Москва, ул. Тверская, д. 1</p>
                      <p className="text-sm text-muted-foreground mt-1">БЦ "Центральный", офис 501</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="MessageCircle" className="text-primary" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Мессенджеры</div>
                      <div className="space-y-1">
                        <a href="https://t.me/sistemauspeha" className="text-muted-foreground hover:text-accent transition-colors block">
                          Telegram: @sistemauspeha
                        </a>
                        <a href="https://wa.me/79991234567" className="text-muted-foreground hover:text-accent transition-colors block">
                          WhatsApp: +7 (999) 123-45-67
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 bg-muted/30">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-4">Социальные сети</h3>
                  <div className="flex gap-4">
                    <a href="#" className="w-12 h-12 rounded-lg bg-card border-2 flex items-center justify-center hover:border-accent transition-colors">
                      <Icon name="Linkedin" size={20} />
                    </a>
                    <a href="#" className="w-12 h-12 rounded-lg bg-card border-2 flex items-center justify-center hover:border-accent transition-colors">
                      <Icon name="Send" size={20} />
                    </a>
                    <a href="#" className="w-12 h-12 rounded-lg bg-card border-2 flex items-center justify-center hover:border-accent transition-colors">
                      <Icon name="Youtube" size={20} />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-2 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Оставьте заявку</CardTitle>
                <CardDescription>Получите бесплатную консультацию по внедрению Platrum</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Имя *</Label>
                    <Input 
                      id="name" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required 
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input 
                      id="phone" 
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required 
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email" 
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required 
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Сообщение</Label>
                    <Textarea 
                      id="message" 
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Расскажите о вашей задаче..."
                      className="h-32"
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Отправить заявку
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container">
          <Card className="border-2 bg-primary text-primary-foreground">
            <CardContent className="pt-6">
              <div className="text-center max-w-2xl mx-auto">
                <Icon name="Clock" size={48} className="mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Готовы начать прямо сейчас?</h3>
                <p className="text-lg opacity-90 mb-6">
                  Оставьте заявку на бесплатную консультацию, и мы свяжемся с вами в течение 1 часа в рабочее время
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button size="lg" variant="secondary">
                    <Icon name="Phone" size={18} className="mr-2" />
                    Позвонить сейчас
                  </Button>
                  <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                    <Icon name="MessageCircle" size={18} className="mr-2" />
                    Написать в Telegram
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacts;
