import Image from "next/image";

/*
 * The R monogram with an animated orbit (styles: `.logo-*` in app/globals.css). Pure CSS, no JS.
 * The orbit is drawn twice: the back copy sits under the logo tile and the front copy (lower half only)
 * sits over it, so the light appears to pass behind the logo and come round in front.
 */

function Orbit() {
  // pathLength=100: dash lengths are percentages of the orbit. Every dash ends at 0, so all layers share
  // one head; the longer, fainter dashes form the fading trail behind it.
  return (
    <span className="logo-orbit">
      <svg viewBox="0 0 100 100" className="logo-orbit-spin">
        <circle className="logo-orbit-track" cx="50" cy="50" r="46" />
        {[
          { length: 34, opacity: 0.25 },
          { length: 20, opacity: 0.55 },
          { length: 9, opacity: 1 },
        ].map(({ length, opacity }) => (
          <circle
            key={length}
            className="logo-orbit-trail"
            cx="50"
            cy="50"
            r="46"
            pathLength={100}
            strokeDasharray={`${length} ${100 - length}`}
            strokeDashoffset={length}
            strokeOpacity={opacity}
          />
        ))}
        <circle
          className="logo-orbit-particle"
          cx="50"
          cy="50"
          r="46"
          pathLength={100}
          strokeDasharray="0.1 99.9"
          strokeDashoffset={0.1}
        />
      </svg>
    </span>
  );
}

export function LogoMark({ alt }: { alt: string }) {
  return (
    <span className="logo-mark">
      <span aria-hidden="true" className="logo-orbit-layer">
        <Orbit />
      </span>
      <Image
        src="/images/logo.png"
        alt={alt}
        width={36}
        height={36}
        priority
        className="logo-tile"
      />
      <span aria-hidden="true" className="logo-orbit-layer logo-orbit-front">
        <Orbit />
      </span>
    </span>
  );
}
