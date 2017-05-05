namespace finalpractice.Services {

  class WeightClassService {
    private WEIGHTCLASS_RESOURCE = this.$resource('/api/v1/weightclasses');

    constructor(private $resource){}

    public getAll() {
      return this.WEIGHTCLASS_RESOURCE.query();
    }

    public save(wClass) {
      return this.WEIGHTCLASS_RESOURCE.save(wClass).$promise;
    }

  }

  angular.module('finalpractice').service('weightClassService', WeightClassService);

}
