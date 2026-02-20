import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface Customer {
  id: number;
  name: string;
  gender: string;
  location: string;
  income: string;
  age: string;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // app heading (used in template)
  title = 'Customer Search';

  // original data (never mutate)
  customers: Customer[] = [];

  // filtered view (bound to *ngFor)
  filteredCustomers: Customer[] = [];

  // bound to input via ngModel
  searchText: string = '';

  ngOnInit(): void {

    // initial customer list (keeps defined order)
    this.customers = [
      { id: 1, name: 'Rahul', gender: 'Male', location: 'Delhi', income: '50000', age: '28' },
      { id: 2, name: 'Priya', gender: 'Female', location: 'Mumbai', income: '65000', age: '32' },
      { id: 3, name: 'Amit', gender: 'Male', location: 'Bangalore', income: '72000', age: '30' },
      { id: 4, name: 'Sneha', gender: 'Female', location: 'Chennai', income: '58000', age: '27' },
      // add more customers as required
    ];

    // show all at start
    this.filteredCustomers = [...this.customers];
  }

  /**
   * Live search called on input event.
   * Always filters from this.customers so original order is preserved.
   */
  onSearch(): void {
    const searchValue = this.searchText?.trim().toLowerCase();

    if (!searchValue) {
      // empty input -> show all (preserve order)
      this.filteredCustomers = [...this.customers];
      return;
    }

    // filter from original array only (order preserved by filter)
    this.filteredCustomers = this.customers.filter(customer => {
      return Object.values(customer).some(val =>
        val != null && val.toString().toLowerCase().includes(searchValue)
      );
    });
  }

  /**
   * trackBy to keep stable DOM nodes and preserve visual order
   */
  trackById(index: number, customer: Customer): number {
    return customer.id;
  }
}
