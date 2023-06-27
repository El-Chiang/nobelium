import Link from 'next/link'
import { useConfig } from '@/lib/config'
import FormattedDate from '@/components/FormattedDate'
import TagItem from '@/components/TagItem'

const BlogPost = ({ post }) => {
  const BLOG = useConfig()

  return (
    <Link href={`${BLOG.path}/${post.slug}`}>
      <article key={post.id} className="mb-6 md:mb-8 px-8 py-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
        <header className="flex flex-col justify-between md:flex-row md:items-baseline">
          <h2 className="text-lg md:text-xl font-medium mb-2 cursor-pointer text-black dark:text-gray-100">
            {post.title}
          </h2>
          <time className="flex-shrink-0 text-gray-600 dark:text-gray-400">
            <FormattedDate date={post.date} />
          </time>
        </header>
        <main>
          <p className="hidden md:block leading-8 text-gray-700 dark:text-gray-300">
            {post.summary}
          </p>
        </main>
        {post.tags && (
          <footer className="mt-4 flex flex-nowrap max-w-full overflow-x-auto article-tags">
            {post.tags.map(tag => (
              <TagItem key={tag} tag={tag} inPost={false} />
            ))}
          </footer>
        )}
      </article>
    </Link>
  )
}

export default BlogPost
