// Immediate Function to avoid leaving anything behind in the global scope
(function () {

    LoginView.prototype.template = Handlebars.compile($("#login-tpl").html());
    router.addRoute('', function () {
        $('#maindiv').html(new LoginView().render());
    });

    RegisterView.prototype.template = Handlebars.compile($("#register-tpl").html());
    router.addRoute('register', function () {
        $('#maindiv').html(new RegisterView().render());
    });

    HomeView.prototype.template = Handlebars.compile($("#home-tpl").html());
    router.addRoute('home', function () {
        $('#maindiv').html(new HomeView().render());
        $.jqplot('chart', [[[1, 0], [2, 3], [3, 1], [4, 3], [5, 4], [6, 5]]]);
    });

    QuizView.prototype.template = Handlebars.compile($("#quiz-tpl").html());
    router.addRoute('quiz', function () {
        $('#maindiv').html(new QuizView().render());
    });

    PatientView.prototype.template = Handlebars.compile($("#patient-tpl").html());
    router.addRoute('patient', function (patient) { // TODO ruta por id
        $('#maindiv').html(new PatientView(patient).render());
    });

    router.start();

    document.addEventListener('deviceready', function () {
        console.log('device is ready');
    }, false);
}());