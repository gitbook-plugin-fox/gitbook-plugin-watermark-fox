require([
   'gitbook'
], function (gitbook) {
   var watermarkConfig = {};
   gitbook.events.bind('start', function (e, config) {
      let defaultConfig = {
         content: 'www.gitbook.com',
         width: 200,
         height: 200,
         fontColor: '#d0d0d0',
         enable: true
      };
      let customConfig = config['watermark-fox'];
      for (let key of Object.keys(defaultConfig)) {
         watermarkConfig[key] = customConfig[key] ?? defaultConfig[key];
      }
   });
   gitbook.events.bind('page.change', function (e) {
      if (watermarkConfig.enable) {
         const watermark = new WatermarkPlus.Watermark(watermarkConfig);
         watermark.create();
      }
   });
});