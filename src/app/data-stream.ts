import { Injectable, signal } from '@angular/core';
import { Sample } from './data-types';

/**
 * This service simulates a data stream of measurements.
 */
@Injectable({
  providedIn: 'root',
})
export class DataStream {
  private preassure = signal<Sample>(this.createSample('preassure'));
  private temperature = signal<Sample>(this.createSample('temperature'));

  constructor() {
    setInterval(() => {
      this.preassure.set(this.createSample('preassure'));
    }, 1000);

    setInterval(() => {
      this.temperature.set(this.createSample('temperature'));
    }, 1500);
  }

  getPressure() {
    return this.preassure.asReadonly();
  }

  getTemperature() {
    return this.temperature.asReadonly();
  }

  start() {
    console.log ('Data stream started');
  }

  stop() {
    console.log ('Data stream stopped');
  }

  save() {
    console.log ('Data stream saved');
  }

  private createSample(name: 'preassure' | 'temperature'): Sample {
    switch (name) {
      case 'preassure': {
        return {
          name,
          value: 10 + Math.floor(Math.random() * 21) * 0.1, // 10 to 12 bar
          date: Date.now(),
        }
      }
      case 'temperature':
        return {
          name,
          value: 30 + Math.floor(Math.random() * 71), // 30 to 100 °C
          date: Date.now(),
        };
    }
  }

}
