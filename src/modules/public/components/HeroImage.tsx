export default function HeroImage() {
    return (
        <svg
            viewBox="0 0 800 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            preserveAspectRatio="xMidYMid meet"
        >
            {/* Background Room */}
            <rect width="800" height="600" fill="#F8FAFC" />
            <rect x="0" y="480" width="800" height="120" fill="#F1F5F9" /> {/* Floor */}

            {/* Window with view */}
            <rect x="50" y="80" width="180" height="280" rx="8" fill="#E0F2FE" />
            <rect x="60" y="90" width="75" height="125" rx="4" fill="#BAE6FD" fillOpacity="0.4" />
            <rect x="145" y="90" width="75" height="125" rx="4" fill="#BAE6FD" fillOpacity="0.4" />
            <rect x="60" y="225" width="75" height="125" rx="4" fill="#BAE6FD" fillOpacity="0.4" />
            <rect x="145" y="225" width="75" height="125" rx="4" fill="#BAE6FD" fillOpacity="0.4" />

            {/* Plant */}
            <rect x="650" y="440" width="60" height="70" rx="4" fill="#A16207" /> {/* Pot */}
            <path d="M680 440 Q 640 380 620 340" stroke="#059669" strokeWidth="8" strokeLinecap="round" />
            <path d="M680 440 Q 720 380 740 340" stroke="#059669" strokeWidth="8" strokeLinecap="round" />
            <path d="M680 440 L 680 320" stroke="#10B981" strokeWidth="8" strokeLinecap="round" />
            <circle cx="620" cy="340" r="15" fill="#34D399" />
            <circle cx="740" cy="340" r="15" fill="#34D399" />
            <circle cx="680" cy="320" r="20" fill="#34D399" />

            {/* Chairs */}
            {/* Psychologist Chair */}
            <path d="M280 480 L280 380 Q 280 340 330 340 L 380 340 Q 430 340 430 380 L 430 480 Z" fill="#E2E8F0" />
            <rect x="290" y="480" width="130" height="15" fill="#CBD5E1" />
            <rect x="300" y="495" width="10" height="40" fill="#94A3B8" />
            <rect x="410" y="495" width="10" height="40" fill="#94A3B8" />

            {/* Patient Chair (Lounge style) */}
            <path d="M500 480 L700 480 L 720 400 Q 720 360 680 360 L 520 360 Q 480 360 480 400 Z" fill="#E2E8F0" />
            <rect x="520" y="480" width="160" height="15" fill="#CBD5E1" />
            <rect x="530" y="495" width="10" height="20" fill="#94A3B8" />
            <rect x="660" y="495" width="10" height="20" fill="#94A3B8" />

            {/* Figures */}
            {/* Psychologist */}
            <circle cx="355" cy="300" r="30" fill="#E2E8F0" /> {/* Head background */}
            <circle cx="355" cy="300" r="25" fill="#1E3A8A" /> {/* Hair/Head shadow */}
            <path d="M315 340 Q 355 340 395 340 L 395 460 L 315 460 Z" fill="#3B82F6" /> {/* Torso */}
            <path d="M315 370 Q 290 400 320 430" stroke="#1E3A8A" strokeWidth="10" strokeLinecap="round" /> {/* Arm */}
            <rect x="305" y="420" width="40" height="50" fill="white" rx="2" transform="rotate(-10 305 420)" /> {/* Clipboard */}
            <rect x="315" y="435" width="20" height="2" fill="#E2E8F0" transform="rotate(-10 315 435)" />
            <rect x="317" y="445" width="15" height="2" fill="#E2E8F0" transform="rotate(-10 317 445)" />

            {/* Patient */}
            <circle cx="585" cy="310" r="30" fill="#BE123C" /> {/* Hair/Head shadow */}
            <path d="M545 350 Q 585 350 625 350 L 625 470 L 545 470 Z" fill="#F43F5E" /> {/* Torso */}
            <path d="M625 380 Q 650 400 620 430" stroke="#881337" strokeWidth="10" strokeLinecap="round" /> {/* Arm gesturing */}

            {/* Subtle communication line */}
            <path d="M400 320 Q 470 280 540 320" stroke="#3B82F6" strokeWidth="2" strokeDasharray="4 4" opacity="0.4" />
        </svg>
    );
}
