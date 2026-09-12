// Edit everything about the site here.

export type Link = { label: string; href: string };

export type Project = {
  title: string;
  period?: string;
  description: string;
  highlights: string[];
  tags: string[];
  href?: string;
};

export type Role = {
  role: string;
  org: string;
  period: string;
  highlights: string[];
};

export const profile = {
  name: "Torazo Tokuda",
  tagline:
    "CS & Math at Harvey Mudd. I do prediction-market research, ML, and robotics, and I build products people actually use.",
  location: "Claremont, CA",
  email: "torazo.tokuda@gmail.com",
  about: [
    "I'm starting at Harvey Mudd College with an intended joint major in computer science and mathematics. Before that I did the IB at United World College in Singapore, where I founded our school's first FIRST Robotics team.",
    "These days I mostly work on prediction markets: forecasting models, cross-venue arbitrage, market microstructure, and latency. I like taking a mathematical idea, turning it into code, and running an experiment that shows whether it actually works, and I report it honestly when it doesn't.",
    "I've lived in Hong Kong and Singapore and speak Japanese, English, and Indonesian. Outside of code I climb (working toward V7) and dance.",
  ],
  github: { label: "github.com/Torazo5", href: "https://github.com/Torazo5" } as Link,
  resume: "/resume.pdf",
};

// The short list at the top of the page. `section` links to the matching section below.
export const highlights = [
  { text: "Gold Medal (full score), Canadian Computing Competition", section: "awards" },
  { text: "Top 5, National Olympiad in Informatics Singapore", section: "awards" },
  { text: "2× Champion, Hyundai HMGICS Robotics Challenge (autonomous drones)", section: "projects" },
  { text: "Founded & captained a FIRST Robotics team, raised S$10K+", section: "experience" },
  { text: "Quant research intern (Tokyo) · SWE intern (Floramis)", section: "experience" },
  { text: "Prediction-market research: arbitrage engine, weather models, 316K wallets", section: "research" },
  { text: "IB Spanish Practice Platform: AI speaking trainer, 100 active users", section: "projects" },
  { text: "Tiny Desk song-boundary pipeline and RL locomotion agent from scratch", section: "projects" },
];

export const experience: Role[] = [
  {
    role: "Quantitative Research Intern",
    org: "Private research group · Tokyo",
    period: "Jun – Jul 2026",
    highlights: [
      "Built a Python pipeline comparing three sentiment approaches (FinBERT, Twitter-trained BERT, LLM prompting) against crypto price series",
      "Tested predictive power with Pearson correlation and IC/ICIR; found no significant signal across most assets and isolated one anomalous XRP result for further study",
    ],
  },
  {
    role: "Founder & Captain, Electronics/Programming Lead",
    org: "FIRST Robotics Competition team · Singapore",
    period: "Nov 2023 – May 2026",
    highlights: [
      "Founded the school's first FRC team and led 15 members across design, fabrication, electronics, and software",
      "Secured S$10,000+ in funding, won a national scrimmage, and handed off to a new lead to keep the team going",
      "Coordinated robot development end-to-end to deliver a competition-ready robot on a hard deadline",
      "Worked on autonomous robot-control systems, including PID control",
    ],
  },
  {
    role: "Organiser & Director",
    org: "MicroFRC Singapore",
    period: "2024 – 2025",
    highlights: [
      "Ran an independent FRC-inspired robotics event with 20+ participants across 6 teams: logistics, judging, and competing",
    ],
  },
  {
    role: "Curriculum Developer, Coding & AI",
    org: "The Young Maker · Coding & Robotics School",
    period: "2024 – 2025",
    highlights: [
      "Designed a paid 6-week coding & AI curriculum adopted by 200+ students, with interactive drills and projects",
    ],
  },
  {
    role: "Software Engineer Intern",
    org: "Floramis · Singapore",
    period: "Apr – Jul 2024",
    highlights: [
      "Built a full-stack analytics feature (React, MongoDB, AWS) that modeled user interaction paths as trees across 10K+ interactions",
      "Shipped it internally so product and engineering could use real user-flow data for feature decisions",
    ],
  },
];

export const research: Project[] = [
  {
    title: "Cross-Market Arbitrage Engine",
    period: "2026 – present",
    description: "A two-venue arbitrage engine across 10 sport and esport market families.",
    highlights: [
      "~$100/day on simulated fills at a $25 max clip, capacity-limited by top-of-book depth",
      "Analyzed 549 sessions and found 2,457 potential opportunities over 10 days",
      "A six-point-gap strategy went 38/38 in the analyzed sample",
    ],
    tags: ["Python", "asyncio", "WebSockets", "SQLite"],
  },
  {
    title: "Weather Models for Kalshi Markets",
    description: "Weather-prediction models and entry rules for Kalshi markets across 2,814 events.",
    highlights: [
      "Cut mean absolute error from ~4.30°F to 2.39°F",
      "Beat the market forecast baseline by 0.53°F MAE on untouched holdout data",
      "Entry floors around 12¢ and 15¢ returned ~+9.11 and ~+9.54 net in the analyzed sample",
    ],
    tags: ["Forecasting", "scikit-learn", "Walk-forward validation"],
  },
  {
    title: "Event-Market ML Modeling",
    description:
      "Probabilistic prediction on 523 contracts across 134 events and 77,107 minute-level observations.",
    highlights: [
      "Improved Brier score from ~0.2232 to 0.1006 with CatBoost",
      "Time-series feature engineering, probability forecasting, and calibration",
    ],
    tags: ["CatBoost", "Time series", "Calibration"],
  },
  {
    title: "Market Microstructure & Wallet Flow",
    description: "Detecting informed or unusual trading behavior from raw market data.",
    highlights: [
      "Analyzed 316,000 prediction-market wallets for flow signals",
      "Turned ~31,000 fills into 23,599 trading episodes and flagged 1,868 for investigation",
      "Showed an apparent edge disappeared at ~100 ms of added execution latency",
    ],
    tags: ["Microstructure", "Latency analysis", "DuckDB"],
  },
  {
    title: "CS2 Live-Market Analysis",
    description:
      "Parsed binary Counter-Strike 2 demos into round-state features and combined them with HLTV, BO3.gg, and Kaggle data.",
    highlights: [
      "Found a ~+3.24¢ effect tied to a 300-second momentum signal",
      "Real but sub-cost: 5.2¢/trade gross, −2¢ net after fees and slippage, with 60% of the gap from exit timing",
    ],
    tags: ["Data pipeline", "Momentum", "Esports"],
  },
  {
    title: "ML Road Mapping for Rural Peru",
    description:
      "IB Extended Essay (Computer Science & Geography): making satellite road-mapping work where state-of-the-art models fail.",
    highlights: [
      "Showed SAM-Road, which scores >0.9 on urban benchmarks, dropped to F1 ≈ 0.03 on hand-labelled roads in Celendín, Peru",
      "Improved road-detection accuracy 13× (3% → 40%)",
      "Traced failures to terrain, unpaved community-built roads, and under-executed infrastructure budgets, and proposed ethical data-use limits",
    ],
    tags: ["Computer vision", "Satellite imagery", "Humanitarian mapping"],
  },
];

export const projects: Project[] = [
  {
    title: "IB Spanish Practice Platform",
    period: "Jan – Apr 2026",
    description: "An AI speaking trainer for IB Spanish Ab Initio students.",
    highlights: [
      "A conversational agent paired with a separate evaluator model that scores learner speech and gives targeted feedback",
      "Generates practice listening papers, since no past papers existed for the syllabus",
      "Reached 100 active users at peak",
    ],
    tags: ["Next.js", "TypeScript", "Whisper", "Groq/Llama", "Tailwind"],
  },
  {
    title: "Tiny Desk Song-Boundary Pipeline",
    description:
      "Browse NPR Tiny Desk performances song by song, skipping the banter and applause in between.",
    highlights: [
      "Detects per-song clip_start / clip_end timestamps by combining yt-dlp, youtube-transcript-api, ffmpeg, and TensorFlow YAMNet audio analysis",
      "Tiered boundary resolution across metadata, transcripts, comments, and audio signals, with no YouTube Data API key needed",
      "Automated video discovery, batch processing, human review and manual correction, and JSON/Markdown reports",
      "Output powers a Spotify-like Tiny Desk browser using official YouTube playback",
    ],
    tags: ["Python", "TensorFlow/YAMNet", "ffmpeg", "yt-dlp"],
  },
  {
    title: "Reinforcement-Learning Locomotion",
    description: "A locomotion agent and training pipeline built from scratch, without a prebuilt RL framework.",
    highlights: [
      "Ran controlled 600-episode ablations on exploration decay, learning rate, and target-update frequency",
      "Went from strongly negative early rewards to sustained positive performance",
      "Fast-exploration config reached a rolling Mean20 reward of 203.45 by episode 500",
      "Frequent target updates finished at Mean20 125.12 vs. 105.01 for the baseline",
    ],
    tags: ["Reinforcement learning", "Python", "Ablations"],
  },
  {
    title: "Autonomous Drones & Rovers",
    period: "Aug – Dec 2024",
    description: "AI drones for autonomous navigation and precision landing, as programming lead.",
    highlights: [
      "Landing-pad detection and path planning with YOLOv8 and OpenCV",
      "2× Champion and 1× Runner-up at the Hyundai HMGICS Robotics Challenge, S$1,000+ in prizes",
    ],
    tags: ["Python", "YOLOv8", "OpenCV"],
  },
  {
    title: "MATE ROV Underwater Vision",
    description: "Computer vision & autonomy lead for an underwater robotics team.",
    highlights: [
      "Built the first open-source MATE ROV YOLOv8 model, trained on 1K+ underwater images (30+ FPS, >90% accuracy) for PVC pipe detection",
      "2nd place nationally",
    ],
    tags: ["YOLOv8", "Computer vision"],
  },
  {
    title: "Crypto Trading Algorithm",
    description: "A personal algorithmic trading system.",
    highlights: [
      "Trained 100+ XGBoost/TensorFlow models on 50+ market features",
      "15% backtested returns",
    ],
    tags: ["XGBoost", "TensorFlow"],
  },
  {
    title: "Feedia",
    description: "A full-stack education platform with separate teacher and student workflows.",
    highlights: [
      "Authentication and profiles; teachers create classes, students join them",
      "Test upload, allocation, and viewing, plus mark-scheme upload and editing",
      "Teacher dashboards for student performance data and personalized scheduling and recommendations; used by a teacher",
    ],
    tags: ["Next.js", "Supabase", "Tailwind", "shadcn/ui"],
  },
  {
    title: "Emmet",
    description: "A voice-controlled personal AI assistant.",
    highlights: ["Integrated with the IoT devices in my room"],
    tags: ["Voice AI", "IoT"],
  },
  {
    title: "5C Menu",
    description: "Digging into the 5C Menu app and its PHP backend/API to fix and extend it.",
    highlights: [
      "Found gaps: missing menus on holidays and non-Hoch dining days, no Android support, unused nutrition data",
      "Proposed taking over maintenance and improving the API without breaking the existing app",
    ],
    tags: ["PHP", "APIs"],
  },
  {
    title: "Games: Unity FPS, “One Bullet” & Desmos Tower Defense",
    description: "Game design and development for fun.",
    highlights: [
      "Unity FPS with menus, key bindings, video and sensitivity settings, and scene transitions",
      "Designed “One Bullet,” built around a constrained-ammunition mechanic",
      "A full tower-defense game in Desmos with bosses, achievements, and difficulty systems",
    ],
    tags: ["Unity", "C#", "Desmos"],
  },
];

export const awards = [
  { title: "Gold Medal, full score", org: "Canadian Computing Competition (CEMC, University of Waterloo)" },
  { title: "Selected Top 5 Representative", org: "National Olympiad in Informatics, Singapore (2 years)" },
  { title: "2× Champion, 1× Runner-up", org: "Hyundai Motor Group Innovation Center Singapore Robotics Challenge" },
  { title: "2nd Place, National", org: "MATE ROV Competition" },
  {
    title: "Silver Medal",
    org: "UKMT Senior Mathematics Challenge & CEMC Canadian Intermediate Mathematics Contest",
  },
  { title: "Bronze Medal, Top 20 national", org: "American Math Olympiad (AMO) & SASMO" },
  { title: "Bronze Medal", org: "UWCSEA Humanities Olympiad" },
];

export const education = [
  {
    title: "Harvey Mudd College",
    detail: "B.S., intended joint major in Computer Science and Mathematics · 2026 – 2030",
  },
  {
    title: "United World College Singapore",
    detail: "IB Diploma 43/45 · HL Mathematics AA, Physics, and Computer Science, 7/7/7",
  },
  {
    title: "Competitive Programming",
    detail: "Codeforces & AtCoder · 50+ rated contests",
  },
];

export const beyond = [
  {
    title: "Community service",
    detail:
      "Repaired and donated 15 computers to migrant families, led drum therapy for 40+ people with dementia at Anglican Care Centre, and pushed menu changes for Veggie Wednesday",
  },
  {
    title: "Dance",
    detail:
      "Performed an El Salvadoran cultural piece (1 of 5 male dancers selected) and an Indian cultural dance, and was selected for the contemporary showcase",
  },
  { title: "Volleyball", detail: "Setter on the UWCSEA Dragons in national competitions" },
  { title: "Climbing", detail: "Working toward V7" },
];

export const skills = {
  Languages: ["Python", "TypeScript/JavaScript", "Java", "C/C++", "C#", "SQL", "PHP", "Bash"],
  "ML & Stats": [
    "Reinforcement learning",
    "scikit-learn",
    "XGBoost / LightGBM / CatBoost",
    "PyTorch",
    "TensorFlow",
    "SciPy",
    "YOLOv8 / OpenCV",
    "Walk-forward validation",
    "Calibration (Brier, log loss, ECE)",
  ],
  Data: ["pandas", "NumPy", "DuckDB", "Polars", "Parquet", "SQLite", "Postgres"],
  Systems: ["asyncio", "WebSockets", "REST APIs", "Rate-limit/retry handling", "RSA-PSS signing", "Git"],
  Web: ["React", "Next.js", "Node.js", "Flask", "FastAPI", "Tailwind", "shadcn/ui", "Supabase", "MongoDB", "AWS"],
  Spoken: ["Japanese", "English", "Indonesian"],
};
