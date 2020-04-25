import { hello } from './../hello';
export class main {
  public aaa(): void {
      hello.sayHello();
  }
}


const s = new main();
s.aaa();