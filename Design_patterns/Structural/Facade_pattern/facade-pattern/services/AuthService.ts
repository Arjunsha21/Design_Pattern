import { IAuthService } from "../interfaces/IAuthService";

export class AuthService implements IAuthService {
  verifyUser(userId: string): boolean {
    console.log(`Authenticating user: ${userId}`);
    return userId !== ""; // error handling: userId should not be empty
  }
}
