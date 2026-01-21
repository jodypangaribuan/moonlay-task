"use client";

import { Task, TaskStatus } from "@/lib/types";
import { TaskCard } from "./task-card";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TaskBoardProps {
    tasks: Task[];
    onAddTask: (status: TaskStatus) => void;
    onEditTask: (task: Task) => void;
    onDeleteTask: (id: string) => void;
}

export function TaskBoard({ tasks, onAddTask, onEditTask, onDeleteTask }: TaskBoardProps) {
    const columns: { title: string; status: TaskStatus; color: string }[] = [
        { title: "To Do", status: "todo", color: "bg-tertiary" },
        { title: "In Progress", status: "in-progress", color: "bg-accent" },
        { title: "Done", status: "done", color: "bg-quaternary" },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {columns.map((column) => {
                const columnTasks = tasks.filter(t => t.status === column.status);

                return (
                    <div key={column.status} className="flex flex-col gap-6">
                        <div className="flex items-center justify-between px-2">
                            <div className="flex items-center gap-3">
                                <div className={`h-4 w-4 rounded-full border-2 border-foreground ${column.color}`} />
                                <h3 className="text-xl font-black font-heading uppercase tracking-wider">
                                    {column.title}
                                </h3>
                                <span className="bg-foreground text-background text-xs font-black px-2 py-0.5 rounded-full">
                                    {columnTasks.length}
                                </span>
                            </div>
                            <button
                                onClick={() => onAddTask(column.status)}
                                className="h-8 w-8 rounded-lg border-2 border-foreground bg-white shadow-[2px_2px_0px_0px_#1E293B] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_#1E293B] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_#1E293B] transition-all flex items-center justify-center"
                            >
                                <Plus size={18} />
                            </button>
                        </div>

                        <div className="flex flex-col gap-6 min-h-[200px] p-2 rounded-2xl border-2 border-dashed border-slate-300">
                            {columnTasks.map(task => (
                                <TaskCard
                                    key={task.id}
                                    task={task}
                                    onEdit={onEditTask}
                                    onDelete={onDeleteTask}
                                />
                            ))}
                            {columnTasks.length === 0 && (
                                <div className="flex flex-col items-center justify-center py-12 text-muted-foreground font-bold italic opacity-50">
                                    No tasks here
                                </div>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
