import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'Over ons',
      href: '/over-ons/',
    },
    {
      text: 'Diensten',
      href: '/#diensten',
      links: [
        {
          text: 'Website laten maken',
          href: getPermalink('/website-laten-maken/'),
        },
        {
          text: 'Webshop laten maken',
          href: getPermalink('/webshop-laten-maken/'),
        },
        {
          text: 'Zoekmachine Optimalisatie (SEO)',
          href: getPermalink('/zoekmachine-optimalisatie-seo/'),
        },
        {
          text: 'Google Ads (SEA)',
          href: getPermalink('/google-ads-sea/'),
        },
        {
          text: 'Leadgeneratie (B2C)',
          href: getPermalink('/leadgeneratie/'),
        },
        {
          text: 'Hosting & Beheer',
          href: getPermalink('/hosting-en-beheer/'),
        },
        {
          text: 'Grafisch Ontwerp',
          href: getPermalink('/grafisch-ontwerp/'),
        },
      ],
    },
    {
      text: 'Blog',
      href: '/blog/',
      links: [
        {
          text: 'Alles',
          href: getBlogPermalink(),
        },
        {
          text: 'Development',
          href: getPermalink('development', 'category'),
        },
        {
          text: 'SEO',
          href: getPermalink('seo', 'category'),
        },
        {
          text: 'Google Ads',
          href: getPermalink('google-ads', 'category'),
        },
        {
          text: 'Hosting',
          href: getPermalink('hosting', 'category'),
        },
      ],
    },
  ],
  actions: [{ text: 'Contact', href: '/contact/', }],
};

export const footerData = {
  links: [
    {
      title: 'Diensten',
      links: [
        {
          text: 'Website laten maken',
          href: getPermalink('/website-laten-maken/'),
        },
        {
          text: 'Webshop laten maken',
          href: getPermalink('/webshop-laten-maken/'),
        },
        {
          text: 'Zoekmachine optimalisatie (SEO)',
          href: getPermalink('/zoekmachine-optimalisatie-seo/'),
        },
        {
          text: 'Google Ads (SEA)',
          href: getPermalink('/google-ads-sea/'),
        },
        {
          text: 'Leadgeneratie (B2C)',
          href: getPermalink('/leadgeneratie/'),
        },
        {
          text: 'Hosting & beheer',
          href: getPermalink('/hosting-en-beheer/'),
        },
        {
          text: 'Grafisch ontwerp',
          href: getPermalink('/grafisch-ontwerp/'),
        },
      ],
    },
    {
      title: 'Populaire blogs',
      links: [
        {
          text: 'Zelf een Wordpress website maken',
          href: getPermalink('/zelf-wordpress-website-maken/'),
        },
        {
          text: 'Gratis SEO handleiding voor beginners',
          href: getPermalink('/gratis-seo-handleiding-voor-beginners/'),
        },
        {
          text: 'Dé technische SEO checklist van 2024',
          href: getPermalink('/technische-seo-checklist/'),
        },
        {
          text: 'Zoekwoorden analyseren in deze 5 stappen en kom hogerop in Google!',
          href: getPermalink('/zoekwoorden-analyseren-en-hogerop-in-google/'),
        },
        {
          text: 'Hoe optimaliseer je je Google Ads-campagnes?',
          href: getPermalink('/optimaliseer-google-ads-campagne-hoger-conversieratio/'),
        },
        {
          text: 'Hoe je een negatief zoekwoordstrategie implementeert in Google Ads',
          href: getPermalink('/gebruik-negatieve-zoekwoorden-google-ads-strategie/'),
        },
      ],
    },
    {
      title: 'Website laten maken',
      links: [
        {
          text: 'Website laten maken Eindhoven',
          href: getPermalink('/website-laten-maken-eindhoven/'),
        },
        {
          text: 'Website laten maken Tilburg',
          href: getPermalink('/website-laten-maken-tilburg/'),
        },
        {
          text: 'Website laten maken Breda',
          href: getPermalink('/website-laten-maken-breda/'),
        },
        {
          text: 'Website laten maken Den Bosch',
          href: getPermalink('/website-laten-maken-den-bosch/'),
        },
        {
          text: 'Website laten maken Nijmegen',
          href: getPermalink('/website-laten-maken-nijmegen/'),
        },
        {
          text: 'Website laten maken Waalwijk',
          href: getPermalink('/website-laten-maken-waalwijk/'),
        },
      ],
    },
    {
      title: 'Online marketing bureau',
      links: [
        {
          text: 'Online marketing bureau Tilburg',
          href: getPermalink('/online-marketing-bureau-tilburg/'),
        },
        {
          text: 'Online marketing bureau Breda',
          href: getPermalink('/online-marketing-bureau-breda/'),
        },
        {
          text: 'Online marketing bureau Nijmegen',
          href: getPermalink('/online-marketing-bureau-nijmegen/'),
        },
        {
          text: 'Online marketing bureau Den Bosch',
          href: getPermalink('/online-marketing-bureau-den-bosch/'),
        },
        {
          text: 'Online marketing bureau Eindhoven',
          href: getPermalink('/online-marketing-bureau-eindhoven/'),
        },
        {
          text: 'Online marketing bureau Waalwijk',
          href: getPermalink('/online-marketing-bureau-waalwijk/'),
        },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Over ons', href: getPermalink('/over-ons/') },
    { text: 'Contact', href: getPermalink('/contact/') },
    { text: 'Plan een gesprek', href: getPermalink('/plan-een-gesprek/') },
    { text: 'Privacyverklaring & cookiebeleid', href: getPermalink('/privacy/') },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/mick-vranken-aa684610b'},
    { ariaLabel: 'Whatsapp', icon: 'tabler:brand-whatsapp', href: 'https://wa.me/31642667970'},
    { ariaLabel: 'Email', icon: 'tabler:mail', href: 'mailto:mick@magickmedia.nl'},
    { ariaLabel: 'Telefoon', icon: 'tabler:phone', href: 'tel:+31642667970'},
  ],
  footNote: `
    Copyright © 2024 Magick Media. · Speciale dank aan <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://onwidget.com/" target="_blank"> onWidget</a> · Afbeeldingen door <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://www.freepik.com/" target="_blank" rel="noopener">Freepik</a> · Kvknr: 84696109 
  `,
};
