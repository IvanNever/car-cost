declare namespace Express {
  export interface Request {
    currentUser?: User;
    session?: {
      userId?: number;
    };
  }
}
