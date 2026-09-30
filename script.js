const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item) => {
  const button = item.querySelector('.faq-question');
  const toggle = item.querySelector('.faq-toggle');

  button.addEventListener('click', () => {
    const isOpen = item.classList.contains('active');

    faqItems.forEach((faq) => {
      faq.classList.remove('active');
      faq.querySelector('.faq-toggle').textContent = '+';
    });

    if (!isOpen) {
      item.classList.add('active');
      toggle.textContent = '−';
    }
  });
});

const yearNode = document.getElementById('year');
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}
