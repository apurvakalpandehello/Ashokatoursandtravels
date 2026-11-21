import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './IntroAnimation.css';

// Reference Images Import (Preserved from existing project structure)
import darkBg from '../assets/intro/darkmode.png';
import lightsBg from '../assets/intro/darkmodewithlights.jpg';
import goldenNavBg from '../assets/intro/linksimages2.png';

const COACH_THEMES = {
  purple: {
    id: 'purple',
    label: 'Parked Metallic Purple Luxury Coach',
    plate: 'MH 12 AT 3333',
    bodyGrad: ['#1b0833', '#3d156e', '#6325ad', '#2b0d4f'],
    roofGrad: ['#8542d6', '#3d156e'],
    skirtGrad: ['#140626', '#290d4a'],
    trimColor: '#e5b84b',
    accentStripe: '#f5d27a',
  },
  white: {
    id: 'white',
    label: 'Parked Pearl White Luxury Coach',
    plate: 'MH 12 AT 4444',
    bodyGrad: ['#cbd5e1', '#f1f5f9', '#ffffff', '#94a3b8'],
    roofGrad: ['#ffffff', '#cbd5e1'],
    skirtGrad: ['#64748b', '#94a3b8'],
    trimColor: '#c9972c',
    accentStripe: '#1e3a8a',
  },
  black: {
    id: 'black',
    label: 'Glossy Black Luxury Coach',
    plate: 'MH 12 AT 8888',
    bodyGrad: ['#05070a', '#161b24', '#2c3545', '#090c10'],
    roofGrad: ['#3b4659', '#11161f'],
    skirtGrad: ['#040508', '#141921'],
    trimColor: '#f5c542',
    accentStripe: '#ffe082',
  },
  blue: {
    id: 'blue',
    label: 'Metallic Blue Luxury Coach',
    plate: 'MH 12 AT 9999',
    bodyGrad: ['#071938', '#123a7d', '#1f5cc4', '#0b2452'],
    roofGrad: ['#4788f5', '#123a7d'],
    skirtGrad: ['#06132b', '#0f2f66'],
    trimColor: '#f5c542',
    accentStripe: '#93c5fd',
  },
};

/**
 * Three-Quarter Front-Left Luxury Tourist Coach
 */
const LuxuryCoachThreeQuarter = ({ variantKey, isMoving = false }) => {
  const t = COACH_THEMES[variantKey];
  const uid = `${t.id}-coach`;

  return (
    <div className={`coach-unit ${isMoving ? 'coach-moving' : 'coach-parked'}`}>
      <div className="coach-suspension-body">
        <svg
          viewBox="0 0 760 330"
          preserveAspectRatio="xMidYMid meet"
          className="coach-three-quarter-svg"
          role="img"
          aria-label={t.label}
        >
          <defs>
            <linearGradient id={`body-${uid}`} x1="0%" y1="0%" x2="100%" y2="15%">
              <stop offset="0%" stopColor={t.bodyGrad[0]} />
              <stop offset="22%" stopColor={t.bodyGrad[2]} />
              <stop offset="68%" stopColor={t.bodyGrad[1]} />
              <stop offset="100%" stopColor={t.bodyGrad[3]} />
            </linearGradient>

            <linearGradient id={`roof-${uid}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={t.roofGrad[0]} />
              <stop offset="100%" stopColor={t.roofGrad[1]} />
            </linearGradient>

            <linearGradient id={`skirt-${uid}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={t.skirtGrad[0]} />
              <stop offset="50%" stopColor={t.skirtGrad[1]} />
              <stop offset="100%" stopColor={t.skirtGrad[0]} />
            </linearGradient>

            <linearGradient id={`glass-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#071120" />
              <stop offset="40%" stopColor="#163052" />
              <stop offset="55%" stopColor="#2f5c8f" stopOpacity="0.88" />
              <stop offset="100%" stopColor="#081221" />
            </linearGradient>

            <linearGradient id={`chrome-${uid}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f8fafc" />
              <stop offset="50%" stopColor="#94a3b8" />
              <stop offset="100%" stopColor="#e2e8f0" />
            </linearGradient>

            <radialGradient id={`beam-${uid}`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#fff3b8" />
              <stop offset="85%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#1e3a8a" />
            </radialGradient>
          </defs>

          {/* Undercarriage Shadow */}
          <ellipse cx="385" cy="296" rx="345" ry="18" fill="rgba(0,0,0,0.78)" />

          {/* Far-Side Front Wheel Hint */}
          <ellipse cx="62" cy="278" rx="18" ry="22" fill="#0d1015" />

          {/* Main Coach Chassis & Side Profile */}
          <path
            d="M 54 78 Q 74 44 135 42 L 705 56 Q 730 58 734 86 L 736 254 Q 734 270 714 272 L 185 288 L 46 280 Q 32 276 34 252 L 44 118 Q 46 92 54 78 Z"
            fill={`url(#body-${uid})`}
            stroke={t.trimColor}
            strokeWidth="1.8"
          />

          {/* Aerodynamic Roofline & HVAC Unit */}
          <path
            d="M 66 64 Q 90 42 142 42 L 705 56 L 698 68 L 145 56 Q 94 56 66 64 Z"
            fill={`url(#roof-${uid})`}
          />
          <path
            d="M 275 34 L 515 41 L 522 52 L 268 46 Z"
            fill="#1e293b"
            stroke="#64748b"
            strokeWidth="1"
          />

          {/* Lower Luggage Bay Skirt & Gold Pinstripe */}
          <path
            d="M 185 224 L 735 216 L 735 264 Q 732 271 714 272 L 185 288 Z"
            fill={`url(#skirt-${uid})`}
          />
          <line x1="40" y1="220" x2="735" y2="213" stroke={t.trimColor} strokeWidth="3" />
          <line
            x1="186"
            y1="194"
            x2="734"
            y2="189"
            stroke={t.accentStripe}
            strokeWidth="1.5"
            opacity="0.7"
          />

          {/* Luggage Bay Seam Lines */}
          <line x1="320" y1="220" x2="320" y2="283" stroke="rgba(0,0,0,0.45)" strokeWidth="2" />
          <line x1="445" y1="219" x2="445" y2="279" stroke="rgba(0,0,0,0.45)" strokeWidth="2" />
          <line x1="570" y1="218" x2="570" y2="275" stroke="rgba(0,0,0,0.45)" strokeWidth="2" />

          {/* Front Panoramic Windshield */}
          <path
            d="M 52 84 Q 95 72 162 80 L 166 196 Q 95 202 38 190 Z"
            fill={`url(#glass-${uid})`}
            stroke="#060c17"
            strokeWidth="3.5"
          />

          {/* LED Destination Board */}
          <polygon
            points="66,88 150,86 151,105 63,108"
            fill="#06090f"
            stroke="#334155"
            strokeWidth="1"
          />
          <text
            x="107"
            y="100"
            textAnchor="middle"
            fill="#ffcf54"
            fontSize="8.5"
            fontWeight="800"
            letterSpacing="0.8"
            fontFamily="sans-serif"
          >
            ASHOK TRAVELS
          </text>

          {/* Driver Cabin Interior & Steering Wheel */}
          <g opacity="0.78">
            <path d="M 44 186 Q 96 195 162 189 L 158 172 Q 96 177 48 170 Z" fill="#09111e" />
            <rect x="115" y="138" width="22" height="36" rx="6" fill="#182945" />
            <ellipse cx="124" cy="166" rx="13" ry="5" fill="none" stroke="#64748b" strokeWidth="2.5" />
          </g>

          {/* Windshield Glass Reflection & Wipers */}
          <polygon points="62,112 95,110 76,188 48,186" fill="#ffffff" opacity="0.11" />
          <line x1="94" y1="194" x2="52" y2="168" stroke="#090d16" strokeWidth="3" strokeLinecap="round" />
          <line x1="138" y1="192" x2="96" y2="166" stroke="#090d16" strokeWidth="3" strokeLinecap="round" />

          {/* Passenger Door & Side Windows */}
          <path
            d="M 182 82 L 718 92 L 720 176 L 182 180 Z"
            fill={`url(#glass-${uid})`}
            stroke="#070e1a"
            strokeWidth="3"
          />
          <line x1="242" y1="83" x2="242" y2="275" stroke="#090e17" strokeWidth="4" />
          <line x1="340" y1="85" x2="340" y2="179" stroke="#090e17" strokeWidth="4.5" />
          <line x1="438" y1="87" x2="438" y2="178" stroke="#090e17" strokeWidth="4.5" />
          <line x1="536" y1="89" x2="536" y2="177" stroke="#090e17" strokeWidth="4.5" />
          <line x1="632" y1="90" x2="632" y2="176" stroke="#090e17" strokeWidth="4.5" />

          {/* Side Branding */}
          <text
            x="465"
            y="207"
            textAnchor="middle"
            fill={t.trimColor}
            fontSize="13.5"
            fontWeight="800"
            letterSpacing="3.5"
            fontFamily="sans-serif"
          >
            ASHOK TOURS &amp; TRAVELS
          </text>

          {/* Front Nose Grille & Emblem */}
          <polygon
            points="54,218 134,224 132,252 52,245"
            fill="#090e17"
            stroke={`url(#chrome-${uid})`}
            strokeWidth="2"
          />
          <line x1="56" y1="227" x2="132" y2="232" stroke={`url(#chrome-${uid})`} strokeWidth="1.8" />
          <line x1="55" y1="236" x2="131" y2="241" stroke={`url(#chrome-${uid})`} strokeWidth="1.8" />
          <circle cx="92" cy="207" r="8" fill="#0b1526" stroke={t.trimColor} strokeWidth="2" />

          {/* Front Bumper & Number Plate */}
          <path
            d="M 34 248 Q 95 258 176 254 L 176 284 Q 95 288 36 278 Z"
            fill={`url(#skirt-${uid})`}
            stroke={t.trimColor}
            strokeWidth="1.4"
          />
          <rect x="66" y="261" width="52" height="12" rx="2" fill="#f8fafc" />
          <text
            x="92"
            y="270"
            textAnchor="middle"
            fill="#0f172a"
            fontSize="6.5"
            fontWeight="800"
            fontFamily="monospace"
          >
            {t.plate}
          </text>

          {/* Headlights */}
          <g>
            <polygon points="37,216 50,219 49,238 36,234" fill="#0b1220" stroke="#94a3b8" strokeWidth="1.2" />
            <circle
              cx="43"
              cy="227"
              r="5.5"
              fill={isMoving ? `url(#beam-${uid})` : '#64748b'}
            />
            <polygon points="140,224 166,223 166,243 139,244" fill="#0b1220" stroke="#94a3b8" strokeWidth="1.2" />
            <circle
              cx="153"
              cy="233"
              r="7"
              fill={isMoving ? `url(#beam-${uid})` : '#64748b'}
            />
          </g>

          {/* Front Rear-View Mirror Arm */}
          <path
            d="M 48 92 Q 24 90 22 110 L 22 152 Q 22 160 30 160 L 36 160 L 36 112 Q 36 102 48 102 Z"
            fill="#0f172a"
            stroke={t.trimColor}
            strokeWidth="1.2"
          />

          {/* Front Axle Alloy Wheel */}
          <g transform="translate(218, 272)">
            <circle cx="0" cy="0" r="32" fill="#0f1217" stroke="#1e293b" strokeWidth="3" />
            <circle cx="0" cy="0" r="20" fill="#cbd5e1" stroke="#475569" strokeWidth="2" />
            <g className={isMoving ? 'alloy-wheel-spin' : ''}>
              <circle cx="0" cy="0" r="7" fill="#1e293b" />
              <line x1="0" y1="-18" x2="0" y2="18" stroke="#334155" strokeWidth="3" />
              <line x1="-18" y1="0" x2="18" y2="0" stroke="#334155" strokeWidth="3" />
              <line x1="-13" y1="-13" x2="13" y2="13" stroke="#334155" strokeWidth="2.5" />
              <line x1="-13" y1="13" x2="13" y2="-13" stroke="#334155" strokeWidth="2.5" />
            </g>
          </g>

          {/* Rear Tandem Axle Alloy Wheels */}
          <g transform="translate(572, 262)">
            <circle cx="0" cy="0" r="29" fill="#0f1217" stroke="#1e293b" strokeWidth="3" />
            <circle cx="0" cy="0" r="18" fill="#cbd5e1" stroke="#475569" strokeWidth="2" />
            <g className={isMoving ? 'alloy-wheel-spin' : ''}>
              <circle cx="0" cy="0" r="6" fill="#1e293b" />
              <line x1="0" y1="-16" x2="0" y2="16" stroke="#334155" strokeWidth="2.8" />
              <line x1="-16" y1="0" x2="16" y2="0" stroke="#334155" strokeWidth="2.8" />
              <line x1="-11" y1="-11" x2="11" y2="11" stroke="#334155" strokeWidth="2.2" />
              <line x1="-11" y1="11" x2="11" y2="-11" stroke="#334155" strokeWidth="2.2" />
            </g>
          </g>

          <g transform="translate(644, 260)">
            <circle cx="0" cy="0" r="28" fill="#0f1217" stroke="#1e293b" strokeWidth="3" />
            <circle cx="0" cy="0" r="17" fill="#cbd5e1" stroke="#475569" strokeWidth="2" />
            <g className={isMoving ? 'alloy-wheel-spin' : ''}>
              <circle cx="0" cy="0" r="6" fill="#1e293b" />
              <line x1="0" y1="-15" x2="0" y2="15" stroke="#334155" strokeWidth="2.8" />
              <line x1="-15" y1="0" x2="15" y2="0" stroke="#334155" strokeWidth="2.8" />
              <line x1="-11" y1="-11" x2="11" y2="11" stroke="#334155" strokeWidth="2.2" />
              <line x1="-11" y1="11" x2="11" y2="-11" stroke="#334155" strokeWidth="2.2" />
            </g>
          </g>
        </svg>

        {/* Active Headlight Lens Flares & Road Beams While Driving */}
        {isMoving && (
          <>
            <div className="moving-headlight-flare flare-outer"></div>
            <div className="moving-headlight-flare flare-inner"></div>
            <div className="moving-headlight-beam"></div>
          </>
        )}
      </div>
    </div>
  );
};

/**
 * Ashok Tours & Travels Agency Office Building (Left Side, Facing Right)
 */
const AgencyOfficeBuilding = () => (
  <div className="agency-office-wrapper" aria-label="Ashok Tours & Travels Agency Office">
    <svg
      viewBox="0 0 540 500"
      preserveAspectRatio="xMinYMax meet"
      className="agency-office-svg"
    >
      <defs>
        <linearGradient id="darkBrownWall" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1c110a" />
          <stop offset="60%" stopColor="#2e1c11" />
          <stop offset="100%" stopColor="#3d2618" />
        </linearGradient>

        <linearGradient id="warmWhiteFacade" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fdfbf7" />
          <stop offset="65%" stopColor="#ede4d5" />
          <stop offset="100%" stopColor="#d4c5ae" />
        </linearGradient>

        <linearGradient id="goldSignboard" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#9e6f19" />
          <stop offset="30%" stopColor="#f7d374" />
          <stop offset="65%" stopColor="#ffe8a3" />
          <stop offset="100%" stopColor="#b07d20" />
        </linearGradient>

        <linearGradient id="officeGlassWarm" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2b1e14" stopOpacity="0.82" />
          <stop offset="50%" stopColor="#4f3723" stopOpacity="0.72" />
          <stop offset="100%" stopColor="#1f140c" stopOpacity="0.88" />
        </linearGradient>

        <radialGradient id="receptionGlow" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#ffe89e" stopOpacity="0.85" />
          <stop offset="55%" stopColor="#f59e0b" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#2e1c11" stopOpacity="0" />
        </radialGradient>
      </defs>

      <polygon points="0,455 470,455 515,478 0,478" fill="rgba(0,0,0,0.72)" />
      <polygon points="0,72 230,96 230,456 0,468" fill="url(#darkBrownWall)" />
      <polygon points="230,96 465,134 465,442 230,456" fill="url(#warmWhiteFacade)" />
      <polygon points="0,58 234,84 475,124 475,142 230,104 0,80" fill="url(#goldSignboard)" />

      <polygon
        points="238,112 456,146 456,192 238,166"
        fill="#22140b"
        stroke="url(#goldSignboard)"
        strokeWidth="3.5"
      />
      <g transform="matrix(1, 0.145, 0, 1, 248, 146)">
        <text
          x="98"
          y="0"
          textAnchor="middle"
          fill="#ffe082"
          fontSize="16.5"
          fontWeight="900"
          letterSpacing="1.6"
          fontFamily="sans-serif"
        >
          ASHOK TOURS
        </text>
        <text
          x="98"
          y="17"
          textAnchor="middle"
          fill="#ffffff"
          fontSize="11.5"
          fontWeight="700"
          letterSpacing="3.2"
          fontFamily="sans-serif"
        >
          &amp; TRAVELS
        </text>
      </g>

      <polygon
        points="24,116 205,134 205,184 24,172"
        fill="#26170d"
        stroke="url(#goldSignboard)"
        strokeWidth="2.5"
      />
      <text
        x="114"
        y="153"
        textAnchor="middle"
        fill="#f7d374"
        fontSize="14"
        fontWeight="800"
        letterSpacing="2"
        fontFamily="sans-serif"
      >
        HEAD OFFICE
      </text>

      <polygon
        points="246,204 448,226 448,434 246,446"
        fill="url(#officeGlassWarm)"
        stroke="#2b1a10"
        strokeWidth="4"
      />
      <polygon points="248,206 446,228 446,432 248,444" fill="url(#receptionGlow)" />

      <g opacity="0.9">
        <polygon points="282,254 366,262 366,294 282,288" fill="#3a2314" stroke="#f7d374" strokeWidth="1.5" />
        <polygon points="274,344 374,348 374,404 274,406" fill="#f8fafc" />
        <polygon points="274,344 374,348 374,356 274,352" fill="#eab308" />
        <line x1="305" y1="212" x2="305" y2="246" stroke="#fde68a" strokeWidth="1.5" />
        <circle cx="305" cy="249" r="5" fill="#fef08a" />
        <line x1="355" y1="217" x2="355" y2="250" stroke="#fde68a" strokeWidth="1.5" />
        <circle cx="355" cy="253" r="5" fill="#fef08a" />
      </g>

      <polygon
        points="382,272 442,278 442,434 382,438"
        fill="rgba(255, 236, 179, 0.22)"
        stroke="#f7d374"
        strokeWidth="2.5"
      />
      <line x1="412" y1="275" x2="412" y2="436" stroke="#f7d374" strokeWidth="2.2" />
      <line x1="406" y1="350" x2="406" y2="376" stroke="#ffe082" strokeWidth="3" strokeLinecap="round" />
      <line x1="418" y1="350" x2="418" y2="376" stroke="#ffe082" strokeWidth="3" strokeLinecap="round" />

      <polygon points="368,256 468,266 468,278 368,268" fill="#22140b" stroke="#f7d374" strokeWidth="2" />
      <ellipse cx="400" cy="272" rx="8" ry="2.5" fill="#fef08a" />
      <ellipse cx="438" cy="275" rx="8" ry="2.5" fill="#fef08a" />

      <polygon
        points="26,204 206,214 206,438 26,446"
        fill="url(#officeGlassWarm)"
        stroke="url(#goldSignboard)"
        strokeWidth="3"
      />
      <polygon points="28,206 204,216 204,436 28,444" fill="url(#receptionGlow)" opacity="0.65" />
      <line x1="116" y1="209" x2="116" y2="442" stroke="#26170d" strokeWidth="4" />
      <line x1="26" y1="322" x2="206" y2="326" stroke="#26170d" strokeWidth="4" />

      <polygon points="256,210 296,214 268,440 248,442" fill="#ffffff" opacity="0.12" />
      <polygon points="44,210 82,212 58,442 32,443" fill="#ffffff" opacity="0.09" />

      <polygon points="374,438 476,432 492,446 374,454" fill="#e7dccb" />
      <polygon points="374,454 492,446 506,460 374,468" fill="#c9b89e" />
    </svg>
  </div>
);

const IntroAnimation = ({ onComplete }) => {
  // Stages: 'dark' -> 'lights' -> 'scene' -> 'nav'
  const [stage, setStage] = useState('dark');

  // Bus Exit States: 'waiting' | 'moving' | 'exited'
  const [blackBusStatus, setBlackBusStatus] = useState('waiting');
  const [blueBusStatus, setBlueBusStatus] = useState('waiting');

  const [audioBlocked, setAudioBlocked] = useState(false);
  const blackAudioRef = useRef(null);
  const blueAudioRef = useRef(null);
  const navigate = useNavigate();

  // Audio Setup & Cleanup
  useEffect(() => {
    const blackAudio = new Audio('/audio/bus-engine.mp3');
    blackAudio.loop = false;
    blackAudio.volume = 0.85;
    blackAudioRef.current = blackAudio;

    const blueAudio = new Audio('/audio/bus-engine.mp3');
    blueAudio.loop = false;
    blueAudio.volume = 0.85;
    blueAudioRef.current = blueAudio;

    return () => {
      stopAudio(blackAudioRef.current);
      stopAudio(blueAudioRef.current);
    };
  }, []);

  const playAudio = (audioEl) => {
    if (!audioEl) return;
    audioEl.currentTime = 0;
    const playPromise = audioEl.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => setAudioBlocked(false))
        .catch(() => setAudioBlocked(true));
    }
  };

  const stopAudio = (audioEl) => {
    if (!audioEl) return;
    audioEl.pause();
    audioEl.currentTime = 0;
  };

  // Stage 1: Initial Dark Screen -> Lights Turn ON
  useEffect(() => {
    const darkTimer = setTimeout(() => {
      setStage('lights');
    }, 1100);

    return () => clearTimeout(darkTimer);
  }, []);

  // Stage 2: When Lights Finish Turning ON -> Open Scene & Start Black Bus Exit
  const handleLightsComplete = (e) => {
    if (e.target !== e.currentTarget || stage !== 'lights') return;
    setStage('scene');
    setBlackBusStatus('moving');
    playAudio(blackAudioRef.current);
  };

  // Stage 3A: When Black Bus Completes Full Exit Past Left Edge -> Start Blue Bus Exit
  const handleBlackBusExitEnd = (e) => {
    if (e.target !== e.currentTarget || blackBusStatus !== 'moving') return;
    stopAudio(blackAudioRef.current);
    setBlackBusStatus('exited');
    setBlueBusStatus('moving');
    playAudio(blueAudioRef.current);
  };

  // Stage 3B: When Blue Bus Completes Full Exit Past Left Edge -> Immediately Show Golden Nav Screen
  const handleBlueBusExitEnd = (e) => {
    if (e.target !== e.currentTarget || blueBusStatus !== 'moving') return;
    stopAudio(blueAudioRef.current);
    setBlueBusStatus('exited');
    setStage('nav');
  };

  const handleEnableAudio = () => {
    if (blackBusStatus === 'moving') {
      playAudio(blackAudioRef.current);
    } else if (blueBusStatus === 'moving') {
      playAudio(blueAudioRef.current);
    }
  };

  const handleLinkClick = (e, path) => {
    e.preventDefault();
    stopAudio(blackAudioRef.current);
    stopAudio(blueAudioRef.current);
    sessionStorage.setItem('ashok_intro_seen', 'true');
    if (onComplete) onComplete();
    navigate(path);
  };

  const isSceneVisible = stage === 'scene' || stage === 'nav';

  return (
    <div className="intro-container">
      {/* Stage 1: Completely Dark Screen */}
      <div
        className={`intro-layer dark-layer ${stage === 'dark' ? 'active' : 'fade-out'}`}
        style={{ backgroundImage: `url(${darkBg})` }}
      />

      {/* Stage 2: Cinematic Lights Turn ON */}
      <div
        className={`intro-layer lights-layer ${
          stage === 'lights' || stage === 'scene' ? 'active' : ''
        }`}
        style={{ backgroundImage: `url(${lightsBg})` }}
        onAnimationEnd={handleLightsComplete}
      >
        <div className="spotlight-beam"></div>
        <div className="cinematic-smoke"></div>
      </div>

      {/* Stage 3: Ashok Tours & Travels Office + 2 Parked Buses + Sequential Right-to-Left Bus Exits */}
      {isSceneVisible && (
        <div className={`agency-highway-stage ${stage === 'nav' ? 'crossfade-out' : 'active'}`}>
          {/* Sky & Horizon */}
          <div className="cinematic-sky-backdrop">
            <div className="golden-sun-glow"></div>
            <div className="distant-treeline"></div>
          </div>

          {/* Office Paved Forecourt & Wide Highway */}
          <div className="environment-ground">
            <div className="office-forecourt-paving">
              <div className="parking-bay-line bay-1"></div>
              <div className="parking-bay-line bay-2"></div>
            </div>

            <div className="highway-roadway">
              <div className="road-boundary-top"></div>
              <div className="road-lane-dashes lane-upper"></div>
              <div className="road-lane-dashes lane-lower"></div>
              <div className="road-boundary-bottom"></div>
            </div>
          </div>

          {/* LEFT SIDE: ASHOK TOURS & TRAVELS AGENCY OFFICE (+28% Larger) */}
          <AgencyOfficeBuilding />

          {/* PARKED FLEET NEAR OFFICE (+23% Larger, Stationary, Properly Spaced) */}
          <div className="parked-fleet-zone">
            <div className="parked-slot parked-purple-slot">
              <LuxuryCoachThreeQuarter variantKey="purple" isMoving={false} />
            </div>

            <div className="parked-slot parked-white-slot">
              <LuxuryCoachThreeQuarter variantKey="white" isMoving={false} />
            </div>
          </div>

          {/* SEQUENTIAL EXITING FLEET (+23% Larger, Right -> Completely Beyond Left Screen Edge) */}
          <div className="exiting-fleet-zone">
            {/* Bus 3: Glossy Black (Moves FIRST, exits 100% past left edge) */}
            {blackBusStatus !== 'exited' && (
              <div
                className={`exiting-slot exiting-black-slot status-${blackBusStatus}`}
                onAnimationEnd={handleBlackBusExitEnd}
              >
                <LuxuryCoachThreeQuarter
                  variantKey="black"
                  isMoving={blackBusStatus === 'moving'}
                />
              </div>
            )}

            {/* Bus 4: Metallic Blue (Starts ONLY after Black Bus exits completely, exits 100% past left edge) */}
            {blueBusStatus !== 'exited' && (
              <div
                className={`exiting-slot exiting-blue-slot status-${blueBusStatus}`}
                onAnimationEnd={handleBlueBusExitEnd}
              >
                <LuxuryCoachThreeQuarter
                  variantKey="blue"
                  isMoving={blueBusStatus === 'moving'}
                />
              </div>
            )}
          </div>
        </div>
      )}

      {/* Autoplay Fallback Audio Button */}
      {audioBlocked && stage === 'scene' && (blackBusStatus === 'moving' || blueBusStatus === 'moving') && (
        <button className="enable-audio-btn" onClick={handleEnableAudio}>
          🔊 Enable Engine Sound
        </button>
      )}

      {/* Stage 4: Golden Ashok Tours & Travels Navigation Screen (Appears Immediately After Both Buses Exit) */}
      <div
        className={`intro-layer golden-nav-layer ${stage === 'nav' ? 'active' : ''}`}
        style={{ backgroundImage: `url(${goldenNavBg})` }}
      >
        <div className="golden-ambient-glow"></div>

        {stage === 'nav' && (
          <nav className="top-nav-links-overlay" aria-label="Main Navigation">
            <Link
              to="/"
              className="nav-hotspot link-home"
              onClick={(e) => handleLinkClick(e, '/')}
              title="Go to Home Page"
            />
            <Link
              to="/about"
              className="nav-hotspot link-about"
              onClick={(e) => handleLinkClick(e, '/about')}
              title="Go to About Us Page"
            />
            <Link
              to="/attractions"
              className="nav-hotspot link-attractions"
              onClick={(e) => handleLinkClick(e, '/attractions')}
              title="Go to Tourist Attractions Page"
            />
            <Link
              to="/services"
              className="nav-hotspot link-services"
              onClick={(e) => handleLinkClick(e, '/services')}
              title="Go to Services Page"
            />
          </nav>
        )}
      </div>
    </div>
  );
};

export default IntroAnimation;