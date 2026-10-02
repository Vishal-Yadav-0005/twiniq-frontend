function AITwin({ setPage }) {
  return (
    <main className="main-content">

      <button
  className="back-button"
  onClick={() => setPage("dashboard")}
>
  ← Back to Dashboard
</button>

      <h1>AI Twin</h1>

      <p>Your Organization's AI Twin</p>

      <div className="twin-card">

        <h2>AI Twin Status</h2>

        <p>
          Active and learning from your organization.
        </p>

        <div className="twin-progress">
          <div className="twin-progress-bar"></div>
        </div>

        <p className="progress-text">
          92% Confidence
        </p>

        <div className="twin-actions">
          <button>Train</button>
          <button>Pause</button>
          <button>Deploy</button>
        </div>

      </div>

      <div className="capabilities-card">

        <h2>Capabilities</h2>

        <p>Customer Communication</p>
        <p>Workflow Automation</p>
        <p>Business Analytics</p>
        <p>Knowledge Management</p>

      </div>

    </main>
  );
}

export default AITwin;