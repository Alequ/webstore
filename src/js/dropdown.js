function DropDown(el) {
      this.dd = el;
      this.placeholder = this.dd.children('span');
      this.opts = this.dd.find('ul.dropdown > li');
      this.val = '';
      this.index = -1;
      this.initEvents();
    }
    DropDown.prototype = {
      initEvents : function() {
        var obj = this;

        obj.dd.on('click', function(event){
          $(this).toggleClass('active');
          return false;
        });

        obj.opts.on('click',function(){
          var opt = $(this);
          obj.val = opt.text();
          obj.index = opt.index();
          obj.placeholder.text(obj.val);
        });
      },
      getValue : function() {
        return this.val;
      },
      getIndex : function() {
        return this.index;
      }
    }

    $(function() {

      var dd = new DropDown( $('#dd') );
      var dropdownSize = new DropDown( $('#dropdownSize') );

      $(document).click(function() {
        // all dropdowns
        $('.wrapper-dropdown-3').removeClass('active');
      });

    });





let counter = 0;

    $(".card").mouseenter(function()
    {

          if(counter<=0){
          $( this ).append( `<a class="shopAction" href="product.html"> <img src="src/css/img/shopaction.png" alt="shop" /> </a>` );
          counter++;
        }
      });


    $(".card").mouseleave(function()
    {
      counter = 0;
      $( ".shopAction" ).remove();

    });
