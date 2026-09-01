(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- mobile nav toggle ---------- */
  var navToggle = document.getElementById('navToggle');
  var siteNav = document.getElementById('siteNav');

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', function () {
      var isOpen = siteNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    siteNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        siteNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- active section highlight ---------- */
  var navLinks = document.querySelectorAll('[data-nav]');
  var sections = Array.prototype.slice.call(document.querySelectorAll('main section[id]'));

  if (navLinks.length && sections.length && 'IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var id = entry.target.getAttribute('id');
        navLinks.forEach(function (link) {
          link.classList.toggle('is-active', link.getAttribute('href') === '#' + id);
        });
      });
    }, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });

    sections.forEach(function (section) { spy.observe(section); });
  }

  /* ---------- reveal on scroll ---------- */
  var revealTargets = document.querySelectorAll('.section');
  revealTargets.forEach(function (el) { el.classList.add('reveal'); });

  if ('IntersectionObserver' in window && !reduceMotion) {
    var revealObserver = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealTargets.forEach(function (el) { revealObserver.observe(el); });
  } else {
    revealTargets.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------- ambient rain ---------- */
  var canvas = document.getElementById('rain');
  if (!canvas || reduceMotion) return;

  var ctx = canvas.getContext('2d');
  var drops = [];
  var DROP_COUNT = window.innerWidth < 640 ? 55 : 110;
  var width, height, dpr;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function makeDrop() {
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      len: 10 + Math.random() * 18,
      speed: 4 + Math.random() * 5,
      drift: 0.6 + Math.random() * 0.4,
      opacity: 0.06 + Math.random() * 0.14
    };
  }

  function init() {
    resize();
    drops = [];
    for (var i = 0; i < DROP_COUNT; i++) drops.push(makeDrop());
  }

  function tick() {
    ctx.clearRect(0, 0, width, height);
    ctx.strokeStyle = 'rgba(200, 210, 224, 1)';
    ctx.lineCap = 'round';

    for (var i = 0; i < drops.length; i++) {
      var d = drops[i];
      ctx.globalAlpha = d.opacity;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(d.x, d.y);
      ctx.lineTo(d.x - d.drift * (d.len * 0.35), d.y + d.len);
      ctx.stroke();

      d.x -= d.drift;
      d.y += d.speed;

      if (d.y > height + 20 || d.x < -20) {
        d.x = Math.random() * width;
        d.y = -20;
      }
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(tick);
  }

  var resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(init, 200);
  });

  init();
  requestAnimationFrame(tick);
})();
