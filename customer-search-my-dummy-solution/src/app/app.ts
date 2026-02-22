import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface Customer {
  id: number;
  name: string;
  gender: string;
  location: string;
  income: number;
  age: number;
}

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  inputText: string = '';
  customerList: Customer[] = [
    { id: 1, name: "Ramesh", gender: "Male", location: "Delhi", income: 10000, age: 25 },
    { id: 2, name: "Divya", gender: "Female", location: "Kolkata", income: 20000, age: 24 },
    { id: 3, name: "Mohan", gender: "Male", location: "Rajasthan", income: 5000, age: 28 },
    { id: 4, name: "Suresh", gender: "Male", location: "Puri", income: 70000, age: 21 },
    { id: 5, name: "Preeti", gender: "Female", location: "Delhi", income: 90000, age: 30 }
  ];
  filteredCustomers: Customer[] = [...this.customerList]; //copy the original list initially

  // inputTextChanged1(event: Event): void {
  //   const value = (event.target as HTMLInputElement).value;
  //   console.log('Input value:', value);
  // }

  inputTextChanged(value: string): void {
    // console.log('Input text changed:', value);

    // filter the value with any value from any key in the array customerList: Customer[]
    // filteredCustomers: Customer[]
    const searchText = value.toLowerCase();
    this.filteredCustomers = this.customerList.filter(customer =>
      Object.values(customer).some(field =>
        String(field).toLowerCase().includes(searchText)
      )
    );
  }

  // trackByCustomerId(index: number, customer: Customer): number {
  //   return customer.id;
  // }
}
