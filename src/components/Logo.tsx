import Image from "next/image";
import Link from "next/link";
import mark from "../../public/brand/logo-mark.png";
import name from "../../public/brand/logo-name.png";
import full from "../../public/brand/logo-full.png";

/** Header lockup: emblem only on phones, emblem + name from `sm` up. */
export function LogoLockup() {
  return (
    <Link href="/" aria-label="Fiat Justitia Attorneys, home" className="flex shrink-0 items-center gap-3">
      <Image src={mark} alt="" priority className="h-11 w-auto sm:h-14" sizes="64px" />
      <Image src={name} alt="" priority className="hidden h-9 w-auto sm:block lg:h-10" sizes="220px" />
    </Link>
  );
}

export function LogoFull({ className = "" }: { className?: string }) {
  return <Image src={full} alt="Fiat Justitia Attorneys, Let justice be done" className={className} sizes="320px" />;
}

export function LogoMark({ className = "", alt = "", priority = false }: { className?: string; alt?: string; priority?: boolean }) {
  return <Image src={mark} alt={alt} priority={priority} className={className} sizes="(min-width: 1024px) 480px, 60vw" />;
}

const EDGE_LAYERS = 6; // per side
const DEPTH = 14; // px thickness of the medallion

/**
 * Hero emblem as a 3D medallion. Each side is a face plus its own stack of
 * darker edge layers; every layer hides its backface, so from either side only
 * correctly oriented copies are visible and the emblem never reads mirrored.
 */
export function LogoSpin({ className = "" }: { className?: string }) {
  const side = (flip: boolean) =>
    Array.from({ length: EDGE_LAYERS }, (_, i) => {
      const z = (i * DEPTH) / 2 / EDGE_LAYERS;
      return <Image key={`${flip}-${i}`} src={mark} alt="" aria-hidden className="logo3d-layer logo3d-edge" style={{ transform: `${flip ? "rotateY(180deg) " : ""}translateZ(${z}px)` }} sizes="480px" />;
    });
  return (
    <div className={`logo3d ${className}`}>
      <div className="logo3d-spin">
        {side(false)}
        {side(true)}
        <Image src={mark} alt="" aria-hidden className="logo3d-layer" style={{ transform: `rotateY(180deg) translateZ(${DEPTH / 2}px)` }} sizes="480px" />
        <Image src={mark} alt="Fiat Justitia Attorneys emblem" priority className="relative" style={{ transform: `translateZ(${DEPTH / 2}px)` }} sizes="480px" />
      </div>
      <div aria-hidden className="logo3d-shadow" />
    </div>
  );
}
