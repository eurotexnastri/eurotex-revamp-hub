export type Language = 'en' | 'it';

export const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      whoAreWe: 'Who Are We',
      products: 'Products',
      sectors: 'Sectors & Applications',
      contact: 'Contact',
    },
    
    // Home page
    home: {
      madeInItaly: '100% Made in Italy',
      technicalWebbing: 'Technical Webbing',
      tagline: 'Expertise and Technology Since 1974',
      exploreProducts: 'Explore Products',
      getInTouch: 'Get in Touch',
      over50Years: 'Over 50 Years of Excellence',
      intro: 'Since 1974, Eurotex has been a leading Italian manufacturer of high-quality technical webbings and narrow fabrics. Our products serve diverse industries including automotive, fashion, medical, military, and sports. With state-of-the-art machinery and rigorous quality control, we deliver solutions that meet the most demanding specifications.',
      ourSectors: 'Our Sectors',
      specializedSolutions: 'Specialized solutions for every industry',
      viewAllSectors: 'View All Sectors',
      readyToStart: 'Ready to Start Your Project?',
      contactCta: 'Contact us to discuss your requirements and receive a personalized quote.',
      contactUs: 'Contact Us',
      sectorNames: {
        personalProtection: 'Personal Protection',
        sportOutdoor: 'Sport and Outdoor',
        furniture: 'Furniture',
        military: 'Military',
        industrial: 'Industrial',
      },
    },
    
    // About page
    about: {
      title: 'Who Are We',
      subtitle: 'A legacy of Italian craftsmanship in textile manufacturing.',
      ourStory: 'Our Story',
      storyP1: 'Founded in 1974, Eurotex SRL has grown from a small workshop to a leading manufacturer of textile webbings and narrow fabrics. Mr. Crippa Gian Claudio, after gaining years of experience in a traditional textile company, decided to follow his own path and founded EUROTEX—a strongly family-oriented company specializing in the production of woven tapes for various technical sectors. He did so with the clear idea that only a young, modern, and flexible company could remain competitive over time.',
      storyP2: "EUROTEX's vision proved successful: the company grew, and the second generation of the Crippa family began to take an active role—both practical and managerial—with the entry of the two sons. Toward the end of the 1980s, a dyeing and finishing line for woven tapes was introduced, expanding and improving the range of products offered. In 1992, the company, now well established, moved to the modern facility where it still operates today.",
      storyP3: 'The constant belief that technology, professionalism, experience, and special attention to market dynamics—as well as to customer needs—were the winning tools has made EUROTEX a well-known and valued company for the production of high-quality products and a reliable partner for its clients.',
      storyP4: "Thanks to its strengths, Eurotex is able to provide quick responses and fast deliveries to meet any need, even in the creation of new and exclusive products. The company's commitment to quality has earned certifications and partnerships with major brands across personal protection, furniture, military, and industrial sectors worldwide.",
      ourValues: 'Our Values',
      values: {
        quality: { title: 'Quality', desc: 'Rigorous standards at every step of production' },
        innovation: { title: 'Innovation', desc: 'Continuous improvement and R&D investment' },
        reliability: { title: 'Reliability', desc: 'Consistent delivery and customer support' },
        sustainability: { title: 'Sustainability', desc: 'Eco-conscious materials and processes' },
      },
      ourStrengths: 'Our Strengths',
      strengths: {
        experience: { title: 'Experience', desc: 'Over 50 years of expertise in woven tape production' },
        technology: { title: 'Technology', desc: 'Technologically advanced machinery and equipment' },
        personnel: { title: 'Personnel', desc: 'Qualified and experienced team' },
        facility: { title: 'Facility', desc: 'Over 3,000 m² of covered production space' },
        certification: { title: 'Certification', desc: 'ISO-certified quality management system' },
        madeInItaly: { title: '100% Made in Italy', desc: 'All products designed and manufactured entirely in Italy' },
      },
    },
    
    // Products page
    products: {
      title: 'Our Products',
      subtitle: 'A comprehensive range of textile webbings and narrow fabrics, engineered for performance and manufactured with precision.',
      process: 'Our Production Process',
      steps: {
        weaving: 'Weaving',
        finishing: 'Finishing & Dyeing',
        design: 'Designing & Printing',
        cutting: 'Cutting & Packaging',
      },
      weavingTitle: 'Weaving',
      weavingIntro: "Eurotex's production offers a very wide range of tapes with heights between 10 and 200 millimeters, and thicknesses between 0.6 and 4 millimeters. The following categories are available:",
      weavingTypes: [
        'Plain woven, including grosgrain and binding tapes',
        'Twill and herringbone twill',
        'Bound tubular and plain tubular tapes',
        'Jacquard, meaning tapes woven with lettering or logos',
      ],
      weavingMaterials: 'Eurotex uses different raw materials, the main and best known being polyester, polyamide, polypropylene, cotton, linen, and aramid fibers.',
      finishingTitle: 'Finishing & Dyeing',
      finishingIntro: 'Thanks to its in-house dyeing and finishing equipment, Eurotex can offer specific enhancement treatments for woven tapes, such as:',
      finishingTreatments: [
        'Heat-setting: to give sheen and greater elasticity',
        'Piece dyeing: to dye woven tapes in the desired color, with significant production efficiencies',
        'Starching/finishing: to achieve full, soft, or slippery hand',
        'Antistatic',
        'Antibacterial',
        'Oil- and water-repellent',
        'Flame-retardant',
        'Anti-abrasion',
        'IR invisibility',
        'Combination of different treatments',
      ],
      designTitle: 'Designing & Printing',
      designDesc: 'Eurotex offers customized tapes with text, logos, or designs, either woven into the tape using the Jacquard system or printed.',
      cuttingTitle: 'Cutting & Packaging',
      cuttingDesc: 'Eurotex has equipment for cutting and punching tapes—both hot and ultrasonic—according to the sizes and shapes required by the customer.',
      lookingFor: 'Looking for a Specific Application?',
      exploreSectors: "Explore Eurotex's sector-specific solutions to find products tailored for your industry.",
      viewSectors: 'View Sectors & Applications',
    },
    
    // Sectors page
    sectors: {
      title: 'Sectors & Applications',
      subtitle: 'Specialized webbings and tapes for every industry. Click on a sector to explore applications and products.',
      applications: 'Applications',
      webs: 'Webs',
      backToSectors: 'Back to Sectors',
      interested: 'Interested in These Products?',
      interestedDesc: 'Contact us for technical specifications, samples, or a custom quote.',
      requestInfo: 'Request Information',
    },
    
    // Contact page
    contact: {
      title: 'Contact Us',
      subtitle: "We're here to help with your textile requirements. Reach out for quotes, technical support, or general inquiries.",
      getInTouch: 'Get in Touch',
      address: 'Address',
      phone: 'Phone',
      fax: 'Fax',
      email: 'Email',
      sendMessage: 'Send a Message',
      name: 'Name',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'your@email.com',
      subject: 'Subject',
      subjectPlaceholder: 'How can we help?',
      message: 'Message',
      messagePlaceholder: 'Your message...',
      send: 'Send Message',
      findUs: 'Find Us',
    },
    
    // Footer
    footer: {
      privacy: 'Privacy Policy',
      contact: 'Contact',
    },
    
    // 404 page
    notFound: {
      title: '404',
      message: "The page you're looking for doesn't exist.",
      backHome: 'Back to Home',
    },
    
    // Sector not found
    sectorNotFound: {
      title: 'Sector Not Found',
    },
  },
  
  it: {
    // Navigation
    nav: {
      home: 'Home',
      whoAreWe: 'Chi Siamo',
      products: 'Prodotti',
      sectors: 'Settori e Applicazioni',
      contact: 'Contatti',
    },
    
    // Home page
    home: {
      madeInItaly: '100% Made in Italy',
      technicalWebbing: 'Nastri Tecnici',
      tagline: 'Esperienza e Tecnologia dal 1974',
      exploreProducts: 'Esplora i Prodotti',
      getInTouch: 'Contattaci',
      over50Years: 'Oltre 50 Anni di Eccellenza',
      intro: 'Dal 1974, Eurotex è un produttore italiano leader di nastri tecnici di alta qualità. I prodotti Eurotex servono diversi settori tra cui sicurezza, moda, medicale, militare e sport. Con macchinari all\'avanguardia e rigorosi controlli di qualità, Eurotex offre soluzioni che soddisfano le specifiche più esigenti.',
      ourSectors: 'I Nostri Settori',
      specializedSolutions: 'Soluzioni specializzate per ogni industria',
      viewAllSectors: 'Vedi Tutti i Settori',
      readyToStart: 'Pronti a Iniziare il Vostro Progetto?',
      contactCta: 'Contattateci per discutere le vostre esigenze e ricevere un preventivo personalizzato.',
      contactUs: 'Contattaci',
      sectorNames: {
        personalProtection: 'Protezione Individuale',
        sportOutdoor: 'Sport e Outdoor',
        furniture: 'Arredamento',
        military: 'Militare',
        industrial: 'Industriale',
      },
    },
    
    // About page
    about: {
      title: 'Chi Siamo',
      subtitle: 'Leader italiani nella produzione dei nastri tecnici.',
      ourStory: 'La Nostra Storia',
      storyP1: 'È il 5 Novembre 1973 ed il Signor Crippa Gian Claudio, dopo aver maturato anni di esperienza in un\'azienda tessile tradizionale, decide di percorrere la sua strada e fonda EUROTEX, azienda a forte carattere familiare specializzata nella produzione di nastri tessuti per i settori tecnici e sportivi, con la precisa idea che solo un\'azienda giovane, moderna e flessibile potesse essere competitiva nel tempo.',
      storyP2: 'L\'idea di EUROTEX ha successo, l\'impresa si ingrandisce e inizia la collaborazione attiva, sia pratica che decisionale, della seconda generazione della famiglia Crippa, con l\'ingresso dei due figli. Verso la fine degli anni \'80 viene inserita una linea di tintoria e finissaggio per nastri tessuti, per ampliare e migliorare la gamma dei prodotti offerti. Nel 1992 l\'impresa, ormai consolidata, si trasferisce nella moderna sede in cui lavora ancora oggi.',
      storyP3: 'La costante convinzione che tecnologia, professionalità, esperienza ed una attenzione particolare nei confronti delle dinamiche del mercato, così come alle esigenze dei clienti, fossero le armi vincenti, ha fatto diventare EUROTEX una realtà conosciuta e apprezzata per la realizzazione di prodotti di alta qualità, ed un partner affidabile per i propri clienti.',
      storyP4: 'Grazie ai suoi punti di forza, Eurotex è in grado di fornire risposte rapide e consegne veloci per soddisfare qualsiasi esigenza, anche nella creazione di prodotti nuovi ed esclusivi. L\'impegno dell\'azienda per la qualità ha ottenuto certificazioni e partnership con i principali marchi nei settori della protezione individuale, arredamento, militare e industriale in tutto il mondo.',
      ourValues: 'I Nostri Valori',
      values: {
        quality: { title: 'Rispetto', desc: 'Delle persone e dell\'ambiente' },
        innovation: { title: 'Innovazione', desc: 'Miglioramento continuo e investimenti in R&S' },
        reliability: { title: 'Affidabilità', desc: 'Costante attenzione alla soddisfazione dei clienti' },
        sustainability: { title: 'Sostenibilità', desc: 'Materiali e processi eco-consapevoli' },
      },
      ourStrengths: 'I Nostri Punti di Forza',
      strengths: {
        experience: { title: 'Esperienza', desc: 'Oltre 50 anni di esperienza nella produzione di nastri tessuti' },
        technology: { title: 'Tecnologia', desc: 'Macchinari e attrezzature tecnologicamente avanzati' },
        personnel: { title: 'Personale', desc: 'Team qualificato ed esperto' },
        facility: { title: 'Struttura', desc: 'Oltre 3.000 m² di spazio produttivo coperto' },
        certification: { title: 'Certificazione', desc: 'Sistema di gestione qualità certificato ISO' },
        madeInItaly: { title: '100% Made in Italy', desc: 'Tutti i prodotti progettati e fabbricati interamente in Italia' },
      },
    },
    
    // Products page
    products: {
      title: 'I Nostri Prodotti',
      subtitle: 'Una gamma completa di nastri tecnici di primissima qualità e proprietà tecniche.',
      process: 'Il Nostro Processo Produttivo',
      steps: {
        weaving: 'Tessitura',
        finishing: 'Finissaggio e Tintura',
        design: 'Design e Stampa',
        cutting: 'Taglio e Confezionamento',
      },
      weavingTitle: 'Tessitura',
      weavingIntro: 'La produzione Eurotex offre una gamma molto ampia di nastri con altezze comprese tra 10 e 200 millimetri, e spessori tra 0,6 e 4 millimetri. Sono disponibili le seguenti categorie:',
      weavingTypes: [
        'Tela, compresi gros-grain e nastri di rifinitura',
        'Saia e saia a spina di pesce',
        'Nastri tubolari bordati e tubolari semplici',
        'Jacquard, ovvero nastri tessuti con scritte o loghi',
      ],
      weavingMaterials: 'Eurotex utilizza diverse materie prime, le principali e più conosciute sono poliestere, poliammide, polipropilene, cotone, lino e fibre aramidiche.',
      finishingTitle: 'Finissaggio e Tintura',
      finishingIntro: 'Grazie alle proprie attrezzature di tintura e finissaggio, Eurotex può offrire trattamenti specifici di nobilitazione per nastri tessuti, quali:',
      finishingTreatments: [
        'Termofissaggio: per conferire lucentezza e maggiore elasticità',
        'Tintura in pezza: per tingere i nastri tessuti nel colore desiderato, con significative efficienze produttive',
        'Apprettatura/finissaggio: per ottenere mano piena, morbida o scivolosa',
        'Antistatico',
        'Antibatterico',
        'Oleo e idrorepellente',
        'Ignifugo',
        'Anti-abrasione',
        'Invisibilità IR',
        'Combinazione di diversi trattamenti',
      ],
      designTitle: 'Design e Stampa',
      designDesc: 'Eurotex offre nastri personalizzati con testi, loghi o disegni, tessuti nel nastro utilizzando il sistema Jacquard o stampati.',
      cuttingTitle: 'Taglio e Confezionamento',
      cuttingDesc: 'Eurotex dispone di attrezzature per il taglio e la fustellatura dei nastri—sia a caldo che a ultrasuoni—secondo le dimensioni e le forme richieste dal cliente.',
      lookingFor: 'Cerchi un\'Applicazione Specifica?',
      exploreSectors: 'Esplora le soluzioni Eurotex specifiche per settore per trovare prodotti su misura per la tua industria.',
      viewSectors: 'Vedi Settori e Applicazioni',
    },
    
    // Sectors page
    sectors: {
      title: 'Settori e Applicazioni',
      subtitle: 'Nastri e tessuti specializzati per ogni industria. Clicca su un settore per esplorare applicazioni e prodotti.',
      applications: 'Applicazioni',
      webs: 'Nastri',
      backToSectors: 'Torna ai Settori',
      interested: 'Interessati a Questi Prodotti?',
      interestedDesc: 'Contattateci per specifiche tecniche, campioni o un preventivo personalizzato.',
      requestInfo: 'Richiedi Informazioni',
    },
    
    // Contact page
    contact: {
      title: 'Contattaci',
      subtitle: 'Siamo qui per aiutarvi con le vostre esigenze tessili. Contattateci per preventivi, supporto tecnico o informazioni generali.',
      getInTouch: 'Mettiti in Contatto',
      address: 'Indirizzo',
      phone: 'Telefono',
      fax: 'Fax',
      email: 'Email',
      sendMessage: 'Invia un Messaggio',
      name: 'Nome',
      namePlaceholder: 'Il tuo nome',
      emailPlaceholder: 'tua@email.com',
      subject: 'Oggetto',
      subjectPlaceholder: 'Come possiamo aiutarti?',
      message: 'Messaggio',
      messagePlaceholder: 'Il tuo messaggio...',
      send: 'Invia Messaggio',
      findUs: 'Dove Siamo',
    },
    
    // Footer
    footer: {
      privacy: 'Privacy Policy',
      contact: 'Contatti',
    },
    
    // 404 page
    notFound: {
      title: '404',
      message: 'La pagina che stai cercando non esiste.',
      backHome: 'Torna alla Home',
    },
    
    // Sector not found
    sectorNotFound: {
      title: 'Settore Non Trovato',
    },
  },
} as const;

export type TranslationKeys = typeof translations.en;
