import { useEffect, useState } from "react";

export const useScrollSpy = (SectionIds, offSet = 100) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offSet;

      // Find The current senction 

      for (let i = SectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(SectionIds[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(SectionIds[i]);
            break;
          }
        }
      }
    };

    handleScroll(); // Initial Check

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [SectionIds, offSet]);

  return activeSection;
};


// Smooth Scroll To Section

export const scrollToSection = (sectionId, offSet = 100) => {
  const section = document.getElementById(sectionId);
    if (section) {
        const sectionTop = section.offsetTop - offSet;
        window.scrollTo({
            top : sectionTop,
            behavior : 'smooth',
        });
    }
};
