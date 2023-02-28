import { Component, Input } from '@angular/core';
import { TimelineEvent } from '../interfaces/event.interface';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent {

  @Input('title') titulo!: string;
  @Input('events') eventos!: TimelineEvent[];

}
