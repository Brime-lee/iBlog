import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import moment from 'moment'
import Link from 'next/link'

import { graphCMSImageLoader } from '../util'
import { getSimilarPosts, getRecentPosts } from '../services'

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([])

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result)
      })
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result)
      })
    }
  }, [slug])

  return (
    <div className="mb-4 rounded-lg bg-emerald-50 p-6 shadow-lg">
      <h3 className="mb-2 border-b pb-4 text-xl font-semibold text-neutral-700">
        {slug ? 'Related Posts' : 'Recent Posts'}
      </h3>
      {relatedPosts.map((post, index) => (
        <div key={index} className="mb-4 flex w-full items-center">
          <div className="w-16 flex-none transition duration-500 hover:-translate-y-0.5 active:translate-y-0.5">
            <Link href={`/post/${post.slug}`} key={index} passHref>
              <span>
                <Image
                  loader={graphCMSImageLoader}
                  alt=""
                  height="60px"
                  width="60px"
                  unoptimized
                  objectFit="cover"
                  className="cursor-pointer rounded-full  align-middle "
                  src={post.featuredImage.url}
                />
              </span>
            </Link>
          </div>
          <div className="ml-4 flex-grow">
            <p className="font-xs text-gray-500">
              {moment(post.createdAt).format('MMM DD, YYYY')}
            </p>
            <Link href={`/post/${post.slug}`} key={index} passHref>
              <p className="cursor-pointer text-xs transition duration-500 hover:-translate-y-0.5 ">
                {post.title}
              </p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostWidget
