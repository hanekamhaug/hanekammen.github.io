(function($){
  "use strict";

/*************************
      Add calendar Events
*************************/
         var events = [
            { Title: "Vacation with the boys", Date: new Date("10/05/2017") },
            { Title: "Vacation with the boys", Date: new Date("10/06/2017") },
            { Title: "Vacation with the boys", Date: new Date("10/07/2017") },
            { Title: "Vacation with the boys", Date: new Date("10/08/2017") },
            { Title: "Visiting family in USA", Date: new Date("10/24/2017") },
            { Title: "Visiting family in USA", Date: new Date("10/25/2017") },
            { Title: "Visiting family in USA", Date: new Date("10/26/2017") },
            { Title: "Visiting family in USA", Date: new Date("10/27/2017") },
            { Title: "Visiting family in USA", Date: new Date("10/28/2017") },
            { Title: "Visiting family in USA", Date: new Date("10/29/2017") },
            { Title: "Visiting family in USA", Date: new Date("10/30/2017") },
            { Title: "Visiting family in USA", Date: new Date("10/31/2017") },
            { Title: "Visiting family in USA", Date: new Date("11/01/2017") }

];
        $("#datepicker").datepicker({
            dateFormat: 'DD, d MM, yy',
            beforeShowDay: function(date) {

                var result = [true, '', null];
                var matching = $.grep(events, function(event) {
                    return event.Date.valueOf() === date.valueOf();
                });
                
                if (matching.length) {
                    result = [true, 'highlight', null];
                }
               var date = $(this).datepicker('getDate');
               $('#day').html($.datepicker.formatDate('DD', date));
               $('#mnt').html($.datepicker.formatDate('MM', date));
               $('#date').html($.datepicker.formatDate('d', date));
                return result;
            },
            onSelect: function(dateText) {
                var date,
                    selectedDate = new Date(dateText),
                    i = 0,
                    event = null;
                
                while (i < events.length && !event) {
                    date = events[i].Date;

                    if (selectedDate.valueOf() === date.valueOf()) {
                        event = events[i];
                    }
                    i++;
                }
                if (event) {
                    alert(event.Title);
                }
            }
        });


})(jQuery);