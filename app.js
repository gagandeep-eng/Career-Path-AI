/* CareerPath AI — a transparent, knowledge-based career recommendation engine.
   All assessment data stays in the browser for this university project prototype. */
const roles = [
  {id:'frontend',name:'Frontend Developer',icon:'</>',category:'Web development',description:'Create responsive, accessible websites and interactive user interfaces.',skills:['HTML & CSS','JavaScript','Git & GitHub','React','UI/UX basics','API integration','Responsive design'],project:'Build a responsive campus services dashboard using a public API.',cert:'Frontend development certificate or a verified web-development portfolio.'},
  {id:'fullstack',name:'Full-Stack Developer',icon:'{ }',category:'Software development',description:'Build complete applications, from the user interface to databases and APIs.',skills:['HTML & CSS','JavaScript','Git & GitHub','React','SQL','Backend development','API integration','Testing'],project:'Build a student task tracker with sign-in, a database and REST API.',cert:'Full-stack development coursework with a deployed capstone project.'},
  {id:'data',name:'Data Analyst',icon:'▥',category:'Data & analytics',description:'Turn raw information into charts, business insights and decisions.',skills:['Python','SQL','Excel','Statistics','Data visualization','Pandas','Communication'],project:'Analyze a public education dataset and present an interactive report.',cert:'Data analytics certificate with spreadsheet, SQL and dashboard exercises.'},
  {id:'ai',name:'AI / ML Engineer',icon:'✦',category:'Artificial intelligence',description:'Develop models that learn from data and make useful predictions.',skills:['Python','Statistics','Linear algebra','Pandas','Machine learning','Git & GitHub','Model evaluation'],project:'Train and evaluate a model that predicts a non-sensitive outcome using public data.',cert:'Machine learning course certificate with a documented model evaluation project.'},
  {id:'cyber',name:'Cybersecurity Analyst',icon:'◇',category:'Security',description:'Protect systems, identify security risks and investigate threats.',skills:['Networking','Linux','Python','Security fundamentals','Log analysis','Git & GitHub','Communication'],project:'Create a defensive security checklist and analyze simulated security logs.',cert:'Entry-level cybersecurity fundamentals course or certificate.'},
  {id:'cloud',name:'Cloud / DevOps Engineer',icon:'☁',category:'Infrastructure',description:'Automate testing and deployment, and manage reliable infrastructure.',skills:['Linux','Networking','Git & GitHub','Python','Docker','CI/CD','Cloud fundamentals'],project:'Containerize a simple website and automate its build and test process.',cert:'Cloud fundamentals certificate with a small deployment project.'}
];
// A broader job catalogue lets students explore both coding and non-coding paths.
roles.push(
  {id:'software',name:'Software Engineer',icon:'{S}',category:'Software development',description:'Design reliable software, solve problems and maintain applications.',skills:['Programming fundamentals','Data structures & algorithms','Object-oriented programming','Git & GitHub','SQL','Testing','Communication'],project:'Build and test a command-line library management system.',cert:'Programming foundations and software engineering coursework with a tested portfolio project.'},
  {id:'backend',name:'Backend Developer',icon:'▰',category:'Web development',description:'Develop the server-side services, databases and APIs behind applications.',skills:['Programming fundamentals','Python','SQL','Backend development','API integration','Git & GitHub','Testing','Security fundamentals'],project:'Build a REST API for campus events with database storage and authentication.',cert:'Backend development coursework covering databases, APIs and testing.'},
  {id:'mobile',name:'Mobile App Developer',icon:'▯',category:'Software development',description:'Build intuitive applications for Android and iOS devices.',skills:['Programming fundamentals','Mobile app development','UI/UX basics','API integration','Git & GitHub','Testing','Responsive design'],project:'Create a mobile campus timetable app with reminders and offline data.',cert:'Mobile app development course with a functioning Android or iOS portfolio project.'},
  {id:'dataengineer',name:'Data Engineer',icon:'▥',category:'Data & analytics',description:'Build reliable data pipelines and maintain the systems that make data usable.',skills:['Python','SQL','Data pipelines','Database design','Linux','Git & GitHub','Cloud fundamentals'],project:'Build a pipeline that loads, cleans and stores public CSV data for reporting.',cert:'Data engineering fundamentals coursework with a documented pipeline project.'},
  {id:'designer',name:'UI/UX Designer',icon:'◐',category:'Design',description:'Research user needs and design useful, attractive digital experiences.',skills:['UI/UX basics','User research','Wireframing & prototyping','Visual design','Accessibility','Communication','Usability testing'],project:'Research and redesign the university student portal, testing a clickable prototype.',cert:'UX design coursework with a case study and user research evidence.'},
  {id:'qa',name:'QA / Test Engineer',icon:'✓',category:'Software development',description:'Find defects, improve product quality and automate repeatable software tests.',skills:['Testing','Test automation','Programming fundamentals','API integration','SQL','Git & GitHub','Communication'],project:'Create a test plan and automated checks for a sample e-commerce website.',cert:'Software testing fundamentals course or entry-level testing certification.'}
);

// Role descriptions are illustrative entry-level expectations, not live hiring data.
const roleGuides = {
  frontend: {fit:'Enjoy visual problem-solving and creating interfaces.',tools:'HTML, CSS, JavaScript, React, browser DevTools, Git',tasks:['Build responsive pages','Connect interfaces to APIs','Improve accessibility and performance'],bonus:['TypeScript','Web accessibility','Unit testing']},
  fullstack: {fit:'Enjoy connecting interfaces, databases and server logic.',tools:'JavaScript, React, Node.js or Python, SQL, Git',tasks:['Build frontend and backend features','Design data models and endpoints','Test and deploy applications'],bonus:['TypeScript','Docker','Authentication']},
  data: {fit:'Enjoy asking questions, finding patterns and explaining numbers.',tools:'Python, SQL, Excel, pandas, Power BI or Tableau',tasks:['Clean and query datasets','Create reports and dashboards','Explain findings to stakeholders'],bonus:['Power BI','Business metrics','Data storytelling']},
  ai: {fit:'Enjoy mathematics, experiments and learning from data.',tools:'Python, pandas, scikit-learn, Jupyter, Git',tasks:['Prepare training data','Build and evaluate models','Document limitations and results'],bonus:['PyTorch','TensorFlow','Model deployment']},
  cyber: {fit:'Enjoy investigating problems and thinking about system safety.',tools:'Linux, Python, Wireshark, SIEM practice tools',tasks:['Review security alerts','Identify and document risks','Support defensive security measures'],bonus:['Incident response','Threat modeling','Security auditing']},
  cloud: {fit:'Enjoy automation, infrastructure and reliable systems.',tools:'Linux, Git, Docker, CI/CD tools, cloud platforms',tasks:['Automate build and deployment','Configure infrastructure','Monitor service reliability'],bonus:['Kubernetes','Infrastructure as code','Monitoring']},
  software: {fit:'Enjoy logic, algorithms and solving real-world problems with code.',tools:'Python, Java or C++, Git, IDEs, SQL',tasks:['Design and implement software','Solve coding problems','Debug, test and review code'],bonus:['System design','Operating systems','Computer networks']},
  backend: {fit:'Enjoy data, server logic and building reliable services.',tools:'Python or JavaScript, Flask/Django or Express, SQL, Postman',tasks:['Develop APIs','Design and query databases','Validate inputs and handle errors'],bonus:['Caching','Docker','Authentication']},
  mobile: {fit:'Enjoy mobile experiences, interfaces and device-specific features.',tools:'Kotlin/Java, Swift or Dart/Flutter, Android Studio',tasks:['Build mobile screens','Integrate local storage and APIs','Test on small and large devices'],bonus:['App publishing','Push notifications','State management']},
  dataengineer: {fit:'Enjoy organizing data and making repetitive processes reliable.',tools:'Python, SQL, PostgreSQL, Linux, ETL tools',tasks:['Extract and transform data','Maintain pipelines','Check data quality and reliability'],bonus:['Apache Spark','Airflow','Data warehouses']},
  designer: {fit:'Enjoy creativity, visual design and understanding users.',tools:'Figma, design systems, prototyping and research tools',tasks:['Interview and observe users','Create wireframes and prototypes','Test and improve usability'],bonus:['Interaction design','Design systems','UX writing']},
  qa: {fit:'Enjoy finding edge cases, checking details and improving quality.',tools:'Postman, Playwright or Selenium, SQL, Git',tasks:['Write test cases','Reproduce and report bugs','Run manual and automated tests'],bonus:['Performance testing','CI/CD','Accessibility testing']}
};
const skills = [...new Set(roles.flatMap(role => role.skills))].sort();
const activities = {
  'HTML & CSS':'Build a semantic webpage with Flexbox and CSS Grid.', 'JavaScript':'Practice functions, DOM events and validation; build a small interactive page.',
  'Git & GitHub':'Create a repository, practice commits, branches and pull requests.', 'React':'Build a component-based application with state and props.',
  'UI/UX basics':'Create a wireframe and test it for usability and accessibility.', 'API integration':'Fetch JSON from a public API and handle loading and error states.',
  'Responsive design':'Make a page work at mobile, tablet and desktop widths.', 'SQL':'Practice SELECT, JOIN, GROUP BY and table design with a sample database.',
  'Backend development':'Build a small REST API with input validation.', 'Testing':'Write test cases for core user actions and fix discovered bugs.',
  'Python':'Practice variables, loops, functions, lists and dictionaries; solve 10 exercises.', 'Excel':'Clean tabular data, use formulas and create a pivot table.',
  'Statistics':'Practice mean, variance, probability and interpreting distributions.', 'Data visualization':'Build a clear chart and explain the insight it communicates.',
  'Pandas':'Load a CSV, clean missing values and summarize grouped data.', 'Communication':'Write a short project explanation and practice presenting it aloud.',
  'Linear algebra':'Review vectors, matrices and dot products with Python exercises.', 'Machine learning':'Train a baseline classification or regression model using a public dataset.',
  'Model evaluation':'Use a train/test split and suitable metrics; explain model limitations.', 'Networking':'Learn IP addressing, DNS, HTTP and network architecture.',
  'Linux':'Practice navigating files and basic permissions in a local terminal.', 'Security fundamentals':'Study authentication, secure passwords and common web vulnerabilities using legal labs.',
  'Log analysis':'Review simulated system logs and identify unusual events.', 'Docker':'Write a Dockerfile and run a containerized local application.',
  'CI/CD':'Write a workflow that automatically checks code when changes are committed.', 'Cloud fundamentals':'Learn compute, storage, IAM and deployment concepts using a sandbox.',
  'Programming fundamentals':'Practice variables, conditionals, loops, functions and debugging in one language.',
  'Data structures & algorithms':'Implement arrays, stacks, queues and searching; solve beginner coding exercises.',
  'Object-oriented programming':'Create classes and objects, and practice encapsulation and inheritance.',
  'Mobile app development':'Build a mobile screen and connect it to a second screen with shared state.',
  'Data pipelines':'Write a script that reads, transforms, validates and saves a dataset.',
  'Database design':'Design related tables with primary and foreign keys and test queries.',
  'User research':'Interview volunteer users about a campus problem and summarize their needs.',
  'Wireframing & prototyping':'Sketch a user flow and create a clickable prototype.',
  'Visual design':'Practice typography, spacing, contrast and consistent components.',
  'Accessibility':'Check keyboard navigation, color contrast and meaningful labels.',
  'Usability testing':'Ask volunteers to complete a prototype task and document problems.',
  'Test automation':'Automate a basic user journey and verify expected results.'
};
const defaultProfile = {name:'',year:'1st year',interest:'auto',hours:5,skills:[],assessed:false,completed:[]};
function loadProfile(){try{return {...defaultProfile,...JSON.parse(localStorage.getItem('careerpath-profile')||'{}')}}catch{return {...defaultProfile}}}
let profile = loadProfile();
const $ = id => document.getElementById(id);
const esc = value => String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function save(){try{localStorage.setItem('careerpath-profile',JSON.stringify(profile))}catch{}}
function score(role,known=profile.skills){return Math.round(role.skills.filter(s=>known.includes(s)).length/role.skills.length*100)}
function ranked(){return [...roles].sort((a,b)=>score(b)-score(a))}
function target(){return roles.find(r=>r.id===profile.interest)||ranked()[0]}
function gaps(role=target()){return role.skills.filter(skill=>!profile.skills.includes(skill))}
function plan(){const role=target();const missing=gaps(role);return [...missing.map(s=>({id:role.id+':'+s,title:s,description:activities[s],duration:Math.max(1,Math.ceil(6/profile.hours))})),{id:role.id+':project',title:'Build a portfolio project',description:role.project,duration:Math.max(1,Math.ceil(12/profile.hours))},{id:role.id+':placement',title:'Prepare for placements',description:'Update your CV, prepare a project demo, practice aptitude and interview questions, and review the suggested certification.',duration:Math.max(1,Math.ceil(5/profile.hours))}]}
function progress(){const steps=plan();return Math.round(steps.filter(s=>profile.completed.includes(s.id)).length/steps.length*100)}
function heading(title,description,action=''){return `<div class="page-heading"><div><h1>${title}</h1><p>${description}</p></div>${action}</div>`}
function bar(pct,green=false){return `<div class="bar ${green?'green':''}" role="progressbar" aria-valuenow="${pct}" aria-valuemin="0" aria-valuemax="100"><span style="width:${pct}%"></span></div>`}
function metric(label,value,icon,color=''){return `<div class="metric"><span class="metric-icon ${color}">${icon}</span><div><small>${label}</small><strong>${value}</strong></div></div>`}
function empty(title,description){return `<div class="card empty"><div class="empty-icon">⌖</div><h2>${title}</h2><p>${description}</p><a class="button" href="#assessment">Start skill assessment</a></div>`}
function roleMini(role){return `<div class="role-mini"><span class="role-icon">${esc(role.icon)}</span><div><h3>${role.name}</h3><p>${role.category}</p></div><span class="match">${profile.assessed?score(role)+'% match':'Explore'}</span></div>`}
function renderDashboard(){const role=target();$('dashboard').innerHTML=heading(`Welcome${profile.name?', '+esc(profile.name.split(' ')[0]):', student'}!`,'Turn your strengths into a clear path to placement.')+`<div class="hero"><div class="hero-content"><div class="hero-tag">✦ YOUR PERSONAL CAREER GUIDE</div><h2>Your future, in focus.</h2><p>Explore job roles, discover the skills they require, and build a roadmap designed around you.</p><a class="button light" href="#assessment">${profile.assessed?'Update my assessment':'Start my assessment'}</a></div><div class="hero-art" aria-hidden="true"><div class="orbit"></div><div class="orbit b"></div><div class="center">✦</div><div class="float one"><b>⌖</b> Find your fit</div><div class="float two"><b>▥</b> Skill insights</div><div class="float three"><b>✓</b> Get job-ready</div><span class="spark">✧</span></div></div><div class="metrics">${metric('Skill match',profile.assessed?score(role)+'%':'—','◈')}${metric('Skills to learn',profile.assessed?gaps(role).length:'—','⌖','orange')}${metric('Roadmap progress',profile.assessed?progress()+'%':'—','✓','green')}</div><div class="dashboard-grid"><div class="card"><div class="card-header"><div><h2>${profile.assessed?'Your top career matches':'Explore career paths'}</h2><p>${profile.assessed?'Ranked by your selected skills':'Twelve job roles to discover your potential'}</p></div><a class="text-link" href="#careers">View all</a></div>${(profile.assessed?ranked():[roles[0],roles[2],roles[3]]).slice(0,3).map(roleMini).join('')}</div><div class="card"><div class="card-header"><h2>Your next step</h2><span class="pill">${profile.assessed?'Personalized':'Start here'}</span></div>${profile.assessed?`<h3>${role.name}</h3><p class="muted">${gaps(role).length?`Focus on ${esc(gaps(role)[0])} first.`:'You have selected all listed core skills. Start your capstone project.'}</p><div class="progress-row"><span>Roadmap progress</span><span>${progress()}%</span></div>${bar(progress(),true)}<a href="#roadmap" class="button ghost" style="margin-top:18px">View my roadmap</a>`:`<div class="empty"><div class="empty-icon">⌖</div><h3>Know where you stand</h3><p>Complete a short assessment to see your personalized skill gaps and learning plan.</p><a href="#assessment" class="button ghost">Take assessment</a></div>`}</div></div>`}
function renderAssessment() {
  $('assessment').innerHTML = heading('Skill assessment','Select your target job role and assess your skills.') + `
    <div class="form-layout">
      <form id="assessmentForm" class="card">
        <div class="form-section"><h3>1. Your student profile</h3><div class="field-grid">
          <label class="field">Your name (optional)<input name="name" maxlength="60" placeholder="e.g. Student" value="${esc(profile.name)}"></label>
          <label class="field">Year of study<select name="year">${['1st year','2nd year','3rd year','4th year','Graduate'].map(v=>`<option ${profile.year===v?'selected':''}>${v}</option>`).join('')}</select></label>
        </div></div>
        <div class="form-section"><h3>2. Which job role do you want to enter?</h3>
          <div class="field-grid">
            <label class="field">Target job role<select name="interest" id="targetRole"><option value="auto" ${profile.interest==='auto'?'selected':''}>Not sure — recommend a career</option>${roles.map(r=>`<option value="${r.id}" ${profile.interest===r.id?'selected':''}>${r.name}</option>`).join('')}</select></label>
            <label class="field">Study time per week<select name="hours">${[3,5,8,10,15].map(h=>`<option value="${h}" ${profile.hours===h?'selected':''}>${h} hours</option>`).join('')}</select></label>
          </div><div id="targetPreview" class="role-preview"></div>
          <a class="text-link" href="#careers">Explore all job roles and their requirements</a>
        </div>
        <div class="form-section"><h3>3. Your existing skills</h3>
          <p>Check only skills you can use independently. Unchecked skills required by your chosen role become your learning priorities.</p>
          <label class="skill-filter" id="skillFilterLabel"><input type="checkbox" id="skillFilter" checked> Show only skills required for my target role</label>
          <div id="assessmentCount" class="muted" aria-live="polite"></div>
          <div class="skill-grid" id="assessmentSkills">${skills.map(s=>`<label class="skill-pick" data-skill="${esc(s)}"><input type="checkbox" name="skills" value="${esc(s)}" ${profile.skills.includes(s)?'checked':''}><span>${esc(s)}</span><span class="required-dot" title="Required for chosen role"></span></label>`).join('')}</div>
        </div><button class="button" type="submit">✦ Analyze my skills</button>
      </form>
      <aside class="card"><h2>How analysis works</h2><ul class="help-list"><li><b>01</b> Compare your chosen skills with the core requirements of each career.</li><li><b>02</b> Rank potential careers by the percentage of skills you already have.</li><li><b>03</b> Prioritize missing skills and estimate a roadmap from your available study hours.</li></ul><div class="notice"><strong>Good to know</strong><br>This educational prototype uses a transparent rule-based recommendation engine, not a live AI model or current job-market feed. Your data is saved on this device.</div></aside>
    </div>`;
  const form = $('assessmentForm');
  function updateRolePreview(){
    const role = roles.find(r=>r.id===$('targetRole').value);
    const checked = [...form.querySelectorAll('input[name="skills"]:checked')].map(input=>input.value);
    $('targetPreview').innerHTML = role ? `<div class="role-preview-head"><span class="role-icon">${esc(role.icon)}</span><div><h3>${role.name}</h3><p>${role.description}</p></div></div><div class="skills-list">${role.skills.map(s=>`<span class="pill ${checked.includes(s)?'green':'orange'}">${checked.includes(s)?'✓ ':''}${esc(s)}</span>`).join('')}</div><p class="muted" style="margin-top:10px">${checked.filter(s=>role.skills.includes(s)).length} of ${role.skills.length} core skills selected</p>` : '<p>Not sure which job to pursue? Select all the skills you know and we will compare your match across all roles.</p>';
    $('skillFilterLabel').hidden = !role;
    form.querySelectorAll('[data-skill]').forEach(label=>{
      const required = !!role && role.skills.includes(label.dataset.skill);
      label.classList.toggle('role-required',required);
      label.hidden = !!role && $('skillFilter').checked && !required;
    });
    $('assessmentCount').textContent = `${checked.length} skill${checked.length===1?'':'s'} selected in total. Selections are preserved when changing roles.`;
  }
  $('targetRole').onchange = updateRolePreview;
  $('skillFilter').onchange = updateRolePreview;
  form.querySelectorAll('[name="skills"]').forEach(input=>input.onchange=updateRolePreview);
  updateRolePreview();
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const data=new FormData(form);
    profile={...profile,name:String(data.get('name')).trim(),year:data.get('year'),interest:data.get('interest'),hours:Number(data.get('hours')),skills:data.getAll('skills'),assessed:true};
    save();showToast('Your skill analysis is ready.');location.hash='analysis';renderAll();
  });
}
function renderAnalysis(){const page=$('analysis');if(!profile.assessed){page.innerHTML=heading('Skill gap analysis','Understand your current strengths and missing skills.')+empty('Your insights are waiting','Take the assessment to calculate your career match and receive actionable recommendations.');return}const role=target(),pct=score(role),missing=gaps(role),known=role.skills.filter(s=>profile.skills.includes(s));page.innerHTML=heading('Skill gap analysis',`Your personalized evaluation for ${role.name}.`,'<a href="#assessment" class="button secondary">Edit assessment</a>')+`<div class="metrics">${metric('Career match',pct+'%','◈')}${metric('Core skills covered',known.length+'/'+role.skills.length,'✓','green')}${metric('Skills to learn',missing.length,'⌖','orange')}</div><div class="analysis-grid"><div class="card"><div class="card-header"><h2>Placement readiness</h2><span class="pill">Skill coverage</span></div><div class="ring-wrap"><div class="ring" style="--pct:${pct}%"><span>${pct}%<small>Match score</small></span></div><div><h3>${role.name}</h3><p class="muted">${pct>=80?'Strong foundation':pct>=50?'Growing foundation':'Start building your foundation'}</p><p class="muted">${known.length} of ${role.skills.length} core skills</p></div></div><div class="notice">This score is a self-reported skill coverage estimate, not an employment prediction or a certification of ability.</div></div><div class="card"><h2>Other career matches</h2>${ranked().map(r=>`<div class="progress-row"><span>${r.name}</span><span>${score(r)}%</span></div>${bar(score(r))}`).join('')}</div></div><div class="analysis-grid"><div class="card"><h2>Skills you already have</h2>${known.length?known.map(s=>`<div class="skill-row"><span>${esc(s)}</span><span class="pill green">✓ Covered</span></div>`).join(''):'<p style="margin-top:14px">No core skills selected for this role yet.</p>'}</div><div class="card"><h2>Priority skills to learn</h2>${missing.length?missing.map((s,i)=>`<div class="skill-row"><span>${esc(s)}</span><span class="pill orange">${i<2?'Start here':'Next'}</span></div>`).join(''):'<p style="margin-top:14px">All listed core skills covered. Focus on project work and interviews.</p>'}</div></div><a class="button" href="#roadmap">View personalized roadmap</a>`}
function renderRoadmap(){const page=$('roadmap');if(!profile.assessed){page.innerHTML=heading('My learning roadmap','Build skills step by step at your own pace.')+empty('Create your personal roadmap','Let the recommendation engine identify the skills you need to learn.');return}const steps=plan(),role=target(),total=steps.reduce((sum,s)=>sum+s.duration,0);page.innerHTML=heading('My learning roadmap',`${role.name} · ${profile.hours} hours per week · Approx. ${total} weeks`,'<button class="button secondary" id="downloadPlan">Download plan</button>')+`<div class="card"><div class="card-header"><div><h2>Your learning journey</h2><p>Complete tasks as you learn. Your progress is saved on this device.</p></div><span class="pill green">${progress()}% done</span></div>${bar(progress(),true)}</div><div class="roadmap-list">${steps.map((s,i)=>`<div class="card step ${profile.completed.includes(s.id)?'done':''}"><span class="step-number">${profile.completed.includes(s.id)?'✓':i+1}</span><div class="step-content"><span class="pill">${s.duration} week${s.duration>1?'s':''} estimated</span><h3 style="margin-top:7px">${esc(s.title)}</h3><p>${esc(s.description)}</p></div><label class="step-check"><input type="checkbox" data-step="${esc(s.id)}" ${profile.completed.includes(s.id)?'checked':''} aria-label="Mark ${esc(s.title)} complete"> Done</label></div>`).join('')}</div><div class="card" style="margin-top:18px"><h2>Certification & portfolio guidance</h2><p style="margin-top:10px">${esc(role.cert)} Choose a course that includes practical assessments; verify current course cost, syllabus and recognition before enrolling.</p></div>`;page.querySelectorAll('[data-step]').forEach(box=>box.onchange=()=>{profile.completed=box.checked?[...new Set([...profile.completed,box.dataset.step])]:profile.completed.filter(id=>id!==box.dataset.step);save();renderAll();showToast(box.checked?'Milestone completed!':'Milestone reopened.')} );$('downloadPlan').onclick=()=>download('careerpath-roadmap.txt',`${role.name} learning roadmap\nStudent: ${profile.name||'Student'}\nWeekly study time: ${profile.hours} hours\n\n${steps.map((s,i)=>`${i+1}. ${s.title} (${s.duration} week(s)) ${profile.completed.includes(s.id)?'[Done]':''}\n${s.description}`).join('\n\n')}\n\nCertification guidance: ${role.cert}`,'text/plain')}
function renderCareers(){
  const page=$('careers');
  const categories=[...new Set(roles.map(r=>r.category))].sort();
  page.innerHTML=heading('Job role explorer','Find your target job and understand what it takes to get there.')+`
    <div class="card explorer-banner"><div class="role-icon">▣</div><div><h2>Choose the career that suits you</h2><p>Explore ${roles.length} entry-level career paths, core skills, tools, responsibilities and portfolio projects.</p></div><span class="pill">${roles.length} job roles</span></div>
    <div class="card explorer-controls">
      <label class="field">Search job roles or skills<input type="search" id="roleSearch" placeholder="e.g. Python, developer, design"></label>
      <label class="field">Career category<select id="roleCategory"><option value="all">All categories</option>${categories.map(c=>`<option value="${esc(c)}">${esc(c)}</option>`).join('')}</select></label>
      <label class="field">Sort by<select id="roleSort"><option value="default">Featured roles</option><option value="match" ${profile.assessed?'':'disabled'}>Highest skill match</option><option value="name">Job title (A–Z)</option></select></label>
    </div>
    <p id="roleCount" class="section-title muted" aria-live="polite"></p><div class="career-grid" id="roleCards"></div>
    <div class="notice">These are illustrative entry-level skill guides. Always compare them against the specific job description before applying.</div>`;
  function drawRoles(){
    const query=$('roleSearch').value.trim().toLowerCase(),category=$('roleCategory').value,sort=$('roleSort').value;
    let filtered=roles.filter(r=>(category==='all'||r.category===category)&&[r.name,r.description,r.category,...r.skills,roleGuides[r.id].tools,...roleGuides[r.id].bonus].join(' ').toLowerCase().includes(query));
    if(sort==='match')filtered.sort((a,b)=>score(b)-score(a));
    if(sort==='name')filtered.sort((a,b)=>a.name.localeCompare(b.name));
    $('roleCount').textContent=`Showing ${filtered.length} of ${roles.length} job roles`;
    $('roleCards').innerHTML=filtered.map(r=>{
      const guide=roleGuides[r.id];
      return `<article class="card career-card role-card">
        <div class="role-card-top"><span class="role-icon">${esc(r.icon)}</span>${profile.interest===r.id?'<span class="pill green">✓ Your target role</span>':''}</div>
        <div><h2>${r.name}</h2><span class="muted">${r.category}</span></div><p>${r.description}</p>
        ${profile.assessed?`<div><div class="progress-row"><span>Your skill match</span><span>${score(r)}%</span></div>${bar(score(r))}</div>`:''}
        <div><h3 class="mini-label">Required core skills</h3><div class="skills-list">${r.skills.map(s=>`<span class="pill ${profile.skills.includes(s)?'green':''}">${profile.skills.includes(s)?'✓ ':''}${esc(s)}</span>`).join('')}</div></div>
        <details class="role-details"><summary>View full role guide</summary>
          <div class="role-detail-content"><h3>Is this role for you?</h3><p>${guide.fit}</p><h3>Typical responsibilities</h3><ul>${guide.tasks.map(t=>`<li>${t}</li>`).join('')}</ul>
          <h3>Languages & tools</h3><p>${guide.tools}</p><h3>Skills to learn next (optional)</h3><div class="skills-list">${guide.bonus.map(s=>`<span class="pill">${s}</span>`).join('')}</div>
          <h3>Portfolio project</h3><p>${r.project}</p><h3>Certification guidance</h3><p>${r.cert}</p></div>
        </details>
        <button class="button ${profile.interest===r.id?'ghost':'secondary'}" data-role="${r.id}">${profile.interest===r.id?'Assess this role':'Choose this job role'}</button>
      </article>`;
    }).join('')||'<div class="card empty"><h2>No matching job roles</h2><p>Try another skill, job title or category.</p><button class="button secondary" id="clearRoles">Clear filters</button></div>';
    page.querySelectorAll('[data-role]').forEach(b=>b.onclick=()=>{profile.interest=b.dataset.role;save();location.hash='assessment';renderAll();showToast('Target job role selected. Review your skills.');});
    if($('clearRoles'))$('clearRoles').onclick=()=>{$('roleSearch').value='';$('roleCategory').value='all';drawRoles();};
  }
  $('roleSearch').oninput=drawRoles;
  $('roleCategory').onchange=$('roleSort').onchange=drawRoles;
  drawRoles();
}
// A small fictional cohort demonstrates how placement teams can inspect common gaps.
const demoStudents=[{name:'Demo student A',role:'frontend',skills:['HTML & CSS','JavaScript','Git & GitHub']},{name:'Demo student B',role:'data',skills:['Python','Excel','Statistics']},{name:'Demo student C',role:'fullstack',skills:['HTML & CSS','JavaScript','SQL','Git & GitHub']},{name:'Demo student D',role:'ai',skills:['Python','Statistics','Pandas','Git & GitHub']},{name:'Demo student E',role:'cyber',skills:['Linux','Networking','Python']}];
function renderPlacement(){const students=[...demoStudents,...(profile.assessed?[{name:profile.name||'Your assessment',role:target().id,skills:profile.skills}]:[])].map(s=>({...s,career:roles.find(r=>r.id===s.role)}));const counts={};students.forEach(s=>s.career.skills.filter(k=>!s.skills.includes(k)).forEach(k=>counts[k]=(counts[k]||0)+1));const common=Object.entries(counts).sort((a,b)=>b[1]-a[1]).slice(0,6);const avg=Math.round(students.reduce((sum,s)=>sum+score(s.career,s.skills),0)/students.length);$('placement').innerHTML=heading('Placement dashboard','Identify training needs across student assessments.','<button class="button secondary" id="exportReport">Export CSV</button>')+`<div class="notice" style="margin:0 0 18px"><strong>Demonstration dashboard:</strong> Five fictional students plus your assessment (if completed). This is not connected to any university records.</div><div class="metrics">${metric('Sample students',students.length,'▤')}${metric('Average skill coverage',avg+'%','◈')}${metric('Core gaps identified',Object.keys(counts).length,'⌖','orange')}</div><div class="dashboard-grid"><div class="card"><h2>Student readiness</h2><div class="table-scroll"><table><thead><tr><th>Student</th><th>Career goal</th><th>Coverage</th></tr></thead><tbody>${students.map(s=>`<tr><td>${esc(s.name)}</td><td>${s.career.name}</td><td><span class="pill ${score(s.career,s.skills)>=60?'green':'orange'}">${score(s.career,s.skills)}%</span></td></tr>`).join('')}</tbody></table></div></div><div class="card"><h2>Common skill gaps</h2><p class="muted" style="margin-top:6px">Number of sample students missing each skill.</p>${common.map(([s,n])=>`<div class="progress-row"><span>${esc(s)}</span><span>${n}</span></div>${bar(Math.round(n/students.length*100))}`).join('')}<div class="notice">Suggested training focus: ${esc(common.slice(0,2).map(([s])=>s).join(' and ')||'Portfolio practice')}.</div></div></div>`;$('exportReport').onclick=()=>{const csv=v=>'"'+String(v).replace(/^[=+@-]/,"'$&").replace(/"/g,'""')+'"';download('careerpath-sample-report.csv',['Student,Goal,Coverage (%),Missing skills',...students.map(s=>[s.name,s.career.name,score(s.career,s.skills),s.career.skills.filter(k=>!s.skills.includes(k)).join('; ')].map(csv).join(','))].join('\n'),'text/csv')}}
function download(filename,content,type){const url=URL.createObjectURL(new Blob([content],{type}));const link=document.createElement('a');link.href=url;link.download=filename;link.click();setTimeout(()=>URL.revokeObjectURL(url),1000)}
const pages={dashboard:'Overview',assessment:'Skill assessment',analysis:'Skill gap analysis',roadmap:'My roadmap',careers:'Job role explorer',placement:'Placement dashboard'};
function renderAll(){renderDashboard();renderAssessment();renderAnalysis();renderRoadmap();renderCareers();renderPlacement();$('profileName').textContent=profile.name||'Student';$('avatar').textContent=$('mobileProfile').textContent=(profile.name||'Student').charAt(0).toUpperCase();navigate()}
function navigate(){const key=location.hash.slice(1);const active=Object.hasOwn(pages,key)?key:'dashboard';Object.keys(pages).forEach(id=>{$(id).hidden=id!==active});document.querySelectorAll('nav a').forEach(a=>{a.classList.toggle('active',a.dataset.page===active);if(a.dataset.page===active)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')});$('breadcrumb').textContent=pages[active];closeNav()}
function closeNav(){$('sidebar').classList.remove('open');$('overlay').classList.remove('visible');$('menuToggle').setAttribute('aria-expanded','false')}
function openNav(){$('sidebar').classList.add('open');$('overlay').classList.add('visible');$('menuToggle').setAttribute('aria-expanded','true')}
let toastTimer;function showToast(message){$('toast').textContent=message;$('toast').hidden=false;clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('toast').hidden=true,2800)}
$('menuToggle').onclick=()=> $('sidebar').classList.contains('open')?closeNav():openNav();$('overlay').onclick=closeNav;$('profileButton').onclick=$('mobileProfile').onclick=()=>{location.hash='assessment'};document.addEventListener('keydown',e=>{if(e.key==='Escape')closeNav()});window.addEventListener('hashchange',()=>{navigate();window.scrollTo(0,0)});renderAll();
