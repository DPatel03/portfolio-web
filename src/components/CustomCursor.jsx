import { useEffect, useRef, useState } from 'react'
import './CustomCursor.css'

const HOVER_TARGETS = 'a, button, .proj-card, .skills__chip, .exp-card'

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!finePointer || reduceMotion) return undefined
    setEnabled(true)
  }, [])

  useEffect(() => {
    if (!enabled) return undefined
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return undefined

    document.documentElement.classList.add('has-custom-cursor')

    let frame = 0
    let x = -100
    let y = -100

    const render = () => {
      frame = 0
      const t = `translate(${x}px, ${y}px)`
      dot.style.transform = t
      ring.style.transform = t
    }

    const setVisible = (visible) => {
      dot.style.opacity = visible ? '1' : '0'
      ring.style.opacity = visible ? '1' : '0'
    }

    const onMove = (e) => {
      x = e.clientX
      y = e.clientY
      setVisible(true)
      if (!frame) frame = requestAnimationFrame(render)
    }

    const onOver = (e) => {
      const t = e.target
      if (!(t instanceof Element)) return
      const hovering = Boolean(t.closest(HOVER_TARGETS))
      dot.classList.toggle('cursor-dot--hover', hovering)
      ring.classList.toggle('cursor-ring--hover', hovering)
    }

    const onLeave = () => setVisible(false)

    window.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseover', onOver, { passive: true })
    document.documentElement.addEventListener('mouseleave', onLeave)

    return () => {
      if (frame) cancelAnimationFrame(frame)
      document.documentElement.classList.remove('has-custom-cursor')
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.documentElement.removeEventListener('mouseleave', onLeave)
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  )
}
