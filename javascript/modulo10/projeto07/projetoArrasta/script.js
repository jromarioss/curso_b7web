let areas = {
  a: null,
  b: null,
  c: null
};

document.querySelectorAll('.item').forEach(item => {
  item.addEventListener('dragstart', dragStart);
  item.addEventListener('dragend', dragEnd);
});
document.querySelectorAll('.area').forEach(area => {
  area.addEventListener('dragover', dragOver);
  area.addEventListener('dragleave', dragLeave);
  area.addEventListener('drop', droP);
});

document.querySelector('.neutralArea').addEventListener('dragover', dragOverN);
document.querySelector('.neutralArea').addEventListener('dragleave', dragLeaveN);
document.querySelector('.neutralArea').addEventListener('drop', dropN);

function dragStart(e) {
  e.currentTarget.classList.add('dragging');
}

function dragEnd(e) {
  e.currentTarget.classList.remove('dragging');
}

function dragOver(e) {
  if (e.currentTarget.querySelector('.item') === null) {
    e.preventDefault();
    e.currentTarget.classList.add('hover');
  }

}

function dragLeave(e) {
  e.currentTarget.classList.remove('hover');
}

function droP(e) {
  e.currentTarget.classList.remove('hover');
  
  if (e.currentTarget.querySelector('.item') === null) {
    let dragItem = document.querySelector('.item.dragging');
    e.currentTarget.appendChild(dragItem);
    updateArea();
  }
}

function dragOverN(e) {
  e.preventDefault();
  e.currentTarget.classList.add('hover');
}

function dragLeaveN(e) {
  e.currentTarget.classList.remove('hover');
}

function dropN(e) {
  e.currentTarget.classList.remove('hover');
  let dragItem = document.querySelector('.item.dragging');
  e.currentTarget.appendChild(dragItem);
  updateArea();
}

function updateArea() {
  document.querySelectorAll('.area').forEach(area => {
    let name = area.getAttribute('data-name');
    
    if (area.querySelector('.item') !== null) {
      areas[name] = area.querySelector('.item').innerHTML;
    } else {
      area[name] = null;
    }
  });

  if (areas.a === '1' && areas.b === '2' && areas.c === '3') {
    document.querySelector('.areas').classList.add('correct');
  } else {
    document.querySelector('.areas').classList.remove('correct');
  }
}