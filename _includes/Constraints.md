# Constraints

As of the [OpenMapKit Android 1.1 release](https://github.com/AmericanRedCross/OpenMapKitAndroid/releases/tag/v1.1), we have added the functionality known as constraints. In effect, you can configure, both globally and on a form-by-form basis the behavior of the tagging user experience. 

## Configuration Files

OpenMapKit Android comes with a [default.json](https://github.com/AmericanRedCross/OpenMapKitAndroid/blob/master/app/src/main/assets/constraints/default.json) configuration file as well as an example form-specifc JSON file called [Buildings.json](https://github.com/AmericanRedCross/OpenMapKitAndroid/blob/master/app/src/main/assets/constraints/Buildings.json). These files come with the application, and they are automatically copied from the app's assets into the OpenMapKit constraints directory in your external storage. You can later edit these files and update the constraints for your custom purposes.

	/sdcard/openmapkit/constraints/

The `default.json` file defines constraints that are to be applied to all surveys, and the `Buildings.json` is an example of a form-specific configuration that applies only to the Buildings form.

The form-specific configurations are named after the __form title__ of your XLSX form.

![](https://cloud.githubusercontent.com/assets/556367/15690925/d28fac7a-273a-11e6-8677-5d07728c29c7.png)

You can also see this title in OpenMapKit Server.

![](https://cloud.githubusercontent.com/assets/556367/15691046/74a3bdda-273b-11e6-80fd-796915978b6c.png)

## JSON Schema

[default.json](https://github.com/AmericanRedCross/OpenMapKitAndroid/blob/master/app/src/main/assets/constraints/default.json) is a good file for you to look at to see how to build your own constraint configuration.

{% highlight json %}
{
  "addr:city": {
    "default": "Sacramento"
  },
  "addr:housenumber": {
    "numeric": true
  },
  "addr:state": {
    "default": "CA"
  },
  "addr:postcode": {
    "numeric": true
  },
  "amenity": {
    "hide_if": {
      "building": "residential",
      "shop": true,
      "office": true
    },
    "custom_value": true
  },
  "building": {
    "default": "yes"
  },
  "building:levels": {
    "numeric": true,
    "custom_value": true
  },
  "cuisine": {
    "show_if": {
      "amenity": true
    }
  },
  "network": {
    "select_multiple": true
  },
  "office": {
    "hide_if": {
      "amenity": true,
      "shop": true
    }
  },
  "opening_hours": {
    "select_multiple": true
  },
  "operator": {
    "select_multiple": true,
    "custom_value": true
  },
  "religion": {
    "show_if": {
      "amenity": "place_of_worship"
    }
  },
  "shop": {
    "custom_value": true,
    "hide_if": {
      "building": "residential",
      "amenity": true,
      "office": true
    }
  },
  "source": {
    "implicit": "survey"
  }
}
{% endhighlight %}

It is a simple JSON object where the keys are the names of the OSM tag keys that have constraints applied. The values are the name of the constraint, with the condition of the constraint.

For example, the `religion` OSM tag is only shown in OpenMapKit Android if you have selected `place_of_worship` for your `amenity` tag.

```json
"religion": {
	"show_if": {
	  "amenity": "place_of_worship"
	}
}
```

Your form-specific JSON files are structured exactly the same, and they take a cascading effect, over-riding constraints for the same tags in `default.json`.

## Constraint Types

The following are all of the types of constraints you can apply on an OSM tag key.

### custom_value

For tags that have a select one or a select many interface, if you enable the `custom_value` constraint to true, the user can input a custom tag value in addition to the pre-defined choices.

![Custom Value UI](https://cloud.githubusercontent.com/assets/556367/12104460/71739ed2-b300-11e5-94fd-914a7bc4a7f5.png)

This is a `boolean` type constraint. You simply have a `"custom_value": true` for our given OSM tag.

```json
"building": {
  "custom_value": true
}
```

### default

A `default` constraint for a tag applies a default value for a given OSM tag. The user can change that value if she chooses.

![default](https://cloud.githubusercontent.com/assets/556367/15692147/a74504fa-2741-11e6-87d5-11fbe394dea2.png)

This is a `string` type constraint.

```json
"addr:city": {
  "default": "Sacramento"
}
```

### hide_if

A `hide_if_ constraint for a tag hides the given tag from the user interface if the containing tag exists or has a certain value.

This can be a `boolean` or a `string` type constraint. A `hide_if` constraint can have both. If the constraint condition is `true`, the constraint applies regardless of what the conditional tag value is. Or, if the constraint condition has a `string` value, it applies only if the dependent tag key and value is true.

```json
"shop": {
  "hide_if": {
    "building": "residential",
    "amenity": true,
    "office": true
  }
}
```

This constraint applies for a `shop`. A `shop` is hidden if `building` is `residential` or if a value is given for `amenity` or `office`.

### implicit

An `implicit` constraint gives a tag a specified value and does not show the tag in the user interface to the user. The OSM Element is tagged with an implicit key / value with no user intervention.

This is a `boolean` type constraint.

```json
"source": {
  "implicit": "survey"
}
```

### numeric

A `numeric` constraint makes the numeric keyboard pop up by default for a question. The user still can toggle back to an alpha keyboard.

![numeric](https://cloud.githubusercontent.com/assets/556367/15692507/b73fb48e-2743-11e6-8288-8739553609d9.png)

This is a `boolean` type constraint.

```json
"addr:housenumber": {
  "numeric": true
}
```

### required

A `required` constraint forces the user to answer a given question. You will know it is a required question when you see __Required__ in the top right corner or the screen.

![required](https://cloud.githubusercontent.com/assets/556367/15444551/e8fb25ee-1ea6-11e6-8572-a2a031f26b6d.png)

If the user does not answer the tag question, the following Snackbar will divert the user from bouncing back into ODK Collect.

![required notification](https://cloud.githubusercontent.com/assets/556367/15692919/2f0325d0-2746-11e6-9304-36fb23886504.png)

Clicking on OK will scroll you to the first missing required tag.

This is a `boolean` type constraint.

```json
"addr:street": {
  "required": true
}
```

### select_multiple

A `select_multiple` constraint allows the user to select multiple values for a given tag. These tag values are `;` delimited, and this is the standard OpenStreetMap convention for having multiple values for a tag.

![select_multiple](https://cloud.githubusercontent.com/assets/556367/15693150/ede2b41a-2747-11e6-833a-a562c8f88bc5.png)

This is a `boolean` type constraint.

```json
"network": {
  "select_multiple": true
}
```

### show_if

`show_if` is the opposite of `hide_if`. A tag is hidden unless the constraint condition is met.

```json
"religion": {
  "show_if": {
    "amenity": "place_of_worship"
  }
}
```

In this example, the `religion` tag is only shown if the `amenity` is a `place_of_worship`.

This is a `boolean` or `string` type constraint.

