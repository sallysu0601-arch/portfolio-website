import { useEffect, useState } from 'react'

const Arrow = () => <span aria-hidden="true">↗</span>

const projects = [
  { no: '01', type: 'Digital Product · 2025', title: 'NOVA', subtitle: '让复杂的金融决策，变得清晰而从容。', className: 'nova' },
  { no: '02', type: 'Brand Identity · 2024', title: 'MORPH', subtitle: '一套为新世代文化空间而生的流动视觉语言。', className: 'morph' },
  { no: '03', type: 'Experience Design · 2024', title: 'MOTION / 24', subtitle: '连接城市、声音与每一个在场的人。', className: 'motion' },
]

function Nav() {
  const [open, setOpen] = useState(false)
  return <header className="nav">
    <a className="monogram" href="#top" aria-label="返回首页">L<span>●</span></a>
    <nav className={open ? 'open' : ''} aria-label="主要导航">
      <a href="#about" onClick={() => setOpen(false)}>About</a><a href="#projects" onClick={() => setOpen(false)}>Work</a><a href="#contact" onClick={() => setOpen(false)}>Contact</a>
    </nav>
    <div className="availability"><i /> Available for projects</div>
    <button className="menu" onClick={() => setOpen(!open)} aria-label="切换导航" aria-expanded={open}><span /><span /></button>
  </header>
}

function App() {
  useEffect(() => {
    const items = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')), { threshold: .12 })
    items.forEach(item => observer.observe(item)); return () => observer.disconnect()
  }, [])

  return <>
    <Nav />
    <main id="top">
      <section className="hero">
        <div className="hero-kicker">Independent Designer · Shanghai / Remote</div>
        <h1><span>Designing</span><span>clarity <em>in</em> complexity.</span></h1>
        <div className="hero-orbit" aria-hidden="true"><div className="orbital"><b>形</b></div></div>
        <div className="hero-bottom"><p>专注于数字产品、视觉系统与品牌体验，<br />用策略与美学创造持久的价值。</p><a href="#projects">View selected work <Arrow /></a></div>
        <div className="scroll-mark"><span>SCROLL TO EXPLORE</span><i /></div>
      </section>

      <section className="about reveal" id="about">
        <div className="section-label"><span>01</span> ABOUT</div>
        <div className="about-content">
          <h2>我相信，好的设计不是装饰，<br />而是<span>建立秩序，传递感受。</span></h2>
          <div className="about-copy"><p>我是 Lin，一名跨领域设计师。我的工作游走于产品逻辑与视觉表达之间，通过洞察、系统思考与精确执行，让品牌与用户建立真实连接。</p><p>从一个界面到一套完整品牌，我始终关心同一件事：它如何被感知，又如何被记住。</p><a href="#contact">More about me <Arrow /></a></div>
        </div>
        <div className="facts"><div><strong>6+</strong><span>YEARS OF EXPERIENCE</span></div><div><strong>32</strong><span>PROJECTS DELIVERED</span></div><div><strong>08</strong><span>DESIGN AWARDS</span></div></div>
      </section>

      <section className="work" id="projects">
        <div className="work-head reveal"><div className="section-label"><span>02</span> SELECTED WORK</div><h2>Projects with<br /><i>purpose.</i></h2><p>一组关于产品、品牌与体验的<br />精选实践。</p></div>
        <div className="project-list">{projects.map((p, i) => <article className={`project reveal ${p.className}`} key={p.title}>
          <div className="project-meta"><span>{p.no}</span><span>{p.type}</span></div>
          <div className="project-visual">
            {i === 0 && <div className="device"><div className="device-bar"><i /><span>Good morning, Alex</span><b>•••</b></div><div className="balance"><small>TOTAL BALANCE</small><strong>$ 84,290.20</strong><span>+ 8.4% this month</span></div><div className="chart"><svg viewBox="0 0 500 130" preserveAspectRatio="none"><path d="M0 110 C70 95 75 115 135 84 S220 100 272 63 S355 75 405 42 S460 36 500 12" /></svg></div></div>}
            {i === 1 && <div className="morph-art"><div>M</div><div>O</div><div>R</div><div>P</div><div>H</div></div>}
            {i === 2 && <div className="poster"><small>INTERNATIONAL<br/>MOVING IMAGE<br/>FESTIVAL</small><strong>M/24</strong><div className="poster-orbit"/><span>OCT 18—20<br/>SHANGHAI</span></div>}
          </div>
          <div className="project-info"><h3>{p.title}</h3><p>{p.subtitle}</p><button aria-label={`查看 ${p.title} 项目`}><Arrow /></button></div>
        </article>)}</div>
      </section>

      <section className="skills reveal" id="skills">
        <div className="section-label"><span>03</span> CAPABILITIES</div>
        <div className="skills-intro"><h2>From thought<br />to <i>form.</i></h2><p>我与团队一起定义问题、探索方向，并将想法推进为完整、可用且令人愉悦的体验。</p></div>
        <div className="skill-list">
          <div><span>01</span><h3>Product & UI/UX</h3><p>产品策略 · 用户体验 · 交互设计 · 设计系统</p><b>↗</b></div>
          <div><span>02</span><h3>Visual Design</h3><p>视觉概念 · 动态设计 · 数字体验 · 创意指导</p><b>↗</b></div>
          <div><span>03</span><h3>Brand Identity</h3><p>品牌策略 · 视觉识别 · 品牌规范 · 品牌体验</p><b>↗</b></div>
        </div>
      </section>

      <section className="contact reveal" id="contact">
        <div className="contact-top"><div className="section-label"><span>04</span> CONTACT</div><div className="availability"><i /> Available for projects</div></div>
        <p>Have a project in mind?</p><a href="mailto:hello@lin.design">Let's make it <i>real.</i><Arrow /></a>
        <footer><span>© 2026 LIN STUDIO</span><div><a href="#top">INSTAGRAM ↗</a><a href="#top">BEHANCE ↗</a><a href="#top">LINKEDIN ↗</a></div><a href="#top">BACK TO TOP ↑</a></footer>
      </section>
    </main>
  </>
}

export default App
