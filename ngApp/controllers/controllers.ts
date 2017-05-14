namespace car_dealership.Controllers {

  export class SearchController {
    //   public message = 'Hello from the home page!';
      public makes;
      public search;

      constructor(private $http: ng.IHttpService) {  }
    fetch() {
      if(this.search) {
        this.$http.get('/api/makes' + this.search)
          .then((response) => {
          this.makes = response.data;
        }).catch((response) =>{
          console.log('Could not retrieve cars.');
        });
      }
    }
  }

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
