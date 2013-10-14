var app = {

    findByName: function() {
      

        this.store.findByName($('.search-key').val(), function(employees) {
            var l = employees.length;
            var e;
            $('.employee-list').empty();
            for (var i=0; i<l; i++) {
                e = employees[i];
                $('.list-view').append('<li><a href="#employees/' + e.id + '">' + e.firstName + ' ' + e.lastName + '</a></li>');
            }
        });
    },

    initialize: function() {
        var self = this;
       // this.store = new LocalStorageStore(function() {

         //   self.showAlert('store initialised','Info');
        //}, 

      //  function() { self.showAlert('failure')});

        // $('.search-key').on('keyup', $.proxy(this.findByName, this));

        $( "#refr" ).click(function() {
            self.testit();
        });
        this.getWines();

    },

    showAlert: function (message, title) {
        if (navigator.notification) {

            navigator.notification.alert(message, null, title, 'OK');
        } else {
            
            alert(title ? (title + ": " + message) : message);
        }
    },

    testit: function() {

       this.getWines();
    }

    ,

    getWines: function () {

        console.log('dd');
        $.ajax({
            type: 'GET',
            url: 'http://pizg.net/slim/app/wines',
            crossdomain:true,
            dataType: "json", // data type of response
            success: this.renderTheList
        }).done(function(data) {

            //console.log(data, "this is a response"); 
        });
    },

    renderTheList: function (wines) {
        console.log(wines.wine[0], "the response",wines.wine.length);

           var l = wines.wine.length;
           var e;
           $('.employee-list').empty();
            for (var i=0; i<l; i++) {
                e = wines.wine[i];
                $('.employee-list').append('<li><a href="#employees/' + e.name+ '">' + e.name + '</a></li>');

            }
             $(".employee-list").listview("refresh");

        


    }

 

};

app.initialize();