import Image from 'next/image'
import { ArrowUpLeft, ChevronDown } from 'lucide-react'

const links = [
  { href: '#features', label: 'المميزات' },
  { href: '#pricing', label: 'الأسعار' },
  { href: '#faq', label: 'الأسئلة الشائعة' },
]

export function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-6 z-50 px-6">
      <div
        dir="ltr"
        className="mx-auto flex max-w-3xl items-center justify-between gap-2 rounded-full border border-white/40 bg-white/25 py-2 pl-2 pr-4 shadow-[0_1px_1px_rgba(255,255,255,0.4)_inset,0_8px_30px_rgba(0,0,0,0.08)] backdrop-blur-xl backdrop-saturate-150"
      >
        <a href="#" className="flex items-center gap-2">
          <Image
            src="/kiko-logo.png"
            alt="كيكو"
            width={72}
            height={32}
            className="h-8 w-auto object-contain"
          />
        </a>

        <div dir="rtl" className="hidden items-center gap-1 md:flex">
          <a
            href="#"
            className="rounded-full px-4 py-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            الرئيسية
          </a>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
              <ChevronDown className="h-3 w-3" />
            </a>
          ))}
        </div>

        <a
          href="#contact"
          dir="rtl"
          className="group flex items-center gap-2 rounded-full bg-foreground py-2 pl-2 pr-5 text-sm font-semibold text-background shadow-md shadow-black/10 transition-all hover:bg-foreground/85"
        >
          <span>لنتحدث</span>
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-background/15 transition-colors group-hover:bg-primary">
            <ArrowUpLeft className="h-3 w-3 text-background" strokeWidth={2.5} />
          </span>
        </a>
      </div>
    </nav>
  )
}
