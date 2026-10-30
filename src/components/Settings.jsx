
import { useState } from "react";

function Settings() {
  const [profile, setProfile] = useState({
    name: "Vishal Yadav",
    email: "vishal@example.com",
    role: "Administrator",
  });

  const [preferences, setPreferences] = useState({
    notifications: true,
    weeklyReport: true,
    activityAlerts: false,
    twoFactor: false,
  });

  const [saved, setSaved] = useState(false);

  const updatePreference = (key) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
    setSaved(false);
  };

  const handleSave = () => {
    setSaved(true);
  };

  return (
    <main className="settings-page">
      <div className="settings-header">
        <div>
          <span className="settings-eyebrow">PREFERENCES</span>
          <h1>Settings</h1>
          <p>Manage your account and TwinIQ workspace preferences.</p>
        </div>
      </div>

      <section className="settings-section">
        <div className="settings-section-heading">
          <div>
            <h2>Profile Information</h2>
            <p>Manage your personal account details.</p>
          </div>
          <span className="material-symbols-rounded">person</span>
        </div>

        <div className="settings-form-grid">
          <label>
            Full Name
            <input
              value={profile.name}
              onChange={(e) => {
                setProfile({ ...profile, name: e.target.value });
                setSaved(false);
              }}
            />
          </label>

          <label>
            Email Address
            <input
              type="email"
              value={profile.email}
              onChange={(e) => {
                setProfile({ ...profile, email: e.target.value });
                setSaved(false);
              }}
            />
          </label>

          <label>
            Account Role
            <input value={profile.role} readOnly />
          </label>
        </div>
      </section>

      <section className="settings-section">
        <div className="settings-section-heading">
          <div>
            <h2>Notifications</h2>
            <p>Choose which updates you want to receive.</p>
          </div>
          <span className="material-symbols-rounded">notifications</span>
        </div>

        <div className="settings-options">
          {[
            {
              key: "notifications",
              title: "Product Notifications",
              description: "Receive important TwinIQ product updates.",
            },
            {
              key: "weeklyReport",
              title: "Weekly Reports",
              description: "Get a weekly summary of your AI Twin activity.",
            },
            {
              key: "activityAlerts",
              title: "Activity Alerts",
              description: "Get notified about important workspace activity.",
            },
          ].map((item) => (
            <div className="settings-option" key={item.key}>
              <div>
                <strong>{item.title}</strong>
                <p>{item.description}</p>
              </div>

              <button
                type="button"
                className={`settings-toggle ${
                  preferences[item.key] ? "active" : ""
                }`}
                onClick={() => updatePreference(item.key)}
                aria-label={`Toggle ${item.title}`}
                aria-pressed={preferences[item.key]}
              >
                <span />
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="settings-section">
        <div className="settings-section-heading">
          <div>
            <h2>Security</h2>
            <p>Manage your account security preferences.</p>
          </div>
          <span className="material-symbols-rounded">shield</span>
        </div>

        <div className="settings-option">
          <div>
            <strong>Two-Factor Authentication</strong>
            <p>Add an extra layer of security to your account.</p>
          </div>

          <button
            type="button"
            className={`settings-toggle ${
              preferences.twoFactor ? "active" : ""
            }`}
            onClick={() => updatePreference("twoFactor")}
            aria-label="Toggle two-factor authentication"
            aria-pressed={preferences.twoFactor}
          >
            <span />
          </button>
        </div>
      </section>

      <div className="settings-footer">
        <span className="settings-save-message">
          {saved ? "Settings saved in this session." : ""}
        </span>
        <button className="settings-save-btn" onClick={handleSave}>
          <span className="material-symbols-rounded">save</span>
          Save Changes
        </button>
      </div>
    </main>
  );
}

export default Settings;
