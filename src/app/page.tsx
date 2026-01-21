"use client";

import { useState } from "react";
import { LoginForm } from "@/components/auth/login-form";
import { TaskBoard } from "@/components/dashboard/task-board";
import { TaskForm } from "@/components/dashboard/task-form";
import { AIChatbot } from "@/components/dashboard/ai-chatbot";
import { Modal } from "@/components/ui/modal";
import { FloatingShape } from "@/components/ui/decorative";
import { Task, TaskStatus, MOCK_TASKS } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Zap, Plus, LogOut } from "lucide-react";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [tasks, setTasks] = useState<Task[]>(MOCK_TASKS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | undefined>(undefined);
  const [defaultStatus, setDefaultStatus] = useState<TaskStatus>("todo");

  const handleLogin = (username: string) => {
    setCurrentUser(username);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
  };

  const handleAddTask = (status: TaskStatus) => {
    setEditingTask(undefined);
    setDefaultStatus(status);
    setIsModalOpen(true);
  };

  const handleEditTask = (task: Task) => {
    setEditingTask(task);
    setIsModalOpen(true);
  };

  const handleDeleteTask = (id: string) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const handleFormSubmit = (formData: Partial<Task>) => {
    if (editingTask) {
      setTasks(tasks.map(t => t.id === editingTask.id ? { ...t, ...formData } as Task : t));
    } else {
      const newTask: Task = {
        id: Math.random().toString(36).substring(7),
        ...formData,
      } as Task;
      setTasks([...tasks, newTask]);
    }
    setIsModalOpen(false);
  };

  if (!isLoggedIn) {
    return (
      <div className="relative min-h-screen overflow-hidden bg-background flex items-center justify-center p-6">
        <div className="fixed inset-0 dot-grid pointer-events-none" />
        <FloatingShape type="circle" size="xl" color="tertiary" className="top-[-10%] left-[-5%]" />
        <FloatingShape type="pill" size="lg" color="secondary" className="bottom-[10%] right-[10%] rotate-45" />

        <LoginForm onLogin={handleLogin} />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-background selection:bg-tertiary">
      <div className="fixed inset-0 dot-grid pointer-events-none" />

      {/* App Header */}
      <nav className="sticky top-0 z-40 w-full border-b-2 border-foreground bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex h-20 items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-foreground bg-accent shadow-pop">
              <Zap className="text-white" size={24} />
            </div>
            <span className="text-2xl font-black font-heading tracking-tight italic">GEOTASK</span>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex flex-col items-end">
              <span className="text-sm font-black uppercase text-accent leading-none mb-1">Assignee</span>
              <span className="font-bold leading-none">@{currentUser}</span>
            </div>
            <div className="h-12 w-12 rounded-full border-2 border-foreground bg-tertiary flex items-center justify-center font-black">
              JD
            </div>
            <Button variant="outline" size="sm" onClick={handleLogout} className="!p-2 h-10 w-10">
              <LogOut size={18} />
            </Button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-12">
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h1 className="text-5xl font-black font-heading tracking-tighter mb-4">
              My Task Board
            </h1>
            <p className="text-lg font-bold text-muted-foreground">
              You have <span className="text-accent underline decoration-2">{tasks.filter(t => t.status !== 'done').length} tasks pending</span> for today. Keep going!
            </p>
          </div>
          <Button size="lg" onClick={() => handleAddTask('todo')} className="h-16 px-8 text-lg">
            <Plus className="mr-2" /> New Task
          </Button>
        </header>

        <TaskBoard
          tasks={tasks}
          onAddTask={handleAddTask}
          onEditTask={handleEditTask}
          onDeleteTask={handleDeleteTask}
        />
      </main>

      <AIChatbot />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingTask ? "Edit Task" : "Create New Task"}
      >
        <TaskForm
          task={editingTask}
          defaultStatus={defaultStatus}
          onSubmit={handleFormSubmit}
          onCancel={() => setIsModalOpen(false)}
        />
      </Modal>

      {/* Background Shapes */}
      <FloatingShape type="circle" size="md" color="secondary" className="top-1/4 right-[-5%] opacity-10" />
      <FloatingShape type="square" size="sm" color="quaternary" className="bottom-1/4 left-[-2%] rotate-12 opacity-10" />
    </div>
  );
}
