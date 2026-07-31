
  const envelope = document.getElementById('envelope');
  const heroHint = document.getElementById('heroHint');
  const letterSection = document.getElementById('letterSection');

  function openEnvelope(){
    if(envelope.classList.contains('open')) return;
    envelope.classList.add('open');
    heroHint.style.transition = 'opacity 0.4s ease';
    setTimeout(() => {
      letterSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 650);
  }

  envelope.addEventListener('click', openEnvelope);
  envelope.addEventListener('keydown', (e) => {
    if(e.key === 'Enter' || e.key === ' '){
      e.preventDefault();
      openEnvelope();
    }
  });

  const herNameInput = document.getElementById('herName');
  const myNameInput = document.getElementById('myName');
  const herNameDisplay = document.getElementById('herNameDisplay');
  const myNameDisplay = document.getElementById('myNameDisplay');

  herNameInput.addEventListener('input', () => {
    herNameDisplay.textContent = herNameInput.value.trim() || 'love';
  });
  myNameInput.addEventListener('input', () => {
    myNameDisplay.textContent = myNameInput.value.trim() || 'me';
  });

