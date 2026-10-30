import { useState } from "react";

const initialAutomations = [
  {
    id: 1,
    name: "Daily Knowledge Sync",
    description: "Automatically sync new documents into the knowledge base.",
    trigger: "Scheduled",
    action: "Sync Knowledge",
    frequency: "Every day",
    status: "Active",
    runs: 124,
  },
  {
    id: 2,
    name: "Customer Query Processing",
    description: "Process incoming customer queries using the AI Twin.",
    trigger: "New Message",
    action: "AI Response",
    frequency: "On event",
    status: "Active",
    runs: 86,
  },
  {
    id: 3,
    name: "Weekly Performance Report",
    description: "Generate and organize weekly performance reports.",
    trigger: "Scheduled",
    action: "Generate Report",
    frequency: "Every week",
    status: "Paused",
    runs: 12,
  },
];

function Automations() {
  const [automations, setAutomations] = useState(initialAutomations);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("");

  const emptyForm = {
    name: "",
    description: "",
    trigger: "Scheduled",
    action: "Sync Knowledge",
    frequency: "Every day",
  };

  const [formData, setFormData] = useState(emptyForm);

  const activeCount = automations.filter(
    (item) => item.status === "Active"
  ).length;

  const totalRuns = automations.reduce(
    (total, item) => total + item.runs,
    0
  );

  const openCreateForm = () => {
    setEditingId(null);
    setFormData(emptyForm);
    setShowForm(true);
    setMessage("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.name.trim()) return;

    if (editingId) {
      setAutomations((prev) =>
        prev.map((item) =>
          item.id === editingId ? { ...item, ...formData } : item
        )
      );
      setMessage("Automation updated successfully.");
    } else {
      setAutomations((prev) => [
        {
          ...formData,
          id: Date.now(),
          status: "Paused",
          runs: 0,
        },
        ...prev,
      ]);
      setMessage("Automation created successfully.");
    }

    setShowForm(false);
    setEditingId(null);
    setFormData(emptyForm);
  };

  const handleEdit = (automation) => {
    setEditingId(automation.id);
    setFormData({
      name: automation.name,
      description: automation.description,
      trigger: automation.trigger,
      action: automation.action,
      frequency: automation.frequency,
    });
    setShowForm(true);
    setMessage("");
  };

  const handleDelete = (id) => {
    if (!window.confirm("Are you sure you want to delete this automation?")) {
      return;
    }

    setAutomations((prev) => prev.filter((item) => item.id !== id));
    setMessage("Automation deleted successfully.");
  };

  const toggleStatus = (id) => {
    setAutomations((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              status: item.status === "Active" ? "Paused" : "Active",
            }
          : item
      )
    );
  };

  const runAutomation = (id) => {
    setAutomations((prev) =>
      prev.map((item) =>
        item.id === id && item.status === "Active"
          ? { ...item, runs: item.runs + 1 }
          : item
      )
    );

    const selected = automations.find((item) => item.id === id);

    if (selected?.status === "Active") {
      setMessage(`Demo run recorded for "${selected.name}".`);
    } else {
      setMessage("Activate this automation before running it.");
    }
  };

  const filteredAutomations = automations.filter((item) =>
    `${item.name} ${item.trigger} ${item.action}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="automations-page">
      <div className="automations-header">
        <div>
          <p className="automations-eyebrow">WORKFLOW MANAGEMENT</p>
          <h1>Automations</h1>
          <p className="automations-subtitle">
            Build and manage workflows that handle repetitive tasks.
          </p>
        </div>

        <button
          className="automations-primary-btn"
          onClick={openCreateForm}
        >
          + Create Automation
        </button>
      </div>

      {message && (
        <div className="automations-message" role="status">
          {message}
          <button onClick={() => setMessage("")} aria-label="Dismiss message">
            ×
          </button>
        </div>
      )}

      <div className="automations-stats">
        <div className="automations-stat-card">
          <span>Total Automations</span>
          <h2>{automations.length}</h2>
          <small>Created workflows</small>
        </div>

        <div className="automations-stat-card">
          <span>Active</span>
          <h2>{activeCount}</h2>
          <small>Currently enabled</small>
        </div>

        <div className="automations-stat-card">
          <span>Paused</span>
          <h2>{automations.length - activeCount}</h2>
          <small>Currently disabled</small>
        </div>

        <div className="automations-stat-card">
          <span>Total Executions</span>
          <h2>{totalRuns.toLocaleString()}</h2>
          <small>Demo execution count</small>
        </div>
      </div>

      {showForm && (
        <div className="automations-form-card">
          <div className="automations-form-header">
            <h2>{editingId ? "Edit Automation" : "Create Automation"}</h2>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              aria-label="Close form"
            >
              ×
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <label>Automation Name</label>
            <input
              type="text"
              placeholder="e.g. Daily Knowledge Sync"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />

            <label>Description</label>
            <textarea
              rows={3}
              placeholder="Describe what this automation does..."
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />

            <div className="automations-form-row">
              <div>
                <label>Trigger</label>
                <select
                  value={formData.trigger}
                  onChange={(e) =>
                    setFormData({ ...formData, trigger: e.target.value })
                  }
                >
                  <option>Scheduled</option>
                  <option>New Message</option>
                  <option>New Document</option>
                  <option>Manual</option>
                </select>
              </div>

              <div>
                <label>Action</label>
                <select
                  value={formData.action}
                  onChange={(e) =>
                    setFormData({ ...formData, action: e.target.value })
                  }
                >
                  <option>Sync Knowledge</option>
                  <option>AI Response</option>
                  <option>Generate Report</option>
                  <option>Send Notification</option>
                </select>
              </div>
            </div>

            <label>Frequency</label>
            <select
              value={formData.frequency}
              onChange={(e) =>
                setFormData({ ...formData, frequency: e.target.value })
              }
            >
              <option>Every day</option>
              <option>Every week</option>
              <option>Every month</option>
              <option>On event</option>
              <option>On demand</option>
            </select>

            <div className="automations-form-actions">
              <button
                type="button"
                className="automations-cancel-btn"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="automations-primary-btn"
              >
                {editingId ? "Save Changes" : "Create Automation"}
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="automations-toolbar">
        <div>
          <h2>Your Workflows</h2>
          <p>Monitor and control your automations.</p>
        </div>

        <input
          type="search"
          placeholder="Search automations..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search automations"
        />
      </div>

      <div className="automations-list">
        {filteredAutomations.map((item) => (
          <div className="automation-card" key={item.id}>
            <div className="automation-card-main">
              <div className="automation-icon">
                <span className="material-symbols-outlined">
                  {item.trigger === "Scheduled" ? "schedule" : "bolt"}
                </span>
              </div>

              <div className="automation-info">
                <div className="automation-title-row">
                  <h3>{item.name}</h3>
                  <span
                    className={`automation-status ${
                      item.status === "Active" ? "active" : "paused"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                <p>{item.description}</p>

                <div className="automation-details">
                  <span>Trigger: <strong>{item.trigger}</strong></span>
                  <span>Action: <strong>{item.action}</strong></span>
                  <span>Frequency: <strong>{item.frequency}</strong></span>
                  <span>Runs: <strong>{item.runs}</strong></span>
                </div>
              </div>
            </div>

            <div className="automation-actions">
              <button
                className="automation-run-btn"
                onClick={() => runAutomation(item.id)}
              >
                Run Now
              </button>

              <button
                className="automation-edit-btn"
                onClick={() => handleEdit(item)}
              >
                Edit
              </button>

              <button
                className="automation-toggle-btn"
                onClick={() => toggleStatus(item.id)}
              >
                {item.status === "Active" ? "Pause" : "Activate"}
              </button>

              <button
                className="automation-delete-btn"
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}

        {filteredAutomations.length === 0 && (
          <div className="automations-empty">
            <h3>No automations found</h3>
            <p>Try another search or create a new automation.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Automations;