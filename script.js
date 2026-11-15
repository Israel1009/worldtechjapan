// World Tech Japan Co., Ltd. - Multi-language Controller v2
const translations = {
    es: {
        company: "Compañía",
        div1: "Industrial & Metrología",
        div2: "Audio High-End JDM",
        div3: "Vehículos & Maquinaria Diésel",
        heroTitle: "Excelencia Tecnológica e Integridad Japonesa",
        heroDesc: "WORLD TECH JAPAN Co., Ltd. es una firma corporativa dedicada a la provisión de soluciones industriales de alta precisión, ingeniería de metrología, equipos audiófilos JDM y maquinaria pesada diésel.",
        contactTitle: "Contacto Oficial Corporativo",
        primaryEmail: "Correo Corporativo Principal:",
        secondaryEmail: "Correo Secundario:",
        learnMore: "Explorar División"
    },
    en: {
        company: "Company",
        div1: "Industrial & Metrology",
        div2: "Audio High-End JDM",
        div3: "Diesel Machinery & Vehicles",
        heroTitle: "Technological Excellence & Japanese Integrity",
        heroDesc: "WORLD TECH JAPAN Co., Ltd. is a corporate firm dedicated to providing high-precision industrial solutions, metrology engineering, JDM audiophile equipment, and heavy diesel machinery.",
        contactTitle: "Official Corporate Contact",
        primaryEmail: "Primary Corporate Email:",
        secondaryEmail: "Secondary Email:",
        learnMore: "Explore Division"
    },
    ja: {
        company: "会社概要",
        div1: "産業・計測技術部門",
        div2: "JDMハイエンドオーディオ",
        div3: "ディーゼル重機・車両部門",
        heroTitle: "技術の卓越性と日本の信頼性",
        heroDesc: "WORLD TECH JAPAN Co., Ltd. は、高精度産業ソリューション、計測工学、JDMオーディオ機器、およびディーゼル重機の提供に特化した企業です。",
        contactTitle: "公式企業お問合せ",
        primaryEmail: "主要公式メール:",
        secondaryEmail: "サブメール:",
        learnMore: "部門の詳細を見る"
    },
    de: {
        company: "Unternehmen",
        div1: "Industrie & Messtechnik",
        div2: "High-End Audio JDM",
        div3: "Diesel-Maschinen & Fahrzeuge",
        heroTitle: "Technologische Exzellenz & Japanische Integrität",
        heroDesc: "WORLD TECH JAPAN Co., Ltd. ist ein Unternehmen, das sich auf hochpräzise Industrielösungen, Messtechnik, JDM-Audiogeräte und Diesel-Schwermaschinen spezialisiert hat.",
        contactTitle: "Offizieller Firmenkontakt",
        primaryEmail: "Haupt-E-Mail:",
        secondaryEmail: "Zweite E-Mail:",
        learnMore: "Bereich erkunden"
    },
    zh: {
        company: "公司简介",
        div1: "工业与计量部门",
        div2: "JDM高端音响",
        div3: "柴油重型机械与车辆",
        heroTitle: "卓越技术与日本诚信",
        heroDesc: "WORLD TECH JAPAN Co., Ltd. 是一家致力于提供高精度工业解决方案、计量工程、JDM发烧音响设备及柴油重型机械的专业企业。",
        contactTitle: "官方企业联系方式",
        primaryEmail: "主要企业邮箱:",
        secondaryEmail: "备用邮箱:",
        learnMore: "探索部门"
    }
};

function changeLanguage(lang) {
    const data = translations[lang] || translations.es;
    document.querySelectorAll('[data-i18n]').forEach(elem => {
        const key = elem.getAttribute('data-i18n');
        if (data[key]) {
            elem.textContent = data[key];
        }
    });
    localStorage.setItem('wtj_lang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
    const selector = document.getElementById('langSelect');
    if (selector) {
        const savedLang = localStorage.getItem('wtj_lang') || 'es';
        selector.value = savedLang;
        changeLanguage(savedLang);
        selector.addEventListener('change', (e) => changeLanguage(e.target.value));
    }
});
