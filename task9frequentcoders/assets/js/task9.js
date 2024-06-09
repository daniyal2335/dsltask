document.addEventListener('DOMContentLoaded', () => {
    let nInp = document.getElementById('nInp');
    let sBtn = document.getElementById('sBtn');
    let fb = document.getElementById('fb');
    let nList = document.getElementById('notes');

    // Save note
    sBtn.addEventListener('click', () => {
    let newNote = nInp.value.trim();
      if (newNote !== '') {
        nts.push(newNote);
        localStorage.setItem('notes', JSON.stringify(nts));
        nInp.value = '';
        sBtn.style.marginBottom = '20px';
        fb.textContent = 'Note saved successfully.';
        allnts();
      } else {
        fb.textContent = 'Please write something before saving.';
      }
        setTimeout(() => {
          fb.textContent = '';
        }, 3000);
    });
  
    // Load notes from local storage
    let nts = JSON.parse(localStorage.getItem('nts')) || [];
  
    // Display notes
    function allnts() {
      nList.innerHTML = '';
      nts.forEach((note, index) => {
        let li = document.createElement('li');
        li.textContent = note;  
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.style.marginBottom = '20px';
        deleteButton.style.marginLeft = '15px';
        deleteButton.addEventListener('click', () => {
          delNts(index);
        });
        li.appendChild(deleteButton);
        nList.appendChild(li);
        
      });
    }
  
    allnts();
  

  
    // Delete note
    function delNts(index) {
      nts.splice(index, 1);
      localStorage.setItem('notes', JSON.stringify(nts));
      allnts();
      fb.textContent = 'Note deleted successfully.';
      setTimeout(() => {
        fb.textContent = '';
      }, 3000);
    }
  });
  