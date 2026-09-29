import type { APIRoute } from "astro"
import { PROJECTS } from "../consts"

export const GET: APIRoute = ({ site }) => {
  const url = (path: string) => new URL(path, site).href

  const projects = PROJECTS.map((project, index) => ({
    ...project,
    number: `${index + 1}`.padStart(2, "0"),
  })).filter((project) => !project.hidden)

  const entries = [
    `<url><loc>${url("/")}</loc></url>`,
    ...projects.map(
      (project) =>
        `<url><loc>${url(`/${project.slug}`)}</loc><image:image><image:loc>${url(`/projects/${project.number}.webp`)}</image:loc></image:image></url>`
    ),
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${entries.join("\n")}
</urlset>`

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  })
}
