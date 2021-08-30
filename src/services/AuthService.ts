import { User, UserAttribute } from "../model/Model";

/* istanbul ignore file */
export class AuthService {
  public async login(
    userName: string,
    password: string
  ): Promise<User | undefined> {
    if (userName === "user" && password === "123") {
      return { userName, email: "testing@yopmail.com" };
    } else {
      return undefined;
    }
  }

  public async getUserAttributes(user: User): Promise<UserAttribute[]> {
    const result: UserAttribute[] = [];
    result.push(
      {
        Name: "Testing user",
        Value: "User Test",
      },
      {
        Name: "Job",
        Value: "Engineer",
      },
      {
        Name: "Job 2",
        Value: "Engineer",
      }
    );

    return result;
  }
}
