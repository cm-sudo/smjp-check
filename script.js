
  function printCheck() {
    window.print();
  }

  function addCheck() {
    const checkList = document.getElementById('check-list');
    const checkTemplate = document.getElementById('check-template').cloneNode(true);
    checkTemplate.removeAttribute('id');
    checkList.appendChild(checkTemplate);
  }

  function deleteCheck(button) {
    const check = button.closest('.check-container');
    if (check) {
      check.remove();
    }
  }

