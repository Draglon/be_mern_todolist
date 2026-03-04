import ToDoListModel from '../models/ToDoList.js';

export const fetchToDoList = async (req, res) => {
  try {
    const userId = req.params.id;
    const todoList = await ToDoListModel.findById(userId);

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

export const createToDoListItem = async (req, res) => {
  try {
    const todoList = new ToDoListModel();
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

export const updateToDoListItem = async (req, res) => {
  try {
    const todoListItemId = req.params.id;
    const todoListItem = await ToDoListModel.findById(todoListItemId);

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

export const deleteToDoListItem = async (req, res) => {
  try {
    const todoListItemId = req.params.id;
    await ToDoListModel.findByIdAndDelete(todoListItemId);

    res.status(200).send(`Item with ID ${todoListItemId} deleted successfully.`);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'No access',
    });
  }
}
