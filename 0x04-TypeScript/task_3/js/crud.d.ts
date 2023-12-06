// Declaration file for crud.js module

// Define the shape of the module
declare module 'crud' {
  interface RowID {
    // Define the properties of RowID
  }

  interface RowElement {
    // Define the properties of RowElement
  }

  // Declare the functions/methods available in crud.js
  function insertRow(row: RowElement): RowID;
  function updateRow(id: RowID, updatedRow: RowElement): void;
  function deleteRow(id: RowID): void;

  // Export the types and functions
  export { RowID, RowElement, insertRow, updateRow, deleteRow };
}
