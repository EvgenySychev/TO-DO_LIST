
type StateType = {
    age: number
    childrenCount: number
    name: string
}
type ActionType = {
    type: string
    [key: string]: any
}

export const userReducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case 'INCREMENT-AGE':
            let copyState = {...state}
            copyState.age = state.age + 1;
            return copyState;
        case 'INCREMENT-CHILDREN-COUNT':{
            let copyState = {...state}
            copyState.childrenCount = state.childrenCount + 1;
            return copyState;}
        case 'CHANGE-NAME':{
            return {...state, name:action.newName}
        }
        default:
            throw new Error("I don't understand this type")
    }
}
