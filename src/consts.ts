import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Graychi',
  description:
    'Personal Blog made mostly for ctf writeups and different dfir blogs',
  href: 'https://astro-erudite.vercel.app',
  author: 'Graychi',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/authors',
    label: 'authors',
  },
  {
    href: '/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/graychii',
    label: 'GitHub',
  },
  {
    href: 'mailto:nassimround@gmail.com',
    label: 'Email',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
