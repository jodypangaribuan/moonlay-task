"use client";

import { useState } from "react";
import { Task, TaskStatus, MOCK_USERS } from "@/lib/types";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

interface TaskFormProps {
    task?: Task;
    defaultStatus?: TaskStatus;
    onSubmit: (task: Partial<Task>) => void;
    onCancel: () => void;
}

export function TaskForm({ task, defaultStatus, onSubmit, onCancel }: TaskFormProps) {
    const [formData, setFormData] = useState<Partial<Task>>({
        title: task?.title || "",
        description: task?.description || "",
        status: task?.status || defaultStatus || "todo",
        deadline: task?.deadline || new Date().toISOString().split('T')[0],
        assignee: task?.assignee || MOCK_USERS[0].id,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <Input
                label="Task Title"
                placeholder="What needs to be done?"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
            />
            <Textarea
                label="Description"
                placeholder="Add some details..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
            <div className="grid grid-cols-2 gap-4">
                <Select
                    label="Status"
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value as TaskStatus })}
                    options={[
                        { label: "To Do", value: "todo" },
                        { label: "In Progress", value: "in-progress" },
                        { label: "Done", value: "done" },
                    ]}
                />
                <Input
                    label="Deadline"
                    type="date"
                    value={formData.deadline}
                    onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                    required
                />
            </div>
            <Select
                label="Assignee"
                value={formData.assignee}
                onChange={(e) => setFormData({ ...formData, assignee: e.target.value })}
                options={MOCK_USERS.map(u => ({ label: u.name, value: u.id }))}
            />

            <div className="flex justify-end gap-4 pt-4">
                <Button type="button" variant="outline" onClick={onCancel}>
                    Cancel
                </Button>
                <Button type="submit">
                    {task ? "Save Changes" : "Create Task"}
                </Button>
            </div>
        </form>
    );
}
