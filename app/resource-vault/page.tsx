import Link from "next/link";
import Navbar from "../components/Navbar";

const resources = [
  {
    id: 1,
    title: "Algebra 1 - Quadratic Equations Worksheet",
    type: "Assignment",
    subject: "Math",
    site: "Lincoln High School",
    grade: "9th Grade",
    uploadedBy: "Sarah M.",
    uploadDate: "2 days ago",
    downloads: 45
  },
  {
    id: 2,
    title: "Chemistry Lab: Acid-Base Titration",
    type: "Lab",
    subject: "Chemistry",
    site: "Garfield High School",
    grade: "11th Grade",
    uploadedBy: "David K.",
    uploadDate: "3 days ago",
    downloads: 32
  },
  {
    id: 3,
    title: "Python Basics - Loops and Functions",
    type: "Activity",
    subject: "Computer Science",
    site: "Roosevelt High School",
    grade: "10th Grade",
    uploadedBy: "Alex R.",
    uploadDate: "5 days ago",
    downloads: 58
  },
  {
    id: 4,
    title: "Romeo and Juliet Essay Prompts",
    type: "Assignment",
    subject: "English",
    site: "Washington Prep High School",
    grade: "9th Grade",
    uploadedBy: "Emily T.",
    uploadDate: "1 week ago",
    downloads: 41
  },
  {
    id: 5,
    title: "Physics Lab: Newton's Laws Experiment",
    type: "Lab",
    subject: "Physics",
    site: "Lincoln High School",
    grade: "11th Grade",
    uploadedBy: "Michael J.",
    uploadDate: "1 week ago",
    downloads: 37
  },
  {
    id: 6,
    title: "Calculus Practice Problems - Derivatives",
    type: "Assignment",
    subject: "Math",
    site: "Roosevelt High School",
    grade: "12th Grade",
    uploadedBy: "Lisa W.",
    uploadDate: "1 week ago",
    downloads: 29
  },
  {
    id: 7,
    title: "Biology: Cell Structure Interactive Activity",
    type: "Activity",
    subject: "Biology",
    site: "Washington Prep High School",
    grade: "10th Grade",
    uploadedBy: "James P.",
    uploadDate: "2 weeks ago",
    downloads: 52
  },
  {
    id: 8,
    title: "World History: WWII Research Project",
    type: "Assignment",
    subject: "History",
    site: "Garfield High School",
    grade: "11th Grade",
    uploadedBy: "Maria S.",
    uploadDate: "2 weeks ago",
    downloads: 38
  },
  {
    id: 9,
    title: "Spanish Vocabulary Practice - Unit 3",
    type: "Activity",
    subject: "Spanish",
    site: "Roosevelt High School",
    grade: "9th Grade",
    uploadedBy: "Carlos R.",
    uploadDate: "3 weeks ago",
    downloads: 44
  }
];

export default function ResourceVaultPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar currentPage="resource-vault" />

      {/* Header */}
      <section className="px-6 py-16 lg:px-8 border-b border-gray-200">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-4xl font-light text-gray-900 mb-4">Resource Vault</h1>
          <p className="text-gray-600 font-light max-w-2xl">
            A comprehensive collection of assignments, labs, and activities from all tutoring sites.
            Access quality educational materials created and used by our volunteer network.
          </p>
        </div>
      </section>

      {/* Filter Options */}
      <section className="px-6 py-6 lg:px-8 border-b border-gray-200">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-wrap gap-4">
            <button className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-lg">
              All Resources
            </button>
            <button className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 border border-gray-200 rounded-lg">
              Assignments
            </button>
            <button className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 border border-gray-200 rounded-lg">
              Labs
            </button>
            <button className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 border border-gray-200 rounded-lg">
              Activities
            </button>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="px-6 py-8 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource) => (
              <div
                key={resource.id}
                className="border border-gray-200 rounded-lg p-6 hover:border-blue-600 transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      resource.type === "Assignment"
                        ? "bg-blue-100 text-blue-700"
                        : resource.type === "Lab"
                        ? "bg-purple-100 text-purple-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {resource.type}
                  </span>
                  <span className="text-xs text-gray-500">{resource.downloads} downloads</span>
                </div>

                <h3 className="text-base font-medium text-gray-900 mb-3 line-clamp-2">
                  {resource.title}
                </h3>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Subject:</span>
                    <span className="text-gray-700 font-medium">{resource.subject}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Grade:</span>
                    <span className="text-gray-700">{resource.grade}</span>
                  </div>
                  <div className="text-sm text-gray-500">{resource.site}</div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <span>By {resource.uploadedBy}</span>
                    <span>{resource.uploadDate}</span>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-2 text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upload CTA */}
      <section className="border-t border-gray-200 px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-2xl font-light text-gray-900 mb-4">Contribute Resources</h2>
          <p className="text-gray-600 font-light mb-8">
            Help build our library by uploading your teaching materials
          </p>
          <Link href="/auth">
            <button className="bg-blue-600 px-8 py-3 text-sm font-medium text-white hover:bg-blue-700 transition-colors rounded-lg">
              Upload Resource
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
