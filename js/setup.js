'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COATS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES = ['black', 'red', 'blue', 'yellow', 'green'];

/*var fullName = WIZARD_NAMES[getRandomElement(WIZARD_NAMES)] + ' ' + WIZARD_SECOND_NAMES[getRandomElement(WIZARD_SECOND_NAMES)];*/


function getRandomElement(randomArray) {
  return Math.round(Math.random() * randomArray.length - 1);
}

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');


var wizards = [
  {
    name: WIZARD_NAMES[getRandomElement(WIZARD_NAMES)] + ' ' + WIZARD_SECOND_NAMES[getRandomElement(WIZARD_SECOND_NAMES)],
    coatColor: COATS[getRandomElement(COATS)],
    eyesColor: EYES[getRandomElement(EYES)]
  },
  {
    name: WIZARD_NAMES[getRandomElement(WIZARD_NAMES)] + ' ' + WIZARD_SECOND_NAMES[getRandomElement(WIZARD_SECOND_NAMES)],
    coatColor: COATS[getRandomElement(COATS)],
    eyesColor: EYES[getRandomElement(EYES)]
  },
  {
    name: WIZARD_NAMES[getRandomElement(WIZARD_NAMES)] + ' ' + WIZARD_SECOND_NAMES[getRandomElement(WIZARD_SECOND_NAMES)],
    coatColor: COATS[getRandomElement(COATS)],
    eyesColor: EYES[getRandomElement(EYES)]
  },
  {
    name: WIZARD_NAMES[getRandomElement(WIZARD_NAMES)] + ' ' + WIZARD_SECOND_NAMES[getRandomElement(WIZARD_SECOND_NAMES)],
    coatColor: COATS[getRandomElement(COATS)],
    eyesColor: EYES[getRandomElement(EYES)]
  }
];


var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
