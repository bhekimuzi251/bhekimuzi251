const bookingForm = document.getElementById('bookingForm');
const bookingMessage = document.getElementById('bookingMessage');
const themeToggle = document.getElementById('themeToggle');
const yearSpan = document.getElementById('year');

const savedTheme = localStorage.getItem('medigo-theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark');
  themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  localStorage.setItem('medigo-theme', isDark ? 'dark' : 'light');
  themeToggle.textContent = isDark ? '☀️' : '🌙';
});

bookingForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const type = document.getElementById('type').value;
  const date = document.getElementById('date').value;

  if (!name || !type || !date) {
    bookingMessage.textContent = 'Please complete all fields before booking.';
    return;
  }

  bookingMessage.textContent = `Thanks, ${name}! Your ${type.toLowerCase()} consultation is booked for ${date}.`;
  bookingForm.reset();
});

yearSpan.textContent = new Date().getFullYear();
