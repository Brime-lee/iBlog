import React from 'react'
import moment from 'moment'
import Image from 'next/image'

import { graphCMSImageLoader, shimmer } from '../util'

const PostDetail = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>
      }
    }

    switch (type) {
      case 'heading-three':
        return (
          <h3 key={index} className="mb-4 text-xl font-semibold">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        )
      case 'paragraph':
        return (
          <p key={index} className="mb-8">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        )
      case 'heading-four':
        return (
          <h4 key={index} className="text-md mb-4 font-semibold">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        )
      case 'image':
        return (
          <Image
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        )
      default:
        return modifiedText
    }
  }

  const toBase64 = (str) =>
    typeof window === 'undefined'
      ? Buffer.from(str).toString('base64')
      : window.btoa(str)

  return (
    <>
      <div className="mb-8 rounded-lg bg-emerald-50 p-4 pb-12 shadow-lg sm:p-4 md:p-4 lg:p-8">
        <div className="relative mb-6 overflow-hidden shadow-md">
          <Image
            unoptimized
            loader={graphCMSImageLoader}
            alt={post.title}
            height={1200}
            width={2000}
            placeholder="blur  "
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(700, 475)
            )}`}
            layout="responsive"
            className="h-full w-full rounded-t-lg object-cover  object-top shadow-lg lg:rounded-lg"
            src={post.featuredImage.url}
          />
        </div>
        <div className="px-4 lg:px-0">
          <div className="mb-8 flex w-full items-center">
            <div className="mr-8 hidden items-center items-center justify-center md:flex lg:mb-0 lg:w-auto">
              <Image
                alt={post.author.name}
                loader={graphCMSImageLoader}
                height={30}
                width={30}
                className="rounded-full align-middle"
                src={post.author.photo.url}
              />
              <p className="ml-2 inline align-middle text-lg font-medium text-gray-700">
                {post.author.name}
              </p>
            </div>
            <div className="font-medium text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 inline h-6 w-6 text-emerald-500"
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
          <h1 className="mb-8 text-xl font-semibold text-neutral-700 md:text-2xl lg:text-3xl">
            {post.title}
          </h1>

          {post.content.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemindex) =>
              getContentFragment(itemindex, item.text, item)
            )

            return getContentFragment(index, children, typeObj, typeObj.type)
          })}
        </div>
      </div>
    </>
  )
}

export default PostDetail
