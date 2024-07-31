
export interface AuthResonse {
    
}
export interface ITask  {
    _id: String
  title: String;
  status: "todo" | "inProgress" | "underReview" | "finished";
  priority: "urgent" | "medium" | "low";
  deadline: Date;
  description: String;
}