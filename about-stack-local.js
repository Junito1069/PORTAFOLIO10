(() => {
  const aboutContent = {
    firstParagraph: "Soy desarrollador web apasionado por crear experiencias digitales modernas, funcionales y centradas en el usuario, mientras comienzo a desarrollar mi camino profesional en el área de ciberseguridad.",
    secondParagraph: "Combino diseño y desarrollo web con mi creciente interés por la seguridad informática, explorando tecnologías, redes, sistemas Linux, virtualización y herramientas utilizadas en ciberseguridad. Mi objetivo es seguir aprendiendo y construir soluciones digitales funcionales, seguras y eficientes."
  };

  const technologies = [
    {
      key: "virtualbox",
      name: "VirtualBox",
      description: "Plataforma de virtualización que utilizo para crear y administrar máquinas virtuales, especialmente para practicar con diferentes sistemas operativos y entornos de laboratorio.",
      image: "virtualbox2.png"
    },
    {
      key: "react",
      name: "React",
      description: "Biblioteca de JavaScript que utilizo para construir interfaces web modernas, dinámicas y reutilizables mediante componentes.",
      image: "react.png"
    },
    {
      key: "vite",
      name: "Vite",
      description: "Herramienta de desarrollo frontend que utilizo para crear proyectos web rápidos, optimizar el desarrollo y trabajar con aplicaciones modernas.",
      image: "vite.png"
    },
    {
      key: "kali-linux",
      name: "Kali Linux",
      description: "Distribución de Linux orientada a ciberseguridad que utilizo para aprender sobre redes, análisis de seguridad, reconocimiento y herramientas de seguridad informática.",
      image: "Kalilinux.png"
    },
    {
      key: "gns3",
      name: "GNS3",
      description: "Plataforma de simulación y emulación de redes que utilizo para practicar configuraciones de red y construir laboratorios virtuales.",
      image: "Gns3.png"
    },
    {
      key: "cisco-packet-tracer",
      name: "Cisco Packet Tracer",
      description: "Herramienta de simulación de redes que utilizo para practicar configuraciones, topologías, dispositivos Cisco y fundamentos de networking.",
      image: "cisco.png"
    },
    {
      key: "linux",
      name: "Linux",
      description: "Sistema operativo y entorno que utilizo para aprender administración de sistemas, redes, terminal y herramientas relacionadas con ciberseguridad.",
      image: "linux.png"
    },
    {
      key: "git-github",
      name: "Git / GitHub",
      description: "Utilizo Git y GitHub para controlar versiones, organizar proyectos, guardar mi código y gestionar el desarrollo de mis aplicaciones.",
      image: "github.png"
    }
  ];

  const scriptUrl = document.currentScript?.src || new URL("./about-stack-local.js", document.baseURI).href;

  const updateAbout = () => {
    const about = document.querySelector("#about");
    if (!about) return;

    const name = [...about.querySelectorAll("h1, h2, h3, h4, p")].find(
      element => element.textContent.trim().toLowerCase() === "junior jose"
    );
    if (name && name.textContent !== "Junior José") name.textContent = "Junior José";

    const paragraphs = [...about.querySelectorAll("p")];
    const firstParagraph = paragraphs.find(element => element.textContent.trim().startsWith("Soy desarrollador de sitios web"));
    const secondParagraph = paragraphs.find(element => element.textContent.trim().startsWith("Combino diseño y desarrollo para transformar ideas"));

    if (firstParagraph && firstParagraph.textContent !== aboutContent.firstParagraph) {
      firstParagraph.textContent = aboutContent.firstParagraph;
    }
    if (secondParagraph && secondParagraph.textContent !== aboutContent.secondParagraph) {
      secondParagraph.textContent = aboutContent.secondParagraph;
    }
  };

  const updateTechnologyCards = () => {
    const stack = document.querySelector("#tech-stack");
    const templateCard = stack?.querySelector('[data-framer-name="Tech Stack Card"]');
    const cardList = templateCard?.parentElement?.parentElement;
    if (!templateCard || !cardList) return;

    const templateContainer = templateCard.parentElement;
    if (!templateContainer) return;

    for (const technology of technologies) {
      if (stack.querySelector(`[data-local-tech-key="${technology.key}"]`)) continue;

      const container = templateContainer.cloneNode(true);
      const card = container.querySelector('[data-framer-name="Tech Stack Card"]');
      const image = card?.querySelector("img");
      const paragraphs = card?.querySelectorAll("p");
      if (!card || !image || !paragraphs || paragraphs.length < 2) continue;

      card.setAttribute("data-local-tech-key", technology.key);
      image.src = new URL(technology.image, scriptUrl).href;
      image.alt = `${technology.name} logo`;
      image.removeAttribute("srcset");
      paragraphs[0].textContent = technology.name;
      paragraphs[1].textContent = technology.description;
      cardList.append(container);
    }
  };

  const syncLocalContent = () => {
    updateAbout();
    updateTechnologyCards();
  };

  const observer = new MutationObserver(syncLocalContent);
  observer.observe(document.documentElement, { childList: true, characterData: true, subtree: true });
  document.addEventListener("framer:pageview", syncLocalContent);
  window.addEventListener("popstate", syncLocalContent);
  syncLocalContent();
})();