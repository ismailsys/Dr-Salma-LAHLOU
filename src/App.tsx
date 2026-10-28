import { useEffect, useState, type ReactNode } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Brain,
  CalendarDays,
  ChevronDown,
  Clock3,
  GraduationCap,
  MapPin,
  Menu,
  MessageCircle,
  Navigation,
  Phone,
  Plus,
  Quote,
  ShieldCheck,
  Stethoscope,
  X
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const BASE = import.meta.env.BASE_URL;
const image = (file: string) => `${BASE}${encodeURIComponent(file)}`;
const PHONE = "+212522276634";
const WHATSAPP = "https://wa.me/212669630741?text=Bonjour%20Docteur%2C%20je%20souhaite%20me%20renseigner%20sur%20un%20rendez-vous.";
const ADDRESS = "175 Rue Boukraa, Résidence Houssam Jassim, 1er étage, appartement n° 5, quartier Bourgogne, Casablanca";
const MAPS = "https://www.google.com/maps/dir/?api=1&destination=" + encodeURIComponent(ADDRESS);

const navigation = [
  { label: "Spécialités", href: "#expertise" },
  { label: "Parcours patient", href: "#parcours-patient" },
  { label: "Avis", href: "#avis" },
  { label: "Le cabinet", href: "#cabinet" }
];

function Reveal({
  children,
  className = "",
  delay = 0
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reducedMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reducedMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{
        duration: reducedMotion ? 0 : 0.62,
        delay: reducedMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      {children}
    </motion.div>
  );
}

function Brand({ light = false }: { light?: boolean }) {
  return (
    <a className={`brand-link ${light ? "brand-link-light" : ""}`} href="#accueil" aria-label="Dr Salma Lahlou — accueil">
      <span className="brand-mark">
        <img
          className="brand-logo"
          src="https://raw.githubusercontent.com/ismailsys/Dr-Salma-LAHLOU/main/WhatsApp%20Image%202026-10-27%20at%2009.50.01.jpeg"
          alt=""
          decoding="async"
        />
      </span>
      <span className="brand-copy">
        <strong>Dr Salma Lahlou</strong>
        <small>Neurochirurgie <span>·</span> Casablanca</small>
      </span>
    </a>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left"
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`section-heading ${align === "center" ? "section-heading-center" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function PrimaryLink({
  href,
  children,
  variant = "primary",
  external = false,
  className = ""
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "whatsapp" | "outline" | "light";
  external?: boolean;
  className?: string;
}) {
  return (
    <a
      className={`button button-${variant} ${className}`}
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

const expertise = [
  {
    number: "01",
    icon: Brain,
    title: "Cerveau et crâne",
    text: "Informations générales sur les affections du cerveau et du crâne pouvant nécessiter un avis neurochirurgical.",
    page: "cerveau.html"
  },
  {
    number: "02",
    icon: Stethoscope,
    title: "Colonne vertébrale et rachis",
    text: "Repères sur les douleurs et pathologies de la colonne vertébrale, à discuter avec un professionnel de santé.",
    page: "rachis.html"
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Neurochirurgie pédiatrique",
    text: "Informations générales sur les situations neurochirurgicales de l’enfant ; contactez le cabinet pour confirmer les modalités de consultation.",
    page: "pediatrie.html"
  }
];

const gallery = [
  { src: "unnamed (1).webp", alt: "Espace d’attente du cabinet" },
  { src: "unnamed (2).webp", alt: "Salle d’examen du cabinet" },
  { src: "unnamed (3).webp", alt: "Accueil du cabinet" }
];

const faqItems = [
  {
    q: "Comment prendre rendez-vous ?",
    a: "Contactez le cabinet par téléphone afin de connaître les disponibilités et organiser votre consultation."
  },
  {
    q: "Quelles informations apporter ?",
    a: "Pour faciliter l’échange, pensez à apporter les comptes rendus médicaux, examens d’imagerie et ordonnances dont vous disposez, ainsi qu’une liste de vos traitements en cours."
  },
  {
    q: "Le cabinet reçoit-il les enfants ?",
    a: "Contactez le cabinet pour confirmer si les consultations pédiatriques sont proposées et vérifier les modalités adaptées à votre situation."
  },
  {
    q: "Peut-on prendre rendez-vous directement sur le site ?",
    a: "Le site ne propose pas de réservation en ligne pour le moment. Les demandes de rendez-vous se font directement auprès du cabinet par téléphone."
  }
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <div className="site-shell">
      <div className="utility-bar">
        <div className="page-container utility-inner">
          <span><span className="status-dot" /> Cabinet de neurochirurgie <span className="utility-separator">/</span> Casablanca</span>
          <a href={`tel:${PHONE}`}><Phone size={13} /> +212 5 22 27 66 34</a>
        </div>
      </div>

      <header className="site-header">
        <div className="page-container header-inner">
          <Brand />
          <button
            className="mobile-menu-button"
            type="button"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
          <nav id="primary-navigation" className={`primary-navigation ${menuOpen ? "navigation-open" : ""}`} aria-label="Navigation principale">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
            ))}
            <PrimaryLink href="#contact" className="nav-cta">
              Contacter le cabinet <ArrowUpRight size={16} />
            </PrimaryLink>
          </nav>
        </div>
      </header>

      <main>
        <section id="accueil" className="hero-section">
          <div className="hero-decoration hero-decoration-one" aria-hidden="true" />
          <div className="hero-decoration hero-decoration-two" aria-hidden="true" />
          <div className="page-container hero-layout">
            <div className="hero-content">
              <motion.div
                className="hero-kicker"
                initial={false}
                animate={{ opacity: 1 }}
              >
                <span className="kicker-line" />
                Neurochirurgie à Casablanca
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: "easeOut" }}
              >
                Dr Salma Lahlou
                <span>La neurochirurgie, avec écoute et clarté.</span>
              </motion.h1>
              <motion.p
                className="hero-description"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.12, ease: "easeOut" }}
              >
                Retrouvez les informations sur la spécialité, le parcours médical et les coordonnées du cabinet situé à Bourgogne, Casablanca.
              </motion.p>
              <motion.div
                className="hero-actions"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.2, ease: "easeOut" }}
              >
                <PrimaryLink href={`tel:${PHONE}`}>
                  <Phone size={17} /> Appeler le cabinet
                </PrimaryLink>
                <PrimaryLink href={WHATSAPP} variant="whatsapp" external>
                  <MessageCircle size={17} /> Écrire sur WhatsApp
                </PrimaryLink>
              </motion.div>
              <div className="hero-reassurance">
                <span className="reassurance-icon"><CalendarDays size={17} /></span>
                <span><strong>Consultations sur rendez-vous</strong><small>Cabinet à Bourgogne, Casablanca</small></span>
              </div>
            </div>

            <motion.div
              className="hero-portrait-wrap"
              initial={{ opacity: 0, scale: 0.975 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.85, delay: 0.08, ease: "easeOut" }}
            >
              <div className="portrait-ornament" aria-hidden="true"><span /><span /><span /></div>
              <div className="portrait-frame">
                <img
                  className="hero-portrait"
                  src={image("unnamed.webp")}
                  alt="Portrait du Dr Salma Lahlou, neurochirurgienne"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
              <div className="portrait-caption">
                <div className="portrait-caption-icon"><Plus size={19} /></div>
                <div><strong>Dr Salma Lahlou</strong><span>Neurochirurgienne</span></div>
                <BadgeCheck className="portrait-caption-check" size={21} />
              </div>
              <div className="portrait-index" aria-hidden="true">SL <span>·</span> CASABLANCA</div>
            </motion.div>
          </div>
          <a className="scroll-cue" href="#expertise"><span>Découvrir</span><ArrowDown size={14} /></a>
        </section>

        <section className="quick-facts" aria-label="Informations essentielles">
          <div className="page-container quick-facts-grid">
            <div className="quick-fact">
              <span className="quick-fact-icon"><MapPin size={20} /></span>
              <div><span className="fact-label">Localisation</span><strong>Bourgogne, Casablanca</strong></div>
            </div>
            <div className="quick-fact">
              <span className="quick-fact-icon"><Phone size={19} /></span>
              <div><span className="fact-label">Téléphone du cabinet</span><a href={`tel:${PHONE}`}>+212 5 22 27 66 34</a></div>
            </div>
            <div className="quick-fact">
              <span className="quick-fact-icon"><Clock3 size={20} /></span>
              <div><span className="fact-label">Organisation</span><strong>Sur rendez-vous</strong></div>
            </div>
          </div>
        </section>

        <section id="expertise" className="section-block expertise-section">
          <div className="page-container">
            <Reveal>
              <SectionHeading
                eyebrow="La spécialité"
                title="La neurochirurgie"
                description="La neurochirurgie concerne la prise en charge chirurgicale de certaines affections du système nerveux. Le cabinet peut vous renseigner sur les possibilités de consultation adaptées à votre situation."
                align="center"
              />
            </Reveal>
            <div className="expertise-grid">
              {expertise.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Reveal key={item.number} delay={index * 0.08}>
                    <article className="expertise-card">
                      <div className="expertise-card-top">
                        <span className="expertise-icon"><Icon size={23} strokeWidth={1.6} /></span>
                        <span className="expertise-number">{item.number}</span>
                      </div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                      <a href={`${BASE}pathologies/${item.page}`} className="card-link">Découvrir le domaine <ArrowRight size={15} /></a>
                    </article>
                  </Reveal>
                );
              })}
            </div>
            <p className="medical-note"><ShieldCheck size={16} /> Pour savoir si un motif relève d’une consultation, contactez directement le cabinet.</p>
          </div>
        </section>

        <section id="parcours" className="section-block training-section">
          <div className="page-container training-layout">
            <Reveal className="training-image-column">
              <div className="training-image">
                <img src={image("WhatsApp Image 2026-10-27 at 10.24.31.jpeg")} alt="Photo du parcours et de la formation médicale du Dr Salma Lahlou" loading="lazy" decoding="async" />
                <div className="training-image-shade" />
                <div className="training-image-badge"><span className="badge-monogram">SL</span><span><strong>Le cabinet</strong><small>Bourgogne · Casablanca</small></span></div>
                <div className="training-image-caption">Formation médicale spécialisée.</div>
              </div>
            </Reveal>
            <Reveal className="training-copy" delay={0.1}>
              <span className="eyebrow">Parcours et diplômes</span>
              <h2>Une formation médicale spécialisée.</h2>
              <p className="training-intro">Les éléments ci-dessous reprennent les informations communiquées sur la carte de visite du Dr Salma Lahlou.</p>
              <div className="credentials-list">
                <div className="credential-row">
                  <span className="credential-icon"><Stethoscope size={19} /></span>
                  <div><strong>Spécialité : neurochirurgie</strong><p>Spécialité médicale du cabinet.</p></div>
                </div>
                <div className="credential-row">
                  <span className="credential-icon"><GraduationCap size={20} /></span>
                  <div><strong>Faculté de Médecine et de Pharmacie de Casablanca</strong><p>Lauréate de la faculté.</p></div>
                </div>
                <div className="credential-row">
                  <span className="credential-icon"><BadgeCheck size={19} /></span>
                  <div><strong>Université Sorbonne – Paris</strong><p>Diplômée en Radiologie et Imagerie du Système Nerveux.</p></div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section-block gallery-section">
          <div className="page-container">
            <Reveal>
              <div className="gallery-heading-row">
                <SectionHeading
                  eyebrow="Le cabinet"
                  title="Un aperçu des espaces"
                  description="Quelques vues du cabinet pour vous familiariser avec les lieux avant votre venue."
                />
                <a className="text-link" href="#cabinet">Préparer ma visite <ArrowUpRight size={16} /></a>
              </div>
            </Reveal>
            <div className="gallery-grid">
              {gallery.map((item, index) => (
                <Reveal key={item.src} delay={index * 0.08}>
                  <figure className={`gallery-card gallery-card-${index + 1}`}>
                    <img src={image(item.src)} alt={item.alt} loading="lazy" decoding="async" />
                    <figcaption><span>0{index + 1}</span>{item.alt}</figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="parcours-patient" className="section-block patient-journey-section">
          <div className="page-container">
            <Reveal>
              <SectionHeading
                eyebrow="Votre consultation"
                title="Un parcours simple, à chaque étape."
                description="Quelques repères pour préparer votre venue et faciliter les échanges avec le cabinet."
              />
            </Reveal>
            <div className="journey-grid">
              <Reveal>
                <article className="journey-step">
                  <span className="journey-number">01</span>
                  <span className="journey-icon"><Phone size={21} /></span>
                  <h3>Prendre contact</h3>
                  <p>Appelez le cabinet pour vérifier les disponibilités et les modalités de rendez-vous.</p>
                </article>
              </Reveal>
              <Reveal delay={0.08}>
                <article className="journey-step">
                  <span className="journey-number">02</span>
                  <span className="journey-icon"><CalendarDays size={21} /></span>
                  <h3>Préparer les documents</h3>
                  <p>Rassemblez vos examens d’imagerie, comptes rendus, ordonnances et liste de traitements en cours.</p>
                </article>
              </Reveal>
              <Reveal delay={0.16}>
                <article className="journey-step">
                  <span className="journey-number">03</span>
                  <span className="journey-icon"><Stethoscope size={21} /></span>
                  <h3>Échanger avec le médecin</h3>
                  <p>Présentez vos questions et vos antécédents. Les décisions médicales se prennent avec le professionnel de santé.</p>
                </article>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="avis" className="section-block reviews-section">
          <div className="page-container">
            <Reveal>
              <div className="reviews-heading-row">
                <SectionHeading
                  eyebrow="Avis patients"
                  title="L’écoute et la confiance au cœur des échanges."
                  description="Quelques témoignages de patients publiés sur la fiche du Dr Salma Lahlou. Consultez la source pour retrouver les avis dans leur contexte."
                />
                <a className="text-link reviews-all-link" href="https://www.dabadoc.com/ma/neurochirurgien/casablanca/salma-lahlou-1" target="_blank" rel="noopener noreferrer">
                  Voir les avis publiés <ArrowUpRight size={16} />
                </a>
              </div>
            </Reveal>
            <div className="reviews-grid">
              <Reveal>
                <article className="patient-review-card reference-review-card">
                  <Quote className="review-quote-icon" size={35} aria-hidden="true" />
                  <p className="patient-review-quote">« Très humaine à l’écoute et rassurante. »</p>
                  <div className="reference-review-footer">
                    <div><strong>Dounia F.</strong><small>Avis publié sur DabaDoc</small></div>
                    <span className="reference-review-stars" aria-label="Évaluation positive">★★★★★</span>
                  </div>
                </article>
              </Reveal>
              <Reveal delay={0.06}>
                <article className="patient-review-card reference-review-card">
                  <Quote className="review-quote-icon" size={35} aria-hidden="true" />
                  <p className="patient-review-quote">« Médecin ponctuelle, à l’écoute, adorable. Très belle expérience. Compétente. »</p>
                  <div className="reference-review-footer">
                    <div><strong>Wydad A.</strong><small>Avis publié sur DabaDoc</small></div>
                    <span className="reference-review-stars" aria-label="Évaluation positive">★★★★★</span>
                  </div>
                </article>
              </Reveal>
              <Reveal delay={0.12}>
                <article className="patient-review-card reference-review-card">
                  <Quote className="review-quote-icon" size={35} aria-hidden="true" />
                  <p className="patient-review-quote">« Docteur très compétente, humaine et minimaliste en médicament. Elle prend son temps pour expliquer et diagnostiquer. Son assistante est agréable aussi. Je recommande. »</p>
                  <div className="reference-review-footer">
                    <div><strong>Aabir M.</strong><small>Avis publié sur DabaDoc</small></div>
                    <span className="reference-review-stars" aria-label="Évaluation positive">★★★★★</span>
                  </div>
                </article>
              </Reveal>
              <Reveal delay={0.18}>
                <article className="patient-review-card reference-review-card">
                  <Quote className="review-quote-icon" size={35} aria-hidden="true" />
                  <p className="patient-review-quote">« Très ponctuelle, professionnelle et attentive. Je la recommande fortement. »</p>
                  <div className="reference-review-footer">
                    <div><strong>Yassine M.</strong><small>Avis publié sur DabaDoc</small></div>
                    <span className="reference-review-stars" aria-label="Évaluation positive">★★★★★</span>
                  </div>
                </article>
              </Reveal>
            </div>
            <div className="reviews-footnote">
              <span>Source des témoignages : DabaDoc. Les avis Google ne sont pas reproduits ici sans vérification de leur origine.</span>
              <a href="https://www.dabadoc.com/ma/neurochirurgien/casablanca/salma-lahlou-1" target="_blank" rel="noopener noreferrer">Consulter les avis complets <ArrowRight size={15} /></a>
            </div>
          </div>
        </section>

        <section id="cabinet" className="section-block contact-section">
          <div className="page-container">
            <Reveal>
              <SectionHeading
                eyebrow="Informations pratiques"
                title="Préparer votre visite"
                description="Retrouvez les coordonnées du cabinet et ouvrez l’itinéraire dans votre application de cartes."
              />
            </Reveal>
            <div className="contact-layout">
              <Reveal className="contact-panel">
                <div className="contact-panel-heading"><span className="contact-symbol"><MapPin size={20} /></span><div><span className="fact-label">Adresse du cabinet</span><h3>Casablanca · Bourgogne</h3></div></div>
                <address>{ADDRESS}</address>
                <div className="contact-divider" />
                <div className="contact-detail">
                  <span className="contact-detail-icon"><Phone size={17} /></span>
                  <div><small>Téléphone</small><a href={`tel:${PHONE}`}>+212 5 22 27 66 34</a><a href="tel:+212669630741">+212 6 69 63 07 41</a></div>
                </div>
                <div className="contact-detail">
                  <span className="contact-detail-icon"><CalendarDays size={17} /></span>
                  <div><small>Rendez-vous</small><p>Merci de contacter le cabinet pour connaître les disponibilités.</p></div>
                </div>
                <div className="contact-actions">
                  <PrimaryLink href={`tel:${PHONE}`}><Phone size={16} /> Appeler</PrimaryLink>
                  <PrimaryLink href={MAPS} variant="outline" external><Navigation size={16} /> Itinéraire</PrimaryLink>
                </div>
              </Reveal>
              <Reveal className="map-column" delay={0.08}>
                <div className="map-frame">
                  <iframe
                    title="Localisation du cabinet du Dr Salma Lahlou à Bourgogne, Casablanca"
                    src="https://maps.google.com/maps?q=175%20Rue%20Boukraa%2C%20R%C3%A9sidence%20Houssam%20Jassim%2C%20Casablanca&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                  <a href={MAPS} target="_blank" rel="noopener noreferrer" className="map-open-link"><Navigation size={15} /> Ouvrir l’itinéraire <ArrowUpRight size={14} /></a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="faq" className="section-block faq-section">
          <div className="page-container faq-layout">
            <Reveal className="faq-intro">
              <span className="eyebrow">Besoin d’informations ?</span>
              <h2>Avant votre consultation.</h2>
              <p>Quelques réponses pratiques pour préparer votre échange avec le cabinet.</p>
              <a className="text-link" href="#contact">Contacter le cabinet <ArrowRight size={16} /></a>
            </Reveal>
            <Reveal className="faq-list">
              {faqItems.map((item, index) => (
                <details className="faq-item" key={item.q} open={index === 0}>
                  <summary>{item.q}<ChevronDown size={18} /></summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </Reveal>
          </div>
        </section>

        <section id="contact" className="closing-section">
          <div className="closing-orb" aria-hidden="true" />
          <div className="page-container closing-inner">
            <Reveal className="closing-copy">
              <span className="closing-kicker"><span /> Contact du cabinet</span>
              <h2>Vous souhaitez prendre rendez-vous ?</h2>
              <p>Contactez le cabinet par téléphone ou par WhatsApp pour obtenir des informations pratiques.</p>
            </Reveal>
            <Reveal className="closing-actions" delay={0.1}>
              <PrimaryLink href={`tel:${PHONE}`} variant="light"><Phone size={17} /> Appeler le cabinet</PrimaryLink>
              <PrimaryLink href={WHATSAPP} variant="whatsapp" external><MessageCircle size={17} /> WhatsApp <ArrowUpRight size={15} /></PrimaryLink>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-container footer-main">
          <div className="footer-brand-area">
            <Brand light />
            <p>Informations pratiques sur le cabinet de neurochirurgie du Dr Salma Lahlou à Casablanca.</p>
          </div>
          <div className="footer-contact">
            <span className="footer-label">Contact</span>
            <a href={`tel:${PHONE}`}>+212 5 22 27 66 34</a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">WhatsApp <ArrowUpRight size={13} /></a>
            <a href="#cabinet">Adresse et itinéraire</a>
          </div>
          <div className="footer-nav">
            <span className="footer-label">Explorer</span>
            {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          </div>
        </div>
        <div className="page-container footer-bottom">
          <span>© {new Date().getFullYear()} Dr Salma Lahlou. Tous droits réservés.</span>
          <span>Casablanca, Maroc</span>
          <a href="#accueil">Retour en haut <ArrowDown className="back-to-top-icon" size={14} /></a>
        </div>
      </footer>

      <div className="mobile-contact-bar" aria-label="Contact rapide">
        <a href={`tel:${PHONE}`} className="mobile-call"><Phone size={17} /> Appeler</a>
        <a href={WHATSAPP} className="mobile-whatsapp" target="_blank" rel="noopener noreferrer"><MessageCircle size={17} /> WhatsApp</a>
      </div>
    </div>
  );
}
