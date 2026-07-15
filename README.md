<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><path d='M16 2L4 7v9c0 8 5.5 14.5 12 15.5C22.5 30.5 28 24 28 16V7L16 2z' fill='%231e3a5f' stroke='%2338bdf8' stroke-width='1.5'/><text x='16' y='22' text-anchor='middle' font-size='13' fill='%2338bdf8' font-family='Arial' font-weight='bold'>S</text></svg>"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <!-- CSP is implemented in app.js via input sanitization and escapeHtml().
       A server-side CSP header would be added in a production deployment. -->
  <title>ShieldSense - Social Engineering Awareness</title>
  <link rel="stylesheet" href="css/style.css" />
</head>
<body>

<!-- TOAST -->
<div class="toast" id="toast"></div>

<!-- NAV -->
<nav class="nav">
  <div class="nav-logo">
    <div class="logo-icon">🛡</div>
    ShieldSense
  </div>
  <ul class="nav-links" id="nav-links" style="display:none">
    <li><a href="#" data-page="home"       >🏠 Home</a></li>
    <li><a href="#" data-page="scenarios"  >🎯 Training</a></li>
    <li><a href="#" data-page="evaluation" >🧪 Evaluation</a></li>
    <li><a href="#" data-page="profile"    >👤 Profile</a></li>
    <li><a href="#" data-page="leaderboard">🏆 Leaderboard</a></li>
    <li><a href="#" data-page="security"   >🔐 Security</a></li>
    <li><a href="#" data-page="testing"    >🧪 Testing</a></li>
    <li><a href="#" data-page="settings"   >⚙ Settings</a></li>
    <li><a href="#" data-page="about"      >ℹ About</a></li>
  </ul>
  <div class="nav-right" id="nav-user"></div>
</nav>

<main class="main">

<!-- AUTH PAGE -->
<div id="page-auth" class="page">
  <div class="auth-wrap">
    <div class="auth-card">

      <div class="auth-logo">
        <div class="shield">🛡</div>
        <h1>ShieldSense</h1>
        <p>Social Engineering Awareness Platform</p>
      </div>

      <!-- Tabs -->
      <div class="auth-tabs">
        <button class="auth-tab active" data-tab="login">Sign In</button>
        <button class="auth-tab" data-tab="signup">Create Account</button>
      </div>

      <!-- LOGIN FORM -->
      <form class="auth-form" id="form-login">
        <div class="form-group">
          <label class="form-label" for="li-username">Username</label>
          <input class="form-input" id="li-username" type="text"
            placeholder="your username" autocomplete="username"
            maxlength="30" required />
        </div>
        <div class="form-group">
          <label class="form-label" for="li-password">Password</label>
          <div class="password-wrap">
            <input class="form-input" id="li-password" type="password"
              placeholder="••••••••" autocomplete="current-password" required />
            <button type="button" class="pw-toggle" id="li-pw-toggle">👁</button>
          </div>
        </div>
        <div class="form-error" id="login-error"></div>
        <button class="btn-auth" id="login-btn" type="submit">Sign In</button>

        <div class="security-note">
          <span class="icon">🔒</span>
          <span>Your password is secure and never stored in plaintext.</span>
        </div>

        <div id="login-security-panel" style="margin-top:1rem;padding:0.875rem;background:rgba(56,189,248,0.04);border:1px solid rgba(56,189,248,0.12);border-radius:8px">
          <div style="font-family:var(--mono);font-size:0.68rem;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.06em;margin-bottom:0.625rem">Security status</div>
          <div style="display:flex;flex-direction:column;gap:6px">
            <div style="display:flex;align-items:center;gap:8px;font-size:0.76rem">
              <span style="color:var(--accent3)">&#10003;</span>
              <span style="color:var(--text-dim)">PBKDF2-SHA256 with 310,000 iterations</span>
            </div>
            <div style="display:flex;align-items:center;gap:8px;font-size:0.76rem">
              <span style="color:var(--accent3)">&#10003;</span>
              <span style="color:var(--text-dim)">Unique random salt per account</span>
            </div>
            <div style="display:flex;align-items:center;gap:8px;font-size:0.76rem">
              <span style="color:var(--accent3)">&#10003;</span>
              <span style="color:var(--text-dim)">Timing-safe authentication</span>
            </div>
            <div style="display:flex;align-items:center;gap:8px;font-size:0.76rem" id="attempt-indicator">
              <span style="color:var(--accent3)">&#10003;</span>
              <span style="color:var(--text-dim)">Rate limited: <span id="attempts-remaining">5</span> attempts remaining</span>
            </div>
          </div>
        </div>
      </form>

      <!-- SIGNUP FORM -->
      <form class="auth-form" id="form-signup" style="display:none">
        <div class="form-group">
          <label class="form-label" for="su-username">Username</label>
          <input class="form-input" id="su-username" type="text"
            placeholder="choose a username" autocomplete="username"
            maxlength="30" required />
          <div class="form-error" id="su-username-err"></div>
        </div>
        <div class="form-group">
          <label class="form-label" for="su-university">University Name</label>
          <input class="form-input" id="su-university" type="text"
            placeholder="e.g. Middlesex University Dubai"
            autocomplete="organization" maxlength="80" />
          <div class="form-error" id="su-university-err"></div>
        </div>
        <div class="form-group">
          <label class="form-label" for="su-password">Password</label>
          <div class="password-wrap">
            <input class="form-input" id="su-password" type="password"
              placeholder="min 8 chars, 1 uppercase, 1 number"
              autocomplete="new-password" required />
            <button type="button" class="pw-toggle" id="su-pw-toggle">👁</button>
          </div>
          <div class="pw-strength" id="pw-strength-bars">
            <div class="pw-bar"></div>
            <div class="pw-bar"></div>
            <div class="pw-bar"></div>
            <div class="pw-bar"></div>
            <div class="pw-bar"></div>
          </div>
          <div class="pw-label" id="pw-strength-label"></div>
        </div>
        <div class="form-group">
          <label class="form-label" for="su-confirm">Confirm Password</label>
          <div class="password-wrap">
            <input class="form-input" id="su-confirm" type="password"
              placeholder="repeat your password"
              autocomplete="new-password" required />
            <button type="button" class="pw-toggle" id="su-confirm-toggle">👁</button>
          </div>
        </div>
        <div class="form-error" id="signup-error"></div>
        <button class="btn-auth" id="signup-btn" type="submit">Create Account</button>

        <div class="security-note">
          <span class="icon">🔒</span>
          <span>Your password is secure and never stored in plaintext.</span>
        </div>

      </form>

    </div>
  </div>
</div>


<!-- HOME PAGE -->
<div id="page-home" class="page">
  <div class="hero fade-in">
    <div id="home-streak"></div>
    <div class="hero-badge">🛡 UAE University Cybersecurity Awareness</div>
    <h1>Don't Get <em>Social Engineered.</em><br/>Get Prepared.</h1>
    <p>Train against realistic social engineering attacks through interactive scenarios, built on survey data from 102 UAE university students.</p>

    <!-- Personal stats banner -->
    <div style="display:inline-flex;align-items:center;gap:1.5rem;padding:12px 24px;background:var(--surface2);border:1px solid var(--border);border-radius:var(--r);margin-bottom:2.5rem;flex-wrap:wrap;justify-content:center">
      <span style="font-size:0.82rem;color:var(--text-muted)">Welcome back,</span>
      <strong id="home-username" style="font-family:var(--display);color:var(--accent)"></strong>
      <span style="color:var(--border)">·</span>
      <span id="home-level" style="font-family:var(--mono);font-size:0.85rem"></span>
      <span style="color:var(--border)">·</span>
      <span style="font-family:var(--mono);font-size:0.85rem;color:var(--accent3)"><span id="home-score"></span> pts</span>
      <span style="color:var(--border)">·</span>
      <span style="font-family:var(--mono);font-size:0.82rem;color:var(--text-muted)"><span id="home-done"></span> scenarios</span>
    </div>

    <div class="stat-row">
      <div class="stat-item"><span class="n">102</span><span class="l">Students Surveyed</span></div>
      <div class="stat-item"><span class="n">65%</span><span class="l">Low prior awareness</span></div>
      <div class="stat-item"><span class="n">8</span><span class="l">Real-World Scenarios</span></div>
      <div class="stat-item"><span class="n">75%</span><span class="l">Prefer interactive training</span></div>
    </div>

    <!-- Guided progress tracker -->
    <div id="progress-tracker" style="display:flex;align-items:center;justify-content:center;gap:0;margin-bottom:2rem;flex-wrap:wrap"></div>

    <div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap">
      <button class="btn btn-primary btn-lg" id="home-main-btn" data-action="guided-start">🚀 Begin Assessment →</button>
    </div>
  </div>

  <!-- Attack Types -->
  <div class="section" style="padding-top:0">
    <div class="section-header">
      <div>
        <span class="section-label">What You'll Learn</span>
        <div class="section-title">Attack Types Covered</div>
      </div>
    </div>
    <div class="grid grid-3 stagger">
      <div class="card">
        <div style="font-size:2rem;margin-bottom:0.75rem">📧</div>
        <div style="font-family:var(--display);font-weight:700;color:var(--danger);margin-bottom:0.5rem">Phishing</div>
        <p style="font-size:0.84rem;color:var(--text-dim);line-height:1.6">Fraudulent emails disguised as trusted senders to steal credentials or direct victims to malicious sites.</p>
      </div>
      <div class="card">
        <div style="font-size:2rem;margin-bottom:0.75rem">📱</div>
        <div style="font-family:var(--display);font-weight:700;color:var(--warning);margin-bottom:0.5rem">Smishing</div>
        <p style="font-size:0.84rem;color:var(--text-dim);line-height:1.6">SMS-based phishing using fake prize alerts, delivery notices, or urgent bank warnings with suspicious links.</p>
      </div>
      <div class="card">
        <div style="font-size:2rem;margin-bottom:0.75rem">📞</div>
        <div style="font-family:var(--display);font-weight:700;color:var(--accent2);margin-bottom:0.5rem">Vishing</div>
        <p style="font-size:0.84rem;color:var(--text-dim);line-height:1.6">Voice phishing calls impersonating banks, IT departments, or government bodies using spoofed caller IDs.</p>
      </div>
      <div class="card">
        <div style="font-size:2rem;margin-bottom:0.75rem">🎭</div>
        <div style="font-family:var(--display);font-weight:700;color:var(--accent);margin-bottom:0.5rem">Pretexting</div>
        <p style="font-size:0.84rem;color:var(--text-dim);line-height:1.6">Fabricating a believable scenario — like an IT emergency — to pressure victims into sharing sensitive information.</p>
      </div>
      <div class="card">
        <div style="font-size:2rem;margin-bottom:0.75rem">💾</div>
        <div style="font-family:var(--display);font-weight:700;color:#f97316;margin-bottom:0.5rem">Baiting</div>
        <p style="font-size:0.84rem;color:var(--text-dim);line-height:1.6">Leaving infected USB drives or enticing offers in public places to tempt victims into compromising their devices.</p>
      </div>
      <div class="card">
        <div style="font-size:2rem;margin-bottom:0.75rem">📲</div>
        <div style="font-family:var(--display);font-weight:700;color:#a3e635;margin-bottom:0.5rem">QR Phishing</div>
        <p style="font-size:0.84rem;color:var(--text-dim);line-height:1.6">Fake QR codes on printed posters or emails that redirect to credential-stealing websites — the destination is hidden.</p>
      </div>
    </div>
  </div>
</div>


<!-- SCENARIOS PAGE -->
<div id="page-scenarios" class="page">
  <div class="section">
    <div class="section-header">
      <div>
        <span class="section-label">Training Modules</span>
        <div class="section-title">Choose a Scenario</div>
      </div>
    </div>
    <div style="display:flex;gap:0.5rem;flex-wrap:wrap;margin-bottom:2rem">
      <span class="pill pill-red">📧 Phishing</span>
      <span class="pill pill-yellow">📱 Smishing</span>
      <span class="pill pill-blue">📞 Vishing</span>
      <span class="pill pill-purple">🎭 Pretexting</span>
      <span class="pill pill-yellow">💾 Baiting</span>
      <span class="pill pill-green">📲 QR Phishing</span>
    </div>
    <div id="scenarios-grid"></div>
  </div>
</div>


<!-- GAME PAGE -->
<div id="page-game" class="page">
  <div id="game-container"></div>
</div>


<!-- SURVEY DASHBOARD -->
<div id="page-dashboard" class="page">
  <div class="section">
    <div class="section-header">
      <div>
        <span class="section-label">Primary Research · n=102 · Feb 2026</span>
        <div class="section-title">Survey Results & Analysis</div>
      </div>
      <span class="pill pill-blue">UAE University Students</span>
    </div>

    <p style="color:var(--text-dim);font-size:0.88rem;max-width:640px;line-height:1.7;margin-bottom:2.5rem">
      Anonymous survey distributed to 102 university students across the UAE. Results directly informed the design of this platform's scenarios, difficulty levels, and game features.
    </p>

    <!-- Key Insights -->
    <div class="grid grid-4" style="margin-bottom:2.5rem">
      <div class="insight-box">
        <div class="ib-top"><div class="ib-icon ib-orange">⚠️</div><h4>Low Awareness</h4></div>
        <div class="pct">65%</div>
        <p>had little to no awareness of the term "social engineering" before the survey</p>
      </div>
      <div class="insight-box">
        <div class="ib-top"><div class="ib-icon ib-purple">😰</div><h4>Low Confidence</h4></div>
        <div class="pct">44%</div>
        <p>felt slightly or not at all confident in identifying a real social engineering attack</p>
      </div>
      <div class="insight-box">
        <div class="ib-top"><div class="ib-icon ib-blue">📬</div><h4>High Exposure</h4></div>
        <div class="pct">75%</div>
        <p>encounter suspicious emails, messages, or calls occasionally or very often</p>
      </div>
      <div class="insight-box">
        <div class="ib-top"><div class="ib-icon ib-green">🎮</div><h4>Games Preferred</h4></div>
        <div class="pct">75%</div>
        <p>selected interactive games as their preferred form of cybersecurity awareness training</p>
      </div>
    </div>

    <!-- Charts -->
    <div class="grid grid-2" style="margin-bottom:2rem">

      <div class="card">
        <span class="section-label">Familiarity with Social Engineering</span>
        <div style="font-weight:600;margin-bottom:1.25rem">Prior Awareness Level</div>
        <div id="chart-familiarity"></div>
        <p style="font-size:0.76rem;color:var(--text-muted);margin-top:1rem">💡 65% had no or vague awareness — confirming the need for targeted student training.</p>
      </div>

      <div class="card">
        <span class="section-label">Confidence in Identifying Attacks</span>
        <div style="font-weight:600;margin-bottom:1.25rem">Self-Reported Detection Confidence</div>
        <div id="chart-confidence"></div>
        <p style="font-size:0.76rem;color:var(--text-muted);margin-top:1rem">💡 Only 10% felt "very confident" — a clear gap between exposure and detection skill.</p>
      </div>

      <div class="card">
        <span class="section-label">Most Difficult Areas to Identify</span>
        <div style="font-weight:600;margin-bottom:1.25rem">Where Students Struggle Most</div>
        <div id="chart-difficult"></div>
        <p style="font-size:0.76rem;color:var(--text-muted);margin-top:1rem">💡 Fake websites, protecting personal info, and phishing are top difficulties — prioritised in platform scenarios.</p>
      </div>

      <div class="card">
        <span class="section-label">Preferred Training Format</span>
        <div style="font-weight:600;margin-bottom:1.25rem">How Students Want to Learn</div>
        <div id="chart-training"></div>
        <p style="font-size:0.76rem;color:var(--text-muted);margin-top:1rem">💡 Interactive games selected by 76 respondents — the highest of all formats, validating this platform's approach.</p>
      </div>

      <div class="card">
        <span class="section-label">Belief in Interactive Training Effectiveness</span>
        <div style="font-weight:600;margin-bottom:1.25rem">Perceived Effectiveness of Gamification</div>
        <div id="chart-effectiveness"></div>
        <p style="font-size:0.76rem;color:var(--text-muted);margin-top:1rem">💡 89% believed interactive/game-based training would be somewhat or very effective.</p>
      </div>

      <div class="card">
        <span class="section-label">Most Helpful Game Features</span>
        <div style="font-weight:600;margin-bottom:1.25rem">Requested Platform Features</div>
        <div id="chart-features"></div>
        <p style="font-size:0.76rem;color:var(--text-muted);margin-top:1rem">💡 All four features requested are implemented in this platform based directly on this survey data.</p>
      </div>

      <div class="card">
        <span class="section-label">Frequency of Suspicious Encounters</span>
        <div style="font-weight:600;margin-bottom:1.25rem">How Often Students See Suspicious Content</div>
        <div id="chart-encounters"></div>
        <p style="font-size:0.76rem;color:var(--text-muted);margin-top:1rem">💡 75% encounter suspicious content at least occasionally — high exposure with low detection confidence is a dangerous combination.</p>
      </div>

      <div class="card">
        <span class="section-label">Demographics</span>
        <div style="font-weight:600;margin-bottom:1.25rem">Participant Background</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem">
          <div>
            <p style="font-family:var(--mono);font-size:0.7rem;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:0.875rem">Age Groups</p>
            <div class="chart-row"><div class="chart-row-label">18–24</div><div class="chart-track"><div class="chart-fill cf-green" data-w="93" style="width:0"></div></div><div class="chart-val">95</div></div>
            <div class="chart-row"><div class="chart-row-label">25–34</div><div class="chart-track"><div class="chart-fill cf-yellow" data-w="6" style="width:0"></div></div><div class="chart-val">6</div></div>
            <div class="chart-row"><div class="chart-row-label">45+</div><div class="chart-track"><div class="chart-fill cf-red" data-w="1" style="width:0"></div></div><div class="chart-val">1</div></div>
          </div>
          <div>
            <p style="font-family:var(--mono);font-size:0.7rem;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:0.875rem">Top Fields of Study</p>
            <div class="chart-row"><div class="chart-row-label">Psychology</div><div class="chart-track"><div class="chart-fill cf-blue" data-w="10" style="width:0"></div></div><div class="chart-val">10</div></div>
            <div class="chart-row"><div class="chart-row-label">Accounting</div><div class="chart-track"><div class="chart-fill cf-blue" data-w="8" style="width:0"></div></div><div class="chart-val">8</div></div>
            <div class="chart-row"><div class="chart-row-label">Law</div><div class="chart-track"><div class="chart-fill cf-blue" data-w="6" style="width:0"></div></div><div class="chart-val">6</div></div>
            <div class="chart-row"><div class="chart-row-label">IT</div><div class="chart-track"><div class="chart-fill cf-green" data-w="5" style="width:0"></div></div><div class="chart-val">5</div></div>
            <div class="chart-row"><div class="chart-row-label">Comp. Science</div><div class="chart-track"><div class="chart-fill cf-green" data-w="4" style="width:0"></div></div><div class="chart-val">4</div></div>
          </div>
        </div>
        <p style="font-size:0.76rem;color:var(--text-muted);margin-top:1.25rem">💡 93% aged 18–24. Most from non-technical backgrounds — confirming social engineering awareness is not limited to STEM students.</p>
      </div>

    </div>
  </div>
</div>


<!-- PROFILE PAGE -->
<div id="page-profile" class="page">
  <div id="profile-container"></div>
</div>


<!-- LEADERBOARD PAGE -->
<div id="page-leaderboard" class="page">
  <div id="leaderboard-container"></div>
</div>


<!-- ABOUT PAGE -->
<div id="page-about" class="page">
  <div class="about-hero fade-in">
    <span class="section-label">About This Project</span>
    <div style="font-family:var(--display);font-size:2.2rem;font-weight:800;margin-bottom:1rem">ShieldSense Platform</div>
    <p style="color:var(--text-dim);line-height:1.7">
      A gamified web-based social engineering awareness training platform developed for CST3590 Individual Project at Middlesex University Dubai, built on primary research from 102 UAE university students.
    </p>
  </div>

  <div class="section" style="padding-top:0">
    <div class="grid grid-2 stagger" style="margin-bottom:2rem">

      <div class="card">
        <span class="section-label">Student Researcher</span>
        <div style="font-family:var(--display);font-size:1.1rem;font-weight:700;margin-bottom:0.5rem">Reem Mohammed Muhassin</div>
        <p style="font-size:0.84rem;color:var(--text-dim);line-height:1.6">BSc Cybersecurity &amp; Digital Forensics · M00982216<br/>Middlesex University Dubai</p>
        <div style="margin-top:1rem;display:flex;gap:0.5rem;flex-wrap:wrap">
          <span class="pill pill-blue">CST3590</span>
          <span class="pill pill-purple">Individual Project</span>
        </div>
      </div>

      </div>

      <div class="card">
        <span class="section-label">Security Implementation</span>
        <div style="font-family:var(--display);font-size:1.1rem;font-weight:700;margin-bottom:0.875rem">How Passwords Are Protected</div>
        <ol style="font-size:0.83rem;color:var(--text-dim);line-height:2;padding-left:1.2rem">
          <li>Password entered by user (never stored in plaintext)</li>
          <li>Cryptographically random 16-byte salt generated per user</li>
          <li>PBKDF2 + SHA-256 applied with 310,000 iterations (OWASP 2023)</li>
          <li>256-bit derived key stored as hex in IndexedDB</li>
          <li>On login: same process re-run, hashes compared</li>
          <li>Session stored in sessionStorage (username only, expires on tab close)</li>
          <li>Rate limiting: max 5 login attempts per 15 minutes</li>
          <li>Anti-tamper: score validated against max on every login</li>
          <li>Content Security Policy blocks XSS via meta tag</li>
          <li>All user inputs sanitized before processing</li>
        </ol>
      </div>

      </div>

      </div>

      </div>

    </div>

  </div>
</div>

<!-- EVALUATION PAGE -->
<div id="page-evaluation" class="page">
  <div id="evaluation-container"></div>
</div>


<!-- SECURITY THREATS PAGE -->
<div id="page-security" class="page">
  <div id="security-container"></div>
</div>

<!-- TESTING MODULE PAGE -->
<div id="page-testing" class="page">
  <div id="testing-container"></div>
</div>

<!-- SETTINGS PAGE -->
<div id="page-settings" class="page">
  <div id="settings-container"></div>
</div>


<!-- Certificate Modal -->
<div id="cert-modal" style="display:none;position:fixed;inset:0;background:rgba(0,0,0,0.85);z-index:500;align-items:center;justify-content:center;padding:2rem">
  <div id="cert-inner" style="background:var(--surface);border:2px solid var(--accent);border-radius:20px;padding:3rem;max-width:600px;width:100%;text-align:center;position:relative;box-shadow:0 0 60px rgba(56,189,248,0.3)">
    <button onclick="document.getElementById('cert-modal').style.display='none'" style="position:absolute;top:16px;right:16px;background:transparent;border:none;color:var(--text-muted);font-size:1.2rem;cursor:pointer">✕</button>
    <div style="font-size:3rem;margin-bottom:1rem">🏆</div>
    <div style="font-family:var(--display);font-size:1.75rem;font-weight:800;color:var(--accent);margin-bottom:0.5rem">Certificate of Completion</div>
    <div style="font-size:0.85rem;color:var(--text-muted);font-family:var(--mono);margin-bottom:1.5rem">ShieldSense Social Engineering Awareness Training</div>
    <div style="border-top:1px solid var(--border);border-bottom:1px solid var(--border);padding:1.5rem 0;margin-bottom:1.5rem">
      <div style="font-size:0.8rem;color:var(--text-muted);margin-bottom:0.5rem">This certifies that</div>
      <div id="cert-name" style="font-family:var(--display);font-size:2rem;font-weight:800;color:var(--text);margin-bottom:0.5rem"></div>
      <div style="font-size:0.85rem;color:var(--text-dim)">has successfully completed all 8 social engineering awareness scenarios and the pre/post knowledge evaluation</div>
    </div>
    <div style="display:flex;justify-content:center;gap:2rem;margin-bottom:1.5rem;flex-wrap:wrap">
      <div><div id="cert-score" style="font-family:var(--mono);font-size:1.5rem;color:var(--accent);font-weight:700"></div><div style="font-size:0.72rem;color:var(--text-muted)">Final Score</div></div>
      <div><div id="cert-improvement" style="font-family:var(--mono);font-size:1.5rem;color:var(--accent3);font-weight:700"></div><div style="font-size:0.72rem;color:var(--text-muted)">Knowledge Gain</div></div>
      <div><div id="cert-date" style="font-family:var(--mono);font-size:1.5rem;color:var(--text);font-weight:700"></div><div style="font-size:0.72rem;color:var(--text-muted)">Completed</div></div>
    </div>
    <div style="display:flex;gap:0.75rem;justify-content:center;flex-wrap:wrap">
      <button class="btn btn-primary" onclick="downloadCertificate()">⬇ Download Certificate</button>
      <button class="btn btn-ghost" onclick="document.getElementById('cert-modal').style.display='none'">Close</button>
    </div>
  </div>
</div>

<!-- Answer feedback overlay -->
<div id="answer-overlay" style="display:none;position:fixed;inset:0;pointer-events:none;z-index:400"></div>

</main>

<script src="js/app.js"></script>
</body>
</html>
