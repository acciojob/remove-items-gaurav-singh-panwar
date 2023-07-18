function removeSelectedOptions() {
  const colorSelect = document.getElementById('colorSelect');
  const selectedOptions = Array.from(colorSelect.selectedOptions);
  
  selectedOptions.forEach((option) => {
    colorSelect.removeChild(option);
  });
}
