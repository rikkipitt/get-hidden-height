# get-hidden-height

`v.1.0.0`

`getHiddenHeight` is a function that takes a currently hidden element and returns its height as if it were visible. It works by invisibly cloning the element within its parent, measuring the height of the clone, then removing the clone from the parent.

This is useful for animating the height of a hidden element while making it visible.

## Usage

```
getHiddenHeight(el, overrideStyles);
```

**`el`** - is the DOM element you want the height for.

**`overrideStyles`** - (optional) is an object of styles you want to apply to the element during its height calculation. This is useful if you need to constrain properties like `max-height` when the element is visible. By default `max-height` is set to `none` and will calculate the height based on this.

**Return Value** Returns the height of the element as an integer or `null` if the element does not exist.

## Caveats

- The parent container of the element must be visible for the calculation be accurate.


If you find any bugs or problems with this function, please create an issue and/or submit a pull request.