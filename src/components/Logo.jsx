export default function Logo({ light = false }) {
  return (
    <span className={`logo ${light ? 'logo-light' : ''}`}>
      <svg width="28" height="28" viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="16" r="13" fill="none" stroke="#14745F" strokeWidth="4" />
        <path d="M16 8v8l5 3" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
      </svg>
      <span>Hindsight</span>
    </span>
  )
}
