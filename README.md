# Angular Todo

This is a simple Angular Todo application that allows you to add and manage todos.

## Directives in Use

The following Angular directives are utilized in this project:

- `[(ngModel)]`: Two-way data binding is used to bind the input field to the `newTodo` property in the component, enabling real-time updates as the user types in the input field.
- `(keyup.enter)`: This event binding listens for the Enter key press event in the input field and triggers the `addNew()` function to add a new todo when the user presses Enter.
- `(click)`: The click event binding is used on the "Add New Todo" button and the "Done" button to perform the corresponding actions.

## Usage

1. Type a todo in the input field.
2. Press Enter or click the "Add New Todo" button to add the todo to the list.
3. Each added todo will appear as a list item along with a "Done" button.
4. Click the "Done" button to mark a todo as completed and remove it from the list.



