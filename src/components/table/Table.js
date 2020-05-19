import {ExcelComponent} from '@/core/ExcelComponent'
import {createTable} from '@/components/table/table.template'
import {tableResizeHandler} from '@/components/table/table.resize'
import {shouldResize} from './table.function'


export class Table extends ExcelComponent {
  static className = 'excel-table'

  constructor($root) {
    super($root, {
      listeners: ['mousedown'],
    })
  }

  toHTML() {
    return createTable()
  }

  onMousedown(event) {
    if (shouldResize(event)) {
      tableResizeHandler(this.$root, event)
    }
  }
}

