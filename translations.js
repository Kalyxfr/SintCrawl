// Translations
const translations = {
  fr: {
    // Navigation
    'nav.features': 'Fonctionnalités',
    'nav.demo': 'Démo',
    'nav.download': 'Télécharger',
    'nav.contact': 'Contact',
    
    // Hero section
    'hero.title': 'SintCrawl - L\'Explorateur Web OSINT',
    'hero.subtitle': 'Un outil puissant pour extraire automatiquement les informations critiques des sites web',
    'hero.download': 'Télécharger',
    'hero.learnMore': 'En savoir plus',
    
    // Features section
    'features.title': 'Fonctionnalités',
    'features.email.title': 'Extraction d\'Emails',
    'features.email.description': 'Identifie et extrait tous les emails trouvés sur le site cible avec une précision remarquable.',
    'features.subdomain.title': 'Détection de Sous-domaines',
    'features.subdomain.description': 'Découvre les sous-domaines associés au domaine principal pour une exploration complète.',
    'features.links.title': 'Exploration des Liens Internes',
    'features.links.description': 'Cartographie la structure interne du site en suivant et analysant tous les liens.',
    'features.images.title': 'Récupération d\'Images',
    'features.images.description': 'Recueille les URLs de toutes les images présentes sur le site pour une analyse approfondie.',
    
    // Demo section
    'demo.title': 'Démonstration',
    'demo.email.title': 'Extraction d\'Emails',
    'demo.email.description': 'SintCrawl analyse chaque page pour extraire les adresses email, même celles qui sont masquées ou obfusquées.',
    'demo.subdomain.title': 'Détection de Sous-domaines',
    'demo.subdomain.description': 'Découvrez tous les sous-domaines liés au domaine principal pour une cartographie complète.',
    'demo.links.title': 'Exploration des Liens',
    'demo.links.description': 'SintCrawl suit et analyse tous les liens internes pour comprendre la structure du site.',
    'demo.images.title': 'Récupération d\'Images',
    'demo.images.description': 'Collectez toutes les URLs d\'images pour une analyse OSINT approfondie.',
    
    // Use cases section
    'useCases.title': 'Cas d\'Utilisation',
    'useCases.security.title': 'Audit de Sécurité',
    'useCases.security.description': 'Identifiez les vulnérabilités potentielles et les fuites d\'informations sur vos sites web.',
    'useCases.research.title': 'Recherche OSINT',
    'useCases.research.description': 'Recueillez des données précieuses pour vos investigations en sources ouvertes.',
    'useCases.marketing.title': 'Marketing Digital',
    'useCases.marketing.description': 'Analysez la présence en ligne de vos concurrents et découvrez leurs stratégies.',
    'useCases.compliance.title': 'Conformité RGPD',
    'useCases.compliance.description': 'Vérifiez que votre site web ne divulgue pas d\'informations personnelles non protégées.',
    
    // Download section
    'download.title': 'Télécharger',
    'download.description': 'SintCrawl est un outil open-source disponible gratuitement sur GitHub. Vous pouvez le télécharger, le modifier et contribuer à son développement.',
    'download.github': 'GitHub',
    'download.documentation': 'Documentation',
    'download.installation.title': 'Installation',
    
    // Contact section
    'contact.title': 'Contact',
    'contact.form.name': 'Nom',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Sujet',
    'contact.form.subjects.question': 'Question',
    'contact.form.subjects.feedback': 'Retour d\'expérience',
    'contact.form.subjects.bug': 'Signalement de bug',
    'contact.form.subjects.feature': 'Suggestion de fonctionnalité',
    'contact.form.subjects.other': 'Autre',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Envoyer',
    
    // Footer
    'footer.description': 'Outil d\'exploration web OSINT avancé',
    'footer.links.title': 'Liens',
    'footer.links.features': 'Fonctionnalités',
    'footer.links.demo': 'Démo',
    'footer.links.download': 'Télécharger',
    'footer.links.contact': 'Contact',
    'footer.social.title': 'Suivez-nous',
    'footer.rights': 'Tous droits réservés.',
  },
  en: {
    // Navigation
    'nav.features': 'Features',
    'nav.demo': 'Demo',
    'nav.download': 'Download',
    'nav.contact': 'Contact',
    
    // Hero section
    'hero.title': 'SintCrawl - The OSINT Web Explorer',
    'hero.subtitle': 'A powerful tool to automatically extract critical information from websites',
    'hero.download': 'Download',
    'hero.learnMore': 'Learn More',
    
    // Features section
    'features.title': 'Features',
    'features.email.title': 'Email Extraction',
    'features.email.description': 'Identifies and extracts all emails found on the target site with remarkable accuracy.',
    'features.subdomain.title': 'Subdomain Detection',
    'features.subdomain.description': 'Discovers subdomains associated with the main domain for comprehensive exploration.',
    'features.links.title': 'Internal Link Exploration',
    'features.links.description': 'Maps the internal structure of the site by following and analyzing all links.',
    'features.images.title': 'Image Retrieval',
    'features.images.description': 'Collects URLs of all images present on the site for in-depth analysis.',
    
    // Demo section
    'demo.title': 'Demonstration',
    'demo.email.title': 'Email Extraction',
    'demo.email.description': 'SintCrawl analyzes each page to extract email addresses, even those that are hidden or obfuscated.',
    'demo.subdomain.title': 'Subdomain Detection',
    'demo.subdomain.description': 'Discover all subdomains linked to the main domain for complete mapping.',
    'demo.links.title': 'Link Exploration',
    'demo.links.description': 'SintCrawl follows and analyzes all internal links to understand the site structure.',
    'demo.images.title': 'Image Retrieval',
    'demo.images.description': 'Collect all image URLs for in-depth OSINT analysis.',
    
    // Use cases section
    'useCases.title': 'Use Cases',
    'useCases.security.title': 'Security Audit',
    'useCases.security.description': 'Identify potential vulnerabilities and information leaks on your websites.',
    'useCases.research.title': 'OSINT Research',
    'useCases.research.description': 'Collect valuable data for your open-source investigations.',
    'useCases.marketing.title': 'Digital Marketing',
    'useCases.marketing.description': 'Analyze your competitors\' online presence and discover their strategies.',
    'useCases.compliance.title': 'GDPR Compliance',
    'useCases.compliance.description': 'Verify that your website does not disclose unprotected personal information.',
    
    // Download section
    'download.title': 'Download',
    'download.description': 'SintCrawl is an open-source tool freely available on GitHub. You can download it, modify it, and contribute to its development.',
    'download.github': 'GitHub',
    'download.documentation': 'Documentation',
    'download.installation.title': 'Installation',
    
    // Contact section
    'contact.title': 'Contact',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Subject',
    'contact.form.subjects.question': 'Question',
    'contact.form.subjects.feedback': 'Feedback',
    'contact.form.subjects.bug': 'Bug Report',
    'contact.form.subjects.feature': 'Feature Request',
    'contact.form.subjects.other': 'Other',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send',
    
    // Footer
    'footer.description': 'Advanced OSINT web exploration tool',
    'footer.links.title': 'Links',
    'footer.links.features': 'Features',
    'footer.links.demo': 'Demo',
    'footer.links.download': 'Download',
    'footer.links.contact': 'Contact',
    'footer.social.title': 'Follow Us',
    'footer.rights': 'All rights reserved.',
  }
};