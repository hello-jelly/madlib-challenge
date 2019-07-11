
const pluralNounAInput = document.getElementById('plural-noun-a');
const pluralNounBInput = document.getElementById('plural-noun-b');
const nounAInput = document.getElementById('noun-a');
const nounBInput = document.getElementById('noun-b');
const adjAInput = document.getElementById('adj-a');
const adjBInput = document.getElementById('adj-b');
const nounCInput = document.getElementById('noun-c');
const actionVerbInput = document.getElementById('action-verb');

const pluralNounASpan = document.getElementById('plural-noun-a-span');
const pluralNounBSpan = document.getElementById('plural-noun-b-span');
const nounASpan = document.getElementById('noun-a-span');
const nounBSpan = document.getElementById('noun-b-span');
const adjASpan = document.getElementById('adj-a-span');
const adjBSpan = document.getElementById('adj-b-span');
const nounCSpan = document.getElementById('noun-c-span');
const actionVerbSpan = document.getElementById('action-verb-span');

const madLibSection = document.getElementById('result');

function generateMadLib() {

  pluralNounASpan.textContent = pluralNounAInput.value;
  pluralNounBSpan.textContent = pluralNounBInput.value;
  nounASpan.textContent = nounAInput.value;
  nounBSpan.textContent = nounBInput.value;
  adjASpan.textContent = adjAInput.value;
  adjBSpan.textContent = adjBInput.value;
  nounCSpan.textContent = nounCInput.value;
  actionVerbSpan.textContent = actionVerbInput.value;

  madLibSection.classList.remove('hidden');
  
}
