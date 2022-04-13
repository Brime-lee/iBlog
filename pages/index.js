import { PostCard, Categories, PostWidget } from '../components'
import { getPosts, getCategories, getRecentPosts } from '../services'

export default function Home({ posts, categories, recentPosts }) {
  return (
    <div className="container mx-auto mb-8 px-2">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          {posts?.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative top-1 lg:sticky">
            <PostWidget recentPosts={recentPosts} />
            <Categories categories={categories} />
          </div>
        </div>
      </div>
    </div>
  )
}

Home.getInitialProps = async () => {
  const categories = await getCategories()
  const posts = await getPosts()
  const recentPosts = await getRecentPosts()
  return {
    categories,
    posts,
    recentPosts,
  }
}
