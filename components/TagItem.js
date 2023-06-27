import Link from 'next/link'

const TagItemInner = ({ tag }) => (
  <p className="mr-1 rounded-full px-2 py-1 border leading-none text-sm dark:border-gray-600 text-slate-400">
    {tag}
  </p>
)

const TagItem = ({ tag, inPost = true }) => {
  if (!inPost) return <TagItemInner tag={tag} />

  return (
    <Link href={`/tag/${encodeURIComponent(tag)}`}>
      <TagItemInner tag={tag} />
    </Link>
  )
}

export default TagItem
