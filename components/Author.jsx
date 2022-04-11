import React from 'react'
import Image from 'next/image'

import { graphCMSImageLoader } from '../util'

const Author = ({ author }) => (
  <div className="relative mt-20 mb-8 rounded-lg bg-black bg-opacity-20 p-12 text-center">
    <div className="absolute left-0 right-0 -top-14">
      <Image
        unoptimized
        loader={graphCMSImageLoader}
        alt="Author"
        height="100px"
        width="100px"
        className="rounded-full align-middle"
        src={author.photo.url}
      />
    </div>
    <h3 className="mt-4 mb-4 text-xl font-bold text-white">{author.name}</h3>
    <p className="text-lg text-white">{author.bio}</p>
  </div>
)

export default Author
