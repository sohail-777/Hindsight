import { useState } from 'react'
import { DEMO_DECISION } from '../data.js'

// Status of one assumption after `month` months have passed.
function statusAt(month, expiresInMonth) {
  if (month >= expiresInMonth) return 'expired'
  if (expiresInMonth - month <= 1) return 'risk'
  return 'holding'
}

const LABELS = { holding: 'Holding', risk: 'Expires soon', expired: 'Expired' }

export default function DecisionDemo() {
  const [month, setMonth] = useState(0)
  const [notifiedAt, setNotifiedAt] = useState(null)
  const { title, decidedOn, why, assumptions } = DEMO_DECISION

  const rows = assumptions.map((a) => ({ ...a, status: statusAt(month, a.expiresInMonth) }))
  const expired = rows.filter((r) => r.status === 'expired').length
  const risk = rows.filter((r) => r.status === 'risk').length
  const overall = expired ? 'expired' : risk ? 'risk' : 'holding'
  const notified = notifiedAt === month

  let message = `All ${rows.length} assumptions are holding.`
  if (overall === 'risk') message = `${risk} assumption${risk > 1 ? 's' : ''} will expire within a month.`
  if (overall === 'expired')
    message = `${expired} of ${rows.length} assumption${expired > 1 ? 's' : ''} no longer hold. Time to revisit this decision.`

  return (
    <div className="demo" aria-label="Interactive example of a Hindsight decision">
      <div className="demo-head">
        <p className="demo-kicker">Example decision</p>
        <h2 className="demo-title">{title}</h2>
        <p className="demo-meta">{decidedOn}</p>
        <p className="demo-why">{why}</p>
      </div>

      <ul className="assumptions">
        {rows.map((r) => (
          <li key={r.id} className={`assumption is-${r.status}`}>
            <span className={`pill pill-${r.status}`}>{LABELS[r.status]}</span>
            <span className="assumption-text">{r.text}</span>
            <span className="assumption-meta">
              Owner: {r.owner}. Expires in month {r.expiresInMonth}.
            </span>
          </li>
        ))}
      </ul>

      <div className={`demo-banner banner-${overall}`} role="status" aria-live="polite">
        <span>{message}</span>
        {overall !== 'holding' && (
          <button
            className="btn btn-small"
            onClick={() => setNotifiedAt(month)}
            disabled={notified}
          >
            {notified ? 'Owners notified' : 'Notify owners'}
          </button>
        )}
      </div>

      <div className="demo-slider">
        <label htmlFor="time-slider">
          Fast-forward time: <strong>{month === 0 ? 'Today' : `${month} month${month > 1 ? 's' : ''} from now`}</strong>
        </label>
        <input
          id="time-slider"
          type="range"
          min="0"
          max="6"
          step="1"
          value={month}
          onChange={(e) => setMonth(Number(e.target.value))}
        />
        <div className="slider-scale" aria-hidden="true">
          <span>Today</span>
          <span>6 months</span>
        </div>
      </div>
    </div>
  )
}
