##Creating Surveys


Creating survey forms for OpenMapKit is the same as creating survey forms for ODK. If you're new to designing forms for mobile surveys you might want to start out [here](http://xlsform.org/)

The primary change to the forms for OpenDataKit is the addition of an osm question type. Rather than including a geographic point or shape directly in the data of a form, we instead have an `osm` question that refers to an OSM file that gets created in OpenMapKit.

This is particularly important for two reasons:

1. A survey about a specific, identifiable feature on a map is far more useful than a GPS point. There is no ambiguity about the __place__ you are surveying.

2. Surveys can directly enrich OpenStreetMap by adding tags to OSM features. You can create easily accessible public information for OpenStreetMap in addition to your private, domain specific ODK survey data.

An OSM question is a new "media type", which means that it functions in the survey in the same manor as a photo or video. When an `osm` question is specified in a survey, ODK Collect opens OpenMapKit, providing parameters for the tags to be entered for an OSM feature that you will select.

### Basic OpenMapKit Example Form

If you download this [Basic OpenMapKit Example](https://docs.google.com/spreadsheets/d/11H4-mGYTS61GLjSbVoTbmhoI5DjlF5fcBwNwQcvd2Go/edit?usp=sharing) form, you can see a simple OSM question. This question is named `osm_building`. In the type column, it is defined to be `osm`. It also has a parameter of `building_tags`.

![osm question](https://cloud.githubusercontent.com/assets/556367/7404927/8fcfdbaa-ee9f-11e4-98a8-58b5a74e5433.png)

This parameter is referenced in the _osm sheet_, between choices and settings.

### OSM Sheet

![osm sheet](https://cloud.githubusercontent.com/assets/556367/7404929/9418893c-ee9f-11e4-9249-b684ff33e16a.png)

The _osm sheet_ has three columns: list name, name, and label. This sheet defines the tagging parameters that will be sent to OpenMapKit.

![columns](https://cloud.githubusercontent.com/assets/556367/7406236/e86fcefa-eeb3-11e4-9b71-f90a0e3e593a.png)

__list name__ has two functions. 

1. It defines the set of tags that OpenMapKit will add to an OSM feature.

2. It defines the set of tag values selectable for a given OSM tag. _(optional)_

In the survey sheet, our `osm_building` question had a type parameter of `building_tabs`. In the osm sheet, we have several rows with the _list name_ of `building_tabs`. This is the set of OSM tags the user will answer in OpenMapKit.

The set of OSM tags has a _list name_ suffix of `_tags`. The values in the __name__ column are the tag keys that are recognized in OSM. The values in the __label__ column are the labels that will be presented to the user when entering values for the given OSM tag.

Often times we do not want the user directly typing in values for an OSM tag. Typing in a specific string value is error prone, and if there is a set of possible values that we want for a given tag, we want to present these values as a multiple choice question to the user.

Notice that one of the `building_tags` has the name `building`.

![building_tags](https://cloud.githubusercontent.com/assets/556367/7404922/8c1d221a-ee9f-11e4-8bd8-d289e85a1fa9.png)

We want to give the user multiple choices of values for a building tag. These are the corresponding tag value choices that will be presented to the user in OpenMapKit:

![value choices](https://cloud.githubusercontent.com/assets/556367/7404920/875f2386-ee9f-11e4-9d00-773eb8ac481b.png)

This step is optional, and if you do not provide a set of tag values, the user will manually type in a value for a given question.

Multiple Choice OpenMapKit Tag Question             |  Manual String Value OpenMapKit Tag Question
:-------------------------:|:-------------------------:
![multiple choice question](https://cloud.githubusercontent.com/assets/556367/7404896/31078528-ee9f-11e4-851f-a8943a66584b.png)  |  ![string value question](https://cloud.githubusercontent.com/assets/556367/7404898/37291566-ee9f-11e4-9f23-b5eee42bdfea.png)
