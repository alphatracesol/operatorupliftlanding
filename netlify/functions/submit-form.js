waitlistForm?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const email = emailInput.value;
  if (!email || !emailInput.checkValidity()) { /* error handling */ return; }

  grecaptcha.ready(() => {
    grecaptcha.execute('6LelQ5ErAAAAABRxSDOpd1UsqfZPp4sqXVIQQZgV', {action: 'submit'}).then(async (token) => {
      const response = await fetch('/.netlify/functions/submit-form', {
        method: 'POST',
        body: JSON.stringify({ email, 'g-recaptcha-response': token }),
      });
      const data = await response.json();
      if (data.success) { /* success message */ } else { /* error message */ }
    });
  });
});
