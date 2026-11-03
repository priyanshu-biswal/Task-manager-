export const ACTION_TYPES = {
  ADD_TASK: 'ADD_TASK',
  TOGGLE_TASK: 'TOGGLE_TASK',
  EDIT_TASK: 'EDIT_TASK',
  DELETE_TASK: 'DELETE_TASK',
  CLEAR_ALL: 'CLEAR_ALL',
};

export const initialState = {
  tasks: [],
};

export const taskReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: Date.now(),
            text: action.payload,
            completed: false,
          },
        ],
      };

    case ACTION_TYPES.TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };

    case ACTION_TYPES.EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, text: action.payload.newText }
            : task
        ),
      };

    case ACTION_TYPES.DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    case ACTION_TYPES.CLEAR_ALL:
      return {
        ...state,
        tasks: [],
      };

    default:
      return state;
  }
};