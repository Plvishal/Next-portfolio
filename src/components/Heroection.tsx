'use client';
import React from 'react';
import Typed from 'typed.js';
import { SparklesCore } from '../components/ui/sparkles';
function Heroection() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'Frontend Developer',
        'Backend Developer',
        'JavaScript Developer',
        'ReactJs Developer',
        'Node.js Developer',
        'Full Stack Developer',
      ],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <div>
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#fff"
        />
      </div>
      <h1 className="text-center text-white relative z-20">
        <div className="flex flex-col">
          <div>
            <p className="text-xl ">Welcome</p>
            <h1 className="text-5xl lg:text-7xl ">I am Vishal </h1>
            <p className="text-xl ">and i am</p>
          </div>
          <div className="text-4xl lg:text-7xl">
            <span ref={el} />
          </div>
        </div>
      </h1>
    </div>
  );
}

export default Heroection;
