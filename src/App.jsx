import { useState } from "react";
import Dashboard from "./components/Dashboard";
import AITwin from "./components/AITwin";
import Layout from "./components/Layout";

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

        {page === "knowledge" && (
  <main className="main-content">

    <h1>Knowledge</h1>

    <p>Manage your organization's knowledge.</p>

    <div className="knowledge-card">

      <h2>Knowledge Base</h2>

      <p>Company Documents</p>
      <p>Business Information</p>
      <p>Processes & Workflows</p>
      <p>Customer Information</p>

      <button>Add Knowledge</button>

    </div>

  </main>
)}

       {page === "memory" && (
  <main className="main-content">

    <h1>Memory</h1>

    <p>Manage your AI Twin memory.</p>

    <div className="memory-card">

      <h2>Recent Memory</h2>

      <p>Customer preferences updated</p>
      <p>New business process learned</p>
      <p>Recent conversation stored</p>
      <p>Organization knowledge updated</p>

      <button>Clear Memory</button>

    </div>

  </main>
)}

      </Layout>
    );
  }

  return (
    <div className="login-page">
      <div className="login-box">

        <div className="logo">T</div>

        <h1>
          {isSignup ? "Create Account" : "TwinIQ"}
        </h1>

        <h2>
          {isSignup ? "Create Your Account" : "Welcome Back"}
        </h2>

        <p>
          {isSignup
            ? "Create your account to get started"
            : "Sign in to your account"}
        </p>

        {isSignup && (
          <input
            type="text"
            placeholder="Full Name"
          />
        )}

        <input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>
          {isSignup ? "Sign Up" : "Login"}
        </button>

        <p>
          {isSignup
            ? "Already have an account?"
            : "Don't have an account?"}{" "}

          <button onClick={() => setIsSignup(!isSignup)}>
            {isSignup ? "Login" : "Sign Up"}
          </button>
        </p>

      </div>
    </div>
  );
}

export default App;