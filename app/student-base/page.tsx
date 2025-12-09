import Link from "next/link";
import Navbar from "../components/Navbar";

const studentQuestions = [
  {
    id: 1,
    studentName: "Maria L.",
    site: "Lincoln High School",
    subject: "Algebra",
    question: "Can someone help me understand quadratic equations? I'm stuck on factoring.",
    timestamp: "2 hours ago",
    status: "open"
  },
  {
    id: 2,
    studentName: "James K.",
    site: "Roosevelt High School",
    subject: "Chemistry",
    question: "Need help with balancing chemical equations for my test tomorrow.",
    timestamp: "3 hours ago",
    status: "open"
  },
  {
    id: 3,
    studentName: "Sofia M.",
    site: "Garfield High School",
    subject: "Computer Science",
    question: "How do I create a loop in Python? Working on my first coding assignment.",
    timestamp: "5 hours ago",
    status: "in-progress"
  },
  {
    id: 4,
    studentName: "David R.",
    site: "Washington Prep High School",
    subject: "English",
    question: "Looking for help with my essay on Shakespeare's Romeo and Juliet.",
    timestamp: "1 day ago",
    status: "open"
  },
  {
    id: 5,
    studentName: "Aisha T.",
    site: "Lincoln High School",
    subject: "Physics",
    question: "Can someone explain Newton's laws of motion? I have a quiz next week.",
    timestamp: "1 day ago",
    status: "in-progress"
  },
  {
    id: 6,
    studentName: "Carlos P.",
    site: "Roosevelt High School",
    subject: "Calculus",
    question: "Need help understanding derivatives and their applications.",
    timestamp: "2 days ago",
    status: "open"
  }
];

export default function StudentBasePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar currentPage="student-base" />

      {/* Header */}
      <section className="px-6 py-16 lg:px-8 border-b border-gray-200">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-4xl font-light text-gray-900 mb-4">Student Base</h1>
          <p className="text-gray-600 font-light max-w-2xl">
            A central hub for students to post questions and request help from volunteers.
            Browse open requests and offer assistance.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="px-6 py-6 lg:px-8 border-b border-gray-200">
        <div className="mx-auto max-w-5xl">
          <div className="flex gap-4">
            <button className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-lg">
              All Questions
            </button>
            <button className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 border border-gray-200 rounded-lg">
              Open
            </button>
            <button className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 border border-gray-200 rounded-lg">
              In Progress
            </button>
          </div>
        </div>
      </section>

      {/* Questions List */}
      <section className="px-6 py-8 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="space-y-4">
            {studentQuestions.map((item) => (
              <div
                key={item.id}
                className="border border-gray-200 rounded-lg p-6 hover:border-blue-600 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-medium text-gray-900">{item.subject}</h3>
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          item.status === "open"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {item.status === "open" ? "Open" : "In Progress"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <span>{item.studentName}</span>
                      <span>•</span>
                      <span>{item.site}</span>
                      <span>•</span>
                      <span>{item.timestamp}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">{item.question}</p>

                <div className="flex gap-3">
                  <button className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Help Student
                  </button>
                  <button className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 border border-gray-200 rounded-lg">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA for Students */}
      <section className="border-t border-gray-200 px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-2xl font-light text-gray-900 mb-4">Need Help?</h2>
          <p className="text-gray-600 font-light mb-8">
            Post your question and connect with a volunteer tutor
          </p>
          <Link href="/auth">
            <button className="bg-blue-600 px-8 py-3 text-sm font-medium text-white hover:bg-blue-700 transition-colors rounded-lg">
              Post a Question
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
