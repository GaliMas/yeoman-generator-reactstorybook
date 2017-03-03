var Generator = require('yeoman-generator');

module.exports = class extends Generator {
	prompting() {
		return this.prompt({
				type    : 'input',
				name    : 'name',
				message : 'Your component name:'
			}).then((answers) => {
				var nameComponent = answers.name, nameComponentStyle = answers.name + 'Style';
				this.fs.copyTpl(
					this.templatePath('index.js'),
					this.destinationPath( nameComponent + '/index.js'),
					{
						nameComponent: nameComponent,
						nameComponentStyle: nameComponentStyle
					}
				);
				this.fs.copyTpl(
					this.templatePath('style.js'),
					this.destinationPath( nameComponent + '/style.js'),
					{ nameComponentStyle: nameComponentStyle }
				);
				this.fs.copyTpl(
					this.templatePath('style-stories.js'),
					this.destinationPath( nameComponent + '/style-stories.js'),
					{ nameComponent: nameComponent }
				);
		});
	}
};