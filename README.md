# Vanilla JS Temperature Converter

## Description

- This a simple widget that requires the user to select one of the four available temperature units and input an amount. The user will then click calculate and the widget will then return three different solutions. Each solution represents one the units that wasn't selected and the conversion is based on the amount specifed by the user.
- Temperature units used:
  - Fahrenheit (default unit)
  - Celsius
  - Rankine
  - Kelvin

## Screenshots

<img src="/img/Screen-Shot-1.png" align="center">
<img src="/img/Screen-Shot-2.png" align="center">
<img src="/img/Screen-Shot-3.png" align="center">

## Key Features

- **Dynamic Input Feature** - This feature will adjust the input field to the correct unit based on the user's selection. This is done through the use of conditionals. Depending on the selected temperature unit this will determine what unit occupies the input field. At the same time this will determine which conversion function to invoke based on the selected unit (ex: selectedUnit = Kelvin => kelvinConversion() will be the function that is invoked once the user clicks the caluculate button).

- **Spinner Animation** - This feature gives the user a more interactive feel while the caluclations are taking place. Once the user clicks calculate the animation will run for two seconds before displaying the three conversions.

## Technologies Used

**Bulit with**:

- JavaScript
- HTML
- Bootstrap

## What was learned

- Gained a better understanding of JavaScript scope and function hoisting.
- Learned how to utilize switch statements.
  - Understanding that switch statments should be implemented in place of lengthy if...else statements.
- Learned how to access specific index from HTML select element.
- Learned how to dynamically change an input field based on user selection.
- Gained a better understanding of Bootstrap.
  - Using special class names to manipulate color and layout of forms.
