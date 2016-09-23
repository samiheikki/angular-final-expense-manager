import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PolymerElement } from '@vaadin/angular2-polymer';

import { ExpenseApp } from './expense_app.component';
import { OverviewPage } from './overview-page/overview_page.component';
import { ExpenseEditor } from './expense-editor/expense_editor.component';
import { ExpensesList } from './expenses-list/expenses_list.component';
import { OverviewPanel } from './overview-panel/overview_panel.component';
import { SearchFilters } from './search-filters/search_filters.component';


@NgModule({
  imports: [ BrowserModule ],
  declarations: [
    ExpenseApp,
    OverviewPage,
    ExpenseEditor,
    ExpensesList,
    OverviewPanel,
    SearchFilters,
    PolymerElement('paper-dialog'),
    PolymerElement('paper-input'),
    PolymerElement('vaadin-bar-chart'),
    PolymerElement('vaadin-combo-box'),
    PolymerElement('vaadin-date-picker'),
    PolymerElement('vaadin-grid'),
    PolymerElement('vaadin-upload')
  ],
  bootstrap: [ ExpenseApp ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
