
import React, { useState } from 'react'
import './App.css'

const links = {
  linkedinPost:
    'https://www.linkedin.com/feed/update/urn:li:activity:7511787390622060544/',
  qaHub: 'https://www.linkedin.com/company/qa-automation-hub/',
  googleCertification:
    'https://cloud.google.com/learn/certification/generative-ai-leader',

  // Replace this with your exact personal LinkedIn profile URL.
  linkedinProfile: 'https://www.linkedin.com/',
}

const skills = [
  {
    title: 'Automation',
    items: [
      'Selenium WebDriver',
      'Java',
      'TestNG',
      'Maven',
      'Cucumber BDD',
      'Data-driven frameworks',
      'Hybrid frameworks',
    ],
  },
  {
    title: 'API & Services',
    items: [
      'Postman',
      'Rest Assured',
      'API validation',
      'Bruno',
      'Insomnia',
    ],
  },
  {
    title: 'Data & Cloud',
    items: [
      'MySQL',
      'ETL testing',
      'Data validation',
      'Google Cloud Platform',
      'Data quality',
    ],
  },
  {
    title: 'Delivery & Collaboration',
    items: [
      'Jenkins CI/CD',
      'Git & GitHub',
      'JIRA',
      'Zephyr',
      'Agile',
      'Waterfall',
    ],
  },
]

const projects = [
  {
    name: 'SFP',
    company: 'Equifax · Apr 2025 – Present',
    type: 'Quality Automation Engineering',
    description:
      'Improved automated regression coverage and reliability for a data-focused platform, combining automated checks with database validation and pipeline integration.',
    outcomes: [
      'Expanded functional coverage from 50% to 95%.',
      'Built retry logic for jobs with indeterminate statuses.',
      'Created database validation scripts and Jenkins pipeline integrations.',
      'Reduced dependency on manual test-data creation from 70% to 10%.',
      'Added Gmail and Google Chat notifications and supported production root-cause analysis.',
    ],
    tags: ['Java', 'Automation', 'Jenkins', 'SQL', 'Regression'],
  },
  {
    name: 'DataX',
    company: 'Equifax · Mar 2024 – Mar 2025',
    type: 'ETL & Data Pipeline Testing',
    description:
      'Supported end-to-end testing across ETL, DataPrep, and atomic services, validating complex business rules, plugins, and transformed data.',
    outcomes: [
      'Automated end-to-end scenarios using Java and Cucumber.',
      'Partnered with Product Owners to clarify requirements and edge cases.',
      'Executed functional and regression testing and maintained Zephyr test cases.',
      'Investigated production issues, supported root-cause analysis, and prepared test data.',
    ],
    tags: ['Java', 'Cucumber', 'ETL', 'Zephyr', 'Data Quality'],
  },
  {
    name: 'Teletrack',
    company: 'Equifax · Feb 2022 – Mar 2024',
    type: 'Business Rules Validation',
    description:
      'Validated business rules across data preparation, ETL, and atomic services, focusing on correctness, reliability, and regression confidence.',
    outcomes: [
      'Developed BDD automation with Java, Selenium, and Cucumber.',
      'Validated plugins and complex business rules.',
      'Created and maintained test cases in Zephyr and performed retesting and regression.',
      'Supported production failure debugging, data fixes, and cross-functional delivery.',
    ],
    tags: ['Selenium', 'Java', 'BDD', 'BFSI', 'Regression'],
  },
]

const experience = [
  {
    role: 'Quality Automation Engineer (SDET)',
    company: 'Equifax',
    period: 'Apr 2025 – Present',
    description:
      'Build and improve automated test coverage, database validation, CI/CD execution, and production issue analysis for data-intensive systems.',
  },
  {
    role: 'Test Engineer',
    company: 'LTIMindtree',
    period: 'Oct 2021 – Mar 2025',
    description:
      'Worked across software testing and quality assurance in the BFSI domain, including functional, integration, regression, UI, end-to-end, and ETL/data validation.',
  },
]

function ArrowUpRight() {
  return (
    <span aria-hidden="true" className="arrow">
      ↗
    </span>
  )
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && (
        <p className="section-description">{description}</p>
      )}
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  const navigation = [
    ['About', '#about'],
    ['Skills', '#skills'],
    ['Experience', '#experience'],
    ['Projects', '#projects'],
    ['Certifications', '#certifications'],
    ['Community', '#community'],
    ['Contact', '#contact'],
  ]

  return (
    <div className="site-shell">
      <header className="topbar">
        <a
          className="brand"
          href="#home"
          onClick={closeMenu}
          aria-label="Arjun Singh home"
        >
          <span className="brand-mark">AS</span>
          <span>
            Arjun Singh<span className="brand-dot">.</span>
          </span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>

        <nav
          className={menuOpen ? 'nav-links nav-open' : 'nav-links'}
          aria-label="Main navigation"
        >
          {navigation.map(([label, href]) => (
            <a key={label} href={href} onClick={closeMenu}>
              {label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="availability">
              <span className="availability-dot" />
              QUALITY ENGINEERING · TEST AUTOMATION · GENAI
            </div>

            <p className="hero-intro">Hello, I'm</p>
            <h1>
              Arjun Singh<span className="accent">.</span>
            </h1>
            <h2>
              Quality Automation Engineer{' '}
              <span className="muted">/ SDET</span>
            </h2>

            <p className="hero-description">
              I help teams build confidence in software through thoughtful
              test automation, API and data validation, and reliable quality
              practices. I'm also exploring how generative AI can create
              better outcomes for technology teams.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work <ArrowUpRight />
              </a>
              <a className="button button-secondary" href="#contact">
                Let's connect
              </a>
            </div>

            <div className="hero-facts">
              <div>
                <strong>5+ years</strong>
                <span>QA & software testing</span>
              </div>
              <div>
                <strong>BFSI</strong>
                <span>Domain experience</span>
              </div>
              <div>
                <strong>Automation</strong>
                <span>Quality-first mindset</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />

            <div className="portrait-frame">
              <img
                src={`${import.meta.env.BASE_URL}assets/profile.png`}
                alt="Arjun Singh professional portrait"
                onError={(event) => {
                  event.currentTarget.style.display = 'none'
                  event.currentTarget.parentElement.classList.add(
                    'portrait-fallback'
                  )
                }}
              />
              <div className="portrait-initials">AS</div>
            </div>

            <div className="floating-card card-automation">
              <span className="mini-icon">✓</span>
              <div>
                <strong>Test automation</strong>
                <small>Reliable. Repeatable.</small>
              </div>
            </div>

            <div className="floating-card card-genai">
              <span className="mini-icon mini-icon-purple">✦</span>
              <div>
                <strong>GenAI learner</strong>
                <small>Google Cloud certified</small>
              </div>
            </div>

            <div className="hero-grid-decoration" />
          </div>
        </section>

        {/* IMPACT HIGHLIGHTS */}
        <section className="stats-strip">
          <div>
            <span className="stat-number">95%</span>
            <span className="stat-label">
              Functional coverage achieved
            </span>
          </div>
          <div>
            <span className="stat-number">70% → 10%</span>
            <span className="stat-label">
              Less test-data creation dependency
            </span>
          </div>
          <div>
            <span className="stat-number">CI/CD</span>
            <span className="stat-label">
              Automation pipeline integration
            </span>
          </div>
        </section>

        {/* ABOUT */}
        <section className="section-wrap section-block" id="about">
          <SectionHeading
            eyebrow="A LITTLE ABOUT ME"
            title="Quality is more than finding bugs."
            description="It's about building confidence in every release."
          />

          <div className="about-grid">
            <div className="about-main">
              <p>
                I'm a Quality Automation Engineer with 5+ years of experience
                in software quality assurance, with a strong focus on the
                Banking and Financial Services (BFSI) domain. My work spans
                functional testing, UI and API automation, ETL testing, data
                quality, regression coverage, and CI/CD integration.
              </p>
              <p>
                I enjoy understanding how systems behave end to end: from
                business rules and data pipelines to service responses and
                production issues. I work closely with developers, business
                analysts, and product stakeholders to turn requirements into
                meaningful test coverage.
              </p>
              <p>
                Alongside automation, I'm building my understanding of
                generative AI and responsible adoption, and sharing practical
                QA learning through <strong>QA Automation Hub</strong>.
              </p>
            </div>

            <aside className="about-note">
              <span className="quote-mark">“</span>
              <p>
                My goal is to make quality measurable, automation maintainable,
                and releases more dependable.
              </p>
              <span className="note-line" />
              <small>MY QUALITY ENGINEERING PHILOSOPHY</small>
            </aside>
          </div>
        </section>

        {/* SKILLS */}
        <section className="section-wrap section-block" id="skills">
          <SectionHeading
            eyebrow="WHAT I WORK WITH"
            title="Skills & toolkit"
            description="Tools are useful; the right test strategy is what makes them effective."
          />

          <div className="skills-grid">
            {skills.map((group, index) => (
              <article className="skill-card" key={group.title}>
                <div className="skill-index">0{index + 1}</div>
                <h3>{group.title}</h3>
                <div className="tag-list">
                  {group.items.map((item) => (
                    <span className="tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section
          className="section-wrap section-block"
          id="experience"
        >
          <SectionHeading
            eyebrow="CAREER PATH"
            title="Experience"
            description="Working across automation, data quality, and end-to-end testing."
          />

          <div className="timeline">
            {experience.map((item, index) => (
              <article className="timeline-item" key={item.company}>
                <div className="timeline-marker">{index + 1}</div>

                <div className="timeline-content">
                  <div className="timeline-top">
                    <div>
                      <h3>{item.role}</h3>
                      <p className="company-name">{item.company}</p>
                    </div>
                    <span className="period">{item.period}</span>
                  </div>

                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section className="section-wrap section-block" id="projects">
          <SectionHeading
            eyebrow="SELECTED WORK"
            title="Projects & impact"
            description="A snapshot of the systems, test approaches, and quality improvements I've contributed to."
          />

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.name}>
                <div className="project-card-top">
                  <span className="project-number">0{index + 1}</span>
                  <span className="project-type">{project.type}</span>
                </div>

                <h3>{project.name}</h3>
                <p className="project-company">{project.company}</p>
                <p className="project-description">
                  {project.description}
                </p>

                <ul className="outcome-list">
                  {project.outcomes.map((outcome) => (
                    <li key={outcome}>{outcome}</li>
                  ))}
                </ul>

                <div className="tag-list">
                  {project.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section
          className="section-wrap section-block"
          id="certifications"
        >
          <SectionHeading
            eyebrow="CONTINUOUS LEARNING"
            title="Certifications & recognition"
            description="Building technical depth while staying curious about what's next."
          />

          <div className="cert-grid">
            <article className="cert-card cert-featured">
              <div className="cert-symbol">✦</div>

              <div className="cert-content">
                <span className="cert-label">
                  GENERATIVE AI · GOOGLE CLOUD
                </span>
                <h3>Google Cloud Generative AI Leader</h3>
                <p>
                  Certification focused on generative AI fundamentals,
                  Google Cloud's GenAI offerings, business use cases, and
                  responsible AI adoption.
                </p>

                <div className="cert-actions">
                  <a
                    href={links.googleCertification}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Certification details <ArrowUpRight />
                  </a>
                  <a
                    href={links.linkedinPost}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Read my announcement <ArrowUpRight />
                  </a>
                </div>
              </div>
            </article>

            <article className="cert-card">
              <div className="cert-symbol cert-symbol-blue">API</div>

              <div className="cert-content">
                <span className="cert-label">TEST AUTOMATION</span>
                <h3>REST API Automation</h3>
                <p>Rest Assured and Serenity BDD</p>
                <span className="cert-note">
                  API automation & BDD practices
                </span>
              </div>
            </article>
          </div>

          <div className="awards-block">
            <h3>Recognition</h3>
            <p>
              Recognized at LTIMindtree with Crest, Strategic Thinker,
              Hi-Five, Super Crew, and Accountability awards.
            </p>
            <div className="tag-list">
              <span className="tag">Crest</span>
              <span className="tag">Strategic Thinker</span>
              <span className="tag">Hi-Five</span>
              <span className="tag">Super Crew</span>
              <span className="tag">Accountability</span>
            </div>
          </div>
        </section>

        {/* QA AUTOMATION HUB */}
        <section
          className="section-wrap section-block community-section"
          id="community"
        >
          <SectionHeading
            eyebrow="KNOWLEDGE SHARING"
            title="QA Automation Hub"
            description="Learn testing. Automate smarter. Become an SDET."
          />

          <div className="community-card">
            <div className="community-graphic" aria-hidden="true">
              <div className="hub-node node-top">QA</div>
              <div className="hub-node node-left">API</div>
              <div className="hub-node node-right">UI</div>
              <div className="hub-node node-bottom">AI</div>
              <div className="hub-center">✓</div>
              <div className="hub-line line-a" />
              <div className="hub-line line-b" />
              <div className="hub-line line-c" />
              <div className="hub-line line-d" />
            </div>

            <div className="community-copy">
              <span className="cert-label">
                LINKEDIN LEARNING COMMUNITY
              </span>
              <h3>Practical QA learning, one concept at a time.</h3>
              <p>
                QA Automation Hub is an educational page I created to share
                concise testing concepts, automation fundamentals, and
                interview preparation for testers at different stages of
                their careers — from building foundations to revising
                concepts for interviews.
              </p>

              <div className="community-topics">
                <span>Testing fundamentals</span>
                <span>Functional & non-functional testing</span>
                <span>Automation concepts</span>
                <span>Interview Q&A</span>
              </div>

              <a
                className="button button-primary"
                href={links.qaHub}
                target="_blank"
                rel="noreferrer"
              >
                Visit QA Automation Hub <ArrowUpRight />
              </a>
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section
          className="section-wrap section-block education-block"
          id="education"
        >
          <SectionHeading
            eyebrow="FOUNDATIONS"
            title="Education"
          />

          <div className="education-card">
            <div className="education-icon">B.Sc.</div>
            <div>
              <h3>Bachelor of Science — Statistics</h3>
              <p>The Maharaja Sayajirao University of Baroda, India</p>
            </div>
            <span className="period">2021</span>
          </div>
        </section>

        {/* CONTACT */}
        <section
          className="section-wrap contact-section"
          id="contact"
        >
          <p className="eyebrow">HAVE A PROJECT OR OPPORTUNITY?</p>
          <h2>Let's build confidence in quality.</h2>
          <p>
            I'm open to connecting with QA engineers, automation
            professionals, and teams solving interesting quality challenges.
          </p>

          <div className="contact-actions">
            <a
              className="button button-primary"
              href="mailto:ajsingh5297@gmail.com"
            >
              Email me <ArrowUpRight />
            </a>
            <a
              className="button button-secondary"
              href={links.linkedinProfile}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn profile <ArrowUpRight />
            </a>
            <a
              className="button button-secondary"
              href={links.qaHub}
              target="_blank"
              rel="noreferrer"
            >
              QA Automation Hub <ArrowUpRight />
            </a>
          </div>

          <div className="contact-details">
            <span>Pune, India</span>
            <span>·</span>
            <a href="mailto:ajsingh5297@gmail.com">
              ajsingh5297@gmail.com
            </a>
            <span>·</span>
            <a href="tel:+917579733822">+91 75797 33822</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="brand" href="#home">
          <span className="brand-mark">AS</span>
          <span>
            Arjun Singh<span className="brand-dot">.</span>
          </span>
        </a>

        <p>
          Designed around curiosity, quality, and continuous improvement.
        </p>
        <span className="footer-copy">
          © {new Date().getFullYear()} Arjun Singh
        </span>
      </footer>
    </div>
  )
}

export default App
