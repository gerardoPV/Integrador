var LoginView = function () {

    this.initialize = function () {
        this.$el = $('<div/>');
    };

    this.render = function () {
        this.$el.html(this.template());
        return this.$el.html();
    };

    this.initialize();
}