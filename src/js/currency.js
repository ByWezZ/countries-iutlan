class Currency {
  static all_currencies = {};
  constructor(obj) {
    this.code = obj.code;
    this.name = obj.name;
    this.symbol = obj.symbol;
  }

  toString() {
    let str = 'Code : ' + this.code + '\n';
    str += 'Name : ' + this.name + '\n';
    str += 'Symbol : ' + this.symbol + '\n';
    return str;
  }
}
