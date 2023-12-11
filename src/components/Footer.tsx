import Link from "next/link"

const Footer = () => {
  return (
     <footer className="mt-16">
        <div className="container mx-auto px-4">
            <Link href="/" className="font-black text-tertiary-black">
               Matoshri
            </Link>
        </div>
     </footer>
  )
}

export default Footer
