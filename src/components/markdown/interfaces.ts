import { ElementRef } from '@angular/core'

export interface ComponentEvent {
  targetElement:ElementRef
  source:string
}