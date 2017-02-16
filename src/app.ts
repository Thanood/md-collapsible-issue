import {inject, TaskQueue} from 'aurelia-framework';
declare var $;

@inject(TaskQueue)
export class App {
  activeHeader: HTMLDivElement;
  message = 'Hello World!';
  taskQueue: TaskQueue;

  constructor(tq) {
    this.taskQueue = tq;
  }

  attached() {
    this.taskQueue.queueMicroTask(() => {
      $(this.activeHeader).trigger('click');
    });
  }
}
