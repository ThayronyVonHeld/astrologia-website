/* Comportamentos compartilhados — Maggessy Astrologia */

// Marca que o JS está ativo (permite esconder .reveal sem risco de conteúdo sumido sem JS)
document.documentElement.classList.add('js')

document.addEventListener('DOMContentLoaded', () => {
  const site = window.SITE || {}

  /* ---------- Link do WhatsApp ---------- */
  const waUrl = (text) =>
    `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text || site.defaultMessage || '')}`

  // Elementos com data-wa viram links para o WhatsApp (data-wa-text = mensagem específica).
  // Sem número configurado, mantêm o href original (ex.: página de contato).
  if (site.whatsappNumber) {
    document.querySelectorAll('[data-wa]').forEach((el) => {
      el.href = waUrl(el.dataset.waText)
      el.target = '_blank'
      el.rel = 'noopener noreferrer'
    })
  }

  /* ---------- Dados de contato vindos do site-config.js ---------- */
  document.querySelectorAll('[data-site="whatsapp"]').forEach((el) => (el.textContent = site.whatsappDisplay || ''))
  document.querySelectorAll('[data-site="email"]').forEach((el) => {
    el.textContent = site.email || ''
    const a = el.closest('a')
    if (a && site.email) a.href = `mailto:${site.email}`
  })
  document.querySelectorAll('[data-site="instagram"]').forEach((el) => {
    el.textContent = site.instagram ? `@${site.instagram}` : ''
    const a = el.closest('a')
    if (a && site.instagram) {
      a.href = `https://instagram.com/${site.instagram}`
      a.target = '_blank'
      a.rel = 'noopener noreferrer'
    }
  })

  /* ---------- Ano do rodapé ---------- */
  document.querySelectorAll('[data-year]').forEach((el) => (el.textContent = new Date().getFullYear()))

  /* ---------- Menu mobile ---------- */
  const toggle = document.getElementById('menu-toggle')
  const menu = document.getElementById('mobile-menu')
  if (toggle && menu) {
    const setOpen = (open) => {
      menu.classList.toggle('hidden', !open)
      toggle.setAttribute('aria-expanded', String(open))
      toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu')
      toggle.querySelector('[data-icon="open"]').classList.toggle('hidden', open)
      toggle.querySelector('[data-icon="close"]').classList.toggle('hidden', !open)
    }
    toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'))
    menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setOpen(false)))
    document.addEventListener('keydown', (e) => e.key === 'Escape' && setOpen(false))
    window.matchMedia('(min-width: 768px)').addEventListener('change', (e) => e.matches && setOpen(false))
  }

  /* ---------- Revelar elementos ao rolar ---------- */
  const reveals = document.querySelectorAll('.reveal')
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        }),
      { threshold: 0.15 }
    )
    reveals.forEach((el) => io.observe(el))
  } else {
    reveals.forEach((el) => el.classList.add('is-visible'))
  }


})
