import React, { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Categories({ categories }) {
  return (
    <div className="mb-8 rounded-lg bg-emerald-50 p-8 shadow-lg">
      <h3 className="mb-2 border-b pb-4 text-xl font-semibold text-neutral-700">
        Categories
      </h3>
      {categories?.map((category, index) => (
        <Link key={index} href={`/category/${category.slug}`} passHref>
          <span
            className={`active:translate-y-0.1 block cursor-pointer transition duration-500 hover:-translate-y-0.5 ${
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
