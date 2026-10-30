
function Dashboard() {
  const metrics = [
    {
      label: "Revenue (MRR)",
      value: "$142.5K",
      change: "+12.4% vs last month",
      icon: "payments",
      trend: true,
    },
    {
      label: "Automation Savings",
      value: "482 hrs",
      change: "+45 hrs this week",
      icon: "auto_awesome",
      trend: true,
    },
    {
      label: "Knowledge Growth",
      value: "1.2M",
      change: "Vectors Embedded",
      icon: "database",
    },
    {
      label: "Twin Confidence",
      value: "94.2%",
      icon: "psychology",
      progress: 94.2,
    },
    {
      label: "System Health",
      value: "99.99%",
      change: "Uptime • 12ms avg latency",
      icon: "monitor_heart",
    },
  ];

  const activities = [
    {
      icon: "description",
      title: "Knowledge base updated",
      detail: "New documents indexed",
      time: "2 min ago",
    },
    {
      icon: "smart_toy",
      title: "AI Twin learning completed",
      detail: "Knowledge model refreshed",
      time: "15 min ago",
    },
    {
      icon: "bolt",
      title: "Automation executed",
      detail: "Workflow completed successfully",
      time: "32 min ago",
    },
  ];

  const suggestions = [
    {
      icon: "lightbulb",
      title: "Improve response accuracy",
      detail: "Add more customer support documents to your knowledge base.",
      tag: "Knowledge",
    },
    {
      icon: "auto_awesome",
      title: "Automate repetitive tasks",
      detail: "Review workflows that could save your team more time.",
      tag: "Automation",
    },
  ];

  const bars = [
    { label: "Jan", height: 42 },
    { label: "Feb", height: 58 },
    { label: "Mar", height: 48 },
    { label: "Apr", height: 72 },
    { label: "May", height: 63 },
    { label: "Jun", height: 88 },
    { label: "Jul", height: 76 },
    { label: "Aug", height: 100 },
  ];

  return (
    <main className="twin-dashboard">
      <section className="twin-overview-heading">
        <div>
          <h1>Overview</h1>
          <p>
            System performance and AI operations across your workspace.
          </p>
        </div>

        <div className="twin-system-status">
          <span className="twin-eyebrow">STATUS</span>
          <div>
            <span className="twin-status-dot" />
            <span>All Systems Nominal</span>
          </div>
        </div>
      </section>

      <section className="twin-metrics-grid">
        {metrics.map((metric) => (
          <article className="twin-metric-card" key={metric.label}>
            <div className="twin-metric-top">
              <span>{metric.label}</span>
              <span className="material-symbols-outlined twin-metric-icon">
                {metric.icon}
              </span>
            </div>

            <div className="twin-metric-value">{metric.value}</div>

            {metric.trend && (
              <div className="twin-metric-change">
                <span className="material-symbols-outlined">
                  trending_up
                </span>
                {metric.change}
              </div>
            )}

            {metric.change && !metric.trend && (
              <p className="twin-metric-note">{metric.change}</p>
            )}

            {metric.progress !== undefined && (
              <div
                className="twin-progress-track"
                role="progressbar"
                aria-label="Twin confidence"
                aria-valuenow={metric.progress}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="twin-progress-fill"
                  style={{ width: `${metric.progress}%` }}
                />
              </div>
            )}
          </article>
        ))}
      </section>

      <section className="twin-charts-grid">
        <article className="twin-panel">
          <div className="twin-panel-heading">
            <div>
              <h2>Revenue Trends</h2>
              <p>Monthly revenue performance</p>
            </div>
            <button
              className="twin-icon-button"
              type="button"
              aria-label="Revenue chart options"
            >
              <span className="material-symbols-outlined">more_horiz</span>
            </button>
          </div>

          <div className="twin-revenue-chart">
            <div className="twin-chart-y-labels">
              <span>$150k</span>
              <span>$100k</span>
              <span>$50k</span>
              <span>$0</span>
            </div>

            <div className="twin-chart-plot">
              <div className="twin-chart-grid-lines">
                <span />
                <span />
                <span />
                <span />
              </div>

              <div className="twin-bars">
                {bars.map((bar) => (
                  <div className="twin-bar-column" key={bar.label}>
                    <div
                      className="twin-revenue-bar"
                      style={{ height: `${bar.height}%` }}
                      title={`${bar.label} revenue`}
                    />
                    <span>{bar.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="twin-chart-footer">
            <span>Revenue overview</span>
            <span className="twin-footer-highlight">+12.4%</span>
          </div>
        </article>

        <article className="twin-panel">
          <div className="twin-panel-heading">
            <div>
              <h2>Automation Efficiency</h2>
              <p>Time saved through automation</p>
            </div>
            <button
              className="twin-icon-button"
              type="button"
              aria-label="Automation chart options"
            >
              <span className="material-symbols-outlined">more_horiz</span>
            </button>
          </div>

          <div className="twin-efficiency-content">
            <div className="twin-efficiency-number">482 hrs</div>
            <p>Time saved this month</p>

            <div className="twin-efficiency-bars">
              {[45, 62, 52, 78].map((height, index) => (
                <div className="twin-efficiency-column" key={height + index}>
                  <div
                    className="twin-efficiency-bar"
                    style={{ height: `${height}%` }}
                  />
                  <span>Week {index + 1}</span>
                </div>
              ))}
            </div>

            <div className="twin-chart-footer">
              <span>Compared with previous period</span>
              <span className="twin-footer-highlight">+45 hrs</span>
            </div>
          </div>
        </article>
      </section>

      <section className="twin-bottom-grid">
        <article className="twin-panel">
          <div className="twin-panel-heading">
            <div>
              <h2>Live Activity</h2>
              <p>Recent workspace events</p>
            </div>
            <span className="twin-live-indicator">LIVE</span>
          </div>

          <div className="twin-activity-list">
            {activities.map((activity) => (
              <div className="twin-activity-item" key={activity.title}>
                <div className="twin-activity-icon">
                  <span className="material-symbols-outlined">
                    {activity.icon}
                  </span>
                </div>

                <div className="twin-activity-copy">
                  <h3>{activity.title}</h3>
                  <p>{activity.detail}</p>
                </div>

                <span className="twin-activity-time">{activity.time}</span>
              </div>
            ))}
          </div>
        </article>

        <article className="twin-panel">
          <div className="twin-panel-heading">
            <div>
              <h2>Twin Suggestions</h2>
              <p>Recommended next steps</p>
            </div>
            <span className="material-symbols-outlined twin-heading-icon">
              auto_awesome
            </span>
          </div>

          <div className="twin-suggestions-list">
            {suggestions.map((suggestion) => (
              <div className="twin-suggestion-item" key={suggestion.title}>
                <div className="twin-suggestion-icon">
                  <span className="material-symbols-outlined">
                    {suggestion.icon}
                  </span>
                </div>

                <div className="twin-suggestion-copy">
                  <h3>{suggestion.title}</h3>
                  <p>{suggestion.detail}</p>
                  <span className="twin-suggestion-tag">{suggestion.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="twin-panel twin-knowledge-panel">
          <div className="twin-panel-heading">
            <div>
              <h2>Knowledge Base</h2>
              <p>Workspace knowledge status</p>
            </div>
            <span className="material-symbols-outlined twin-heading-icon">
              database
            </span>
          </div>

          <div className="twin-knowledge-summary">
            <div>
              <span className="twin-knowledge-number">1.2M</span>
              <span className="twin-knowledge-label">Vectors embedded</span>
            </div>
            <div>
              <span className="twin-knowledge-number">248</span>
              <span className="twin-knowledge-label">Documents indexed</span>
            </div>
          </div>

          <div className="twin-knowledge-progress">
            <div>
              <span>Indexing status</span>
              <strong>Complete</strong>
            </div>
            <div className="twin-progress-track">
              <div className="twin-progress-fill" style={{ width: "100%" }} />
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}

export default Dashboard;
