export enum ActionType {
  SET_PROFILE = 'SET_PROFILE',
  CLEAR_PROFILE = 'CLEAR_PROFILE',
}

export interface IReducer {
  type: ActionType;
  data?: any;
}

export interface IState {
  profile: {
    id: string;
    name: string;
    role: string;
    favorites: any[];
    email: string;
    salt: string;
    hash: string;
    createdAt: Date;
    updatedAt: Date;
    v: number;
  } | null;
}

export const initalState: IState = { profile: null };

export const reducer: React.Reducer<IState, IReducer> = (state, action) => {
  switch (action.type) {
    case ActionType.CLEAR_PROFILE:
      return { profile: null };
    case ActionType.SET_PROFILE:
      return { profile: action.data };
    default:
      return state;
  }
};
