// AK Racks - Main JavaScript

// Navigation Scroll Effect
const navbar = document.querySelector('.navbar');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile Navigation Toggle
navToggle?.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  
  // Animate hamburger icon
  const spans = navToggle.querySelectorAll('span');
  spans[0].style.transform = navMenu.classList.contains('active') ? 'rotate(45deg) translateY(9px)' : '';
  spans[1].style.opacity = navMenu.classList.contains('active') ? '0' : '1';
  spans[2].style.transform = navMenu.classList.contains('active') ? 'rotate(-45deg) translateY(-9px)' : '';
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    const spans = navToggle.querySelectorAll('span');
    spans[0].style.transform = '';
    spans[1].style.opacity = '1';
    spans[2].style.transform = '';
  });
});

// Active Navigation Link on Scroll
const sections = document.querySelectorAll('section[id]');

function activateNavLink() {
  const scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute('id');
    const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLink?.classList.add('active');
    } else {
      navLink?.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', activateNavLink);

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// Contact Form Submission
const contactForm = document.getElementById('contact-form');

contactForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const formData = new FormData(contactForm);
  const name = formData.get('name');
  const phone = formData.get('phone');
  const requirement = formData.get('requirement');
  
  // Create WhatsApp message
  const message = `Hi, I'm ${name}. ${requirement}. Please contact me at ${phone}.`;
  const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
  
  // Open WhatsApp
  window.open(whatsappUrl, '_blank');
  
  // Reset form
  contactForm.reset();
  
  // Show success message (you can customize this)
  alert('Redirecting to WhatsApp...');
});

// Lazy Loading Images
const lazyImages = document.querySelectorAll('img[data-src]');

const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.removeAttribute('data-src');
      observer.unobserve(img);
    }
  });
});

lazyImages.forEach(img => imageObserver.observe(img));

// Animate on Scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.product-card, .feature-card, .gallery-item');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, index * 100);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  elements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
  });
};

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  animateOnScroll();
});

// Add scroll-to-top button functionality (optional enhancement)
const createScrollToTop = () => {
  const button = document.createElement('button');
  button.innerHTML = '↑';
  button.className = 'scroll-to-top';
  button.style.cssText = `
    position: fixed;
    bottom: 110px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--primary-dark);
    color: white;
    border: none;
    font-size: 24px;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 998;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  `;
  
  document.body.appendChild(button);
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      button.style.opacity = '1';
      button.style.visibility = 'visible';
    } else {
      button.style.opacity = '0';
      button.style.visibility = 'hidden';
    }
  });
  
  button.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
};

createScrollToTop();

// Product Card Click to WhatsApp
document.querySelectorAll('.product-card').forEach(card => {
  const whatsappBtn = card.querySelector('.btn-whatsapp');
  const productTitle = card.querySelector('.product-title')?.textContent;
  
  whatsappBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    const message = `Hi, I'm interested in ${productTitle}. Can you provide more details and pricing?`;
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  });
});

// Gallery Lightbox (Simple Implementation)
const createLightbox = () => {
  const lightbox = document.createElement('div');
  lightbox.id = 'lightbox';
  lightbox.style.cssText = `
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.95);
    z-index: 9999;
    justify-content: center;
    align-items: center;
    cursor: zoom-out;
  `;
  
  lightbox.innerHTML = '<img style="max-width: 90%; max-height: 90%; object-fit: contain;">';
  document.body.appendChild(lightbox);
  
  document.querySelectorAll('.gallery-image').forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => {
      lightbox.style.display = 'flex';
      lightbox.querySelector('img').src = img.src;
    });
  });
  
  lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });
};

createLightbox();

// Performance: Debounce scroll events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Apply debounce to scroll-heavy functions
window.addEventListener('scroll', debounce(activateNavLink, 50));
