/* ─────────────────────────────────────────────────────────
   AutoMotoLog — Main Script
   Handles: language switcher, year update
   ───────────────────────────────────────────────────────── */

const translations = {
    el: {
        badgeText:       'Συντήρηση Οχήματος',
        heroTitle:       'Οργάνωσε το όχημά σου',
        heroTitleAccent: 'χωρίς άγχος',
        heroSub:         'Σταμάτα να ανησυχείς για service, ΚΤΕΟ και απρόβλεπτα έξοδα. Το AutoMotoLog τα κρατά όλα σε τάξη, ώστε να ξέρεις πάντα τι χρειάζεται το όχημά σου.',
        heroBtn:         'Κατέβασε στο Google Play',
        headerCta:       'Google Play',
        stat1Val:        'Δωρεάν',
        stat1Label:      'Λήψη',
        stat2Label:      'Πλατφόρμα',
        stat3Label:      'Τύποι Οχημάτων',
        featLabel:       'Χαρακτηριστικά',
        featTitle:       'Ό,τι χρειάζεται το όχημά σου',
        featSub:         'Σχεδιασμένο για οδηγούς που εκτιμούν τον χρόνο τους και θέλουν πλήρη εποπτεία της κατάστασης του οχήματός τους.',
        f1Title:         'Έξυπνο Dashboard',
        f1Desc:          'Με μια ματιά, βλέπεις κάθε ανταλλακτικό που πλησιάζει στο τέλος της ζωής του — όχι μόνο την επόμενη αλλαγή λαδιών. Ξέρεις ακριβώς τι χρειάζεται προσοχή.',
        f2Title:         'Υπενθυμίσεις Εγγράφων',
        f2Desc:          'Χρωματικές ειδοποιήσεις για ΚΤΕΟ, ασφάλεια και άδεια κυκλοφορίας. Ποτέ ξανά καθυστερημένες πληρωμές ή παραβάσεις.',
        f3Title:         'Αναλυτική Παρακολούθηση Εξόδων',
        f3Desc:          'Καταγραφή ανταλλακτικού και εργασίας χωριστά για κάθε επέμβαση. Κατανόησε το πραγματικό κόστος ιδιοκτησίας με λεπτομερές ιστορικό.',
        f4Title:         'Υποστήριξη Ηλεκτρικών Οχημάτων',
        f4Desc:          'Πλήρης συμβατότητα με ηλεκτρικά (EV) — μετρήσεις σε kWh και ειδικά φίλτρα για ηλεκτρικά συστήματα κίνησης.',
        screenLabel:     'Στιγμιότυπα',
        screenTitle:     'Δες την εφαρμογή στην πράξη',
        screenSub:       'Ένα καθαρό, εστιασμένο περιβάλλον που αναδεικνύει τις πληροφορίες που πραγματικά χρειάζεσαι.',
        ctaTitle:        'Έτοιμος να πάρεις τον έλεγχο;',
        ctaSub:          'Κατέβασε δωρεάν το AutoMotoLog και ξεκίνα σήμερα να παρακολουθείς τη συντήρηση του οχήματός σου.',
        ctaBtn:          'Κατέβασε στο Google Play',
        footerPlay:      'Google Play',
        footerRights:    'Με επιφύλαξη παντός δικαιώματος.',
        footerMadeIn:    'Φτιαγμένο στην Ελλάδα.',
        pageTitle:       'AutoMotoLog — Οργάνωσε το όχημά σου χωρίς άγχος',
    },
    en: {
        badgeText:       'Vehicle Maintenance',
        heroTitle:       'Organize Your Vehicle',
        heroTitleAccent: 'Without the Stress',
        heroSub:         'Stop worrying about service dates, annual inspections, and unexpected costs. AutoMotoLog keeps everything in order, so you always know what\'s next.',
        heroBtn:         'Download on Google Play',
        headerCta:       'Google Play',
        stat1Val:        'Free',
        stat1Label:      'Download',
        stat2Label:      'Platform',
        stat3Label:      'Vehicle Types',
        featLabel:       'Features',
        featTitle:       'Everything your vehicle needs',
        featSub:         'Designed for drivers who value their time and want complete visibility over their vehicle\'s condition.',
        f1Title:         'Smart Dashboard',
        f1Desc:          'At a glance, see every part nearing the end of its service life — not just your next oil change. Prioritize exactly what needs attention.',
        f2Title:         'Document Reminders',
        f2Desc:          'Color-coded alerts for MOT (KTEO), insurance, and registration renewals. Never pay a late fee again.',
        f3Title:         'Detailed Cost Tracking',
        f3Desc:          'Log parts and labor separately for every job. Understand the true cost of ownership with clear, itemized history.',
        f4Title:         'Electric Vehicle Support',
        f4Desc:          'Full EV compatibility with kWh-based metrics and dedicated filters for electric drivetrains. Built for modern fleets.',
        screenLabel:     'Screenshots',
        screenTitle:     'See it in action',
        screenSub:       'A clean, focused interface that gets out of your way and surfaces the information you actually need.',
        ctaTitle:        'Ready to take control?',
        ctaSub:          'Download AutoMotoLog for free and start tracking your vehicle\'s maintenance today.',
        ctaBtn:          'Download on Google Play',
        footerPlay:      'Google Play',
        footerRights:    'All rights reserved.',
        footerMadeIn:    'Made in Greece.',
        pageTitle:       'AutoMotoLog — Vehicle Maintenance Tracker',
    },
};

function setLanguage(lang) {
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (translations[lang]?.[key]) {
            el.textContent = translations[lang][key];
        }
    });

    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById('lang-' + lang).classList.add('active');

    document.title = translations[lang].pageTitle;
    document.documentElement.lang = lang;
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('year').textContent = new Date().getFullYear();
    setLanguage('el');
});
