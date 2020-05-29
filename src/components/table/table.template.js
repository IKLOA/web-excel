const CODES = {
  A: 65,
  Z: 90,
}

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index)
}

function toCell(row) {
  return function(_, col) {
    return `
      <div 
        class="excel-table-row_data__cell" 
        contenteditable 
        data-col="${col}"
        data-type="cell"
        data-id="${row}:${col}"
      ></div>
    `
  }
}

function toColumn(column, index) {
  return `
    <div class="excel-table-row_data__column" data-type="resizable" data-col="${index}">
     ${column}
     <div class="excel-table-row_data__col_resize" data-resize="col"></div>
    </div>
  `
}

function createRow(content, number = '') {
  const resize = number ? '<div class="excel-table-row__resize" data-resize="row"></div>' : ''
  return `
    <div class="excel-table-row" data-type="resizable">
        <div class="excel-table-row__info">
        ${number}
        ${resize}
        </div>
        <div class="excel-table-row_data">${content}</div>
    </div>
  `
}


export function createTable(rowsCount = 20) {
  const columnsCount = CODES.Z - CODES.A + 1
  const rows = []

  const columns = new Array(columnsCount).fill('').map(toChar).map(toColumn).join('')
  rows.push(createRow(columns))

  for (let row = 0; row < rowsCount; row++) {
    const cells = new Array(columnsCount).fill('').map(toCell(row)).join('')
    rows.push(createRow(cells, row + 1))
  }
  return rows.join('')
}
