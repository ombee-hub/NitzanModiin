/* ניצן מודיעין — תפריט, פוטר ורכיבים משותפים */
(function () {
  var active = document.body.getAttribute('data-page') || '';

  var NAV = [
    {
      id: 'about', label: 'אודות', href: 'about.html', sub: [
        { label: 'מי אנחנו', href: 'about.html', img: 'illus-about' },
        { label: 'מטרות', href: 'goals.html', img: 'illus-goals' },
        { label: 'צוות המערך', href: 'staff.html', img: 'illus-staff' }
      ]
    },
    {
      id: 'shikum', label: 'התהליך השיקומי', href: 'shikum.html', sub: [
        { label: 'התהליך השיקומי', href: 'shikum.html', img: 'illus-rehab' },
        { label: 'הדירות שלנו', href: 'apartments.html', img: 'illus-apartments' },
        { label: 'עבודה עם הורים', href: 'parents.html', img: 'illus-parents' },
        { label: 'סדנאות', href: 'workshops.html', img: 'illus-workshops' }
      ]
    },
    { id: 'work', label: 'תעסוקה', href: 'work.html' },
    {
      id: 'leisure', label: 'פנאי וחברה', href: 'clubs.html', sub: [
        { label: 'חוגים', href: 'clubs.html', img: 'illus-leisure' },
        { label: 'אירועים ומסיבות', href: 'events.html', img: 'illus-events' },
        { label: 'טיולים', href: 'trips.html', img: 'illus-trips' }
      ]
    },
    { id: 'successes', label: 'סיפורי הצלחה', href: 'successes.html' }
  ];

  function navHtml() {
    var h = '<div class="drawer-head"><img src="images/logo-nitzan.webp" alt="ניצן מודיעין"><button class="drawer-close" id="drawerClose" aria-label="סגירת תפריט">✕</button></div>';
    h += '<ul>';
    NAV.forEach(function (item) {
      var cls = item.sub ? ' class="has-sub"' : '';
      var a = item.id === active ? ' class="active"' : '';
      h += '<li' + cls + '><a href="' + item.href + '"' + a + '>' + item.label + '</a>';
      if (item.sub) {
        var cards = item.sub.some(function (s) { return s.img; });
        h += '<ul class="sub' + (cards ? ' sub-cards' + (item.sub.length === 3 ? ' sub-cards-3' : '') : '') + '">';
        item.sub.forEach(function (s) {
          var thumb = s.img ? '<span class="sub-thumb"><img src="images/' + s.img + '.webp" alt="" loading="lazy" decoding="async"></span>' : '';
          h += '<li><a href="' + s.href + '">' + thumb + '<span class="sub-label">' + s.label + '</span></a></li>';
        });
        h += '</ul>';
      }
      h += '</li>';
    });
    h += '<li class="nav-cta-li"><a class="nav-cta" href="contact.html">יצירת קשר <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="transform:rotate(-90deg);flex:none" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></a></li>';
    return h + '</ul>';
  }

  var headerHtml =
    '<header class="site" id="siteHeader"><div class="topstrip"></div><div class="container nav">' +
    '<a class="logo" href="index.html"><img src="images/logo-nitzan.webp" alt="ניצן מודיעין"></a>' +
    '<nav class="main" aria-label="ניווט ראשי">' + navHtml() + '</nav>' +
    '<a href="contact.html" class="btn btn-coral cta-btn">יצירת קשר <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="transform:rotate(-90deg);flex:none" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></a>' +
    '<button class="hamburger" aria-label="פתיחת תפריט" id="hamBtn">☰</button>' +
    '</div></header>' +
    '<div class="nav-backdrop" id="navBackdrop"></div>';

  var footerHtml =
    '<footer class="site"><div class="container">' +
    '<div class="f-grid">' +
    '<div><a class="f-logo" href="index.html" aria-label="חזרה לדף הבית"><img src="images/logo-nitzan.webp" alt="לוגו ניצן מודיעין"></a>' +
    '<p>מערך דיור וקהילה שיקומית עבור בוגרים צעירים עם ליקויי למידה, קשיי הסתגלות ותפקוד. בית אמיתי בלב מודיעין, מבית אגודת ניצן.</p>' +
    '<div class="social"><a href="https://www.facebook.com/profile.php?id=100077729597645" target="_blank" rel="noopener" aria-label="פייסבוק">f</a></div></div>' +
    '<div class="f-sitemap">' +
    '<h4 class="map-title">מפת האתר</h4>' +
    '<div class="f-links">' +
    '<div><h4>אודות</h4><ul>' +
    '<li><a href="about.html">מי אנחנו</a></li>' +
    '<li><a href="goals.html">מטרות המערך</a></li>' +
    '<li><a href="staff.html">צוות המערך</a></li>' +
    '<li><a href="successes.html">סיפורי הצלחה</a></li></ul></div>' +
    '<div><h4>החיים במערך</h4><ul>' +
    '<li><a href="shikum.html">התהליך השיקומי</a></li>' +
    '<li><a href="apartments.html">הדירות שלנו</a></li>' +
    '<li><a href="work.html">שילוב בעבודה</a></li>' +
    '<li><a href="workshops.html">סדנאות</a></li>' +
    '<li><a href="trips.html">טיולים</a></li></ul></div>' +
    '<div><h4>יצירת קשר</h4><ul>' +
    '<li>📞 <a href="tel:097601879">09-7601879</a></li>' +
    '<li>✉️ <a href="mailto:diur.modiin@nitzancenter.org">diur.modiin@nitzancenter.org</a></li>' +
    '<li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px;margin-inline-end:7px" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>רחוב יגאל ידין 43/7, מודיעין</li>' +
    '</ul></div>' +
    '</div></div>' +
    '</div>' +
    '<div class="f-bottom"><span>&copy; 2012-2026 כל הזכויות שמורות למערך דיור ניצן מודיעין</span>' +
    '<span class="f-legal"><a href="accessibility.html">הצהרת נגישות</a><span aria-hidden="true">|</span><a href="privacy.html">מדיניות פרטיות</a></span>' +
    '<a class="credit" href="https://ombee.co.il" target="_blank" rel="noopener">עיצוב ובנייה ע"י: <img src="images/ombee-logo.webp" alt="OMBee — Graphic Design And UI/UX"></a></div>' +
    '</div></footer>';

  var headerSlot = document.getElementById('site-header');
  var footerSlot = document.getElementById('site-footer');
  if (headerSlot) headerSlot.outerHTML = headerHtml;
  if (footerSlot) footerSlot.outerHTML = footerHtml;

  /* תפריט מובייל — מגירת צד */
  var ham = document.getElementById('hamBtn');
  var navBackdrop = document.getElementById('navBackdrop');
  var drawerClose = document.getElementById('drawerClose');
  function setMenu(open) {
    document.getElementById('siteHeader').classList.toggle('menu-open', open);
    document.body.classList.toggle('menu-open-body', open);
    if (ham) ham.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  if (ham) ham.addEventListener('click', function () {
    setMenu(!document.getElementById('siteHeader').classList.contains('menu-open'));
  });
  if (navBackdrop) navBackdrop.addEventListener('click', function () { setMenu(false); });
  if (drawerClose) drawerClose.addEventListener('click', function () { setMenu(false); });
  document.querySelectorAll('nav.main .has-sub > a').forEach(function (a) {
    a.addEventListener('click', function (e) {
      if (window.innerWidth <= 1060) {
        e.preventDefault();
        a.parentElement.classList.toggle('open');
      }
    });
  });

  /* אנימציית גילוי בגלילה */
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
  }

  /* קרוסלה (בדף הבית) */
  var slides = document.querySelectorAll('.carousel .slide');
  if (slides.length > 1) {
    var i = 0;
    setInterval(function () {
      slides[i].classList.remove('on');
      i = (i + 1) % slides.length;
      slides[i].classList.add('on');
    }, 4200);
  }


  /* ===== הגדלת תמונות בגלריות (לייטבוקס) ===== */
  (function () {
    var items = Array.prototype.slice.call(document.querySelectorAll('.g-item'));
    if (!items.length) return;
    var box = document.createElement('div');
    box.className = 'lb';
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-modal', 'true');
    box.setAttribute('aria-label', 'תצוגת תמונה מוגדלת');
    box.hidden = true;
    box.innerHTML = '<button class="lb-close" type="button" aria-label="סגירה">✕</button>' +
      '<button class="lb-nav lb-prev" type="button" aria-label="התמונה הקודמת">‹</button>' +
      '<figure class="lb-fig"><img alt=""><figcaption></figcaption></figure>' +
      '<button class="lb-nav lb-next" type="button" aria-label="התמונה הבאה">›</button>';
    document.body.appendChild(box);
    var img = box.querySelector('img'), cap = box.querySelector('figcaption');
    var group = [], idx = 0, lastFocus = null;
    function show(i) {
      idx = (i + group.length) % group.length;
      var it = group[idx], im = it.querySelector('img'), c = it.querySelector('.cap');
      img.src = im.currentSrc || im.src; img.alt = im.alt || '';
      cap.textContent = c ? c.textContent : (im.alt || '');
      box.classList.toggle('lb-single', group.length < 2);
    }
    function open(it) {
      var gal = it.closest('.gallery') || it.parentElement;
      group = Array.prototype.slice.call(gal.querySelectorAll('.g-item'));
      lastFocus = document.activeElement;
      show(group.indexOf(it));
      box.hidden = false; document.body.classList.add('lb-open');
      box.querySelector('.lb-close').focus();
    }
    function close() { box.hidden = true; document.body.classList.remove('lb-open'); if (lastFocus) lastFocus.focus(); }
    items.forEach(function (it) {
      it.setAttribute('tabindex', '0'); it.setAttribute('role', 'button');
      var im = it.querySelector('img');
      it.setAttribute('aria-label', 'הגדלת התמונה' + (im && im.alt ? ': ' + im.alt : ''));
      it.addEventListener('click', function () { open(it); });
      it.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(it); } });
    });
    box.querySelector('.lb-close').addEventListener('click', close);
    box.querySelector('.lb-prev').addEventListener('click', function () { show(idx - 1); });
    box.querySelector('.lb-next').addEventListener('click', function () { show(idx + 1); });
    box.addEventListener('click', function (e) { if (e.target === box) close(); });
    document.addEventListener('keydown', function (e) {
      if (box.hidden) return;
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowRight') show(idx - 1);
      else if (e.key === 'ArrowLeft') show(idx + 1);
    });
  })();
})();
