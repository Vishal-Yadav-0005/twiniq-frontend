
import "./Knowledge.css";

const sources = [
  { name: "Drive", detail: "24 folders", icon: "folder_shared", color: "#1A73E8", bg: "#F0F3FF", status: "connected" },
  { name: "Slack", detail: "12 channels", icon: "forum", color: "#611F69", bg: "#F3E8FF", status: "connected" },
  { name: "GitHub", detail: "8 repos", icon: "code", color: "#24292F", bg: "#F1F5F9", status: "connected" },
  { name: "Notion", detail: "Syncing...", icon: "description", color: "#151c27", bg: "#FAFAFA", status: "syncing" },
];

const documents = [
  {
    name: "Q3_Financial_Report_Final.pdf",
    path: "Finance/2023/Reports",
    source: "Drive",
    icon: "picture_as_pdf",
    status: "Synced",
    time: "2 mins ago",
    size: "2.4 MB",
    chunks: "142",
  },
  {
    name: "Engineering Onboarding Guide",
    path: "HR/Onboarding",
    source: "Notion",
    icon: "description",
    status: "Syncing",
    time: "In progress",
    size: "--",
    chunks: "--",
  },
  {
    name: "api_v2_documentation.md",
    path: "twiniq-core/docs",
    source: "GitHub",
    icon: "code",
    status: "Error",
    time: "1 hour ago",
    size: "14 KB",
    chunks: "0",
  },
  {
    name: "Customer_Feedback_2023.csv",
    path: "Product/Research",
    source: "Drive",
    icon: "dataset",
    status: "Synced",
    time: "Yesterday",
    size: "12.1 MB",
    chunks: "3,420",
  },
];

function Icon({ children, className = "" }) {
  return (
    <span className={`material-symbols-outlined ${className}`}>
      {children}
    </span>
  );
}

function Knowledge() {
  const handleAction = (action) => {
    alert(`${action} feature will be available soon.`);
  };

  return (
    <main className="knowledge-page">
      <div className="knowledge-container">
        <div className="knowledge-heading">
          <div>
            <h1>Knowledge Center</h1>
            <p>
              Manage your connected data sources, view embedding health,
              and control document synchronization for your AI Twin.
            </p>
          </div>

          <div className="knowledge-heading-actions">
            <button
              className="knowledge-secondary-btn"
              onClick={() => handleAction("Sync All")}
            >
              <Icon>sync</Icon>
              Sync All
            </button>

            <button
              className="knowledge-primary-btn"
              onClick={() => handleAction("Connect Source")}
            >
              <Icon>add_link</Icon>
              Connect Source
            </button>
          </div>
        </div>

        <section className="knowledge-stats">
          <article className="knowledge-stat-card">
            <div className="knowledge-stat-top">
              <span><Icon>hard_drive_2</Icon> Storage Usage</span>
              <Icon className="knowledge-blue-icon">trending_up</Icon>
            </div>
            <div>
              <h2>42.8 GB</h2>
              <div className="knowledge-progress">
                <span style={{ width: "45%" }} />
              </div>
              <p>45% of 100 GB quota</p>
            </div>
          </article>

          <article className="knowledge-stat-card">
            <div className="knowledge-stat-top">
              <span><Icon>health_and_safety</Icon> Embedding Health</span>
              <span className="knowledge-status healthy">Healthy</span>
            </div>
            <div>
              <h2>99.9%</h2>
              <p className="knowledge-health-text">
                <Icon>check_circle</Icon>
                Vector DB responding optimally
              </p>
            </div>
          </article>

          <article className="knowledge-stat-card">
            <div className="knowledge-stat-top">
              <span><Icon>data_object</Icon> Total Chunks</span>
              <Icon>info</Icon>
            </div>
            <div>
              <h2>1.24M</h2>
              <p>+12k parsed this week</p>
            </div>
          </article>
        </section>

        <section className="knowledge-sources-section">
          <h2 className="knowledge-section-title">Connected Sources</h2>

          <div className="knowledge-sources-grid">
            {sources.map((source) => (
              <article className="knowledge-source-card" key={source.name}>
                <span
                  className={`knowledge-source-dot ${source.status}`}
                />
                <div
                  className="knowledge-source-icon"
                  style={{
                    color: source.color,
                    background: source.bg,
                  }}
                >
                  <Icon>{source.icon}</Icon>
                </div>
                <h3>{source.name}</h3>
                <p>{source.detail}</p>

                {source.status === "connected" && (
                  <button
                    className="knowledge-source-config"
                    onClick={() => handleAction(`${source.name} configuration`)}
                  >
                    <Icon>settings</Icon> Config
                  </button>
                )}
              </article>
            ))}

            <button
              className="knowledge-add-source"
              onClick={() => handleAction("Add Source")}
            >
              <Icon>add</Icon>
              <span>Add Source</span>
            </button>
          </div>
        </section>

        <section className="knowledge-documents">
          <div className="knowledge-documents-header">
            <h2>Recent Documents</h2>

            <select
              aria-label="Filter document status"
              onChange={(e) => handleAction(`Filter: ${e.target.value}`)}
            >
              <option>All Statuses</option>
              <option>Synced</option>
              <option>Syncing</option>
              <option>Error</option>
            </select>
          </div>

          <div className="knowledge-table-wrapper">
            <table className="knowledge-table">
              <thead>
                <tr>
                  <th>Document Name</th>
                  <th>Source</th>
                  <th>Status</th>
                  <th>Last Synced</th>
                  <th>Size / Chunks</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {documents.map((doc) => (
                  <tr key={doc.name}>
                    <td>
                      <div className="knowledge-document-name">
                        <Icon>{doc.icon}</Icon>
                        <div>
                          <strong>{doc.name}</strong>
                          <small>{doc.path}</small>
                        </div>
                      </div>
                    </td>
                    <td>{doc.source}</td>
                    <td>
                      <span className={`knowledge-status ${doc.status.toLowerCase()}`}>
                        {doc.status}
                      </span>
                    </td>
                    <td>{doc.time}</td>
                    <td>{doc.size} <span className="knowledge-dot-separator">•</span> {doc.chunks}</td>
                    <td>
                      <button
                        className="knowledge-row-action"
                        title="More actions"
                        onClick={() => handleAction(`Actions for ${doc.name}`)}
                      >
                        <Icon>more_vert</Icon>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="knowledge-table-footer">
            <span>Showing 1-4 of 248 documents</span>
            <div>
              <button onClick={() => handleAction("Previous page")}>
                <Icon>chevron_left</Icon>
              </button>
              <button onClick={() => handleAction("Next page")}>
                <Icon>chevron_right</Icon>
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Knowledge;
