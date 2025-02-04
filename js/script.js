
const icons = document.querySelectorAll('.icon');

icons.forEach(icon => {
  icon.addEventListener('click', (e) => {
    const iconId = e.target.id;
    alert(`You clicked on: ${iconId}`);
  });
});
