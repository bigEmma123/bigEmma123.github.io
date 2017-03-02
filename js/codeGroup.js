$(function()
{
    
       function constructLogin()
{
    //hide code head
     $('.code-heading').hide();
    /*********************************/
    $('.nav').hide();
    $('pre').hide();
    $('.logout').hide();
     //hide code box 1 and2
    $('.codeBox1').hide();
    $('.codeBox2').hide();
    //hide the download btn
    $('.download-btn').hide();
    //Authenticate user function
    /*function loggedIn()
    {
        //generate random sequence
        //use time and Date
        //Make a log
        //count users;
    }*/
    //hide text2
    //$('.text2').hide();
    //clear text box
    $('form-control').val("");
    //animate page-header
    $('.page-header').hide();
    $('.page-header').delay(500).slideDown();
    
    //animate text1
    $('.text1').hide();
    $('.text1').delay(1000).fadeIn();
    
    
    //hide input box
    $('.form-control').hide();
    //reduce inputs height
     $('.form-control').css('width','100px');
    $('.form-control').delay(1500).fadeIn();
    
    //animate inputbox
    $('.form-control').animate({width:'300px'},'500',function(){
        //after animation is done put a zero in input box
        $(this).val("0");
    });    
}
        function constructPage()
    {
        //animate the page-header again
        //shift-header to right side
        $('pre').show();
        $('.code-heading').show();
        $('.head-text').animate({fontSize:'0px'},500,function(){
            $(this).hide();
            $(this).css('text-align','left');
            $(this).css('font-size','16pt');
            $(this).delay(800).fadeIn();
        });
        //show codeBox2
        $('.codeBox2').delay(500).fadeIn();
        //animate the download btn
        $('.download-btn').delay(500).fadeIn();
        //animate nav
        $('.nav').delay(500).slideDown();
        //$('.codeBox1').load('codes/linear.txt');
        //animate and show code boxes
        $('.codeBox1').delay(600).fadeIn();
        
        
    }
    
   
    
    /**Global VAriables***/
    //user index;
   
    /******************/
    //get data from the ajax request callback
   /* function getData(data)
    {
        DATA=data;
    }*/
    var userData;
    //getUser data
    var url="qwajdnjsbdys/sdsk2121.json";
    //retrieve JSON
    /****************************************/
$.ajax(
    {url:"qwajdnjsbdys/sdsk2121.json",
    //global:true,
    type:"GET",
    dataType:"JSON",
    success:function(response)
     {
         
    //CLS1
    // DATA;
    //increase every time a user is added
    var num_users=12;
        
         var jsObject=response;
         
    //parse the JSON Data and return string
         
   // var jsObject=JSON.parse(JSON.stringify(JsonData));
         
         /****Functons****/
         /****1*******/
           function authUser(mobNumber)
    {
        //linear search
        //init index
        var index=0;
        for (var i=0; i<12; i++)
            {
                
                if (jsObject[i].Number==mobNumber)
                    {
                        index=i;
                        //return true;
                    }
                //else return false;
            }
        
             if(jsObject[index].Number==mobNumber)
                 {
                     return true;
                 }
        //set token index to a hidden input's value
        //access input index
        $('#index').val(index);
    }
    /********************************************/
         /****2*****/
          //authenticate token
    function authToken(token){
        //init index
        var index=1;
    for(var i=0; i<num_users; i++)
        {
            if(jsObject[i].token==token)
                {
                    index=i;
                    
                }
        }
    
    //cross check index users token
    if(token==jsObject[index].token)
        {
            return true;
        }
    else return false;
}
/********************************/
          //get JSON 
     
         
         
         
           /********check coookie*********/
    //extract token from cookie 
    var cToken=document.cookie;
    var token=cToken.split("=");
    token=token[1];
    //authenticate token
    if(authToken(token,jsObject))
        {
            //load home page
            //clear alert warning
            $('.text3').html(" ");
                //destruct login page 
            $('.login').delay(1000).fadeOut();
            constructPage();
        }
    else constructLogin();
    /*****************/
    //authenticate user
    $('.authenticate').click(function(){
        var userInput=$('.form-control').val();
        if(authUser(userInput))
            {
                //clear alert warning
            $('.text3').html(" ");
                //destruct login page 
            $('.login').delay(1000).fadeOut();
                //if user chks remember me create a cookie
                var chkVal=$('.chkBox').prop('checked');
                //alert(chkVal);
                //get users index to access his token 
                var index=$('#index').val();
                if(chkVal)
                    {
                        //set cookie
                        //use user token to set cookie
                        
                        document.cookie="token="+jsObject[index].token;
                    }
                else 
                    {
                       //do nothing
                    }
                //contruct Home page
                constructPage();
                //fill in USer name at the page header
              $('.user').html(jsObject[index].User);
            }
        else 
            $('.text3').html("<br><div class='alert alert-warning'>Wrong number try again</div>");
            
        
    });
    
     }
    });
});
 
 
 

/****Note********
Had problem with the index where I had to make it local to function authuser and authtoken
so had to user a hidden input filed with id index so that i can set index in those functions to the #index value 
ln 197 accessed the value of #index.****/
