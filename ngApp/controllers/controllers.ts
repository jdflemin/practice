namespace finalpractice.Controllers {

    export class HomeController {
      public weightclasses

      constructor(weightClassService) {
        this.weightclasses = weightClassService.getAll()
      }
    }


    export class AboutController {
        public message = 'Hello from the about page!';
    }

}
