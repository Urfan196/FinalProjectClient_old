const initialState = {
    currentUser: {},
    users: [],
    items: [],
    locations:[],
    selectedItem: {}
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BEGIN_SIGN_IN':
          return state
        case 'SET_CURRENT_USER':
            return {...state, currentUser: action.user}
        case 'SET_ALL_USERS':
            return {...state, users: action.users }
        case 'ADD_USER':
            return {...state, users:[...state.users, action.user]}
        case 'CLEAR_CURRENT_USER':
            return {...state, currentUser: {} }
        case 'DELETE_USER':
            const deletedArray = state.users.filter(user => user.id !== action.user.id)
            return {...state, users: deletedArray}
            
        case 'SET_ALL_ITEMS':
            return {...state, items: action.items }
        case 'SET_SELECTED_ITEM':
            return {...state, selectedItem: action.item}
        case 'CREATE_ITEM':
            return {...state, items: [...state.items, action.item]}
        case 'EDIT_ITEM':
            const newArray = state.items.map(item =>{
                if(item.id === action.item.id){
                    return action.item
                } else {
                    return item
                } 
            })
            return {...state, items: newArray}
        case 'CHANGE_ITEM_AVAILABILITY':
            const availArray = state.items.map(item =>{
                if(item.id === action.item.id){
                    return action.item
                } else {
                    return item
                }
            })
            return {...state, items: availArray}
        case 'DELETE_ITEM':
            const filteredArray = state.items.filter(item => item.id !== action.item.id)
            return {...state, items: filteredArray}

        case 'SET_NEAR_LOCATION':
            return {...state, locations: action.locations}
        case 'SET_LOCATION':
            return {...state, currentUser: {...state.currentUser, location: action.location}}

        default:
            return state
    }
}

export default rootReducer