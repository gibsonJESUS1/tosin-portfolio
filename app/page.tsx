export default function TosinPortfolioWebsite() {
  const projects = [
    {
      title: "Shop Management System",
      description:
        "Backend-driven system for managing sales, inventory, and daily revenue tracking for small business operations.",
      points: [
        "Tracked product performance and daily sales insights",
        "Supported inventory, pricing, and decision-making",
        "Improved visibility into business operations and financial tracking",
      ],
      caseStudy: {
        heading: "Case Study",
        paragraphs: [
          "This system was built to solve real business challenges around tracking sales, inventory, profitability, and debt in a structured way.",
          "It gives business owners visibility into revenue, cost of sales, gross profit, stock value, outstanding debts, and product performance in real time.",
          "One of the key problems it addresses is the gap between having data and making practical decisions. By highlighting low stock items, product performance, and financial records, the system supports better decisions around restocking, pricing, and sales tracking.",
          "This project reflects my growing interest in combining software development with business analytics to build systems that do not only manage operations, but also support data-driven decision-making.",
        ],
      },
      metrics: [
        { value: "697+", label: "Sales Records" },
        { value: "100+", label: "Inventory Items" },
        { value: "₦600K+", label: "Tracked Revenue" },
        { value: "11", label: "Debt Accounts" },
      ],
      links: [
        { label: "Live App", url: "https://goldenyield-mart-management-system-chi.vercel.app/dashboard" },
        { label: "GitHub", url: "https://github.com/gibsonJESUS1/goldenyield--mart-management-system" },
      ],
      stack: ["Node.js", "TypeScript", "Express.js", "PostgreSQL", "Prisma ORM", "Next.js"],
      images: [
        { src: "/images/dashboard.png", alt: "Dashboard Overview" },
        { src: "/images/sales.png", alt: "Sales History" },
        { src: "/images/inventory.png", alt: "Inventory System" },
      ],
    },
    {
      title: "YieldMart — E-commerce Platform",
      description:
        "E-commerce system for managing products, orders, and transactions in a real-world business setting.",
      points: [
        "Built scalable backend APIs",
        "Handled product management and order workflows",
        "Focused on practical business use cases and reliability",
      ],
      links: [
        { label: "GitHub", url: "https://github.com/gibsonJESUS1/goldenyield--mart-management-system" },
      ],
      stack: ["Node.js", "TypeScript", "PostgreSQL", "Prisma ORM"],
    },
    {
      title: "Tutor Service Platform",
      description:
        "Platform connecting tutors with students across different locations.",
      points: [
        "Designed user interaction and service matching flows",
        "Focused on accessibility and usability",
        "Solved a real-world educational access problem",
      ],
      links: [
        { label: "GitHub", url: "https://github.com/gibsonJESUS1/tutor-backend" },
      ],
      stack: ["Node.js", "Express.js", "PostgreSQL"],
    },
    {
      title: "Client Business Systems",
      description:
        "Customized systems for solar and electronics store clients.",
      points: [
        "Built solutions for product tracking and operations",
        "Improved workflow efficiency",
        "Delivered tailored systems for small business needs",
      ],
      links: [],
      stack: ["JavaScript", "Node.js", "Business System Design"],
    },
  ];

  const skills = [
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "Prisma",
    "REST APIs",
    "Docker",
    "Backend Architecture",
    "Business Process Optimization",
    "Sales & Inventory Analysis",
    "Data Interpretation",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute right-0 top-32 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-sm font-medium text-emerald-300">Tosin Owolabi</p>
            <p className="text-xs text-slate-400">Software Developer • Business Systems</p>
          </div>
          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-16 pt-16 md:grid-cols-[1.3fr_.7fr] md:pb-24 md:pt-24">
        <div className="self-center">
          <div className="inline-flex items-center rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200">
            Software Developer • Business-Focused Builder
          </div>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-6xl md:leading-[1.05]">
            I build systems that help businesses track performance and make better decisions.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
            With over five years of experience, I have worked on business systems including e-commerce platforms,
            financial applications, store management systems, and service-based platforms. My next step is to deepen
            that practical experience with Management and Business Analytics.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-2xl bg-emerald-400 px-5 py-3 font-medium text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:-translate-y-0.5"
            >
              View My Work
            </a>
            <a
              href="https://github.com/gibsonJESUS1"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-medium text-white transition hover:border-white/20 hover:bg-white/10"
            >
              GitHub Profile
            </a>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              <p className="text-2xl font-semibold text-white">5+</p>
              <p className="mt-1 text-sm text-slate-400">Years Building</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              <p className="text-2xl font-semibold text-white">4</p>
              <p className="mt-1 text-sm text-slate-400">Featured Projects</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              <p className="text-2xl font-semibold text-white">Business + Tech</p>
              <p className="mt-1 text-sm text-slate-400">Practical Focus</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-sm">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-emerald-400/30 via-cyan-400/10 to-amber-400/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 p-4 shadow-2xl shadow-black/30 backdrop-blur-xl">
              <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900">
                <img
                  src="/images/profile.jpg"
                  alt="Tosin Owolabi"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-slate-400">Based in Nigeria</p>
                <p className="mt-2 text-lg font-semibold text-white">Backend Developer with business systems focus</p>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  Building practical software for operations, analytics, and decision support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-8 md:py-12">
        <div className="grid gap-6 md:grid-cols-[1fr_1.2fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-300">About</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">Technology with business value</h2>
            <p className="mt-4 leading-8 text-slate-300">
              I am a software developer with a strong interest in business systems, data-driven decision-making,
              and operational efficiency. My work has shown me that the real challenge is not only building software,
              but building systems that support better strategy and measurable business outcomes.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-300">Core Skills</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-slate-900/70 px-4 py-2 text-sm text-slate-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-300">Selected Work</p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Projects with real business context</h2>
          <p className="mt-4 max-w-3xl text-slate-400">
            Real systems built around business operations, performance tracking, and practical use.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="max-w-3xl">
                  <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-3 leading-8 text-slate-300">{project.description}</p>
                </div>
                {project.links && project.links.length > 0 && (
                  <div className="flex flex-wrap gap-3">
                    {project.links.map((l) => (
                      <a
                        key={l.url}
                        href={l.url}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-xl border border-white/10 bg-slate-900/70 px-4 py-2 text-sm text-white transition hover:border-white/20 hover:bg-slate-800"
                      >
                        {l.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack?.map((item) => (
                  <span key={item} className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">
                    {item}
                  </span>
                ))}
              </div>

              <ul className="mt-6 grid gap-3 text-sm leading-7 text-slate-300 md:grid-cols-3">
                {project.points.map((point) => (
                  <li key={point} className="rounded-2xl border border-white/10 bg-slate-900/50 p-4">
                    {point}
                  </li>
                ))}
              </ul>

              {project.caseStudy && (
                <div className="mt-8 rounded-[1.5rem] border border-emerald-400/20 bg-emerald-400/5 p-6">
                  <h4 className="text-lg font-semibold text-white">{project.caseStudy.heading}</h4>

                  {project.metrics && (
                    <div className="mt-5 grid gap-4 md:grid-cols-4">
                      {project.metrics.map((metric) => (
                        <div key={metric.label} className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 text-center">
                          <p className="text-xl font-semibold text-white">{metric.value}</p>
                          <p className="mt-1 text-xs uppercase tracking-wide text-slate-400">{metric.label}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {project.images && (
                    <div className="mt-6 grid gap-4 md:grid-cols-3">
                      {project.images.map((image) => (
                        <div key={image.src} className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60">
                          <img src={image.src} alt={image.alt} className="h-52 w-full object-cover" />
                          <p className="border-t border-white/10 px-4 py-3 text-sm text-slate-300">{image.alt}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mt-6 space-y-4 text-sm leading-8 text-slate-300">
                    {project.caseStudy.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8 md:py-12">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-slate-900 via-slate-900 to-emerald-950/40 p-8 shadow-2xl shadow-black/20">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-300">Career Direction</p>
          <h2 className="mt-4 text-3xl font-semibold text-white">Programming, AI, and business analytics</h2>
          <p className="mt-4 max-w-3xl leading-8 text-slate-300">
            My goal is to grow into a data-driven operations expert by combining programming,
            artificial intelligence, and business analytics. I want to design systems that do not
            just function technically, but actively improve how businesses operate, compete, and
            make decisions.
          </p>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 pb-20 pt-16">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-10">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-300">Contact</p>
          <h2 className="mt-4 text-3xl font-semibold text-white">Let’s connect</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <a href="mailto:otosin11@gmail.com" className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 transition hover:border-white/20">
              <p className="text-sm text-slate-400">Email</p>
              <p className="mt-2 text-white">otosin11@gmail.com</p>
            </a>
            <a href="tel:+2348145120612" className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 transition hover:border-white/20">
              <p className="text-sm text-slate-400">Phone</p>
              <p className="mt-2 text-white">+2348145120612</p>
            </a>
            <a
              href="https://github.com/gibsonJESUS1"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 transition hover:border-white/20"
            >
              <p className="text-sm text-slate-400">GitHub</p>
              <p className="mt-2 text-white">github.com/gibsonJESUS1</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
