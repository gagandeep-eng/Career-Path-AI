CAREERPATH AI — UNIVERSITY PROJECT

Purpose: help students identify gaps between their current technical skills
and the skills listed for a chosen career, then create a practical learning plan.

How to run: extract the zip file and open index.html in a modern browser.
No installation, Python runtime, server, API key or package manager is required.

Files:
  index.html   Page structure, sidebar and accessible navigation
  styles.css   Responsive layout for desktop and mobile devices
  app.js       12 job role guides, role-specific assessments, recommendation logic,
               roadmap generation, local storage and sample placement reporting

How the analysis works:
  Match score = selected core skills / total core skills for a role * 100.
  The app ranks each career by this percentage. For the chosen role, it lists
  missing skills and estimates weeks of study using the selected weekly hours.
  Completing learning tasks updates roadmap progress and persists locally.

Limitations: this is a knowledge-based educational AI prototype, not a trained
machine learning model. Career requirements are illustrative, match scores are
not hiring predictions, and the placement dashboard uses fictional students.
The app stores the current assessment in browser localStorage, not a server.
