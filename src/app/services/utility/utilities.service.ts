import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor() {
  }

  // Utility function to filter value from array of Json object
  filterBy<T, U>(filterString: string, array: Array<T>, prop?: string): Array<T> {
    try {
      if (array.length < 0) {
        return array;
      }
      if (prop) {
        return array.filter(iterator => iterator[prop].toString().toLowerCase().includes(filterString.toString().toLowerCase().trim()));
      } else {
        // check for all properties inside object
        const resultArray = [];
        for (const element of array) {
          Object.keys(element).forEach(key => {
            if (element[key].toString().toLowerCase().includes(filterString.toLowerCase().trim())) {
              resultArray.push(element);
            }
          });
        }
        return resultArray;
      }
    } catch (exception) {
      console.error(exception);
      return array;
    }
  }

  /*
 *  Get Currency in regional format
 * */
  getCurrency(price) {
    let priceTemp: number = Number(price) || 0;
    return (priceTemp).toLocaleString(navigator.language, {style: 'currency', currency: 'INR'});
  }

}
