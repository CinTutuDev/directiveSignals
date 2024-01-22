import { Component, computed, signal } from '@angular/core';

const name = signal('CinTutuDev')

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
  public counter = signal(10);
  public squareCounter = computed(() => this.counter() * this.counter());

  constructor(){
    console.log(name());
  }

  increaeBy(value: number) {
    this.counter.update((current) => current + value);
  }
}
