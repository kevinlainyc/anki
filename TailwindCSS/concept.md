# IT::TailwindCSS::Concept

## What is Tailwind CSS, how does it compare to traditional css frameworks like Bootstrap?

%

- Bootstrap: Bootstrap is a comprehensive and feature-rich framework that provides a set of **pre-designed components, layouts, and utilities**. It follows a **more opinionated** approach, offering a ready-to-use solution out of the box.
  - polular and older
  - hight-level pre-designed components
  - look very similar
  - costomizable through sass
  - easier for beginners
  - less classes in HTML
- Tailwind: Tailwind takes a different approach by providing a **utility-first** CSS framework. It focuses on providing a vast set of small utility classes that you can **combine to create custom designs and layouts**. Tailwind encourages building unique designs without relying on predefined styles.
  - newer frawmework and gain popularity
  - low-level classes for fast ui development
  - more flexible and uniqueness
  - customizable with directives & functions
  - in depth knowledge of css is required
  - a lot of classes in HTML

## define color in tailwind css

for text, background, text underline, border, divide, outline, box shadow, accent, arbitrary.

%

- text: text-{color}
- background: bg-{color}
- text underline: underline decoration-{color}
- border: border-[options] border-{color}
- divide: divide-{x-[options]|y-[options]} divide-{color}
- outline: outline-[options] outline-{color}
- box shadow: shadow-[options] shadow-{color}
- accent: accent-{color}
- arbitrary: bg-[#hex] bg-[rgb(255,0,0)] bg-[rgba] bg-[hsl] bg-[hsla] bg-[color keyword]
- {color}
  - eg. `bg-red-500`
  - all color need to have a 50 - 900 shades value, except for white and black
  - Default colors: white, black, red, green, blue, orange, yellow, purple, lime, emerald, teal, cyan, indigo, violet, fuchsia, pink, rose, sky, gray, slate, zinc, neutral, stone, amber...
  - Custom colors: define in tailwind.config.js

## container & spacing

- how to define a container and make it center on x/y?
- how to set margin left/right/top/bottom/all on a element?
- how to set padding on a element?
- how to set spacing between x/y?

%

- container: `container mx-auto` or `container my-auto`
- margin: `m-[options]` or `mx-[options]` or `my-[options]` or `mt-[options]` or `mr-[options]` or `mb-[options]` or `ml-[options]` or `m-auto`
- padding: `p-[options]` or `px-[options]` or `py-[options]` or `pt-[options]` or `pr-[options]` or `pb-[options]` or `pl-[options]` or `p-auto`
- spacing: `space-x-[options]` or `space-y-[options]`

## font in tailwind css

- font family
- font size
- font weight
- letter spacing
- text align
- text decoration
  - decoration style
  - decoration offset
- text transform

%

- font family: `font-[sans|serif|mono]`
- font size: `text-[xs|sm|...]`
- font weight: `font-[light|normal|medium|semibold|bold|extrabold|black]`
- letter spacing: `tracking-[tighter|tight|normal|wide|wider|widest]`
- text align: `text-[left|center|right|justify]`
- text decoration (eg. underline): `underline decoration-[option] decoration-{color}`
  - decoration style: `underline decoration-[solid|double|dotted|dashed|wavy]`
  - decoration offset: `underline-offset-[options]`
- text transform: `uppercase|lowercase|capitalize|normal-case`

## width and height

- width
- percentage
- width of the viewport
- 100% of container
- min/max content
- arbitrary width
- max width
- height (most of the same options as width)
- min/max height
- full screen height

%

- width: w-[2|3|4|5|...]
- percentage: w-[1/4] 1/4 percent of it's container
- width of the viewport: w-screen
- 100% of container: w-full
- min/max content: w-min-content w-max-content
- arbitrary width: w-[300px]
- min width: min-w-[0|full|min|max|...]
- max width: max-w-[lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|full]
- height (most of the same options as width)
- min/max height: min-h-[0|full|min|max|...] max-h-[0|full|min|max|...]
- full screen height: h-screen

## positioning

- position
- top left corner
- top right corner
- bottom left corner
- bottom right corner
- span top edge
- span left edge
- span right edge
- span bottom edge
- display classes
- z-index
- float

%

- position: `static|fixed|absolute|relative|sticky`
- top left corner: `top-0 left-0`
- top right corner: `top-0 right-0`
- bottom left corner: `bottom-0 left-0`
- bottom right corner: `bottom-0 right-0`
- span top edge: `inset-x-0 top-0 h-16`
- span left edge: `inset-y-0 left-0 w-16`
- span right edge: `inset-y-0 right-0 w-16`
- span bottom edge: `inset-x-0 bottom-0 h-16`
- display classes: `hidden|block|inline|inline-block|flex|inline-flex|grid|inline-grid|contents|list-item`
- z-index: `z-[0|10|20|30|40|50|auto]`
- float: `float-[right|left|none]`

## background and shadow

- background
- shadow
- mix blend

%

- background: `bg-[options]`
  - size: `bg-[auto|cover|contain]`
  - repeat: `bg-[repeat|no-repeat|repeat-x|repeat-y|repeat-round|repeat-space]`
  - position: `bg-[bottom|center|left|left-bottom|left-top|right|right-bottom|right-top|top]`
- shadow: `shadow-[options] shadow-[color options]`
  - color: `shadow-[color]`
  - offset: `shadow-[offset]`
  - opacity: `shadow-opacity-[options]`
  - blur: `shadow-[blur]`
  - spread: `shadow-[spread]`
  - inner: `shadow-[inner]`
- mix blend: `mix-blend-[normal|multiply|screen|overlay|...]`

## border, border radius & outline

- border
  - border radius
- outline

%

- border: `border-[l|r|t|b|x|y]-[2|4|8]`
  - radius: `rounded-[none|sm|md|lg|xl|2xl|3xl|full]`
- outline: `outline-[0|1|2...] outline-[width]:[0px|1px|2px...]`

## filters

- filter allows you to apply graphical effects like blurring or color shifting to an element(img)
- blur
- brightness
- contrast
- grayscale
- invert
- sepia
- hue rotate

%

- blur: `blur-[none|sm|md|lg|xl|2xl|3xl|full]`
- brightness: `brightness-[0|50|75|90|95|100|105|110|125|150|200]`
- contrast: `contrast-[0|50|75|100|125|150|200]`
- hue rotate: `hue-rotate-[0|15|30|60|90|180|270]`
- grayscale: `grayscale`
- invert: `invert`
- sepia: `sepia`