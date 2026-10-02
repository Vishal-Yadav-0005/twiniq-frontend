function Layout({ page, setPage, children }) {
  return (
    <div className="dashboard">

      <aside className="sidebar">

        <h2>TwinIQ</h2>

       <button
  className={page === "dashboard" ? "active" : ""}
  onClick={() => setPage("dashboard")}
>
  Dashboard
</button>

<button
  className={page === "ai-twin" ? "active" : ""}
  onClick={() => setPage("ai-twin")}
>
  AI Twin
</button>

<button
  className={page === "knowledge" ? "active" : ""}
  onClick={() => setPage("knowledge")}
>
  Knowledge
</button>

<button
  className={page === "memory" ? "active" : ""}
  onClick={() => setPage("memory")}
>
  Memory
</button>

      </aside>

      <div className="content-area">

        <div className="top-bar">

          <span>TwinIQ</span>

          <div className="top-actions">

  <button className="top-action">
    Search
  </button>

  <button className="top-action">
    Notification
  </button>

  <button className="profile-button">
  V
</button>
</div>

        </div>

        {children}

      </div>

    </div>
  );
}

export default Layout;