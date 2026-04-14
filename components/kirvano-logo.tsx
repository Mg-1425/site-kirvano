interface KirvanoLogoProps {
  className?: string
}

export function KirvanoLogo({ className = "" }: KirvanoLogoProps) {
  return (
    <img
      src="/kirvano-logo.png"
      alt="Kirvano"
      className={`h-7 w-auto object-contain ${className}`}
    />
  )
}