# Dropdown Component Documentation

This component provides a user-friendly dropdown menu for selecting options.

## Props

Required:

:options-array: An array of objects representing the dropdown options. Empty array will cause an error.


Optional:

:dropdown-name: A string to display as the label for the dropdown button. Defaults to "Button".

selected-option: A string representing the initially selected option's value.

is-disabled: Disables the button

icon-hide-btn: Hides icon on button

icon-hide-list: Hides icons on listed options

icon-hide: Hides icons on button and listed options


## Events

@selected-option: Emits the value of the selected option when a choice is made.
