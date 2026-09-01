import { ArrowUpLeft, MessageCircle } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-secondary pb-20 pt-32 grid-bg">
      {/* Floating card: pending order */}
      <div className="float-card float-card-delay-1 absolute right-8 top-28 z-20 hidden md:right-16 md:block lg:right-24">
        <div className="w-52 rounded-2xl border border-border bg-card p-4 shadow-xl shadow-black/5">
          <div className="mb-3 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-bold text-primary">
              سأ
            </div>
            <div>
              <p className="text-sm font-bold text-foreground">سارة أحمد</p>
              <p className="text-xs text-muted-foreground">طلب #4821 · دفع عند الاستلام</p>
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>حالة التأكيد</span>
              <span className="font-semibold text-primary">قيد الانتظار</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-muted">
              <div className="h-full w-3/5 rounded-full bg-primary" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating card: confirmed order */}
      <div className="float-card float-card-delay-2 absolute left-8 top-32 z-20 hidden md:left-16 md:block lg:left-24">
        <div className="w-52 rounded-2xl border border-border bg-card p-4 shadow-xl shadow-black/5">
          <div className="mb-3 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-600">
              مع
            </div>
            <div>
              <p className="text-sm font-bold text-foreground">محمد علي</p>
              <p className="text-xs text-muted-foreground">طلب #4822 · دفع عند الاستلام</p>
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>حالة التأكيد</span>
              <span className="font-semibold text-green-600">تم التأكيد</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-muted">
              <div className="h-full w-full rounded-full bg-green-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating card: WhatsApp confirmation popup (center) */}
      <div
        className="float-card float-card-delay-3 absolute left-1/2 top-1/2 z-30 hidden -translate-x-1/2 -translate-y-1/2 lg:block"
        style={{ marginTop: '-40px', marginLeft: '-80px' }}
      >
        <div className="w-56 -rotate-3 rounded-2xl border border-border bg-card p-4 shadow-2xl shadow-black/10">
          <div className="mb-3 flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500">
              <MessageCircle className="h-3.5 w-3.5 text-background" strokeWidth={2.5} />
            </span>
            <p className="text-xs font-bold text-foreground">تأكيد الدفع عند الاستلام</p>
          </div>
          <p className="mb-3 text-xs text-muted-foreground">مرحبًا! من فضلك أكّد طلبك #4821...</p>
          <div className="flex gap-2">
            <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">تأكيد</span>
            <span className="rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">إلغاء</span>
          </div>
          <div className="mt-3 flex items-center gap-1.5 border-t border-border pt-2 text-xs text-muted-foreground">
            <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>تم الإرسال الآن</span>
          </div>
        </div>
      </div>

      {/* Floating pill: store owner */}
      <div className="float-card float-card-delay-4 absolute bottom-40 right-8 z-20 hidden md:right-20 md:block">
        <div className="flex items-center gap-3 rounded-full bg-foreground py-2 pl-4 pr-2 text-background shadow-xl shadow-black/15">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted-foreground/40 text-xs font-bold">
            صم
          </div>
          <div>
            <p className="text-xs font-bold">صاحب المتجر</p>
            <p className="text-[10px] text-background/60">لوحة تحكم شوبيفاي</p>
          </div>
        </div>
      </div>

      {/* Floating pill: customer confirmed */}
      <div className="float-card float-card-delay-1 absolute bottom-36 left-8 z-20 hidden md:left-20 md:block">
        <div className="flex items-center gap-3 rounded-full bg-primary py-2 pl-4 pr-2 text-primary-foreground shadow-xl shadow-primary/20">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-background/20 text-xs font-bold">
            تع
          </div>
          <div>
            <p className="text-xs font-bold">تأكيد العميل</p>
            <p className="text-[10px] text-primary-foreground/70">تصنيف تلقائي في شوبيفاي</p>
          </div>
        </div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 mx-auto max-w-3xl px-6 pt-16 text-center md:pt-24">
        <h1 className="fade-in-up mb-6 text-5xl font-extrabold leading-[1.15] tracking-tight text-foreground text-balance sm:text-6xl md:text-7xl">
          <span className="block">تأكيد الطلبات</span>
          <span className="block">
            تلقائيًا عبر <span className="font-serif font-bold text-primary">واتساب</span>
          </span>
        </h1>

        <p className="fade-in-up fade-in-up-delay-1 mx-auto mb-10 max-w-lg text-lg leading-relaxed text-muted-foreground text-pretty md:text-xl">
          يرسل كيكو رسالة تأكيد فورية عبر واتساب، ويحدّث حالة الطلب في شوبيفاي تلقائيًا دون أي تدخل بشري.
        </p>

        <div className="fade-in-up fade-in-up-delay-2 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#how-it-works"
            className="rounded-full border-2 border-border px-8 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-primary hover:text-primary"
          >
            تعرّف على الخدمة
          </a>
          <a
            href="#contact"
            className="group flex items-center gap-2 rounded-full bg-foreground px-8 py-3.5 text-sm font-semibold text-background shadow-lg shadow-black/10 transition-all hover:bg-foreground/85"
          >
            ابدأ تجربتك المجانية
            <ArrowUpLeft
              className="h-4 w-4 transition-transform group-hover:-translate-x-1 group-hover:translate-y-[-1px]"
              strokeWidth={2.5}
            />
          </a>
        </div>
      </div>
    </section>
  )
}
