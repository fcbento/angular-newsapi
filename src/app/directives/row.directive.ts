import { Directive, OnInit, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[Row]'
})
export class RowDirective implements OnInit {

  @Input() row: string;

  constructor(private el: ElementRef) { }

  public toCssRow(type: string): string {
    let rows: string[] = type ? type.split(' ') : []
    let classes: string = ''

    if (rows[0]) classes += `${rows[0]}-xs `
    if (rows[1]) classes += `${rows[1]}-sm `
    if (rows[2]) classes += `${rows[2]}-md `
    if (rows[3]) classes += `${rows[3]}-lg`

    return classes
  }

  ngOnInit(){
    let classes: string[] = this.toCssRow(this.row).split(' ')
    let row: string = 'row'
    this.el.nativeElement.classList.add('row', classes[0] || row, classes[1] || row, classes[2] || row, classes[3] || row)
  }

}
