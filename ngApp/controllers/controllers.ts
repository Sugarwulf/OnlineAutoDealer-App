namespace car_dealership.Controllers {

  export class SearchController {

      public makes;
      public search;

      constructor(private $http: ng.IHttpService) {
      }
      fetch() {
      if(this.search) {
          // returns everything: this.$http.get('api/makes', this.search)
          this.$http.get('/api/makes/search/' + this.search)
          .then((response) => {
          this.makes = response.data;

        }).catch((response) => {
          console.log('Could not retrieve cars.');
        });
      }
      //method to accept all makes in dropdown
    }



  }


angular.module('car_dealership').controller('SearchController', SearchController);

  export class DropdownController {


      public search;
      public makes;


      constructor(private $http: ng.IHttpService) {
      }
      fetchMakes() {
      if(this.search) {
        this.$http.get('/api/makes')
          .then((response) => {
          this.makes = response.data;
        }).catch((response) => {
          console.log('Could not retrieve cars.');
        });
      }
    }
  }

angular.module('car_dealership').controller('DropdownController', DropdownController);

  export class ModalController {

}

angular.module('car_dealership').controller("ModalController", ModalController);


  export class DialogController {

  }

angular.module('car_dealership').controller('DialogController', DialogController);


  export class BuyController {
      public message = 'Please enter your name, number, and email.  A sales associate will contact you shortly.';
  }

  export class SellController {
      public message = 'Please enter your name, number, and email along with the year, make and model of your vehicle.  A sales associate will contact you shortly.';
  }

  export class TradeController {
      public message = `You FOOL!! Never trade in a car!  The dealer always gives you thousands less than you could get selling private party! Let's all just pretend you never clicked here. Please click on another link.`;
  }

}
