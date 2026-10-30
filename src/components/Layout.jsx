
import { useState } from "react";
import Analytics from "./Analytics";

const navigation = [
  { id: "dashboard", label: "Dashboard", icon: "dashboard" },
  { id: "ai-twin", label: "AI Twin", icon: "psychology" },
  { id: "knowledge", label: "Knowledge", icon: "database" },
  { id: "memory", label: "Memory", icon: "memory" },
  { id: "agents", label: "Agents", icon: "smart_toy" },
  { id: "automations", label: "Automations", icon: "cloud_download" },
  { id: "analytics", label: "Analytics", icon: "analytics" },
  { id: "settings", label: "Settings", icon: "settings" },
];

function Layout({ page, setPage, children }) {
  const [search, setSearch] = useState("");
  const [collapsed, setCollapsed] = useState(false);

 const handleNavigation = (item) => {
  if (
    ["dashboard",
       "ai-twin", 
       "knowledge", 
       "memory", 
       "agents",
       "automations",
       "analytics",
       "settings",
      ].includes(item.id)
  ) {
    setPage(item.id);
  }
};

  return (
    <div className={`twin-shell ${collapsed ? "twin-shell-collapsed" : ""}`}>
      <aside className="twin-sidebar">
        <div className="twin-brand">
          <div className="twin-brand-icon">
            <span className="material-symbols-outlined">psychology</span>
          </div>

          <div className="twin-brand-copy">
            <h2>TwinIQ</h2>
            <p>Enterprise OS</p>
          </div>
        </div>

        <nav className="twin-navigation" aria-label="Main navigation">
          {navigation.map((item) => {
            const available = [
                    "dashboard",
                    "ai-twin",
                    "knowledge",
                    "memory",
                    "agents",
                    "automations",
                    "analytics",
                    "settings",
                  ].includes(item.id);

            return (
              <button
                key={item.id}
                type="button"
                className={`twin-nav-item ${
                  page === item.id ? "active" : ""
                }`}
                onClick={() => handleNavigation(item)}
                disabled={!available}
                title={!available ? `${item.label} — coming soon` : item.label}
                aria-current={page === item.id ? "page" : undefined}
              >
                <span className="material-symbols-outlined">
                  {item.icon}
                </span>
                <span className="twin-nav-label">{item.label}</span>
                {!available && (
                  <span className="twin-coming-soon">Soon</span>
                )}
              </button>
            );
          })}
        </nav>

        <div className="twin-sidebar-footer">
          <button
            type="button"
            className="twin-new-agent"
            onClick={() =>
              window.alert("Agent creation will be added in a later step.")
            }
          >
            <span className="material-symbols-outlined">add</span>
            <span className="twin-nav-label">New Agent</span>
          </button>

          <button
            type="button"
            className="twin-collapse-button"
            onClick={() => setCollapsed((current) => !current)}
          >
            <span className="material-symbols-outlined">
              {collapsed ? "menu" : "menu_open"}
            </span>
            <span className="twin-nav-label">
              {collapsed ? "Expand" : "Collapse"}
            </span>
          </button>
        </div>
      </aside>

      <div className="twin-main">
        <header className="twin-topbar">
          <div className="twin-search">
            <span className="material-symbols-outlined">search</span>
            <input
              type="search"
              placeholder="Search knowledge base, agents, commands..."
              aria-label="Search TwinIQ"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
            <kbd>⌘K</kbd>
          </div>

          <div className="twin-topbar-actions">
            <button
              type="button"
              className="twin-top-icon-button"
              aria-label="Notifications"
              onClick={() => window.alert("Notifications will be added later.")}
            >
              <span className="material-symbols-outlined">
                notifications
              </span>
            </button>

            <span className="twin-topbar-divider" />

            <button
              type="button"
              className="twin-quick-action"
              onClick={() => setPage("ai-twin")}
            >
              Quick Actions
            </button>

            <button
              type="button"
              className="twin-feedback-button"
              onClick={() =>
                window.alert("Feedback functionality will be added later.")
              }
            >
              Feedback
            </button>

            <button
              type="button"
              className="twin-profile"
              aria-label="User profile"
              onClick={() => window.alert("Profile settings will be added later.")}
            >
              V
            </button>
          </div>
        </header>

        {search.trim() && (
          <div className="twin-search-status" role="status">
            Search entered: <strong>{search}</strong>
            <span> — search functionality will be connected later.</span>
          </div>
        )}

        {children}
      </div>
    </div>
  );
}

export default Layout;
