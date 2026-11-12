
const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{};:<>?";

let animationInterval: number | undefined;

function randomizeText(element: HTMLElement) {
  if (element.dataset.mcOriginal === undefined) {
    element.dataset.mcOriginal = element.textContent ?? "";
  }

  const original = element.dataset.mcOriginal;

  element.textContent = Array.from(original)
    .map((char) => {
      if (char === " ") return " ";
      return characters[Math.floor(Math.random() * characters.length)];
    })
    .join("");
}

function initializeObfuscated() {
  // Limpiar la animación anterior al cambiar de página.
  if (animationInterval !== undefined) {
    window.clearInterval(animationInterval);
    animationInterval = undefined;
  }

  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".mc-obfuscated"),
  );

  if (elements.length === 0) return;

  const update = () => {
    elements.forEach(randomizeText);
  };

  update();
  animationInterval = window.setInterval(update, 50);
}

// Quartz dispara este evento al entrar y al navegar a otra página.
document.addEventListener("nav", initializeObfuscated);
