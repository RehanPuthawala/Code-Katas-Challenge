//* Instrcutions

/* 

For this exercise you will be strengthening your page-fu mastery. You will complete the PaginationHelper class, which is a utility class helpful for querying paging information related to an array.

The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. The types of values contained within the collection/array are not relevant.

The following are some examples of how this class is used:

*/

//* Examples
/*
var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
helper.pageCount(); //should == 2
helper.itemCount(); //should == 6
helper.pageItemCount(0); //should == 4
helper.pageItemCount(1); // last page - should == 2
helper.pageItemCount(2); // should == -1 since the page is invalid

*pageIndex takes an item index and returns the page that it belongs on
helper.pageIndex(5); //should == 1 (zero based index)
helper.pageIndex(2); //should == 0
helper.pageIndex(20); //should == -1
helper.pageIndex(-10); //should == -1
*/

//* Solutions
class PaginationHelper {
  constructor(collection, itemPerPage) {
    this.collection = collection;
    this.itemPerPage = itemPerPage;
    this.pagination = {};
  }
  itemCount = () => this.collection.length;
  pageCount = () => Math.ceil(this.itemCount() / this.itemPerPage);
  fillObjects() {
    for (let i = 0; i < this.pageCount(); i++) {
      this.pagination[i] = [];

      // Position Defining
      let position = 0;
      for (let k = 0; k < i; k++) {
        position += this.pagination[k].length;
      }

      // Condition Defining
      let condition;
      if (position !== 0 && this.collection[position + this.itemPerPage]) {
        condition = position + this.itemPerPage;
      } else if (position === 0) {
        condition = this.itemPerPage;
      } else {
        condition = this.collection.length;
      }

      // pushing value to the paginatin object
      for (let j = position; j < condition; j++) {
        this.pagination[i].push(this.collection[j]);
        position += this.itemPerPage;
      }
    }
  }

  pageItemCount(index) {
    this.fillObjects();
    return this.pagination[index] ? this.pagination[index].length : -1;
  }

  pageIndex(itemPosition) {
    this.fillObjects();
    if (this.collection[itemPosition]) {
      for (let i = 0; i < this.pageCount(); i++) {
        if (this.pagination[i].includes(this.collection[itemPosition])) {
          return i;
        } else {
          continue;
        }
      }
    } else {
      return -1;
    }
  }
}

let helper = new PaginationHelper(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
  4
);

console.log(helper.pageCount());

console.log(helper.pageItemCount(3));
console.log(helper.pageIndex(12));
