function removeColor() {
  const colorSelect = document.getElementById('colorSelect');
  const selectedOption = colorSelect.options[colorSelect.selectedIndex];
  colorSelect.remove(selectedOption.index);
}