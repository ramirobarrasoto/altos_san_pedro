class RoomShowcase {
  constructor() {
    this.currentRoom = 'zimmer';
    this.autoPlayInterval = null;
    this.autoPlayDelay = 5000;
    this.init();
  }

  init() {
    this.bindEvents();
    this.startAutoPlay();
  }

  bindEvents() {
    // Tabs
    document.querySelectorAll('.tab-button').forEach(button => {
      button.addEventListener('click', () => {
        const room = button.dataset.room;
        this.switchRoom(room);
        this.restartAutoPlay();
      });
    });

    // Dots
    document.querySelectorAll('.dot').forEach(dot => {
      dot.addEventListener('click', () => {
        const room = dot.dataset.room;
        this.switchRoom(room);
        this.restartAutoPlay();
      });
    });

    // Pausar autoplay en hover
    const showcase = document.querySelector('.room-showcase');
    showcase.addEventListener('mouseenter', () => this.stopAutoPlay());
    showcase.addEventListener('mouseleave', () => this.startAutoPlay());
  }

  switchRoom(room) {
    if (room === this.currentRoom) return;

    // Cambiar imagen
    document.querySelectorAll('.room-image').forEach(img => {
      img.style.display = img.dataset.room === room ? 'block' : 'none';
      img.classList.toggle('active', img.dataset.room === room);
    });

    // Cambiar contenido
    document.querySelectorAll('.room-content').forEach(content => {
      content.classList.toggle('active', content.dataset.room === room);
    });

    // Tabs activas
    document.querySelectorAll('.tab-button').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.room === room);
    });

    // Dots activos
    document.querySelectorAll('.dot').forEach(dot => {
      dot.classList.toggle('active', dot.dataset.room === room);
    });

    this.currentRoom = room;
  }

  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      const rooms = ['zimmer', 'suiten', 'alster', 'fontenay'];
      const currentIndex = rooms.indexOf(this.currentRoom);
      const nextIndex = (currentIndex + 1) % rooms.length;
      this.switchRoom(rooms[nextIndex]);
    }, this.autoPlayDelay);
  }

  stopAutoPlay() {
    if (this.autoPlayInterval) clearInterval(this.autoPlayInterval);
    this.autoPlayInterval = null;
  }

  restartAutoPlay() {
    this.stopAutoPlay();
    this.startAutoPlay();
  }
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
  new RoomShowcase();
});
