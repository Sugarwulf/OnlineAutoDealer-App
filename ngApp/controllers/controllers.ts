namespace car_dealership.Controllers {
  // first controller
  export class SearchController {

      public makes;
      public search;
      public cars;


      fetch() {
      if(this.search) {
          // returns all makes with no filter.  I augmented server side code to filter.
          this.$http.get('/api/makes/search/' + this.search)
          .then((response) => {
          this.makes = response.data;  //See lines: 15-18 in the api "makes.ts"  I filtered the results in the server side code versus on the client side.

        }).catch((response) => {
          console.log('Could not retrieve cars.');
        });
      }

    }

   findCar() {
    if(this.search) {
     //returns all cars from the object "cars" in cars.ts.  filtered results on client side in search.html on this one.
      this.$http.get('/api/cars/')
        .then((response) => {
          this.cars = response.data;
      }).catch((response) => {
        console.log('Could not retrieve cars.');
      });
    }
   }

   public showModal (id: number) { // include id parameter to show modal in each specific instance of the car object.
    this.$http.get('/api/cars/' + id) //find all the cars and their respective id's.
     .then((response) => {
       this.$uibModal.open({
         templateUrl:'ngApp/views/dialog.html',
         controller:'ModalController',
         controllerAs:'modal',
         resolve: {
           selectedCar: () => response.data  //selectedCar represents the specific car chosen identified by the paramater 'id'.
         },
         size: 'sm'
       });
     })
     .catch((response) => {
       console.log('Cannot retrieve cars.')
     })
}
constructor(private $http: ng.IHttpService, private $uibModal:angular.ui.bootstrap.IModalService) { }

}

angular.module('car_dealership').controller('SearchController', SearchController);


   class ModalController {
    //  second controller
    public ok() {
      this.$uibModalInstance.close();
        }
       constructor(public selectedCar: string, private $uibModalInstance: angular.ui.bootstrap.IModalServiceInstance) {

        }

    }


angular.module('car_dealership').controller("ModalController", ModalController);


  export class BuyController {
   //third controller
      public message = 'Please enter your name, number, and email.  A sales associate will contact you shortly.';

      notify() {
        alert('Thank you. Your request has been submitted. A sales associate will contact you within the next five minutes.')
      }

  }

  angular.module('car_dealership').controller("BuyController", BuyController);

  export class SellController {
     //fourth controller
      public message = 'Please enter your name, number, and email along with the year, make and model of your vehicle.  A sales associate will contact you shortly.';

      notify() {
        alert('Thank you. Your request has been submitted.  A sales associate will contact you within the next five minutes.')
        // this.$state.go('/');
      }
      // constructor(private:$state:ng.ui.IStateService) { }
  }

  angular.module('car_dealership').controller("SellController", SellController);

  export class TradeController {
     //fifth controller
      public message = `You FOOL!! Never trade in a car!  The dealer always gives you thousands less than you could get selling private party! Let's all just pretend you never clicked here. Please click on another link.`;
  }


}
