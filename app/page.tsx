import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold">
                <span className="text-blue-600">MAPS</span>
                <span className="text-gray-400 mx-2">×</span>
                <span className="text-purple-600">AMIN</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <Link href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
                About
              </Link>
              <Link href="#volunteers" className="text-gray-600 hover:text-gray-900 transition-colors">
                Volunteers
              </Link>
              <Link href="#platform" className="text-gray-600 hover:text-gray-900 transition-colors">
                Platform
              </Link>
              <button className="rounded-full bg-purple-600 px-6 py-2 text-white hover:bg-purple-700 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 text-sm text-purple-700">
              <span className="h-2 w-2 rounded-full bg-purple-600"></span>
              MAPS × AMIN Partnership
            </div>
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Empowering Education Through
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Technology & Volunteers
              </span>
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-xl text-gray-600">
              MAPS visits schools to teach students various subjects. AMIN helps Muslims advance in technology.
              Together, we&apos;re building a platform to manage volunteers and transform tutoring sites.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="rounded-full bg-blue-600 px-8 py-3 text-lg font-semibold text-white hover:bg-blue-700 transition-colors shadow-lg">
                Join as Volunteer
              </button>
              <button className="rounded-full border-2 border-gray-300 px-8 py-3 text-lg font-semibold text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">500+</div>
              <div className="mt-2 text-gray-600">Active Volunteers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600">50+</div>
              <div className="mt-2 text-gray-600">Tutoring Sites</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">2,000+</div>
              <div className="mt-2 text-gray-600">Students Reached</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 p-8 text-white shadow-xl">
              <div className="mb-4 text-3xl font-bold">MAPS</div>
              <p className="mb-6 text-lg text-blue-50">
                Muslim American Philanthropy Society focuses on visiting schools to teach students
                various subjects, providing quality education and mentorship to communities in need.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="rounded-full bg-white/20 p-1">✓</span>
                  School outreach programs
                </li>
                <li className="flex items-center gap-3">
                  <span className="rounded-full bg-white/20 p-1">✓</span>
                  Subject-based tutoring
                </li>
                <li className="flex items-center gap-3">
                  <span className="rounded-full bg-white/20 p-1">✓</span>
                  Community engagement
                </li>
              </ul>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 p-8 text-white shadow-xl">
              <div className="mb-4 text-3xl font-bold">AMIN</div>
              <p className="mb-6 text-lg text-purple-50">
                Advancing Muslims In kNowledge focuses on helping Muslims advance in technology,
                providing resources, training, and platforms for community growth.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="rounded-full bg-white/20 p-1">✓</span>
                  Technology education
                </li>
                <li className="flex items-center gap-3">
                  <span className="rounded-full bg-white/20 p-1">✓</span>
                  Platform development
                </li>
                <li className="flex items-center gap-3">
                  <span className="rounded-full bg-white/20 p-1">✓</span>
                  Digital solutions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Management Section */}
      <section id="volunteers" className="px-4 py-20 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">Volunteer Management</h2>
            <p className="text-lg text-gray-600">
              Streamlined tools to coordinate volunteers across all tutoring sites
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Volunteer Registration",
                description: "Easy sign-up process for new volunteers with skill assessment",
                icon: "👥",
                color: "blue"
              },
              {
                title: "Site Assignment",
                description: "Match volunteers to tutoring sites based on availability and subjects",
                icon: "📍",
                color: "purple"
              },
              {
                title: "Schedule Management",
                description: "Coordinate tutoring sessions and volunteer availability",
                icon: "📅",
                color: "blue"
              },
              {
                title: "Performance Tracking",
                description: "Monitor volunteer hours and student progress",
                icon: "📊",
                color: "purple"
              },
              {
                title: "Communication Hub",
                description: "Centralized messaging between coordinators and volunteers",
                icon: "💬",
                color: "blue"
              },
              {
                title: "Resource Library",
                description: "Teaching materials and best practices for volunteers",
                icon: "📚",
                color: "purple"
              }
            ].map((feature, idx) => (
              <div
                key={idx}
                className={`rounded-xl border-2 border-${feature.color}-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow`}
              >
                <div className="mb-4 text-4xl">{feature.icon}</div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
                <button className={`mt-4 text-${feature.color}-600 font-semibold hover:text-${feature.color}-700`}>
                  Learn more →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Preview Section */}
      <section id="platform" className="px-4 py-20 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">Platform Features</h2>
            <p className="text-lg text-gray-600">
              Built with modern technology for seamless volunteer coordination
            </p>
          </div>
          <div className="rounded-2xl bg-white p-8 shadow-xl">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-blue-100 p-3 text-blue-600">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Real-time Updates</h3>
                    <p className="text-gray-600">Instant notifications for schedule changes and assignments</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-purple-100 p-3 text-purple-600">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Secure & Private</h3>
                    <p className="text-gray-600">Protected volunteer and student information</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-blue-100 p-3 text-blue-600">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Lightning Fast</h3>
                    <p className="text-gray-600">Optimized performance for quick access anywhere</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 p-8">
                <div className="text-center text-white">
                  <div className="mb-4 text-6xl">🚀</div>
                  <div className="text-2xl font-bold">Coming Soon</div>
                  <div className="mt-2 text-blue-100">Platform Demo Preview</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-12 text-center shadow-xl">
            <h2 className="mb-4 text-4xl font-bold text-white">Ready to Make an Impact?</h2>
            <p className="mb-8 text-xl text-blue-50">
              Join our volunteer network and help students succeed
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="rounded-full bg-white px-8 py-3 text-lg font-semibold text-blue-600 hover:bg-gray-100 transition-colors">
                Become a Volunteer
              </button>
              <button className="rounded-full border-2 border-white px-8 py-3 text-lg font-semibold text-white hover:bg-white/10 transition-colors">
                Request a Site
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-gray-900 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div>
              <div className="mb-4 text-2xl font-bold">
                <span className="text-blue-400">MAPS</span>
                <span className="text-gray-600 mx-2">×</span>
                <span className="text-purple-400">AMIN</span>
              </div>
              <p className="text-gray-400">
                Empowering education through technology and community collaboration.
              </p>
            </div>
            <div>
              <h3 className="mb-4 font-semibold text-white">About</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">Our Mission</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">MAPS Organization</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">AMIN Organization</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-semibold text-white">Get Involved</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">Volunteer</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Partner Schools</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Donate</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-semibold text-white">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>info@mapsxamin.org</li>
                <li>Support Center</li>
                <li>FAQ</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 MAPS × AMIN. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
