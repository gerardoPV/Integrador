var HomeView = function (service) {

    this.initialize = function () {
        this.$el = $('<div/>');
    };

    this.render = function () {
        this.$el.html(this.template());
        return this.$el.html();
    };

    this.initialize();
}