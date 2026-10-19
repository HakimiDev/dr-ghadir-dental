// Submit every URL in the live sitemap to IndexNow (Bing, Yandex, Seznam, Naver…).
// Usage: node scripts/indexnow.mjs   (run after each deploy)
const host = 'ghadeers.com'
const key = '3265e7b33e334dc0847055f649fd2f7a'
const xml = await (await fetch(`https://${host}/sitemap.xml`)).text()
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
const res = await fetch('https://api.indexnow.org/IndexNow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host, key, keyLocation: `https://${host}/${key}.txt`, urlList }),
})
console.log(`IndexNow: ${res.status} ${res.statusText} — ${urlList.length} URLs`)
