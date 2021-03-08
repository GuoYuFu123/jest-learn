export default class DaBaojian {
  xuanren(number) {
    this.user = number == 1 ? "小明" : "小红";
  }

  anjiao() {
    this.fuwu = this.user + "为你按脚";
  }
  anjiao1() {
    this.fuwu = this.user + "为你按脚1";
  }
  anmo() {
    this.fuwu = this.user + "为你按摩";
  }
  anmo1() {
    this.fuwu = this.user + "为你按摩1";
  }
}
