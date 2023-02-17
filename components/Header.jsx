import Link from 'next/link'

const Header = () => {
  return (
    <div className="container mx-auto mb-8 px-2">
      <div className=" inline-block flex w-full justify-center  border-b border-neutral-500 py-8">
        <Link href="/" passHref>
          <span className="text-align: center cursor-pointer text-4xl font-bold text-neutral-700">
            i-BLOG
          </span>
        </Link>
      </div>
    </div>
  )
}

export default Header
