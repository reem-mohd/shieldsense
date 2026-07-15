@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=JetBrains+Mono:wght@300;400;500;700&family=Outfit:wght@300;400;500;600&display=swap');

:root {
  --bg: #070b14;
  --bg2: #0c1220;
  --surface: #111827;
  --surface2: #162035;
  --surface3: #1c2a42;
  --border: #1e3356;
  --border2: #243d6b;
  --accent: #38bdf8;
  --accent-dim: rgba(56,189,248,0.12);
  --accent2: #818cf8;
  --accent3: #34d399;
  --danger: #f87171;
  --warning: #fbbf24;
  --text: #e2e8f0;
  --text-dim: #94a3b8;
  --text-muted: #475569;
  --display: 'Syne', sans-serif;
  --mono: 'JetBrains Mono', monospace;
  --body: 'Outfit', sans-serif;
  --r: 14px;
  --r-sm: 8px;
  --r-lg: 20px;
  --shadow: 0 4px 24px rgba(0,0,0,0.4);
  --glow: 0 0 30px rgba(56,189,248,0.15);
  --glow-lg: 0 0 60px rgba(56,189,248,0.25);
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; }

body {
  font-family: var(--body);
  background: var(--bg);
  color: var(--text);
  min-height: 100vh;
  overflow-x: hidden;
  line-height: 1.6;
}

/* Animated grid bg */
body::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image:
    linear-gradient(rgba(56,189,248,0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(56,189,248,0.025) 1px, transparent 1px);
  background-size: 48px 48px;
  pointer-events: none;
  z-index: 0;
}

/* Radial glow orb */
body::after {
  content: '';
  position: fixed;
  top: -20%;
  left: 50%;
  transform: translateX(-50%);
  width: 800px;
  height: 400px;
  background: radial-gradient(ellipse, rgba(56,189,248,0.06) 0%, transparent 70%);
  pointer-events: none;
  z-index: 0;
}

/* PAGE SYSTEM */
.page { display: none; position: relative; z-index: 1; }
.page.active { display: block; }

/* NAV */
.nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 200;
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: auto auto;
  align-items: center;
  padding: 10px 2rem 0;
  background: rgba(7,11,20,0.92);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border);
  height: auto;
}

.nav-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--display);
  font-weight: 700;
  font-size: 1.1rem;
  color: var(--text);
  cursor: pointer;
  text-decoration: none;
  user-select: none;
  grid-row: 1;
  grid-column: 1;
  padding-bottom: 10px;
}
.nav-logo .logo-icon {
  width: 32px; height: 32px;
  background: linear-gradient(135deg, var(--accent), var(--accent2));
  border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  font-size: 1rem;
  flex-shrink: 0;
}

/* Nav links sit on second row, spanning full width */
.nav-links {
  display: flex;
  gap: 2px;
  list-style: none;
  grid-row: 2;
  grid-column: 1 / -1;
  padding-bottom: 8px;
  flex-wrap: wrap;
  border-top: 1px solid rgba(255,255,255,0.04);
  padding-top: 6px;
}
.nav-links a {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 12px;
  border-radius: var(--r-sm);
  text-decoration: none;
  color: var(--text-muted);
  font-size: 0.8rem;
  font-weight: 500;
  transition: all 0.18s;
  font-family: var(--body);
  white-space: nowrap;
}
.nav-links a:hover { color: var(--accent); background: var(--accent-dim); }
.nav-links a.active { color: var(--accent); background: var(--accent-dim); }

.nav-right {
  display: flex;
  align-items: center;
  gap: 10px;
  grid-row: 1;
  grid-column: 3;
  padding-bottom: 10px;
}
.nav-user-badge {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 5px 12px;
  background: var(--surface2);
  border: 1px solid var(--border);
  border-radius: var(--r-sm);
  font-family: var(--mono);
  font-size: 0.78rem;
  color: var(--text-dim);
}
.nav-user-badge .uname { color: var(--accent); }
.nav-user-badge .pts { color: var(--accent3); }

.btn-logout {
  padding: 5px 12px;
  background: transparent;
  border: 1px solid var(--border);
  border-radius: var(--r-sm);
  color: var(--text-muted);
  font-size: 0.8rem;
  cursor: pointer;
  font-family: var(--body);
  transition: all 0.18s;
}
.btn-logout:hover { border-color: var(--danger); color: var(--danger); }

/* MAIN */
.main { padding-top: 96px; min-height: 100vh; }

/* AUTH PAGES */
.auth-wrap {
  min-height: calc(100vh - 96px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.auth-card {
  width: 100%;
  max-width: 440px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--r-lg);
  padding: 2.5rem;
  box-shadow: var(--shadow), var(--glow);
  animation: slideUp 0.4s cubic-bezier(0.16,1,0.3,1);
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}

.auth-logo {
  text-align: center;
  margin-bottom: 2rem;
}
.auth-logo .shield {
  width: 56px; height: 56px;
  background: linear-gradient(135deg, var(--accent), var(--accent2));
  border-radius: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  margin-bottom: 1rem;
  box-shadow: var(--glow-lg);
}
.auth-logo h1 {
  font-family: var(--display);
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
}
.auth-logo p { font-size: 0.85rem; color: var(--text-dim); }

.auth-tabs {
  display: flex;
  background: var(--bg2);
  border-radius: var(--r-sm);
  padding: 4px;
  margin-bottom: 2rem;
  gap: 4px;
}
.auth-tab {
  flex: 1;
  padding: 8px;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: var(--text-muted);
  font-family: var(--body);
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.18s;
}
.auth-tab.active {
  background: var(--surface3);
  color: var(--text);
  box-shadow: 0 1px 4px rgba(0,0,0,0.3);
}

.form-group { margin-bottom: 1.25rem; }
.form-label {
  display: block;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-dim);
  margin-bottom: 0.5rem;
  font-family: var(--mono);
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
.form-input {
  width: 100%;
  padding: 11px 14px;
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: var(--r-sm);
  color: var(--text);
  font-family: var(--body);
  font-size: 0.92rem;
  outline: none;
  transition: border-color 0.18s, box-shadow 0.18s;
}
.form-input:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(56,189,248,0.1);
}
.form-input::placeholder { color: var(--text-muted); }

.password-wrap { position: relative; }
.password-wrap .form-input { padding-right: 44px; }
.pw-toggle {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: var(--text-muted);
  cursor: pointer;
  font-size: 1rem;
  padding: 2px;
  line-height: 1;
}

.pw-strength {
  margin-top: 6px;
  display: flex;
  gap: 4px;
}
.pw-bar {
  flex: 1;
  height: 3px;
  border-radius: 2px;
  background: var(--surface3);
  transition: background 0.3s;
}
.pw-bar.weak { background: var(--danger); }
.pw-bar.medium { background: var(--warning); }
.pw-bar.strong { background: var(--accent3); }

.pw-label {
  font-size: 0.75rem;
  color: var(--text-muted);
  margin-top: 4px;
  font-family: var(--mono);
}

.form-error {
  display: none;
  font-size: 0.8rem;
  color: var(--danger);
  margin-top: 6px;
  font-family: var(--mono);
}
.form-error.show { display: block; }

.btn-auth {
  width: 100%;
  padding: 12px;
  background: linear-gradient(135deg, var(--accent), #0ea5e9);
  color: #000;
  border: none;
  border-radius: var(--r-sm);
  font-family: var(--display);
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
  margin-top: 0.5rem;
  letter-spacing: 0.02em;
}
.btn-auth:hover { transform: translateY(-1px); box-shadow: var(--glow-lg); }
.btn-auth:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }

.auth-note {
  text-align: center;
  font-size: 0.78rem;
  color: var(--text-muted);
  margin-top: 1.25rem;
  line-height: 1.6;
  font-family: var(--mono);
}

.security-note {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 10px 12px;
  background: rgba(52,211,153,0.06);
  border: 1px solid rgba(52,211,153,0.15);
  border-radius: var(--r-sm);
  font-size: 0.76rem;
  color: var(--text-muted);
  margin-top: 1.25rem;
  line-height: 1.5;
  font-family: var(--mono);
}
.security-note .icon { font-size: 0.9rem; flex-shrink: 0; margin-top: 1px; }

/* BUTTONS */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: var(--r-sm);
  font-family: var(--body);
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: all 0.2s;
  text-decoration: none;
  white-space: nowrap;
}
.btn-primary {
  background: linear-gradient(135deg, var(--accent), #0ea5e9);
  color: #000;
  box-shadow: 0 2px 12px rgba(56,189,248,0.2);
}
.btn-primary:hover { transform: translateY(-2px); box-shadow: var(--glow-lg); }
.btn-ghost {
  background: transparent;
  color: var(--text-dim);
  border: 1px solid var(--border);
}
.btn-ghost:hover { border-color: var(--accent); color: var(--accent); background: var(--accent-dim); }
.btn-lg { padding: 14px 28px; font-size: 1rem; border-radius: var(--r); }
.btn-sm { padding: 6px 14px; font-size: 0.82rem; }

/* HERO */
.hero {
  max-width: 860px;
  margin: 0 auto;
  padding: 80px 2rem 60px;
  text-align: center;
}
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 5px 14px;
  border-radius: 100px;
  background: var(--accent-dim);
  border: 1px solid rgba(56,189,248,0.2);
  font-family: var(--mono);
  font-size: 0.72rem;
  color: var(--accent);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 1.75rem;
}
.hero h1 {
  font-family: var(--display);
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.25rem;
  letter-spacing: -0.02em;
}
.hero h1 em { font-style: normal; color: var(--accent); }
.hero p { font-size: 1.05rem; color: var(--text-dim); max-width: 580px; margin: 0 auto 2.5rem; }

.stat-row {
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}
.stat-item .n {
  font-family: var(--mono);
  font-size: 2rem;
  color: var(--accent);
  display: block;
  font-weight: 700;
}
.stat-item .l { font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; }

/* SECTION */
.section {
  max-width: 1100px;
  margin: 0 auto;
  padding: 3rem 2rem;
}
.section-label {
  font-family: var(--mono);
  font-size: 0.7rem;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  display: block;
  margin-bottom: 0.5rem;
}
.section-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
}
.section-title {
  font-family: var(--display);
  font-size: clamp(1.25rem, 2.5vw, 1.75rem);
  font-weight: 700;
}

/* CARDS */
.card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--r);
  padding: 1.5rem;
  transition: border-color 0.2s, box-shadow 0.2s;
}
.card:hover { border-color: var(--border2); }
.grid { display: grid; gap: 1.25rem; }
.grid-3 { grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); }
.grid-2 { grid-template-columns: repeat(auto-fill, minmax(400px, 1fr)); }
.grid-4 { grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); }

/* SCENARIO CARDS */
.scenario-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--r);
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.22s;
  position: relative;
  overflow: hidden;
}
.scenario-card:hover {
  border-color: var(--accent);
  transform: translateY(-3px);
  box-shadow: var(--glow);
}
.scenario-card.completed { border-color: rgba(52,211,153,0.4); }
.scenario-card.completed .done-badge {
  position: absolute;
  top: 12px; right: 12px;
  width: 22px; height: 22px;
  background: var(--accent3);
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.7rem;
  color: #000;
  font-weight: 700;
}

.sc-icon { font-size: 2.2rem; margin-bottom: 0.875rem; display: block; }
.sc-type {
  font-family: var(--mono);
  font-size: 0.68rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.4rem;
}
.sc-type.phishing { color: var(--danger); }
.sc-type.smishing { color: var(--warning); }
.sc-type.pretexting { color: var(--accent2); }
.sc-type.baiting { color: #f97316; }
.sc-type.social_media { color: #ec4899; }
.sc-type.vishing { color: var(--accent); }
.sc-type.qr_phishing { color: #a3e635; }

.sc-title {
  font-family: var(--display);
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
}

.diff-bar { display: flex; gap: 3px; margin-bottom: 0.75rem; }
.diff-bar span {
  height: 3px;
  flex: 1;
  border-radius: 2px;
  background: var(--surface3);
}
.diff-1 .diff-bar span:nth-child(1) { background: var(--accent3); }
.diff-2 .diff-bar span:nth-child(-n+2) { background: var(--warning); }
.diff-3 .diff-bar span { background: var(--danger); }

.sc-meta { font-size: 0.8rem; color: var(--text-muted); font-family: var(--mono); }

/* GAME SCREEN */
.game-wrap { max-width: 760px; margin: 0 auto; padding: 2rem; }

.game-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
}

.msg-card {
  background: var(--surface2);
  border: 1px solid var(--border);
  border-radius: var(--r);
  overflow: hidden;
  margin-bottom: 1.75rem;
}
.msg-titlebar {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 10px 16px;
  background: var(--surface3);
  border-bottom: 1px solid var(--border);
}
.dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }
.dot-r { background: #ff5f56; }
.dot-y { background: #ffbd2e; }
.dot-g { background: #27c93f; }
.msg-win-label {
  margin-left: auto;
  font-family: var(--mono);
  font-size: 0.72rem;
  color: var(--text-muted);
}

.msg-body { padding: 1.5rem; }
.msg-from { font-size: 0.8rem; color: var(--text-muted); margin-bottom: 4px; }
.msg-from strong { color: var(--danger); }
.msg-subject { font-family: var(--display); font-size: 1.05rem; font-weight: 700; margin-bottom: 1rem; }
.msg-content {
  font-size: 0.9rem;
  line-height: 1.85;
  color: var(--text-dim);
  white-space: pre-line;
  font-family: var(--mono);
}

.choices { display: grid; gap: 0.65rem; margin-bottom: 1.5rem; }
.choice {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 1rem 1.125rem;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--r-sm);
  color: var(--text);
  font-family: var(--body);
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.18s;
  text-align: left;
  width: 100%;
}
.choice:hover:not(:disabled) {
  border-color: var(--accent);
  background: var(--accent-dim);
  transform: translateX(4px);
}
.choice:disabled { cursor: not-allowed; }
.choice.correct { border-color: var(--accent3); background: rgba(52,211,153,0.07); }
.choice.wrong { border-color: var(--danger); background: rgba(248,113,113,0.07); }
.choice-key {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px; height: 22px;
  min-width: 22px;
  border-radius: 5px;
  background: var(--surface3);
  border: 1px solid var(--border);
  font-family: var(--mono);
  font-size: 0.72rem;
  color: var(--text-muted);
  flex-shrink: 0;
  margin-top: 1px;
}

/* FEEDBACK */
.feedback {
  background: var(--surface2);
  border-radius: var(--r);
  padding: 1.25rem;
  margin-bottom: 1.25rem;
  display: none;
  animation: slideUp 0.3s ease;
  border-left: 3px solid transparent;
}
.feedback.show { display: block; }
.feedback.correct { border-left-color: var(--accent3); }
.feedback.wrong { border-left-color: var(--danger); }
.feedback-head {
  font-family: var(--display);
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 8px;
}
.feedback-head.correct { color: var(--accent3); }
.feedback-head.wrong { color: var(--danger); }
.feedback-body { font-size: 0.86rem; color: var(--text-dim); line-height: 1.7; }
.flags { margin-top: 1rem; }
.flags-label {
  font-family: var(--mono);
  font-size: 0.7rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 0.5rem;
}
.flag-wrap { display: flex; flex-wrap: wrap; gap: 6px; }
.flag {
  padding: 3px 10px;
  border-radius: 100px;
  background: rgba(248,113,113,0.1);
  border: 1px solid rgba(248,113,113,0.2);
  color: var(--danger);
  font-size: 0.74rem;
  font-family: var(--mono);
}

/* PILL / TAG */
.pill {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 3px 10px;
  border-radius: 100px;
  font-size: 0.74rem;
  font-family: var(--mono);
}
.pill-blue { background: var(--accent-dim); color: var(--accent); border: 1px solid rgba(56,189,248,0.2); }
.pill-green { background: rgba(52,211,153,0.1); color: var(--accent3); border: 1px solid rgba(52,211,153,0.2); }
.pill-red { background: rgba(248,113,113,0.1); color: var(--danger); border: 1px solid rgba(248,113,113,0.2); }
.pill-yellow { background: rgba(251,191,36,0.1); color: var(--warning); border: 1px solid rgba(251,191,36,0.2); }
.pill-purple { background: rgba(129,140,248,0.1); color: var(--accent2); border: 1px solid rgba(129,140,248,0.2); }

/* PROFILE / DASHBOARD */
.profile-header {
  background: linear-gradient(135deg, var(--surface2), var(--surface3));
  border: 1px solid var(--border);
  border-radius: var(--r-lg);
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
  position: relative;
  overflow: hidden;
}
.profile-header::before {
  content: '';
  position: absolute;
  top: -40px; right: -40px;
  width: 200px; height: 200px;
  background: radial-gradient(circle, rgba(56,189,248,0.08), transparent 70%);
  pointer-events: none;
}
.avatar {
  width: 64px; height: 64px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent), var(--accent2)); /* overridden by JS */
  display: flex; align-items: center; justify-content: center;
  font-family: var(--display);
  font-size: 1.6rem;
  font-weight: 800;
  color: #000;
  flex-shrink: 0;
  box-shadow: var(--glow);
  transition: background 0.3s;
}
.profile-info h2 {
  font-family: var(--display);
  font-size: 1.4rem;
  font-weight: 800;
  margin-bottom: 4px;
}
.profile-info p { font-size: 0.82rem; color: var(--text-dim); font-family: var(--mono); }

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}
.stat-card {
  background: var(--surface2);
  border: 1px solid var(--border);
  border-radius: var(--r);
  padding: 1.25rem;
  text-align: center;
}
.stat-card .big {
  font-family: var(--mono);
  font-size: 2rem;
  font-weight: 700;
  color: var(--accent);
  display: block;
  margin-bottom: 4px;
}
.stat-card .lbl { font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.06em; }

.xp-track {
  background: var(--surface3);
  border-radius: 100px;
  height: 6px;
  overflow: hidden;
  margin-top: 0.5rem;
}
.xp-fill {
  height: 100%;
  border-radius: 100px;
  background: linear-gradient(90deg, var(--accent), var(--accent2));
  transition: width 0.8s cubic-bezier(0.16,1,0.3,1);
}

/* SURVEY CHARTS */
.chart-row {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.875rem;
}
.chart-row-label {
  min-width: 175px;
  font-size: 0.8rem;
  color: var(--text-dim);
  text-align: right;
}
.chart-track {
  flex: 1;
  height: 7px;
  background: var(--surface3);
  border-radius: 4px;
  overflow: hidden;
}
.chart-fill {
  height: 100%;
  border-radius: 4px;
  transition: width 0.9s cubic-bezier(0.16,1,0.3,1);
  width: 0;
}
.cf-blue { background: linear-gradient(90deg, var(--accent), var(--accent2)); }
.cf-green { background: linear-gradient(90deg, var(--accent3), #059669); }
.cf-yellow { background: linear-gradient(90deg, var(--warning), #d97706); }
.cf-red { background: linear-gradient(90deg, var(--danger), #dc2626); }
.chart-val { min-width: 32px; font-family: var(--mono); font-size: 0.76rem; color: var(--text-muted); }

.insight-box {
  background: var(--surface2);
  border: 1px solid var(--border);
  border-radius: var(--r);
  padding: 1.25rem;
}
.insight-box .ib-top {
  display: flex; align-items: center; gap: 10px; margin-bottom: 0.75rem;
}
.ib-icon {
  width: 34px; height: 34px;
  border-radius: var(--r-sm);
  display: flex; align-items: center; justify-content: center;
  font-size: 1rem;
}
.ib-blue { background: var(--accent-dim); }
.ib-green { background: rgba(52,211,153,0.1); }
.ib-orange { background: rgba(249,115,22,0.1); }
.ib-purple { background: rgba(129,140,248,0.1); }
.insight-box h4 { font-family: var(--mono); font-size: 0.8rem; color: var(--text-dim); }
.insight-box .pct { font-family: var(--mono); font-size: 1.6rem; color: var(--accent); font-weight: 700; }
.insight-box p { font-size: 0.8rem; color: var(--text-muted); line-height: 1.5; }

/* RESULTS */
.results-wrap { max-width: 660px; margin: 0 auto; padding: 3rem 2rem; text-align: center; }
.score-ring {
  width: 160px; height: 160px;
  border-radius: 50%;
  border: 3px solid var(--accent);
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  margin: 0 auto 2rem;
  background: radial-gradient(circle, rgba(56,189,248,0.06), transparent);
  box-shadow: var(--glow-lg);
}
.score-ring .big { font-family: var(--mono); font-size: 2.5rem; color: var(--accent); line-height: 1; }
.score-ring .sm { font-size: 0.72rem; color: var(--text-muted); font-family: var(--mono); }

/* TOAST */
.toast {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  padding: 10px 18px;
  background: var(--surface2);
  border: 1px solid var(--accent3);
  border-radius: var(--r-sm);
  font-family: var(--mono);
  font-size: 0.85rem;
  color: var(--accent3);
  z-index: 999;
  opacity: 0;
  transform: translateY(8px);
  transition: all 0.25s;
  pointer-events: none;
}
.toast.show { opacity: 1; transform: translateY(0); }
.toast.error { border-color: var(--danger); color: var(--danger); }

/* SPINNER */
.spinner {
  display: inline-block;
  width: 16px; height: 16px;
  border: 2px solid rgba(0,0,0,0.2);
  border-top-color: #000;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
  vertical-align: middle;
}
@keyframes spin { to { transform: rotate(360deg); } }

/* ANIMATIONS */
.fade-in { animation: fadeIn 0.4s ease forwards; }
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
}
.stagger > * { animation: fadeIn 0.4s ease forwards; opacity: 0; }
.stagger > *:nth-child(1) { animation-delay: 0.04s; }
.stagger > *:nth-child(2) { animation-delay: 0.1s; }
.stagger > *:nth-child(3) { animation-delay: 0.16s; }
.stagger > *:nth-child(4) { animation-delay: 0.22s; }
.stagger > *:nth-child(5) { animation-delay: 0.28s; }
.stagger > *:nth-child(6) { animation-delay: 0.34s; }
.stagger > *:nth-child(7) { animation-delay: 0.40s; }
.stagger > *:nth-child(8) { animation-delay: 0.46s; }

/* ABOUT */
.about-hero { max-width: 680px; margin: 0 auto; padding: 4rem 2rem 2rem; text-align: center; }
.ref-list { list-style: none; counter-reset: ref; }
.ref-list li {
  counter-increment: ref;
  padding: 0.6rem 0;
  border-bottom: 1px solid var(--border);
  font-size: 0.82rem;
  color: var(--text-dim);
  line-height: 1.6;
  display: flex;
  gap: 10px;
}
.ref-list li::before {
  content: '[' counter(ref) ']';
  font-family: var(--mono);
  color: var(--accent);
  font-size: 0.72rem;
  flex-shrink: 0;
  margin-top: 2px;
  min-width: 28px;
}

/* LEADERBOARD */
.lb-row {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.875rem 1rem;
  border-radius: var(--r-sm);
  background: var(--surface2);
  border: 1px solid var(--border);
  margin-bottom: 0.5rem;
  transition: border-color 0.18s;
}
.lb-row:hover { border-color: var(--border2); }
.lb-row.me { border-color: rgba(56,189,248,0.3); background: var(--accent-dim); }
.lb-rank { font-family: var(--mono); font-size: 1rem; min-width: 28px; color: var(--text-muted); }
.lb-rank.gold { color: #fbbf24; }
.lb-rank.silver { color: #94a3b8; }
.lb-rank.bronze { color: #b45309; }
.lb-name { flex: 1; font-weight: 500; font-size: 0.9rem; }
.lb-level { font-size: 0.75rem; color: var(--text-muted); }
.lb-pts { font-family: var(--mono); font-size: 0.9rem; color: var(--accent); }

/* RESPONSIVE */
@media (max-width: 768px) {
  .nav-links { display: none; }
  .grid-3, .grid-2 { grid-template-columns: 1fr; }
  .profile-header { flex-direction: column; text-align: center; }
  .chart-row-label { min-width: 120px; font-size: 0.74rem; }
  .stat-row { gap: 1.25rem; }
  .about-grid { grid-template-columns: 1fr; }
}

/* GUIDED FLOW PROGRESS TRACKER */
.flow-step {
  display: flex;
  align-items: center;
  gap: 0;
}
.flow-node {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 10px 20px;
  border-radius: var(--r);
  transition: all 0.3s;
  cursor: default;
}
.flow-node.done { background: rgba(52,211,153,0.1); border: 1px solid rgba(52,211,153,0.3); }
.flow-node.active { background: var(--accent-dim); border: 1px solid rgba(56,189,248,0.4); box-shadow: var(--glow); }
.flow-node.locked { background: var(--surface2); border: 1px solid var(--border); opacity: 0.5; }
.flow-node .fn-icon { font-size: 1.25rem; }
.flow-node .fn-label { font-family: var(--mono); font-size: 0.65rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.06em; white-space: nowrap; }
.flow-node.done .fn-label { color: var(--accent3); }
.flow-node.active .fn-label { color: var(--accent); }
.flow-connector {
  width: 32px;
  height: 2px;
  background: var(--border);
  flex-shrink: 0;
}
.flow-connector.done { background: var(--accent3); }

/* STREAK BADGE */
.streak-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 14px;
  background: rgba(251,191,36,0.1);
  border: 1px solid rgba(251,191,36,0.25);
  border-radius: 100px;
  font-family: var(--mono);
  font-size: 0.78rem;
  color: var(--warning);
  margin-bottom: 0.75rem;
}

/* ANSWER ANIMATIONS */
@keyframes correctPulse {
  0% { box-shadow: 0 0 0 0 rgba(52,211,153,0.5); }
  50% { box-shadow: 0 0 0 16px rgba(52,211,153,0); }
  100% { box-shadow: 0 0 0 0 rgba(52,211,153,0); }
}
@keyframes wrongShake {
  0%,100% { transform: translateX(0); }
  15% { transform: translateX(-8px); }
  30% { transform: translateX(8px); }
  45% { transform: translateX(-6px); }
  60% { transform: translateX(6px); }
  75% { transform: translateX(-3px); }
  90% { transform: translateX(3px); }
}
@keyframes flashGreen {
  0% { background: rgba(52,211,153,0); }
  30% { background: rgba(52,211,153,0.08); }
  100% { background: rgba(52,211,153,0); }
}
@keyframes flashRed {
  0% { background: rgba(248,113,113,0); }
  30% { background: rgba(248,113,113,0.08); }
  100% { background: rgba(248,113,113,0); }
}
.choice.correct { animation: correctPulse 0.6s ease; }
.choice.wrong   { animation: wrongShake 0.5s ease; }
.flash-correct  { animation: flashGreen 0.7s ease; }
.flash-wrong    { animation: flashRed 0.7s ease; }

/* SCENARIO TIMER */
.scenario-timer {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  background: var(--surface2);
  border: 1px solid var(--border);
  border-radius: var(--r-sm);
  font-family: var(--mono);
  font-size: 0.9rem;
  transition: all 0.3s;
}
.scenario-timer.warning { border-color: var(--warning); color: var(--warning); background: rgba(251,191,36,0.08); }
.scenario-timer.danger  { border-color: var(--danger);  color: var(--danger);  background: rgba(248,113,113,0.08); animation: timerPulse 0.5s ease infinite; }
@keyframes timerPulse {
  0%,100% { opacity: 1; }
  50% { opacity: 0.6; }
}
.timer-bar {
  height: 3px;
  border-radius: 2px;
  background: var(--accent3);
  transition: width 1s linear, background 0.3s;
  width: 100%;
}
.timer-bar.warning { background: var(--warning); }
.timer-bar.danger  { background: var(--danger); }

/* REALISTIC EMAIL UI */
.email-client {
  background: #1a1a2e;
  border: 1px solid var(--border);
  border-radius: var(--r);
  overflow: hidden;
  margin-bottom: 1.5rem;
  font-family: var(--mono);
}
.email-toolbar {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  background: #0f0f23;
  border-bottom: 1px solid rgba(255,255,255,0.06);
}
.email-dot { width: 10px; height: 10px; border-radius: 50%; }
.email-toolbar-label { margin-left: 8px; font-size: 0.72rem; color: var(--text-muted); flex: 1; text-align: center; }
.email-sidebar {
  display: flex;
  border-bottom: 1px solid rgba(255,255,255,0.05);
}
.email-folder-list {
  width: 120px;
  padding: 12px 0;
  border-right: 1px solid rgba(255,255,255,0.05);
  flex-shrink: 0;
}
.email-folder {
  padding: 6px 14px;
  font-size: 0.72rem;
  color: var(--text-muted);
  cursor: default;
}
.email-folder.active { color: var(--accent); background: var(--accent-dim); }
.email-preview-pane { flex: 1; padding: 10px 14px; }
.email-preview-item {
  padding: 8px 10px;
  border-radius: 6px;
  margin-bottom: 4px;
  cursor: default;
  border-left: 3px solid transparent;
}
.email-preview-item.unread { background: rgba(56,189,248,0.06); border-left-color: var(--accent); }
.email-preview-item .ep-from { font-size: 0.72rem; color: var(--text-dim); margin-bottom: 2px; }
.email-preview-item .ep-subj { font-size: 0.75rem; font-weight: 600; color: var(--text); }
.email-preview-item .ep-time { font-size: 0.68rem; color: var(--text-muted); float: right; }
.email-body-pane {
  padding: 1.25rem 1.5rem;
  border-top: 1px solid rgba(255,255,255,0.05);
}
.email-header-row { display: flex; align-items: flex-start; gap: 12px; margin-bottom: 1rem; }
.email-avatar-sm {
  width: 36px; height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ef4444, #dc2626);
  display: flex; align-items: center; justify-content: center;
  font-size: 0.85rem; font-weight: 700; color: white; flex-shrink: 0;
}
.email-meta { flex: 1; }
.email-from-name { font-size: 0.85rem; font-weight: 700; color: var(--text); }
.email-from-addr { font-size: 0.72rem; color: var(--danger); margin-top: 2px; }
.email-from-addr.legit { color: var(--accent3); }
.email-timestamp { font-size: 0.7rem; color: var(--text-muted); }
.email-subject-line { font-size: 1rem; font-weight: 700; color: var(--text); margin-bottom: 1rem; }
.email-body-text {
  font-size: 0.84rem;
  line-height: 1.85;
  color: var(--text-dim);
  white-space: pre-line;
}
.email-link {
  color: var(--danger);
  text-decoration: underline;
  cursor: help;
  position: relative;
}
.email-urgent-badge {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 2px 8px;
  background: rgba(248,113,113,0.15);
  border: 1px solid rgba(248,113,113,0.3);
  border-radius: 4px;
  font-size: 0.7rem;
  color: var(--danger);
  margin-left: 8px;
  vertical-align: middle;
}

/* SMS bubble UI */
.sms-client {
  background: #1c1c1e;
  border: 1px solid var(--border);
  border-radius: var(--r);
  overflow: hidden;
  margin-bottom: 1.5rem;
}
.sms-header {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  background: #2c2c2e;
  border-bottom: 1px solid rgba(255,255,255,0.08);
}
.sms-avatar {
  width: 36px; height: 36px;
  border-radius: 50%;
  background: #3a3a3c;
  display: flex; align-items: center; justify-content: center;
  font-size: 1rem;
}
.sms-contact { font-size: 0.88rem; font-weight: 600; }
.sms-number  { font-size: 0.72rem; color: var(--text-muted); }
.sms-body { padding: 1rem; min-height: 120px; }
.sms-bubble {
  max-width: 80%;
  padding: 10px 14px;
  background: #2c2c2e;
  border-radius: 18px 18px 18px 4px;
  font-size: 0.88rem;
  line-height: 1.6;
  color: var(--text);
  white-space: pre-line;
  margin-bottom: 4px;
}
.sms-time { font-size: 0.68rem; color: var(--text-muted); padding-left: 4px; }

/* Phone call UI */
.call-client {
  background: linear-gradient(180deg, #1a1a2e, #0f0f23);
  border: 1px solid var(--border);
  border-radius: var(--r);
  overflow: hidden;
  margin-bottom: 1.5rem;
  text-align: center;
  padding: 2rem 1.5rem;
}
.call-avatar-lg {
  width: 80px; height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent), var(--accent2));
  display: flex; align-items: center; justify-content: center;
  font-size: 2rem;
  margin: 0 auto 1rem;
  box-shadow: 0 0 30px rgba(56,189,248,0.3);
  animation: callPulse 2s ease-in-out infinite;
}
@keyframes callPulse {
  0%,100% { box-shadow: 0 0 20px rgba(56,189,248,0.2); }
  50% { box-shadow: 0 0 40px rgba(56,189,248,0.5); }
}
.call-name { font-family: var(--display); font-size: 1.25rem; font-weight: 700; margin-bottom: 4px; }
.call-number { font-family: var(--mono); font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.5rem; }
.call-status { font-size: 0.78rem; color: var(--accent3); margin-bottom: 1.25rem; font-family: var(--mono); }
.call-transcript {
  background: rgba(255,255,255,0.04);
  border-radius: var(--r-sm);
  padding: 1rem;
  text-align: left;
  font-size: 0.84rem;
  color: var(--text-dim);
  line-height: 1.8;
  font-family: var(--mono);
  white-space: pre-line;
}

/* SPOT THE RED FLAG MODE */
.red-flag-target {
  display: inline;
  cursor: pointer;
  border-radius: 3px;
  padding: 1px 2px;
  transition: background 0.2s;
  position: relative;
}
.red-flag-target:hover { background: rgba(251,191,36,0.15); outline: 1px dashed rgba(251,191,36,0.4); }
.red-flag-target.found { background: rgba(248,113,113,0.2); outline: 2px solid var(--danger); animation: foundFlag 0.4s ease; }
.red-flag-target.missed { background: rgba(248,113,113,0.1); outline: 1px dashed var(--danger); }
@keyframes foundFlag {
  0% { transform: scale(1); }
  40% { transform: scale(1.05); }
  100% { transform: scale(1); }
}
.flag-count-bar {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 14px;
  background: var(--surface2);
  border: 1px solid var(--border);
  border-radius: var(--r-sm);
  margin-bottom: 1rem;
  font-family: var(--mono);
  font-size: 0.78rem;
}
.flag-dots { display: flex; gap: 6px; }
.flag-dot {
  width: 10px; height: 10px;
  border-radius: 50%;
  border: 2px solid var(--border2);
  transition: all 0.3s;
}
.flag-dot.found { background: var(--danger); border-color: var(--danger); transform: scale(1.2); }

/* AVATAR SELECTOR */
.avatar-picker { display: flex; gap: 10px; flex-wrap: wrap; margin: 1rem 0; }
.avatar-opt {
  width: 44px; height: 44px;
  border-radius: 50%;
  cursor: pointer;
  border: 3px solid transparent;
  transition: all 0.2s;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.2rem;
}
.avatar-opt:hover { transform: scale(1.1); }
.avatar-opt.selected { border-color: var(--accent); box-shadow: 0 0 12px rgba(56,189,248,0.4); }

/* CERTIFICATE */
#cert-modal { display: none; }
#cert-modal.show { display: flex !important; }

/* Password confirm match indicator */
.form-input { transition: border-color 0.2s; }

/* Login security panel attempt counter */
#attempts-remaining { font-weight: 600; color: var(--accent3); }
