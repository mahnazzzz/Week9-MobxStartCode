import mobx, { observable,computed,action,useStrict} from "mobx";
const url = "http://localhost:7777/todos";

//useStrict(true);

class ObservableTodoStore {
  @observable todos = [];
  @observable pendingRequests = 0;

  // constructor() {
  //   mobx.autorun(() => console.log(this.report));
  // }

  @computed get completedTodosCount() {
    return this.todos.filter(
      todo => todo.completed === true
    ).length;
  }

  @action
  loadTodes()
  {
    fetch(url).then(res => res.json()).then((todosArray) =>
    {
      this.todos.replace(todosArray);
    })
  }

  @action
  toggleTodo(todo)
  {
    todo.completed = !todo.completed;
  }

  @computed get report() {
    if (this.todos.length === 0)
      return "<none>";
    return `Next todo: "${this.todos[0].task}". ` +
      `Progress: ${this.completedTodosCount}/${this.todos.length}`;
  }

  @action
  addTodo(task) {
    this.todos.push({
      task: task,
      completed: false,
      assignee: null
    });
  }
}

const observableTodoStore = new ObservableTodoStore();
observableTodoStore.addTodo("read MobX tutorial");
observableTodoStore.addTodo("try MobX");
window.observableTodoStore = observableTodoStore;
export default observableTodoStore;
