import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'phoneNumber'
})
export class PhoneNumberPipe implements PipeTransform {

  transform(value: string): string {
    const phoneNumber = value.replace(/\D/g, '');

    if (phoneNumber.length !== 12) {
      return value;
    } else {
      const countryCode = phoneNumber.substring(0, 3);
      const operatorCode = phoneNumber.substring(3, 5);
      const firstPart = phoneNumber.substring(5, 8);
      const secondPart = phoneNumber.substring(8, 10);
      const thirdPart = phoneNumber.substring(10, 12);

      return `+${countryCode} (${operatorCode}) ${firstPart}-${secondPart}-${thirdPart}`;
    }
  }

}
