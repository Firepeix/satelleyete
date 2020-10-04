export default class Satellite {
  constructor (id, lat, long, height, name, status, type) {
    this._id = id;
    this._lat = lat;
    this._long = long;
    this._height = height;
    this._name = name;
    this._status = status;
    this._type = type;
  }

  get id () {
    return this._id;
  }

  get lat () {
    return this._lat;
  }

  get long () {
    return this._long;
  }

  get height () {
    return this._height;
  }

  get name () {
    return this._name;
  }

  get isActive () {
    return this._status !== 'Lixo';
  }

  get type () {
    return this._type;
  }

  get object () {
    return 'duck.dae';
  }
}