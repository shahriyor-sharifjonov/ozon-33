$( function() {
  var dateFormat = "",
    from = $( "#from" )
      .datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 1,
        dateFormat: 'с dd.mm.yy',
        minDate: -20, 
        maxDate: "+1M +10D"
      })
      .on( "change", function() {
        to.datepicker( "option", "minDate", getDate( this ) );
      }),
    to = $( "#to" ).datepicker({
      defaultDate: "+1w",
      changeMonth: true,
      numberOfMonths: 1,
      minDate: -20, 
      dateFormat: 'по dd.mm.yy',
      maxDate: "+1M +10D"
    })
    .on( "change", function() {
      from.datepicker( "option", "maxDate", getDate( this ) );
    });

  function getDate( element ) {
    var date;
    try {
      date = $.datepicker.parseDate( dateFormat, element.value );
    } catch( error ) {
      date = null;
    }

    return date;
  }
} );

const tag = document.querySelectorAll('.tags-xl-tag');

tag.forEach(el => {
  el.addEventListener('click', ()=>{
    el.classList.toggle('current');
  })
})

function dropdown(val) {
  var y = document.getElementsByClassName('dropdown-toggle');
  var aNode = y[0].innerHTML = val + ' <span class="caret"></span>'; // Append 
}

function dropdown2(val) {
  var y = document.getElementsByClassName('drop-8');
  var aNode = y[0].innerHTML = val + ' <span class="caret"></span>'; // Append 
}