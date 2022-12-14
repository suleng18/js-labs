// 12-07: Linked List
// - some(isValidFn)
// - every(isValidFn)
function createLinkedList() {
   let head = null;

   function insertHead(newData) {
      const newNode = {
         data: newData,
         next: null,
      };
      if (head == null) {
         head = newNode;
         return;
      }
      // otherwise, linked list has some items
      newNode.next = head;
      head = newNode;
   }

   function some(isValidFn) {
      if (head == null) return false;

      let current = head;
      while (current != null) {
         if (isValidFn(current.data)) return true;

         current = current.next;
      }

      return false;
   }

   function every(isValidFn) {
      if (head == null) return false;

      let current = head;
      while (current != null) {
         if (!isValidFn(current.data)) return false;

         current = current.next;
      }

      return true;
   }

   return {
      insertHead,
      some,
      every,
   };
}

describe('some(isValidFn)', () => {
   it('should return false if list is empty', () => {
      const numberLinkedList = createLinkedList();
      expect(numberLinkedList.some((x) => x > 0)).toBe(false);
   });
   it('should return false if not existed in list', () => {
      // 1 -> 2 -> 3
      const numberLinkedList = createLinkedList();
      numberLinkedList.insertHead(3);
      numberLinkedList.insertHead(2);
      numberLinkedList.insertHead(1);
      expect(numberLinkedList.some((x) => x > 3)).toBe(false);
      expect(numberLinkedList.some((x) => x % 5 === 0)).toBe(false);
      expect(numberLinkedList.some((x) => x < 0)).toBe(false);
   });
   it('should return true if existed in list', () => {
      const numberLinkedList = createLinkedList();
      numberLinkedList.insertHead(3);
      numberLinkedList.insertHead(2);
      numberLinkedList.insertHead(1);
      expect(numberLinkedList.some((x) => x % 2 === 0)).toBe(true);
      expect(numberLinkedList.some((x) => x > 1)).toBe(true);
      expect(numberLinkedList.some((x) => x < 3)).toBe(true);
   });
});

describe('every(isValidFn)', () => {
   it('should return false if list is empty', () => {
      const numberLinkedList = createLinkedList();
      expect(numberLinkedList.every((x) => 0)).toBe(false);
   });
   it('should return false if not all nodes match condition', () => {
      const numberLinkedList = createLinkedList();
      numberLinkedList.insertHead(15);
      numberLinkedList.insertHead(10);
      numberLinkedList.insertHead(5);
      expect(numberLinkedList.every((x) => x % 3 === 0)).toBe(false);
      expect(numberLinkedList.every((x) => x <= 10)).toBe(false);
   });
   it('should return true if all nodes match condition', () => {
      const numberLinkedList = createLinkedList();
      numberLinkedList.insertHead(15);
      numberLinkedList.insertHead(10);
      numberLinkedList.insertHead(5);
      expect(numberLinkedList.every((x) => x % 5 === 0)).toBe(true);
      expect(numberLinkedList.every((x) => x > 1)).toBe(true);
   });
});
