import { useState } from "react";
import LoginPage from "./components/LoginPage.jsx";

export default function App() {
  const [user, setUser] = useState(null);

  if (user) {
    return (
      <div className="app app--auth">
        <div className="login login__success">
          <div className="login__card">
            <header className="login__header">
              <p className="login__eyebrow">Signed in</p>
              <h1 className="login__title">Welcome back</h1>
              <p className="login__subtitle">
                You are signed in as <strong>{user.email}</strong>
              </p>
            </header>
            <button
              type="button"
              className="login__submit"
              onClick={() => setUser(null)}
            >
              Sign out
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="app app--auth">
      <LoginPage onLogin={setUser} />
    </div>
  );
}
