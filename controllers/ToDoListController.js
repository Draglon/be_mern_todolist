import TodoListModel from '../models/TodoList.js';

export const fetchTodoList = async (req, res) => {
  try {
    const todoList = await TodoListModel.find({ userId: req.query.userId });

    if (!todoList) {
      return res.status(404).json({
        message: 'There are no todo list yet.',
      })
    }

    res.json(todoList);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'No access',
    });
  }
}

export const createTodoListItem = async (req, res) => {
  try {
    const todoList = new TodoListModel();
    todoList.userId = req.body.userId;
    todoList.todo = req.body.todo;

    const todoListData = await todoList.save();

    res.json(todoListData);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Failed to create todo list.'
    })
  }
}

export const updateTodoListItem = async (req, res) => {
  try {
    const todoListItemId = req.params.id;
    const todoListItem = await TodoListModel.findById(todoListItemId);

    todoListItem.todo = req.body.todo;
    todoListItem.set('userId', req.body.userId);

    const todoListItemData = await todoListItem.save();

    res.json(todoListItemData);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Failed to update todo list item.'
    })
  }
}

export const deleteTodoListItem = async (req, res) => {
  try {
    const todoListItemId = req.params.id;
    await TodoListModel.findByIdAndDelete(todoListItemId);

    res.status(200).send(`Item with ID ${todoListItemId} deleted successfully.`);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'No access',
    });
  }
}
