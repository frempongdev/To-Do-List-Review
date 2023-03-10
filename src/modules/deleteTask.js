const deleteTask = () => {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const deleteBtn = document.querySelectorAll('.delete-btn');

  deleteBtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      tasks.splice(index, 1);

      tasks.forEach((task, index) => {
        task.index = index + 1;
      });

      localStorage.setItem('tasks', JSON.stringify(tasks));
      location.reload(); // eslint-disable-line
    });
  });
};

export default deleteTask;