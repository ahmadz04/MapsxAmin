import Link from "next/link";
import Navbar from "../components/Navbar";

const sites = [
  {
    name: "Lincoln High School",
    location: "Los Angeles, CA",
    students: 450,
    volunteers: 25,
    schedule: "Monday & Thursday, 3:00 PM - 5:00 PM",
    subjects: ["Math", "Science", "English", "Computer Science"],
    description: "Active tutoring program serving students in South LA with focus on STEM education."
  },
  {
    name: "Washington Prep High School",
    location: "Los Angeles, CA",
    students: 380,
    volunteers: 18,
    schedule: "Tuesday & Thursday, 3:30 PM - 5:30 PM",
    subjects: ["Math", "English", "History", "Biology"],
    description: "Community-focused program helping students with homework and test preparation."
  },
  {
    name: "Roosevelt High School",
    location: "Boyle Heights, CA",
    students: 520,
    volunteers: 32,
    schedule: "Monday, Wednesday & Friday, 3:00 PM - 5:00 PM",
    subjects: ["Math", "Science", "English", "Spanish"],
    description: "Large-scale tutoring initiative supporting bilingual students across multiple subjects."
  },
  {
    name: "Garfield High School",
    location: "East Los Angeles, CA",
    students: 410,
    volunteers: 22,
    schedule: "Tuesday & Thursday, 3:30 PM - 5:30 PM",
    subjects: ["Math", "Physics", "Chemistry", "Computer Science"],
    description: "STEM-focused program with emphasis on advanced mathematics and sciences."
  }
];

export default function SitesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar currentPage="sites" />

      {/* Header */}
      <section className="px-6 py-16 lg:px-8 border-b border-gray-200">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-4xl font-light text-gray-900 mb-4">Tutoring Sites</h1>
          <p className="text-gray-600 font-light max-w-2xl">
            Our volunteer network operates across multiple high schools in the Los Angeles area,
            providing quality education and mentorship to students in need.
          </p>
        </div>
      </section>

      {/* Sites Grid */}
      <section className="px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-8">
            {sites.map((site, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg p-8 hover:border-blue-600 transition-colors">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-light text-gray-900 mb-2">{site.name}</h2>
                    <p className="text-sm text-gray-500">{site.location}</p>
                  </div>
                  <div className="mt-4 md:mt-0 flex gap-6">
                    <div className="text-center">
                      <div className="text-2xl font-light text-gray-900">{site.students}</div>
                      <div className="text-xs text-gray-500">Students</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-light text-gray-900">{site.volunteers}</div>
                      <div className="text-xs text-gray-500">Volunteers</div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 font-light mb-6">
                  {site.description}
                </p>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-2">Schedule</h3>
                    <p className="text-sm text-gray-600">{site.schedule}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-2">Subjects</h3>
                    <div className="flex flex-wrap gap-2">
                      {site.subjects.map((subject, subIdx) => (
                        <span
                          key={subIdx}
                          className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gray-200 px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-2xl font-light text-gray-900 mb-4">Join Our Network</h2>
          <p className="text-gray-600 font-light mb-8">
            Volunteer at one of our sites and make a difference
          </p>
          <Link href="/auth">
            <button className="bg-blue-600 px-8 py-3 text-sm font-medium text-white hover:bg-blue-700 transition-colors rounded-lg">
              Get Started
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
