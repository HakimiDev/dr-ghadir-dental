import { SITE } from '../../site.config'
import { posts } from '../../content/posts'
import type { Block } from '../../content/posts'

function renderBlocks(l: Block[]) {
  return l.map((b) => {
    switch (b.type) {
      case 'p':
        return b.text + '\n'
      case 'h2':
        return '\n## ' + b.text + '\n'
      case 'ul':
        return b.items.map((i) => '- ' + i).join('\n') + '\n'
      case 'quote':
        return '\n> ' + b.text + '\n'
      case 'callout':
        return '\n**' + (b.title || '') + '**\n' + b.text + '\n'
      case 'faq':
        return '\n### FAQ\n' + b.items.map((f) => '- Q: ' + f.q + '\n  A: ' + f.a).join('\n') + '\n'
      case 'cta':
        return '\n**Appointment:** Contact Dr. Ghadeer at +967 772 003 502 (WhatsApp) or visit Al-Ibtisama Center, Al-Zubairy Street, Sana\'a.\n'
      default:
        return ''
    }
  }).join('\n')
}

export default defineEventHandler(() => {
  const base = useRuntimeConfig().public.siteUrl || SITE.baseUrl

  const parts = posts.map((p) => {
    const ar = [
      `# ${p.ar.title}`,
      `> ${p.ar.excerpt}`,
      `> Published: ${p.date} | Read time: ${p.ar.readMinutes} min`,
      renderBlocks(p.ar.blocks),
      '',
    ].join('\n')

    const en = [
      `# ${p.en.title}`,
      `> ${p.en.excerpt}`,
      `> Published: ${p.date} | Read time: ${p.en.readMinutes} min`,
      renderBlocks(p.en.blocks),
      '',
    ].join('\n')

    return `## ${p.date} — ${p.en.title} / ${p.ar.title}\nURL (AR): ${base}/blog/${p.slugAr}\nURL (EN): ${base}/en/blog/${p.slug}\n\n${ar}\n${en}\n`
  })

  const body = `# Dr. Ghadeer Mustafa Al-Hamadi — Full Blog Articles (llms-full.txt)
> Full text of every bilingual (AR/EN) article published on the site, intended for LLM ingestion.

${parts.join('\n')}
`

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  })
})