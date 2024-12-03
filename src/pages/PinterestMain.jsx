import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Top from "../components/Top";
import Save from "../components/Save";
import Search from "../components/Search";
import NavMain from "../components/NavMain";
import Shop from "../components/Shop";
import Holloween from "../components/Holloween";

const PinterestMain = () => {
  const [activeSection, setActiveSection] = useState("top");
  const topRef = useRef(null);
  const searchRef = useRef(null);
  const saveRef = useRef(null);
  const shopRef = useRef(null);
  const holloweenRef = useRef(null);
  const navigate = useNavigate();

  const sections = [
    { id: "top", ref: topRef, component: <Top /> },
    { id: "search", ref: searchRef, component: <Search /> },
    { id: "save", ref: saveRef, component: <Save /> },
    { id: "shop", ref: shopRef, component: <Shop /> },
    { id: "holloween", ref: holloweenRef, component: <Holloween /> },
  ];

  useEffect(() => {
    const debounce = (func, delay) => {
      let timeoutId;
      return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          func(...args);
        }, delay);
      };
    };

    const updateSection = debounce((sectionId) => {
      setActiveSection(sectionId);
      navigate(`/pinterestmain#${sectionId}`, { replace: true });
    }, 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            updateSection(sectionId);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -40% 0px",
      }
    );

    sections.forEach(({ ref }) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      sections.forEach(({ ref }) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [navigate]);

  return (
    <div>
      <NavMain />

      <div className="snap-container">
        {sections.map(({ id, ref, component }) => (
          <div
            key={id}
            id={id}
            ref={ref}
            className={`snap-section ${activeSection === id ? "active" : ""}`}
            style={{
              transition: "opacity 0.3s ease",
              opacity: activeSection === id && 1,
            }}
          >
            {component}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PinterestMain;
