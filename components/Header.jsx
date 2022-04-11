import Link from 'next/link'

const Header = () => {
  return (
    <div className="container mx-auto mb-8 px-10">
      <div className="inline-block w-full border-b border-blue-400 py-8">
        <div className="block md:float-left">
          <Link href="/">
            <span className="cursor-pointer text-4xl font-bold text-white">
              iBLOG
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
