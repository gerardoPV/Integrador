var PatientView = function(patient) {

    this.initialize = function() {
        this.$el = $('<div/>');
    };

    this.render = function() {
        this.$el.html(this.template(patient));
        return this.$el.html();
    };

    this.initialize();

}
