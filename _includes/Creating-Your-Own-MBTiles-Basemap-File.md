###Creating Your Own Mobile Basemap

The OpenMapKit has the ability to host map tiles on the phone even when it is disconnected from the Internet. This section shows you how to generate offline tiles to be used on the phone.

MBTiles is a format made by the folks at [Mapbox](https://www.mapbox.com/) that allows you to store PNG or vector tile sets as a single file. An MBTiles file is actually a SQLite database that follows a specific schema. Check out the [spec](https://github.com/mapbox/mbtiles-spec) to learn more about it.

For the purpose of OpenMapKit, you can easily scrape PNG tiles from an online endpoint and store them in an MBTiles file with a few NodeJS command-line tools.

#### Scraping an Online HTTP Tile Endpoint

A node module called [tl](https://www.npmjs.com/package/tl) allows you to scrape an HTTP map tile endpoint for PNG tiles and stuffs them into an MBTiles file. You can install it with the following command:

```sh
npm install -g tl mbtiles tilelive-http
```

Now you will have `tl` installed as a globally accessible executable in your shell environment. Switch to whatever directory you want to save your MBTiles file to. The following command will scrape tiles from the Humanitarian OSM Basemap endpoint for Dhaka, Bangladesh.

```sh
tl copy -z 13 -Z 19 -b '90.375853 23.700965 90.437307 23.754632' 'http://c.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png' mbtiles://./dhaka.mbtiles
```

* `-z` is the minimum zoom
* `-Z` is the maximum zoom
* `'90.375853 23.700965 90.437307 23.754632'` is the bounding box
    * `southWestLng southWestLat northEastLng northEastLat`
    * Check out [BBoxFinder.com](http://bboxfinder.com/) to help you get this bounding box coordinate set.
* `'http://c.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'` is the http endpoint for the tiles
* `mbtiles://./dhaka.mbtiles` is the MBTiles file the scraped PNGs will be saved to

#### Pre-generated Offline MBTiles Basemaps

Below is a list of links to previously generated MBTiles files to get you started. All you need to do to use them is to drag and drop them into the `openmapkit/mbitles` directory on your Android phone.

#### Humanitarian OpenStreetMap

* [Dvizarasekwa, Harare, Zimbabwe - Mar 24 2015](https://www.dropbox.com/s/bcyg1qkdl502evn/dvziarasekwa-hot-all20.mbtiles)
    * Zoom 12 - 22 (Actually only fetched through 20)
    * Bounding Box: 30.885143 -17.824980 30.967541 -17.784733
    * Command: `tl copy -z 13 -Z 22 -b '30.885143 -17.824980 30.967541 -17.784733' 'http://a.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png' mbtiles://./dvizarasekwa-hot.mbtiles`
* [Dhaka, Bangladesh - Jan 2 2015](https://www.dropbox.com/s/0vgkkgtcnwpjzs1/dhaka2015-01-02.mbtiles)
    * Zoom 13 - 19
    * Bounding Box: 90.375853 23.700965 90.437307 23.754632

#### Standard OpenStreetMap

* [Dvizarasekwa, Harare, Zimbabwe - Mar 6 2015]
    * Zoom 13 - 20
    * Bounding Box: -17.820934970719602 30.90642929077148 -17.788573952710493 30.944967269897
    * Command: `tl copy -z 13 -Z 20 -b '30.885143 -17.824980 30.967541 -17.784733' 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png' mbtiles://./dvizarasekwa-osm.mbtiles`

* [Harare, Zimbabwe - Mar 6 2013]
    * Zoom 13 - 20
    * Bounding Box: 
    * Command: `tl copy -z 13 -Z 20 -b '30.390930 -18.195434 31.709290 -17.551736' 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png' mbtiles://./harare-osm.mbtiles`

#### Preview MBTiles Locally

You can use [tessera](https://github.com/mojodna/tessera) to locally serve your MBTiles file to allow you to preview the basemap you have scraped.

To install:

```sh
npm install -g tessera
npm install -g mbtiles
```

Then, `cd` to the directory with your MBTiles file. To serve, execute:

```sh
tessera mbtiles://./whatever.mbtiles
```