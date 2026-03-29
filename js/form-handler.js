/* ============================================
   JOLLOF LIFE — Contact Form Handler
   Client-side validation & submission
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  const form = document.getElementById('contact-form');
  if (!form) return;

  const submitBtn = document.getElementById('submit-btn');
  const fields = {
    name:    form.querySelector('#name'),
    email:   form.querySelector('#email'),
    subject: form.querySelector('#subject'),
    message: form.querySelector('#message'),
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // --- Validate a single field ---
  function validateField(field) {
    const group = field.closest('.form-group');
    let isValid = true;

    // Required check
    if (field.hasAttribute('required') && !field.value.trim()) {
      isValid = false;
    }

    // Email format check
    if (field.type === 'email' && field.value.trim() && !emailRegex.test(field.value.trim())) {
      isValid = false;
      const errorEl = group.querySelector('.form-group__error');
      if (errorEl) errorEl.textContent = 'Please enter a valid email address';
    }

    if (isValid) {
      group.classList.remove('form-group--error');
    } else {
      group.classList.add('form-group--error');
    }

    return isValid;
  }

  // --- Validate all fields ---
  function validateForm() {
    let isValid = true;

    Object.values(fields).forEach(field => {
      if (!validateField(field)) {
        isValid = false;
      }
    });

    return isValid;
  }

  // --- Clear error on input ---
  Object.values(fields).forEach(field => {
    field.addEventListener('input', () => {
      const group = field.closest('.form-group');
      if (group.classList.contains('form-group--error')) {
        validateField(field);
      }
    });
  });

  // --- Show success state ---
  function showSuccess() {
    const formParent = form.parentElement;
    const originalHTML = formParent.innerHTML;

    form.style.display = 'none';

    const successDiv = document.createElement('div');
    successDiv.className = 'form-success';
    successDiv.innerHTML = `
      <div class="form-success__icon">
        <i class="fas fa-check"></i>
      </div>
      <h3 class="form-success__title">Message Sent!</h3>
      <p class="form-success__text">We'll get back to you within 24 hours.</p>
      <button type="button" class="btn btn--primary" id="send-another-btn">
        <i class="fas fa-redo" style="margin-right: 8px;"></i> Send Another
      </button>
    `;

    formParent.appendChild(successDiv);

    // Send Another handler
    const sendAnotherBtn = document.getElementById('send-another-btn');
    sendAnotherBtn.addEventListener('click', () => {
      successDiv.remove();
      form.reset();
      form.style.display = '';

      // Clear any lingering error states
      form.querySelectorAll('.form-group').forEach(group => {
        group.classList.remove('form-group--error');
      });

      // Reset button
      submitBtn.disabled = false;
      submitBtn.innerHTML = 'Send Message <i class="fas fa-paper-plane" style="margin-left: 8px;"></i>';
    });
  }

  // --- Form submission ---
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!validateForm()) {
      // Focus the first invalid field
      const firstError = form.querySelector('.form-group--error input, .form-group--error textarea');
      if (firstError) firstError.focus();
      return;
    }

    // Loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin" style="margin-right: 8px;"></i> Sending...';

    // Simulate submission
    setTimeout(() => {
      showSuccess();
    }, 1500);
  });

});
