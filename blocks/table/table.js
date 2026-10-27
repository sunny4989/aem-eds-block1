/* Table block: first row becomes the header */
export default function decorate(block) {
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');

  [...block.children].forEach((row, i) => {
    const tr = document.createElement('tr');
    [...row.children].forEach((col) => {
      const cell = document.createElement(i === 0 ? 'th' : 'td');
      if (i === 0) cell.setAttribute('scope', 'col');
      cell.innerHTML = col.innerHTML;
      tr.append(cell);
    });
    (i === 0 ? thead : tbody).append(tr);
  });

  table.append(thead, tbody);
  const scroller = document.createElement('div');
  scroller.className = 'table-scroll';
  scroller.tabIndex = 0;
  scroller.setAttribute('role', 'region');
  scroller.setAttribute('aria-label', 'Scrollable table');
  scroller.append(table);
  block.replaceChildren(scroller);
}
