'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';

type UserType = 'teacher' | 'student' | 'parent' | 'ucla-student';
type AuthMode = 'signin' | 'signup';

export default function AuthPage() {
  const [authMode, setAuthMode] = useState<AuthMode>('signin');
  const [userType, setUserType] = useState<UserType>('student');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo purposes - just redirect to home
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPage="auth" />

      <div className="flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-light text-gray-900 mb-2">
              {authMode === 'signin' ? 'Sign In' : 'Sign Up'}
            </h1>
            <p className="text-sm text-gray-600">
              {authMode === 'signin' ? 'Sign in to your account' : 'Create your account'}
            </p>
          </div>

        {/* Auth Mode Toggle */}
        <div className="flex border border-gray-200 rounded-lg mb-8">
          <button
            onClick={() => setAuthMode('signin')}
            className={`flex-1 py-3 text-sm font-medium transition-colors ${
              authMode === 'signin'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-600 hover:text-blue-600'
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setAuthMode('signup')}
            className={`flex-1 py-3 text-sm font-medium transition-colors ${
              authMode === 'signup'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-600 hover:text-blue-600'
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* User Type Selection */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-900 mb-3">
            I am a:
          </label>
          <div className="grid grid-cols-2 gap-3">
            {[
              { value: 'student', label: 'Student' },
              { value: 'teacher', label: 'Teacher' },
              { value: 'parent', label: 'Parent' },
              { value: 'ucla-student', label: 'UCLA Student' },
            ].map((type) => (
              <button
                key={type.value}
                onClick={() => setUserType(type.value as UserType)}
                className={`py-3 px-4 text-sm font-medium border rounded-lg transition-colors ${
                  userType === type.value
                    ? type.value === 'ucla-student'
                      ? 'border-blue-600 bg-blue-600 text-yellow-400'
                      : 'border-blue-600 bg-blue-600 text-white'
                    : 'border-gray-200 bg-white text-gray-600 hover:border-blue-600 hover:text-blue-600'
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>

        {/* Auth Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {authMode === 'signup' && (
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Full Name
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-600"
                placeholder="Enter your full name"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Email
            </label>
            <input
              type="email"
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-600"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Password
            </label>
            <input
              type="password"
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-600"
              placeholder="Enter your password"
            />
          </div>

          {authMode === 'signup' && (
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-600"
                placeholder="Confirm your password"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            {authMode === 'signin' ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center text-sm text-gray-600">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Back to home
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
}
