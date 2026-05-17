// ══════════════════════════════════════════════════════
// DATA STORAGE
// ══════════════════════════════════════════════════════
const DB = {
  schools: [
    { id: 1, name: "Sandile High", code: "321", status: "active" },
    { id: 2, name: "Sunrise Academy", code: "555", status: "active" }
  ],
  users: [
    { id: 1, name: "Super Administrator", email: "sa@aris.ac.za", pass: "123", role: "superadmin", status: "active", schoolId: null, grade: null, subjects: [], grades: [] },
    { id: 2, name: "Admin Sandile", email: "a@aris.ac.za", pass: "123", role: "schooladmin", status: "active", schoolId: 1, grade: null, subjects: [], grades: [] },
    { id: 3, name: "Lindo Sibeko", email: "t@aris.ac.za", pass: "123", role: "teacher", status: "active", schoolId: 1, grade: null, subjects: [1,2,3,4,5,6], grades: [10,11] },
    { id: 4, name: "Thabo Nkosi", email: "l@aris.ac.za", pass: "123", role: "learner", status: "active", schoolId: 1, grade: 11, subjects: [1,2,3,4], grades: [] },
    { id: 20, name: "Admin Sunrise", email: "a2@aris.ac.za", pass: "123", role: "schooladmin", status: "active", schoolId: 2, grade: null, subjects: [], grades: [] },
  ],
  subjects: [
    { id: 1, name: "Mathematics", grade: 11, schoolId: 1 },
    { id: 2, name: "Physical Sciences", grade: 11, schoolId: 1 },
    { id: 3, name: "English HL", grade: 11, schoolId: 1 },
    { id: 4, name: "Accounting", grade: 11, schoolId: 1 },
    { id: 5, name: "Mathematical Literacy", grade: 10, schoolId: 1 },
    { id: 6, name: "Sepedi HL", grade: 10, schoolId: 1 },
    { id: 7, name: "Mathematics", grade: 10, schoolId: 1 },
    { id: 8, name: "Physical Sciences", grade: 10, schoolId: 1 },
    { id: 9, name: "English HL", grade: 10, schoolId: 1 },
    { id: 10, name: "Life Sciences", grade: 11, schoolId: 1 },
  ],
  assessments: [
    { id: 101, subjectId: 1, name: "Test 1", term: 1, totalMarks: 50, weight: 30, type: "Test" },
    { id: 102, subjectId: 1, name: "Test 2", term: 2, totalMarks: 50, weight: 30, type: "Test" },
    { id: 103, subjectId: 1, name: "Exam", term: 2, totalMarks: 100, weight: 40, type: "Exam" },
    { id: 201, subjectId: 2, name: "Test 1", term: 1, totalMarks: 80, weight: 50, type: "Test" },
    { id: 202, subjectId: 2, name: "Exam", term: 2, totalMarks: 100, weight: 50, type: "Exam" },
    { id: 303, subjectId: 3, name: "Exam", term: 2, totalMarks: 100, weight: 50, type: "Exam" },
    { id: 401, subjectId: 4, name: "Test", term: 1, totalMarks: 60, weight: 40, type: "Test" },
    { id: 501, subjectId: 7, name: "Test 1", term: 1, totalMarks: 40, weight: 30, type: "Test" },
    { id: 502, subjectId: 7, name: "Exam", term: 2, totalMarks: 80, weight: 70, type: "Exam" },
    { id: 601, subjectId: 8, name: "Test", term: 1, totalMarks: 60, weight: 50, type: "Test" },
    { id: 602, subjectId: 8, name: "Exam", term: 2, totalMarks: 100, weight: 50, type: "Exam" },
  ],
  questions: [
    { id: 1, assessmentId: 101, name: "Q1", marks: 10, topic: "Algebra" },
    { id: 2, assessmentId: 101, name: "Q2", marks: 15, topic: "Geometry" },
    { id: 3, assessmentId: 101, name: "Q3", marks: 10, topic: "Functions" },
    { id: 4, assessmentId: 101, name: "Q4", marks: 15, topic: "Statistics" },
    { id: 5, assessmentId: 102, name: "Q1", marks: 20, topic: "Calculus" },
    { id: 6, assessmentId: 102, name: "Q2", marks: 30, topic: "Trigonometry" },
    { id: 7, assessmentId: 103, name: "Q1", marks: 30, topic: "Algebra" },
    { id: 8, assessmentId: 103, name: "Q2", marks: 30, topic: "Functions" },
    { id: 9, assessmentId: 103, name: "Q3", marks: 40, topic: "Statistics" },
    { id: 10, assessmentId: 201, name: "Q1", marks: 40, topic: "Mechanics" },
    { id: 11, assessmentId: 201, name: "Q2", marks: 40, topic: "Waves" },
    { id: 12, assessmentId: 202, name: "Q1", marks: 50, topic: "Electricity" },
    { id: 13, assessmentId: 202, name: "Q2", marks: 50, topic: "Chemistry" },
    { id: 14, assessmentId: 303, name: "Q1", marks: 40, topic: "Comprehension" },
    { id: 15, assessmentId: 303, name: "Q2", marks: 60, topic: "Essay" },
    { id: 16, assessmentId: 401, name: "Q1", marks: 30, topic: "Balance Sheet" },
    { id: 17, assessmentId: 401, name: "Q2", marks: 30, topic: "Income Statement" },
    { id: 18, assessmentId: 501, name: "Q1", marks: 20, topic: "Numbers" },
    { id: 19, assessmentId: 501, name: "Q2", marks: 20, topic: "Patterns" },
    { id: 20, assessmentId: 502, name: "Q1", marks: 40, topic: "Algebra" },
    { id: 21, assessmentId: 502, name: "Q2", marks: 40, topic: "Geometry" },
    { id: 22, assessmentId: 601, name: "Q1", marks: 30, topic: "Kinematics" },
    { id: 23, assessmentId: 601, name: "Q2", marks: 30, topic: "Dynamics" },
    { id: 24, assessmentId: 602, name: "Q1", marks: 50, topic: "Waves" },
    { id: 25, assessmentId: 602, name: "Q2", marks: 50, topic: "Electricity" },
  ],
  studentMarks: {},
  attendance: {},
  interventions: [
    { id: 1, teacherId: 3, learnerId: 4, subjectId: 1, topic: "Algebra", message: "Student is consistently struggling with algebraic equations and needs structured support.", recommendation: "School-based Peer Tutoring Program", status: "pending_admin", createdAt: "2026-05-14", type: "resource" }
  ],
  consultations: [
    { id: 1, teacherId: 3, learnerId: 4, topic: "Grade 11 Maths Review", message: "Hi Thabo, I've noticed your scores on Functions and Algebra could use some work. Let's schedule a support session after school on Thursday.", status: "active", createdAt: "2026-05-15" }
  ],
  resources: [
    { id: 1, title: "School-based Peer Tutoring Program", description: "Free peer tutoring sessions every Tuesday & Thursday, 14:30–16:30 in the Library.", type: "school-based", active: true },
    { id: 2, title: "Khan Academy Digital Library", description: "Online video lessons, exercises, and practice quizzes for all subjects.", type: "digital", active: true },
    { id: 3, title: "School-based Academic Counselling", description: "One-on-one sessions with our academic support counsellor. Book via admin office.", type: "school-based", active: true }
  ],
  notifications: {
    4: [{ text: "Your teacher has scheduled a consultation with you.", time: "Today", read: false }],
    3: [{ text: "New pending intervention approval from admin.", time: "2 days ago", read: false }]
  }
};

// ═══ GENERATE ADDITIONAL DATA ═══
(function generateData() {
  const names = ["Zoe Mthembu", "Liam van der Merwe", "Amina Patel", "Kyle Ndlovu", "Jade Botha", "Tshepo Motloung", "Mia van Wyk", "Ethan Dlamini", "Sipho Khumalo", "Naledi Molefe",
                 "Connor Jacobs", "Lerato Mokoena", "Tyler Naidoo", "Mpho Ledwaba", "Ruby September", "Jayden Cloete", "Amahle Zulu", "Luke Pillay", "Ayanda Mthembu", "Sofia van Heerden",
                 "Daniel Pretorius", "Thandiwe Nkuna", "Matthew du Plessis", "Zanele Shabalala", "Joshua van Niekerk", "Kganya Ramaphosa", "Caitlin de Villiers", "Buhle Ntuli", "Michael van Tonder", "Nthabiseng Mokone"];
  let nameIdx = 0;
  for (let grade = 10; grade <= 12; grade++) {
    for (let i = 0; i < 10; i++) {
      const id = 10 + (grade-10)*10 + i;
      const subIds = grade === 11 ? [1,2,3,4] : (grade === 10 ? [5,6,7,8,9] : [1,2,3,10]);
      DB.users.push({
        id, name: names[nameIdx++], email: `student${grade}_${i+1}@sandile.ac.za`, pass: "123",
        role: "learner", status: "active", schoolId: 1, grade: grade, subjects: subIds, grades: []
      });
    }
  }
  const teacherNames = ["Sarah van der Linde", "David Mogale", "Nomvula Cele", "Pieter Swanepoel", "Kopano Molefe", "Michelle Adams", "Thandiwe Khumalo"];
  for (let i = 0; i < 7; i++) {
    const id = 40 + i;
    const grades = i < 3 ? [10] : i < 5 ? [11] : [12];
    const subjectSet = i < 3 ? [5,6,7,8,9] : (i < 5 ? [1,2,3,4,10] : [1,2,3,10]);
    DB.users.push({
      id, name: teacherNames[i], email: `teacher${i+1}@sandile.ac.za`, pass: "123",
      role: "teacher", status: "active", schoolId: 1, grade: null, subjects: subjectSet, grades: grades
    });
  }

  // Generate weighted random marks to ensure both good and at-risk learners
  DB.users.filter(u => u.role === 'learner' && u.schoolId === 1).forEach(learner => {
    const ability = 0.4 + Math.random() * 0.5; // 0.4 to 0.9
    learner.subjects.forEach(subId => {
      const assessments = DB.assessments.filter(a => a.subjectId === subId);
      assessments.forEach(ass => {
        const qs = DB.questions.filter(q => q.assessmentId === ass.id);
        qs.forEach(q => {
          const max = q.marks;
          let rand = Math.floor(ability * max + (Math.random() - 0.5) * 0.1 * max);
          rand = Math.max(0, Math.min(max, rand));
          setMark(learner.id, ass.id, q.id, rand);
        });
      });
    });
  });
})();

// ══════════════════════════════════════════════════════
// APP STATE
// ══════════════════════════════════════════════════════
let currentUser = null;
let activeTab = 'dashboard';
let teacherState = { subjectId: 1, assessmentId: 101, gradeFilter: 11 };
let adminGradeFilter = 11;
let activeSubTab = 0;
let userSearchTerm = '';
let userSortKey = 'name';

// ══════════════════════════════════════════════════════
// HELPERS
// ══════════════════════════════════════════════════════
function $(id) { return document.getElementById(id); }
function q(sel) { return document.querySelector(sel); }
function qq(sel) { return document.querySelectorAll(sel); }
function esc(s) { return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }

function getLearners(schoolId, grade=null) {
  return DB.users.filter(u => u.role === 'learner' && (schoolId ? u.schoolId === schoolId : true) && (grade ? u.grade === grade : true));
}
function getTeachers(schoolId) { return DB.users.filter(u => u.role === 'teacher' && (schoolId ? u.schoolId === schoolId : true)); }
function getSchool(id) { return DB.schools.find(s => s.id === id); }
function getUser(id) { return DB.users.find(u => u.id === id); }
function getSubject(id) { return DB.subjects.find(s => s.id === id); }
function getAssessmentsBySubject(subId) { return DB.assessments.filter(a => a.subjectId === subId); }
function getQuestionsByAssessment(assId) { return DB.questions.filter(q => q.assessmentId === assId); }
function avatarChar(name) { return name ? name.split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase() : '?'; }
function avatarColor(role) {
  return { superadmin: '#1a56c4', schooladmin: '#0891b2', teacher: '#7c3aed', learner: '#16a34a' }[role] || '#2d3d4f';
}
function formatDate(d) { return d ? new Date(d).toLocaleDateString('en-ZA', { day:'numeric', month:'short', year:'numeric' }) : '—'; }

function getMark(studentId, assessmentId, questionId) {
  return DB.studentMarks[studentId]?.[assessmentId]?.[questionId] ?? 0;
}
function setMark(studentId, assessmentId, questionId, val) {
  if (!DB.studentMarks[studentId]) DB.studentMarks[studentId] = {};
  if (!DB.studentMarks[studentId][assessmentId]) DB.studentMarks[studentId][assessmentId] = {};
  DB.studentMarks[studentId][assessmentId][questionId] = val;
}

function calcAssessmentScore(studentId, assessmentId) {
  const qs = getQuestionsByAssessment(assessmentId);
  let earned = 0, possible = 0;
  qs.forEach(q => { earned += getMark(studentId, assessmentId, q.id); possible += q.marks; });
  return { earned, possible, pct: possible > 0 ? (earned / possible) * 100 : 0 };
}

function calcSubjectAverage(studentId, subjectId) {
  const assessments = getAssessmentsBySubject(subjectId);
  let totalWeighted = 0, totalWeight = 0;
  assessments.forEach(ass => {
    const { pct } = calcAssessmentScore(studentId, ass.id);
    totalWeighted += pct * (ass.weight / 100);
    totalWeight += ass.weight;
  });
  return totalWeight > 0 ? totalWeighted : 0;
}

function calcOverallAverage(studentId) {
  const studentSubjects = DB.subjects.filter(s => {
    const u = getUser(studentId);
    return u && u.subjects.includes(s.id);
  });
  if (!studentSubjects.length) return 0;
  let sum = 0;
  studentSubjects.forEach(s => { sum += calcSubjectAverage(studentId, s.id); });
  return sum / studentSubjects.length;
}

// 4‑colour system: green >=75, yellow >=50, orange >=30, red <30
function riskBadge(pct) {
  let color, text;
  if (pct >= 65) { color = '#16a34a'; text = 'Good'; }
  else if (pct >= 50) { color = '#ddff00'; text = 'Moderate'; }
  else if (pct >= 26) { color = '#d97706'; text = 'At Risk'; }
  else { color = '#dc2626'; text = 'Critical'; }
  return `<span class="badge" style="background:${color}; color:white">${text}</span>`;
}

function progColor(pct) {
  if (pct >= 65) return '#16a34a';
  if (pct >= 50) return '#ddff00';
  if (pct >= 26) return '#d97706';
  return '#dc2626';
}
function newId() { return Date.now() + Math.floor(Math.random()*1000); }

// ══════════════════════════════════════════════════════
// LOGIN
// ══════════════════════════════════════════════════════
document.querySelectorAll('.role-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.role-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    $('schoolCodeField').style.display = tab.dataset.role === 'superadmin' ? 'none' : '';
  });
});

function showLoginError(msg) {
  const el = $('loginError');
  el.textContent = msg;
  el.classList.add('show');
}

function handleLogin() {
  $('loginError').classList.remove('show');
  const email = $('loginEmail').value.trim().toLowerCase();
  const pass = $('loginPass').value;
  const code = $('loginCode').value.trim();
  const role = q('.role-tab.active').dataset.role;

  if (!email) { showLoginError('Please enter your email address.'); return; }
  if (!pass) { showLoginError('Please enter your password.'); return; }

  let user = null;
  if (role === 'superadmin') {
    user = DB.users.find(u => u.email === email && u.role === 'superadmin' && u.pass === pass);
    if (!user) { showLoginError('Invalid Super Admin credentials.'); return; }
  } else {
    if (!code) { showLoginError('School Code is required for this role.'); return; }
    const school = DB.schools.find(s => s.code === code && s.status === 'active');
    if (!school) { showLoginError('Invalid or inactive School Code.'); return; }
    user = DB.users.find(u => u.email === email && u.role === role && u.pass === pass && u.schoolId === school.id && u.status === 'active');
    if (!user) { showLoginError('Credentials do not match. Check email, password, and role.'); return; }
  }

  currentUser = user;
  $('loginScreen').style.display = 'none';
  $('appShell').classList.add('active');
  initApp();
}

function handleLogout() {
  currentUser = null;
  $('appShell').classList.remove('active');
  $('loginScreen').style.display = '';
  $('loginEmail').value = ''; $('loginPass').value = ''; $('loginCode').value = '';
}

// ══════════════════════════════════════════════════════
// APP INIT
// ══════════════════════════════════════════════════════
function initApp() {
  renderSidebarUser();
  renderSidebarNav();
  renderNotifications();
  navigateTo('dashboard');
}

function renderSidebarUser() {
  const av = $('sidebarAvatar');
  av.textContent = avatarChar(currentUser.name);
  av.style.background = avatarColor(currentUser.role);
  $('sidebarName').textContent = currentUser.name;
  $('sidebarRole').textContent = { superadmin: 'Super Administrator', schooladmin: 'School Administrator', teacher: 'Educator', learner: 'Learner' }[currentUser.role];
}

function getSidebarNav() {
  if (currentUser.role === 'superadmin') return [
    { id: 'dashboard', icon: 'fa-chart-line', label: 'Dashboard' },
    { id: 'schools', icon: 'fa-building', label: 'Schools' },
    { id: 'users', icon: 'fa-users', label: 'User Directory' },
    { id: 'profile', icon: 'fa-user-cog', label: 'My Profile' }
  ];
  if (currentUser.role === 'schooladmin') return [
    { id: 'dashboard', icon: 'fa-chart-line', label: 'Dashboard' },
    { id: 'users', icon: 'fa-users', label: 'User Management' },
    { id: 'subjects', icon: 'fa-sitemap', label: 'Subject Structure' },
    { id: 'assessments', icon: 'fa-tasks', label: 'Assessments' },
    { id: 'approvals', icon: 'fa-check-circle', label: 'Approvals', badge: DB.interventions.filter(i => i.status === 'pending_admin').length },
    { id: 'analytics', icon: 'fa-chart-pie', label: 'School Analytics' },
    { id: 'resources', icon: 'fa-hands-helping', label: 'Resource Desk' },
    { id: 'profile', icon: 'fa-user-cog', label: 'My Profile' }
  ];
  if (currentUser.role === 'teacher') return [
    { id: 'dashboard', icon: 'fa-chart-line', label: 'Dashboard' },
    { id: 'marks', icon: 'fa-pen-ruler', label: 'Mark Entry' },
    { id: 'risk', icon: 'fa-exclamation-triangle', label: 'Risk & Interventions' },
    { id: 'attendance', icon: 'fa-calendar-check', label: 'Attendance' },
    { id: 'resources', icon: 'fa-hands-helping', label: 'Resources' },
    { id: 'profile', icon: 'fa-user-cog', label: 'My Profile' }
  ];
  return [
    { id: 'dashboard', icon: 'fa-chart-line', label: 'Dashboard' },
    { id: 'performance', icon: 'fa-chart-bar', label: 'My Performance' },
    { id: 'resources', icon: 'fa-gift', label: 'My Resources' },
    { id: 'consultations', icon: 'fa-comments', label: 'Consultations' },
    { id: 'profile', icon: 'fa-user-cog', label: 'My Profile' }
  ];
}

function renderSidebarNav() {
  const nav = getSidebarNav();
  $('sidebarNav').innerHTML = nav.map(item => `
    <button class="nav-item ${item.id === activeTab ? 'active' : ''}" onclick="navigateTo('${item.id}')">
      <i class="fas ${item.icon}"></i> ${item.label}
      ${item.badge ? `<span class="badge-pill">${item.badge}</span>` : ''}
    </button>
  `).join('');
}

function navigateTo(tabId) {
  activeTab = tabId;
  activeSubTab = 0;
  renderSidebarNav();
  const titleMap = {
    dashboard: 'Dashboard', schools: 'Schools', users: 'User Directory',
    subjects: 'Subject Structure', assessments: 'Assessments', approvals: 'Approvals', analytics: 'School Analytics',
    resources: currentUser.role === 'learner' ? 'My Resources' : 'Resource Desk',
    marks: 'Mark Entry', risk: 'Risk Analysis & Interventions', attendance: 'Attendance',
    performance: 'My Performance', consultations: 'Consultations', profile: 'My Profile'
  };
  $('headerTitle').textContent = titleMap[tabId] || tabId;
  const school = currentUser.schoolId ? getSchool(currentUser.schoolId) : null;
  $('headerSub').textContent = school ? school.name : (currentUser.role === 'superadmin' ? 'Platform Administrator' : '');
  renderPage();
}

// ══════════════════════════════════════════════════════
// NOTIFICATIONS
// ══════════════════════════════════════════════════════
function renderNotifications() {
  const notifs = DB.notifications[currentUser.id] || [];
  const unread = notifs.filter(n => !n.read).length;
  $('notifDot').style.display = unread > 0 ? '' : 'none';
  $('notifPanel').innerHTML = notifs.length
    ? notifs.map(n => `<div class="notif-item"><div class="notif-dot-icon" style="background:${n.read?'var(--border)':'var(--blue)'}"></div><div><div class="notif-text">${esc(n.text)}</div><div class="notif-time">${n.time}</div></div></div>`).join('')
    : '<div class="empty-state" style="padding:1rem"><p>No notifications</p></div>';
}

function toggleNotifPanel() {
  const panel = $('notifPanel');
  panel.classList.toggle('open');
  if (panel.classList.contains('open') && DB.notifications[currentUser.id]) {
    DB.notifications[currentUser.id].forEach(n => n.read = true);
    $('notifDot').style.display = 'none';
    renderNotifications();
  }
}
document.addEventListener('click', e => {
  if (!e.target.closest('#notifBtn') && !e.target.closest('#notifPanel')) {
    $('notifPanel').classList.remove('open');
  }
});

// ══════════════════════════════════════════════════════
// PAGE ROUTER
// ══════════════════════════════════════════════════════
function renderPage() {
  const c = $('pageContent');
  const r = currentUser.role;
  if (r === 'superadmin') renderSuperAdmin(c);
  else if (r === 'schooladmin') renderSchoolAdmin(c);
  else if (r === 'teacher') renderTeacher(c);
  else if (r === 'learner') renderLearner(c);
  if (activeTab === 'profile') renderProfile(c);
}

// ══════════════════════════════════════════════════════
// PROFILE TAB (all roles)
// ══════════════════════════════════════════════════════
function renderProfile(c) {
  c.innerHTML = `
    <div class="card">
      <div class="card-header"><div class="card-title">My Profile</div></div>
      <div class="card-body">
        <div class="profile-section">
          <div><label>Full Name</label><p style="font-weight:600">${esc(currentUser.name)}</p></div>
          <div><label>Email</label><input type="email" id="profEmail" value="${esc(currentUser.email)}"></div>
          <div><label>Current Password</label><input type="password" id="profCurPass" placeholder="Current password"></div>
          <div><label>New Password (leave blank to keep current)</label><input type="password" id="profNewPass" placeholder="New password"></div>
          <button class="btn btn-primary" onclick="updateProfile()"><i class="fas fa-save"></i> Update</button>
          <span id="profMsg" style="margin-left:1rem; font-size:0.8rem; color:var(--green); display:none">Profile updated</span>
        </div>
      </div>
    </div>`;
}

function updateProfile() {
  const curPass = $('profCurPass').value;
  if (curPass !== currentUser.pass) { alert('Current password incorrect.'); return; }
  const newEmail = $('profEmail').value.trim();
  if (!newEmail) { alert('Email cannot be empty.'); return; }
  currentUser.email = newEmail;
  const newPass = $('profNewPass').value;
  if (newPass) currentUser.pass = newPass;
  $('profMsg').style.display = 'inline';
  setTimeout(() => { if ($('profMsg')) $('profMsg').style.display = 'none'; }, 2000);
}

// ══════════════════════════════════════════════════════
// SUPER ADMIN
// ══════════════════════════════════════════════════════
function renderSuperAdmin(c) {
  if (activeTab === 'dashboard') {
    const totalLearners = DB.users.filter(u => u.role === 'learner').length;
    const totalTeachers = DB.users.filter(u => u.role === 'teacher').length;
    c.innerHTML = `
      <div class="page-hero">
        <h2>Welcome, ${esc(currentUser.name)}</h2>
        <p>Platform-wide overview — Academic Risk Intelligence System</p>
        <div class="hero-stats">
          <div><div class="hero-stat-val">${DB.schools.filter(s=>s.status==='active').length}</div><div class="hero-stat-label">Active Schools</div></div>
          <div><div class="hero-stat-val">${totalLearners}</div><div class="hero-stat-label">Total Learners</div></div>
          <div><div class="hero-stat-val">${totalTeachers}</div><div class="hero-stat-label">Total Teachers</div></div>
        </div>
      </div>
      <div class="stats-row">
        ${DB.schools.map(s => {
          const learners = getLearners(s.id).length;
          const teachers = getTeachers(s.id).length;
          return `<div class="stat-tile">
            <div class="stat-tile-top">
              <div><div class="stat-tile-val">${learners}</div><div class="stat-tile-label">${esc(s.name)}</div></div>
              <div class="stat-tile-icon" style="background:var(--blue-light); color:var(--blue)"><i class="fas fa-building"></i></div>
            </div>
            <div class="text-muted" style="margin-top:6px">${teachers} teachers · Code: <span class="text-mono">${s.code}</span></div>
          </div>`;
        }).join('')}
      </div>`;
  } else if (activeTab === 'schools') {
    c.innerHTML = `
      <div class="card">
        <div class="card-header">
          <div><div class="card-title">Registered Schools</div><div class="card-subtitle">${DB.schools.length} schools on the platform</div></div>
          <button class="btn btn-primary btn-sm" onclick="openAddSchoolModal()"><i class="fas fa-plus"></i> Add School</button>
        </div>
        <div class="card-body" style="padding:0">
          ${DB.schools.map(s => `
            <div class="directory-row" style="justify-content:space-between; flex-wrap:wrap; gap:8px">
              <div class="flex-gap">
                <div class="dir-avatar" style="background:var(--blue)"><i class="fas fa-building" style="font-size:0.8rem"></i></div>
                <div>
                  <div style="font-weight:600; font-size:0.82rem">${esc(s.name)}</div>
                  <div class="text-muted">Code: <span class="text-mono">${s.code}</span></div>
                </div>
              </div>
              <div class="flex-gap">
                <span class="badge ${s.status==='active'?'badge-green':'badge-red'}">${s.status}</span>
                <button class="btn btn-secondary btn-xs" onclick="openEditSchoolModal(${s.id})"><i class="fas fa-edit"></i> Edit</button>
                <button class="btn btn-xs ${s.status==='active'?'btn-danger':'btn-success'}" onclick="toggleSchoolStatus(${s.id})">${s.status==='active'?'Deactivate':'Activate'}</button>
              </div>
            </div>`).join('')}
        </div>
      </div>`;
  } else if (activeTab === 'users') {
    let html = `<div class="search-bar"><input type="text" id="userSearchInput" placeholder="Search by name or email..." value="${esc(userSearchTerm || '')}" oninput="userSearchTerm = this.value; navigateTo('users')"></div>`;
    DB.schools.forEach(school => {
      const admins = DB.users.filter(u => u.schoolId === school.id && u.role === 'schooladmin');
      const teachers = filterUsers(getTeachers(school.id), userSearchTerm);
      const learners = filterUsers(getLearners(school.id), userSearchTerm);
      html += `<div class="school-partition">
        <div class="school-partition-header" onclick="this.classList.toggle('open'); this.nextElementSibling.classList.toggle('collapsed')">
          <i class="fas fa-chevron-right chevron"></i> ${esc(school.name)} <span class="badge badge-gray" style="margin-left:auto">${admins.length+teachers.length+learners.length} users</span>
        </div>
        <div class="school-partition-body">
          ${admins.map(u => dirRowAdmin(u, 'School Admin', '#0891b2')).join('')}
          ${teachers.map(u => teacherRowSuper(u)).join('')}
          ${learners.map(u => learnerRowSuper(u)).join('')}
        </div>
      </div>`;
    });

     setTimeout(() => {
      const inp = document.getElementById('userSearchInput');
      if (inp) {
        inp.focus();
        inp.setSelectionRange(inp.value.length, inp.value.length);
      }
    }, 10);

    c.innerHTML = html;
  }
}

function dirRowAdmin(u, label, color) {
  return `<div class="directory-row" style="justify-content:space-between; flex-wrap:wrap; gap:6px">
    <div class="flex-gap">
      <div class="dir-avatar" style="background:${color}">${avatarChar(u.name)}</div>
      <div>
        <div style="font-weight:600; font-size:0.8rem">${esc(u.name)}</div>
        <div class="text-muted">${esc(u.email)}</div>
      </div>
    </div>
    <div class="flex-gap">
      <span class="badge badge-gray">${label}</span>
      <button class="btn btn-xs btn-secondary" onclick="openEditUserModal(${u.id})"><i class="fas fa-edit"></i></button>
      <button class="btn btn-xs btn-amber" onclick="resetUserPassword(${u.id})"><i class="fas fa-key"></i> Reset</button>
    </div>
  </div>`;
}

// ══════════════════════════════════════════════════════
// SCHOOL ADMIN
// ══════════════════════════════════════════════════════
function renderSchoolAdmin(c) {
  const schoolId = currentUser.schoolId;
  const learners = getLearners(schoolId);
  const teachers = getTeachers(schoolId);
  const schoolSubjects = DB.subjects.filter(s => s.schoolId === schoolId);
  const pendingCount = DB.interventions.filter(i => i.status === 'pending_admin').length;

  if (activeTab === 'dashboard') {
    const atRisk = learners.filter(l => calcOverallAverage(l.id) < 50).length;
    c.innerHTML = `
      <div class="page-hero">
        <h2>${esc(getSchool(schoolId).name)}</h2>
        <p>School Administrator Overview</p>
        <div class="hero-stats">
          <div><div class="hero-stat-val">${learners.length}</div><div class="hero-stat-label">Enrolled Learners</div></div>
          <div><div class="hero-stat-val">${teachers.length}</div><div class="hero-stat-label">Educators</div></div>
          <div><div class="hero-stat-val">${atRisk}</div><div class="hero-stat-label">At-Risk Learners</div></div>
        </div>
      </div>
      <div class="stats-row">
        <div class="stat-tile">
          <div class="stat-tile-top"><div><div class="stat-tile-val">${schoolSubjects.length}</div><div class="stat-tile-label">Active Subjects</div></div><div class="stat-tile-icon" style="background:var(--blue-light);color:var(--blue)"><i class="fas fa-book"></i></div></div>
        </div>
        <div class="stat-tile">
          <div class="stat-tile-top"><div><div class="stat-tile-val">${pendingCount}</div><div class="stat-tile-label">Pending Approvals</div></div><div class="stat-tile-icon" style="background:var(--amber-light);color:var(--amber)"><i class="fas fa-clock"></i></div></div>
        </div>
        <div class="stat-tile">
          <div class="stat-tile-top"><div><div class="stat-tile-val">${DB.resources.filter(r=>r.active).length}</div><div class="stat-tile-label">Active Resources</div></div><div class="stat-tile-icon" style="background:var(--teal-light);color:var(--teal)"><i class="fas fa-hands-helping"></i></div></div>
        </div>
      </div>`;
  } else if (activeTab === 'users') {
    const schoolUsers = DB.users.filter(u => u.schoolId === schoolId);
    const tch = filterUsers(schoolUsers.filter(u => u.role === 'teacher'), userSearchTerm);
    const lrn = filterUsers(schoolUsers.filter(u => u.role === 'learner'), userSearchTerm);
    const learnersByGrade = {};
    lrn.forEach(u => {
      const g = u.grade;
      if (!learnersByGrade[g]) learnersByGrade[g] = [];
      learnersByGrade[g].push(u);
    });
    let learnersHtml = '';
    for (const [grade, learnersList] of Object.entries(learnersByGrade)) {
      learnersHtml += `<div class="school-partition">
        <div class="school-partition-header" onclick="this.classList.toggle('open'); this.nextElementSibling.classList.toggle('collapsed')">
          <i class="fas fa-chevron-right chevron"></i> Grade ${grade} <span class="badge badge-gray" style="margin-left:auto">${learnersList.length} learners</span>
        </div>
        <div class="school-partition-body">
          ${learnersList.map(u => learnerRowAdmin(u)).join('')}
        </div>
      </div>`;
    }
    c.innerHTML = `
    <div class="search-bar"><input type="text" id="userSearchInput" placeholder="Search by name or email..." value="${esc(userSearchTerm || '')}" oninput="userSearchTerm = this.value; navigateTo('users')"></div>
      <div class="card">
        <div class="card-header">
          <div class="card-title">Educators</div>
          <button class="btn btn-primary btn-sm" onclick="openAddUserModal('teacher')"><i class="fas fa-plus"></i> Add Teacher</button>
        </div>
        <div class="card-body" style="padding:0">
          ${tch.length ? tch.map(u => teacherRowAdmin(u)).join('') : '<div class="empty-state"><p>No teachers found.</p></div>'}
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <div class="card-title">Learners</div>
          <button class="btn btn-primary btn-sm" onclick="openAddUserModal('learner')"><i class="fas fa-plus"></i> Add Learner</button>
        </div>
        <div class="card-body" style="padding:0">
          ${learnersHtml || '<div class="empty-state"><p>No learners found.</p></div>'}
        </div>
      </div>`;

      setTimeout(() => {
      const inp = document.getElementById('userSearchInput');
      if (inp) {
        inp.focus();
        inp.setSelectionRange(inp.value.length, inp.value.length);
      }
    }, 10);

  } else if (activeTab === 'subjects') {
    const grades = [10, 11, 12];
    c.innerHTML = `
      <div class="card">
        <div class="card-header">
          <div class="card-title">Curriculum Structure</div>
          <button class="btn btn-primary btn-sm" onclick="openAddSubjectModal()"><i class="fas fa-plus"></i> Add Subject</button>
        </div>
        <div class="card-body">
          <div class="grade-select-tabs">
            ${grades.map(g => `<button class="grade-tab ${adminGradeFilter===g?'active':''}" onclick="adminGradeFilter=${g}; navigateTo('subjects')">Grade ${g}</button>`).join('')}
          </div>
          <div class="tree-container" id="subjectTree">${renderSubjectTree(schoolId, adminGradeFilter)}</div>
        </div>
      </div>`;
  } else if (activeTab === 'assessments') {
    const subs = DB.subjects.filter(s => s.schoolId === schoolId);
    c.innerHTML = `
      <div class="card">
        <div class="card-header">
          <div class="card-title">Manage Assessments</div>
          <button class="btn btn-primary btn-sm" onclick="openAddAssessmentModal()"><i class="fas fa-plus"></i> Add Assessment</button>
        </div>
        <div class="card-body">
          <div class="toolbar">
            <select class="form-control" id="assessSubjectFilter" onchange="renderAssessmentsList()">
              <option value="">All Subjects</option>
              ${subs.map(s => `<option value="${s.id}">${esc(s.name)} (G${s.grade})</option>`).join('')}
            </select>
            <select class="form-control" id="assessGradeFilter" onchange="renderAssessmentsList()">
              <option value="">All Grades</option>
              <option value="10">Grade 10</option>
              <option value="11">Grade 11</option>
              <option value="12">Grade 12</option>
            </select>
          </div>
          <div id="assessmentsList"></div>
        </div>
      </div>`;
    



      
    renderAssessmentsList();

    

  } else if (activeTab === 'approvals') {
    const pending = DB.interventions.filter(i => i.status === 'pending_admin');
    c.innerHTML = `
      <div class="card">
        <div class="card-header">
          <div class="card-title">Pending Intervention Approvals</div>
          <span class="badge badge-amber">${pending.length} pending</span>
        </div>
        <div class="card-body">
          ${pending.length ? pending.map(i => {
            const learner = getUser(i.learnerId);
            const teacher = getUser(i.teacherId);
            const subject = getSubject(i.subjectId);
            return `<div class="approval-card">
              <div class="approval-card-header">
                <div>
                  <div style="font-weight:700; font-size:0.85rem">${esc(learner?.name || '—')}</div>
                  <div class="text-muted">Referred by ${esc(teacher?.name || '—')} · ${esc(subject?.name || '—')}</div>
                </div>
                <span class="badge badge-amber">Pending</span>
              </div>
              <div style="font-size:0.78rem; color:var(--ink-2); margin:0.5rem 0">${esc(i.message)}</div>
              <div style="font-size:0.78rem; margin-bottom:0.6rem"><strong>Recommendation:</strong> ${esc(i.recommendation)}</div>
              <div class="flex-gap">
                <button class="btn btn-success btn-sm" onclick="approveIntervention(${i.id})"><i class="fas fa-check"></i> Approve</button>
                <button class="btn btn-danger btn-sm" onclick="rejectIntervention(${i.id})"><i class="fas fa-times"></i> Reject</button>
              </div>
            </div>`;
          }).join('') : `<div class="empty-state"><i class="fas fa-check-circle" style="color:var(--green)"></i><p>No pending approvals</p></div>`}
        </div>
      </div>`;
  } else if (activeTab === 'analytics') {
    

// Inside renderSchoolAdmin, activeTab === 'analytics'
const learners = getLearners(schoolId);
const avgData = learners.map(l => ({
    learner: l,
    overall: calcOverallAverage(l.id),
    subjects: DB.subjects.filter(s => l.subjects.includes(s.id)).map(sub => ({
        name: sub.name,
        avg: calcSubjectAverage(l.id, sub.id)
    }))
}));

// Overall statistics
const overallAvgs = avgData.map(d => d.overall);
const schoolAvg = overallAvgs.reduce((a, b) => a + b, 0) / (overallAvgs.length || 1);
const sorted = [...overallAvgs].sort((a, b) => a - b);
const median = sorted.length ? sorted[Math.floor(sorted.length / 2)] : 0;
const highest = sorted.length ? sorted[sorted.length - 1] : 0;
const lowest = sorted.length ? sorted[0] : 0;

// New 4‑colour thresholds: green >=65%, yellow 50–74%, orange 26–49%, red <26%
function categoryColor(pct) {
    if (pct >= 65) return '#16a34a';
    if (pct >= 50) return '#f59e0b';
    if (pct >= 26) return '#d97706';
    return '#dc2626';
}
function categoryName(pct) {
    if (pct >= 65) return 'Good';
    if (pct >= 50) return 'Moderate';
    if (pct >= 26) return 'At Risk';
    return 'Critical';
}
function categoryBadge(pct) {
    return `<span class="badge" style="background:${categoryColor(pct)}; color:white">${categoryName(pct)}</span>`;
}

// Build category groups with learner details
const groups = { good: [], moderate: [], atrisk: [], critical: [] };
avgData.forEach(d => {
    const avg = d.overall;
    if (avg >= 65) groups.good.push({...d, avg});
    else if (avg >= 50) groups.moderate.push({...d, avg});
    else if (avg >= 26) groups.atrisk.push({...d, avg});
    else groups.critical.push({...d, avg});
});

// Grade statistics
const gradeStats = {};
avgData.forEach(d => {
    const g = d.learner.grade;
    if (!gradeStats[g]) gradeStats[g] = { total: 0, count: 0, learners: [] };
    gradeStats[g].total += d.overall;
    gradeStats[g].count++;
    gradeStats[g].learners.push(d);
});

// Subject averages
const subjectAvgs = {};
avgData.forEach(d => {
    d.subjects.forEach(sub => {
        if (!subjectAvgs[sub.name]) subjectAvgs[sub.name] = { total: 0, count: 0 };
        subjectAvgs[sub.name].total += sub.avg;
        subjectAvgs[sub.name].count++;
    });
});

c.innerHTML = `
    <!-- Top stat tiles (always visible) -->
    <div class="stats-row">
        <div class="stat-tile">
            <div class="stat-tile-top"><div><div class="stat-tile-val">${Math.round(schoolAvg)}%</div><div class="stat-tile-label">School Average</div></div><div class="stat-tile-icon" style="background:var(--blue-light);color:var(--blue)"><i class="fas fa-chart-line"></i></div></div>
        </div>
        <div class="stat-tile">
            <div class="stat-tile-top"><div><div class="stat-tile-val">${Math.round(median)}%</div><div class="stat-tile-label">Median</div></div><div class="stat-tile-icon" style="background:var(--teal-light);color:var(--teal)"><i class="fas fa-divide"></i></div></div>
        </div>
        <div class="stat-tile">
            <div class="stat-tile-top"><div><div class="stat-tile-val">${Math.round(highest)}%</div><div class="stat-tile-label">Highest</div></div><div class="stat-tile-icon" style="background:var(--green-light);color:var(--green)"><i class="fas fa-arrow-up"></i></div></div>
        </div>
        <div class="stat-tile">
            <div class="stat-tile-top"><div><div class="stat-tile-val">${Math.round(lowest)}%</div><div class="stat-tile-label">Lowest</div></div><div class="stat-tile-icon" style="background:var(--red-light);color:var(--red)"><i class="fas fa-arrow-down"></i></div></div>
        </div>
    </div>

    <!-- 1. Collapsible Performance Distribution -->
    <div class="card">
        <div class="card-header" onclick="this.classList.toggle('open'); this.nextElementSibling.classList.toggle('open')" style="cursor:pointer;">
            <div class="card-title"><i class="fas fa-chevron-right chevron" style="transition: transform 0.2s;"></i> Performance Distribution</div>
        </div>
        <div class="card-body tree-children open">
            <div class="analytics-chart">
                <div style="display: flex; height: 30px; border-radius: 5px; overflow: hidden; margin-bottom: 0.5rem;">
                    <div style="width: ${(groups.good.length / overallAvgs.length * 100).toFixed(1)}%; background: #16a34a;" title="Good ≥65%"></div>
                    <div style="width: ${(groups.moderate.length / overallAvgs.length * 100).toFixed(1)}%; background: #f59e0b;" title="Moderate 50–64%"></div>
                    <div style="width: ${(groups.atrisk.length / overallAvgs.length * 100).toFixed(1)}%; background: #d97706;" title="At Risk 26–49%"></div>
                    <div style="width: ${(groups.critical.length / overallAvgs.length * 100).toFixed(1)}%; background: #dc2626;" title="Critical <26%"></div>
                </div>
                <div class="legend">
                    <div class="legend-item"><div class="legend-icon" style="background:#16a34a"></div> Good (${groups.good.length})</div>
                    <div class="legend-item"><div class="legend-icon" style="background:#f59e0b"></div> Moderate (${groups.moderate.length})</div>
                    <div class="legend-item"><div class="legend-icon" style="background:#d97706"></div> At Risk (${groups.atrisk.length})</div>
                    <div class="legend-item"><div class="legend-icon" style="background:#dc2626"></div> Critical (${groups.critical.length})</div>
                </div>
            </div>
            <!-- Expanded learner list grouped by category -->
            <div style="margin-top: 1.5rem;">
                ${['good','moderate','atrisk','critical'].map(cat => {
                    if (groups[cat].length === 0) return '';
                    const catTitle = cat === 'good' ? 'Good (≥65%)' : cat === 'moderate' ? 'Moderate (50–64%)' : cat === 'atrisk' ? 'At Risk (26–49%)' : 'Critical (<26%)';
                    return `<div style="margin-bottom: 1rem;">
                        <div style="font-weight: 700; margin-bottom: 0.5rem; color: ${categoryColor(cat === 'good' ? 65 : cat === 'moderate' ? 50 : cat === 'atrisk' ? 26 : 0)}">${catTitle}</div>
                        <div class="tbl-wrap">
                            <table style="width:100%; font-size:0.8rem;">
                                <thead><tr><th>Learner</th><th>Grade</th><th>Overall</th></tr></thead>
                                <tbody>
                                    ${groups[cat].map(d => `
                                        <tr>
                                            <td>${esc(d.learner.name)}</td>
                                            <td><span class="badge badge-gray">G${d.learner.grade}</span></td>
                                            <td style="color:${categoryColor(d.avg)}; font-weight:700;">${Math.round(d.avg)}%</td>
                                        </tr>
                                    `).join('')}
                                </tbody>
                            </table>
                        </div>
                    </div>`;
                }).join('')}
            </div>
        </div>
    </div>

    <!-- 2. Collapsible Performance by Grade -->
    <div class="card">
        <div class="card-header" onclick="this.classList.toggle('open'); this.nextElementSibling.classList.toggle('open')" style="cursor:pointer;">
            <div class="card-title"><i class="fas fa-chevron-right chevron"></i> Performance by Grade</div>
        </div>
        <div class="card-body tree-children open">
            <div class="stats-row" style="grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));">
                ${Object.entries(gradeStats).map(([grade, stats]) => {
                    const avg = stats.total / stats.count;
                    return `<div class="stat-tile">
                        <div class="stat-tile-top"><div><div class="stat-tile-val" style="font-size:1.2rem;">${Math.round(avg)}%</div><div class="stat-tile-label">Grade ${grade}</div></div></div>
                        <div class="prog-bar" style="margin-top:8px;"><div class="prog-fill" style="width:${avg}%; background:${categoryColor(avg)}"></div></div>
                    </div>`;
                }).join('')}
            </div>
            <!-- Expanded: per‑grade subject breakdown -->
            <div style="margin-top: 1.5rem;">
                ${Object.entries(gradeStats).map(([grade, stats]) => {
                    // Compute subject averages for this grade
                    const gradeSubjects = {};
                    stats.learners.forEach(d => {
                        d.subjects.forEach(sub => {
                            if (!gradeSubjects[sub.name]) gradeSubjects[sub.name] = { total: 0, count: 0 };
                            gradeSubjects[sub.name].total += sub.avg;
                            gradeSubjects[sub.name].count++;
                        });
                    });
                    return `<div style="margin-bottom: 1.5rem;">
                        <div style="font-weight:700; margin-bottom:0.3rem;">Grade ${grade} Subject Averages</div>
                        <div class="tbl-wrap">
                            <table style="font-size:0.78rem; width:100%">
                                <thead><tr><th>Subject</th><th>Average</th></tr></thead>
                                <tbody>
                                    ${Object.entries(gradeSubjects).map(([name, data]) => {
                                        const avg = data.total / data.count;
                                        return `<tr><td>${esc(name)}</td><td style="color:${categoryColor(avg)}; font-weight:700;">${Math.round(avg)}%</td></tr>`;
                                    }).join('')}
                                </tbody>
                            </table>
                        </div>
                    </div>`;
                }).join('')}
            </div>
        </div>
    </div>

    <!-- 3. Collapsible Subject Performance Overview -->
    <div class="card">
        <div class="card-header" onclick="this.classList.toggle('open'); this.nextElementSibling.classList.toggle('open')" style="cursor:pointer;">
            <div class="card-title"><i class="fas fa-chevron-right chevron"></i> Subject Performance Overview</div>
        </div>
        <div class="card-body tree-children open">
            ${Object.entries(subjectAvgs).map(([subj, stats]) => {
                const avg = stats.total / stats.count;
                return `<div style="margin-bottom:0.8rem;">
                    <div class="flex-between" style="margin-bottom:3px">
                        <span style="font-size:0.78rem; font-weight:600">${esc(subj)}</span>
                        <span style="font-size:0.75rem; font-weight:700; color:${categoryColor(avg)}">${Math.round(avg)}%</span>
                    </div>
                    <div class="prog-bar"><div class="prog-fill" style="width:${avg}%; background:${categoryColor(avg)}"></div></div>
                </div>`;
            }).join('')}
            <!-- Expanded: per‑subject assessment details -->
            <div style="margin-top:1.5rem;">
                ${Object.keys(subjectAvgs).map(subjName => {
                    // Find subject id and its assessments
                    const subjObj = DB.subjects.find(s => s.name === subjName && s.schoolId === schoolId);
                    if (!subjObj) return '';
                    const assessments = getAssessmentsBySubject(subjObj.id);
                    // Overall assessment stats across all learners
                    const assessmentStats = assessments.map(ass => {
                        const qs = getQuestionsByAssessment(ass.id);
                        let totalPct = 0, count = 0;
                        avgData.forEach(d => {
                            if (!d.learner.subjects.includes(subjObj.id)) return;
                            const { earned, possible, pct } = calcAssessmentScore(d.learner.id, ass.id);
                            totalPct += pct;
                            count++;
                        });
                        return { name: ass.name, avg: count > 0 ? totalPct / count : 0 };
                    });
                    return `<div style="margin-bottom:1rem;">
                        <div style="font-weight:700; font-size:0.8rem;">${esc(subjName)} Assessments</div>
                        <div class="tbl-wrap">
                            <table style="font-size:0.75rem; width:100%">
                                <thead><tr><th>Assessment</th><th>Average %</th></tr></thead>
                                <tbody>
                                    ${assessmentStats.map(as => `
                                        <tr>
                                            <td>${esc(as.name)}</td>
                                            <td style="color:${categoryColor(as.avg)}; font-weight:700;">${Math.round(as.avg)}%</td>
                                        </tr>
                                    `).join('')}
                                </tbody>
                            </table>
                        </div>
                    </div>`;
                }).join('')}
            </div>
        </div>
    </div>

    <!-- 4. Collapsible Learner Details Table (same as before but with updated colors) -->
    <div class="card">
        <div class="card-header" onclick="this.classList.toggle('open'); this.nextElementSibling.classList.toggle('open')" style="cursor:pointer;">
            <div class="card-title"><i class="fas fa-chevron-right chevron"></i> Learner Details</div>
            <span class="text-muted">${avgData.length} learners</span>
        </div>
        <div class="card-body tree-children" style="padding:0;">
            <div class="tbl-wrap">
                <table id="learnerSortTable">
                    <thead>
                        <tr>
                            <th class="sortable" data-sort="name">Name</th>
                            <th class="sortable" data-sort="grade">Grade</th>
                            <th class="sortable" data-sort="overall">Overall</th>
                            <th class="sortable" data-sort="status">Status</th>
                            <th class="sortable" data-sort="topSubject">Top Subject</th>
                            <th class="sortable" data-sort="lowSubject">Lowest Subject</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${avgData.map(d => {
                            const topSubject = d.subjects.reduce((a,b) => a.avg > b.avg ? a : b, {name:'-', avg:0});
                            const lowSubject = d.subjects.reduce((a,b) => a.avg < b.avg ? a : b, {name:'-', avg:100});
                            return `<tr data-name="${esc(d.learner.name).toLowerCase()}" data-grade="${d.learner.grade}" data-overall="${d.overall.toFixed(1)}" data-status="${categoryName(d.overall)}" data-top="${esc(topSubject.name).toLowerCase()}" data-low="${esc(lowSubject.name).toLowerCase()}">
                                <td style="font-weight:600;">${esc(d.learner.name)}</td>
                                <td><span class="badge badge-gray">G${d.learner.grade}</span></td>
                                <td><span style="font-weight:700; color:${categoryColor(d.overall)}">${Math.round(d.overall)}%</span></td>
                                <td>${categoryBadge(d.overall)}</td>
                                <td>${esc(topSubject.name)} (${Math.round(topSubject.avg)}%)</td>
                                <td>${esc(lowSubject.name)} (${Math.round(lowSubject.avg)}%)</td>
                            </tr>`;
                        }).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
`;

// Activate sorting on the table (after render)
setTimeout(() => {
    const table = document.getElementById('learnerSortTable');
    if (!table) return;
    const headers = table.querySelectorAll('th.sortable');
    headers.forEach(th => {
        th.addEventListener('click', () => {
            const sortKey = th.dataset.sort;
            const isAsc = th.classList.contains('asc');
            headers.forEach(h => h.classList.remove('asc', 'desc'));
            th.classList.add(isAsc ? 'desc' : 'asc');
            const direction = isAsc ? -1 : 1;
            sortTable(table, sortKey, direction);
        });
    });
}, 50);



} else if (activeTab === 'resources') {
    c.innerHTML = `
      <div class="card">
        <div class="card-header">
          <div class="card-title">School-based Resource Desk</div>
          <button class="btn btn-primary btn-sm" onclick="openAddResourceModal()"><i class="fas fa-plus"></i> Add Resource</button>
        </div>
        <div class="card-body">
          ${DB.resources.map(r => `
            <div class="resource-card">
              <div style="flex:1">
                <div style="font-weight:700; font-size:0.85rem; margin-bottom:3px">${esc(r.title)}</div>
                <div class="text-muted">${esc(r.description)}</div>
                <div style="margin-top:5px"><span class="badge ${r.type==='school-based'?'badge-blue':'badge-teal'}">${r.type}</span></div>
              </div>
              <div class="flex-gap" style="flex-direction:column; align-items:flex-end">
                <span class="badge ${r.active?'badge-green':'badge-red'}">${r.active?'Active':'Inactive'}</span>
                <button class="btn btn-xs ${r.active?'btn-danger':'btn-success'}" onclick="toggleResource(${r.id})">${r.active?'Deactivate':'Activate'}</button>
              </div>
            </div>`).join('')}
        </div>
      </div>`;
  }
}

function renderSubjectTree(schoolId, gradeFilter) {
  const subjects = DB.subjects.filter(s => s.schoolId === schoolId && s.grade === gradeFilter);
  return subjects.map(s => {
    const assessments = getAssessmentsBySubject(s.id);
    return `<div class="tree-grade">
      <div class="tree-grade-header" onclick="this.classList.toggle('open'); this.nextElementSibling.classList.toggle('open')">
        <i class="fas fa-chevron-right chevron"></i> ${esc(s.name)} (Grade ${s.grade})
      </div>
      <div class="tree-children">
        ${assessments.map(a => {
          const questions = getQuestionsByAssessment(a.id);
          return `<div class="tree-assessment">
            <i class="fas fa-file-alt"></i> ${esc(a.name)} (${a.type}, Term ${a.term}) - ${a.totalMarks} marks
            <div class="tree-children">${questions.map(q => `<div class="tree-question"><i class="fas fa-question-circle"></i> ${esc(q.name)}: ${q.marks} marks (${esc(q.topic)})</div>`).join('')}</div>
          </div>`;
        }).join('')}
      </div>
    </div>`;
  }).join('');
}

function renderAssessmentsList() {
  const subFilter = $('assessSubjectFilter')?.value;
  const gradeFilter = $('assessGradeFilter')?.value;
  let assessments = DB.assessments;
  if (subFilter) assessments = assessments.filter(a => a.subjectId === parseInt(subFilter));
  if (gradeFilter) {
    const gradeSubIds = DB.subjects.filter(s => s.grade === parseInt(gradeFilter)).map(s => s.id);
    assessments = assessments.filter(a => gradeSubIds.includes(a.subjectId));
  }
  const list = $('assessmentsList');
  if (!list) return;
  list.innerHTML = assessments.length ? assessments.map(a => {
    const sub = getSubject(a.subjectId);
    const qs = getQuestionsByAssessment(a.id);
    return `<div class="intv-card">
      <div class="intv-card-header">
        <div style="font-weight:700; font-size:0.82rem">${esc(a.name)} <span class="badge badge-gray">${a.type}</span></div>
        <div class="flex-gap">
          <span class="badge badge-blue">${sub?.name || '?'} (G${sub?.grade})</span>
          <button class="btn btn-xs btn-secondary" onclick="openEditAssessmentModal(${a.id})"><i class="fas fa-edit"></i></button>
          <button class="btn btn-xs btn-danger" onclick="deleteAssessment(${a.id})"><i class="fas fa-trash"></i></button>
        </div>
      </div>
      <div class="text-muted">Term ${a.term} · Total: ${a.totalMarks} marks · Weight: ${a.weight}%</div>
      <div style="margin-top:4px"><strong>Questions:</strong> ${qs.map(q=>`${q.name} (${q.marks}m, ${q.topic})`).join(', ') || 'None'}</div>
    </div>`;
  }).join('') : '<div class="empty-state"><p>No assessments found.</p></div>';
}

function openAddSchoolModal() {
  openModal(`
    <div class="modal-title"><i class="fas fa-building"></i> Add New School</div>
    <div class="modal-field"><label>School Name</label><input type="text" id="m_schoolName" placeholder="e.g. Northview High School"></div>
    <div class="modal-field"><label>Custom Code (leave blank to auto-generate)</label><input type="text" id="m_schoolCode" placeholder="e.g. 999" maxlength="10"></div>
    <div class="modal-footer">
      <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
      <button class="btn btn-primary" onclick="addSchool()">Add School</button>
    </div>`);
}

function addSchool() {
  const name = $('m_schoolName').value.trim();
  if (!name) { alert('School name is required.'); return; }
  const code = $('m_schoolCode').value.trim() || Math.floor(100 + Math.random() * 900).toString();
  DB.schools.push({ id: newId(), name, code, status: 'active' });
  closeModal();
  navigateTo('schools');
}

function openEditSchoolModal(schoolId) {
  const school = getSchool(schoolId);
  openModal(`
    <div class="modal-title">Edit School</div>
    <div class="modal-field"><label>School Name</label><input type="text" id="m_editSchoolName" value="${esc(school.name)}"></div>
    <div class="modal-field"><label>School Code</label><input type="text" id="m_editSchoolCode" value="${esc(school.code)}" maxlength="10"></div>
    <div class="modal-footer">
      <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
      <button class="btn btn-primary" onclick="saveSchoolEdit(${schoolId})">Save</button>
    </div>`);
}

function saveSchoolEdit(schoolId) {
  const name = $('m_editSchoolName').value.trim();
  const code = $('m_editSchoolCode').value.trim();
  if (!name || !code) { alert('Both fields required.'); return; }
  const school = getSchool(schoolId);
  school.name = name;
  school.code = code;
  closeModal();
  navigateTo('schools');
}

function toggleSchoolStatus(id) {
  const s = DB.schools.find(s => s.id === id);
  s.status = s.status === 'active' ? 'inactive' : 'active';
  navigateTo('schools');
}

function openAddUserModal(role) {
  const grades = [10,11,12];
  const allSubjects = DB.subjects.filter(s => s.schoolId === currentUser.schoolId);
  let html = `<div class="modal-title">Add ${role === 'teacher' ? 'Teacher' : 'Learner'}</div>
    <div class="modal-field"><label>Full Name</label><input type="text" id="newUserName"></div>
    <div class="modal-field"><label>Email</label><input type="email" id="newUserEmail"></div>`;
  if (role === 'learner') {
    html += `<div class="modal-field"><label>Grade</label><select id="newUserGrade">${grades.map(g=>`<option value="${g}">Grade ${g}</option>`).join('')}</select></div>
    <div class="modal-field"><label>Subjects</label><div id="newUserSubs">${allSubjects.filter(s=>s.grade===10).map(s=>`<label><input type="checkbox" value="${s.id}" class="newSubChk"> ${esc(s.name)}</label><br>`).join('')}</div></div>`;
  } else {
    html += `<div class="modal-field"><label>Grades</label><div>${grades.map(g=>`<label><input type="checkbox" value="${g}" class="newGradeChk"> Grade ${g}</label>`).join(' ')}</div></div>
    <div class="modal-field"><label>Subjects</label><div id="newUserSubs">${allSubjects.map(s=>`<label><input type="checkbox" value="${s.id}" class="newSubChk"> ${esc(s.name)} (G${s.grade})</label><br>`).join('')}</div></div>`;
  }
  html += `<div class="modal-footer"><button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
    <button class="btn btn-primary" onclick="addUser('${role}')">Add</button></div>`;
  openModal(html);
}

function addUser(role) {
  const name = $('newUserName').value.trim();
  const email = $('newUserEmail').value.trim();
  if (!name || !email) { alert('Name and email required.'); return; }
  const user = {
    id: newId(),
    name,
    email,
    pass: '123',
    role,
    status: 'active',
    schoolId: currentUser.schoolId,
    grade: null,
    subjects: [],
    grades: []
  };
  if (role === 'learner') {
    user.grade = parseInt($('newUserGrade').value);
    user.subjects = Array.from(document.querySelectorAll('.newSubChk:checked')).map(cb => parseInt(cb.value));
  } else {
    user.grades = Array.from(document.querySelectorAll('.newGradeChk:checked')).map(cb => parseInt(cb.value));
    user.subjects = Array.from(document.querySelectorAll('.newSubChk:checked')).map(cb => parseInt(cb.value));
  }
  DB.users.push(user);
  closeModal();
  navigateTo('users');
}

function openEditUserModal(userId) {
  const u = getUser(userId);
  if (!u) return;
  const grades = [10,11,12];
  const allSubjects = DB.subjects.filter(s => s.schoolId === currentUser.schoolId);
  let html = `
    <div class="modal-title">Edit User — ${esc(u.name)}</div>
    <div class="modal-field"><label>Full Name</label><input type="text" id="editUserName" value="${esc(u.name)}"></div>
    <div class="modal-field"><label>Email</label><input type="email" id="editUserEmail" value="${esc(u.email)}"></div>
  `;
  if (u.role === 'learner') {
    html += `<div class="modal-field"><label>Grade</label><select id="editUserGrade">${grades.map(g => `<option value="${g}" ${u.grade===g?'selected':''}>Grade ${g}</option>`).join('')}</select></div>
    <div class="modal-field"><label>Subjects</label><div style="display:flex; flex-wrap:wrap; gap:8px">${allSubjects.filter(s=>s.grade===u.grade).map(s => `<label><input type="checkbox" value="${s.id}" ${u.subjects.includes(s.id)?'checked':''} class="editSubChk"> ${esc(s.name)}</label>`).join('')}</div></div>`;
  } else if (u.role === 'teacher') {
    html += `<div class="modal-field"><label>Assigned Grades</label><div style="display:flex; gap:8px">${grades.map(g => `<label><input type="checkbox" value="${g}" ${u.grades.includes(g)?'checked':''} class="editGradeChk"> Grade ${g}</label>`).join('')}</div></div>
    <div class="modal-field"><label>Subjects</label><div style="display:flex; flex-wrap:wrap; gap:8px">${allSubjects.map(s => `<label><input type="checkbox" value="${s.id}" ${u.subjects.includes(s.id)?'checked':''} class="editSubChk"> ${esc(s.name)} (G${s.grade})</label>`).join('')}</div></div>`;
  }
  html += `
    <div class="modal-field"><label>Reset Password</label><button class="btn btn-amber btn-sm" onclick="resetUserPassword(${u.id})">Set to default (123)</button></div>
    <div class="modal-footer">
      <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
      <button class="btn btn-primary" onclick="saveUserEdit(${u.id})">Save Changes</button>
    </div>`;
  openModal(html);
}

function saveUserEdit(userId) {
  const u = getUser(userId);
  if (!u) return;
  u.name = $('editUserName').value.trim();
  u.email = $('editUserEmail').value.trim();
  if (u.role === 'learner') {
    u.grade = parseInt($('editUserGrade').value);
    u.subjects = Array.from(document.querySelectorAll('.editSubChk:checked')).map(cb => parseInt(cb.value));
  } else if (u.role === 'teacher') {
    u.grades = Array.from(document.querySelectorAll('.editGradeChk:checked')).map(cb => parseInt(cb.value));
    u.subjects = Array.from(document.querySelectorAll('.editSubChk:checked')).map(cb => parseInt(cb.value));
  }
  closeModal();
  navigateTo('users');
}

function resetUserPassword(userId) {
  const u = getUser(userId);
  if (u) { u.pass = '123'; alert('Password reset to 123'); }
}

function toggleUserStatus(id) {
  const u = DB.users.find(u => u.id === id);
  if (u) u.status = u.status === 'active' ? 'inactive' : 'active';
  navigateTo('users');
}

function openAddSubjectModal() {
  const grades = [10,11,12];
  openModal(`
    <div class="modal-title">Add Subject</div>
    <div class="modal-field"><label>Subject Name</label><input type="text" id="m_subjectName" placeholder="e.g. Geography"></div>
    <div class="modal-field"><label>Grade</label><select id="m_subjectGrade">${grades.map(g=>`<option value="${g}">Grade ${g}</option>`).join('')}</select></div>
    <div class="modal-footer">
      <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
      <button class="btn btn-primary" onclick="addSubject()">Add Subject</button>
    </div>`);
}

function addSubject() {
  const name = $('m_subjectName').value.trim();
  if (!name) { alert('Name required.'); return; }
  const grade = parseInt($('m_subjectGrade').value);
  DB.subjects.push({ id: newId(), name, grade, schoolId: currentUser.schoolId });
  closeModal();
  navigateTo('subjects');
}

function openAddAssessmentModal() {
  const subjects = DB.subjects.filter(s => s.schoolId === currentUser.schoolId);
  openModal(`
    <div class="modal-title">Add Assessment</div>
    <div class="modal-field"><label>Subject</label><select id="m_assessSubject">${subjects.map(s=>`<option value="${s.id}">${esc(s.name)} (G${s.grade})</option>`).join('')}</select></div>
    <div class="modal-field"><label>Name</label><input type="text" id="m_assessName" placeholder="e.g. Test 1"></div>
    <div class="modal-field"><label>Term</label><select id="m_assessTerm"><option>1</option><option>2</option><option>3</option><option>4</option></select></div>
    <div class="modal-field"><label>Total Marks</label><input type="number" id="m_assessMarks" value="50" min="1"></div>
    <div class="modal-field"><label>Weight (%)</label><input type="number" id="m_assessWeight" value="30" min="1" max="100"></div>
    <div class="modal-field"><label>Type</label><select id="m_assessType"><option>Test</option><option>Exam</option><option>Assignment</option></select></div>
    <div class="modal-footer">
      <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
      <button class="btn btn-primary" onclick="addAssessment()">Add</button>
    </div>`);
}

function addAssessment() {
  const subjectId = parseInt($('m_assessSubject').value);
  const name = $('m_assessName').value.trim();
  if (!name) { alert('Name required.'); return; }
  const term = parseInt($('m_assessTerm').value);
  const totalMarks = parseInt($('m_assessMarks').value);
  const weight = parseInt($('m_assessWeight').value);
  const type = $('m_assessType').value;
  DB.assessments.push({ id: newId(), subjectId, name, term, totalMarks, weight, type });
  closeModal();
  navigateTo('assessments');
}

function openEditAssessmentModal(assId) {
  const ass = DB.assessments.find(a => a.id === assId);
  if (!ass) return;
  const subjects = DB.subjects.filter(s => s.schoolId === currentUser.schoolId);
  const qs = getQuestionsByAssessment(assId);
  openModal(`
    <div class="modal-title">Edit Assessment</div>
    <div class="modal-field"><label>Subject</label><select id="m_editAssessSubject">${subjects.map(s=>`<option value="${s.id}" ${s.id===ass.subjectId?'selected':''}>${esc(s.name)} (G${s.grade})</option>`).join('')}</select></div>
    <div class="modal-field"><label>Name</label><input type="text" id="m_editAssessName" value="${esc(ass.name)}"></div>
    <div class="modal-field"><label>Term</label><select id="m_editAssessTerm">${[1,2,3,4].map(t=>`<option value="${t}" ${ass.term===t?'selected':''}>${t}</option>`).join('')}</select></div>
    <div class="modal-field"><label>Total Marks</label><input type="number" id="m_editAssessMarks" value="${ass.totalMarks}" min="1"></div>
    <div class="modal-field"><label>Weight (%)</label><input type="number" id="m_editAssessWeight" value="${ass.weight}" min="1" max="100"></div>
    <div class="modal-field"><label>Type</label><select id="m_editAssessType">${['Test','Exam','Assignment'].map(t=>`<option value="${t}" ${ass.type===t?'selected':''}>${t}</option>`).join('')}</select></div>
    <hr class="divider">
    <div style="font-weight:700; font-size:0.8rem; margin-bottom:0.5rem">Questions</div>
    <div id="editQuestionsContainer">
      ${qs.map((q,i) => `
        <div style="display:flex; gap:8px; align-items:center; margin-bottom:6px">
          <input type="text" value="${esc(q.name)}" style="width:60px" placeholder="Q1" class="form-control editQName">
          <input type="number" value="${q.marks}" style="width:60px" placeholder="Marks" class="form-control editQMarks" min="1">
          <input type="text" value="${esc(q.topic)}" style="width:100px" placeholder="Topic" class="form-control editQTopic">
          <button class="btn btn-xs btn-danger" onclick="this.parentElement.remove()">X</button>
        </div>`).join('')}
    </div>
    <button class="btn btn-sm btn-secondary" onclick="addQuestionRow()"><i class="fas fa-plus"></i> Add Question</button>
    <div class="modal-footer">
      <button class="btn btn-danger" onclick="deleteAssessment(${assId}); closeModal()">Delete Assessment</button>
      <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
      <button class="btn btn-primary" onclick="saveAssessmentEdit(${assId})">Save Changes</button>
    </div>`);
}

function addQuestionRow() {
  const container = document.getElementById('editQuestionsContainer');
  if (!container) return;
  const row = document.createElement('div');
  row.style.cssText = 'display:flex; gap:8px; align-items:center; margin-bottom:6px';
  row.innerHTML = `<input type="text" style="width:60px" placeholder="Q1" class="form-control editQName">
    <input type="number" style="width:60px" placeholder="Marks" class="form-control editQMarks" min="1">
    <input type="text" style="width:100px" placeholder="Topic" class="form-control editQTopic">
    <button class="btn btn-xs btn-danger" onclick="this.parentElement.remove()">X</button>`;
  container.appendChild(row);
}

function saveAssessmentEdit(assId) {
  const ass = DB.assessments.find(a => a.id === assId);
  if (!ass) return;
  ass.subjectId = parseInt($('m_editAssessSubject').value);
  ass.name = $('m_editAssessName').value.trim();
  ass.term = parseInt($('m_editAssessTerm').value);
  ass.totalMarks = parseInt($('m_editAssessMarks').value);
  ass.weight = parseInt($('m_editAssessWeight').value);
  ass.type = $('m_editAssessType').value;
  const container = document.getElementById('editQuestionsContainer');
  if (container) {
    DB.questions = DB.questions.filter(q => q.assessmentId !== assId);
    const rows = container.querySelectorAll('div');
    rows.forEach(row => {
      const name = row.querySelector('.editQName').value.trim();
      const marks = parseInt(row.querySelector('.editQMarks').value) || 1;
      const topic = row.querySelector('.editQTopic').value.trim();
      if (name) {
        DB.questions.push({ id: newId(), assessmentId: assId, name, marks, topic });
      }
    });
  }
  closeModal();
  navigateTo('assessments');
}

function deleteAssessment(assId) {
  DB.assessments = DB.assessments.filter(a => a.id !== assId);
  DB.questions = DB.questions.filter(q => q.assessmentId !== assId);
  navigateTo('assessments');
}

function approveIntervention(id) {
  const intrv = DB.interventions.find(i => i.id === id);
  if (intrv) intrv.status = 'active';
  navigateTo('approvals');
}

function rejectIntervention(id) {
  const intrv = DB.interventions.find(i => i.id === id);
  if (intrv) intrv.status = 'rejected';
  navigateTo('approvals');
}

function toggleResource(id) {
  const res = DB.resources.find(r => r.id === id);
  if (res) res.active = !res.active;
  navigateTo('resources');
}

function openAddResourceModal() {
  openModal(`
    <div class="modal-title">Add Resource</div>
    <div class="modal-field"><label>Title</label><input type="text" id="m_resTitle"></div>
    <div class="modal-field"><label>Description</label><textarea id="m_resDesc"></textarea></div>
    <div class="modal-field"><label>Type</label><select id="m_resType"><option>school-based</option><option>digital</option></select></div>
    <div class="modal-footer">
      <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
      <button class="btn btn-primary" onclick="addResource()">Add</button>
    </div>`);
}

function addResource() {
  const title = $('m_resTitle').value.trim();
  const desc = $('m_resDesc').value.trim();
  if (!title || !desc) { alert('All fields required.'); return; }
  DB.resources.push({ id: newId(), title, description: desc, type: $('m_resType').value, active: true });
  closeModal();
  navigateTo('resources');
}

// ══════════════════════════════════════════════════════
// TEACHER
// ══════════════════════════════════════════════════════
function getTeacherGrades() {
  return currentUser.grades.length ? currentUser.grades : [10,11,12];
}
function getTeacherSubjectsForGrade(grade) {
  return DB.subjects.filter(s => currentUser.subjects.includes(s.id) && s.grade === grade);
}

function renderTeacher(c) {
  const schoolId = currentUser.schoolId;
  const teacherGrades = getTeacherGrades();
  const defaultGrade = teacherState.gradeFilter || teacherGrades[0] || 11;

  if (activeTab === 'dashboard') {
    const learners = getLearners(schoolId, defaultGrade);
    const atRisk = learners.filter(l => calcOverallAverage(l.id) < 50).length;
    const myInterventions = DB.interventions.filter(i => i.teacherId === currentUser.id);
    const teacherSubjects = getTeacherSubjectsForGrade(defaultGrade);
    c.innerHTML = `
      <div class="page-hero">
        <h2>Welcome, ${esc(currentUser.name)}</h2>
        <p>Educator Dashboard — ${esc(getSchool(schoolId)?.name || '')} | Assigned grades: ${teacherGrades.join(', ')}
          <select style="margin-left:8px; padding:2px 8px; border-radius:6px; background:white; color:var(--ink); font-weight:600" onchange="teacherState.gradeFilter=parseInt(this.value); navigateTo('dashboard')">
            ${teacherGrades.map(g => `<option value="${g}" ${defaultGrade===g?'selected':''}>Grade ${g}</option>`).join('')}
          </select>
        </p>
        <div class="hero-stats">
          <div><div class="hero-stat-val">${learners.length}</div><div class="hero-stat-label">Students (G${defaultGrade})</div></div>
          <div><div class="hero-stat-val">${atRisk}</div><div class="hero-stat-label">At Risk</div></div>
          <div><div class="hero-stat-val">${myInterventions.length}</div><div class="hero-stat-label">Interventions</div></div>
        </div>
      </div>
      <div class="stats-row">
        ${teacherSubjects.map(s => {
          const avg = learners.reduce((acc, l) => acc + calcSubjectAverage(l.id, s.id), 0) / (learners.length || 1);
          return `<div class="stat-tile">
            <div class="stat-tile-top"><div><div class="stat-tile-val">${Math.round(avg)}%</div><div class="stat-tile-label">${esc(s.name)}</div></div><div class="stat-tile-icon" style="background:var(--blue-light);color:var(--blue)"><i class="fas fa-book"></i></div></div>
            <div style="margin-top:8px"><div class="prog-bar"><div class="prog-fill" style="width:${avg}%; background:${progColor(avg)}"></div></div></div>
          </div>`;
        }).join('')}
      </div>`;
 



} else if (activeTab === 'risk') {
  const grade = teacherState.gradeFilter || defaultGrade;
  const learners = getLearners(currentUser.schoolId, grade);
  const teacherSubjects = getTeacherSubjectsForGrade(grade);

  const learnerData = learners.map(l => ({
    learner: l,
    overall: calcOverallAverage(l.id),
    subjects: teacherSubjects.map(sub => ({
      subject: sub,
      avg: calcSubjectAverage(l.id, sub.id)
    }))
  }));

  const overallGroups = { good: [], moderate: [], atrisk: [], critical: [] };
  learnerData.forEach(d => {
    const o = d.overall;
    if (o >= 65) overallGroups.good.push(d);
    else if (o >= 50) overallGroups.moderate.push(d);
    else if (o >= 26) overallGroups.atrisk.push(d);
    else overallGroups.critical.push(d);
  });

  // Build subject risk data
  const subjectRisk = {};
  teacherSubjects.forEach(sub => {
    const riskLevels = { moderate: [], atrisk: [], critical: [] };
    learnerData.forEach(d => {
      const subData = d.subjects.find(s => s.subject.id === sub.id);
      if (!subData) return;
      const avg = subData.avg;
      if (avg < 65) {
        const level = avg >= 50 ? 'moderate' : (avg >= 26 ? 'atrisk' : 'critical');
        riskLevels[level].push({ learner: d.learner, avg });
      }
    });
    const hasRisk = Object.values(riskLevels).some(arr => arr.length > 0);
    if (hasRisk) subjectRisk[sub.id] = { subject: sub, riskLevels };
  });

  c.innerHTML = `
    <div style="margin-bottom:1rem">
      <label style="font-weight:600; margin-right:8px">Grade filter:</label>
      <select class="form-control" onchange="teacherState.gradeFilter=parseInt(this.value); navigateTo('risk')">
        ${teacherGrades.map(g => `<option value="${g}" ${g===grade?'selected':''}>Grade ${g}</option>`).join('')}
      </select>
    </div>

    <!-- COLLAPSIBLE: Overall Risk Summary -->
    <div class="card">
      <div class="card-header" onclick="this.classList.toggle('open'); this.nextElementSibling.classList.toggle('open')" style="cursor:pointer;">
        <div class="card-title"><i class="fas fa-chevron-right chevron"></i> Overall Risk Summary</div>
        <span class="text-muted">${learnerData.length} learners</span>
      </div>
      <div class="card-body tree-children open">
        ${['good','moderate','atrisk','critical'].map(cat => {
          const data = overallGroups[cat];
          if (!data.length) return '';
          const headerColor = { good: '#16a34a', moderate: '#f59e0b', atrisk: '#d97706', critical: '#dc2626' }[cat];
          const label = { good: 'Good (≥65%)', moderate: 'Moderate (50–64%)', atrisk: 'At Risk (26–49%)', critical: 'Critical (<26%)' }[cat];
          return `<div style="margin-bottom:1.2rem;">
            <div style="font-weight:700; color:${headerColor}; margin-bottom:0.3rem;">${label} (${data.length})</div>
            ${data.map(d => `
              <div class="risk-learner-row" style="margin-bottom:0.4rem; padding:0.4rem 0.6rem; border-radius:6px; background:#f8fafc;">
                <div style="display:flex; align-items:center; gap:10px;">
                  <div class="dir-avatar" style="background:${progColor(d.overall)}; width:28px; height:28px; font-size:0.7rem;">${avatarChar(d.learner.name)}</div>
                  <div>
                    <div style="font-weight:600; font-size:0.8rem;">${esc(d.learner.name)}</div>
                    <div class="text-muted" style="font-size:0.7rem;">Grade ${d.learner.grade}</div>
                  </div>
                </div>
                <div style="text-align:right;">
                  <div style="font-weight:700; color:${progColor(d.overall)}; font-size:0.85rem;">${Math.round(d.overall)}%</div>
                  ${riskBadge(d.overall)}
                </div>
              </div>
            `).join('')}
          </div>`;
        }).join('')}
      </div>
    </div>

    <!-- COLLAPSIBLE: Subject Risk Analysis (each subject now collapsible) -->
    <div class="card">
      <div class="card-header" onclick="this.classList.toggle('open'); this.nextElementSibling.classList.toggle('open')" style="cursor:pointer;">
        <div class="card-title"><i class="fas fa-chevron-right chevron"></i> Subject Risk Analysis</div>
        <span class="text-muted">${Object.keys(subjectRisk).length} subjects with risk</span>
      </div>
      <div class="card-body tree-children open">
        ${Object.values(subjectRisk).map(sr => `
          <!-- Each subject is a collapsible block -->
          <div style="margin-bottom:1.5rem;">
            <div class="card-header" onclick="this.classList.toggle('open'); this.nextElementSibling.classList.toggle('open')" style="cursor:pointer; padding:0.5rem 0.75rem; background:#f1f5f9; border-radius:8px;">
              <div style="display:flex; align-items:center; justify-content:space-between;">
                <span style="font-weight:700; color:var(--blue);">${esc(sr.subject.name)} (Grade ${sr.subject.grade})</span>
                <i class="fas fa-chevron-right chevron" style="transition:transform 0.2s;"></i>
              </div>
            </div>
            <div class="tree-children" style="margin-top:0.5rem;">
              ${['moderate','atrisk','critical'].map(level => {
                const learners = sr.riskLevels[level];
                if (!learners.length) return '';
                const headerColor = { moderate: '#f59e0b', atrisk: '#d97706', critical: '#dc2626' }[level];
                const label = { moderate: 'Moderate (50–64%)', atrisk: 'At Risk (26–49%)', critical: 'Critical (<26%)' }[level];
                return `<div style="margin-bottom:0.8rem;">
                  <div style="font-weight:600; font-size:0.75rem; color:${headerColor}; margin-bottom:0.2rem;">${label}</div>
                  <div class="tbl-wrap">
                    <table style="font-size:0.78rem; width:100%">
                      <thead><tr><th>Learner</th><th>Subject Avg</th><th></th></tr></thead>
                      <tbody>
                        ${learners.map(l => `
                          <tr>
                            <td>${esc(l.learner.name)}</td>
                            <td style="color:${progColor(l.avg)}; font-weight:700;">${Math.round(l.avg)}%</td>
                            <td style="text-align:right;">
                              <button class="btn btn-xs btn-primary" onclick="openInterventionModal(${l.learner.id})"><i class="fas fa-hand-holding-heart"></i> Intervene</button>
                            </td>
                          </tr>
                        `).join('')}
                      </tbody>
                    </table>
                  </div>
                </div>`;
              }).join('')}
            </div>
          </div>
        `).join('')}
        ${Object.keys(subjectRisk).length === 0 ? '<div class="empty-state"><p>No subject risk detected for this grade.</p></div>' : ''}
      </div>
    </div>

    <!-- My Submitted Interventions -->
    <div class="card" style="margin-top:0">
      <div class="card-header"><div class="card-title">My Submitted Interventions</div></div>
      <div class="card-body" id="myIntervList"></div>
    </div>`;

  buildMyInterventions();
}





  
else if (activeTab === 'attendance') {
    const today = new Date().toISOString().split('T')[0];
    const grade = teacherState.gradeFilter || defaultGrade;
    const subjects = getTeacherSubjectsForGrade(grade);
    if (!subjects.length) { c.innerHTML = '<div class="empty-state"><p>No subjects for this grade.</p></div>'; return; }
    c.innerHTML = `
      <div class="card">
        <div class="card-header">
          <div><div class="card-title">Attendance Register — Grade ${grade}</div><div class="card-subtitle">${today}</div></div>
          <div class="flex-gap">
            <select class="form-control" id="attSubjSel">
              ${subjects.map(s => `<option value="${s.id}">${esc(s.name)}</option>`).join('')}
            </select>
            <button class="btn btn-primary btn-sm" onclick="saveAttendance()"><i class="fas fa-save"></i> Save</button>
          </div>
        </div>
        <div class="card-body" style="padding:0">
          <table>
            <thead><tr><th>Learner</th><th>Present</th><th>Absent</th><th>Late</th><th>Current</th></tr></thead>
            <tbody id="attBody"></tbody>
          </table>
        </div>
        <div id="attSaveMsg" style="display:none; color:var(--green); font-size:0.78rem; padding:0.75rem 1.25rem; font-weight:600"><i class="fas fa-check-circle"></i> Attendance saved.</div>
      </div>`;
    buildAttendanceTable(today);
  } else if (activeTab === 'resources') {
    c.innerHTML = `
      <div class="card">
        <div class="card-header"><div class="card-title">School-based Resources</div></div>
        <div class="card-body">
          ${DB.resources.filter(r => r.active).map(r => `
            <div class="intv-card">
              <div class="intv-card-header">
                <div style="font-weight:700; font-size:0.83rem">${esc(r.title)}</div>
                <span class="badge ${r.type==='school-based'?'badge-blue':'badge-teal'}">${r.type}</span>
              </div>
              <div class="intv-card-body">${esc(r.description)}</div>
            </div>`).join('')}
        </div>
      </div>`;
  }
}

function onMarkSubjectChange() {
  const sel = $('markSubjectSel');
  if (!sel) return;
  teacherState.subjectId = parseInt(sel.value);
  const assessments = getAssessmentsBySubject(teacherState.subjectId);
  if (assessments.length) teacherState.assessmentId = assessments[0].id;
  const assSel = $('markAssessSel');
  if (assSel) assSel.innerHTML = assessments.map(a => `<option value="${a.id}">${esc(a.name)}</option>`).join('');
  buildMarkTable();
}

function onMarkAssessChange() {
  teacherState.assessmentId = parseInt($('markAssessSel').value);
  buildMarkTable();
}

function buildMarkTable() {
  const tbl = $('markTable');
  if (!tbl) return;
  const questions = getQuestionsByAssessment(teacherState.assessmentId);
  const grade = teacherState.gradeFilter;
  const learners = getLearners(currentUser.schoolId, grade);
  if (!questions.length) { tbl.innerHTML = '<tr><td class="text-muted">No questions configured for this assessment.</td></tr>'; return; }

  const headerRow = `<thead><tr>
    <th>Learner</th>
    ${questions.map(q => `<th>${esc(q.name)}<br><span style="font-weight:400;color:var(--ink-4)">${esc(q.topic)} (/${q.marks})</span></th>`).join('')}
    <th>Total</th><th>%</th>
  </tr></thead>`;

  const bodyRows = learners.map(s => {
    let total = 0, possible = 0;
    const cells = questions.map(q => {
      const m = getMark(s.id, teacherState.assessmentId, q.id);
      total += m; possible += q.marks;
      return `<td><input type="number" class="mark-input" id="mk_${s.id}_${teacherState.assessmentId}_${q.id}" value="${m}" min="0" max="${q.marks}" oninput="onMarkInput(${s.id},${teacherState.assessmentId},${q.id},this)"></td>`;
    }).join('');
    const pct = possible > 0 ? (total / possible * 100) : 0;
    return `<tr>
      <td><div style="font-weight:600">${esc(s.name)}</div></td>
      ${cells}
      <td><span class="mark-total" id="mktot_${s.id}_${teacherState.assessmentId}">${total}</span></td>
      <td><span style="font-size:0.8rem; font-weight:700; color:${progColor(pct)}" id="mkpct_${s.id}_${teacherState.assessmentId}">${Math.round(pct)}%</span></td>
    </tr>`;
  }).join('');

  tbl.innerHTML = headerRow + `<tbody>${bodyRows}</tbody>`;
}

function onMarkInput(studentId, assessmentId, questionId, input) {
  const q = DB.questions.find(q => q.id === questionId);
  let val = parseInt(input.value) || 0;
  if (val < 0) val = 0;
  if (q && val > q.marks) { val = q.marks; input.value = val; }
  setMark(studentId, assessmentId, questionId, val);

  const qs = getQuestionsByAssessment(assessmentId);
  let total = 0, possible = 0;
  qs.forEach(q => { total += getMark(studentId, assessmentId, q.id); possible += q.marks; });
  const totEl = $(`mktot_${studentId}_${assessmentId}`);
  const pctEl = $(`mkpct_${studentId}_${assessmentId}`);
  if (totEl) totEl.textContent = total;
  if (pctEl) {
    const pct = possible > 0 ? (total / possible * 100) : 0;
    pctEl.textContent = Math.round(pct) + '%';
    pctEl.style.color = progColor(pct);
  }
}

function saveMarks() {
  const questions = getQuestionsByAssessment(teacherState.assessmentId);
  const learners = getLearners(currentUser.schoolId, teacherState.gradeFilter);
  learners.forEach(s => {
    questions.forEach(q => {
      const inp = $(`mk_${s.id}_${teacherState.assessmentId}_${q.id}`);
      if (inp) setMark(s.id, teacherState.assessmentId, q.id, parseInt(inp.value) || 0);
    });
  });
  const msg = $('markSaveMsg');
  if (msg) { msg.style.display = ''; setTimeout(() => { if (msg) msg.style.display = 'none'; }, 3000); }
  if (activeTab === 'risk') { buildRiskGrid(); buildMyInterventions(); }
}

function buildRiskGrid() {
  const grid = $('riskGrid');
  if (!grid) return;
  const grade = teacherState.gradeFilter;
  const learners = getLearners(currentUser.schoolId, grade);
  const good = [], risk = [];
  learners.forEach(l => {
    const avg = calcOverallAverage(l.id);
    (avg >= 50 ? good : risk).push({ learner: l, avg });
  });

  grid.innerHTML = `
    <div class="risk-section">
      <div class="risk-section-header good"><i class="fas fa-check-circle"></i> Good Standing (${good.length})</div>
      ${good.length ? good.map(({ learner: l, avg }) => `
        <div class="risk-learner-row">
          <div class="flex-gap">
            <div class="dir-avatar" style="background:var(--green); width:28px; height:28px; font-size:0.7rem">${avatarChar(l.name)}</div>
            <div>
              <div style="font-weight:600; font-size:0.8rem">${esc(l.name)}${avg>=75?' <i class="fas fa-star" style="color:#f59e0b"></i>':''}</div>
              <div class="text-muted">Grade ${l.grade}</div>
            </div>
          </div>
          <div style="text-align:right">
            ${riskBadge(avg)}
            <div style="font-size:0.75rem; font-weight:700; color:var(--green); margin-top:2px">${Math.round(avg)}%</div>
          </div>
        </div>`).join('') : '<div class="empty-state" style="padding:1.5rem"><p>No learners in good standing</p></div>'}
    </div>
    <div class="risk-section">
      <div class="risk-section-header bad"><i class="fas fa-exclamation-triangle"></i> Requires Action (${risk.length})</div>
      ${risk.length ? risk.map(({ learner: l, avg }) => `
        <div class="risk-learner-row" style="flex-direction:column; align-items:flex-start">
          <div class="flex-between" style="width:100%; flex-wrap:wrap; gap:6px">
            <div class="flex-gap">
              <div class="dir-avatar" style="background:${progColor(avg)}; width:28px; height:28px; font-size:0.7rem">${avatarChar(l.name)}</div>
              <div>
                <div style="font-weight:600; font-size:0.8rem">${esc(l.name)}</div>
                <div class="text-muted">Grade ${l.grade} · ${Math.round(avg)}%</div>
              </div>
            </div>
            ${riskBadge(avg)}
          </div>
          <div class="prog-bar" style="width:100%; margin:6px 0"><div class="prog-fill" style="width:${avg}%; background:${progColor(avg)}"></div></div>
          <button class="btn btn-primary btn-sm" onclick="openInterventionModal(${l.id})"><i class="fas fa-hand-holding-heart"></i> Initiate Intervention</button>
        </div>`).join('') : '<div class="empty-state" style="padding:1.5rem"><p>No at-risk learners</p></div>'}
    </div>`;
}

function buildMyInterventions() {
  const list = $('myIntervList');
  if (!list) return;
  const mine = DB.interventions.filter(i => i.teacherId === currentUser.id);
  if (!mine.length) { list.innerHTML = '<div class="empty-state"><p>No interventions submitted yet.</p></div>'; return; }
  list.innerHTML = mine.map(i => {
    const learner = getUser(i.learnerId);
    const statusBadge = { pending_admin: '<span class="badge badge-amber">Pending Admin Approval</span>', active: '<span class="badge badge-green">Active</span>', rejected: '<span class="badge badge-red">Rejected</span>' }[i.status] || '';
    return `<div class="intv-card">
      <div class="intv-card-header">
        <div style="font-weight:700; font-size:0.82rem">${esc(learner?.name)} — ${esc(i.topic)}</div>
        ${statusBadge}
      </div>
      <div class="intv-card-body">${esc(i.message)}<br><strong>Recommendation:</strong> ${esc(i.recommendation)}</div>
      <div class="intv-card-footer"><span class="text-muted">Submitted ${formatDate(i.createdAt)}</span></div>
    </div>`;
  }).join('');
}

function openInterventionModal(learnerId) {
  const learner = getUser(learnerId);
  const teacherSubjects = DB.subjects.filter(s => currentUser.subjects.includes(s.id));
  openModal(`
    <div class="modal-title">Initiate Intervention — ${esc(learner.name)}</div>
    <p class="text-muted" style="margin-bottom:1rem; font-size:0.78rem">Choose how you'd like to support this learner.</p>
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.75rem; margin-bottom:1.25rem">
      <div id="optA" onclick="selectIntervOption('A')" style="border:2px solid var(--blue); border-radius:10px; padding:0.9rem; cursor:pointer; background:var(--blue-light)">
        <div style="font-weight:700; font-size:0.82rem; color:var(--blue); margin-bottom:4px"><i class="fas fa-hands-helping"></i> Recommend Resource</div>
        <div class="text-muted" style="font-size:0.72rem">Submit to Admin for approval.</div>
      </div>
      <div id="optB" onclick="selectIntervOption('B')" style="border:2px solid var(--border); border-radius:10px; padding:0.9rem; cursor:pointer">
        <div style="font-weight:700; font-size:0.82rem; color:var(--ink-2); margin-bottom:4px"><i class="fas fa-comments"></i> Schedule Consultation</div>
        <div class="text-muted" style="font-size:0.72rem">Direct support session. Immediately alerts learner.</div>
      </div>
    </div>
    <div id="intervFormA" style="display:block">
      <div class="modal-field"><label>Subject</label><select id="m_intv_subject">${teacherSubjects.map(s=>`<option value="${s.id}">${esc(s.name)}</option>`).join('')}</select></div>
      <div class="modal-field"><label>Resource</label><select id="m_intv_resource">${DB.resources.filter(r=>r.active).map(r=>`<option value="${esc(r.title)}">${esc(r.title)}</option>`).join('')}</select></div>
      <div class="modal-field"><label>Topic</label><input type="text" id="m_intv_topic" placeholder="e.g. Algebra"></div>
      <div class="modal-field"><label>Notes for Admin</label><textarea id="m_intv_msg" placeholder="Why this learner needs support..."></textarea></div>
    </div>
    <div id="intervFormB" style="display:none">
      <div class="modal-field"><label>Session Topic</label><input type="text" id="m_consult_topic" placeholder="e.g. Grade 11 Maths Review"></div>
      <div class="modal-field"><label>Message to Learner</label><textarea id="m_consult_msg" placeholder="Let the learner know what to expect..."></textarea></div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
      <button class="btn btn-primary" id="intervSubmitBtn" onclick="submitIntervention(${learnerId})">Submit Resource Recommendation</button>
    </div>`);
}

let selectedIntervOption = 'A';
function selectIntervOption(opt) {
  selectedIntervOption = opt;
  $('optA').style.borderColor = opt === 'A' ? 'var(--blue)' : 'var(--border)';
  $('optA').style.background = opt === 'A' ? 'var(--blue-light)' : '';
  $('optB').style.borderColor = opt === 'B' ? 'var(--blue)' : 'var(--border)';
  $('optB').style.background = opt === 'B' ? 'var(--blue-light)' : '';
  $('intervFormA').style.display = opt === 'A' ? 'block' : 'none';
  $('intervFormB').style.display = opt === 'B' ? 'block' : 'none';
  $('intervSubmitBtn').textContent = opt === 'A' ? 'Submit Resource Recommendation' : 'Schedule Consultation';
}

function submitIntervention(learnerId) {
  if (selectedIntervOption === 'A') {
    const subjectId = parseInt($('m_intv_subject').value);
    const rec = $('m_intv_resource').value;
    const topic = $('m_intv_topic').value.trim();
    const msg = $('m_intv_msg').value.trim();
    if (!topic || !msg) { alert('Please fill in all fields.'); return; }
    DB.interventions.push({ id: newId(), teacherId: currentUser.id, learnerId, subjectId, topic, message: msg, recommendation: rec, status: 'pending_admin', createdAt: new Date().toISOString().split('T')[0], type: 'resource' });
    closeModal();
    renderSidebarNav();
    navigateTo('risk');
  } else {
    const topic = $('m_consult_topic').value.trim();
    const msg = $('m_consult_msg').value.trim();
    if (!topic || !msg) { alert('Please fill in all fields.'); return; }
    DB.consultations.push({ id: newId(), teacherId: currentUser.id, learnerId, topic, message: msg, status: 'active', createdAt: new Date().toISOString().split('T')[0] });
    if (!DB.notifications[learnerId]) DB.notifications[learnerId] = [];
    DB.notifications[learnerId].unshift({ text: `${currentUser.name} has scheduled a consultation: ${topic}`, time: 'Just now', read: false });
    closeModal();
    navigateTo('risk');
  }
}

function buildAttendanceTable(today) {
  const subjectId = parseInt($('attSubjSel')?.value || currentUser.subjects[0]);
  if (!DB.attendance[today]) DB.attendance[today] = {};
  if (!DB.attendance[today][subjectId]) DB.attendance[today][subjectId] = {};
  const records = DB.attendance[today][subjectId];
  const learners = getLearners(currentUser.schoolId, teacherState.gradeFilter);
  $('attBody').innerHTML = learners.map(l => {
    const status = records[l.id] || 'present';
    return `<tr>
      <td><div style="font-weight:600">${esc(l.name)}</div><div class="text-muted">Grade ${l.grade}</div></td>
      <td><button class="att-status-btn att-present ${status==='present'?'active':''}" onclick="setAttendance(${l.id},'present',${subjectId},'${today}')">Present</button></td>
      <td><button class="att-status-btn att-absent ${status==='absent'?'active':''}" onclick="setAttendance(${l.id},'absent',${subjectId},'${today}')">Absent</button></td>
      <td><button class="att-status-btn att-late ${status==='late'?'active':''}" onclick="setAttendance(${l.id},'late',${subjectId},'${today}')">Late</button></td>
      <td><span class="badge ${status==='present'?'badge-green':status==='absent'?'badge-red':'badge-amber'}">${status}</span></td>
    </tr>`;
  }).join('');
}

function setAttendance(studentId, status, subjectId, date) {
  if (!DB.attendance[date]) DB.attendance[date] = {};
  if (!DB.attendance[date][subjectId]) DB.attendance[date][subjectId] = {};
  DB.attendance[date][subjectId][studentId] = status;
  buildAttendanceTable(date);
}

function saveAttendance() {
  const msg = $('attSaveMsg');
  if (msg) { msg.style.display = ''; setTimeout(() => { if(msg) msg.style.display='none'; }, 3000); }
}

// ══════════════════════════════════════════════════════
// LEARNER
// ══════════════════════════════════════════════════════
function renderLearner(c) {
  const uid = currentUser.id;
  const mySubjects = DB.subjects.filter(s => currentUser.subjects.includes(s.id));

  if (activeTab === 'dashboard') {
    const overall = calcOverallAverage(uid);
    const approved = DB.interventions.filter(i => i.learnerId === uid && i.status === 'active');
    const myConsults = DB.consultations.filter(co => co.learnerId === uid);
    c.innerHTML = `
      <div class="page-hero">
        <h2>Welcome, ${esc(currentUser.name)}</h2>
        <p>Grade ${currentUser.grade} · ${esc(getSchool(currentUser.schoolId)?.name || '')}</p>
        <div class="hero-stats">
          <div><div class="hero-stat-val">${Math.round(overall)}%</div><div class="hero-stat-label">Overall Average</div></div>
          <div><div class="hero-stat-val">${approved.length}</div><div class="hero-stat-label">Active Resources</div></div>
          <div><div class="hero-stat-val">${myConsults.length}</div><div class="hero-stat-label">Consultations</div></div>
        </div>
      </div>
      <div class="stats-row">
        ${mySubjects.map(s => {
          const avg = calcSubjectAverage(uid, s.id);
          return `<div class="stat-tile">
            <div class="stat-tile-top">
              <div><div class="stat-tile-val">${Math.round(avg)}%</div><div class="stat-tile-label">${esc(s.name)}</div></div>
              ${riskBadge(avg)}
            </div>
            <div style="margin-top:8px"><div class="prog-bar"><div class="prog-fill" style="width:${avg}%; background:${progColor(avg)}"></div></div></div>
          </div>`;
        }).join('')}
      </div>`;
  } else if (activeTab === 'performance') {
    c.innerHTML = `<div id="learnerPerfContent"></div>`;
    let html = '';
    mySubjects.forEach(sub => {
      const assessments = getAssessmentsBySubject(sub.id);
      if (!assessments.length) return;
      const subAvg = calcSubjectAverage(uid, sub.id);
      const topicScores = {};
      assessments.forEach(ass => {
        getQuestionsByAssessment(ass.id).forEach(q => {
          const mark = getMark(uid, ass.id, q.id);
          const pct = q.marks > 0 ? (mark / q.marks) * 100 : 0;
          if (!topicScores[q.topic]) topicScores[q.topic] = { total: 0, count: 0 };
          topicScores[q.topic].total += pct;
          topicScores[q.topic].count++;
        });
      });
      const topicList = Object.entries(topicScores).map(([topic, data]) => ({
        topic,
        avg: data.total / data.count
      }));
      html += `<div class="card">
        <div class="card-header">
          <div><div class="card-title">${esc(sub.name)}</div><div class="card-subtitle">Grade ${sub.grade}</div></div>
          <div style="text-align:right"><span style="font-size:1.2rem; font-weight:700; color:${progColor(subAvg)}">${Math.round(subAvg)}%</span><br>${riskBadge(subAvg)}</div>
        </div>
        <div class="card-body">
          <button class="btn btn-sm btn-secondary" style="margin-bottom:1rem" onclick="this.nextElementSibling.classList.toggle('open')"><i class="fas fa-chart-pie"></i> Topic Breakdown</button>
          <div class="tree-children" style="border-left-color:var(--blue-mid); margin-bottom:1rem">
            ${topicList.length ? topicList.map(t => `
              <div style="margin-bottom:0.4rem; display:flex; align-items:center; gap:8px">
                <span style="width:120px; font-size:0.8rem; font-weight:600">${esc(t.topic)}</span>
                <div class="prog-bar" style="flex:1"><div class="prog-fill" style="width:${t.avg}%; background:${progColor(t.avg)}"></div></div>
                <span style="font-size:0.8rem; font-weight:700; color:${progColor(t.avg)}; width:45px; text-align:right">${Math.round(t.avg)}%</span>
              </div>`).join('') : '<p class="text-muted">No topic data available.</p>'}
          </div>
          ${assessments.map(ass => {
            const { earned, possible, pct } = calcAssessmentScore(uid, ass.id);
            const qs = getQuestionsByAssessment(ass.id);
            return `<div class="perf-strip">
              <div class="perf-strip-header">
                <div style="font-weight:700; font-size:0.82rem">${esc(ass.name)} <span class="badge badge-gray">${ass.type}</span></div>
                <div style="font-weight:700; color:${progColor(pct)}; font-size:0.85rem">${earned}/${possible} — ${Math.round(pct)}%</div>
              </div>
              <div class="prog-bar" style="margin-bottom:8px"><div class="prog-fill" style="width:${pct}%; background:${progColor(pct)}"></div></div>
              ${qs.map(q => {
                const m = getMark(uid, ass.id, q.id);
                const qpct = q.marks > 0 ? (m / q.marks) * 100 : 0;
                const emoji = qpct >= 75 ? '🌟' : qpct >= 50 ? '✅' : qpct >= 30 ? '⚠️' : '❌';
                return `<div class="perf-q-row">
                  <div class="perf-q-name">${esc(q.name)} <span class="badge badge-gray" style="font-size:0.55rem">${esc(q.topic)}</span></div>
                  <div class="perf-q-bar"><div class="prog-bar"><div class="prog-fill" style="width:${qpct}%; background:${progColor(qpct)}"></div></div></div>
                  <div class="perf-q-val" style="color:${progColor(qpct)}">${m}/${q.marks}</div>
                  <span>${emoji}</span>
                </div>`;
              }).join('')}
            </div>`;
          }).join('')}
        </div>
      </div>`;
    });
    $('learnerPerfContent').innerHTML = html;
  } else if (activeTab === 'resources') {
    const approved = DB.interventions.filter(i => i.learnerId === uid && i.status === 'active');
    c.innerHTML = `<div class="card">
      <div class="card-header"><div class="card-title">Approved Resources & Interventions</div></div>
      <div class="card-body">
        ${approved.length ? approved.map(i => {
          const teacher = getUser(i.teacherId);
          return `<div class="intv-card">
            <div class="intv-card-header">
              <div style="font-weight:700; font-size:0.83rem">${esc(i.recommendation)}</div>
              <span class="badge badge-green">Active</span>
            </div>
            <div class="intv-card-body">Recommended by ${esc(teacher?.name || '—')} · Topic: ${esc(i.topic)}</div>
            <div class="intv-card-footer"><span class="text-muted">${formatDate(i.createdAt)}</span></div>
          </div>`;
        }).join('') : `<div class="empty-state"><i class="fas fa-gift"></i><p>No approved resources yet.</p></div>`}
      </div>
    </div>`;
  } else if (activeTab === 'consultations') {
    const myConsults = DB.consultations.filter(co => co.learnerId === uid);
    c.innerHTML = `<div class="card">
      <div class="card-header"><div class="card-title">My Consultations</div></div>
      <div class="card-body">
        ${myConsults.length ? myConsults.map(co => {
          const teacher = getUser(co.teacherId);
          return `<div class="consultation-thread">
            <div class="thread-header">
              <div class="flex-gap">
                <div class="dir-avatar" style="background:var(--teal); width:28px; height:28px; font-size:0.7rem">${avatarChar(teacher?.name)}</div>
                <div>
                  <div style="font-weight:700; font-size:0.8rem">${esc(co.topic)}</div>
                  <div class="text-muted">From ${esc(teacher?.name || '—')}</div>
                </div>
              </div>
              <span class="badge ${co.status==='active'?'badge-green':'badge-gray'}">${co.status}</span>
            </div>
            <div class="thread-body">${esc(co.message)}</div>
            <div class="thread-meta">
              <span class="text-muted"><i class="fas fa-calendar"></i> ${formatDate(co.createdAt)}</span>
            </div>
          </div>`;
        }).join('') : `<div class="empty-state"><i class="fas fa-comments"></i><p>No consultations scheduled yet.</p></div>`}
      </div>
    </div>`;
  }
}

// ══════════════════════════════════════════════════════
// USER ROWS (Super Admin & School Admin)
// ══════════════════════════════════════════════════════
function filterUsers(list, term) {
  if (!term) return list;
  const t = term.toLowerCase();
  return list.filter(u => u.name.toLowerCase().includes(t) || u.email.toLowerCase().includes(t));
}

function teacherRowSuper(u) {
  const subs = u.subjects.map(sid => getSubject(sid)).filter(s => s);
  const grades = u.grades.join(', ');
  return `<div class="directory-row" style="flex-wrap:wrap; justify-content:space-between">
    <div class="flex-gap">
      <div class="dir-avatar" style="background:#7c3aed">${avatarChar(u.name)}</div>
      <div>
        <div style="font-weight:600; font-size:0.8rem">${esc(u.name)}</div>
        <div class="text-muted">${esc(u.email)}</div>
        <div class="text-muted">Grades: ${grades || '—'} · Subjects: ${subs.map(s=>s.name).join(', ') || '—'}</div>
      </div>
    </div>
    <div class="flex-gap">
      <span class="badge badge-gray">Teacher</span>
      <button class="btn btn-xs btn-secondary" onclick="openEditUserModal(${u.id})"><i class="fas fa-edit"></i></button>
      <button class="btn btn-xs btn-amber" onclick="resetUserPassword(${u.id})"><i class="fas fa-key"></i> Reset</button>
    </div>
  </div>`;
}

function learnerRowSuper(u) {
  const avg = calcOverallAverage(u.id);
  return `<div class="directory-row" style="justify-content:space-between; flex-wrap:wrap">
    <div class="flex-gap">
      <div class="dir-avatar" style="background:#16a34a">${avatarChar(u.name)}</div>
      <div>
        <div style="font-weight:600; font-size:0.8rem">${esc(u.name)} <span class="badge badge-gray">G${u.grade}</span></div>
        <div class="text-muted">${esc(u.email)}</div>
      </div>
    </div>
    <div class="flex-gap">
      ${avg >= 75 ? '<span class="badge badge-star"><i class="fas fa-star"></i></span>' : ''}
      ${riskBadge(avg)}
      <button class="btn btn-xs btn-secondary" onclick="openEditUserModal(${u.id})"><i class="fas fa-edit"></i></button>
      <button class="btn btn-xs btn-amber" onclick="resetUserPassword(${u.id})"><i class="fas fa-key"></i> Reset</button>
    </div>
  </div>`;
}

function teacherRowAdmin(u) {
  const subs = u.subjects.map(sid => getSubject(sid)).filter(s => s);
  const grades = u.grades.join(', ');
  return `<div class="directory-row" style="justify-content:space-between; flex-wrap:wrap; gap:6px">
    <div class="flex-gap">
      <div class="dir-avatar" style="background:#7c3aed">${avatarChar(u.name)}</div>
      <div>
        <div style="font-weight:600; font-size:0.8rem">${esc(u.name)}</div>
        <div class="text-muted">${esc(u.email)}</div>
        <div class="text-muted">Grades: ${grades || '—'} · Subjects: ${subs.map(s=>s.name).join(', ') || '—'}</div>
      </div>
    </div>
    <div class="flex-gap">
      <span class="badge ${u.status==='active'?'badge-green':'badge-red'}">${u.status}</span>
      <button class="btn btn-xs btn-secondary" onclick="openEditUserModal(${u.id})"><i class="fas fa-edit"></i></button>
      <button class="btn btn-xs btn-amber" onclick="resetUserPassword(${u.id})"><i class="fas fa-key"></i> Reset</button>
      <button class="btn btn-xs ${u.status==='active'?'btn-danger':'btn-success'}" onclick="toggleUserStatus(${u.id})">${u.status==='active'?'Deactivate':'Activate'}</button>
    </div>
  </div>`;
}

function learnerRowAdmin(u) {
  const avg = calcOverallAverage(u.id);
  return `<div class="directory-row" style="justify-content:space-between; flex-wrap:wrap; gap:6px">
    <div class="flex-gap">
      <div class="dir-avatar" style="background:var(--green)">${avatarChar(u.name)}</div>
      <div>
        <div style="font-weight:600; font-size:0.8rem">${esc(u.name)}</div>
        <div class="text-muted">${esc(u.email)}</div>
      </div>
    </div>
    <div class="flex-gap">
      ${avg >= 75 ? '<span class="badge badge-star"><i class="fas fa-star"></i></span>' : ''}
      ${riskBadge(avg)}
      <button class="btn btn-xs btn-secondary" onclick="openEditUserModal(${u.id})"><i class="fas fa-edit"></i></button>
      <button class="btn btn-xs btn-amber" onclick="resetUserPassword(${u.id})"><i class="fas fa-key"></i> Reset</button>
      <button class="btn btn-xs ${u.status==='active'?'btn-danger':'btn-success'}" onclick="toggleUserStatus(${u.id})">${u.status==='active'?'Deactivate':'Activate'}</button>
    </div>
  </div>`;
}

// ══════════════════════════════════════════════════════
// SORTING
// ══════════════════════════════════════════════════════
function sortTable(table, key, direction) {
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));
    rows.sort((a, b) => {
        let valA = a.dataset[key] || '';
        let valB = b.dataset[key] || '';
        if (key === 'grade' || key === 'overall') {
            valA = parseFloat(valA);
            valB = parseFloat(valB);
        }
        if (valA < valB) return -1 * direction;
        if (valA > valB) return 1 * direction;
        return 0;
    });
    rows.forEach(row => tbody.appendChild(row));
}

function sortUserList(list, key) {
    return [...list].sort((a, b) => {
        let valA, valB;
        switch (key) {
            case 'email': valA = a.email.toLowerCase(); valB = b.email.toLowerCase(); break;
            case 'grade': valA = a.grade || 0; valB = b.grade || 0; break;
            case 'average': valA = calcOverallAverage(a.id); valB = calcOverallAverage(b.id); break;
            default: valA = a.name.toLowerCase(); valB = b.name.toLowerCase();
        }
        if (valA < valB) return -1;
        if (valA > valB) return 1;
        return 0;
    });
}

// ══════════════════════════════════════════════════════
// MODAL SYSTEM
// ══════════════════════════════════════════════════════
function openModal(html) {
  $('modalBox').innerHTML = html;
  $('modalOverlay').classList.add('open');
  selectedIntervOption = 'A';
}
function closeModal() { $('modalOverlay').classList.remove('open'); }
function closeModalIfOutside(e) { if (e.target === $('modalOverlay')) closeModal(); }

// ══════════════════════════════════════════════════════
// EXPOSED GLOBALS
// ══════════════════════════════════════════════════════
window.handleLogin = handleLogin;
window.handleLogout = handleLogout;
window.toggleNotifPanel = toggleNotifPanel;
window.navigateTo = navigateTo;
window.closeModal = closeModal;
window.closeModalIfOutside = closeModalIfOutside;
window.addSchool = addSchool;
window.openAddSchoolModal = openAddSchoolModal;
window.openEditSchoolModal = openEditSchoolModal;
window.saveSchoolEdit = saveSchoolEdit;
window.toggleSchoolStatus = toggleSchoolStatus;
window.toggleUserStatus = toggleUserStatus;
window.openEditUserModal = openEditUserModal;
window.saveUserEdit = saveUserEdit;
window.resetUserPassword = resetUserPassword;
window.openAddUserModal = openAddUserModal;
window.addUser = addUser;
window.openAddSubjectModal = openAddSubjectModal;
window.addSubject = addSubject;
window.approveIntervention = approveIntervention;
window.rejectIntervention = rejectIntervention;
window.toggleResource = toggleResource;
window.openAddResourceModal = openAddResourceModal;
window.addResource = addResource;
window.openAddAssessmentModal = openAddAssessmentModal;
window.addAssessment = addAssessment;
window.openEditAssessmentModal = openEditAssessmentModal;
window.saveAssessmentEdit = saveAssessmentEdit;
window.deleteAssessment = deleteAssessment;
window.addQuestionRow = addQuestionRow;
window.renderAssessmentsList = renderAssessmentsList;
window.onMarkSubjectChange = onMarkSubjectChange;
window.onMarkAssessChange = onMarkAssessChange;
window.onMarkInput = onMarkInput;
window.saveMarks = saveMarks;
window.buildAttendanceTable = buildAttendanceTable;
window.setAttendance = setAttendance;
window.saveAttendance = saveAttendance;
window.openInterventionModal = openInterventionModal;
window.selectIntervOption = selectIntervOption;
window.submitIntervention = submitIntervention;
window.updateProfile = updateProfile;