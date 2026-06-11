/* ניצן מודיעין — תפריט, פוטר ורכיבים משותפים */
(function () {
  var active = document.body.getAttribute('data-page') || '';

  var NAV = [
    {
      id: 'about', label: 'אודות', href: 'about.html', sub: [
        { label: 'מי אנחנו', href: 'about.html' },
        { label: 'מטרות', href: 'about.html#goals' },
        { label: 'צוות המערך', href: 'staff.html' }
      ]
    },
    {
      id: 'shikum', label: 'התהליך השיקומי', href: 'shikum.html', sub: [
        { label: 'התהליך השיקומי', href: 'shikum.html' },
        { label: 'הדירות שלנו', href: 'apartments.html' },
        { label: 'עבודה עם הורים', href: 'parents.html' },
        { label: 'סדנאות', href: 'workshops.html' }
      ]
    },
    { id: 'work', label: 'תעסוקה', href: 'work.html' },
    {
      id: 'leisure', label: 'פנאי וחברה', href: 'clubs.html', sub: [
        { label: 'חוגים', href: 'clubs.html' },
        { label: 'אירועים ומסיבות', href: 'events.html' },
        { label: 'טיולים', href: 'trips.html' }
      ]
    },
    { id: 'successes', label: 'סיפורי הצלחה', href: 'successes.html' }
  ];

  function navHtml() {
    var h = '<ul>';
    NAV.forEach(function (item) {
      var cls = item.sub ? ' class="has-sub"' : '';
      var a = item.id === active ? ' class="active"' : '';
      h += '<li' + cls + '><a href="' + item.href + '"' + a + '>' + item.label + '</a>';
      if (item.sub) {
        h += '<ul class="sub">';
        item.sub.forEach(function (s) { h += '<li><a href="' + s.href + '">' + s.label + '</a></li>'; });
        h += '</ul>';
      }
      h += '</li>';
    });
    return h + '</ul>';
  }

  var headerHtml =
    '<header class="site" id="siteHeader"><div class="topstrip"></div><div class="container nav">' +
    '<a class="logo" href="index.html"><img src="images/logo-nitzan.png" alt="ניצן מודיעין"></a>' +
    '<nav class="main" aria-label="ניווט ראשי">' + navHtml() + '</nav>' +
    '<a href="contact.html" class="btn btn-coral cta-btn">יצירת קשר <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="transform:rotate(-135deg);flex:none" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></a>' +
    '<button class="hamburger" aria-label="פתיחת תפריט" id="hamBtn">☰</button>' +
    '</div></header>';

  var footerHtml =
    '<footer class="site"><div class="container">' +
    '<div class="f-grid">' +
    '<div><div class="f-logo"><img src="images/logo-nitzan.png" alt="לוגו ניצן מודיעין"></div>' +
    '<p>מערך דיור וקהילה שיקומית עבור בוגרים צעירים עם ליקויי למידה, קשיי הסתגלות ותפקוד. בית אמיתי בלב מודיעין, מבית אגודת ניצן.</p>' +
    '<div class="social"><a href="https://www.facebook.com/" target="_blank" rel="noopener" aria-label="פייסבוק">f</a></div></div>' +
    '<div class="f-sitemap">' +
    '<h4 class="map-title">מפת האתר</h4>' +
    '<div class="f-links">' +
    '<div><h4>אודות</h4><ul>' +
    '<li><a href="about.html">מי אנחנו</a></li>' +
    '<li><a href="about.html#goals">מטרות המערך</a></li>' +
    '<li><a href="staff.html">צוות המערך</a></li>' +
    '<li><a href="successes.html">סיפורי הצלחה</a></li></ul></div>' +
    '<div><h4>החיים במערך</h4><ul>' +
    '<li><a href="shikum.html">התהליך השיקומי</a></li>' +
    '<li><a href="apartments.html">הדירות שלנו</a></li>' +
    '<li><a href="work.html">שילוב בעבודה</a></li>' +
    '<li><a href="workshops.html">סדנאות</a></li>' +
    '<li><a href="trips.html">טיולים</a></li></ul></div>' +
    '<div><h4>יצירת קשר</h4><ul>' +
    '<li>📞 052-4538070</li>' +
    '<li>✉️ diur.modiin@nitzancenter.org</li>' +
    '<li>📍 רחוב יגאל ידין 43/7, מודיעין</li></ul></div>' +
    '</div></div>' +
    '</div>' +
    '<div class="f-bottom"><span>&copy; 2012-2026 כל הזכויות שמורות למערך דיור ניצן מודיעין</span>' +
    '<a class="credit" href="https://ombee.co.il" target="_blank" rel="noopener">עיצוב ובנייה ע"י: <img src="images/ombee-logo.png" alt="OMBee — Graphic Design And UI/UX"></a></div>' +
    '</div></footer>' +
    '<button class="a11y" aria-label="תפריט נגישות" title="נגישות">♿</button>';

  var headerSlot = document.getElementById('site-header');
  var footerSlot = document.getElementById('site-footer');
  if (headerSlot) headerSlot.outerHTML = headerHtml;
  if (footerSlot) footerSlot.outerHTML = footerHtml;

  /* תפריט מובייל */
  var ham = document.getElementById('hamBtn');
  if (ham) ham.addEventListener('click', function () {
    document.getElementById('siteHeader').classList.toggle('menu-open');
  });
  document.querySelectorAll('nav.main .has-sub > a').forEach(function (a) {
    a.addEventListener('click', function (e) {
      if (window.innerWidth <= 1060) {
        var li = a.parentElement;
        if (!li.classList.contains('open')) { e.preventDefault(); li.classList.add('open'); }
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
})();
