
import { useState } from "react";
import "./AITwin.css";

const tabs = [
  "Overview",
  "Capabilities",
  "Knowledge Sources",
  "Memory",
  "Versions",
  "Logs",
];

const activities = [
  {
    title: "Ingest Q3 Financials",
    description: "Financial knowledge source processed successfully",
    time: "Today",
    icon: "description",
    status: "Completed",
  },
  {
    title: "Update Brand Guidelines",
    description: "Organizational brand guidelines updated",
    time: "Yesterday",
    icon: "edit_document",
    status: "Completed",
  },
  {
    title: "Support Ticket Sync",
    description: "Support ticket knowledge synchronized",
    time: "Oct 27, 2026",
    icon: "support_agent",
    status: "Completed",
  },
  {
    title: "Connect API Endpoint",
    description: "API endpoint connection configured",
    time: "Oct 26, 2026",
    icon: "api",
    status: "Completed",
  },
];

const capabilities = [
  {
    name: "Business Intelligence",
    description: "Understand organizational data and business context.",
    icon: "analytics",
    status: "Enabled",
  },
  {
    name: "Conversational Intelligence",
    description: "Answer questions using organizational knowledge.",
    icon: "forum",
    status: "Enabled",
  },
  {
    name: "Knowledge Retrieval",
    description: "Retrieve relevant information from connected sources.",
    icon: "manage_search",
    status: "Enabled",
  },
  {
    name: "Contextual Memory",
    description: "Maintain relationships between stored knowledge.",
    icon: "psychology",
    status: "Enabled",
  },
];

const knowledgeSources = [
  { name: "Q3 Financials", type: "Document", icon: "description", status: "Connected" },
  { name: "Brand Guidelines", type: "Document", icon: "article", status: "Connected" },
  { name: "Support Tickets", type: "Data Source", icon: "support_agent", status: "Connected" },
  { name: "API Endpoint", type: "Integration", icon: "api", status: "Connected" },
];

const memoryItems = [
  { name: "Organizational Knowledge", type: "Core Concept", importance: "High", confidence: "98%" },
  { name: "Q3 Financial Performance", type: "Document / Source", importance: "High", confidence: "96%" },
  { name: "Brand Guidelines", type: "Document / Source", importance: "Medium", confidence: "94%" },
  { name: "Customer Support", type: "Extracted Entity", importance: "High", confidence: "92%" },
];

const versions = [
  { version: "v1.4", name: "Current Version", date: "Oct 29, 2026", status: "Active" },
  { version: "v1.3", name: "Previous Version", date: "Oct 27, 2026", status: "Archived" },
  { version: "v1.2", name: "Previous Version", date: "Oct 25, 2026", status: "Archived" },
];

function Icon({ children }) {
  return <span className="material-symbols-outlined">{children}</span>;
}

function AITwin({ setPage }) {
  const [activeTab, setActiveTab] = useState("Overview");
  const [isTraining, setIsTraining] = useState(false);

  const renderOverview = () => (
    <>
      <section className="aitwin-metrics">
        <article>
          <span>Model Confidence</span>
          <strong>94.2%</strong>
          <small>+2.4% this month</small>
        </article>
        <article>
          <span>Knowledge Coverage</span>
          <strong>87.5%</strong>
          <small>Across connected sources</small>
        </article>
        <article>
          <span>Inference Requests</span>
          <strong>12,840</strong>
          <small>Requests this month</small>
        </article>
        <article>
          <span>System Uptime</span>
          <strong>99.9%</strong>
          <small>Operational availability</small>
        </article>
      </section>

      <section className="aitwin-content-grid">
        <article className="aitwin-panel">
          <div className="aitwin-panel-heading">
            <div>
              <h2>Inference Activity</h2>
              <p>Recent AI Twin operations</p>
            </div>
            <Icon>more_horiz</Icon>
          </div>

          {activities.slice(0, 3).map((item) => (
            <div className="aitwin-activity" key={item.title}>
              <div className="aitwin-activity-icon">
                <Icon>{item.icon}</Icon>
              </div>
              <div className="aitwin-activity-info">
                <strong>{item.title}</strong>
                <p>{item.description}</p>
                <small>{item.time}</small>
              </div>
            </div>
          ))}
        </article>

        <article className="aitwin-panel">
          <div className="aitwin-panel-heading">
            <div>
              <h2>Twin Capabilities</h2>
              <p>Current intelligence modules</p>
            </div>
          </div>

          {capabilities.slice(0, 3).map((item) => (
            <div className="aitwin-capability" key={item.name}>
              <Icon>{item.icon}</Icon>
              <div>
                <strong>{item.name}</strong>
                <small>{item.status}</small>
              </div>
              <i />
            </div>
          ))}

          <button
            className="aitwin-manage-btn"
            onClick={() => setActiveTab("Capabilities")}
          >
            View all capabilities <Icon>arrow_forward</Icon>
          </button>
        </article>
      </section>

      <section className="aitwin-panel aitwin-runs-panel">
        <div className="aitwin-panel-heading">
          <div>
            <h2>Recent Training Runs</h2>
            <p>Latest knowledge ingestion and synchronization activities</p>
          </div>
          <button
            className="aitwin-text-btn"
            onClick={() => setActiveTab("Logs")}
          >
            View logs <Icon>arrow_forward</Icon>
          </button>
        </div>

        {activities.map((item) => (
          <div className="aitwin-training-row" key={item.title}>
            <div className="aitwin-run-icon">
              <Icon>{item.icon}</Icon>
            </div>
            <div className="aitwin-run-info">
              <strong>{item.title}</strong>
              <small>{item.time}</small>
            </div>
            <span className="aitwin-training-complete">{item.status}</span>
          </div>
        ))}
      </section>
    </>
  );

  const renderCapabilities = () => (
    <section className="aitwin-panel aitwin-tab-panel">
      <div className="aitwin-panel-heading">
        <div>
          <h2>Capabilities</h2>
          <p>Intelligence modules available to Nexus Alpha</p>
        </div>
        <span className="aitwin-count">4 Modules</span>
      </div>

      <div className="aitwin-detail-grid">
        {capabilities.map((item) => (
          <article className="aitwin-detail-card" key={item.name}>
            <div className="aitwin-detail-icon">
              <Icon>{item.icon}</Icon>
            </div>
            <div className="aitwin-detail-title">
              <h3>{item.name}</h3>
              <span className="aitwin-connected">{item.status}</span>
            </div>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );

  const renderKnowledge = () => (
    <section className="aitwin-panel aitwin-tab-panel">
      <div className="aitwin-panel-heading">
        <div>
          <h2>Knowledge Sources</h2>
          <p>Sources connected to your organizational twin</p>
        </div>
        <button
          className="aitwin-primary-btn"
          onClick={() => setPage("knowledge")}
        >
          <Icon>database</Icon> Open Knowledge Center
        </button>
      </div>

      {knowledgeSources.map((source) => (
        <div className="aitwin-source-row" key={source.name}>
          <div className="aitwin-activity-icon">
            <Icon>{source.icon}</Icon>
          </div>
          <div className="aitwin-source-info">
            <strong>{source.name}</strong>
            <small>{source.type}</small>
          </div>
          <span className="aitwin-training-complete">{source.status}</span>
        </div>
      ))}
    </section>
  );

  const renderMemory = () => (
    <section className="aitwin-panel aitwin-tab-panel">
      <div className="aitwin-panel-heading">
        <div>
          <h2>Memory</h2>
          <p>Knowledge and entities retained by Nexus Alpha</p>
        </div>
        <button
          className="aitwin-outline-btn"
          onClick={() => setPage("memory")}
        >
          <Icon>hub</Icon> Explore Memory Graph
        </button>
      </div>

      <div className="aitwin-memory-summary">
        <div><span>Memory Categories</span><strong>3</strong></div>
        <div><span>Tracked Concepts</span><strong>1,240</strong></div>
        <div><span>Average Confidence</span><strong>95%</strong></div>
      </div>

      {memoryItems.map((item) => (
        <div className="aitwin-source-row" key={item.name}>
          <div className="aitwin-source-info">
            <strong>{item.name}</strong>
            <small>{item.type}</small>
          </div>
          <span className="aitwin-memory-importance">{item.importance}</span>
          <strong className="aitwin-confidence">{item.confidence}</strong>
        </div>
      ))}
    </section>
  );

  const renderVersions = () => (
    <section className="aitwin-panel aitwin-tab-panel">
      <div className="aitwin-panel-heading">
        <div>
          <h2>Model Versions</h2>
          <p>Version history for your organizational twin</p>
        </div>
      </div>

      {versions.map((item) => (
        <div className="aitwin-version-row" key={item.version}>
          <div className="aitwin-version-icon"><Icon>deployed_code</Icon></div>
          <div className="aitwin-source-info">
            <strong>{item.version} · {item.name}</strong>
            <small>{item.date}</small>
          </div>
          <span className={item.status === "Active" ? "aitwin-training-complete" : "aitwin-archived"}>
            {item.status}
          </span>
        </div>
      ))}
    </section>
  );

  const renderLogs = () => (
    <section className="aitwin-panel aitwin-tab-panel">
      <div className="aitwin-panel-heading">
        <div>
          <h2>Activity Logs</h2>
          <p>Recent training and knowledge operations</p>
        </div>
      </div>

      <div className="aitwin-log-header">
        <span>ACTIVITY</span>
        <span>DATE</span>
        <span>STATUS</span>
      </div>

      {activities.map((item) => (
        <div className="aitwin-log-row" key={item.title}>
          <div>
            <strong>{item.title}</strong>
            <small>{item.description}</small>
          </div>
          <span>{item.time}</span>
          <span className="aitwin-training-complete">{item.status}</span>
        </div>
      ))}
    </section>
  );

  const tabContent = {
    Overview: renderOverview,
    Capabilities: renderCapabilities,
    "Knowledge Sources": renderKnowledge,
    Memory: renderMemory,
    Versions: renderVersions,
    Logs: renderLogs,
  };

  return (
    <main className="aitwin-page">
      <div className="aitwin-container">
        <div className="aitwin-breadcrumb">
          <span>Workspace</span>
          <Icon>chevron_right</Icon>
          <strong>AI Twin</strong>
        </div>

        <section className="aitwin-profile">
          <div className="aitwin-avatar">
            <Icon>neurology</Icon>
            <i />
          </div>

          <div className="aitwin-profile-info">
            <div className="aitwin-title-row">
              <h1>Nexus Alpha</h1>
              <span className="aitwin-live-status">
                <i /> {isTraining ? "Training" : "Active"}
              </span>
            </div>
            <p>Primary Organizational Twin</p>
            <div className="aitwin-meta">
              <span>Model ID: TWIN-001</span>
              <span>Last trained: Oct 29, 2026</span>
            </div>
          </div>

          <div className="aitwin-profile-actions">
            <button
              className="aitwin-outline-btn"
              onClick={() => setPage("knowledge")}
            >
              <Icon>database</Icon> Knowledge
            </button>
            <button
              className="aitwin-primary-btn"
              onClick={() => setIsTraining(!isTraining)}
            >
              <Icon>{isTraining ? "pause" : "play_arrow"}</Icon>
              {isTraining ? "Pause Training" : "Train Twin"}
            </button>
          </div>
        </section>

        <nav className="aitwin-tabs" aria-label="AI Twin sections">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={activeTab === tab ? "active" : ""}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </nav>

        {tabContent[activeTab]()}
      </div>
    </main>
  );
}

export default AITwin;
