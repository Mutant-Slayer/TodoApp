<template>
  <div>
    <div class="container">
      <h1>My Todo List</h1>
      <div class="card">
        <div class="flex">
          <input placeholder="Add new todo" v-model="newItem" />
          <button v-on:click="addItem" :disabled="newItem.length === 0">
            Add
          </button>
        </div>
      </div>
      <div class="card">
        <div class="card-inner">
          <h2>Todo</h2>

          <ul class="list">
            <li
              class="list-item"
              v-for="item in items"
              :key="item.key"
              :class="{ completed: item.completed }"
            >
              <div class="list-icon">
                <div class="list-item-toggle" v-if="item.completed === true">
                  <font-awesome-icon icon="fa-solid fa-circle-check" />
                </div>
                <div v-on:click="toggleComplete(item)" v-else>
                  <font-awesome-icon icon="fa-regular fa-circle" />
                </div>
              </div>
              <span>{{ item.name }}</span>
              <div class="list-item-delete" v-on:click="deleteItem(item)">
                <font-awesome-icon icon="fa-solid fa-trash-can" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "TodoApp",
  data() {
    return {
      newItem: "",
      items: [],
    };
  },
  methods: {
    addItem() {
      this.items.push({
        id: this.items.length + 1,
        name: this.newItem,
        completed: false,
      });
      this.newItem = "";
    },
    toggleComplete(item) {
      item.completed = !item.completed;
    },
    deleteItem(item) {
      if (item.completed) {
        this.items.forEach((element) => {
          if (item.id === element.id) {
            this.items.splice(element.id - 1, 1);
          }
        });
      }
    },
  },
};
</script>

<style scoped>
html,
body {
  margin: 0;
  padding: 0;
  background: #faffff;
  font-size: 16px;
}

* {
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #3d4855;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 0;
}

.container {
  padding: 24px 0;
  max-width: 700px;
  width: 100%;
  margin: 0 auto;
}

.card {
  border-radius: 50px;
  background: #e0e0e0;
  box-shadow: 20px 20px 100px #5a5a5a, -20px -20px 100px #ffffff;
  margin-bottom: 24px;
}

.card-inner {
  padding: 16px 24px;
}

.flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

input {
  border-radius: 50px;
  background: transparent;
  border: none;
  width: 100%;
  padding: 14px;
  font-size: 16px;
  border: 1px solid transparent;
  height: 100%;
  display: block;
  outline: none;
}

button {
  background: #4fc08d;
  padding: 10px 22px;
  border: none;
  color: white;
  margin: 8px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 50px;
  box-shadow: 20px 20px 100px #5a5a5a, -20px -20px 100px #ffffff;
  transition: 0.15s;
}

button:hover {
  background: #42aa7b;
}

button:disabled {
  background: #e8e8e8;
  color: #555;
  box-shadow: none;
}

.list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.list-icon {
  margin-right: 5px;
}

.list-item {
  padding: 12px 16px 12px 16px;
  border: 1px solid black;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 6px;
  border-radius: 50px;
}

.list-item-toggle {
  height: 21px;
  width: 21px;
  margin-right: 3px;
}

.list-item-delete {
  margin-left: auto;
  margin-top: 0px;
  font-weight: bold;
}

.list-item-delete:hover {
  transform: scale(1.5);
}

.list-item.completed {
  border: 1px solid #4fc08d;
}

.list-item.completed span {
  text-decoration: line-through;
}

.list-item.completed .list-item-toggle {
  border: #4fc08d;
}
</style>