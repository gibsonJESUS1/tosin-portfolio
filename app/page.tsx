export default function BackendEngineeringPortfolio() {
  const projects = [
    {
      title: "Content Ops Tool Backend",
      description:
        "Production-grade backend API built with NestJS, PostgreSQL, Prisma ORM, JWT authentication, and scalable modular architecture.",
      highlights: [
        "JWT Access & Refresh Token Flow",
        "Swagger/OpenAPI Documentation",
        "DTO Validation Pipelines",
        "PostgreSQL + Prisma Integration",
        "Railway Cloud Deployment",
      ],
      github: "https://github.com/gibsonJESUS1/content-ops-tool-backend",
      live: "https://scintillating-bravery-production.up.railway.app/api/docs",
    },
    {
      title: "GoldenYield Mart Management System",
      description:
        "Production-ready retail management system designed for real business operations.",
      highlights: [
        "Inventory Management",
        "Sales & Revenue Tracking",
        "Customer Debt Tracking",
        "Analytics Dashboard",
        "Retail Workflow Integration",
      ],
      github:
        "https://github.com/gibsonJESUS1/goldenyield--mart-management-system",
      live: "https://goldenyield-mart-management-system-chi.vercel.app/dashboard",
    },
    {
      title: "Golden Yield Backend",
      description:
        "Backend infrastructure for an e-commerce platform focused on scalable APIs and business operations.",
      highlights: [
        "REST API Architecture",
        "Authentication System",
        "Product & Order Management",
        "PostgreSQL Database Design",
        "Admin Backend Operations",
      ],
      github: "https://github.com/gibsonJESUS1/golden-yield-backend",
      live: "#",
    },
  ];

  const stack = {
    "Backend Engineering": ["Node.js", "TypeScript", "NestJS", "Express.js"],
    "Database & ORM": ["PostgreSQL", "Prisma ORM"],
    "Authentication & Security": [
      "JWT Authentication",
      "Role Guards",
      "Protected Routes",
      "DTO Validation",
    ],
    "Cloud & Infrastructure": [
      "Docker",
      "Railway",
      "Vercel",
      "Environment Configuration",
    ],
    "API & Architecture": [
      "REST APIs",
      "Swagger/OpenAPI",
      "Modular Architecture",
      "Exception Filters",
      "Interceptors",
    ],
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="border-b border-white/10 bg-gradient-to-b from-zinc-900 to-black">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
          <div className="max-w-4xl space-y-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <img
                src="/profile.png"
                alt="Tosin Owolabi"
                className="h-28 w-28 rounded-full border-4 border-emerald-500/20 object-cover shadow-2xl"
              />

              <div className="space-y-3">
                <div className="inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
                  Backend Engineer • Node.js • TypeScript • Cloud Systems
                </div>

                <div>
                  <h2 className="text-3xl font-bold lg:text-4xl">
                    Tosin Owolabi
                  </h2>

                  <p className="mt-2 text-zinc-400">
                    Backend Engineer focused on scalable systems, API
                    architecture, PostgreSQL, and cloud-ready backend
                    applications.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl font-bold leading-tight lg:text-7xl">
                Building scalable backend systems & cloud-ready applications.
              </h1>

              <p className="max-w-3xl text-lg leading-8 text-zinc-400 lg:text-xl">
                I’m Tosin Owolabi, a Backend Engineer focused on API
                architecture, authentication systems, PostgreSQL database
                engineering, and production-ready backend services using
                Node.js, TypeScript, NestJS, and modern backend engineering
                practices.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/gibsonJESUS1"
                target="_blank"
                className="rounded-2xl bg-white px-6 py-3 font-semibold text-black transition hover:opacity-90"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/tosin-owolabi-98b2b450/"
                target="_blank"
                className="rounded-2xl border border-white/20 px-6 py-3 font-semibold transition hover:border-white"
              >
                LinkedIn
              </a>

              <a
                href="https://scintillating-bravery-production.up.railway.app/api/docs"
                target="_blank"
                className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-6 py-3 font-semibold text-emerald-400 transition hover:bg-emerald-500/20"
              >
                Swagger Docs
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
        <div className="mb-16 max-w-3xl space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-400">
            Engineering Focus
          </p>

          <h2 className="text-4xl font-bold lg:text-5xl">
            Backend systems engineered for scalability.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              title: "Backend Architecture",
              text: "Designing modular backend systems with scalability and maintainability in mind.",
            },
            {
              title: "API Engineering",
              text: "Building REST APIs with authentication, validation, and structured service layers.",
            },
            {
              title: "Database Systems",
              text: "Working with PostgreSQL and Prisma ORM for relational data modeling.",
            },
            {
              title: "Cloud Deployment",
              text: "Deploying backend systems using Railway and frontend applications using Vercel.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-zinc-900 p-8"
            >
              <h3 className="mb-4 text-xl font-semibold">{item.title}</h3>
              <p className="leading-7 text-zinc-400">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
          <div className="mb-16 max-w-3xl space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-400">
              Engineering Stack
            </p>

            <h2 className="text-4xl font-bold lg:text-5xl">
              Backend engineering technologies.
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {Object.entries(stack).map(([category, items]) => (
              <div
                key={category}
                className="rounded-3xl border border-white/10 bg-black p-8"
              >
                <h3 className="mb-6 text-2xl font-semibold">{category}</h3>

                <div className="flex flex-wrap gap-3">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-zinc-900 px-4 py-2 text-sm text-zinc-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
        <div className="mb-16 max-w-3xl space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-400">
            Featured Projects
          </p>

          <h2 className="text-4xl font-bold lg:text-5xl">
            Production-focused backend engineering projects.
          </h2>
        </div>

        <div className="space-y-10">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-3xl border border-white/10 bg-zinc-950 p-10"
            >
              <div className="grid gap-10 lg:grid-cols-2">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold">{project.title}</h3>
                    <p className="leading-8 text-zinc-400">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="mb-4 text-lg font-semibold text-emerald-400">
                      Engineering Highlights
                    </h4>

                    <ul className="space-y-3 text-zinc-300">
                      {project.highlights.map((highlight) => (
                        <li key={highlight}>• {highlight}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      className="rounded-2xl bg-white px-5 py-3 font-semibold text-black"
                    >
                      GitHub Repository
                    </a>

                    {project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        className="rounded-2xl border border-white/20 px-5 py-3 font-semibold"
                      >
                        Live Project
                      </a>
                    )}
                  </div>
                </div>

                <div className="rounded-3xl border border-emerald-500/20 bg-black p-8">
                  <div className="mb-6 flex items-center justify-between">
                    <h4 className="text-xl font-semibold text-emerald-400">
                      System Architecture
                    </h4>

                    <div className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-400">
                      Backend Flow
                    </div>
                  </div>

                  <div className="space-y-4 font-mono text-sm text-zinc-300">
                    <div>Client Application</div>
                    <div className="pl-8 text-emerald-400">↓</div>
                    <div>NestJS REST API</div>
                    <div className="pl-8 text-emerald-400">↓</div>
                    <div>Authentication Layer</div>
                    <div>Validation Layer</div>
                    <div>Business Logic Layer</div>
                    <div className="pl-8 text-emerald-400">↓</div>
                    <div>Prisma ORM</div>
                    <div className="pl-8 text-emerald-400">↓</div>
                    <div>PostgreSQL Database</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-black p-10">
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-emerald-400">
                Deployment & Infrastructure
              </p>

              <h2 className="mb-8 text-4xl font-bold">
                Cloud-ready backend deployment workflow.
              </h2>

              <div className="space-y-4 text-zinc-300">
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-zinc-950 px-5 py-4">
                  <span>Railway</span>
                  <span className="text-zinc-500">Backend Hosting</span>
                </div>

                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-zinc-950 px-5 py-4">
                  <span>Vercel</span>
                  <span className="text-zinc-500">Frontend Deployment</span>
                </div>

                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-zinc-950 px-5 py-4">
                  <span>PostgreSQL</span>
                  <span className="text-zinc-500">Database Persistence</span>
                </div>

                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-zinc-950 px-5 py-4">
                  <span>Docker</span>
                  <span className="text-zinc-500">
                    Containerization Learning
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black p-10">
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-emerald-400">
                Current Engineering Growth
              </p>

              <h2 className="mb-8 text-4xl font-bold">
                Scaling toward distributed systems engineering.
              </h2>

              <div className="space-y-4 text-zinc-300">
                {[
                  "Distributed Systems Fundamentals",
                  "Cloud Infrastructure Engineering",
                  "CI/CD Pipelines",
                  "Observability & Monitoring",
                  "Event-driven Architecture",
                  "Backend Performance Optimization",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-zinc-950 px-5 py-4"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
        <div className="rounded-3xl border border-white/10 bg-zinc-950 p-10 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-emerald-400">
            Open To Opportunities
          </p>

          <h2 className="mx-auto mb-6 max-w-3xl text-4xl font-bold lg:text-5xl">
            Backend engineering opportunities, remote roles & international
            relocation.
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-zinc-400">
            Interested in backend engineering, cloud-oriented systems, API
            architecture, and scalable production applications.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:otosin11@gmail.com"
              className="rounded-2xl bg-white px-6 py-3 font-semibold text-black"
            >
              Contact Me
            </a>

            <a
              href="https://github.com/gibsonJESUS1"
              target="_blank"
              className="rounded-2xl border border-white/20 px-6 py-3 font-semibold"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/tosin-owolabi-98b2b450/"
              target="_blank"
              className="rounded-2xl border border-white/20 px-6 py-3 font-semibold"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
