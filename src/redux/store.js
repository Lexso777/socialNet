import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";


let store = {
    _state: {

        profilePage: {
            postData: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'Hi ))))' },
                { id: 3, message: 'Hi123123 ))))' },
            ],
            newPostText: '',
        },
        dialogsPage: {
            dialogData: [
                { id: 1, name: 'Alex', img: 'https://img.freepik.com/premium-photo/cheerful-avatars-colorful-designs-expressing-emotionsxa_605521-4139.jpg' },
                { id: 2, name: 'Sam', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrXZ5EzBwe9Q-PW6dgVMAJynxfRz0__EkHfg&usqp=CAU' },
                { id: 3, name: 'Din', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgHiPQAWhjrv_WpvVujdLVfvXyrt-jlTdgYA&usqp=CAU' },
                { id: 4, name: 'Vers', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlVTVbe0K7GIrakc2ZVX-K3GUQf3R6vbM8KQ&usqp=CAU' },
                { id: 5, name: 'Hoers', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyT8tA9swj_AdzROoQIfURlAyPIOc3_n5EBQ&usqp=CAU' },
            ],
            messageData: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'Yo' },
            ],
            newMessageText:'',
        },
    },
    getState() {
        return this._state
    },
    rerenderTree() {
    },
    subscribe(observer) {
        this.rerenderTree = observer;
    },
    dispatch(action){

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action)
        this.rerenderTree(this._state)
    }
}

export default store;