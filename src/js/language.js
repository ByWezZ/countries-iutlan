class Language {
  static all_languages = {};
  constructor(obj) {
    this.iso639_1 = obj.iso639_1;
    this.iso639_2 = obj.iso639_2;
    this.name = obj.name;
    this.nativeName = obj.nativeName;
  }
}
