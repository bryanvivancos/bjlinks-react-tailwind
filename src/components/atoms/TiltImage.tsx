import { useEffect, useRef } from "react"

type Props = {
  src: string
  alt?: string
}

const TiltImage = ({ src, alt }: Props) => {
  const cardRef = useRef<HTMLDivElement | null>(null)
  const layer1Ref = useRef<HTMLDivElement | null>(null)
  const layer2Ref = useRef<HTMLDivElement | null>(null)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    let lastX = 0
    let lastY = 0

    const updateTransforms = () => {
      if (!cardRef.current) return

      const { innerWidth, innerHeight } = window
      const rotateY = ((lastX / innerWidth) - 0.5) * 20
      const rotateX = ((lastY / innerHeight) - 0.5) * -20

      cardRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`

      if (layer1Ref.current && layer2Ref.current) {
        layer1Ref.current.style.transform = `translate(${rotateY * 0.8}px, ${-rotateX * 0.8}px)`
        layer2Ref.current.style.transform = `translate(${rotateY * 1.5}px, ${-rotateX * 1.5}px)`
      }

      rafRef.current = null
    }

    const handleMouseMove = (e: MouseEvent) => {
      lastX = e.clientX
      lastY = e.clientY

      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(updateTransforms)
      }
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [])

  return (
    <div className="relative w-full h-full perspective-[1200px]">
      
      {/* CAPAS DETRÁS */}
      <div
        ref={layer1Ref}
        className="absolute inset-0 rounded-xl bg-green-500/8 blur-[2px] transition-transform duration-100 will-change-transform"
      />
      <div
        ref={layer2Ref}
        className="absolute inset-0 rounded-xl bg-green-500/8 blur-[4px] transition-transform duration-100 will-change-transform"
      />

      {/* CARD */}
      <div
        ref={cardRef}
        className="relative w-full h-full rounded-xl overflow-hidden will-change-transform transition-transform duration-100"
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          width="340"
          height="425"
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
      </div>
    </div>
  )
}

export default TiltImage