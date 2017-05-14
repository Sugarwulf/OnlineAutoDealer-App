namespace car_dealership.Services {

    export class MovieService {
        private MovieResource;

        public listMovies() {
            return this.MovieResource.query();
        }

        constructor($resource: ng.resource.IResourceService) {
            this.MovieResource = $resource('/api/movies');
        }
    }
    angular.module('car_dealership').service('movieService', MovieService);
    export class MyService {

    }
    angular.module('car_dealership').service('myService', MyService);
    }
