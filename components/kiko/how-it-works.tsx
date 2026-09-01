const steps = [
  {
    number: '1',
    title: 'العميل يطلب ويختار الدفع عند الاستلام',
    description: 'يشتري العميل من متجرك على شوبيفاي ويختار خيار الدفع عند الاستلام عند إتمام الطلب.',
  },
  {
    number: '2',
    title: 'رسالة تأكيد فورية على واتساب',
    description: 'يرسل كيكو رسالة تلقائية تتضمن تفاصيل الطلب وزرّي تأكيد وإلغاء واضحين.',
  },
  {
    number: '3',
    title: 'تحديث فوري في شوبيفاي',
    description: 'بمجرد ضغط العميل على أحد الزرّين، تتحول حالة الطلب إلى Confirmed أو Cancelled تلقائيًا.',
  },
  {
    number: '4',
    title: 'تنبيه صاحب المتجر على تليجرام',
    description: 'إشعار فوري بحالة الطلب — تأكيد، إلغاء، أو يحتاج اتصال.',
  },
  {
    number: '5',
    title: 'تذكير تلقائي بعد ساعة',
    description: 'إذا لم يردّ العميل، يرسل كيكو رسالة تذكير دون أي تدخل من فريقك.',
  },
  {
    number: '6',
    title: 'تصعيد للتدخل البشري عند الحاجة',
    description: 'بعد أربع ساعات دون رد، أو إذا كان الرقم غير مسجّل على واتساب، تتحول حالة الطلب إلى "يحتاج اتصال" لمتابعته هاتفيًا.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-secondary py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 inline-block rounded-full bg-accent px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-foreground">
            طريقة العمل
          </span>
          <h2 className="mb-5 text-4xl font-extrabold tracking-tight text-foreground text-balance md:text-5xl">
            رحلة الطلب من <span className="font-serif font-bold text-primary">الشراء</span> إلى التأكيد
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
            تحدث كل خطوة تلقائيًا، وما عليك سوى مشاهدة النتيجة في لوحة التحكم.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="relative rounded-[2rem] border border-border bg-card p-8">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-foreground text-xl font-bold text-background shadow-xl">
                {step.number}
              </div>
              <h3 className="mb-3 text-lg font-bold text-foreground">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
