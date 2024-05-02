const inputField = document.getElementById('display');
const placeholderText = inputField.getAttribute('placeholder');

inputField.addEventListener('input', () => {
  const typedText = inputField.value;
  const remainingText = placeholderText.substring(typedText.length);
  inputField.setAttribute('placeholder', remainingText);
});

