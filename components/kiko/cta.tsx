import { ArrowUpLeft } from 'lucide-react'

export function Cta() {
  return (
    <section id="contact" className="relative overflow-hidden bg-foreground py-24">
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 600px 400px at 50% 50%, oklch(0.64 0.19 41.6 / 0.16) 0%, transparent 65%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-background text-balance md:text-5xl lg:text-6xl">
          حان وقت <span className="font-serif font-bold text-primary">إيقاف</span> الطلبات الوهمية
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-background/60 text-pretty">
          أكثر من 500 متجر على شوبيفاي يستخدمون كيكو لتأكيد طلبات الدفع عند الاستلام تلقائيًا. جرّب النسخة المجانية
          لمدة 14 يومًا دون بطاقة ائتمان.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#"
            className="group flex items-center gap-2.5 rounded-full bg-primary px-8 py-4 text-sm font-bold text-primary-foreground shadow-2xl shadow-primary/20 transition-all hover:bg-primary/90"
          >
            ابدأ تجربتك المجانية
            <ArrowUpLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" strokeWidth={2.5} />
          </a>
          <a
            href="#"
            className="group flex items-center gap-2 rounded-full border border-background/10 px-6 py-4 text-sm font-semibold text-background/70 transition-colors hover:border-background/25 hover:text-background"
          >
            احجز مكالمة تعريفية
            <ArrowUpLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" strokeWidth={2} />
          </a>
        </div>
      </div>
    </section>
  )
}
