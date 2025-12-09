import Link from "next/link";

interface NavbarProps {
  currentPage?: string;
}

export default function Navbar({ currentPage }: NavbarProps) {
  return (
    <nav className="border-b-2 border-blue-600">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-medium text-gray-900">
            <span className="text-blue-600">MAPS</span> × <span className="text-blue-600">AMIN</span> <span className="text-lg">🐻</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors ${currentPage === 'home' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
            >
              Home
            </Link>
            <Link
              href="/sites"
              className={`text-sm font-medium transition-colors ${currentPage === 'sites' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
            >
              Sites
            </Link>
            <Link
              href="/student-base"
              className={`text-sm font-medium transition-colors ${currentPage === 'student-base' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
            >
              Student Base
            </Link>
            <Link
              href="/resource-vault"
              className={`text-sm font-medium transition-colors ${currentPage === 'resource-vault' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
            >
              Resource Vault
            </Link>
            <Link
              href="/auth"
              className="text-sm font-medium px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
