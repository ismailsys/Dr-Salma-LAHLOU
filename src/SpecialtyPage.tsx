import { ArrowLeft, ArrowUpRight, Brain, Phone, ShieldCheck, Stethoscope } from "lucide-react";

const BASE = import.meta.env.BASE_URL;
const PHONE = "+212522276634";
const WHATSAPP = "https://wa.me/212669630741?text=Bonjour%20Docteur%2C%20je%20souhaite%20me%20renseigner%20sur%20un%20rendez-vous.";
const GOOGLE_PROFILE = "https://www.google.com/maps/place/Dr+Salma+Lahlou+-+Neurochirurgien+%C3%A0+Casablanca/data=!4m2!3m1!1s0x0:0x61a22c209fe4377d";

const pages = {
  cerveau: {
    title: "Cerveau et crâne",
    subtitle: "Comprendre les situations pouvant nécessiter un avis neurochirurgical.",
    description: "La neurochirurgie cérébrale concerne certaines affections du cerveau, de ses enveloppes et des structures voisines. L’évaluation dépend notamment des symptômes, des antécédents et des examens médicaux disponibles.",
    topics: [
      ["Comprendre le dossier médical", "Les comptes rendus et examens d’imagerie aident le médecin à comprendre la situation et à déterminer les prochaines étapes."],
      ["Un avis adapté à chaque situation", "Toutes les pathologies cérébrales ne nécessitent pas une intervention chirurgicale. La conduite à tenir relève d’une évaluation médicale."],
      ["Préparer la consultation", "Apportez les examens d’imagerie, les comptes rendus, les ordonnances et la liste des traitements en cours."]
    ],
    note: "En cas de symptômes soudains ou sévères, notamment une faiblesse brutale, des troubles de la parole ou une altération de la conscience, contactez immédiatement les services d’urgence."
  },
  rachis: {
    title: "Colonne vertébrale et rachis",
    subtitle: "Des repères pour préparer un avis médical concernant le rachis.",
    description: "Le rachis comprend les structures osseuses et nerveuses de la colonne vertébrale. Certaines douleurs ou compressions nerveuses nécessitent une évaluation clinique et la lecture des examens déjà réalisés.",
    topics: [
      ["Examens et comptes rendus", "Les radiographies, scanners ou IRM, lorsqu’ils ont été prescrits, peuvent contribuer à l’évaluation médicale."],
      ["Symptômes et antécédents", "Notez depuis quand les symptômes sont présents, leur évolution et les traitements déjà essayés."],
      ["Décision individualisée", "Le choix entre surveillance, traitement non chirurgical ou chirurgie dépend du diagnostic et de la situation de chaque patient."]
    ],
    note: "Une faiblesse nouvelle ou rapidement progressive, une perte de sensibilité importante ou des troubles urinaires/intestinaux associés à une douleur rachidienne nécessitent une évaluation médicale urgente."
  },
  pediatrie: {
    title: "Neurochirurgie pédiatrique",
    subtitle: "Des informations générales pour les parents et les accompagnants.",
    description: "La neurochirurgie pédiatrique concerne certaines affections du système nerveux chez l’enfant. Les besoins d’évaluation et les modalités de prise en charge diffèrent selon l’âge et la situation médicale.",
    topics: [
      ["Préparer les informations utiles", "Rassemblez les comptes rendus, examens d’imagerie, ordonnances et informations utiles sur les antécédents de l’enfant."],
      ["Confirmer les modalités", "Contactez le cabinet avant de vous déplacer pour vérifier si les consultations pédiatriques sont proposées et dans quelles conditions."],
      ["Échanger avec l’équipe médicale", "Préparez vos questions et demandez des explications adaptées à l’âge de l’enfant et à votre situation."]
    ],
    note: "Cette page fournit des informations générales et ne confirme pas que chaque pathologie pédiatrique est prise en charge au cabinet."
  }
} as const;

export default function SpecialtyPage() {
  const path = window.location.pathname.toLowerCase();
  const key = path.includes("cerveau") ? "cerveau" : path.includes("rachis") ? "rachis" : "pediatrie";
  const page = pages[key];
  const Icon = key === "cerveau" ? Brain : key === "rachis" ? ShieldCheck : Stethoscope;

  return (
    <div className="site-shell specialty-page-shell">
      <div className="utility-bar">
        <div className="page-container utility-inner">
          <span><span className="status-dot" /> Neurochirurgie · Casablanca</span>
          <a href={`tel:${PHONE}`}><Phone size={13} /> +212 5 22 27 66 34</a>
        </div>
      </div>
      <header className="site-header">
        <div className="page-container header-inner">
          <a className="brand-link" href={BASE} aria-label="Retour au site du Dr Salma Lahlou">
            <span className="brand-mark"><Brain size={25} strokeWidth={1.55} /></span>
            <span className="brand-copy"><strong>Dr Salma Lahlou</strong><small>Neurochirurgie <span>·</span> Casablanca</small></span>
          </a>
          <a className="button button-primary" href={`${BASE}#contact`}>Contacter le cabinet <ArrowUpRight size={15} /></a>
        </div>
      </header>
      <main>
        <section className="specialty-hero">
          <div className="page-container">
            <a className="specialty-back-link" href={`${BASE}#expertise`}><ArrowLeft size={15} /> Retour aux spécialités</a>
            <div className="specialty-hero-grid">
              <div>
                <span className="eyebrow">Domaine de neurochirurgie</span>
                <h1>{page.title}</h1>
                <p className="specialty-subtitle">{page.subtitle}</p>
                <p className="specialty-description">{page.description}</p>
                <div className="hero-actions">
                  <a className="button button-primary" href={`tel:${PHONE}`}><Phone size={16} /> Appeler le cabinet</a>
                  <a className="button button-outline" href={WHATSAPP} target="_blank" rel="noopener noreferrer">Écrire sur WhatsApp <ArrowUpRight size={15} /></a>
                </div>
              </div>
              <div className="specialty-illustration" aria-hidden="true"><Icon size={82} strokeWidth={1.1} /><span>SL</span></div>
            </div>
          </div>
        </section>
        <section className="section-block specialty-content-section">
          <div className="page-container">
            <div className="specialty-content-heading">
              <span className="eyebrow">Informations pratiques</span>
              <h2>Préparer votre consultation</h2>
              <p>Ces repères sont informatifs et ne remplacent pas une consultation médicale.</p>
            </div>
            <div className="specialty-topic-grid">
              {page.topics.map(([title, text], index) => (
                <article className="specialty-topic-card" key={title}>
                  <span>0{index + 1}</span><h3>{title}</h3><p>{text}</p>
                </article>
              ))}
            </div>
            <div className="specialty-note"><ShieldCheck size={19} /><p>{page.note}</p></div>
          </div>
        </section>
        <section className="closing-section">
          <div className="page-container closing-inner">
            <div className="closing-copy"><span className="closing-kicker"><span /> Informations du cabinet</span><h2>Vous avez une question sur votre consultation ?</h2><p>Contactez le cabinet pour confirmer les modalités et les disponibilités.</p></div>
            <div className="closing-actions">
              <a className="button button-light" href={`tel:${PHONE}`}><Phone size={16} /> Appeler le cabinet</a>
              <a className="button button-whatsapp" href={WHATSAPP} target="_blank" rel="noopener noreferrer">WhatsApp <ArrowUpRight size={15} /></a>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="page-container footer-bottom"><span>© {new Date().getFullYear()} Dr Salma Lahlou · Casablanca</span><a href={GOOGLE_PROFILE} target="_blank" rel="noopener noreferrer">Fiche Google <ArrowUpRight size={13} /></a><a href={BASE}>Retour à l’accueil <ArrowLeft size={13} /></a></div>
      </footer>
      <div className="mobile-contact-bar"><a href={`tel:${PHONE}`} className="mobile-call"><Phone size={17} /> Appeler</a><a href={WHATSAPP} className="mobile-whatsapp" target="_blank" rel="noopener noreferrer">WhatsApp <ArrowUpRight size={15} /></a></div>
    </div>
  );
}
