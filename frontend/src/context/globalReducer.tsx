export enum ActionType {
  INCREMENT_COUNTER = 'INCREMENT_COUNTER',
  DECREMENT_COUNTER = 'DECREMENT_COUNTER',
}

export interface IReducer {
  type: ActionType;
  count: number;
}

export interface IState {
  age: number;
}

export const initalState: IState = { age: 0 };

export const reducer: React.Reducer<IState, IReducer> = (state, action) => {
  switch (action.type) {
    case ActionType.INCREMENT_COUNTER:
      return { age: state.age + action.count };
    case ActionType.DECREMENT_COUNTER:
      return { age: state.age - action.count };
    default:
      return state;
  }
};
