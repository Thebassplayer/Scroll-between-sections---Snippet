import * as React from 'react';
import { useRef } from 'react';
import './style.css';

export default function App() {
  const RaulSectionRef = useRef(null);
  const RomiSectionRef = useRef(null);
  const RoySectionRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <div id="nav">
        <h1>Scroll between Sections</h1>
        <nav>
          <button onClick={() => scrollToSection(RaulSectionRef)}>Raul</button>
          <button onClick={() => scrollToSection(RomiSectionRef)}>Romi</button>
          <button onClick={() => scrollToSection(RoySectionRef)}>Roy</button>
        </nav>
      </div>
      <section id="Raul" ref={RaulSectionRef}>
        Section Raul
      </section>
      <section id="Romi" ref={RomiSectionRef}>
        Section Romi
      </section>
      <section id="Roy" ref={RoySectionRef}>
        Section Roy
      </section>
    </div>
  );
}
