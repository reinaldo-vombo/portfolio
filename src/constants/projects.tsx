import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, Check, FileWarning, } from "lucide-react";
import Link from "next/link";
import { JSX, ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiMysql
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  sql: {
    title: "MySql",
    bg: "black",
    fg: "white",
    icon: <SiMysql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
};
export type Project = {
  id: string;
  category: string;
  inDevolpmente?: boolean;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [

  {
    id: "gamezone",
    category: "Ecommerce",
    title: "Game Zone",
    github: 'https://github.com/reinaldo-vombo/game',
    inDevolpmente: false,
    src: "/assets/projects-screenshots/gamezone/landing.jpeg",
    screenshots: ["1.png", "2.png", "3.png", "4.png"],
    live: "https://game-ten-zeta.vercel.app/",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.react,
      ],
      backend: [
        PROJECT_SKILLS.sanity,
      ],
    },
    get content(): JSX.Element {
      return (
        <div>
          <TypographyP className="font-mono ">
            Bem-vindo ao GameShop – seu destino definitivo para encontrar os títulos
            mais quentes, clássicos inesquecíveis e conteúdos exclusivos. Seja você
            um gamer casual ou um entusiasta hardcore, o GameShop tem tudo o que
            você precisa para jogar sem parar.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <p className="font-mono mb-2 mt-4">
            Assim que você entra, é como cair direto no paraíso dos gamers – com
            lançamentos incríveis, descontos épicos e coleções feitas sob medida
            para você.
          </p>
          <SlideShow images={[`${BASE_PATH}/gamezone/landing.jpeg`]} />
          <TypographyH3 className="my-4 ">Stores</TypographyH3>
          <p className="font-mono mb-2">
            Explore uma biblioteca vasta e em constante crescimento, com jogos de
            todos os gêneros e plataformas. RPG, FPS, indie... aqui tem de tudo!
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/gamezone/1.jpeg`,
              `${BASE_PATH}/gamezone/2.jpeg`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Categories</TypographyH3>

          <p className="font-mono mb-2">
            Encontre seus jogos favoritos rapidinho com filtros inteligentes e
            categorias intuitivas. Nada de perder tempo – ache o que quer e vá
            direto ao jogo.
          </p>
          <SlideShow images={[`${BASE_PATH}/gamezone/3.jpeg`]} />
          <TypographyH3 className="my-4 mt-8">Custom CMS </TypographyH3>
          <p className="font-mono mb-2">
            Construído com React e Firebase, nosso painel administrativo permite
            atualizar rapidamente a loja com os últimos lançamentos, promoções e
            novidades – tudo fresquinho e aprovado pela comunidade gamer.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/gamezone/1.jpeg`,
              `${BASE_PATH}/gamezone/2.jpeg`,
            ]}
          />
          <p className="font-mono mb-2 mt-5">
            Com performance fluida, design responsivo e um checkout sem complicações,
            o GameShop é muito mais que uma loja – é o seu novo hub gamer.
          </p>
          <p className="font-mono mb-2">
            Jogue mais, pague menos e curta do seu jeito – só no GameShop.
          </p>
        </div>
      );
    },
  },
  {
    id: "nevia-shop",
    category: "Ecommerce",
    title: "Nevia Shop",
    inDevolpmente: true,
    github: 'https://github.com/reinaldo-vombo/ecommer-shop',
    src: "/assets/projects-screenshots/shoeShop/landing.png",
    screenshots: ["1.png"],
    live: "https://nivia-shop.vercel.app/",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.shadcn,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.prisma,
        PROJECT_SKILLS.sql,
        PROJECT_SKILLS.node
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A Loja de Calçados é uma plataforma de e-commerce moderna e intuitiva, desenvolvida para oferecer a melhor experiência de compra online. Com animações
            suaves e design responsivo, os usuários podem navegar pelos produtos com facilidade,
            seja no celular ou no desktop.
          </TypographyP>
          <div className="flex items-center mb-4">
            <Check className="text-green-500 size-4" />
            <b className="text-green-500">Em caso que deseje contribuir com o projeto, acesse o repositório</b>
          </div>
          <div className="flex items-center">
            <FileWarning className="text-red-500 size-4" />
            <b className="text-red-500">O banco de dados tem um tempo de vida limitado</b>
          </div>
          <ProjectsLinks live={this.live} repo={this.github} />
          <p className="font-mono mb-2 mt-8">
            A interface elegante destaca os lançamentos, promoções e coleções exclusivas. Cada produto possui uma galeria de imagens de alta qualidade, informações detalhadas e opções de variações como tamanho e cor.
          </p>
          <SlideShow images={[`${BASE_PATH}/shoeShop/landing.png`, `${BASE_PATH}/shoeShop/landing.png`]} />
          <TypographyH3 className="my-4 mt-8">Funcionalidades</TypographyH3>
          <p className="font-mono mb-2">
            O sistema conta com recursos como carrinho dinâmico, filtros por categoria, preço e marca, além de uma área de login e cadastro de usuários.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/shoeShop/12.jpeg`,
              `${BASE_PATH}/shoeShop/13.jpeg`,
              `${BASE_PATH}/shoeShop/11.jpeg`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Blogs</TypographyH3>
          <p className="font-mono mb-2">
            Dive into the curated articles written by travel experts. Whether
            you&apos;re looking for hidden gems or travel hacks, our blog section has
            you covered.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/shoeShop/1.png`,
              `${BASE_PATH}/shoeShop/2.png`,
              `${BASE_PATH}/shoeShop/3.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Painel Administrativo</TypographyH3>

          <p className="font-mono mb-2">
            Para manter a loja atualizada, foi integrado um painel CMS onde é possível
            gerenciar produtos, estoque e pedidos de forma prática e eficiente.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/the-booking-desk/cms-1.png`,
              `${BASE_PATH}/the-booking-desk/cms-2.png`,
            ]}
          />
          <p className="font-mono mb-2 my-8">
            Com pontuação máxima no Lighthouse, a loja se destaca não só pela aparência, mas também pelo desempenho. Seja comprando ou apenas navegando, a experiência é fluida, rápida e agradável.
          </p>
        </div>
      );
    },
  },
  // {
  //   id: "portfolio",
  //   category: "Portfolio",
  //   title: "My Portfolio",
  //   src: "/assets/projects-screenshots/portfolio/landing.png",
  //   screenshots: ["1.png"],
  //   live: "http://nareshkhatri.vercel.app",
  //   github: "https://github.com/Naresh-Khatri/Portfolio",
  //   skills: {
  //     frontend: [
  //       PROJECT_SKILLS.ts,
  //       PROJECT_SKILLS.next,
  //       PROJECT_SKILLS.shadcn,
  //       PROJECT_SKILLS.aceternity,
  //       PROJECT_SKILLS.framerMotion,
  //       PROJECT_SKILLS.tailwind,
  //       PROJECT_SKILLS.spline,
  //     ],
  //     backend: [],
  //   },
  //   get content() {
  //     return (
  //       <div>
  //         <TypographyP className="font-mono ">
  //           Welcome to my digital playground, where creativity meets code in the
  //           dopest way possible.
  //         </TypographyP>
  //         <ProjectsLinks live={this.live} repo={this.github} />
  //         <TypographyH3 className="my-4 mt-8">
  //           Beautiful 3D Objects{" "}
  //         </TypographyH3>
  //         <p className="font-mono mb-2">
  //           Did you see that 3D keyboard modal? Yeah! I made that. That
  //           interactive keyboard is being rendered in 3D on a webpage 🤯, and
  //           pressing each keycap reveals a skill in a goofy way. It&apos;s like
  //           typing, but make it art.
  //         </p>
  //         <SlideShow
  //           images={[
  //             `${BASE_PATH}/portfolio/landing.png`,
  //             `${BASE_PATH}/portfolio/skills.png`,
  //           ]}
  //         />
  //         <TypographyH3 className="my-4 ">Space Theme</TypographyH3>
  //         <p className="font-mono mb-2">
  //           Dark background + floating particles = out-of-this-world cool.
  //         </p>
  //         <SlideShow images={[`${BASE_PATH}/portfolio/navbar.png`]} />
  //         <TypographyH3 className="my-4 mt-8">Projects</TypographyH3>

  //         <p className="font-mono mb-2">
  //           My top personal and freelance projects — no filler, all killer.
  //         </p>
  //         <SlideShow
  //           images={[
  //             `${BASE_PATH}/portfolio/projects.png`,
  //             `${BASE_PATH}/portfolio/project.png`,
  //           ]}
  //         />
  //         <p className="font-mono mb-2 mt-8 text-center">
  //           This site&apos;s not just a portfolio — it&apos;s a whole vibe.
  //         </p>
  //       </div>
  //     );
  //   },
  // },

];
export default projects;
