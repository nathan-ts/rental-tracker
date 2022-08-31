# Future Considerations

- Rental mock data was hard-coded, and in future versions could be generated dynamically using mockAPI or a similar service.
- The form validation is very rudimentary and could be expanded to check if email addresses fit a regex pattern or known domain list, or to require numeric input only for phone number.
- Transitions were tricky to implement given the need to account for different sizes of components that would push other components around in the DOM, particularly for sliding-type animations.
- Data is currently passed child to parent through 4 components - for scalability, an event bus or state management framework should be used to manage data moving around differnt components.
- Font Awesome does not allow icon weights to be adjusted, preventing them from being thinner. 
- Refs are used in a parent component to call a child component's methods (to force error check and to focus on specific input fields). This could probably be done by refering directly to the child component's DOM elements instead.
