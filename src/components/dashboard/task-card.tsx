"use client";

import { Task, MOCK_USERS } from "@/lib/types";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/decorative";
import { Calendar, User as UserIcon, MoreVertical, Edit2, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TaskCardProps {
    task: Task;
    onEdit: (task: Task) => void;
    onDelete: (id: string) => void;
}

export function TaskCard({ task, onEdit, onDelete }: TaskCardProps) {
    const assignee = MOCK_USERS.find(u => u.id === task.assignee);

    const statusColors = {
        "todo": "tertiary",
        "in-progress": "accent",
        "done": "quaternary"
    };

    return (
        <Card className="group">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <Badge variant={statusColors[task.status] as any} className="capitalize">
                    {task.status.replace("-", " ")}
                </Badge>
                <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button onClick={() => onEdit(task)} className="p-1 hover:text-accent">
                        <Edit2 size={16} />
                    </button>
                    <button onClick={() => onDelete(task.id)} className="p-1 hover:text-secondary">
                        <Trash2 size={16} />
                    </button>
                </div>
            </CardHeader>
            <CardContent className="pt-2">
                <CardTitle className="text-lg mb-2">{task.title}</CardTitle>
                <CardDescription className="line-clamp-2 text-foreground/70 mb-4">
                    {task.description}
                </CardDescription>

                <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm font-bold opacity-80">
                        <Calendar size={14} />
                        <span>Due: {new Date(task.deadline).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full border-2 border-foreground bg-muted flex items-center justify-center font-black text-xs">
                            {assignee?.avatar}
                        </div>
                        <span className="text-sm font-bold">{assignee?.name}</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
