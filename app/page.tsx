


const highlights = [
  { value: "40+", label: "年資訊實作經驗" },
  { value: "20+", label: "年網站與校園系統管理" },
  { value: "2700萬+", label: "部落格累計訪客" },
  { value: "5200萬+", label: "PageViews" },
];

const expertise = [
  {
    title: "校園資訊治理",
    copy: "管理全校網路、電腦與伺服器，把機房、教室、行政流程與資訊安全連成可靠的日常基礎建設。",
  },
  {
    title: "雲端與教學應用",
    copy: "長期推廣 Google 雲端、Classroom、行動載具、遠距與非同步教學，讓工具真的進入老師的課堂。",
  },
  {
    title: "校務系統開發",
    copy: "從 EIP、新生報到、報修、問卷到成績查詢，將校園裡重複又關鍵的流程做成可用的系統。",
  },
  {
    title: "免費軟體與知識分享",
    copy: "自 2007 年經營「㊣軟體玩家」，用實測、教學與整理，陪伴大量讀者找到更好的數位工具，也持續追蹤 AI 與 Vibe coding 的最新工作方式。",
  },
];

const systems = [
  { label: "AI 排課系統" },
  { label: "線上程式設計教學平台", href: "https://coding.pcrookie.net/" },
  { label: "校內 EIP 系統" },
  { label: "大學榜單查詢" },
  { label: "SH150 填報" },
  { label: "新生線上報到" },
  { label: "新生資料校對" },
  { label: "資優鑑定查榜" },
  { label: "教甄成績查詢" },
  { label: "晚自習點名查詢" },
  { label: "報修系統" },
  { label: "重補修報名" },
];

const talks = [
  "Google 免費資源一把罩",
  "Google 雲端資源輕鬆學",
  "Google Classroom 在教學上的應用",
  "雲端辦公術與非營利組織培力",
  "電腦教室管理經驗談",
  "行動載具在課堂上的教學應用",
  "遠距教學與非同步教學攻略",
  "Google 雲端實務運用策略",
];

const publications = [
  {
    titles: ["全民都要的 Google 懶人包", "iPad App 懶人包：4 大站長聯手出擊"],
    note: "著作",
    image: "/works-cover-google-ipad.jpg",
  },
  {
    titles: [
      "WordPress 部落格架設與經營：站長親授的十堂課",
      "站長親授！WordPress 3.0 部落格架站十堂課",
    ],
    note: "著作",
    image: "/works-cover-wordpress.jpg",
  },
  {
    titles: ["Best Download！部落客評選的最優軟體殿堂", "社群情報力"],
    note: "專欄與著作",
    image: "/works-cover-best-download.png",
  },
];

const timeline = [
  {
    period: "89-101",
    title: "豐原高中設備組長、資訊組長",
    detail: "從教學現場、設備管理到校園資訊服務，建立深厚的第一線技術底盤。",
  },
  {
    period: "101-110",
    title: "文華高中註冊組長、資訊媒體組長",
    detail: "在教務行政與資訊媒體間整合流程，支援學校數位化與教學科技導入。",
  },
  {
    period: "110-",
    title: "臺中市立文華高中總務主任",
    detail: "持續以行政、資訊與服務設計的交會視角，讓校園運作更穩定、更有效率。",
  },
];

const recognition = [
  "臺中區域網路中心第 13 屆優良網管人員",
  "111 年臺中市優良教育人員",
  "iThome：隱身在豐原高中的超級軟體玩家",
  "iThome：一位電腦老師的軟體試用心得",
  "聯合報：宅老師「軟體玩家」萬人迷",
];

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/softplayer/" },
  { label: "X", href: "https://x.com/quicktop" },
  { label: "Threads", href: "https://www.threads.com/@software.player" },
  { label: "Instagram", href: "https://www.instagram.com/software.player/" },
];

export default async function Home() {


  return (
    <main className="site-shell">
      <section className="hero" id="top">
        <nav className="topbar" aria-label="主要導覽">
          <a className="brand" href="#top" aria-label="A-Zheng 首頁">
            <span className="brand-mark">A</span>
            <span>A-Zheng<small>數位教育實驗室</small></span>
          </a>
          <div className="nav-links">
            <a href="#about">關於</a>
            <a href="#systems">系統</a>
            <a href="#talks">演講</a>
            <a href="#contact" className="nav-contact">聯繫交流 <span aria-hidden="true">↗</span></a>
          </div>
        </nav>

        <div className="hero-layout">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow"><span aria-hidden="true" /> TECHNOLOGY × EDUCATION</p>
            <p className="hero-name">A-Zheng / 陳軒正 / 阿正老師</p>
            <h1>把資訊技術，<br />做成學校每天<br /><em>都用得上的力量。</em></h1>
            <p className="hero-lede">
              從電腦教室、校園網路、伺服器管理，到雲端教學、校務系統、AI 工具與免費軟體分享，阿正老師長期站在教育現場，把複雜的技術整理成穩定、好懂、可落地的解法。
            </p>
            <div className="hero-actions" aria-label="主要行動">
              <a className="primary-button" href="https://pcrookie.com/" target="_blank" rel="noreferrer">
                探索 ㊣軟體玩家 <span aria-hidden="true">↗</span>
              </a>
              <a className="secondary-button" href="#systems">
                看校務系統案例 <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <figure className="hero-panel">
            <div className="visual-topline"><span className="live-dot" /> DIGITAL CAMPUS LAB <span>01 / EXPLORE</span></div>
            <img className="hero-illustration" src="/digital-campus-v2.png" width="1536" height="1024" alt="以雲端串連筆記型電腦、校園與伺服器的立體數位教育插圖" fetchPriority="high" />
            <figcaption className="visual-caption"><span className="visual-symbol" aria-hidden="true">✳</span><span><strong>讓科技，回到人的需要。</strong><small>校園治理 · 雲端教學 · AI 實作</small></span><span className="visual-arrow" aria-hidden="true">↗</span></figcaption>
          </figure>
        </div>
      </section>

      <section className="metrics" aria-label="代表數據">
        {highlights.map((item) => (
          <div key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <section className="about-section section" id="about">
        <div className="section-heading">
          <p className="eyebrow">01 / ABOUT THE EDUCATOR</p>
          <h2>不是只懂工具，而是知道學校真正需要什麼。</h2>
        </div>
        <div className="about-grid">
          <div className="about-copy">
              <p>
              陳軒正老師畢業於國立高雄師範大學資訊教育研究所，專長橫跨網路管理、伺服器架設、網站架設、程式語言、網頁程式設計、資訊安全、免費軟體、Web 2.0、虛擬化、雲端服務與 AI 工作流。
            </p>
            <p>
              這些能力不是停在履歷上，而是一路被帶進校園：讓行政流程能被系統支援，讓老師能把雲端工具帶進教學，也讓一般使用者能透過「㊣軟體玩家」找到可信任的軟體、雲端與 AI 工具經驗。
            </p>
          </div>
          <figure className="portrait-card">
            <img
              src="/learning-network-v2.png"
              width="1536" height="1024" loading="lazy"
              alt="書本、知識網絡與雲端伺服器串連的科技教育插圖"
            />
            <figcaption>CONNECTING KNOWLEDGE & POSSIBILITY</figcaption>
          </figure>
        </div>
      </section>

      <section className="section expertise-section" aria-label="專業領域">
        <div className="card-grid">
          {expertise.map((item, index) => (
            <article className="expertise-card" key={item.title}>
              <span className="expertise-icon" aria-hidden="true">{["⌘", "☁", "⟨/⟩", "✳"][index]}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="systems-section section" id="systems">
        <div className="section-heading narrow">
          <p className="eyebrow">02 / BUILT FOR REAL LIFE</p>
          <h2>把繁瑣的校園日常，<br />變成簡單好用的系統。</h2>
          <p className="section-intro">從教學到行政，讓每一個真實需求，都有更有效率的解法。</p>
        </div>
        <div className="systems-board">
          {systems.map((system, index) => (
            <div className={system.href ? "system-item has-link" : "system-item"} key={system.label}>
              <small>{String(index + 1).padStart(2, "0")}</small>
              {system.href ? (
                <a className="system-link" href={system.href} target="_blank" rel="noreferrer">
                  {system.label}
                  <b aria-hidden="true">↗</b>
                </a>
              ) : (
                system.label
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="section talks-section" id="talks">
        <div className="split-heading">
          <div>
            <p className="eyebrow">03 / TALKS & WORKSHOPS</p>
            <h2>把工具講到能上手，把經驗講到能帶回現場。</h2>
          </div>
          <p>
            研習足跡包含台大、真理大學、銘傳大學、臺南市資訊教育輔導團、多所高中職、公益組織、醫院與地方公所，主題聚焦 Google 雲端、Classroom、遠距教學、行動載具與雲端辦公。
          </p>
        </div>
        <div className="talk-list">
          {talks.map((talk) => (
            <span key={talk}>{talk}</span>
          ))}
        </div>
      </section>

      <section className="section works-section" id="works">
        <div className="split-heading">
          <div>
            <p className="eyebrow">04 / BOOKS & PUBLICATIONS</p>
            <h2>把長期累積的軟體經驗，整理成可以帶走的作品。</h2>
          </div>
          <p>
            從免費軟體、Google 雲端到社群觀察，這些著作記錄了阿正老師一路分享工具、教學與數位生活方法的軌跡。
          </p>
        </div>
        <div className="works-grid">
          {publications.map((publication) => (
            <article className="work-card" key={publication.titles.join("-")}>
              <div className="work-cover-wrap">
                <img
                  className="work-cover"
                  loading="lazy"
                  src={publication.image}
                  alt={`${publication.titles.join("、")} 封面`}
                />
              </div>
              <div className="work-card-copy">
                <span>{publication.note}</span>
                <div className="work-title-list">
                  {publication.titles.map((title) => (
                    <h3 key={title}>{title}</h3>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="timeline-section section" aria-label="經歷">
        <div className="section-heading">
          <p className="eyebrow">05 / EXPERIENCE</p>
          <h2>一路從資訊現場走到行政決策，把兩邊的語言接起來。</h2>
        </div>
        <div className="timeline">
          {timeline.map((item) => (
            <article key={item.period}>
              <span>{item.period}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="recognition-section section" aria-label="獲獎與報導">
        <div className="recognition-copy">
          <p className="eyebrow">06 / RECOGNITION</p>
          <h2>技術、教學與分享，留下被看見的痕跡。</h2>
        </div>
        <div className="recognition-layout">
          <figure className="press-card">
            <img src="/udn20100714.png.webp" loading="lazy" alt="2010 年聯合報報導：宅老師「軟體玩家」萬人迷" />
            <figcaption>2010 聯合報地方新聞報導：宅老師「軟體玩家」萬人迷</figcaption>
          </figure>
          <div className="recognition-list">
            {recognition.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <p className="eyebrow">LET’S CONNECT</p>
          <h2>讓好的工具與經驗，<br />走進更多人的日常。</h2>
          <p className="contact-copy">閱讀文章、交流教學，或一起探索科技的新可能。</p>
        </div>
        <div className="contact-actions">
          <a className="primary-button light" href="https://pcrookie.com/" target="_blank" rel="noreferrer">
            ㊣軟體玩家 <span aria-hidden="true">↗</span>
          </a>
          <a className="secondary-button light-outline" href="#about">
            認識阿正老師
          </a>
        </div>
        <div className="social-row" aria-label="官方社群">
          {socialLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </section>
      <footer className="site-footer"><a href="#top" className="footer-brand">A-Zheng<span>數位教育實驗室</span></a><p>讓技術有溫度，讓教育有更多可能。</p><a href="#top">回到頂端 ↑</a></footer>
    </main>
  );
}

