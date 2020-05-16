import {ExcelComponent} from '@/core/ExcelComponent'

export class Header extends ExcelComponent {
  static className = 'excel-header'
  toHTML() {
    return `
      <input type="text" value="Новая таблица" class="excel-header__input">
      <div class="excel-header-block">
      
        <div class="excel-header-block__button">
          <span class="material-icons">exit_to_app</span>
         </div>
         
         <div class="excel-header-block__button">
           <span class="material-icons">delete_outline</span>
         </div>
         
      </div>
`
  }
}
