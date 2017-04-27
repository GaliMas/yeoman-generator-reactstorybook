var Generator = require('yeoman-generator');

module.exports = class extends Generator {

	// note: arguments and options should be defined in the constructor.
	constructor(args, opts) {
		super(args, opts);

		// This makes `appname` a required argument.
		this.argument('name', { type: String, required: true });

		// And you can then access it later; e.g.
		this.log(this.options.name);
	}

	prompting() {
		var nameComponent = this.options.name, styledNameComponent = 'Styled' + this.options.name;
		this.fs.copyTpl(
			this.templatePath('index.js'),
			this.destinationPath(nameComponent + '/index.js'),
			{
				nameComponent: nameComponent,
				styledNameComponent: styledNameComponent
			}
		);
		this.fs.copyTpl(
			this.templatePath('style.js'),
			this.destinationPath(nameComponent + '/style.js'),
			{ styledNameComponent: styledNameComponent }
		);
		this.fs.copyTpl(
			this.templatePath('stories.js'),
			this.destinationPath(nameComponent + '/stories.js'),
			{ nameComponent: nameComponent }
		);
		this.fs.copyTpl(
			this.templatePath('test.js'),
			this.destinationPath(nameComponent + '/' + nameComponent + '.test.js'),
			{ nameComponent: nameComponent }
		);
	}
};