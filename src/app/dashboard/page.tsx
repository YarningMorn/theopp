'use client'

import { useEffect, useState } from 'react'

type Impact = {
  symbol: string
  direction: 'up' | 'down'
  change: string
}

type Alert = {
  severity: 'high' | 'medium' | 'low'
  title: string
  time: string
  impacts: Impact[]
}

const mockAlerts: Alert[] = [
  {
    severity: 'high',
    title: 'Federal Reserve Emergency Meeting Called',
    time: '2 mins ago',
    impacts: [
      { symbol: 'SPY', direction: 'down', change: '-2.1%' },
      { symbol: 'USD', direction: 'up', change: '+0.8%' },
      { symbol: 'GOLD', direction: 'up', change: '+1.4%' },
    ],
  },
  {
    severity: 'high',
    title: 'Major Oil Pipeline Cyberattack Confirmed',
    time: '4 mins ago',
    impacts: [
      { symbol: 'OIL', direction: 'up', change: '+4.2%' },
      { symbol: 'XOM', direction: 'up', change: '+3.1%' },
      { symbol: 'TSLA', direction: 'down', change: '-1.2%' },
    ],
  },
  {
    severity: 'medium',
    title: 'Tesla Q4 Earnings Beat Expectations',
    time: '7 mins ago',
    impacts: [
      { symbol: 'TSLA', direction: 'up', change: '+8.7%' },
      { symbol: 'NIO', direction: 'up', change: '+2.3%' },
      { symbol: 'F', direction: 'down', change: '-0.9%' },
    ],
  },
]

export default function Dashboard() {

  return (
    <div className="bg-black text-white min-h-screen">
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
          <p className="text-cyan-400 animate-pulse text-lg">
            Initializing Market Scanner...
          </p>
        </div>
      )}

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
              {mockAlerts.length}
            </span>
          </div>
          <div className="p-4 space-y-4">
            {mockAlerts.map((alert, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-lg border-l-4 cursor-pointer transition hover:scale-105 ${
                  alert.severity === 'high'
                    ? 'border-pink-500 bg-pink-500/10'
                    : alert.severity === 'medium'
                    ? 'border-yellow-500 bg-yellow-500/10'
                    : 'border-green-500 bg-green-500/10'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <span
                    className={`text-xs font-bold uppercase px-2 py-1 rounded ${
                      alert.severity === 'high'
                        ? 'bg-pink-500 text-white'
                        : alert.severity === 'medium'
                        ? 'bg-yellow-500 text-black'
                        : 'bg-green-500 text-black'
                    }`}
                  >
                    {alert.severity}
                  </span>
                  <span className="text-xs text-gray-400">{alert.time}</span>
                </div>
                <h3 className="font-semibold text-lg">{alert.title}</h3>
                <div className="flex flex-wrap gap-3 mt-2 text-sm text-gray-300">
                  {alert.impacts.map((impact, idx2) => (
                    <span
                      key={idx2}
                      className={`flex items-center gap-1 ${
                        impact.direction === 'up'
                          ? 'text-green-400'
                          : 'text-pink-400'
                      }`}
                    >
                      {impact.symbol}{' '}
                      {impact.direction === 'up' ? '↗' : '↘'} {impact.change}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className="space-y-6">
          <div className="bg-gray-900 rounded-lg border border-cyan-500/10 p-4">
            <h2 className="text-cyan-400 font-semibold mb-2">Market Movers</h2>
            <p className="text-gray-400 text-sm">
              Placeholder for live market data.
            </p>
          </div>

          <div className="bg-gray-900 rounded-lg border border-cyan-500/10 p-4">
            <h2 className="text-cyan-400 font-semibold mb-2">System Activity</h2>
            <p className="text-gray-400 text-sm">
              Placeholder for activity log.
            </p>
          </div>
        </aside>
      </main>
    </div>
  )
}
