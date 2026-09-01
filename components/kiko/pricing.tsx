import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

const plans = [
  {
    name: 'الأساسية',
    description: 'للمتاجر الناشئة اللي بتجرب دفع عند الاستلام.',
    price: '$9',
    features: ['حتى 200 تأكيد شهريًا', 'إشعارات واتساب + تليجرام', 'تحليلات أساسية', 'دعم عبر البريد الإلكتروني'],
    cta: 'ابدأ الآن',
    highlighted: false,
  },
  {
    name: 'النمو',
    description: 'للمتاجر النشطة الجاهزة للتوسع.',
    price: '$29',
    features: [
      'حتى 1000 تأكيد شهريًا',
      'رسائل تذكير ذكية',
      'لوحة تحليلات متقدمة',
      'دعم أولوية',
      'قوالب رسائل مخصصة',
    ],
    cta: 'ابدأ الآن',
    highlighted: true,
  },
  {
    name: 'التوسّع',
    description: 'للمتاجر عالية الحجم ومتعددة الفروع.',
    price: '$79',
    features: ['تأكيدات غير محدودة', 'دعم متاجر متعددة', 'مدير حساب مخصص', 'وصول API', 'اتفاقية مستوى خدمة'],
    cta: 'تواصل مع المبيعات',
    highlighted: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 inline-block rounded-full bg-accent px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-foreground">
            الأسعار
          </span>
          <h2 className="mb-5 text-4xl font-extrabold tracking-tight text-foreground text-balance md:text-5xl">
            تسعير <span className="font-serif font-bold text-primary">واضح</span> وبسيط
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
            ابدأ مجانًا، وطوّر باقتك مع نمو متجرك، دون أي رسوم خفية.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                'relative flex flex-col rounded-[2rem] border p-8 transition-all duration-300',
                plan.highlighted
                  ? 'border-foreground/10 bg-foreground text-background shadow-2xl md:-translate-y-4'
                  : 'border-border bg-secondary hover:border-foreground/20',
              )}
            >
              {plan.highlighted && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1.5 text-xs font-bold text-primary-foreground shadow-lg shadow-primary/30">
                  الأكثر طلبًا
                </span>
              )}

              <div className="mb-6">
                <h3 className={cn('mb-2 text-lg font-bold', plan.highlighted ? 'text-background' : 'text-foreground')}>
                  {plan.name}
                </h3>
                <p className={cn('text-sm', plan.highlighted ? 'text-background/60' : 'text-muted-foreground')}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <span className={cn('text-5xl font-extrabold', plan.highlighted ? 'text-background' : 'text-foreground')}>
                  {plan.price}
                </span>
                <span className={cn('text-sm', plan.highlighted ? 'text-background/60' : 'text-muted-foreground')}>
                  {' '}
                  / شهريًا
                </span>
              </div>

              <ul className="mb-8 flex-1 space-y-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={cn(
                      'flex items-center gap-3 text-sm',
                      plan.highlighted ? 'text-background/85' : 'text-foreground/80',
                    )}
                  >
                    <Check className="h-5 w-5 shrink-0 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={cn(
                  'w-full rounded-full py-3.5 text-sm font-bold transition-all',
                  plan.highlighted
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30 hover:bg-primary/90'
                    : 'border-2 border-border text-foreground hover:border-primary hover:text-primary',
                )}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
