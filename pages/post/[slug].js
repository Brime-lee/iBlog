import React from 'react'
import { useRouter } from 'next/router'

import { PostDetail, Categories, PostWidget, Author } from '../../components'
import { getCategories, getPostDetails } from '../../services'

const PostDetails = ({ post, categories }) => {
  const router = useRouter()

  return (
    <>
      <div className="container mx-auto mb-8 px-2">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="col-span-1 lg:col-span-8">
            <PostDetail post={post} />
            <Author author={post.author} />
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative top-8 lg:sticky">
              <PostWidget
                slug={post.slug}
                categories={post.categories.map((category) => category.slug)}
              />
              <Categories categories={categories} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps({ params, query }) {
  const categories = await getCategories()

  return getPostDetails(params.slug).then((data) => ({
    props: {
      post: data,
      categories,
    },
  }))
}

export default PostDetails
