function zeros (n) {
    let count = 0; 
    for (let i = 5; n / i >= 1; i *= 5) {
        count += n / i;
    }
    return Math.floor(count); 
}

var palindromeChainLength = function (n) {
    var steps = 0;
    var reverseN = parseInt((n.toString()).split('').reverse().join(''));
    while (reverseN !== n) {
        n = parseInt(n) + parseInt(reverseN);
        reverseN = parseInt((n.toString()).split('').reverse().join(''));
        steps++;
    }
    return steps;
};

class PaginationHelper {
    constructor(collection, itemsPerPage) {
        this.collection = collection;
        this.itemsPerPage = itemsPerPage;
    }

    // returns the number of items within the entire collection
    itemCount() {
        return this.collection.length;
    }

    // returns the number of pages
    pageCount() {
        return Math.ceil(this.collection.length / this.itemsPerPage);
    }

    // returns the number of items on the current page. page_index is zero based.
    // this method should return -1 for pageIndex values that are out of range
    pageItemCount(pageIndex) {
        const pageCount = this.pageCount() - 1;
        if (pageIndex < 0 || pageIndex > pageCount) {
            return -1;
        }
        else if (pageIndex == pageCount) {
            return this.collection.length % this.itemsPerPage;
        }
        else {
            return this.itemsPerPage;
        }
    }

    // determines what page an item is on. Zero based indexes
    // this method should return -1 for itemIndex values that are out of range
    pageIndex(itemIndex) {
        if (itemIndex < 0 || itemIndex > this.collection.length || this.collection.length == 0) {
            return -1;
        }
        else {
            itemIndex = itemIndex + 1;
            return Math.ceil(itemIndex / this.itemsPerPage) - 1;
        }
    }
}
