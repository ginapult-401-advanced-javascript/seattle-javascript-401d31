'use strict'

require('./_create-gallery.scss')

module.exports = {
  template: require('./create-gallery.html'),
  controllerAs: 'createGalleryCtrl',
  controller: ['$log', 'galleryService', function($log, galleryService) {
    this.$onInit = () => {
      $log.debug('CreateGalleryController')
      this.gallery = {}

      return this.createGallery = () => {
        return galleryService.createGallery(this.gallery)
        .then(() => {
          let res = this.gallery
          this.gallery.name = null
          this.gallery.desc = null
          return res
        })
      }
    }
  }]
}