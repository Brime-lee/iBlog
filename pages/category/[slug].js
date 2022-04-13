import React from 'react'
import { useRouter } from 'next/router'

import { getCategories, getCategoryPost } from '../../services'
import { PostCard, Categories, Loader } from '../../components'

const CategoryPost = ({ posts, categories }) => {
  const router = useRouter()

  if (router.isFallback) {
    return <Loader />
  }

  return (
    <div className="container mx-auto mb-8 px-2">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative top-8 lg:sticky">
            <Categories categories={categories} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default CategoryPost

export async function getStaticProps({ params }) {
  const posts = await getCategoryPost(params.slug)
  const categories = await getCategories()

  return {
    props: { posts, categories },
  }
}

export async function getStaticPaths() {
  const categories = await getCategories()
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  }
}
