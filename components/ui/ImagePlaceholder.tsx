/**
 * VERDANTINO — Image Placeholder Component
 *
 * Renders an elegant botanical SVG placeholder with a label.
 * Replace with <Image src={imagePath} ... /> when real photography is available.
 *
 * Usage:
 *   <ImagePlaceholder label="Mission photography" aspectRatio="4/3" />
 *
 * When you have real photos, replace this component usage with:
 *   <Image src="/images/home/mission.jpg" alt="..." fill className="object-cover" />
 */

interface ImagePlaceholderProps {
  label?: string;
  aspectRatio?: string; // e.g. "4/3", "16/9", "1/1", "3/4"
  className?: string;
}

export default function ImagePlaceholder({
  label = "Image placeholder",
  aspectRatio = "4/3",
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`relative w-full overflow-hidden bg-sage/20 ${className}`}
      style={{ aspectRatio }}
      aria-hidden="true"
      role="img"
      aria-label={label}
    >
      {/* Botanical leaf motif */}
      <svg
        viewBox="0 0 400 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Background wash */}
        <rect width="400" height="300" fill="#A8B99A" fillOpacity="0.18" />

        {/* Centre leaf cluster */}
        <g transform="translate(200,160)">
          {/* Stem */}
          <line x1="0" y1="40" x2="0" y2="-40" stroke="#527D43" strokeWidth="1.5" strokeLinecap="round" />
          {/* Left leaf */}
          <path
            d="M0,20 Q-45,-10 -30,-55 Q0,-30 0,-5 Z"
            fill="#527D43"
            fillOpacity="0.22"
            stroke="#527D43"
            strokeWidth="1"
          />
          {/* Right leaf */}
          <path
            d="M0,20 Q45,-10 30,-55 Q0,-30 0,-5 Z"
            fill="#527D43"
            fillOpacity="0.22"
            stroke="#527D43"
            strokeWidth="1"
          />
          {/* Centre leaf */}
          <path
            d="M0,10 Q-20,-30 0,-65 Q20,-30 0,10 Z"
            fill="#527D43"
            fillOpacity="0.3"
            stroke="#527D43"
            strokeWidth="1"
          />
        </g>

        {/* Small accent sprouts */}
        <g transform="translate(130,185)">
          <line x1="0" y1="20" x2="0" y2="-15" stroke="#527D43" strokeWidth="1" strokeLinecap="round" />
          <path d="M0,5 Q-18,-5 -12,-30 Q0,-15 0,0 Z" fill="#527D43" fillOpacity="0.18" />
          <path d="M0,5 Q18,-5 12,-30 Q0,-15 0,0 Z" fill="#527D43" fillOpacity="0.18" />
        </g>
        <g transform="translate(270,190)">
          <line x1="0" y1="20" x2="0" y2="-15" stroke="#527D43" strokeWidth="1" strokeLinecap="round" />
          <path d="M0,5 Q-18,-5 -12,-30 Q0,-15 0,0 Z" fill="#527D43" fillOpacity="0.18" />
          <path d="M0,5 Q18,-5 12,-30 Q0,-15 0,0 Z" fill="#527D43" fillOpacity="0.18" />
        </g>

        {/* Ground line */}
        <line x1="80" y1="210" x2="320" y2="210" stroke="#527D43" strokeWidth="0.8" strokeOpacity="0.3" />

        {/* Label */}
        <text
          x="200"
          y="248"
          textAnchor="middle"
          fill="#527D43"
          fillOpacity="0.55"
          fontFamily="Georgia, serif"
          fontSize="11"
          letterSpacing="2"
        >
          {label.toUpperCase()}
        </text>
      </svg>
    </div>
  );
}
