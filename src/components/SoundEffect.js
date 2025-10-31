// src/components/SoundEffect.js
export function playClickSound() {
  const audio = new Audio("/clickSound.mp3");
  audio.volume = 0.3;
  audio.play().catch(() => {}); // evita erro se autoplay bloqueado
}
