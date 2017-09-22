(function(global, $) {
    var Greetr = function(firstname, lastname, language) {
        return new Greetr.init(firstname, lastname, language);
    }

    var supportLangs = ['en', 'es'];

    var greetings = {
        en: 'Hello',
        es: 'Hola'
    };

    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };

    var logMassages = {
        en: 'Logged in',
        es: 'Inicio sesion'
    };

    Greetr.prototype = {

        fullName: function() {
            return this.firsName + '' + this.lastName;
        },
        validate: function() {
            if (supportLangs.indexOf(this.language) == -1) {
                throw 'invalid language!!';
            }
        },
        greeting: function() {
            return greetings[this.language] + ' ' + this.firsName + '!';
        },
        formalGreetings: function() {
            return formalGreetings[this.language] + ', ' + this.fullName();
        },
        greet: function(formal) {
            var msg;
            //if undefined or null it will be correct or 'false'
            if (formal) {
                msg = this.formalGreetings();
            } else {
                msg = this.greeting();
            }
            if (console) {
                console.log(msg);
            }
            //'this' refers to calling object at execution time
            //makes the method chainable
            return this;
        },

        log: function() {
            if (console) {
                console.log(logMassages[this.language] + ': ' + this.fullName());
            }
            return this;
        },

        setLang:function(lang){
            this.language=lang;
            this.validate();
            return this;
        }

    };

    Greetr.init = function(firstName, lastName, language) {
        var self = this;
        self.firsName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';
    }

    Greetr.init.prototype = Greetr.prototype;

    global.Greetr = global.G$ = Greetr;

}(window, jQuery));
