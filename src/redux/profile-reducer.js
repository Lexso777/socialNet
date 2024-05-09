
let initialState = {
    profilePage: {
        postData: [
            { id: 1, message: 'Hi' },
            { id: 2, message: 'Hi ))))' },
            { id: 3, message: 'Hi123123 ))))' },
        ],
        newPostText: '',
    },
}


const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD-NEW-POST' :
            let newPost = {
                id: 5,
                message: state.profilePage.newPostText, // Используйте новый текст из состояния
            };
            return {
                ...state, // Сначала скопируйте текущее состояние
                profilePage: { // Затем обновите вложенный объект profilePage
                    ...state.profilePage,
                    postData: [...state.profilePage.postData, newPost], // Обновите массив постов
                    newPostText: '', // Сбросите новый текст
                }
            };
        case 'UPDATE-NEW-POST' :
            return {
                ...state, // Сначала скопируйте текущее состояние
                profilePage: { // Затем обновите вложенный объект profilePage
                    ...state.profilePage,
                    newPostText: action.newText, // Обновите новый текст
                }
            };
        default:
            return state;
    }
}


export const addNewPostActionCreator = () => {
    return {
        type : 'ADD-NEW-POST'
    }
}

export const updateNewPostActionCreator = (text) => {
    return {
        type : 'UPDATE-NEW-POST',
        newText : text,
    }
}

export default profileReducer;