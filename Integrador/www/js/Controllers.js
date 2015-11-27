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

var RegisterView = function () {

    this.initialize = function () {
        this.$el = $('<div/>');
    };

    this.render = function () {
        this.$el.html(this.template());
        return this.$el.html();
    };

    this.initialize();

}

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

var QuizView = function () {

    this.initialize = function () {
        this.$el = $('<div/>');
    };

    this.render = function () {
        this.$el.html(this.template());
        return this.$el.html();
    };

    this.initialize();
}

var PatientView = function (patient) {

    this.initialize = function () {
        this.$el = $('<div/>');
    };

    this.render = function () {
        this.$el.html(this.template(patient));
        return this.$el.html();
    };

    this.initialize();

}