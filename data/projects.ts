export type Category = "AI" | "Full-Stack" | "Cloud" | "Mobile" | "Data" | "Client Work"

export const CATEGORIES: Category[] = ["AI", "Full-Stack", "Cloud", "Mobile", "Data", "Client Work"]

export type Project = {
  slug: string
  title: string
  client?: string
  period: string
  role: string
  description: string
  skills: string[]
  categories: Category[]
  images: string[]
  captions?: string[]
  video?: string
  github?: string
  demo?: string
  featured: boolean
}

export const projects: Project[] = [
  // --- Client Work ---
  {
    slug: "outcoach",
    title: "Outcoach.io",
    client: "Outcoach.io (class management startup)",
    period: "Mar – May 2026",
    role: "Technical Project Lead",
    description:
      "Led a 5-member team contracted to integrate AI agents into a class management platform serving 46,000+ classes. Built an agentic regression test suite for their Flutter mobile app — an LLM-powered UI crawler that auto-indexes screens and runs auth flows without hardcoded selectors, surviving UI changes. Automated voice log generation for coaches, eliminating manual reporting.",
    skills: ["TypeScript", "Groq", "Mastra", "Maestro", "AI Agents", "Flutter", "Team Leadership", "Agile"],
    categories: ["AI", "Client Work"],
    images: [],
    video: "/videos/outcoach_tester.mp4",
    demo: "https://outcoach.io/",
    featured: true,
  },
  {
    slug: "studypulse",
    title: "StudyPulse",
    client: "StudyPulse (edtech startup)",
    period: "Aug – Oct 2025",
    role: "Technical Project Lead",
    description:
      "Led a 5-member team contracted to deliver key technical components for an edtech startup serving 6,000+ students. Personally built a FastAPI analytics dashboard with an idempotent data pipeline integrating the Wonde API with PostgreSQL across 1,000+ student and school records. The team also delivered a companion React Native mobile app prototype.",
    skills: ["React", "FastAPI", "Python", "PostgreSQL", "Wonde API", "LLM", "React Native", "Team Leadership", "Client Management"],
    categories: ["AI", "Full-Stack", "Client Work"],
    images: [
      "/images/studypulse/StudyPulse_Main.png",
      "/images/studypulse/StudyPulse_Wonde_Integration.png",
      "/images/studypulse/StudyPulse_Mobile_1.png",
      "/images/studypulse/StudyPulse_Mobile_2.png",
      "/images/studypulse/StudyPulse_Mobile_3.png",
    ],
    demo: "https://studypulse.education/",
    featured: true,
  },

  // --- Personal / Full-Stack ---
  {
    slug: "speakdojo",
    title: "SpeakDojo",
    period: "Apr – May 2026",
    role: "Founder (Enactus EnAccelerator)",
    description:
      "AI communication coaching platform with real-time bidirectional voice conversations and multimodal feedback across 4 dimensions. Selected for Enactus Melbourne's competitive 10-week startup incubator. Conducted customer discovery with 35 participants, refining privacy and feedback design. Backend uses WebSockets and Gemini Live API for sub-second voice response.",
    skills: ["Node.js", "Next.js", "WebSockets", "Gemini Live API", "TypeScript", "Docker", "Customer Discovery", "Product Management"],
    categories: ["AI", "Full-Stack"],
    images: ["/images/speakdojo/speakdojo_light.svg"],
    video: "/videos/speakdojo_demo.mp4",
    demo: "https://speak-dojo.vercel.app/",
    featured: true,
  },
  {
    slug: "alignr",
    title: "Alignr",
    period: "Mar – Apr 2026",
    role: "Solo developer",
    description:
      "Built to automate my own internship and job application workflow. Alignr reduces resume tailoring time by ~70% through AI-assisted company research, role-fit scoring (0–100), a STAR story bank, application tracking, and AI-generated resume and cover letter drafts.",
    skills: ["Next.js", "Supabase", "Groq AI", "Tailwind CSS", "TypeScript"],
    categories: ["AI", "Full-Stack"],
    images: [
      "/images/alignr/dashboard.png",
      "/images/alignr/application.png",
      "/images/alignr/application_tracker.png",
      "/images/alignr/storybank.png",
      "/images/alignr/resume_builder.png",
    ],
    github: "https://github.com/matthias-ong/Alignr",
    featured: true,
  },

  // --- Cloud / Distributed ---
  {
    slug: "auscost",
    title: "AusCost",
    period: "Mar – May 2025",
    role: "Team Lead",
    description:
      "Led a 5-member team building a cloud platform to track how Australians feel about the cost of living, pulling from Reddit and Mastodon. The whole thing runs on OpenStack, an open-source cloud platform that gives you the same kind of infrastructure as AWS (compute, networking, object storage) but self-hosted on bare metal. On top of that we ran Kubernetes with Fission for serverless functions, Redis queues, and KEDA for autoscaling under load. We collected 364,320 posts over 12 months through an event-driven ingestion pipeline and ran keyword extraction and VADER sentiment scoring on every post. I built the analysis frontend as a Jupyter notebook that hits our REST API and generates scenario breakdowns, daily sentiment trends, LDA topic modelling with pyLDAvis, and word clouds. The two main scenarios were housing stress and general cost of living, identifying sentiment dips tied to real news events like inflation announcements and RBA rate decisions, and spikes around holiday periods. To understand what was driving the extreme days, I ran LDA topic modelling on the best and worst sentiment dates for each scenario. On the best housing day (Dec 29 2024), dominant topics centred on property investment and buying intent. On the worst cost of living day (Aug 3 2024), topics clustered around food, utility bills, and general affordability pressure (screenshots 3 and 4).",
    skills: ["Python", "OpenStack", "Cloud Infrastructure", "Kubernetes", "Fission", "Docker", "Redis", "KEDA", "NLTK", "gensim", "NLP", "Sentiment Analysis", "REST API", "Team Leadership"],
    categories: ["Cloud", "Data"],
    github: "https://github.com/matthias-ong/AusCost/tree/main",
    images: [
      "/images/auscost/plot_1.png",
      "/images/auscost/plot_8.png",
      "/images/auscost/lda_housing_peak.png",
      "/images/auscost/lda_costliving_worst.png",
      "/images/auscost/plot_2.png",
      "/images/auscost/plot_5.png",
    ],
    captions: [
      "Overall daily post volume & avg sentiment (12 months)",
      "Housing Stress vs Cost of Living sentiment comparison",
      "LDA topic modelling — Housing Stress peak day (Dec 29 2024)",
      "LDA topic modelling — Cost of Living worst day (Aug 3 2024)",
      "Housing Stress sentiment over time (best/worst annotated)",
      "Cost of Living sentiment over time (best/worst annotated)",
    ],
    featured: true,
  },
  {
    slug: "collaborative-whiteboard",
    title: "Real-Time Collaborative Whiteboard",
    period: "Apr – May 2025",
    role: "Solo developer",
    description:
      "A distributed Java app where multiple clients connect to a server and draw on a shared canvas in real time. Built with Swing for the UI and Java RMI for networking. Supports freehand drawing, shapes, text, an eraser, 16 colours plus a custom colour picker, and adjustable brush sizes. Includes a chat system with a live user roster, manager-only controls to remove users, and file management for saving and loading whiteboards in a custom binary format. Achieved 100% project grade.",
    skills: ["Java", "Java RMI", "Swing", "Distributed Systems", "Concurrency"],
    categories: ["Full-Stack"],
    images: [
      "/images/whiteboard/whiteboard1.png",
      "/images/whiteboard/whiteboard2.png",
      "/images/whiteboard/whiteboard3.png",
    ],
    github: "https://github.com/matthias-ong/collaborative-whiteboard",
    featured: false,
  },

  // --- Mobile ---
  {
    slug: "trailquest",
    title: "TrailQuest",
    period: "Aug – Oct 2025",
    role: "Technical Lead (team of 6)",
    description:
      "Gamified hiking trail app for Android built with a 6-person team over 10 weeks. I led the technical direction, set up the GitHub repo and Jira board, and was responsible for Google Maps SDK integration with a custom map style to match the nature theme. Built the core trail session logic: GPS polling every 5 seconds, checkpoint detection within a 30-metre radius that turns markers green, and a ChallengeManager singleton that serves quiz challenges at each checkpoint. Used the Haversine formula for distance checks so that unit tests could run on the JVM without needing Android framework APIs. Also built the ViewModel for the browse and search interface, modified the Firebase Firestore schema to support the extra features, and wrote unit tests across location triggers, points calculations, and session completion. Data for Melbourne trails came from the City of Melbourne open dataset, converted to Firestore via a custom Python script. App also integrates AWS S3 for community photo uploads, a step counter with real-time display, Firebase Auth, and a global leaderboard.",
    skills: ["Kotlin", "Jetpack Compose", "Firebase", "AWS S3", "Google Maps SDK", "Coroutines", "MVVM", "JUnit", "Agile Scrum", "Jira", "Team Leadership"],
    categories: ["Mobile"],
    images: [
      "/images/trailquest/browse2.png",
      "/images/trailquest/checkpoints.png",
      "/images/trailquest/quiz_challenge.png",
      "/images/trailquest/leaderboard.png",
      "/images/trailquest/community.png",
      "/images/trailquest/detail_card.png",
    ],
    github: "https://github.com/matthias-ong/TrailQuest/tree/main",
    featured: true,
  },
  {
    slug: "captainjumperboy",
    title: "CaptainJumperBoy",
    period: "Feb 2023",
    role: "Developer (team of 5)",
    description:
      "2D Android platformer built with a team of 5 in 4 weeks for a mobile development unit. You play as CaptainJumperBoy leaping across platforms where the difficulty ramps up with every jump, so one lapse in reflexes and you're off the screen. Supports dual input so players can use either the accelerometer or touch controls. Score gets persisted on a Firebase leaderboard so players can compete across devices. Built with MVVM architecture, Room for local data, Coroutines for async work, and LiveData for reactive UI updates.",
    skills: ["Kotlin", "Android", "Firebase", "MVVM", "Room", "Coroutines", "LiveData"],
    categories: ["Mobile"],
    images: [],
    video: "/videos/captainjumperboy.mp4",
    github: "https://github.com/matthias-ong/captain_jumper_boy",
    featured: false,
  },

  // --- Data / AI/ML ---
  {
    slug: "spatial-site-selection",
    title: "Spatial Site-Selection Database",
    period: "Mar – Jun 2026",
    role: "Solo developer",
    github: "https://github.com/matthias-ong/spatial-site-intelligence",
    description:
      "A spatial database for supermarket site selection across Greater Melbourne. Pulled together 5 datasets: ABS SA1/SA2 census data, VicMap commercial planning zones, Victoria crime stats, and competitor store locations. Used ST_ClusterDBSCAN to group commercial zones into retail precincts, then ran pgRouting Dijkstra over the VicMap road network (336k edges) to compute real road distances to nearby competitors. Sites are ranked by a weighted score across demographics, population growth, competitor proximity, and crime, with a constraint trigger making sure the weights always sum to 1. Visualised everything in QGIS with choropleth maps and built a SQL function for per-LGA top-k queries. The demo shows live weight adjustments changing which sites rank highest.",
    skills: ["PostgreSQL", "PostGIS", "pgRouting", "QGIS", "SQL", "Python", "GIS", "Spatial Analytics", "Data Modelling"],
    categories: ["Data"],
    images: [
      "/images/geospatial/retail-clusters.png",
      "/images/geospatial/planning-zones.png",
      "/images/geospatial/sa1-population.png",
      "/images/geospatial/sa1-income.png",
      "/images/geospatial/sa2-data.png",
      "/images/geospatial/lga-crime.png",
      "/images/geospatial/site-scoring-weight-change.png",
    ],
    video: "/videos/geospatial_demo.mp4",
    featured: false,
  },
  {
    slug: "heart-disease-analysis",
    title: "Heart Disease Prediction",
    period: "Apr – May 2025",
    role: "Solo developer",
    description:
      "Built a classifier on the CDC BRFSS 2022 survey dataset (246,000 respondents, 40 health indicators) to predict heart disease risk. The dataset is heavily imbalanced at 91% negative, so a naive baseline that always predicts no disease scores 91.2% accuracy without learning anything useful. To actually catch at-risk patients, I constructed a composite HeartDisease label from HadHeartAttack and HadAngina, engineered features like a DisabilityScore and sleep/BMI categories, and applied a hybrid SMOTE + random undersampling strategy strictly inside each CV fold to prevent data leakage. Used nested cross-validation (5-fold outer, 3-fold inner GridSearchCV) to tune Naive Bayes, Decision Tree, and Random Forest. Random Forest with resampling reached 61.6% recall on positive cases with 82.4% overall accuracy, which is the real metric that matters when missing a diagnosis has consequences.",
    skills: ["Python", "Scikit-learn", "imbalanced-learn", "SMOTE", "Pandas", "Seaborn", "Machine Learning", "Data Analysis"],
    categories: ["AI", "Data"],
    images: [
      "/images/heart/plot_0.png",
      "/images/heart/plot_1.png",
    ],
    github: "https://github.com/matthias-ong/Heart-Disease-Prediction/tree/main",
    featured: false,
  },
]
