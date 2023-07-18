//your JS code here. If required.
function myfunction() {
	const dropdown = document.getElementById("colorSelect");
      const selectedIndex = dropdown.selectedIndex;
      dropdown.remove(selectedIndex);
}