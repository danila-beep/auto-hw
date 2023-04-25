import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): any => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const newState = [...state]
            if (action.payload === "up") {
                return newState.sort((a, b) => a.name.localeCompare(b.name))
            } else if (action.payload === "down") {
                return newState.sort((a, b) => b.name.localeCompare(a.name))
            } else {
                return state
            }
        }
        case 'check': {

            return state.filter((e: { age: number; }) => e.age >= action.payload)
        }
        default:
            return state
    }
}
