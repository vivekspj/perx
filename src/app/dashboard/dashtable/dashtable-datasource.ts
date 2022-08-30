import { DataSource } from '@angular/cdk/collections';
import { MatSort } from '@angular/material/sort';
import { filter, map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { dash } from '../dashboard.interface';

/**
 * Data source for the Dashtable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class DashtableDataSource extends DataSource<dash> {
  data!: dash[];
  sort: MatSort = new MatSort();
  filterString : string = '';

  constructor(dataSource : dash[]) {
    super();
    this.data = dataSource;
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<dash[]> {
    return merge(observableOf(this.data), this.sort.sortChange)
        .pipe(map(() => {
          return this.getSortedData([...this.data ]);
        }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: dash[]): dash[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'type': return compare(a.type, b.type, isAsc);
        case 'content': return compare(a.content, b.content, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        case 'createdAt' : return compare(new Date(a.createdAt).getTime(), new Date(b.createdAt).getTime(), isAsc);
        case 'updatedAt' : return compare(new Date(a.updatedAt).getTime(), new Date(b.updatedAt).getTime(), isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
