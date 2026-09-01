const partners = ['Shopify', 'Meta WhatsApp Cloud API', 'Telegram', 'Shopify Plus', 'WhatsApp Business']

export function TrustStrip() {
  return (
    <section className="border-t border-border bg-card py-12">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-6 text-center text-xs font-bold uppercase tracking-wider text-muted-foreground">
          يتكامل مباشرة مع الأدوات التي تستخدمها فعليًا
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {partners.map((partner) => (
            <span key={partner} className="logo-wordmark text-lg font-bold tracking-tight text-foreground">
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
