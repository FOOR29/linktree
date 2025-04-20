const container = document.getElementById('playlistContainer');
const playlists = container.querySelectorAll('.playlist');

window.addEventListener('load', () => {
  playlists[1]?.scrollIntoView({ behavior: 'instant', inline: 'center' });
  playlists.forEach(pl => pl.classList.remove('active'));
  playlists[1]?.classList.add('active');

  const backgroundVideo = document.querySelector('.background-video');
  if (backgroundVideo) {
    const playVideo = () => backgroundVideo.play().catch(() => {});
    playVideo();
    backgroundVideo.addEventListener('pause', playVideo);
    setInterval(() => backgroundVideo.paused && playVideo(), 3000);
  }
});

container.addEventListener('scroll', () => {
  clearTimeout(container.scrollTimeout);
  container.scrollTimeout = setTimeout(() => {
    const center = container.scrollLeft + container.offsetWidth / 2;
    let closest = null;
    let closestDist = Infinity;

    playlists.forEach(pl => {
      const boxCenter = pl.offsetLeft + pl.offsetWidth / 2;
      const dist = Math.abs(boxCenter - center);
      if (dist < closestDist) {
        closest = pl;
        closestDist = dist;
      }
    });

    if (closest) {
      closest.scrollIntoView({ behavior: 'smooth', inline: 'center' });
      playlists.forEach(pl => pl.classList.remove('active'));
      closest.classList.add('active');
    }
  }, 100);
});