# node-random-color-generator

Print a random colored grid to your terminal.

# Usage
Print a grid size 31x9 (width x height) in a random color:
```
node index.js
```
![image](https://github.com/user-attachments/assets/08e519c1-ee2c-4252-8a31-3b42611e4f21)


Print a grid size 31x9 in a random color of specified hue:
```
node index.js red
```
![image](https://github.com/user-attachments/assets/6f9df35d-22d0-404c-87c7-3d9855200b6a)


Print a grid size 31x9 in a random color of specified hue and luminosity:
```
node index.js blue light
```
![image](https://github.com/user-attachments/assets/70026f1e-565b-4a42-ae98-8ea95780e82f)


Print a grid with specific size (e.g. 27x7) in a random color of specified hue and luminosity:
```
node index.js 27x7 green dark
```
![image](https://github.com/user-attachments/assets/24f891f6-9449-4bf1-bd10-6b6a761a9a1b)


# Input Constraints

- Supported hue colors: red, orange, yellow, green, blue, purple, pink
- Supported luminosities: bright, light, dark
- Grid size: Width of grid has to be an uneven number that is equal to or greater 11.
- Grid size: Height of grid has to be an uneven number taht is equal to or greater 5.
