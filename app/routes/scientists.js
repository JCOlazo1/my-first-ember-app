import Route from '@ember/routing/route';

export default class ScientistsRoute extends Route {
  model() {
    return ['Dr. Light', 'Dr. Wily', 'Mr. Science'];
  }
}
