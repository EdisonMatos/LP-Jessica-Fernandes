import { lazy, Suspense } from 'react'

// CRÍTICO — render imediato (LCP)
import Navbar from '../components/sections/NavbarSocial'
import Hero from '../components/sections/Hero'

// Lazy — abaixo da dobra
const Features = lazy(() => import('../components/sections/Features'))
const About = lazy(() => import('../components/sections/About'))
const AboutInstagram = lazy(() =>
  import('../components/sections/AboutInstagram')
)
const Cta = lazy(() => import('../components/sections/Cta'))
const Steps = lazy(() => import('../components/sections/Steps'))
const Faq = lazy(() => import('../components/sections/Faq'))
const FooterSocial = lazy(() => import('../components/sections/FooterSocial'))

const FloatingWhatsappButton = lazy(() =>
  import('../components/interactives/FloatingWhatsappButton')
)
const BackToTopButton = lazy(() =>
  import('../components/interactives/BackToTopButton')
)

// const BlogPosts = lazy(() => import('../components/sections/BlogPosts'))
// const Maps = lazy(() => import('../components/sections/Maps'))
// const TeamCards = lazy(() => import('../components/sections/TeamCards'))

export default function Index() {
  const colorMode = 'default'

  return (
    <>
      {/* Render imediato */}
      <Navbar colorMode={colorMode} />

      <main>
        {/* LCP — NÃO usar lazy */}
        <Hero
          colorMode={colorMode}
          appDownloadButtons={false}
          defaultHero={false}
          influencer={true}
          mesclado={false}
        />

        {/* Conteúdo abaixo da dobra */}
        <Suspense fallback={null}>
          {/* <BlogPosts /> */}

          <Features
            colorMode={colorMode}
            defaultFeature={false}
            button={false}
            modalWithCards={false}
            paragraphs={false}
            sixCards={true}
            paragraphsModal={false}
          />

          <About modal={true} showGallery={false} colorMode={colorMode} />

          <AboutInstagram
            colorMode={colorMode}
            instagram={true}
            socialPrint={false}
          />

          <Cta colorMode={colorMode} />
          <Steps colorMode={colorMode} />

          {/* <Maps colorMode={colorMode} /> */}

          <Faq colorMode={colorMode} />

          <FooterSocial
            colorMode={colorMode}
            addres={false}
            addresSecundario={false}
            phoneSecundario={false}
            phoneTerciario={false}
            expedientesecond={false}
            instagram={true}
          />

          <FloatingWhatsappButton />
          <BackToTopButton />
        </Suspense>
      </main>
    </>
  )
}
