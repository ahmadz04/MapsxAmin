import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="text-xl font-medium text-gray-900">
              MAPS × AMIN
            </div>
            <div className="hidden md:flex items-center gap-8">
              <Link href="#about" className="text-sm text-gray-600 hover:text-gray-900">
                About
              </Link>
              <Link href="#volunteers" className="text-sm text-gray-600 hover:text-gray-900">
                Volunteers
              </Link>
              <Link href="#contact" className="text-sm text-gray-600 hover:text-gray-900">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <h1 className="mb-6 text-5xl font-light tracking-tight text-gray-900 sm:text-6xl">
              Empowering Education Through Technology
            </h1>
            <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-600 font-light">
              A volunteer management platform connecting educators with students across tutoring sites.
            </p>
            <button className="bg-gray-900 px-8 py-3 text-sm font-medium text-white hover:bg-gray-800">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-t border-gray-200 px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
            <div className="text-center">
              <div className="text-3xl font-light text-gray-900">500+</div>
              <div className="mt-2 text-sm text-gray-500">Volunteers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-gray-900">50+</div>
              <div className="mt-2 text-sm text-gray-500">Tutoring Sites</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-gray-900">2,000+</div>
              <div className="mt-2 text-sm text-gray-500">Students Reached</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="border-t border-gray-200 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-2xl font-light text-gray-900">MAPS</h2>
              <p className="mb-6 text-gray-600 font-light leading-relaxed">
                Muslim American Philanthropy Society focuses on visiting schools to teach students
                various subjects, providing quality education and mentorship to communities in need.
              </p>
            </div>
            <div>
              <h2 className="mb-4 text-2xl font-light text-gray-900">AMIN</h2>
              <p className="mb-6 text-gray-600 font-light leading-relaxed">
                Advancing Muslims In kNowledge focuses on helping Muslims advance in technology,
                providing resources, training, and platforms for community growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Management Section */}
      <section id="volunteers" className="border-t border-gray-200 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <h2 className="mb-3 text-3xl font-light text-gray-900">Platform Features</h2>
            <p className="text-gray-600 font-light">
              Streamlined tools to coordinate volunteers
            </p>
          </div>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {[
              {
                title: "Volunteer Registration",
                description: "Easy sign-up process with skill assessment"
              },
              {
                title: "Site Assignment",
                description: "Match volunteers to tutoring sites"
              },
              {
                title: "Schedule Management",
                description: "Coordinate tutoring sessions"
              },
              {
                title: "Performance Tracking",
                description: "Monitor volunteer hours and progress"
              }
            ].map((feature, idx) => (
              <div key={idx} className="border-l-2 border-gray-900 pl-6">
                <h3 className="mb-2 text-lg font-medium text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 font-light">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="border-t border-gray-200 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-light text-gray-900">Get Involved</h2>
          <p className="mb-8 text-gray-600 font-light">
            Join our volunteer network and help students succeed
          </p>
          <button className="bg-gray-900 px-8 py-3 text-sm font-medium text-white hover:bg-gray-800">
            Become a Volunteer
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-sm text-gray-600">
              &copy; 2025 MAPS × AMIN
            </div>
            <div className="flex gap-6 text-sm">
              <Link href="#about" className="text-gray-600 hover:text-gray-900">About</Link>
              <Link href="#volunteers" className="text-gray-600 hover:text-gray-900">Volunteers</Link>
              <Link href="#contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
