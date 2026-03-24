import React from 'react'

function StatCard({title,count}) {
  return (
                <article class="stat-card">
                    <span class="stat-label">{title}</span>
                    <strong class="stat-value">{count}</strong>
                </article>
  )
}

export default StatCard