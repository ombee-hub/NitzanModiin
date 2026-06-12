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
    var h = '<div class="drawer-head"><img src="images/logo-nitzan.png" alt="ניצן מודיעין"><button class="drawer-close" id="drawerClose" aria-label="סגירת תפריט">✕</button></div>';
    h += '<ul>';
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
    h += '<li class="nav-cta-li"><a class="nav-cta" href="contact.html">יצירת קשר <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="transform:rotate(-135deg);flex:none" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></a></li>';
    return h + '</ul>';
  }

  var headerHtml =
    '<header class="site" id="siteHeader"><div class="topstrip"></div><div class="container nav">' +
    '<a class="logo" href="index.html"><img src="images/logo-nitzan.png" alt="ניצן מודיעין"></a>' +
    '<nav class="main" aria-label="ניווט ראשי">' + navHtml() + '</nav>' +
    '<a href="contact.html" class="btn btn-coral cta-btn">יצירת קשר <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="transform:rotate(-135deg);flex:none" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></a>' +
    '<button class="hamburger" aria-label="פתיחת תפריט" id="hamBtn">☰</button>' +
    '</div></header>' +
    '<div class="nav-backdrop" id="navBackdrop"></div>';

  var footerHtml =
    '<footer class="site"><div class="container">' +
    '<div class="f-grid">' +
    '<div><a class="f-logo" href="index.html" aria-label="חזרה לדף הבית"><img src="images/logo-nitzan.png" alt="לוגו ניצן מודיעין"></a>' +
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
    '<li>📍 רחוב יגאל ידין 43/7, מודיעין</li>' +
    '<li><a href="accessibility.html">הצהרת נגישות</a></li>' +
    '<li><a href="privacy.html">מדיניות פרטיות</a></li></ul></div>' +
    '</div></div>' +
    '</div>' +
    '<div class="f-bottom"><span>&copy; 2012-2026 כל הזכויות שמורות למערך דיור ניצן מודיעין</span>' +
    '<a class="credit" href="https://ombee.co.il" target="_blank" rel="noopener">עיצוב ובנייה ע"י: <img src="images/ombee-logo.png" alt="OMBee — Graphic Design And UI/UX"></a></div>' +
    '</div></footer>' +
    '<button class="a11y" id="a11yBtn" aria-label="פתיחת תפריט נגישות" aria-expanded="false" title="נגישות">' +
    '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="12" cy="3.6" r="2.1"/><path d="M21 7.2h-6.3V22h-2.1v-6.8h-1.2V22H9.3V7.2H3V5.4h18v1.8z"/></svg>' +
    '</button>' +
    a11yPanelHtml() +
    '<div class="cookie-pop" id="cookiePop" hidden role="dialog" aria-label="הודעת שימוש בעוגיות">' +
    '<span class="cookie-ic" aria-hidden="true">🍪</span>' +
    '<p>אתר זה משתמש בעוגיות (Cookies) כדי לשפר את חוויית הגלישה שלכם. המשך הגלישה באתר מהווה הסכמה לשימוש בעוגיות.</p>' +
    '<div class="cookie-actions"><button class="btn btn-teal" id="cookieOk">אישור והמשך</button>' +
    '<a href="privacy.html" class="cookie-link">למדיניות הפרטיות</a></div>' +
    '</div>';

  function a11yTile(f, icon, label) {
    return '<button class="a11y-tile" data-f="' + f + '" aria-pressed="false"><span class="tic">' + icon + '</span><span>' + label + '</span></button>';
  }

  function a11yPanelHtml() {
    return '<div class="a11y-panel" id="a11yPanel" hidden role="dialog" aria-label="תפריט נגישות">' +
      '<div class="a11y-head"><b>תפריט נגישות</b><button class="a11y-close" id="a11yClose" aria-label="סגירת התפריט">✕</button></div>' +
      '<div class="a11y-grid">' +
      a11yTile('contrast', '◐', 'ניגודיות +') +
      a11yTile('links', '🔗', 'הדגשת קישורים') +
      a11yTile('bigtext', 'TT', 'טקסט גדול') +
      a11yTile('spacing', '⟷', 'ריווח טקסט') +
      a11yTile('noanim', '✋', 'ביטול הנפשות') +
      a11yTile('noimg', '🖼', 'הסתרת תמונות') +
      a11yTile('dyslexia', 'Df', 'גופן קריא') +
      a11yTile('cursor', '↖', 'סמן גדול') +
      a11yTile('lineheight', '↕', 'גובה שורה') +
      a11yTile('desc', 'i', 'תיאורי תמונות') +
      a11yTile('gray', '◑', 'גווני אפור') +
      a11yTile('justify', '☰', 'יישור טקסט') +
      '</div>' +
      '<button class="a11y-reset" id="a11yReset">⟳ איפוס כל הגדרות הנגישות</button>' +
      '<div class="a11y-foot"><a href="accessibility.html">הצהרת נגישות</a> · <a href="privacy.html">מדיניות פרטיות</a></div>' +
      '</div>';
  }

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

  /* ===== תפריט נגישות ===== */
  var A11Y_KEY = 'nitzan-a11y';
  var a11yBtn = document.getElementById('a11yBtn');
  var a11yPanel = document.getElementById('a11yPanel');

  function a11yState() {
    try { return JSON.parse(localStorage.getItem(A11Y_KEY)) || {}; } catch (e) { return {}; }
  }
  function a11ySave(s) { try { localStorage.setItem(A11Y_KEY, JSON.stringify(s)); } catch (e) {} }

  function applyDesc(on) {
    document.querySelectorAll('.a11y-alt-label').forEach(function (el) { el.remove(); });
    if (!on) return;
    document.querySelectorAll('img[alt]:not(.a11y-skip)').forEach(function (im) {
      if (!im.alt.trim() || im.closest('.a11y-panel')) return;
      var lb = document.createElement('span');
      lb.className = 'a11y-alt-label';
      lb.textContent = im.alt;
      im.insertAdjacentElement('afterend', lb);
    });
  }

  function a11yApply() {
    var s = a11yState();
    document.querySelectorAll('.a11y-tile').forEach(function (t) {
      var f = t.getAttribute('data-f');
      var on = !!s[f];
      document.documentElement.classList.toggle('a11y-' + f, on);
      t.classList.toggle('on', on);
      t.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
    applyDesc(!!s.desc);
  }

  if (a11yBtn && a11yPanel) {
    a11yBtn.addEventListener('click', function () {
      var open = a11yPanel.hidden;
      a11yPanel.hidden = !open;
      a11yBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.getElementById('a11yClose').addEventListener('click', function () {
      a11yPanel.hidden = true;
      a11yBtn.setAttribute('aria-expanded', 'false');
    });
    a11yPanel.querySelectorAll('.a11y-tile').forEach(function (t) {
      t.addEventListener('click', function () {
        var s = a11yState();
        var f = t.getAttribute('data-f');
        s[f] = !s[f];
        a11ySave(s);
        a11yApply();
      });
    });
    document.getElementById('a11yReset').addEventListener('click', function () {
      a11ySave({});
      a11yApply();
    });
    a11yApply();
  }

  /* ===== פופאפ עוגיות ===== */
  var cookiePop = document.getElementById('cookiePop');
  if (cookiePop) {
    var consented = false;
    try { consented = localStorage.getItem('nitzan-cookies') === 'yes'; } catch (e) {}
    if (!consented) {
      setTimeout(function () { cookiePop.hidden = false; }, 800);
      document.getElementById('cookieOk').addEventListener('click', function () {
        try { localStorage.setItem('nitzan-cookies', 'yes'); } catch (e) {}
        cookiePop.hidden = true;
      });
    }
  }
})();
