import { useRef, useState } from "react";
import { useSpring, animated, config } from "@react-spring/web";

import "./style.css";

const size = 0.75;

const calc = (x, y, rect) => [
  -(y - rect.top - rect.height / 2) / 5,
  (x - rect.left - rect.width / 2) / 5,
  size
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export default function ReactiveLogo({
  imageSrc,
}) {
  const ref = useRef(null);
  const [xys, set] = useState([0, 0, size]);
  const props = useSpring({ xys, config: config.wobbly});

  return (
    <div className="ccard-main" ref={ref}>
      <animated.div
        className="ccard"
        style={{ transform: props.xys.to(trans) }}
        onMouseLeave={() => set([0, 0, size])}
        onMouseMove={(e) => {
          const rect = ref.current.getBoundingClientRect();
          set(calc(e.clientX, e.clientY, rect));
        }}
      >
          <img src={imageSrc} className='ccard-logo' alt="logo" />
      </animated.div>
    </div>
  );
}
