export interface INotificationService {
  send(userId: string, message: string): void;
}
