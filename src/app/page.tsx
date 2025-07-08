'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabaseClient'

export default function Home() {
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data }: { data: { session: import('@supabase/supabase-js').Session | null } }) => {
      setUser(data.session?.user || null)
    })

    const { data: listener } = supabase.auth.onAuthStateChange(
      (
        _event: import('@supabase/supabase-js').AuthChangeEvent,
        session: import('@supabase/supabase-js').Session | null
      ) => {
        setUser(session?.user || null)
      }
    )

    return () => {
      listener.subscription.unsubscribe()
    }
  }, [])

  const handleSignIn = async () => {
    const { error } = await supabase.auth.signInWithOtp({
      email: prompt('Enter your email to sign in:') || '',
    })
    if (error) console.error('Error signing in:', error.message)
    else alert('Check your email for the magic link!')
  }

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) console.error('Error signing out:', error.message)
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">The Opportunist</h1>

      {!user ? (
        <>
          <p className="mb-4 text-gray-700">Sign in to get started</p>
          <button
            onClick={handleSignIn}
            className="px-6 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700"
          >
            Sign In with Email
          </button>
        </>
      ) : (
        <>
          <p className="mb-4 text-gray-700">Welcome, {user.email}</p>
          <button
            onClick={handleSignOut}
            className="px-6 py-2 bg-red-500 text-white rounded shadow hover:bg-red-600"
          >
            Sign Out
          </button>
        </>
      )}
    </main>
  )
}
