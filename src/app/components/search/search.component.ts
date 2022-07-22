import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.search.valueChanges
    .pipe(
      debounceTime(300)
    )
    .subscribe(value => this.searchEmitter.emit(value))
  }

  search = new FormControl('');
  @Output("search") searchEmitter = new EventEmitter<String>();


}
