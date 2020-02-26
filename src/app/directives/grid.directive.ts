import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[Grid]'
})
export class GridDirective implements OnInit {

  @Input() cols: string;

  constructor (private el: ElementRef) {}

  public toCssCrid(numbers: string): string {

    const cols: any[] = numbers ? numbers.split(' ') : []
    let classes: string = ''

    if (cols[0]) classes += `col-xs-${cols[0]} `
    if (cols[1]) classes += `col-sm-${cols[1]} `
    if (cols[2]) classes += `col-md-${cols[2]} `
    if (cols[3]) classes += `col-lg-${cols[3]} `
    
    return classes;
  }

  ngOnInit() {
    let classes = this.toCssCrid(this.cols).split(' ')
    let col: string = 'col-xs-12'
    this.el.nativeElement.classList.add(classes[0] || col, classes[1] || col, classes[2] || col, classes[3] || col)
  }

}
