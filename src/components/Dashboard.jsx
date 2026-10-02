function Dashboard() {
  return (
    <main className="main-content">

      <h1>Dashboard</h1>

      <p>Welcome to TwinIQ</p>

      <div className="kpi-container">

        <div className="kpi-card">
          <span>Revenue</span>
          <h2>$24,500</h2>
        </div>

        <div className="kpi-card">
          <span>Automation Saving</span>
          <h2>$8,240</h2>
        </div>

        <div className="kpi-card">
          <span>Knowledge Growth</span>
          <h2>24%</h2>
        </div>

        <div className="kpi-card">
          <span>Twin Confidence</span>
          <h2>92%</h2>
        </div>

      </div>

      <div className="revenue-card">

        <h2>Revenue Overview</h2>

        <h3>$24,500</h3>

        <p>+12.5% from last month</p>

        <div className="chart">
          <div className="bar bar-1"></div>
          <div className="bar bar-2"></div>
          <div className="bar bar-3"></div>
          <div className="bar bar-4"></div>
          <div className="bar bar-5"></div>
        </div>

      </div>
      
      <div className="dashboard-bottom">

  <div className="health-card">

    <h2>Business Health</h2>

    <h3>Good</h3>

    <p>All systems are operating normally</p>

  </div>

  <div className="activity">

    <h2>Recent Activity</h2>

    <p>New Document Added</p>
    <p>Automation Workflow Executed</p>
    <p>AI Twin Updated</p>

  </div>

</div>

    </main>
  );
}

export default Dashboard;