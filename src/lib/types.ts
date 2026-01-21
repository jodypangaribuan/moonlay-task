export type TaskStatus = "todo" | "in-progress" | "done";

export interface User {
    id: string;
    name: string;
    avatar?: string;
}

export interface Task {
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
    deadline: string;
    assignee: string; // User ID
}

export const MOCK_USERS: User[] = [
    { id: "1", name: "Jody", avatar: "JD" },
    { id: "2", name: "Alice", avatar: "AL" },
    { id: "3", name: "Bob", avatar: "BB" },
];

export const MOCK_TASKS: Task[] = [
    {
        id: "1",
        title: "Design System Implementation",
        description: "Create the core geometric components for the new app.",
        status: "done",
        deadline: "2026-01-25",
        assignee: "1",
    },
    {
        id: "2",
        title: "Dashboard Layout",
        description: "Build the task board with drag and drop capabilities.",
        status: "in-progress",
        deadline: "2026-01-28",
        assignee: "2",
    },
    {
        id: "3",
        title: "AI Chatbot Mockup",
        description: "Design the chat interface for the task assistant.",
        status: "todo",
        deadline: "2026-01-30",
        assignee: "3",
    },
];
