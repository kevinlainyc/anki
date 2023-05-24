# IT::CSS::Concept

## List all css position values and explain

%

static, fixed, absolute, relative, and sticky

1. Static:
   - Default value.
   - Elements are positioned according to the normal flow of the document.
   - Top, right, bottom, left, and z-index properties have no effect.

2. Fixed:
   - The element is positioned relative to the browser window.
   - It does not move when the page is scrolled.
   - You can use top, right, bottom, and left properties to specify its position.
   - Useful for creating elements that should remain fixed, such as navigation bars.

3. Absolute:
   - The element is positioned relative to its nearest positioned ancestor (an ancestor with a position value other than static) or the initial containing block if no positioned ancestor is found.
   - It is taken out of the normal document flow.
   - Use top, right, bottom, and left properties to specify its position.
   - Other elements will fill the space previously occupied by the absolutely positioned element.

4. Relative:
   - The element is positioned relative to its normal position.
   - It still takes up space in the normal flow of the document.
   - Use top, right, bottom, and left properties to offset it from its normal position.
   - Other elements will not be affected by its position.

5. Sticky:
   - The element is positioned based on the user's scroll position.
   - It behaves like relative positioning until the user scrolls past a specific threshold.
   - Once the threshold is reached, it becomes fixed to its specified position.
   - Use top, right, bottom, and left properties to specify the position when it becomes fixed.
   - Useful for creating elements that stick to a specific position as the user scrolls, such as sticky headers or sidebars.

## css flex box

- how to use, how does it work?
- how to align the main axios?
- how to align the corss sestion?
- how to wrap contents
- how to set initial main size of flex item?

%

- use `display: flex` to define a flex container, any item direct nested inside the container is a **flex item**
  - default align is on row axis
  - `flex-direction: column` set flex container to align on column axis
  - `flex-flow: column wrap` equals flex-direction + flex-wrap
- use `adjustify-content` to change align on the main axis
- use `align-item` to change align on the cross axis
- `flex-wrap: wrap` to auto wrap it's contents
- `flex-basis: 200px`: sets the initial main size of a flex item
  - `flex-grow: [1|2|3|...]`: auto expand when enough space
  - `flex-shink: [1|2|3|...]`: auto shrink to min size

## css grid

- how is grid compare to flex box?
- when to use it?
- how to define a grid container?

%

- introduce to css after flex box (flex box has a bit more browser compatibility)
- it is used to create two-dimensional layout for more complex layout (compare to flex box one dimensional: row or column)
- use `display: grid` to define a grid container
  - `grid-template-rows` used to config row style
  - `grid-template-columns` used to config column style
  - many more
