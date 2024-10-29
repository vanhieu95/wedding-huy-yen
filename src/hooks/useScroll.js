import { useEffect, useState } from 'react'
import { events } from '@data/events'
import section from '@data/section'
import { useRefContext } from '@/contexts/RefContext'

export default function useScroll(sectionRef) {
  const { heroRef, coupleRef, eventRef } = useRefContext()
  const [navbarColor, setNavbarColor] = useState('transparent')
  const [coupleCardAppear, setCoupleCardAppear] = useState(false)
  const [eventCardAppear, setEventCardAppear] = useState(false)
  const [eventCardSlideIn, setEventCardSlideIn] = useState()
  const [giftCardAppear, setGiftCardAppear] = useState(false)
  const [sectionTitleSlideIn, setSectionTitleSlideIn] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => handleScroll())
    return () => {
      window.removeEventListener('scroll', () => handleScroll())
    }
  }, [])

  function handleScroll() {
    changeNavbarColor()
    handleCoupleScroll()
    handleEventScroll()
    handleGiftScroll()
    handleSectionScroll()
  }

  function changeNavbarColor() {
    window.scrollY >= heroRef.current.offsetHeight
      ? setNavbarColor('white')
      : setNavbarColor('transparent')
  }

  function handleCoupleScroll() {
    let coupleTopY = heroRef.current.offsetHeight - 300

    if (window.scrollY >= coupleTopY) {
      setCoupleCardAppear(true)
    }

    if (window.scrollY < coupleTopY - 200) {
      setCoupleCardAppear(false)
    }
  }

  function handleEventScroll() {
    const slideInList = {}
    let currentEventTopY =
      heroRef.current.offsetHeight + coupleRef.current.offsetHeight - 300
    const eventHeight = Math.round(eventRef.current.offsetHeight / 4)

    events.forEach((event, i) => {
      if (i > 0) {
        currentEventTopY += eventHeight
      }

      if (window.scrollY >= currentEventTopY) {
        slideInList[i] = true
      }

      if (window.scrollY < currentEventTopY - 200) {
        slideInList[i] = false
      }

      if (i === 0) {
        if (window.scrollY >= currentEventTopY) {
          setEventCardAppear(true)
        }

        if (window.scrollY < currentEventTopY - 200) {
          setEventCardAppear(false)
        }
      }
    })

    setEventCardSlideIn(slideInList)
  }

  function handleGiftScroll() {
    let giftTopY = heroRef.current.offsetHeight +
      coupleRef.current.offsetHeight +
      eventRef.current.offsetHeight -
      300

    if (window.scrollY >= giftTopY) {
      setGiftCardAppear(true)
    }

    if (window.scrollY < giftTopY - 200) {
      setGiftCardAppear(false)
    }
  }

  function handleSectionScroll() {
    let currentSectionTopY = heroRef.current.offsetHeight - 700
    const slideInList = {}

    if (sectionRef != null && sectionRef.current != null) {
      section.forEach((item, i) => {
        if (i > 0) {
          currentSectionTopY += sectionRef.current[i - 1].offsetHeight
        }

        if (window.scrollY >= currentSectionTopY) {
          slideInList[item.section] = true
        }
      })

      setSectionTitleSlideIn(slideInList)
    }
  }

  return {
    navbarColor,
    coupleCardAppear,
    eventCardSlideIn,
    eventCardAppear,
    giftCardAppear,
    sectionTitleSlideIn
  }
}