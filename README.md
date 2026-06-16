# Digital Visitor Management System for SP Office

Small static web project for tracking visitors at the SP Office. This repository contains a simple client-side implementation (HTML/CSS/JS) intended as a demo or lightweight kiosk UI.

## Contents

- `index.html` - main entry page / UI
- `admin_dashboard.html` - admin view
- `script.js` / `data.js` - application logic and sample data
- `style.css` - styling
- `Admin/`, `Query/`, `Visitor/` - placeholder folders for server-side or feature files

## How to run

Open `index.html` in a browser (double-click or serve via a static file server). No build tools or dependencies required.

## Quick analysis

- Project type: static front-end prototype (vanilla HTML/CSS/JS).
- Strengths: Simple, easy to run locally, minimal dependencies.
- Gaps: No backend or persistence (data is stored in client-side JS), no authentication, no input validation, and no protection against tampering.

## Suggested next steps

1. Add a backend API to store visitor records (Node/Express, Flask, or similar) and replace `data.js` with API calls.
2. Implement form validation and server-side checks for security.
3. Add authentication for the admin dashboard and role-based access control.
4. Add simple tests and a CI workflow to validate basic functionality.

## Notes for pushing to GitHub

- Repository URL provided by user: https://github.com/Abdulwahid17006/Digital-Visitor-Management-System
- To publish the project: initialize git in the `SelectionSet` folder, commit files, add the remote, then push (commands provided below).

## License

Add a license file if you want a specific license; otherwise consider `MIT` for permissive usage.

---

If you want, I can: create a lightweight backend starter, add a license file, or create a GitHub Actions CI workflow.
