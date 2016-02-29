## OMK Walkthrough
This walkthrough is intended to take you through the entire process of setting up and using the OMK application from start to finish.

The overview of the process is:

1.  Creating and Adding a Survey
    *   Directly to Android Device
    *   To Ona.io*
2.  Creating and Adding a Basemap (for Offline Use)
    *   Directly to Android Device
3.  Configuring Application with Custom Surveys and Basemaps
    *   On local Android Device
    *   With Ona.io*
4.  Collecting Data Using Surveys
    *   Using Android Device
5.  Verifying Data in JOSM
6.  Uploading data back to OSM

*Using Ona.io as part of this process is possible but is not recommended as POSM ([Portable Open Street Map](http://github.com/AmericanRedCross/posm)), the umbrella project OMK is under, has become the priority and documentation for Ona will not be updated in the future.

### Creating and Adding a Survey

#### Create or Modify XLSForm using Excel
Creating forms for ODK or OMK can be as simple or complex as the survey itself. In most cases this step can be completed in under an hour. 

Setting up the basic survey form:

![](https://cloud.githubusercontent.com/assets/506078/7144405/1a1ae4a6-e29a-11e4-9467-ccc7404feaf5.png) |

Creating a drop down list of surveyor names:

![](https://cloud.githubusercontent.com/assets/506078/7144404/1a195dc0-e29a-11e4-9034-9da6ea439c5f.png) |

Creating survey questions consistent with Open Street Map tags:
![](https://cloud.githubusercontent.com/assets/506078/7144403/1a194880-e29a-11e4-923a-f846cf81f379.png) |

A similar example can be viewed and downloaded [here](https://docs.google.com/spreadsheets/d/11H4-mGYTS61GLjSbVoTbmhoI5DjlF5fcBwNwQcvd2Go/edit#gid=0)

More detailed documentation for how to correctly create a survey form can be found in the [Creating Surveys for OMK](http://openmapkit.com/docs_odkformsforomk.html) tab in the **Users** documentation. 

#### Configure XLSForm in ODK Form Server
In order to create a form that is usable in the OMK application, you have to convert, or configure, your XLSForm (used by Excel) to XForm XML (used by the application). There are two ways to configure your Excel based survey for OpenMapKit; pyxform, for POSM and for your local Android device, or Ona.io.

##### Command Line XLSForm to XForm Using pyxform

You can generate XForm XML from XLSForms easily on the command line using pyxform.

*  Clone the [pyxform repo](https://github.com/onaio/pyxform) and checkout the onaio-osm branch.

``` 
git clone http://github.com/onaio/pyxform.git
```

*  Navigate to the pyxform repo on your local computer using `cd`

```
cd pyxform
``` 

*  Checkout the onaio-osm branch

```
git checkout onaio-osm
``` 

Before you can run the python script that will convert the XLSForm to XForm XML, you will need to install `xlrd` - a python package that is for reading data and formatting information from older Excel file formats, i.e. xls.

```
easy_install pip
``` 

```
pip install xlrd
``` 

The python script that will do the command line conversion is `pyxform/xls2xform.py`. You can then convert an xls form as such:

```
python pyxform/xls2xform.py path-to-xls.xls outpath-xform-path.xml
``` 

Make sure that in the outpath you specify the name you want to give your form with the .xml extension. 

Now you can drag-n-drop the generated xform XML file onto your android device at odk/forms/


##### Configure XLSForm to XForm XML using Ona.io

In contrast to using the pyxform tool, Ona.io will convert the XLSForm to a XForm XML automatically.

Sign up for an Ona account in order to publish your survey.
![](https://cloud.githubusercontent.com/assets/506078/7144402/1a193dea-e29a-11e4-8e37-6439f1a1c8c0.png) 

Once you have the forms uploaded you can see your forms in the Ona system.
![](https://cloud.githubusercontent.com/assets/506078/7144401/1a104474-e29a-11e4-89a1-6cbee9acdb44.png) 

### Creating and Adding Custom Basemaps

Documentation [here](http://openmapkit.com/docs_creatingbasemaps.html)

### Configure Application for Custom Surveys and Basemaps

#### Configure Form Server in ODK Collect App
If you used Ona to create your survey, you will need to configure the app to connect to the Survey URL. If you used the pyxform tool you can skip this step as the survey is already on your device.

{:.imageSize}
![](https://cloud.githubusercontent.com/assets/506078/7143725/e08011e8-e295-11e4-8df4-53db84657b5c.png) |

Go to **settings** and adjust the Server URL as per the below image

{:.imageSize}
![](https://cloud.githubusercontent.com/assets/506078/7143730/e0955940-e295-11e4-8152-f5128f0374f1.png) |

Enter the name of your Ona account after ```http://ona.io/```
E.g. ```http://ona.io/robertbanick```

{:.imageSize}
![]( https://cloud.githubusercontent.com/assets/506078/7143729/e08654d6-e295-11e4-9bca-abbb9f074a80.png) |

Now enter your username and password

##### Download forms from ODK Form Server

Go to **Get Blank Form** to download your completed forms from the OMK Form Server. If you used the pyxform tool you can skip this step as well.

{:.imageSize}
![]( https://cloud.githubusercontent.com/assets/506078/7143731/e0964bde-e295-11e4-850b-b41c01306b51.png) |

{:.imageSize}
![]( https://cloud.githubusercontent.com/assets/506078/7143732/e098c8a0-e295-11e4-871d-cdd6cc18747b.png) |

{:.imageSize}
![]( https://cloud.githubusercontent.com/assets/506078/7143733/e099c5b6-e295-11e4-8143-c2854cf093c7.png) |

##### Copy OSM Data to OMK App Directory

We need to download the map background file that goes along with the server. Plug your android phone into a computer with the map file.

{:.imageSize}
![]( https://cloud.githubusercontent.com/assets/506078/7143552/1cf3858e-e295-11e4-8c13-66cd77653a1e.png) |

{:.imageSize}
![]( https://cloud.githubusercontent.com/assets/506078/7143550/1ccd2682-e295-11e4-8fc7-07327a62a3c1.png) |

Put the .mbtiles file under the *openmapkit/mbtiles* folder. Now when you boot up OpenMapKit the map should load when your GPS locates you in the map's area.

##### Configure OSM Data in OMK App

{:.imageSize}
![]( https://cloud.githubusercontent.com/assets/506078/7143739/e0b5c284-e295-11e4-894e-72a68e4d7373.png) |

This option selects the actual OSM data (not the map) that you'll be editing

{:.imageSize}
![]( https://cloud.githubusercontent.com/assets/506078/7143740/e0c38054-e295-11e4-83c7-84211150720e.png) |

This option selects the OSM background map you'll be using. Note that it defaults to the Online Humanitarian style unless you specify otherwise. If you do not have a strong data connection, you can use the custom, offline basemap you created using ```tilelive```. 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
{:.imageSize}
![]( https://cloud.githubusercontent.com/assets/506078/7143741/e0c3eb20-e295-11e4-8ae2-4b9e8dd615df.png) |

{:.imageSize}
![]( https://cloud.githubusercontent.com/assets/506078/7143743/e0c56306-e295-11e4-8f00-191cd286e070.png) |

{:.imageSize}
![]( https://cloud.githubusercontent.com/assets/506078/7143742/e0c46262-e295-11e4-9a87-eda6c4c94170.png) |

{:.imageSize}
![]( https://cloud.githubusercontent.com/assets/506078/7143745/e0dbe70c-e295-11e4-8859-d5aa4676cd32.png) |

### Collect Data Using Surveys

##### Start Blank form in ODK Collect

{:.imageSize}
![]( https://cloud.githubusercontent.com/assets/506078/7143725/e08011e8-e295-11e4-8df4-53db84657b5c.png) |

{:.imageSize}
![]( https://cloud.githubusercontent.com/assets/506078/7143746/e10a4426-e295-11e4-857f-932854bfd6b1.png) |

{:.imageSize}
![]( https://cloud.githubusercontent.com/assets/506078/7143734/e09dfb36-e295-11e4-85b5-c6f7d9107b3c.png) |

{:.imageSize}
![]( https://cloud.githubusercontent.com/assets/506078/7143735/e0ab1320-e295-11e4-970a-2098b7d98b3c.png) |

{:.imageSize}
![]( https://cloud.githubusercontent.com/assets/506078/7143736/e0ab7f90-e295-11e4-9835-6eedc6beda0e.png) |

{:.imageSize}
![]( https://cloud.githubusercontent.com/assets/506078/7143737/e0ae9540-e295-11e4-8b4a-2a44d0e58618.png) |

##### Continue Form in OMK App

{:.imageSize}
![]( https://cloud.githubusercontent.com/assets/506078/7143738/e0aff584-e295-11e4-9438-0490e06decfd.png) |

{:.imageSize}
![]( https://cloud.githubusercontent.com/assets/506078/7143811/41619680-e296-11e4-94c7-6e6abbd6f1a9.png) |

You can click on any feature on your map to edit it.

{:.imageSize}
![]( https://cloud.githubusercontent.com/assets/506078/7143813/41672dac-e296-11e4-943c-a46cff5ec395.png) |

{:.imageSize}
![]( https://cloud.githubusercontent.com/assets/506078/7143814/4167b812-e296-11e4-9301-52f662c61f94.png) |

{:.imageSize}
![]( https://cloud.githubusercontent.com/assets/506078/7143816/416b2074-e296-11e4-9a77-87f3c998d6bc.png) |

{:.imageSize}
![]( https://cloud.githubusercontent.com/assets/506078/7143818/41749b54-e296-11e4-80d3-9fd211ac7d3c.png) |

{:.imageSize}
![]( https://cloud.githubusercontent.com/assets/506078/7143823/418bc694-e296-11e4-92c4-9acf989c95e9.png) |

##### Complete Form in ODK Collect App

{:.imageSize}
![]( https://cloud.githubusercontent.com/assets/506078/7143824/418dea64-e296-11e4-8939-3fc81b30facd.png) |

{:.imageSize}
![]( https://cloud.githubusercontent.com/assets/506078/7143825/418fd0d6-e296-11e4-9e9e-1e9c4af0ac77.png) |

Click on **Send Finalized Form(s)** to get to the upload dialogue.

##### Upload Form Data in ODK Collect App

{:.imageSize}
![]( https://cloud.githubusercontent.com/assets/506078/7143826/41946380-e296-11e4-9a4f-0c4ef0ed2e1e.png) |

Select all the forms you want or click **Toggle All**. When you're read click **Send Selected** to upload your completed data to the server.

##### View Form Data on ODK Collect Server
*Not possible in new Ona version*


{:.imageSize}
![]( https://cloud.githubusercontent.com/assets/1583376/11027822/081f2a28-86e1-11e5-8e1c-dbf0bfa9e1bc.png) |

{:.imageSize}
![]( https://cloud.githubusercontent.com/assets/1583376/11027823/088ddacc-86e1-11e5-8aec-95f6e13532ff.png) |

##### Download Form OSM Data

{:.imageSize}
![]( https://cloud.githubusercontent.com/assets/1583376/11027649/8595c176-86df-11e5-9f92-cb7e01b05697.png) |

Data will download as a collection of .osm files that you will need to manually merge.

### Validate Data

##### Validate/Verify OSM Data in JOSM

{:.imageSize}
![]( https://cloud.githubusercontent.com/assets/1583376/11027634/8515fd6a-86df-11e5-915b-e92d024d0574.png) |
In older versions of JOSM you can merge all the .osm files together with the merge command

{:.imageSize}
![]( https://cloud.githubusercontent.com/assets/1583376/11113707/0d7122e8-8947-11e5-906b-cc7db9193ca3.png) |
In newer versions you will need to merge these files one-by-one

{:.imageSize}
![]( https://cloud.githubusercontent.com/assets/506078/7143557/1d0137c4-e295-11e4-8afb-36f1adf6f80d.png) |

{:.imageSize}
![]( https://cloud.githubusercontent.com/assets/506078/7143559/1d20df84-e295-11e4-898e-86649034c55d.png) |

### Upload OSM Data to OSM

##### Upload OSM Data to OSM

{:.imageSize}
![]( https://cloud.githubusercontent.com/assets/506078/7143538/1c0c3e68-e295-11e4-884b-09c64e5b80aa.png) |