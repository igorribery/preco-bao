import precoBaoHero from "./assets/preco-bao.jpg";

// ====================== CONFIG (EDITE AQUI) ======================
const LINKS = {
  whatsapp: "https://chat.whatsapp.com/KksMxUlIoWPBCehzfJBRPe",
  telegram: "https://t.me/precobao1",
};

const STEPS = [
  { icon: "⚖️", titulo: "Compara o preço", texto: "O robô vigia as lojas o dia todo e compara com o histórico do produto." },
  { icon: "🎁", titulo: "Separa a oferta boa", texto: "Só passa o que está realmente abaixo do preço normal. Sem “promoção” de mentirinha." },
  { icon: "✅", titulo: "Valida e avisa você", texto: "Antes de postar, confere se o link funciona e se ainda tem estoque." },
];

const FAQ = [
  ["É de graça?", "Sim. Entrar e ficar nos grupos não custa nada."],
  ["Qual grupo eu escolho?", "Os dois recebem as mesmas ofertas. Recomendamos o WhatsApp, que você já abre todo dia. O Telegram é para quem prefere."],
  ["Vou receber spam?", "Não. Só ofertas, sem conversa paralela. Você pode silenciar ou sair quando quiser."],
];
// ==================================================================

// Dispara evento no TikTok Pixel quando alguém clica para entrar no grupo
const trackJoin = (canal, local) => {
  try {
    if (window.ttq) {
      window.ttq.track("Contact", { content_name: canal, content_category: local });
    }
  } catch {
    /* nunca deixa o rastreio travar o clique */
  }
};


const WaIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm5.2 13.9c-.2.6-1.2 1.2-1.7 1.2-.5.1-1 .2-3.3-.7-2.800-1.100-4.600-4-4.700-4.200-.1-.2-1.100-1.500-1.100-2.800s.7-2 1-2.300c.2-.3.500-.3.700-.3h.5c.2 0 .4 0 .6.500l.8 1.900c.1.200.1.400 0 .5l-.4.600-.3.400c-.1.200-.3.300-.1.600.2.300.8 1.300 1.700 2.100 1.100 1 2.100 1.300 2.400 1.400.3.100.5.100.600-.1l.9-1.100c.2-.3.400-.2.600-.1l1.900.9c.3.100.5.200.5.300.1.200.1.800-.1 1.400z" />
  </svg>
);
const TgIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M21.9 4.2 18.600 19.600c-.2 1.100-.9 1.400-1.800.9l-5-3.700-2.400 2.300c-.3.300-.5.500-1 .5l.4-5.100 9.300-8.400c.4-.4-.1-.6-.6-.2L6.200 13 1.300 11.500c-1.100-.3-1.100-1 .2-1.600L20.700 2.600c.9-.3 1.700.2 1.200 1.600z" />
  </svg>
);

function CtaButtons({ local = "hero" }) {
  return (
    <div className="cta-main">
      <a
        className="btn btn-wa btn-xl"
        href={LINKS.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackJoin("whatsapp", local)}
      >
        <WaIcon /> Entrar no grupo do WhatsApp
      </a>
      <a
        className="link-tg"
        href={LINKS.telegram}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackJoin("telegram", local)}
      >
        <TgIcon /> Prefere Telegram? Entre por aqui
      </a>
    </div>
  );
}

export default function App() {
  return (
    <>
      <style>{css}</style>

      <header className="top">
        <a className="brand" href="#topo" aria-label="Preço Bão">
          <img src={precoBaoHero} alt="" width="44" height="44" />
          <span>Preço <b>Bão</b></span>
        </a>
        <a className="btn btn-sm btn-wa" href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer" onClick={() => trackJoin("whatsapp", "header")}>
          Entrar no grupo
        </a>
      </header>

      <main id="topo">
        {/* HERO */}
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-text">
              <h1>
                Oferta boa de verdade, direto no seu celular antes de acabar
              </h1>
              <p className="lead">
                O robô do Preço Bão vigia as lojas, compara os preços e só manda no grupo o que vale a pena. Entre de graça e pare de pagar caro.
              </p>
              <CtaButtons local="hero" />
              <p className="fine">Grupos gratuitos. Você sai quando quiser.</p>
            </div>
            <div className="hero-art">
              <div className="hero-orb">
                <img src={precoBaoHero} alt="Robô mascote do Preço Bão com uma lupa, carrinho de compras e ofertas" />
              </div>
            </div>
          </div>
        </section>


        {/* COMO FUNCIONA */}
        <section className="sec alt">
          <div className="wrap">
            <h2>Como o Preço Bão escolhe o que posta</h2>
            <ol className="steps">
              {STEPS.map((s) => (
                <li key={s.titulo}>
                  <span className="bubble" aria-hidden="true">{s.icon}</span>
                  <h3>{s.titulo}</h3>
                  <p>{s.texto}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ESCOLHA O GRUPO */}
        <section className="sec">
          <div className="wrap">
            <h2>Escolha onde quer receber</h2>
            <div className="groups">
              <div className="gcard gwa">
                <span className="badge">⭐ Recomendado</span>
                <h3>Grupo no WhatsApp</h3>
                <p>As ofertas chegam junto com suas outras mensagens. Ideal para quem não quer instalar nada novo.</p>
                <a className="btn btn-wa btn-xl" href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer" onClick={() => trackJoin("whatsapp", "cards")}><WaIcon /> Entrar no WhatsApp</a>
              </div>
              <div className="gcard gtg">
                <h3>Canal no Telegram</h3>
                <p>Mesmas ofertas, com busca para achar posts antigos e sem limite de pessoas no grupo.</p>
                <a className="btn btn-tg btn-sm" href={LINKS.telegram} target="_blank" rel="noopener noreferrer" onClick={() => trackJoin("telegram", "cards")}><TgIcon /> Entrar no Telegram</a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="sec alt">
          <div className="wrap narrow">
            <h2>Perguntas rápidas</h2>
            {FAQ.map(([q, a]) => (
              <details key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="final">
          <div className="wrap">
            <h2>A próxima oferta boa já está saindo</h2>
            <p className="sub">Entre agora e não fique sabendo só depois que acabou.</p>
            <CtaButtons local="final" />
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <p>2026 © Preço Bão - Todos os direitos reservados..</p>
        </div>
      </footer>

      {/* Barra fixa no celular: o clique de quem veio do anúncio fica sempre a um toque */}
      <nav className="dock" aria-label="Entrar nos grupos">
        <a className="btn btn-wa" href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer" onClick={() => trackJoin("whatsapp", "dock")}><WaIcon /> Entrar no WhatsApp</a>
        <a className="btn btn-tg" href={LINKS.telegram} target="_blank" rel="noopener noreferrer" onClick={() => trackJoin("telegram", "dock")}><TgIcon /> Telegram</a>
      </nav>
    </>
  );
}

const css = `
@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;800&family=Nunito:wght@400;600;700&display=swap');

:root{
  --bg:#071a45; --bg2:#0b2559; --panel:#0f2f73; --line:#2a5db0;
  --orange:#ff8a1f; --yellow:#ffc72c; --ink:#ffffff; --muted:#b9cdf0;
  --wa:#1fa855; --tg:#2b8fe0;
  --display:'Baloo 2','Trebuchet MS',system-ui,sans-serif;
  --body:'Nunito',system-ui,-apple-system,'Segoe UI',sans-serif;
}
*{box-sizing:border-box;margin:0}
html{scroll-behavior:smooth}
body{background:var(--bg);color:var(--ink);font-family:var(--body);font-size:17px;line-height:1.6;-webkit-font-smoothing:antialiased}
img{max-width:100%;display:block}
a{color:inherit}
:focus-visible{outline:3px solid var(--yellow);outline-offset:3px}
.wrap{width:min(1080px,100% - 40px);margin-inline:auto}
.narrow{width:min(720px,100% - 40px)}
.center{text-align:center}

h1,h2,h3{font-family:var(--display);line-height:1.1;font-weight:800}
h1{font-size:clamp(2.2rem,5.6vw,3.8rem);color:var(--yellow);text-shadow:0 3px 0 #b3560a;letter-spacing:-.01em}
h2{font-size:clamp(1.7rem,3.6vw,2.4rem);margin-bottom:10px}
h3{font-size:1.25rem}
.sub{color:var(--muted);max-width:60ch;margin-bottom:32px}
.lead{color:#e3edff;font-size:1.15rem;max-width:46ch;margin:18px 0 28px}
.fine{color:var(--muted);font-size:.88rem;margin-top:14px}
.hero-text{display:flex;flex-direction:column;align-items:center;text-align:center}
.hero-text .cta-main{align-items:center;width:100%}
.hero-text .fine{text-align:center}

/* botões */
.btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;padding:15px 24px;border-radius:999px;font-family:var(--display);font-weight:800;font-size:1.1rem;text-decoration:none;border:0;cursor:pointer;color:#fff;transition:transform .15s,filter .15s;box-shadow:0 4px 0 rgba(0,0,0,.28)}
.btn:hover{transform:translateY(-2px);filter:brightness(1.08)}
.btn:active{transform:translateY(2px);box-shadow:0 1px 0 rgba(0,0,0,.28)}
.btn-wa{background:var(--wa)} .btn-tg{background:var(--tg)}
.btn-orange{background:var(--orange);color:#2b1300;width:100%}
.btn-sm{padding:9px 18px;font-size:1rem}
.cta{display:flex;flex-wrap:wrap;gap:14px}
.cta-main{display:flex;flex-direction:column;align-items:flex-start;gap:14px}
.btn-xl{padding:18px 34px;font-size:1.3rem;animation:pulse 2.2s ease-out infinite}
@keyframes pulse{0%{box-shadow:0 4px 0 rgba(0,0,0,.28),0 0 0 0 rgba(31,168,85,.65)}70%{box-shadow:0 4px 0 rgba(0,0,0,.28),0 0 0 16px rgba(31,168,85,0)}100%{box-shadow:0 4px 0 rgba(0,0,0,.28),0 0 0 0 rgba(31,168,85,0)}}
.link-tg{display:inline-flex;align-items:center;gap:8px;color:var(--muted);font-size:.95rem;font-weight:600;text-decoration:underline;text-underline-offset:3px}
.link-tg:hover{color:#fff}
.link-tg svg{width:18px;height:18px}
.badge{background:var(--yellow);color:#2b1300;font-family:var(--display);font-weight:800;font-size:.85rem;padding:3px 12px;border-radius:999px}

/* header */
.top{position:sticky;top:0;z-index:20;display:flex;align-items:center;justify-content:space-between;padding:10px max(20px,calc((100% - 1080px)/2));background:rgba(7,26,69,.92);backdrop-filter:blur(8px);border-bottom:1px solid rgba(42,93,176,.5)}
.brand{display:flex;align-items:center;gap:10px;text-decoration:none;font-family:var(--display);font-weight:800;font-size:1.4rem;color:var(--orange)}
.brand b{color:#fff}
.brand img{border-radius:50%;object-fit:cover;width:44px;height:44px}

/* hero com a grade do banner */
.hero{padding:56px 0 72px;background:
  radial-gradient(60% 70% at 78% 40%,rgba(43,143,224,.35),transparent 70%),
  linear-gradient(rgba(42,93,176,.22) 1px,transparent 1px) 0 0/48px 48px,
  linear-gradient(90deg,rgba(42,93,176,.22) 1px,transparent 1px) 0 0/48px 48px,var(--bg)}
.hero-grid{display:grid;grid-template-columns:1.1fr .9fr;gap:40px;align-items:center}
.hero-art{display:flex;justify-content:center}
.hero-orb{flex-shrink:0;border-radius:50%;overflow:hidden;aspect-ratio:1}
.hero-orb img{width:100%;height:100%;object-fit:cover;object-position:center;border-radius:0;box-shadow:none}
@keyframes float{50%{transform:translateY(-12px)}}
@keyframes float-mobile{50%{transform:translateY(-5px)}}

@media (min-width:821px){
  .hero-orb{width:100%;max-width:460px;aspect-ratio:1;box-shadow:0 0 0 6px rgba(255,199,44,.9),0 0 60px rgba(43,143,224,.6);animation:float 5s ease-in-out infinite}
  .hero-orb img{object-fit:cover}
}

/* seções */
.sec{padding:72px 0}
.alt{background:var(--bg2)}

/* ofertas: cartões em formato de etiqueta de preço */
.offers{display:grid;grid-template-columns:repeat(auto-fill,minmax(290px,1fr));gap:22px}
.tag{position:relative;background:var(--panel);border:2px solid var(--line);border-radius:6px 26px 26px 26px;padding:34px 20px 20px;display:flex;flex-direction:column;gap:6px}
.tag::before{content:"";position:absolute;top:12px;left:18px;width:14px;height:14px;border-radius:50%;background:var(--bg);border:2px solid var(--line)}
.pill{position:absolute;top:-2px;right:18px;background:var(--orange);color:#2b1300;font-family:var(--display);font-weight:800;padding:4px 14px 6px;border-radius:0 0 14px 14px;font-size:1.15rem}
.pic{height:130px;border-radius:14px;background:var(--bg);display:grid;place-items:center;font-size:3.6rem;overflow:hidden;margin-bottom:6px}
.pic img{width:100%;height:100%;object-fit:contain;background:#fff}
.store{color:var(--yellow);font-weight:700;font-size:.9rem}
.tag h3{font-size:1.1rem;font-family:var(--body);font-weight:700;line-height:1.3;min-height:2.6em}
.price{display:flex;align-items:baseline;gap:10px;margin:6px 0 12px}
.price s{color:var(--muted);font-size:.95rem}
.price strong{font-family:var(--display);font-size:1.9rem;color:#fff}

/* como funciona */
.steps{list-style:none;padding:0;display:grid;grid-template-columns:repeat(3,1fr);gap:22px;margin-top:30px;position:relative}
.steps li{background:var(--panel);border:2px solid var(--line);border-radius:22px;padding:26px 22px}
.bubble{display:grid;place-items:center;width:64px;height:64px;border-radius:50%;background:var(--bg);border:3px solid var(--yellow);font-size:1.8rem;margin-bottom:14px}
.steps h3{margin-bottom:6px}
.steps p{color:var(--muted)}

/* grupos */
.groups{display:grid;grid-template-columns:1.3fr .9fr;align-items:stretch;gap:22px;margin-top:28px}
.gcard{border-radius:24px;padding:30px;display:flex;flex-direction:column;align-items:flex-start;gap:14px;border:2px solid}
.gwa{background:linear-gradient(160deg,rgba(31,168,85,.22),var(--panel));border-color:var(--wa)}
.gtg{background:linear-gradient(160deg,rgba(43,143,224,.28),var(--panel));border-color:var(--tg)}
.gcard p{color:#dbe7ff;flex:1}
.gwa{box-shadow:0 0 0 3px rgba(31,168,85,.35),0 10px 40px rgba(31,168,85,.25)}
.gtg{opacity:.85}

/* faq */
details{border-bottom:1px solid var(--line);padding:16px 0}
summary{cursor:pointer;font-weight:700;font-size:1.1rem;list-style:none;display:flex;justify-content:space-between;gap:12px}
summary::-webkit-details-marker{display:none}
summary::after{content:"+";color:var(--yellow);font-family:var(--display);font-size:1.6rem;line-height:1}
details[open] summary::after{content:"–"}
details p{color:var(--muted);margin-top:10px}

/* cta final */
.final{padding:80px 0;text-align:center;background:linear-gradient(180deg,var(--bg),#0a2a6e)}
.final .sub{margin-inline:auto}
.final .cta-main{align-items:center}

footer{padding:30px 0 40px;color:var(--muted);font-size:.82rem;background:#05123099}

/* barra fixa mobile */
.dock{display:none}

@media (max-width:820px){
  .hero{padding:24px 0 40px}
  .hero-grid{grid-template-columns:1fr;text-align:center;gap:28px}
  .hero-text h1{font-size:clamp(1.85rem,8vw,2.35rem)}
  .lead{margin-inline:auto;font-size:1.05rem;margin:14px 0 22px}
  .hero .cta-main{align-items:center}
  .btn-xl{padding:17px 20px;font-size:1.15rem}
  .hero-art{margin-top:4px}
  .hero-orb{width:min(280px,66vw);max-width:none;box-shadow:0 0 0 4px rgba(255,199,44,.9),0 0 36px rgba(43,143,224,.45);animation:float-mobile 5s ease-in-out infinite}
  .steps,.groups{grid-template-columns:1fr}
  .sec{padding:52px 0}
  .btn{width:100%}
  .btn-sm{width:auto}
  .dock{display:flex;gap:10px;position:fixed;inset:auto 0 0 0;z-index:30;padding:10px 14px calc(10px + env(safe-area-inset-bottom));background:rgba(7,26,69,.96);border-top:1px solid var(--line)}
  .dock .btn{padding:12px 10px;font-size:1rem}
  .dock .btn-wa{flex:2}
  .dock .btn-tg{flex:1;background:transparent;border:2px solid var(--tg);box-shadow:none;color:#cfe4ff}
  footer{padding-bottom:100px}
}
@media (prefers-reduced-motion:reduce){
  html{scroll-behavior:auto}
  .hero-orb{animation:none}
  .btn{transition:none}
  .btn-xl{animation:none}
}
`;