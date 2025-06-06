import { Page } from '@/components/Page'
import { loadPage } from '@/data/sanity'

export default async function DynamicRoute({
  params,
}: {
  params: Promise<{ path: string[] }>
}) {
  const pathname = `/${(await params).path.join('/')}`
  const data = await loadPage(pathname)

  return <Page data={data} />
}
