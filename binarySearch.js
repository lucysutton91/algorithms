function binaryIndexOf(arr, elem) {
  
     var minIndex = 0;
     var maxIndex = arr.length - 1;
     var currentIndex;
     var currentElement;
  
     while (minIndex <= maxIndex) {
         currentIndex = (minIndex + maxIndex) / 2 | 0;
         currentElement = arr[currentIndex];
  
         if (currentElement < elem) {
             minIndex = currentIndex + 1;
         }
         else if (currentElement > elem) {
             maxIndex = currentIndex - 1;
         }
         else {
             return currentIndex;
         }
     }
  
     return -1;
 }
 
 binaryIndexOf([1,2,3,4], 5)