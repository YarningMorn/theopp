'use client'

import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    const initDashboard = () => {
      console.log('Dashboard initialized')
    }
    initDashboard()
  }, [])

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <header className="sticky top-0 bg-black bg-opacity-80 backdrop-blur border-b border-cyan-500/20 p-4 flex justify-between items-center z-10">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
          THE OPPORTUNIST
        </h1>
        <div className="flex items-center gap-2 text-green-400 text-sm">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-ping"></span>
          LIVE • Scanning 50,000+ sources
        </div>
        <button className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold px-4 py-2 rounded hover:scale-105 transition">
          Get Full Access
        </button>
      </header>

      <main className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-gray-900 rounded-lg border border-cyan-500/10">
          <div className="flex justify-between items-center p-4 border-b border-cyan-500/10">
            <h2 className="text-cyan-400 font-semibold">High-Impact Alerts</h2>
            <span className="bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              47
            </span>
          </div>
          <div className="p-4 space-y-4">
            <div className="p-4 rounded-lg border-l-4 border-pink-500 bg-pink-500/10">
              <h3 className="font-semibold text-lg">
                Federal Reserve Emergency Meeting Called
              </h3>
              <p className="text-sm text-gray-300 mt-2">
                SPY ↘ -2.1%, USD ↗ +0.8%, GOLD ↗ +1.4%
              </p>
              <p className="text-xs text-gray-500 mt-1">2 mins ago</p>
            </div>
            {/* Repeat similar alert items or map over dynamic data */}
          </div>
        </div>

        <aside className="space-y-6">
          <div className="bg-gray-900 rounded-lg border border-cyan-500/10 p-4">
            <h2 className="text-cyan-400 font-semibold mb-2">Market Movers</h2>
            <p className="text-gray-400 text-sm">SPY -1.2%, BTC -3.2%, GOLD +1.4%</p>
          </div>

          <div className="bg-gray-900 rounded-lg border border-cyan-500/10 p-4">
            <h2 className="text-cyan-400 font-semibold mb-2">System Activity</h2>
            <p className="text-gray-400 text-sm">Analyzing financial feeds…</p>
          </div>
        </aside>
      </main>
    </div>
  )
}
