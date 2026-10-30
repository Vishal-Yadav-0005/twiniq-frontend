const monthlyData = [
  { month: "Jan", tasks: 35, savings: 25 },
  { month: "Feb", tasks: 48, savings: 38 },
  { month: "Mar", tasks: 42, savings: 32 },
  { month: "Apr", tasks: 65, savings: 50 },
  { month: "May", tasks: 55, savings: 45 },
  { month: "Jun", tasks: 78, savings: 62 },
  { month: "Jul", tasks: 70, savings: 58 },
  { month: "Aug", tasks: 92, savings: 75 },
];

const performanceData = [
  { name: "AI Twin Accuracy", value: 94.2, color: "#2563eb" },
  { name: "Automation Success", value: 98.5, color: "#16a34a" },
  { name: "Knowledge Retrieval", value: 96.8, color: "#8b5cf6" },
];

const activities = [
  { name: "AI Tasks Completed", value: "12,840", change: "+18.5%" },
  { name: "Automation Executions", value: "4,280", change: "+12.8%" },
  { name: "Knowledge Queries", value: "28,450", change: "+24.2%" },
  { name: "Average Response Time", value: "1.2 sec", change: "-8.4%" },
];

function Analytics() {
  const maxTasks = Math.max(...monthlyData.map((item) => item.tasks));

  return (
    <div className="analytics-page">
      <div className="analytics-header">
        <div>
          <p className="analytics-eyebrow">PERFORMANCE INTELLIGENCE</p>
          <h1>Analytics Overview</h1>
          <p className="analytics-subtitle">
            Monitor your AI workforce, automation performance and knowledge growth.
          </p>
        </div>

        <div className="analytics-date">
          <span className="material-symbols-outlined">calendar_today</span>
          Last 8 Months
        </div>
      </div>

      {/* KPI Cards */}

      <div className="analytics-stats">
        <div className="analytics-stat-card">
          <div className="analytics-stat-top">
            <span>Total AI Tasks</span>
            <span className="material-symbols-outlined">task_alt</span>
          </div>
          <h2>12,840</h2>
          <small className="analytics-positive">↑ 18.5% <span>vs previous period</span></small>
        </div>

        <div className="analytics-stat-card">
          <div className="analytics-stat-top">
            <span>Automation Runs</span>
            <span className="material-symbols-outlined">bolt</span>
          </div>
          <h2>4,280</h2>
          <small className="analytics-positive">↑ 12.8% <span>vs previous period</span></small>
        </div>

        <div className="analytics-stat-card">
          <div className="analytics-stat-top">
            <span>AI Accuracy</span>
            <span className="material-symbols-outlined">psychology</span>
          </div>
          <h2>94.2%</h2>
          <small className="analytics-positive">↑ 3.2% <span>vs previous period</span></small>
        </div>

        <div className="analytics-stat-card">
          <div className="analytics-stat-top">
            <span>Time Saved</span>
            <span className="material-symbols-outlined">schedule</span>
          </div>
          <h2>482 hrs</h2>
          <small className="analytics-positive">↑ 45 hrs <span>vs previous period</span></small>
        </div>
      </div>

      {/* Charts */}

      <div className="analytics-charts">
        <section className="analytics-panel analytics-activity-panel">
          <div className="analytics-panel-header">
            <div>
              <h2>AI Activity Trends</h2>
              <p>Monthly AI task activity</p>
            </div>
            <span className="analytics-chart-label">Tasks completed</span>
          </div>

          <div className="analytics-bar-chart">
            {monthlyData.map((item) => (
              <div className="analytics-bar-group" key={item.month}>
                <span className="analytics-bar-value">{item.tasks}</span>
                <div className="analytics-bar-track">
                  <div
                    className="analytics-bar"
                    style={{
                      height: `${(item.tasks / maxTasks) * 100}%`,
                    }}
                    title={`${item.tasks} tasks`}
                  />
                </div>
                <span className="analytics-bar-month">{item.month}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="analytics-panel analytics-performance-panel">
          <div className="analytics-panel-header">
            <div>
              <h2>System Performance</h2>
              <p>Overall system accuracy</p>
            </div>
            <span className="material-symbols-outlined">monitoring</span>
          </div>

          <div className="analytics-performance-list">
            {performanceData.map((item) => (
              <div className="analytics-performance-item" key={item.name}>
                <div className="analytics-performance-info">
                  <span>{item.name}</span>
                  <strong>{item.value}%</strong>
                </div>

                <div className="analytics-progress-track">
                  <div
                    className="analytics-progress-fill"
                    style={{
                      width: `${item.value}%`,
                      background: item.color,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="analytics-health">
            <span className="analytics-health-dot" />
            All systems operational
          </div>
        </section>
      </div>

      {/* Performance Metrics */}

      <section className="analytics-panel analytics-metrics-panel">
        <div className="analytics-panel-header">
          <div>
            <h2>Key Performance Metrics</h2>
            <p>Detailed performance indicators</p>
          </div>
          <span className="material-symbols-outlined">insights</span>
        </div>

        <div className="analytics-metrics-grid">
          {activities.map((item) => (
            <div className="analytics-metric-item" key={item.name}>
              <span>{item.name}</span>
              <h3>{item.value}</h3>
              <small className="analytics-positive">{item.change}</small>
            </div>
          ))}
        </div>
      </section>

      {/* Monthly Savings */}

      <section className="analytics-panel analytics-savings-panel">
        <div className="analytics-panel-header">
          <div>
            <h2>Automation Efficiency</h2>
            <p>Estimated time savings by month</p>
          </div>
          <span className="material-symbols-outlined">trending_up</span>
        </div>

        <div className="analytics-savings-list">
          {monthlyData.map((item) => (
            <div className="analytics-savings-row" key={item.month}>
              <span>{item.month}</span>
              <div className="analytics-savings-track">
                <div
                  className="analytics-savings-fill"
                  style={{ width: `${item.savings}%` }}
                />
              </div>
              <strong>{item.savings} hrs</strong>
            </div>
          ))}
        </div>
      </section>

      <p className="analytics-disclaimer">
        Note: Analytics values are sample demonstration data, not live system metrics.
      </p>
    </div>
  );
}

export default Analytics;