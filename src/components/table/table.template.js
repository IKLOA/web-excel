const CODES = {
  A: 65,
  Z: 90,
}

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index)
}

function toCell() {
  return `
    <div class="excel-table-row_data__cell" contenteditable=""></div>
  `
}

function toColumn(column) {
  return `
    <div class="excel-table-row_data__column">
     ${column}
    </div>
  `
}

function createRow(content, number = '') {
  return `
    <div class="excel-table-row">
        <div class="excel-table-row__info">${number}</div>
        <div class="excel-table-row_data">${content}</div>
    </div>
  `
}

export function createTable(rowsCount = 20) {
  const columnsCount = CODES.Z - CODES.A + 1
  const rows = []

  const columns = new Array(columnsCount).fill('').map(toChar).map(toColumn).join('')
  rows.push(createRow(columns))

  for (let i = 0; i < rowsCount; i++) {
    const cells = new Array(columnsCount).fill('').map(toCell).join('')
    rows.push(createRow(cells, i + 1))
  }
  return rows.join('')
}
