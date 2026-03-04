import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import 'chartjs-adapter-date-fns';

import { DataStream } from '../../data-stream';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-pressure',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './pressure.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Pressure {
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
    },
  };

  data = signal({
    datasets: [
      {
        label: '',//this.translate.instant('widgets.pressure.title'),
        data: [],
        fill: false,
        borderColor: '#f69221',
      },
      {
        label: '',//this.translate.instant('widgets.pressure.average'),
        data: [],
        fill: false,
        borderColor: '#00243a',
      },
    ],
  });


  constructor() {
    effect(() => {
      const pressure = this.dataStream.getPressure()();

      this.data.update((prevData: any) => {
        const newPressure = [
          ...prevData.datasets[0].data.slice(-10),
          { x: pressure.date, y: pressure.value },
        ];

        const newAvgPressure = [
          ...prevData.datasets[1].data.slice(-10),
          {
            x: pressure.date,
            y: newPressure.reduce((acc, curr) => acc + curr.y, 0) / newPressure.length,
          },
        ];

        return {
          ...prevData,
          datasets: [
            {
              ...prevData.datasets[0],
              label: this.translate.instant('widgets.pressure.title'),
              data: newPressure,
            },
            {
              ...prevData.datasets[1],
              label: this.translate.instant('widgets.pressure.average'),
              data: newAvgPressure,
            },
          ],
        };
      });
    });
  }
}
