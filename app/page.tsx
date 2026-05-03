export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Remote Teams
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Detect Team Meeting Fatigue
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Connect your calendar and let AI spot back-to-back overload, long video call streaks, and missing breaks — then get personalized recovery suggestions sent straight to your team.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Free Trial — $8/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required for 7-day trial. Cancel anytime.</p>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {["Google Calendar", "Outlook", "AI Break Suggestions", "Manager Alerts", "Fatigue Score"].map((f) => (
            <span key={f} className="bg-[#161b22] border border-[#30363d] text-[#8b949e] text-sm px-4 py-1.5 rounded-full">
              {f}
            </span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center shadow-xl">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$8</p>
          <p className="text-[#6e7681] text-sm mb-6">per month · billed monthly</p>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
            {[
              "Connect Google Calendar & Outlook",
              "AI-powered fatigue detection",
              "Daily break recommendations",
              "Automated manager alerts",
              "Team fatigue dashboard",
              "Priority email support"
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does the fatigue detection work?</h3>
            <p className="text-[#8b949e] text-sm">We analyze your calendar for patterns like back-to-back meetings, sessions longer than 90 minutes, and fewer than 10-minute gaps. Our AI scores each day and flags high-fatigue periods with actionable break suggestions.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Which calendars are supported?</h3>
            <p className="text-[#8b949e] text-sm">We support Google Calendar and Microsoft Outlook via OAuth. Your calendar data is read-only and never stored — analysis happens in real time and results are discarded after delivery.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I manage multiple team members?</h3>
            <p className="text-[#8b949e] text-sm">Yes. Managers and HR admins can invite team members, view aggregated fatigue scores on the dashboard, and configure automated Slack or email alerts when thresholds are exceeded.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} Zoom Fatigue Detector. All rights reserved.
      </footer>
    </main>
  );
}
