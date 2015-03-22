feather.config.merge({
	staticMode: true,	//开启静态资源内联模式
	autoCombine: true, 	//开启静态资源内联模式后，使用autocombine可自动合并页面上的零散资源

	md5Query: {
		open: true,
		name: 'version'
	}
});