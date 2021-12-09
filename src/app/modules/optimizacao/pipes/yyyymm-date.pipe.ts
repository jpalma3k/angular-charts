import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'yyyymmDate' })
export class yyyymmDate implements PipeTransform {
  transform(value: number): Date {
    return new Date(value.toString().slice(0, -2) + '-' + value.toString().slice(-2))
  }
}