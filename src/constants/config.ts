const config = {
  title: 'Reinaldo Vombo | Front-End Developer',
  description: {
    long: "Explore the portfolio of Reinaldo, a front-end developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      'Discover the portfolio of Reinaldo, a front-end developer creating interactive web experiences and innovative projects.',
  },
  keywords: [
    'Reinaldo',
    'portfolio',
    'full-stack developer',
    'creative technologist',
    'web development',
    '3D animations',
    'interactive websites',
    'Coding Ducks',
    'The Booking Desk',
    'Ghostchat',
    'web design',
    'GSAP',
    'React',
    'Next.js',
    'Spline',
    'Framer Motion',
  ],
  author: 'Reinaldo Vombo',
  email: 'Reinaldo.Vombo@gmail.com',
  site: 'https://ReinaldoVombo.site',

  get ogImg() {
    return this.site + '/assets/seo/og-imagee.png';
  },
  social: {
    twitter: 'https://x.com/RVombo',
    linkedin: 'https://www.linkedin.com/in/reinaldo-vombo-968b36256/',
    instagram: 'https://www.instagram.com/renaldo.pedro/',
    facebook: 'https://www.facebook.com/HotChaddi/',
    github: 'https://github.com/reinaldo-Vombo',
  },
};
export { config };
