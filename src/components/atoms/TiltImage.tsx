import { useEffect, useRef } from "react"

type Props = {
  src: string
  alt?: string
}

const TiltImage = ({ src, alt }: Props) => {
  const cardRef = useRef<HTMLDivElement | null>(null)
  const layer1Ref = useRef<HTMLDivElement | null>(null)
  const layer2Ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return

      const { innerWidth, innerHeight } = window

      const x = e.clientX
      const y = e.clientY

      // Normalizar (-1 a 1)
      const rotateY = ((x / innerWidth) - 0.5) * 20
      const rotateX = ((y / innerHeight) - 0.5) * -20

      // CARD
      cardRef.current.style.transform = `
        rotateX(${rotateX}deg) 
        rotateY(${rotateY}deg)
      `

      // PARALLAX CAPAS
      if (layer1Ref.current && layer2Ref.current) {
        layer1Ref.current.style.transform = `
          translate(${rotateY * 0.8}px, ${-rotateX * 0.8}px)
        `

        layer2Ref.current.style.transform = `
          translate(${rotateY * 1.5}px, ${-rotateX * 1.5}px)
        `
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className="relative w-full h-full perspective-[1200px]">
      
      {/* CAPAS DETRÁS */}
      <div
        ref={layer1Ref}
        className="absolute inset-0 rounded-xl bg-green-500/10 blur-sm transition-transform duration-100"
      />
      <div
        ref={layer2Ref}
        className="absolute inset-0 rounded-xl bg-green-500/10 blur-md transition-transform duration-100"
      />

      {/* CARD */}
      <div
        ref={cardRef}
        className="relative w-full h-full rounded-xl overflow-hidden will-change-transform transition-transform duration-100"
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}

export default TiltImage