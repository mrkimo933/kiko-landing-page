import { BarChart3, MessageCircle, PhoneCall, Send, Tag, Zap } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const features: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Zap,
    title: 'أتمتة كاملة 100%',
    description: 'يتم تأكيد وإلغاء الطلبات بالكامل تلقائيًا، دون أي تدخل بشري أو مكالمات هاتفية.',
  },
  {
    icon: MessageCircle,
    title: 'رسائل واتساب فورية',
    description: 'رسالة تأكيد تُرسل لحظة إتمام الطلب، بزرّي تأكيد وإلغاء مباشرين داخل واتساب.',
  },
  {
    icon: Tag,
    title: 'تصنيف تلقائي في شوبيفاي',
    description: 'الطلب يتحول لتاج Confirmed أو Cancelled أوتوماتيك حسب رد العميل مباشرة.',
  },
  {
    icon: Send,
    title: 'إشعارات تليجرام فورية',
    description: 'يعرف صاحب المتجر حالة كل طلب لحظة حدوثها، دون الحاجة إلى فتح لوحة التحكم.',
  },
  {
    icon: PhoneCall,
    title: 'تدخل بشري ذكي',
    description:
      'إذا لم يردّ العميل خلال أربع ساعات، أو كان رقمه غير مسجّل على واتساب، تتحول حالة الطلب إلى "يحتاج اتصال" وينبّه صاحب المتجر.',
  },
  {
    icon: BarChart3,
    title: 'لوحة تحكم بإحصائيات حية',
    description: 'نسبة التأكيد، إجمالي الطلبات، ومتوسط سرعة الرد — كل الأرقام قدامك لحظيًا.',
  },
]

export function Features() {
  return (
    <section id="features" className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 inline-block rounded-full bg-accent px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-foreground">
            المميزات
          </span>
          <h2 className="mb-5 text-4xl font-extrabold tracking-tight text-foreground text-balance md:text-5xl">
            كل ما تحتاجه لـ<span className="font-serif font-bold text-primary">تأكيد</span> الطلبات
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
            دون متابعة يدوية، ودون تخمين أي الطلبات حقيقية — يتولى كيكو ذلك كله بالكامل.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group rounded-[2rem] border border-border bg-secondary p-8 transition-all duration-500 hover:-translate-y-1 hover:border-foreground/15 hover:shadow-xl hover:shadow-black/5"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-card shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:border-primary group-hover:bg-primary">
                  <Icon className="h-7 w-7 text-primary transition-colors group-hover:text-primary-foreground" strokeWidth={1.5} />
                </div>
                <h3 className="mb-3 text-xl font-bold text-foreground">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
