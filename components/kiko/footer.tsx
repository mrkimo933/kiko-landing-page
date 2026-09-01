import Image from 'next/image'
import { Mail, MessageCircle, Send } from 'lucide-react'

const columns = [
  {
    title: 'المنتج',
    links: [
      { label: 'المميزات', href: '#features' },
      { label: 'طريقة العمل', href: '#how-it-works' },
      { label: 'الأسعار', href: '#pricing' },
      { label: 'الأسئلة الشائعة', href: '#faq' },
    ],
  },
  {
    title: 'الشركة',
    links: [
      { label: 'من نحن', href: '#' },
      { label: 'المدونة', href: '#' },
      { label: 'الوظائف', href: '#' },
      { label: 'تواصل معنا', href: '#contact' },
    ],
  },
  {
    title: 'قانوني',
    links: [
      { label: 'سياسة الخصوصية', href: '#' },
      { label: 'الشروط والأحكام', href: '#' },
      { label: 'حماية البيانات', href: '#' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-background/5 bg-foreground py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="mb-4 flex items-center gap-3">
              <Image
                src="/kiko-logo.png"
                alt="كيكو"
                width={40}
                height={40}
                className="h-10 w-10 rounded-xl object-cover"
              />
              <span className="text-xl font-bold text-background">كيكو</span>
            </div>
            <p className="text-sm leading-relaxed text-background/50">
              أذكى طريقة لتأكيد طلبات الدفع عند الاستلام تلقائيًا عبر واتساب.
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h4 className="mb-4 text-sm font-bold text-background">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-background/50 transition-colors hover:text-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-background/5 pt-8 md:flex-row">
          <p className="text-xs text-background/40">© 2026 كيكو. جميع الحقوق محفوظة.</p>
          <div className="flex items-center gap-4">
            {[MessageCircle, Send, Mail].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-background/5 text-background/50 transition-all hover:bg-background/10 hover:text-background"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
