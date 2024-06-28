export interface Worklog {
    date: WorklogDate; // [day of the week] [month] [day of the month] [year]
    tasks: Task[]; // The tasks that were completed on this day
}