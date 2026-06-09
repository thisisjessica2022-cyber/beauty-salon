// ===== Auto Slider =====
let currentSlide = 0;
const totalSlides = 4;
const wrapper = document.getElementById('slidesWrapper');
const dots = document.querySelectorAll('.dot');

function goSlide(index) {
  currentSlide = (index + totalSlides) % totalSlides;
  wrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
  dots.forEach((d, i) => d.classList.toggle('active', i === currentSlide));
}

setInterval(() => goSlide(currentSlide + 1), 4000);

// ===== Quantity Control =====
function changeQty(id, delta) {
  const el = document.getElementById(id);
  let val = parseInt(el.textContent) + delta;
  if (val < 1) val = 1;
  if (val > 99) val = 99;
  el.textContent = val;
}

// ===== Tab Switch =====
function switchTab(section, el) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
}

// ===== Booking Form =====
function submitBooking(e) {
  e.preventDefault();
  document.getElementById('bookModal').style.display = 'none';
  const toast = document.getElementById('toast');
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}

// ===== Smooth scroll for anchors =====
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ===== Bottom nav active on scroll =====
const sections = ['detail','services','notice','reviews'];
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - 120) current = id;
  });
  document.querySelectorAll('.bnav-item').forEach((item, i) => {
    item.classList.toggle('active', i === sections.indexOf(current));
  });
});
