(function () {
  const canvas = document.getElementById('mo7_bg_canvas_nest');
  const ctx = canvas.getContext('2d');

  const CONFIG = {
    particleCount: 80,
    minSize: 2,
    maxSize: 4,
    colors: ['#FFC1C1', '#ADD8E6', '#90EE90', '#F0E68C'],
    maxSpeed: 0.5,
    mouseDistance: 100,
    connectionLineWidth: 0.2,
    fadeSpeed: 0.01,
  };

  const particles = [];
  const mouse = { x: null, y: null };

  // 工具函数
  const random = (min, max) => Math.random() * (max - min) + min;
  const randomChoice = (arr) => arr[Math.floor(Math.random() * arr.length)];

  // 粒子类
  class Particle {
    constructor() {
      this.x = random(0, canvas.width);
      this.y = random(0, canvas.height);
      this.size = random(CONFIG.minSize, CONFIG.maxSize);
      this.color = randomChoice(CONFIG.colors);
      this.vx = random(-CONFIG.maxSpeed, CONFIG.maxSpeed);
      this.vy = random(-CONFIG.maxSpeed, CONFIG.maxSpeed);
      this.opacity = random(0.5, 1);
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.globalAlpha = this.opacity;
      ctx.fill();
      ctx.globalAlpha = 1;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      // 边界检测
      if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
      if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

      // 鼠标交互
      this.mouseInteraction();
    }

    mouseInteraction() {
      if (!mouse.x || !mouse.y) return;

      const dx = this.x - mouse.x;
      const dy = this.y - mouse.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < CONFIG.mouseDistance) {
        // 连线效果
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.strokeStyle = this.color;
        ctx.lineWidth = CONFIG.connectionLineWidth;
        ctx.stroke();
      }
    }
  }

  function initParticles() {
    particles.length = 0;
    for (let i = 0; i < CONFIG.particleCount; i++) {
      particles.push(new Particle());
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((particle) => {
      particle.update();
      particle.draw();
    });
    requestAnimationFrame(animate);
  }

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles();
  }

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('resize', resizeCanvas);

  resizeCanvas();
  initParticles();
  animate();
})();