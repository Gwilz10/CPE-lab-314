document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('task');
    const addBtn = document.getElementById('add-btn');
    const list = document.getElementById('list');
    
    
    let tasks = [];
    
 
    function loadTasks() {
        try {
            const saved = localStorage.getItem('gentleTasks');
            if (saved) {
                tasks = JSON.parse(saved);
            } else {
                tasks = [
                    { text: 'water the plants', completed: false },
                    { text: 'write a thank you note', completed: true },
                    { text: 'stretch & breathe', completed: false }
                ];
            }
        } catch (e) {
            console.log('storage error, starting fresh', e);
            tasks = [];
        }
        renderTasks();
    }
    
    
    function saveTasks() {
        localStorage.setItem('gentleTasks', JSON.stringify(tasks));
    }
    

    function renderTasks() {
        list.innerHTML = '';
        tasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.className = task.completed ? 'completed' : '';
            const span = document.createElement('span');
            span.className = 'task-text';
            span.textContent = task.text;
            const delBtn = document.createElement('button');
            delBtn.className = 'delete-btn';
            delBtn.innerHTML = '×'; 
            delBtn.setAttribute('aria-label', 'delete task');
            li.appendChild(span);
            li.appendChild(delBtn);
            list.appendChild(li);
            span.addEventListener('click', function(e) {
                e.stopPropagation();
                tasks[index].completed = !tasks[index].completed;
                saveTasks();
                renderTasks(); 
                console.log(`task "${task.text}" toggled`);
            });
            delBtn.addEventListener('click', function(e) {
                e.stopPropagation(); 
                tasks.splice(index, 1);
                saveTasks();
                renderTasks();
                console.log('task deleted');
            });
        });
    }
    
    function addNewTask() {
        const text = taskInput.value.trim();
        if (text === '') {
            taskInput.style.border = '1px solid #f9b5b5';
            setTimeout(() => taskInput.style.border = '', 600);
            return;
        }
        tasks.push({ text: text, completed: false });
        saveTasks();
        renderTasks();
        taskInput.value = ''; 
        taskInput.focus();
        console.log('new task added:', text);
    }
    
    addBtn.addEventListener('click', addNewTask);
    
    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addNewTask();
        }
    });
    
    taskInput.focus();
    
    loadTasks();
    // const wrongElement = document.getElementById('wrong-id'); 
    //wrongElement.addEventListener('click', ()=>{}); 
    
});