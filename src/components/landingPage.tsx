import { Link } from 'react-router-dom'
import bg from '../assets/bg.jpg'

const faqs = [
  {
    q: 'Is it free to start writing?',
    a: 'Yes — creating an account and publishing your first blog is completely free. No credit card required.',
  },
  {
    q: "Can I customize my blog's look?",
    a: 'Absolutely. Choose from a curated set of themes and typography options to make your space truly yours.',
  },
  {
    q: 'Who owns the content I publish?',
    a: 'You do, always. Your words belong to you. We never claim ownership over any content you create.',
  },
  {
    q: 'Can I import my existing blog?',
    a: 'Yes, we support importing from Medium, Substack, and WordPress with just a few clicks.',
  },
]

const LandingPage = () => {
  return (
    <div className='min-h-screen bg-[#2C3E50] font-serif text-white'>

      {/* ── NAV ── */}
      
        <nav className='fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-5 backdrop-blur-md bg-[#2C3E50]/60 border-b border-white/10'>
        <span className='text-2xl font-bold tracking-widest text-yellow-400 uppercase'>BlogsWeb</span>
        <div className='flex items-center gap-8 text-sm text-gray-300'>
          <a href='#features' className='hover:text-yellow-400 transition-colors duration-200'>Features</a>
          <a href='#faq' className='hover:text-yellow-400 transition-colors duration-200'>FAQ</a>
          <Link to='/signup' className='px-5 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg transition-colors duration-300 font-sans text-sm'>
            Get Started
          </Link>
        </div>
      </nav>
      {/* ── HERO ── */}
      <section
        className='relative min-h-screen flex flex-col items-center justify-center text-center px-6'
        style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        {/* Overlay */}
        <div className='absolute inset-0 bg-gradient-to-b from-[#2C3E50]/70 via-[#2C3E50]/60 to-[#2C3E50]' />

        <div className='relative z-10 max-w-3xl flex flex-col items-center'>
          <span className='mb-6 inline-block px-4 py-1 rounded-full border border-yellow-400/40 bg-yellow-400/10 text-yellow-300 text-xs tracking-widest uppercase font-sans'>
            Your words. Your world.
          </span>

          <h1 className='text-6xl md:text-7xl font-bold leading-tight mb-6 tracking-tight'>
            Write stories that
            <span className='block text-yellow-400 italic'>actually matter.</span>
          </h1>

          <p className='text-gray-300 text-lg md:text-xl mb-10 max-w-xl leading-relaxed font-sans font-light'>
            Inkwell is a distraction-free blogging platform built for writers who care about craft, not clutter.
          </p>

          <div className='flex gap-4 flex-wrap justify-center'>
            <Link
              to='/signup'
              className='px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg transition-colors duration-300 text-base font-sans font-medium shadow-lg shadow-yellow-900/30'
            >
              Start Writing Free
            </Link>
            <a
              href='#faq'
              className='px-8 py-3 border border-white/30 hover:border-yellow-400 text-white rounded-lg transition-colors duration-300 text-base font-sans font-medium'
            >
              Learn More
            </a>
          </div>

          {/* Floating stat pills */}
          <div className='mt-16 flex gap-6 flex-wrap justify-center font-sans'>
            {[['10K+', 'Writers'], ['50K+', 'Stories Published'], ['4.9★', 'Avg Rating']].map(([num, label]) => (
              <div key={label} className='px-6 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-center'>
                <p className='text-yellow-400 text-xl font-bold'>{num}</p>
                <p className='text-gray-400 text-xs mt-0.5'>{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <div className='absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 font-sans text-xs animate-bounce'>
          <span>scroll</span>
          <svg className='w-4 h-4' fill='none' stroke='currentColor' strokeWidth={2} viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' />
          </svg>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id='features' className='py-28 px-8 max-w-6xl mx-auto'>
        <p className='text-yellow-400 text-xs uppercase tracking-widest font-sans text-center mb-3'>Why Inkwell</p>
        <h2 className='text-4xl md:text-5xl font-bold text-center mb-16 leading-tight'>
          Everything a writer needs.<br />
          <span className='text-gray-400 font-light italic'>Nothing they don't.</span>
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {[
            {
              icon: '✦',
              title: 'Distraction-Free Editor',
              desc: 'A clean, minimal canvas that keeps your focus on the words — not the toolbar.',
            },
            {
              icon: '◈',
              title: 'Beautiful Typography',
              desc: 'Carefully curated fonts and spacing that make every post a pleasure to read.',
            },
            {
              icon: '⬡',
              title: 'Built-in Audience',
              desc: 'Your stories are discoverable from day one. No SEO wizardry required.',
            },
            {
              icon: '◎',
              title: 'Custom Domains',
              desc: 'Use your own domain and own your corner of the internet completely.',
            },
            {
              icon: '⟐',
              title: 'Analytics That Matter',
              desc: 'See who"s reading, where they are from, and what keeps them coming back.',
            },
            {
              icon: '❋',
              title: 'Monetize Your Writing',
              desc: 'Accept paid subscriptions from readers who love your work.',
            },
          ].map(({ icon, title, desc }) => (
            <div
              key={title}
              className='p-7 rounded-2xl bg-white/5 border border-white/10 hover:border-yellow-400/40 hover:bg-white/8 transition-all duration-300 group'
            >
              <span className='text-yellow-400 text-2xl mb-4 block group-hover:scale-110 transition-transform duration-300'>{icon}</span>
              <h3 className='text-lg font-semibold mb-2'>{title}</h3>
              <p className='text-gray-400 text-sm leading-relaxed font-sans font-light'>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── QUOTE BANNER ── */}
      <section
        className='relative py-24 px-8 text-center overflow-hidden'
        style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className='absolute inset-0 bg-[#2C3E50]/80 backdrop-blur-sm' />
        <div className='relative z-10 max-w-2xl mx-auto'>
          <p className='text-4xl md:text-5xl font-bold italic leading-snug text-white'>
            "A writer only begins a book. A reader finishes it."
          </p>
          <p className='mt-5 text-yellow-400 text-sm font-sans tracking-widest uppercase'>— Samuel Johnson</p>
          <Link
            to='/signup'
            className='mt-10 inline-block px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg transition-colors duration-300 font-sans font-medium'
          >
            Start Your Journey
          </Link>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id='faq' className='py-28 px-8 max-w-3xl mx-auto'>
        <p className='text-yellow-400 text-xs uppercase tracking-widest font-sans text-center mb-3'>FAQ</p>
        <h2 className='text-4xl font-bold text-center mb-14'>Common Questions</h2>

        <div className='flex flex-col gap-4'>
          {faqs.map(({ q, a }) => (
            <details
              key={q}
              className='group rounded-xl border border-white/10 bg-white/5 px-6 py-5 cursor-pointer hover:border-yellow-400/30 transition-all duration-300'
            >
              <summary className='flex items-center justify-between text-base font-semibold list-none select-none'>
                {q}
                <span className='text-yellow-400 text-xl transition-transform duration-300 group-open:rotate-45 ml-4 shrink-0'>+</span>
              </summary>
              <p className='mt-4 text-gray-400 text-sm leading-relaxed font-sans font-light'>{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className='py-20 px-8 text-center bg-yellow-500/10 border-y border-yellow-400/20'>
        <h2 className='text-4xl font-bold mb-4'>Ready to share your story?</h2>
        <p className='text-gray-400 mb-8 font-sans font-light'>Join thousands of writers publishing on Inkwell today.</p>
        <Link
          to='/signup'
          className='inline-block px-10 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg transition-colors duration-300 font-sans font-medium text-base shadow-lg shadow-yellow-900/20'
        >
          Create Your Free Account
        </Link>
      </section>

      {/* ── FOOTER ── */}
      <footer className='py-12 px-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 font-sans text-sm text-gray-500'>
        <span className='text-xl font-bold tracking-widest text-yellow-400 uppercase font-serif'>Inkwell</span>

        <div className='flex gap-8'>
          <a href='#' className='hover:text-yellow-400 transition-colors duration-200'>About</a>
          <a href='#' className='hover:text-yellow-400 transition-colors duration-200'>Privacy</a>
          <a href='#' className='hover:text-yellow-400 transition-colors duration-200'>Terms</a>
          <a href='#' className='hover:text-yellow-400 transition-colors duration-200'>Contact</a>
        </div>

        <p>© {new Date().getFullYear()} Inkwell. All rights reserved.</p>
      </footer>

    </div>
  )
}

export default LandingPage