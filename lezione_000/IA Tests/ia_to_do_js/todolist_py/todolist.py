import tkinter as tk
from tkinter import messagebox, ttk

class ToDoListApp:
    def __init__(self, root):
        self.root = root
        self.root.title("To-Do List")
        self.root.geometry("500x500")
        
        # Perguntar o nome do usuário
        self.ask_name()
    
    def ask_name(self):
        # Janela para inserir o nome
        self.name_window = tk.Toplevel(self.root)
        self.name_window.title("Bem-vindo!")
        self.name_window.geometry("300x150")
        
        tk.Label(self.name_window, text="Qual é o seu nome?", font=("Arial", 12)).pack(pady=10)
        
        self.name_entry = tk.Entry(self.name_window, font=("Arial", 12))
        self.name_entry.pack(pady=5)
        self.name_entry.focus()
        
        tk.Button(
            self.name_window, 
            text="Continuar", 
            command=self.start_app,
            font=("Arial", 10)
        ).pack(pady=10)
        
        # Permitir pressionar Enter para confirmar
        self.name_entry.bind("<Return>", lambda e: self.start_app())
        
        # Travar a janela principal até inserir o nome
        self.root.wait_window(self.name_window)
    
    def start_app(self):
        self.user_name = self.name_entry.get().strip()
        if not self.user_name:
            messagebox.showerror("Erro", "Por favor, insira seu nome!")
            return
        
        self.name_window.destroy()
        self.setup_main_window()
    
    def setup_main_window(self):
        self.root.title(f"To-Do List de {self.user_name}")
        
        # Frame principal
        main_frame = tk.Frame(self.root, padx=10, pady=10)
        main_frame.pack(fill=tk.BOTH, expand=True)
        
        # Label de boas-vindas
        welcome_label = tk.Label(
            main_frame,
            text=f"Lista de Tarefas de {self.user_name}",
            font=("Arial", 14, "bold")
        )
        welcome_label.pack(pady=5)
        
        # Frame de entrada de tarefas
        entry_frame = tk.Frame(main_frame)
        entry_frame.pack(fill=tk.X, pady=10)
        
        self.task_entry = tk.Entry(
            entry_frame,
            font=("Arial", 12)
        )
        self.task_entry.pack(side=tk.LEFT, fill=tk.X, expand=True)
        self.task_entry.focus()
        
        add_button = tk.Button(
            entry_frame,
            text="Adicionar",
            command=self.add_task,
            font=("Arial", 10)
        )
        add_button.pack(side=tk.RIGHT, padx=5)
        
        # Permitir adicionar com Enter
        self.task_entry.bind("<Return>", lambda e: self.add_task())
        
        # Frame da lista de tarefas
        self.tasks_frame = tk.Frame(main_frame)
        self.tasks_frame.pack(fill=tk.BOTH, expand=True)
        
        # Lista de tarefas (será populada dinamicamente)
        self.tasks = []
    
    def add_task(self):
        task_text = self.task_entry.get().strip()
        if not task_text:
            messagebox.showwarning("Aviso", "Digite uma tarefa!")
            return
        
        task_frame = tk.Frame(self.tasks_frame, pady=5)
        task_frame.pack(fill=tk.X)
        
        task_label = tk.Label(
            task_frame,
            text=task_text,
            font=("Arial", 12),
            anchor="w"
        )
        task_label.pack(side=tk.LEFT, fill=tk.X, expand=True)
        
        # Botão de concluir
        complete_button = tk.Button(
            task_frame,
            text="✓",
            command=lambda: self.toggle_task(task_label),
            font=("Arial", 10),
            bg="lightgreen"
        )
        complete_button.pack(side=tk.RIGHT, padx=2)
        
        # Botão de excluir
        delete_button = tk.Button(
            task_frame,
            text="✗",
            command=lambda: self.delete_task(task_frame),
            font=("Arial", 10),
            bg="salmon"
        )
        delete_button.pack(side=tk.RIGHT, padx=2)
        
        self.tasks.append((task_frame, task_label))
        self.task_entry.delete(0, tk.END)
    
    def toggle_task(self, task_label):
        # Alternar entre riscado e normal
        current_font = task_label.cget("font")
        if "overstrike" in current_font:
            task_label.config(font=("Arial", 12))
        else:
            task_label.config(font=("Arial", 12, "overstrike"))
    
    def delete_task(self, task_frame):
        task_frame.destroy()
        self.tasks = [task for task in self.tasks if task[0] != task_frame]

# Iniciar a aplicação
if __name__ == "__main__":
    root = tk.Tk()
    app = ToDoListApp(root)
    root.mainloop()