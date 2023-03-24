
function calculateFees(){
 
    var nrmembers = document.getElementById('nrmembers').number;
        fname = document.getElementById('fname').text;
        priceBaecation = document.getElementById('Baecation').value;
        priceFriendication = document.getElementById('Friendication').value;
        priceVacation = document.getElementById('Vacation').value;
        priceCouple = 23000;
        priceFriend = 18000;
        priceAlone = 25000;
        total ="";
    }
    
    if (Baecation.selected, Friendication.selected, Vacation.selected){
        
        total = (nrmembers*priceCouple, priceFriend, priceAlone) 
        
        document.write(fname, "the total booking amount is R",total);
    }
    
    $('#clearForm').click(function(){
        $('#quoteForm')[0].reset();
    });

    $( "p" ).on( "click", function() {
        $( this ).css( "color", "red" );
        });

        $(document).ready(function() {
            $('#sendInfo').click(function() {
                $('#quoteForm').attr('action',
                               'mailto:sandile.alwande@gmail.com?',
                $('#quoteForm').button());
            });
        });

        $(document).ready(function() {
            $('#sendInfo').click(function() {
                $('#action_page').attr('action',
                               'mailto:sandile.alwande@gmail.com?',
                $('#action_page').button());
            });
        });