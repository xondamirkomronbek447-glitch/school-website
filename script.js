const details = {
  director: {
    title: "О директоре",
    text: "Здесь можно разместить имя директора, годы работы, профессиональный путь, достижения и короткое обращение к ученикам и родителям. Текст легко заменить в index.html."
  },
  school: {
    title: "О школе",
    text: "Здесь можно рассказать об истории школы, направлениях обучения, кабинетов, кружках, проектах и главных особенностях образовательной среды."
  },
  classes: {
    title: "О классах",
    text: "В этом окне можно разместить список классов, классных руководителей, расписание, количество учеников или ссылки на отдельные страницы классов."
  }
};

const modal = document.querySelector('#modal');
const modalTitle = document.querySelector('#modal-title');
const modalText = document.querySelector('#modal-text');

function openModal(key) {
  const item = details[key];
  if (!item) return;
  modalTitle.textContent = item.title;
  modalText.textContent = item.text;
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
}

function closeModal() {
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

document.querySelectorAll('[data-open]').forEach((button) => {
  button.addEventListener('click', () => openModal(button.dataset.open));
});

document.querySelectorAll('[data-close="modal"]').forEach((element) => {
  element.addEventListener('click', closeModal);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
});
