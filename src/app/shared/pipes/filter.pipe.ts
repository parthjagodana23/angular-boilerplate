import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string, ...args: any[]): any[] {
    if (!items || !searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();

    return items.filter(item => this.searchMatch(item, searchText));
  }

  private searchMatch(item: any, searchText: string): boolean {
    for (const key in item) {
      if (item.hasOwnProperty(key) && typeof item[key] === 'string') {
        if (item[key].toLowerCase().includes(searchText)) {
          return true;
        }
      }
    }
    return false;
  }

}
