const papers = [
  { img: "/paper1.jpeg", title: "Numerical Analysis of Aerodynamic Performance of S-Series Aerofoils for Low-Speed Wind Turbine Applications", meta: "Research paper", tags: "CFD, Wind turbines" },
  { img: "/paper2.jpeg", title: "Comparative Simulation Analysis of Aerostatic Thrust Bearing and Orifice-Type Aerostatic Thrust Bearing", meta: "Kashf Journal of Multidisciplinary Research, Vol. 03, Issue 04 (2026)", tags: "Simulation, Bearings" },
];
const jobs = [
  { role: "Lecturer", org: "NFC Institute of Engineering & Technology, Multan", date: "Aug 2024 – Jul 2025", pts: ["Delivered lectures on core mechanical engineering subjects, with conceptual clarity and practical relevance for undergraduates.", "Supervised student projects and conducted assessments of academic performance and technical understanding."] },
  { role: "Lab Engineer", org: "NFC Institute of Engineering & Technology, Multan", date: "Sep 2021 – Jul 2024", pts: ["Documented and developed engineering procedures and processes.", "Assisted in developing cost-effective solutions to engineering problems.", "Conducted technical evaluations of engineering designs and test results.", "Performed complex calculations to analyze and optimize engineering processes."] },
];
const skills = ["Engineering problem solving", "SolidWorks", "Microsoft Office", "Digital marketing", "Leadership"];
const achievements = ["Class Representative at the university", "Captain of the Mechanical Cricket Team", "Finance Secretary in SMET", "Event organizer at the university"];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a href="#works">Research</a><a href="#experience">Experience</a><a href="#contact">Contact</a>
      </nav>

      <section className="hero">
        <div className="hero-text">
          <h1>Hi, I am Hussain,<br />Mechanical Engineer</h1>
          <p>I hold an M.Sc. in Mechanical Engineering and have worked as a lab engineer and lecturer. My research covers coal combustion for power plants, wind turbine aerofoils and aerostatic bearings.</p>
          <a className="btn" href="/Syed_Hussain_Mehdi_CV.pdf" download>Download Resume</a>
        </div>
        <img className="avatar" src="/profile.png" alt="Syed Hussain Mehdi" />
      </section>

      <section className="band" id="works">
        <div className="row"><h2>Publications</h2><a href="#contact">Get in touch</a></div>
        <div className="grid">
          {papers.map((p) => (
            <article className="card" key={p.title}>
              <img src={p.img} alt={p.title} />
              <h3>{p.title}</h3>
              <div className="meta"><span>{p.meta}</span><i /><span>{p.tags}</span></div>
            </article>
          ))}
        </div>
        <article className="card wide">
          <h3>Thesis: Experimental analysis of combustion of Thar coal for its utilization in power plants</h3>
          <div className="meta"><span>M.Sc. Mechanical Engineering, 2022 – 2024</span></div>
        </article>
      </section>

      <section className="section" id="experience">
        <h2>Experience</h2>
        {jobs.map((j) => (
          <div className="job" key={j.role}>
            <div className="meta"><strong>{j.role}</strong><i /><span>{j.date}</span></div>
            <p className="org">{j.org}</p>
            <ul>{j.pts.map((t) => <li key={t}>{t}</li>)}</ul>
          </div>
        ))}
      </section>

      <section className="band">
        <div className="cols">
          <div><h2>Education</h2>
            <div className="card"><h3>M.Sc. Mechanical Engineering</h3><div className="meta"><span>Jan 2022 – Jun 2024</span></div></div>
            <div className="card"><h3>B.Sc. Mechanical Engineering</h3><div className="meta"><span>Aug 2017 – Aug 2021</span></div></div>
          </div>
          <div><h2>Skills</h2>
            <div className="chips">{skills.map((s) => <span key={s}>{s}</span>)}</div>
            <h2 className="mt">Achievements</h2>
            <ul>{achievements.map((a) => <li key={a}>{a}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="section" id="contact">
        <h2>Contact</h2>
        <p>Multan, Pakistan</p>
        <p><a href="mailto:mehdihussain330@gmail.com">mehdihussain330@gmail.com</a> &nbsp;|&nbsp; <a href="tel:+923037253353">+92 303 7253353</a></p>
      </section>
      <footer>© 2026 Syed Hussain Mehdi</footer>
    </main>
  );
}
