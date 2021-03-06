# OpenMapKit Website

## Build

If you do not have `bundle` and `jekyll` installed, you can:

```
gem install jekyll bundler
```

Install gem plugins:

```
bundle install
```

Start jekyll dev server:

```
bundle exec jekyll serve
```

To watch for changes, and regenerate automatically:

```
bundle exec jekyll serve --watch
```

To simply build your project without serving:

```
bundle exec jekyll build
```

## Deploy

http://openmapkit.org is hosted by Github Pages. This is a Jekyll project that is built automatically by Github from the [gh-pages](https://github.com/AmericanRedCross/OpenMapKitWebsite/tree/gh-pages) branch.

The Jekyll build is also committed to the `_site` subdirectory. This subdirectory is in turn committed to the root of the `dist` branch. This build is used as a submodule in posm-local-home, allowing offline usage.

To commit the `_site` directory to the `dist` branch:

```
git subtree push --prefix _site origin dist
```

This command should be done whenever you want to publish your build to the POSM offline build. This [gist](https://gist.github.com/cobyism/4730490) explains more details about committing a subdirectory to a different branch.

----

This Jekyll project uses [theDocs](http://shamsoft.net/theDocs/index.html) template.

[CC-BY 4.0](http://creativecommons.org/licenses/by/4.0/) License
