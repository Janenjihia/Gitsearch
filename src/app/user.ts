// export class User {
  
  
  
  // name!:string;
  // id!:number;
  // username!: string;
  // email!: String;

//   static result: any;
//   constructor(
//     public url:string, 
//     public location:string, 
//     public repos:number, 
//     public followers:number, public following:number, public date:Date ){

// }
// }

export class User {
  static result: any;
  constructor(public url:string, public login:string, public html_url:string,  public location:string, public public_repos:number, public followers:number, public following:number, public avatar_url:string, public created_at:Date ){

  }
}
