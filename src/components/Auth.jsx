
import { useState } from "react";
import "./Auth.css";

function Auth({
  email,
  setEmail,
  password,
  setPassword,
  isSignup,
  setIsSignup,
  handleLogin,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <h1>TwinIQ</h1>
          <h2>{isSignup ? "Create your account" : "Welcome back"}</h2>
          <p>
            {isSignup
              ? "Start building your organizational intelligence."
              : "Sign in to your enterprise AI workspace"}
          </p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          {isSignup && (
            <div className="auth-field">
              <label htmlFor="fullName">Full Name</label>
              <input
                id="fullName"
                type="text"
                placeholder="Your full name"
                autoComplete="name"
                required
              />
            </div>
          )}

          <div className="auth-field">
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              type="email"
              placeholder="name@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
            />
          </div>

          <div className="auth-field">
            <div className="auth-password-label">
              <label htmlFor="password">Password</label>

              {!isSignup && (
                <button
                  type="button"
                  className="auth-text-button"
                  onClick={() =>
                    alert("Password recovery will be available soon.")
                  }
                >
                  Forgot password?
                </button>
              )}
            </div>

            <div className="auth-password-input">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                autoComplete={
                  isSignup ? "new-password" : "current-password"
                }
              />

              <button
                type="button"
                className="auth-password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={
                  showPassword ? "Hide password" : "Show password"
                }
              >
                <span className="material-symbols-outlined">
                  {showPassword ? "visibility_off" : "visibility"}
                </span>
              </button>
            </div>
          </div>

          <button className="auth-submit" type="submit">
            {isSignup ? "Create Account" : "Sign In"}
          </button>
        </form>

        {isSignup && (
          <div className="auth-trust-grid">
            <div className="auth-trust-item">
              <span className="material-symbols-outlined">
                shield_lock
              </span>
              <div>
                <h3>Enterprise Security</h3>
                <p>SOC2 Type II certified infrastructure.</p>
              </div>
            </div>

            <div className="auth-trust-item">
              <span className="material-symbols-outlined">
                visibility_off
              </span>
              <div>
                <h3>Privacy-First AI</h3>
                <p>Your data never trains public models.</p>
              </div>
            </div>
          </div>
        )}

        {!isSignup && (
          <>
            <div className="auth-divider">
              <span>Or continue with</span>
            </div>

            <div className="auth-social-buttons">
              <button
                type="button"
                onClick={() =>
                  alert("Google sign-in will be available soon.")
                }
              >
                <span className="material-symbols-outlined">
                  account_circle
                </span>
                Google
              </button>

              <button
                type="button"
                onClick={() =>
                  alert("GitHub sign-in will be available soon.")
                }
              >
                <span className="material-symbols-outlined">code</span>
                GitHub
              </button>
            </div>
          </>
        )}

        <p className="auth-footer">
          {isSignup ? "Already have an account?" : "Don't have an account?"}
          <button
            type="button"
            onClick={() => {
              setShowPassword(false);
              setIsSignup(!isSignup);
            }}
          >
            {isSignup ? "Sign in" : "Sign up"}
          </button>
        </p>
      </div>
    </div>
  );
}

export default Auth;
