'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { cn } from '@/lib/utils'

const faqs = [
  {
    question: 'هل يحتاج العميل إلى تثبيت أي تطبيق؟',
    answer:
      'لا، يرسل كيكو الرسائل مباشرة عبر واتساب. يكتفي العميل بالضغط على "تأكيد" أو "إلغاء" داخل المحادثة، دون تحميل أي تطبيق أو تسجيل حساب.',
  },
  {
    question: 'ماذا يحدث إذا لم يردّ العميل على الرسالة؟',
    answer:
      'يرسل كيكو رسالة تذكير تلقائية بعد ساعة من عدم الرد. وبعد أربع ساعات، يتحول الطلب إلى حالة "يحتاج اتصال" لينبّه صاحب المتجر بالتواصل هاتفيًا.',
  },
  {
    question: 'هل يمكن تخصيص رسالة واتساب؟',
    answer:
      'بالتأكيد. يمكنك تعديل نص الرسالة وأسماء الأزرار، وإضافة متغيرات ديناميكية مثل اسم العميل ورقم الطلب والمبلغ الإجمالي، بما يتناسب مع هوية متجرك.',
  },
  {
    question: 'هل يعمل كيكو مع Shopify Plus؟',
    answer:
      'نعم، كيكو متوافق تمامًا مع جميع باقات شوبيفاي، وتدعم باقة "التوسّع" إدارة أكثر من متجر من لوحة تحكم واحدة.',
  },
  {
    question: 'هل الربط مع واتساب رسمي وآمن؟',
    answer:
      'بالتأكيد. يستخدم كيكو واجهة Meta WhatsApp Cloud API الرسمية وواجهة Shopify API المعتمدة، مما يضمن حماية كاملة لبيانات متجرك ومحادثات عملائك.',
  },
  {
    question: 'هل توجد فترة تجربة مجانية؟',
    answer: 'نعم، تجربة مجانية لمدة 14 يومًا دون الحاجة إلى بطاقة ائتمان، مع وصول كامل إلى مزايا باقة "النمو" طوال فترة التجربة.',
  },
]

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-secondary py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-accent px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-foreground">
            الأسئلة الشائعة
          </span>
          <h2 className="mb-5 text-4xl font-extrabold tracking-tight text-foreground text-balance md:text-5xl">
            أسئلة؟ <span className="font-serif font-bold text-primary">إليك الإجابة</span>
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
            كل ما تحتاج معرفته قبل ما تبدأ مع كيكو.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-foreground/15"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 p-6 text-right"
                >
                  <span className="text-sm font-bold text-foreground md:text-base">{faq.question}</span>
                  <span
                    className={cn(
                      'flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted transition-transform duration-300',
                      isOpen && 'rotate-45 bg-primary text-primary-foreground',
                    )}
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </button>
                <div
                  className={cn(
                    'grid transition-all duration-300 ease-in-out',
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
