export interface MenuItem {
  name: string;
  path: string;
  sub?: MenuItem[];
}

export const MENU = [
    {
      path: '/',
      name: 'Beranda',
    },
    {
      path: '/about',
      name: 'Tentang Kami',
    },
    {
      path: '/services',
      name: 'Layanan',
      sub : [
        {
          path: '/services/good-corporate-governance',
          name: 'Good Corporate Governance',
        },
        {
          path: '/services/corporate-social-responsibility',
          name: 'Corporate Social Responsibility',
        },
        {
          path: '/services/whistle-blowing-system',
          name: 'Whistle Blowing System (WBS)',
        },
        {
          path: '/services/sistem-manajemen-anti-penyuapan',
          name: 'Sistem Manajemen Anti Penyuapan',
        },
        {
          path: '/services/integrated-governance-risk-and-compliance',
          name: 'Governance, Risk & Compliance',
        },
        {
          path: '/services/business-strategy',
          name: 'Business Strategy',
        },
        {
          path: '/services/capital-market',
          name: 'Capital Market',
        },
        {
          path: '/services/enviroment-social-governance',
          name: 'Enviroment, Social, Governance (ESG)',
        },
        {
          path: '/services/directorship-program',
          name: 'Directorship Program',
        },
      ]
    },
    {
      path: '/teams',
      name: 'Tenaga Ahli',
    },
    {
      path: '/knowledge',
      name: 'Pengetahuan',
    },
    {
      path: '/contact',
      name: 'Hubungi Kami',
    },
  ];