import agentImg from "@/assets/agent.jpg";
import apt1 from "@/assets/apt1.jpg";
import apt2 from "@/assets/apt2.jpg";
import apt3 from "@/assets/apt3.jpg";
import keysImg from "@/assets/keys.jpg";
import kazanImg from "@/assets/kazan.jpg";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

const listings = [
  { img: apt1, title: "2-комнатная, ЖК «Сказочный лес»", price: "8 950 000 ₽", area: "62 м²", district: "Приволжский р-н" },
  { img: apt2, title: "3-комнатная, ЖК «Берег»", price: "14 200 000 ₽", area: "84 м²", district: "Ново-Савиновский р-н" },
  { img: apt3, title: "1-комнатная, ул. Чистопольская", price: "6 400 000 ₽", area: "41 м²", district: "Центр" },
];

const services = [
  { t: "Продажа квартиры", d: "Оценка, фото, реклама, показы, сделка под ключ." },
  { t: "Подбор и покупка", d: "Подберём 5–10 вариантов под бюджет и район." },
  { t: "Ипотека", d: "Подача в 12 банков, согласование ставки и лимита." },
  { t: "Юридическое сопровождение", d: "Проверка документов, договор, регистрация." },
];

const cases = [
  { t: "Семья с двумя детьми", d: "Продали 2-к в Кировском, купили 3-к в новостройке. 27 дней.", tag: "Альтернатива" },
  { t: "Молодая пара, ипотека", d: "Согласовали ставку 8.4%, закрыли сделку за 18 дней.", tag: "Покупка" },
  { t: "Срочная продажа", d: "Цена выше рынка на 4%, выход на сделку за 12 дней.", tag: "Продажа" },
];

const reviews = [
  { n: "Алина М.", t: "Спокойно довели сделку до конца. Все документы заранее, без сюрпризов." },
  { n: "Рустам И.", t: "Подобрали 6 вариантов за два дня. Купили тот, который сами бы не нашли." },
  { n: "Елена К.", t: "Помогли с ипотекой и торгом. Сэкономили около 380 тысяч." },
];

const Index = () => {
  const [form, setForm] = useState({ name: "", phone: "", goal: "Подбор квартиры" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error("Заполните имя и телефон");
      return;
    }
    toast.success("Заявка отправлена. Перезвоним в течение 30 минут.");
    setForm({ name: "", phone: "", goal: "Подбор квартиры" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur bg-background/80 border-b border-border">
        <div className="container mx-auto flex items-center justify-between py-4">
          <a href="#" className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="w-8 h-8 rounded-md gradient-gold flex items-center justify-center text-primary-foreground">AF</span>
            <span>Apartments Family</span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            <a href="#listings" className="hover:text-foreground">Объекты</a>
            <a href="#services" className="hover:text-foreground">Услуги</a>
            <a href="#cases" className="hover:text-foreground">Сделки</a>
            <a href="#team" className="hover:text-foreground">О нас</a>
            <a href="#contact" className="hover:text-foreground">Контакты</a>
          </nav>
          <a href="tel:+78432000000" className="hidden md:inline-block text-sm text-gold font-medium">+7 (843) 200-00-00</a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 py-16 md:py-24 items-center">
          <div className="animate-float-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary border border-border text-xs text-muted-foreground mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" style={{ animation: "pulse-dot 2s infinite" }} />
              Казань · 5 лет на рынке · 4.9 на Яндекс.Картах
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold leading-[1.05] mb-6">
              Недвижимость в Казани <span className="text-gold">без суеты</span> и скрытых процентов
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              Подберём, проверим и оформим квартиру под ваш бюджет. Договор, юридическое сопровождение, прозрачная комиссия — фиксируем на старте.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <Button asChild size="lg" className="bg-gold hover:bg-gold/90 text-primary-foreground font-medium">
                <a href="#contact">Получить подборку объектов</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-border">
                <a href="#contact">Узнать стоимость моей квартиры</a>
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-6 max-w-md">
              {[
                ["180+", "сделок"],
                ["27 дн.", "средний срок"],
                ["РГР", "членство"],
              ].map(([a, b]) => (
                <div key={a}>
                  <div className="font-display text-2xl font-bold text-foreground">{a}</div>
                  <div className="text-xs text-muted-foreground mt-1">{b}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gold/10 rounded-3xl blur-2xl" />
            <img
              src={agentImg}
              alt="Агент Apartments Family в офисе в Казани"
              width={1280}
              height={896}
              className="relative rounded-2xl shadow-elegant object-cover w-full aspect-[4/5] md:aspect-[5/6]"
            />
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-card max-w-[220px] hidden sm:block">
              <div className="text-xs text-muted-foreground mb-1">Новый объект сегодня</div>
              <div className="text-sm font-medium">2-к, ЖК «Берег» — 14.2 млн ₽</div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-y border-border bg-secondary/40">
        <div className="container mx-auto py-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          {[
            "Опыт агента 5+ лет",
            "Договор и юр. сопровождение",
            "Членство в РГР",
            "Реальные сделки в районе",
          ].map((t) => (
            <div key={t} className="flex items-center gap-2 text-muted-foreground">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-gold shrink-0">
                <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {t}
            </div>
          ))}
        </div>
      </section>

      {/* LISTINGS */}
      <section id="listings" className="container mx-auto py-20">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <div className="text-sm text-gold mb-2 uppercase tracking-wider">Свежие объекты</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold">Подборка квартир этой недели</h2>
          </div>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground">Запросить полный каталог →</a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {listings.map((l) => (
            <article key={l.title} className="group rounded-2xl bg-card border border-border overflow-hidden hover:border-gold/40 transition-colors">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={l.img} alt={l.title} loading="lazy" width={1024} height={768} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <div className="text-xs text-muted-foreground mb-2">{l.district} · {l.area}</div>
                <h3 className="font-display text-lg font-semibold mb-3">{l.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-gold font-display text-xl font-bold">{l.price}</span>
                  <a href="#contact" className="text-sm text-accent hover:underline">Смотреть →</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-secondary/30 border-y border-border">
        <div className="container mx-auto py-20">
          <div className="max-w-2xl mb-12">
            <div className="text-sm text-gold mb-2 uppercase tracking-wider">Услуги</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold">Полный цикл — от первого звонка до передачи ключей</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s, i) => (
              <div key={s.t} className="p-6 rounded-xl bg-card border border-border">
                <div className="text-gold font-display text-2xl mb-3">0{i + 1}</div>
                <h3 className="font-display font-semibold text-lg mb-2">{s.t}</h3>
                <p className="text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS — animated SVG */}
      <section className="container mx-auto py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-sm text-gold mb-2 uppercase tracking-wider">Как мы работаем</div>
          <h2 className="font-display text-3xl md:text-4xl font-bold">Прозрачный процесс из 4 шагов</h2>
        </div>
        <div className="rounded-2xl border border-border bg-card p-8 md:p-12">
          <svg viewBox="0 0 800 140" className="w-full h-auto" aria-hidden="true">
            <defs>
              <linearGradient id="line" x1="0" x2="1">
                <stop offset="0%" stopColor="hsl(38 50% 58%)" />
                <stop offset="100%" stopColor="hsl(213 100% 75%)" />
              </linearGradient>
            </defs>
            <path
              d="M60 70 L740 70"
              stroke="url(#line)"
              strokeWidth="2"
              strokeDasharray="700"
              strokeDashoffset="700"
              style={{ animation: "draw 2.5s ease-out forwards" }}
            />
            {[60, 287, 513, 740].map((x, i) => (
              <g key={x}>
                <circle cx={x} cy="70" r="14" fill="hsl(220 24% 13%)" stroke="hsl(38 50% 58%)" strokeWidth="2" />
                <text x={x} y="75" textAnchor="middle" fill="hsl(38 50% 58%)" fontSize="13" fontFamily="Manrope" fontWeight="700">{i + 1}</text>
              </g>
            ))}
          </svg>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6 text-center">
            {["Заявка и брифинг", "Подборка объектов", "Показы и торг", "Сделка и ключи"].map((t) => (
              <div key={t} className="text-sm font-medium">{t}</div>
            ))}
          </div>
        </div>
      </section>

      {/* CASES */}
      <section id="cases" className="bg-secondary/30 border-y border-border">
        <div className="container mx-auto py-20">
          <div className="max-w-2xl mb-12">
            <div className="text-sm text-gold mb-2 uppercase tracking-wider">Кейсы</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold">Реальные сделки последних месяцев</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {cases.map((c) => (
              <div key={c.t} className="p-6 rounded-xl bg-card border border-border">
                <span className="inline-block text-xs px-2 py-1 rounded-full bg-gold/10 text-gold mb-4">{c.tag}</span>
                <h3 className="font-display font-semibold text-lg mb-2">{c.t}</h3>
                <p className="text-sm text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="container mx-auto py-20 grid lg:grid-cols-2 gap-12 items-center">
        <img src={kazanImg} alt="Казань" loading="lazy" width={1280} height={640} className="rounded-2xl shadow-card aspect-video object-cover w-full" />
        <div>
          <div className="text-sm text-gold mb-2 uppercase tracking-wider">О команде</div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">5 лет работаем только по Казани и пригороду</h2>
          <p className="text-muted-foreground mb-6">
            Знаем районы, новостройки и вторичный рынок изнутри. Каждый агент — член Российской Гильдии Риэлторов, проходит ежегодную аттестацию. Не работаем «по объявлениям» — только проверенные объекты.
          </p>
          <ul className="space-y-3 text-sm">
            {[
              "Аттестация РГР и ежегодное обучение",
              "Юрист в штате — проверка чистоты сделки",
              "Фотограф и хоум-стейджер для продавцов",
            ].map((t) => (
              <li key={t} className="flex gap-3">
                <span className="text-gold">→</span>{t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-secondary/30 border-y border-border">
        <div className="container mx-auto py-20">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <div className="text-sm text-gold mb-2 uppercase tracking-wider">Отзывы</div>
              <h2 className="font-display text-3xl md:text-4xl font-bold">Что говорят клиенты</h2>
            </div>
            <div className="text-sm text-muted-foreground">Рейтинг 4.9 на Яндекс.Картах</div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.n} className="p-6 rounded-xl bg-card border border-border">
                <div className="flex gap-0.5 text-gold mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"/></svg>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4">«{r.t}»</p>
                <div className="text-sm font-medium">{r.n}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GUARANTEES */}
      <section className="container mx-auto py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="text-sm text-gold mb-2 uppercase tracking-wider">Гарантии</div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Договор и фиксированная комиссия</h2>
          <div className="space-y-4">
            {[
              ["Комиссия фиксируется в договоре", "Без надбавок и скрытых процентов на любом этапе сделки."],
              ["Юридическая проверка объекта", "Запросы в Росреестр, проверка собственников, обременений и истории квартиры."],
              ["Возврат комиссии", "Если сделка сорвалась по нашей вине — возвращаем оплату."],
            ].map(([t, d]) => (
              <div key={t} className="flex gap-4 p-4 rounded-xl bg-card border border-border">
                <div className="w-10 h-10 rounded-lg bg-gold/10 text-gold flex items-center justify-center shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" stroke="currentColor" strokeWidth="2"/></svg>
                </div>
                <div>
                  <div className="font-medium mb-1">{t}</div>
                  <div className="text-sm text-muted-foreground">{d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <img src={keysImg} alt="Передача ключей" loading="lazy" width={1024} height={768} className="rounded-2xl shadow-card aspect-[4/3] object-cover w-full" />
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-secondary/30 border-t border-border">
        <div className="container mx-auto py-20 grid lg:grid-cols-2 gap-12">
          <div>
            <div className="text-sm text-gold mb-2 uppercase tracking-wider">Заявка</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Расскажите о задаче — соберём подборку за 1 день</h2>
            <p className="text-muted-foreground mb-8">Перезвоним в течение 30 минут в рабочее время. Или напишите на email — ответим с примерами объектов.</p>
            <div className="space-y-3 text-sm">
              <div className="flex gap-3"><span className="text-gold w-20 shrink-0">Телефон</span><a href="tel:+78432000000" className="hover:text-gold">+7 (843) 200-00-00</a></div>
              <div className="flex gap-3"><span className="text-gold w-20 shrink-0">Email</span><a href="mailto:hello@apartments-family.ru" className="hover:text-gold">hello@apartments-family.ru</a></div>
              <div className="flex gap-3"><span className="text-gold w-20 shrink-0">Город</span><span>Казань</span></div>
              <div className="flex gap-3"><span className="text-gold w-20 shrink-0">Время</span><span>Пн–Сб, 9:00–20:00</span></div>
            </div>
            <div className="mt-8 rounded-xl overflow-hidden border border-border aspect-video">
              <iframe
                title="Apartments Family на карте Казани"
                src="https://yandex.ru/map-widget/v1/?ll=49.106405%2C55.796127&z=12&pt=49.106405,55.796127,pm2rdm"
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
          <form onSubmit={submit} className="p-8 rounded-2xl bg-card border border-border shadow-card h-fit">
            <h3 className="font-display text-xl font-semibold mb-6">Получить подборку объектов</h3>
            <div className="space-y-4">
              <div>
                <label className="text-xs text-muted-foreground mb-1.5 block">Ваше имя</label>
                <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-gold focus:outline-none text-sm"
                  placeholder="Имя" />
              </div>
              <div>
                <label className="text-xs text-muted-foreground mb-1.5 block">Телефон</label>
                <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-gold focus:outline-none text-sm"
                  placeholder="+7" />
              </div>
              <div>
                <label className="text-xs text-muted-foreground mb-1.5 block">Что вас интересует</label>
                <select value={form.goal} onChange={(e) => setForm({ ...form, goal: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-gold focus:outline-none text-sm">
                  <option>Подбор квартиры</option>
                  <option>Продажа моей квартиры</option>
                  <option>Ипотека</option>
                  <option>Юридическое сопровождение</option>
                </select>
              </div>
              <Button type="submit" size="lg" className="w-full bg-gold hover:bg-gold/90 text-primary-foreground font-medium">
                Отправить заявку
              </Button>
              <p className="text-xs text-muted-foreground text-center">Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.</p>
            </div>
          </form>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="container mx-auto py-8 flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
          <div>© {new Date().getFullYear()} Apartments Family · Казань</div>
          <div>Член РГР · ОГРНИП по запросу</div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
