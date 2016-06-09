## Creating Your Own Basemap

The OpenMapKit has the ability to host map tiles on the phone even when it is disconnected from the Internet. This section shows you how to generate offline tiles. Previously, basemap tiles had to be scraped from an endpoint and then manually added to a mobile device. Now the HOT Export tool can be used to add basemap tiles to POSM and then deploy them to mobile devices and field papers. Both of those are covered in the [Walkthrough Documentation](http://openmapkit.com/docs_walkthrough.html).

## HOT Export Tool

The HOT Export Tool is used to get the larger Area of Interest data from OpenStreetMap onto the POSM. The two main components that it packages for you are 1) OSM PBF, the vector data,  and 2) MBTiles, basemap tiles.

POSM itself generates tiles, called _POSM Carto_ on the device itself, but it is often useful to have the HOT Export Tool fetch tiles for you on the internet as well--especially if you want to have a satellite basemap.

Currently, the POSM HOT Export Tool can be reached at:

http://ec2-52-32-62-7.us-west-2.compute.amazonaws.com

Name and describe your export. On the right, make sure you have selected _Select Export Area_, and draw a bounding box to server as your Area of Interest.

![Describe Export](images/a-hot1.png)
*Describe an Export*

Choose the file formats you want. You want to at least have OSM PBF. OSMAnd OBF is a bonus, because you can load your extract in OSMAnd. If you want the export tool to generate an MBTiles basemap from the internet, check _MBTiles_.

![File Formats](images/a-hot2.png)
*File Formats*

If you would like to have an MBTiles basemap fetched from the internet _(optional)_, you need to specify the tile template URL and zoom levels to be fetched. This task by far takes the longest, and the generated MBTiles file can be _huge_... You can use [Geofabrik's Tile Calculator](http://tools.geofabrik.de/calc/) to help you determine how big your MBTiles is likely to be.

![MBTiles Source URL](images/a-hot3.png)
*MBTiles Source URL*

Finally, you need to __Create Export__.

![Export Details](images/a-hot4.png)
*Export Details*

The export begins by fetching OSM data from the Overpass API. This may take a while, and if you are creating  MBTiles, it may even take hours. You will be emailed when the export is complete.

![Beginning of Export](images/a-hot5.png)
*Beginning of Export*

Once your export is completed, right click on __POSM Bundle__ and copy the URL.

![Completed Export](images/a-hot6.png)
*Completed Export*
