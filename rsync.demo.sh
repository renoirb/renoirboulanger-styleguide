#!/bin/bash
rsync -azut --progress --delete --exclude-from=rsync.ignore -e ssh dist/ vm.renoirboulanger.com:/var/sites/renoirboulanger/web/styleguide2
rsync -azut --progress --delete --exclude-from=rsync.ignore -e ssh app/fonts/ vm.renoirboulanger.com:/var/sites/renoirboulanger/web/styleguide2/fonts
rsync -azut --progress --delete --exclude-from=rsync.ignore -e ssh app/img/ vm.renoirboulanger.com:/var/sites/renoirboulanger/web/styleguide2/img
rsync -azut --progress --delete --exclude-from=rsync.ignore -e ssh app/components/ vm.renoirboulanger.com:/var/sites/renoirboulanger/web/styleguide2/components
rsync -azut --progress --delete --exclude-from=rsync.ignore -e ssh app/scripts/ vm.renoirboulanger.com:/var/sites/renoirboulanger/web/styleguide2/scripts
