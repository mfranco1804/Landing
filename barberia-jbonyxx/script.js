/* ==========================================================================
   JBONYXX MASTER BARBERSHOP — CLIENT-SIDE ENGINE (INTERACTIVITY & CONVERSION)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initMobileDrawer();
  initTimeStatus();
  initBookingWizard();
  initGalleryFilter();
  initFAQAccordion();
  initScrollAnimations();
});

/* --- 1. NAVBAR SCROLL EFFECT --- */
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });
}

/* --- 2. MOBILE DRAWER NAVIGATION --- */
function initMobileDrawer() {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerLinks = document.querySelectorAll('.mobile-nav-link, .mobile-drawer .btn-primary');

  if (!hamburgerBtn || !mobileDrawer) return;

  hamburgerBtn.addEventListener('click', () => {
    const isActive = mobileDrawer.classList.toggle('active');
    document.body.style.overflow = isActive ? 'hidden' : '';
    hamburgerBtn.setAttribute('aria-expanded', isActive);
  });

  drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileDrawer.classList.remove('active');
      document.body.style.overflow = '';
      hamburgerBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

/* --- 3. DYNAMIC STORE TIME STATUS (CARACAS TIME) --- */
function initTimeStatus() {
  const statusText = document.getElementById('storeStatusText');
  if (!statusText) return;

  const now = new Date();
  // Caracas UTC-4 offset
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const caracasTime = new Date(utc + (3600000 * -4));
  const hours = caracasTime.getHours();
  const day = caracasTime.getDay(); // 0 = Sunday

  // Open Mon-Sat 9:00 AM - 7:30 PM, Sun 10:00 AM - 4:00 PM
  const isOpen = (day !== 0 && hours >= 9 && hours < 19) || (day === 0 && hours >= 10 && hours < 16);

  if (isOpen) {
    statusText.textContent = 'Abierto Ahora (Citas WhatsApp)';
  } else {
    statusText.textContent = 'Cerrado • Abre 9:00 AM';
    const dot = document.querySelector('.status-dot');
    if (dot) dot.style.background = '#F59E0B';
  }
}

/* --- 4. INTERACTIVE WHATSAPP BOOKING WIZARD --- */
function initBookingWizard() {
  const serviceCards = document.querySelectorAll('.wizard-service-option');
  const barberCards = document.querySelectorAll('.wizard-barber-option');
  const shiftCards = document.querySelectorAll('.wizard-shift-option');

  const summaryService = document.getElementById('summaryService');
  const summaryBarber = document.getElementById('summaryBarber');
  const summaryShift = document.getElementById('summaryShift');
  const whatsappBookingBtn = document.getElementById('whatsappBookingBtn');

  let selectedService = 'Skin Fade Signature ($15)';
  let selectedBarber = 'Jose Gregorio (@jbonyxx)';
  let selectedShift = 'Turno Tarde (2:00 PM - 7:00 PM)';

  // Phone number (e.g. local Venezuelan format: +58 412...)
  const targetPhone = '584120000000'; // Direct Master Barber line

  function updateBookingState() {
    if (summaryService) summaryService.textContent = selectedService;
    if (summaryBarber) summaryBarber.textContent = selectedBarber;
    if (summaryShift) summaryShift.textContent = selectedShift;

    const message = `¡Hola Jose y equipo de Master Barbers! 💈✨\n\nQuisiera agendar una cita en la barbería con los siguientes datos:\n\n• Servicio: ${selectedService}\n• Barbero preferido: ${selectedBarber}\n• Horario preferido: ${selectedShift}\n\n¿Tienen disponibilidad? ¡Muchas gracias!`;

    if (whatsappBookingBtn) {
      whatsappBookingBtn.href = `https://wa.me/${targetPhone}?text=${encodeURIComponent(message)}`;
    }
  }

  // Service Options Selection
  serviceCards.forEach(card => {
    card.addEventListener('click', () => {
      serviceCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      selectedService = card.getAttribute('data-value') || card.querySelector('h5').textContent;
      updateBookingState();
    });
  });

  // Barber Options Selection
  barberCards.forEach(card => {
    card.addEventListener('click', () => {
      barberCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      selectedBarber = card.getAttribute('data-value') || card.querySelector('h5').textContent;
      updateBookingState();
    });
  });

  // Shift Options Selection
  shiftCards.forEach(card => {
    card.addEventListener('click', () => {
      shiftCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      selectedShift = card.getAttribute('data-value') || card.querySelector('h5').textContent;
      updateBookingState();
    });
  });

  // Individual Barber Card Booking buttons
  document.querySelectorAll('.btn-select-barber').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const barberName = btn.getAttribute('data-barber');
      if (barberName) {
        selectedBarber = barberName;
        barberCards.forEach(card => {
          if (card.getAttribute('data-value') === barberName) {
            barberCards.forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
          }
        });
        updateBookingState();
        const wizardSection = document.getElementById('agendar');
        if (wizardSection) {
          wizardSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Individual Service Card Booking buttons
  document.querySelectorAll('.btn-select-service').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const serviceName = btn.getAttribute('data-service');
      if (serviceName) {
        selectedService = serviceName;
        serviceCards.forEach(card => {
          if (card.getAttribute('data-value') === serviceName) {
            serviceCards.forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
          }
        });
        updateBookingState();
        const wizardSection = document.getElementById('agendar');
        if (wizardSection) {
          wizardSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  updateBookingState();
}

/* --- 5. GALLERY FILTER TABS --- */
function initGalleryFilter() {
  const filterBtns = document.querySelectorAll('.filter-tab-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  if (!filterBtns.length || !galleryItems.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      galleryItems.forEach(item => {
        const category = item.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          item.style.display = 'block';
          item.style.opacity = '1';
          item.style.transform = 'scale(1)';
        } else {
          item.style.display = 'none';
          item.style.opacity = '0';
          item.style.transform = 'scale(0.95)';
        }
      });
    });
  });
}

/* --- 6. FAQ ACCORDION --- */
function initFAQAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question-btn');
    if (!questionBtn) return;

    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all others
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
        const otherBtn = otherItem.querySelector('.faq-question-btn');
        if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
      });

      if (!isActive) {
        item.classList.add('active');
        questionBtn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* --- 7. SCROLL ENTRY ANIMATIONS --- */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.bezel-outer, .section-title, .section-desc, .stat-item, .hero-media-wrap');

  if (!('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1), transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)';
    observer.observe(el);
  });
}
