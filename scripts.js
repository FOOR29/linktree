document.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('background-video');

  // Si el video está listo, dale play de una
  if (video.readyState >= 3) {
    video.play().catch(e => console.warn('No se pudo reproducir al inicio:', e));
  } else {
    video.addEventListener('canplay', () => {
      video.play().catch(e => console.warn('No se pudo reproducir al cargar:', e));
    });
  }

  // Si se pausa solo, lo reanuda
  video.addEventListener('pause', () => {
    if (!video.ended) {
      video.play().catch(e => console.warn('Error al reanudar el video:', e));
    }
  });

  // Intenta precargar video si no lo ha hecho
  if (video.preload !== 'auto') {
    video.preload = 'auto';
  }
});