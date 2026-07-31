const envelope = document.getElementById('envelope');
const envelopeWrap = document.getElementById('envelopeWrap');
const heroStage = document.getElementById('heroStage');
const letterCard = document.getElementById('letterCard');
const heroHint = document.getElementById('heroHint');

function openEnvelope(){
  if(envelope.classList.contains('open')) return;
  envelope.classList.add('open');
  heroHint.style.transition = 'opacity 0.4s ease';
  heroHint.style.opacity = '0';

  setTimeout(() => {
    envelopeWrap.classList.add('hidden');
    heroStage.classList.add('revealed');
    letterCard.classList.add('visible');
  }, 500);
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