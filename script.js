// Student Task Manager Script

document.addEventListener('DOMContentLoaded', () => {
  const taskForm = document.getElementById('task-form');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');
  const emptyState = document.getElementById('empty-state');
  const totalCountEl = document.getElementById('total-count');
  const completedCountEl = document.getElementById('completed-count');
  const pendingCountEl = document.getElementById('pending-count');

  // Load tasks from localStorage
  let tasks = JSON.parse(localStorage.getItem('student_tasks')) || [];

  // Save tasks to localStorage
  function saveTasks() {
    localStorage.setItem('student_tasks', JSON.stringify(tasks));
  }

  // Update counters and empty state
  function updateStats() {
    const total = tasks.length;
    const completed = tasks.filter(task => task.completed).length;
    const pending = total - completed;

    totalCountEl.textContent = total;
    completedCountEl.textContent = completed;
    pendingCountEl.textContent = pending;

    if (total === 0) {
      emptyState.style.display = 'block';
    } else {
      emptyState.style.display = 'none';
    }
  }

  // Render tasks list
  function renderTasks() {
    taskList.innerHTML = '';

    tasks.forEach(task => {
      const li = document.createElement('li');
      li.className = `task-item ${task.completed ? 'completed' : ''}`;
      li.dataset.id = task.id;

      li.innerHTML = `
        <div class="task-left">
          <input 
            type="checkbox" 
            class="checkbox-custom" 
            ${task.completed ? 'checked' : ''}
            aria-label="Mark task as complete"
          >
          <span class="task-text"></span>
        </div>
        <button class="btn-delete" title="Delete task" aria-label="Delete task">
          🗑️ Delete
        </button>
      `;

      // Prevent XSS by setting textContent
      li.querySelector('.task-text').textContent = task.text;

      // Event listener for checkbox (Toggle Complete)
      const checkbox = li.querySelector('.checkbox-custom');
      checkbox.addEventListener('change', () => {
        toggleTask(task.id);
      });

      // Event listener for delete button
      const deleteBtn = li.querySelector('.btn-delete');
      deleteBtn.addEventListener('click', () => {
        deleteTask(task.id);
      });

      taskList.appendChild(li);
    });

    updateStats();
  }

  // Add new task
  function addTask(text) {
    const trimmedText = text.trim();
    if (!trimmedText) return;

    const newTask = {
      id: Date.now().toString(),
      text: trimmedText,
      completed: false
    };

    tasks.unshift(newTask);
    saveTasks();
    renderTasks();
    taskInput.value = '';
  }

  // Toggle task completion
  function toggleTask(id) {
    tasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    saveTasks();
    renderTasks();
  }

  // Delete task
  function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    saveTasks();
    renderTasks();
  }

  // Form submit handler
  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addTask(taskInput.value);
  });

  // Initial render on page load
  renderTasks();
});
