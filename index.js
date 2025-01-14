module.exports = {
  book: {
    assets: './assets',
    js: [
      'watermark.min.js'
    ],
  },
  hooks: {
    'page:before': function(page) {
      var _label = 'File Modify: ',
          _format = 'YYYY-MM-DD HH:mm:ss',
          _copy = 'powered by Gitbook'
      if(this.options.pluginsConfig['pagefooter-fox']) {
        _label_custom = this.options.pluginsConfig['pagefooter-fox']['modify_label'];
        _format_custom = this.options.pluginsConfig['pagefooter-fox']['modify_format'];
		
		var _override_copyright = this.options.pluginsConfig['pagefooter-fox']['override_copyright'];
        var _c = this.options.pluginsConfig['pagefooter-fox']['copyright'];
		if(!!_override_copyright){
			_copy = _c ? _c : _copy;
		}else{
		    _copy = _c ? _c + ' all right reserved，' + _copy : _copy;	
		}
      }
      var _copy = '<span class="copyright">'+_copy+'</span>'
	  var str = _copy;
	  str = ' \n\n<footer class="page-footer">' + _copy;
	  if(!!_label_custom||!!_format_custom){
		   _label = _label_custom || _label;
		   _format = _format_custom || _format;
		    str +=  '<span class="footer-modification">' + _label + '\n{{file.mtime | date("' + _format + '")}}\n</span>';  
	  }
	  str += '</footer>';
      page.content = page.content + str;
      return page;
    }
  }
};
