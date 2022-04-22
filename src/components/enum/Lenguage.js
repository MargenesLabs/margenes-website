/**
 * Lenguages enum.
 * @author Esteban Ariza <acosta57esteban@gmail.com>
 * @class Lenguage
 */
class Lenguage {
  static ENUM = {
    ES : new Lenguage("Spanish"),
    EN : new Lenguage("English"),
  }
  
  constructor(name) {
    this.name = name
  }
}

export default Lenguage;