import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import { getCategories } from '../services'

const Categories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories)
    })
  }, [])

  console.log('categories', categories)
  return (
    <div className="mb-8 rounded-lg bg-emerald-50 p-8 shadow-lg">
      <h3 className="mb-2 border-b pb-4 text-xl font-semibold text-neutral-700">
        Categories
      </h3>
      {categories?.map((category, index) => (
        <Link key={index} href={`/category/${category.slug}`}>
          <span
            className={`block cursor-pointer ${
              index === categories.length - 1 ? 'border-b-0' : 'border-b'
            } pb-4`}
          >
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  )
}

export default Categories

// export async function getInitialProps() {
//   const res = await getCategories()
//   const json = await res.json()
//   const categories = json

//   console.log('categories', categories)
//   return {
//     categories: categories,
//   }
// }
