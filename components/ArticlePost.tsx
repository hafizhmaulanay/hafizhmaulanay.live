import { ArticlePostProps } from '@/libs/types';
import Link from 'next/link';

export default function ArticlePost({ slug, title, excerpt }: ArticlePostProps) {
  return (
    <Link
      href={`/articles/${slug}`}
      className="mb-8 w-full rounded border border-gray-200 bg-white p-4 transition-all hover:scale-[1.01] dark:border-gray-800 dark:bg-gray-900"
    >
      <div className="w-full">
        <div className="flex flex-col justify-between md:flex-row">
          <h4 className="mb-2 w-full text-lg font-medium text-gray-900 dark:text-gray-100 md:text-xl">
            {title}
          </h4>
        </div>
        <p className="text-gray-600 dark:text-gray-400">{excerpt}</p>
      </div>
    </Link>
  );
}
