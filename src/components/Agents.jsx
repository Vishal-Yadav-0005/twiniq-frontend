import { useState } from "react";

const initialAgents = [
  {
    id: 1,
    name: "Research Assistant",
    description: "Researches topics, collects information and creates summaries.",
    category: "Research",
    status: "Active",
    icon: "🔍",
    tasks: 128,
    lastRun: "2 minutes ago",
  },
  {
    id: 2,
    name: "Customer Support Agent",
    description: "Handles customer queries and provides helpful responses.",
    category: "Support",
    status: "Active",
    icon: "💬",
    tasks: 86,
    lastRun: "15 minutes ago",
  },
  {
    id: 3,
    name: "Content Writer",
    description: "Creates drafts, articles and professional content.",
    category: "Content",
    status: "Inactive",
    icon: "✍️",
    tasks: 42,
    lastRun: "Yesterday",
  },
];

function Agents() {
  const [agents, setAgents] = useState(initialAgents);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [search, setSearch] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "General",
  });

  const activeAgents = agents.filter(
    (agent) => agent.status === "Active"
  ).length;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim()) return;

    if (editingId) {
      setAgents((prev) =>
        prev.map((agent) =>
          agent.id === editingId
            ? { ...agent, ...formData }
            : agent
        )
      );
    } else {
      setAgents((prev) => [
        {
          ...formData,
          id: Date.now(),
          status: "Inactive",
          icon: "🤖",
          tasks: 0,
          lastRun: "Never",
        },
        ...prev,
      ]);
    }

    setFormData({
      name: "",
      description: "",
      category: "General",
    });
    setEditingId(null);
    setShowForm(false);
  };

  const handleEdit = (agent) => {
    setFormData({
      name: agent.name,
      description: agent.description,
      category: agent.category,
    });
    setEditingId(agent.id);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this agent?"
    );

    if (confirmed) {
      setAgents((prev) => prev.filter((agent) => agent.id !== id));
    }
  };

  const toggleStatus = (id) => {
    setAgents((prev) =>
      prev.map((agent) =>
        agent.id === id
          ? {
              ...agent,
              status:
                agent.status === "Active" ? "Inactive" : "Active",
            }
          : agent
      )
    );
  };

  const filteredAgents = agents.filter((agent) =>
    `${agent.name} ${agent.category}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="agents-page">
      <div className="agents-header">
        <div>
          <p className="agents-eyebrow">AI WORKFORCE</p>
          <h1>AI Agents</h1>
          <p className="agents-subtitle">
            Create, manage and monitor your intelligent AI agents.
          </p>
        </div>

        <button
          className="agents-primary-btn"
          onClick={() => {
            setEditingId(null);
            setFormData({
              name: "",
              description: "",
              category: "General",
            });
            setShowForm(true);
          }}
        >
          + Create New Agent
        </button>
      </div>

      <div className="agents-stats">
        <div className="agents-stat-card">
          <span>Total Agents</span>
          <h2>{agents.length}</h2>
          <small>Created agents</small>
        </div>

        <div className="agents-stat-card">
          <span>Active Agents</span>
          <h2>{activeAgents}</h2>
          <small>Currently enabled</small>
        </div>

        <div className="agents-stat-card">
          <span>Total Tasks</span>
          <h2>
            {agents.reduce((total, agent) => total + agent.tasks, 0)}
          </h2>
          <small>Tasks completed (demo data)</small>
        </div>

        <div className="agents-stat-card">
          <span>Inactive Agents</span>
          <h2>{agents.length - activeAgents}</h2>
          <small>Currently disabled</small>
        </div>
      </div>

      <div className="agents-toolbar">
        <div>
          <h2>Your Agents</h2>
          <p>Manage your AI workforce from one place.</p>
        </div>

        <input
          type="search"
          placeholder="Search agents..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="agents-search"
        />
      </div>

      {showForm && (
        <div className="agents-form-card">
          <div className="agents-form-header">
            <h2>{editingId ? "Edit Agent" : "Create New Agent"}</h2>
            <button
              type="button"
              className="agents-close-btn"
              onClick={() => setShowForm(false)}
            >
              ✕
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <label>Agent Name</label>
            <input
              type="text"
              placeholder="e.g. Research Assistant"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />

            <label>Description</label>
            <textarea
              placeholder="What should this agent do?"
              value={formData.description}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  description: e.target.value,
                })
              }
              rows={3}
            />

            <label>Category</label>
            <select
              value={formData.category}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  category: e.target.value,
                })
              }
            >
              <option>General</option>
              <option>Research</option>
              <option>Support</option>
              <option>Content</option>
              <option>Productivity</option>
              <option>Analytics</option>
            </select>

            <div className="agents-form-actions">
              <button
                type="button"
                className="agents-cancel-btn"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
              <button type="submit" className="agents-primary-btn">
                {editingId ? "Save Changes" : "Create Agent"}
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="agents-grid">
        {filteredAgents.map((agent) => (
          <div className="agent-card" key={agent.id}>
            <div className="agent-card-top">
              <div className="agent-icon">{agent.icon}</div>

              <span
                className={`agent-status ${
                  agent.status === "Active" ? "active" : "inactive"
                }`}
              >
                {agent.status}
              </span>
            </div>

            <div className="agent-card-info">
              <span className="agent-category">{agent.category}</span>
              <h3>{agent.name}</h3>
              <p>{agent.description}</p>
            </div>

            <div className="agent-card-meta">
              <div>
                <span>Tasks completed</span>
                <strong>{agent.tasks}</strong>
              </div>
              <div>
                <span>Last activity</span>
                <strong>{agent.lastRun}</strong>
              </div>
            </div>

            <div className="agent-card-actions">
              <button
                className="agent-toggle-btn"
                onClick={() => toggleStatus(agent.id)}
              >
                {agent.status === "Active" ? "Deactivate" : "Activate"}
              </button>

              <button
                className="agent-edit-btn"
                onClick={() => handleEdit(agent)}
              >
                Edit
              </button>

              <button
                className="agent-delete-btn"
                onClick={() => handleDelete(agent.id)}
                aria-label={`Delete ${agent.name}`}
              >
                Delete
              </button>
            </div>
          </div>
        ))}

        {filteredAgents.length === 0 && (
          <div className="agents-empty">
            <h3>No agents found</h3>
            <p>Try another search or create a new agent.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Agents;