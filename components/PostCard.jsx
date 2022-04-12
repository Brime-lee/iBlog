import React from 'react'
import moment from 'moment'
import Link from 'next/link'
import Image from 'next/image'

import { graphCMSImageLoader } from '../util'

const PostCard = ({ post }) => {
  return (
    <div className="mb-8 rounded-lg bg-emerald-50 p-4 pb-12 shadow-lg sm:p-4 md:p-4 lg:p-8">
      <div className="relative mb-6 overflow-hidden shadow-md">
        <Image
          unoptimized
          loader={graphCMSImageLoader}
          alt={post.title}
          height={1200}
          width={2000}
          layout="responsive"
          className="absolute h-80 w-full rounded-lg rounded-t-lg object-cover object-top shadow-lg"
          src={post.featuredImage.url}
        />
      </div>
      <Link href={`/post/${post.slug}`} passHref>
        <h1 className="mb-8 cursor-pointer text-center text-xl font-semibold text-neutral-700 transition duration-700 hover:text-emerald-500 md:text-2xl lg:text-3xl">
          {post.title}
        </h1>
      </Link>
      <div className="mb-8 block flex w-full items-center justify-center text-center">
        <div className="mb-4 mr-8 mb-0 flex w-full w-auto items-center items-center justify-center">
          <Image
            unoptimized
            loader={graphCMSImageLoader}
            alt={post.author.name}
            height="30px"
            width="30px"
            className="rounded-full align-middle"
            src={post.author.photo.url}
          />
          <p className=" ml-2 inline align-middle text-lg font-medium text-gray-700">
            {post.author.name}
          </p>
        </div>
        <div className="font-medium text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 inline h-6 w-6 text-emerald-500	"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="align-middle">
            {moment(post.createdAt).format('MMM DD, YYYY')}
          </span>
        </div>
      </div>
      <p className="text-md md: text-md mb-8 text-center font-normal text-gray-700 lg:text-lg">
        {post.excerpt}
      </p>
      <div className="text-center">
        <Link href={`/post/${post.slug}`} passHref>
          <span className="ease inline-block transform cursor-pointer rounded-full bg-emerald-500	 px-8 py-3 text-lg font-medium text-white transition duration-500 hover:-translate-y-1 active:translate-y-1 ">
            Continue Reading
          </span>
        </Link>
      </div>
    </div>
  )
}

export default PostCard
