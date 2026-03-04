import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { ChartModule } from 'primeng/chart';

import { DataStream } from '../../data-stream';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-temperature',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './temperature.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Temperature {
  dataStream = inject(DataStream);
  translate = inject(TranslateService);

  chartOptions = {
    responsive: true,
    animation: false,
    parsing: false,
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'second',
          displayFormats: {
            second: 'HH:mm:ss',
          },
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  temperature = signal({
    datasets: [
      {
        label: '',//this.translate.instant('widgets.temperature.average'),
        type: 'line',
        data: [],
        fill: false,
        borderColor: '#00243a',
        backgroundColor: '#00243a',
      },
      {
        label: '',//this.translate.instant('widgets.temperature.title'),
        data: [],
        fill: false,
        borderColor: '#f69221',
        backgroundColor: '#f69221',
      },
    ],
  });

  constructor() {
    effect(() => {
      const temperature = this.dataStream.getTemperature()();

      this.temperature.update((prevData: any) => {
        const newTemperature = [
          ...prevData.datasets[1].data.slice(-10),
          { x: temperature.date, y: temperature.value },
        ];

        const newAvgTemperature = [
          ...prevData.datasets[0].data.slice(-10),
          {
            x: temperature.date,
            y: newTemperature.reduce((acc, curr) => acc + curr.y, 0) / newTemperature.length,
          },
        ];

        return {
          ...prevData,
          datasets: [
            {
              ...prevData.datasets[0],
              label: this.translate.instant('widgets.temperature.average'),
              data: newAvgTemperature,
            },
            {
              ...prevData.datasets[1],
              label: this.translate.instant('widgets.temperature.title'),
              data: newTemperature,
            },
          ],
        };
      });
    });
  }
}
