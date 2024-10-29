import { useEffect, useRef } from 'react'
import useScroll from '@/hooks/useScroll'
import Navbar from '@/layouts/Navbar'
import Hero from '@/layouts/Hero'
import Section from '@/layouts/Section'
import Footer from '@/layouts/Footer'
import couple from '@data/couple'
import section from '@data/section'

function Main() {
  const sectionRef = useRef([])
  const { sectionTitleSlideIn } = useScroll(sectionRef)
  const groomShortName = couple[0].shortName
  const brideShortName = couple[1].shortName
  const groomFirstLetter = couple[0].firstLetter
  const brideFirstLetter = couple[1].firstLetter

  useEffect(() => {
    sectionRef.current = sectionRef.current.slice(0, section.length)
  }, [])

  return (
    <>
      <header>
        <Navbar
          section={section}
          sectionRef={sectionRef}
          groom={groomFirstLetter}
          bride={brideFirstLetter}
        />
      </header>
      <main>
        <Hero groom={groomShortName} bride={brideShortName} />
        {section.map((item, i) => (
          <Section
            {...item}
            key={i}
            ref={(el) => (sectionRef.current[i] = el)}
            slideIn={sectionTitleSlideIn}
          />
        ))}
      </main>
      <footer>
        <Footer groom={groomShortName} bride={brideShortName} />
      </footer>
    </>
  )
}

export default Main
