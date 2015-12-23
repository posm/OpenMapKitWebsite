cd\_create\_parcel
=================

##### Description

Create a new parcel and parcel history.

##### Parameter(s)

1. project\_id (integer) - ***Required***. Cadasta project id 
2. spatial\_source (character varying) – ***Required***.
Options:
    * digitized
    * survey coordinates
    * recreational gps
    * survey grade gps
    * survey sketch
3. geojson - ![GeoJSON geometry object](./images/osmexampleform1.png)
4.  land\_use (ENUM) - Optional. Type of parcel real estate
Options:
    * Commercial
    * Residential
5.  gov\_pin (character varying) - Optional.
6.  history\_description (character varying) - ***Required***. A description of the parcels history
