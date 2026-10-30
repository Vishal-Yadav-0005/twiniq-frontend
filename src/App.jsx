
import { useState } from "react";
import Dashboard from "./components/Dashboard";
import AITwin from "./components/AITwin";
import Layout from "./components/Layout";
import Auth from "./components/Auth";
import Knowledge from "./components/Knowledge";
import Memory from "./components/Memory";
import Agents from "./components/Agents";
import Automations from "./components/Automations";
import Analytics from "./components/Analytics";
import Settings from "./components/Settings";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [page, setPage] = useState("dashboard");

  const handleLogin = () => {
    setIsLoggedIn(true);
    setPage("dashboard");
  };

  if (isLoggedIn) {
    return (
      <Layout page={page} setPage={setPage}>
        {page === "dashboard" && <Dashboard />}

        {page === "ai-twin" && <AITwin setPage={setPage} />}

        {page === "knowledge" && <Knowledge />}

        {page === "memory" && <Memory />}

        {page === "agents" && <Agents />}

        {page === "automations" && <Automations />}

        {page === "analytics" && <Analytics />}

        {page === "settings" && <Settings />}

      </Layout>
    );
  }

  return (
    <Auth
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      isSignup={isSignup}
      setIsSignup={setIsSignup}
      handleLogin={handleLogin}
    />
  );
}

export default App;
