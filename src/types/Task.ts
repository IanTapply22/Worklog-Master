import { TaskType } from "./TaskType";

export interface Task {
    type: TaskType; // If this is provided, this will be the root of the bullet point
    description: String; // What's displayed on the line of the bullet point
    subdescriptions: Task[]; // Subdescriptions, these are bullet points within this bullet point
}