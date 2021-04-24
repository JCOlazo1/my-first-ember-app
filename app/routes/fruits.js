import Route from '@ember/routing/route';

export default class FruitsRoute extends Route {
  model() {
    return ['apples', 'oranges', 'mangos', 'grapes'];
  }
}
