# Student Task Manager

## Project Description
Student Task Manager is a sleek, responsive, and lightweight web application designed to help students organize daily academic assignments, study goals, and projects. Built with pure HTML, CSS, and vanilla JavaScript, it runs entirely in the browser with zero backend or database overhead.

## Features
- 🚀 **Add Tasks**: Easily input new tasks or assignments.
- ✅ **Mark Complete**: Toggle completion status with dynamic visual updates.
- 🗑️ **Delete Tasks**: Remove unwanted or finished items.
- 📊 **Real-time Counter Cards**: Track Total, Completed, and Pending tasks dynamically.
- 💾 **Local Storage Persistence**: Saved tasks persist across page reloads.
- 📱 **Responsive Design**: Mobile-friendly layout with modern CSS styling and hover transitions.
- 🚫 **Empty Task Prevention**: Prevents blank entries from cluttering your list.
- 🎯 **Empty State Display**: Friendly illustration when no tasks are queued.

## Technologies Used
- **HTML5**: Semantic web markup.
- **CSS3**: Custom responsive styling with CSS variables and flexbox/grid.
- **JavaScript (ES6+)**: DOM manipulation and `localStorage` state management.
- **GitHub Actions**: Continuous Integration & Continuous Deployment (CI/CD).
- **Vercel**: Global static site deployment and hosting.

## Project Structure
```text
student-task-manager/
│
├── index.html              # Main HTML user interface
├── style.css               # Modern responsive styling
├── script.js               # Application logic & localStorage engine
├── vercel.json             # Vercel deployment configuration
├── .gitignore              # Git ignored files configuration
├── README.md               # Documentation & setup guide
│
└── .github/
    └── workflows/
        └── deploy.yml      # GitHub Actions CI/CD workflow pipeline
```

## How to Run Locally
1. Clone or download this repository to your computer.
2. Open `index.html` in any web browser (Google Chrome, Microsoft Edge, Firefox, etc.).
3. Alternatively, serve using VS Code extension like **Live Server** or run `npx serve` in your terminal.

## GitHub Actions CI/CD Pipeline
This repository is configured with automated CI/CD using GitHub Actions.

```text
Developer pushes code
        ↓
GitHub repository (main branch)
        ↓
GitHub Actions pipeline triggers
        ↓
Workflow checks out code & installs Vercel CLI
        ↓
Builds & deploys project to Vercel
        ↓
Live website updated automatically
```

## GitHub Secrets
Deployment credentials are kept strictly secure using GitHub Repository Secrets. No tokens or private credentials are stored in the source code.

Secrets used in this pipeline:
- `VERCEL_TOKEN`: Personal Access Token generated from Vercel account settings.
- `VERCEL_ORG_ID`: Vercel User or Organization ID.
- `VERCEL_PROJECT_ID`: Unique Vercel Project ID.

## Deployment
Hosted on Vercel's global CDN network for high performance and automatic HTTPS certificates.

## Automatic Deployment Test
Any push to the `main` branch automatically triggers the `.github/workflows/deploy.yml` workflow, rebuilding and updating the live site within seconds.

## Submission Details
- **GitHub Repository**: <ADD_GITHUB_URL>
- **Live Application**: <ADD_VERCEL_URL>
