import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'Over Ons',
      href: '/over-ons',
    },
    {
      text: 'Diensten',
      links: [
        {
          text: 'Website laten maken',
          href: getPermalink('/website-laten-maken'),
        },
        {
          text: 'Webshop laten maken',
          href: getPermalink('/webshop-laten-maken'),
        },
        {
          text: 'Zoekmachine Optimalisatie (SEO)',
          href: getPermalink('/zoekmachine-optimalisatie-seo'),
        },
        {
          text: 'Google Ads (SEA)',
          href: getPermalink('/google-ads-sea'),
        },
        {
          text: 'Affiliate Marketing',
          href: getPermalink('/affiliate-marketing'),
        },
        {
          text: 'Hosting & Beheer',
          href: getPermalink('/hosting-en-beheer'),
        },
        {
          text: 'Grafisch Ontwerp',
          href: getPermalink('/grafisch-ontwerp'),
        },
      ],
    },
    {
      text: 'Blog',
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
          text: 'Hosting',
          href: getPermalink('hosting', 'category'),
        },
        {
          text: 'SEO',
          href: getPermalink('seo', 'category'),
        },
        {
          text: 'SEA',
          href: getPermalink('sea', 'category'),
        },
        {
          text: 'Article',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'Article (with MDX)',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Tag Page',
          href: getPermalink('astro', 'tag'),
        },
      ],
    },
  ],
  actions: [{ text: 'Contact', href: '/contact', }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/mick-vranken-aa684610b'},
    { ariaLabel: 'Whatsapp', icon: 'tabler:brand-whatsapp', href: 'https://wa.me/31642667970'},
    { ariaLabel: 'Email', icon: 'tabler:mail', href: 'mailto:mick@magickmedia.nl'},
    { ariaLabel: 'Telefoon', icon: 'tabler:phone', href: 'tel:+31642667970'},
  ],
  footNote: `
    Copyright © 2024 Magick Media. · Speciale dank aan <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://onwidget.com/" target="_blank"> onWidget</a>
  `,
};
