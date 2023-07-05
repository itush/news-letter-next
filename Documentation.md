# Why don't we directly access an input element and get its value in React?
-  In vanilla JavaScript, we can indeed use 
`const emailInput = document.getElementById('email');`
`const email = emailInput.value.trim();`
 to directly access an input element and get its value using .value.trim().

However, in React, we typically use controlled components, where the value of the input field is controlled by the state. This means that the value of the input field is stored in the state variable (email) and is updated through the onChange event handler.

Accessing the value directly with `document.getElementById('email').value.trim()` would bypass the controlled component pattern and directly manipulate the DOM, which is not the recommended approach in React. It's generally best to stick with the controlled component pattern to ensure the component state is in sync with the input field value.

By using the useState hook and updating the state with setEmail, you ensure that the component re-renders appropriately when the value changes, maintaining the declarative and predictable nature of React.