export const projects = [
  {
    title: "AI Job Application Agent",
    subtitle: "AI-powered job application assistant",
    description:
      "Built an AI agent that analyzes resumes against job descriptions, identifies strengths and skill gaps, and generates tailored application materials.",
    impact:
      "Provides resume-job match scoring, requirement analysis, resume bullet improvements, and personalized cover letter generation.",
    technologies: ["Python", "OpenAI API", "Streamlit", "PDF Parsing", "JSON"],
    images: [
      "/job-agent-workflow.png",
      "/job-agent-analysis.png",
    ],
    github: "https://github.com/ethan-holley",
    isPrivate: false,
  },
  {
    title: "Spotify Insights App",
    subtitle: "Full-stack Spotify analytics dashboard",
    description:
      "Built and deployed a full-stack Spotify analytics app that uses Spotify OAuth 2.0 to generate personalized listening stats and Wrapped-style summaries. \
      Live demo uses Spotify OAuth. Public access may require the user to be added as a Spotify test user.",
    impact:
      "Allows users to securely connect their Spotify account, view top tracks and artists across multiple time ranges, and see a custom listening personality based on their music profile.",
    technologies: [
      "React",
      "TypeScript",
      "FastAPI",
      "Python",
      "Spotify Web API",
      "OAuth 2.0",
      "Vercel",
      "Render",
    ],
    images: [
      "/spotify-connect.png",
      "/spotify-stats.png",
      "/spotify-wrapped.png",
    ],
    github: "https://github.com/ethan-holley/spotify-insights-app",
    liveDemo: "https://spotify-insights-app-nu.vercel.app",
    isPrivate: false,
  },
  {
    title: "Football Web Scraper",
    subtitle: "Automated recruiting analytics pipeline",
    description:
      "Built a Python-based data pipeline that collects football recruiting data, processes weekly performance metrics, and supports roster analysis workflows.",
    impact:
      "Reduced manual analytics work from days to about 20 minutes per week.",
    technologies: ["Python", "Pandas", "Google Sheets", "GitHub Actions"],
    images: ["/football-workflow.png"],
    github: "",
    isPrivate: true,
  },
];