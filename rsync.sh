#!/bin/bash
rsync -azut --progress --exclude-from=app/ignore.rsync -e ssh . vm.renoirboulanger.com:/var/sites/renoirboulanger/web/styleguide
