let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'I\'m first', likesCounter: '10'},
            {id: 2, message: 'I\'m second', likesCounter: '5'},
            {id: 3, message: 'I\'m third', likesCounter: '7'},
            {id: 4, message: 'Ha-ha-ha', likesCounter: '3'},
        ],
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Andrew'},
            {id: 2, name: 'Mihail'},
            {id: 3, name: 'Alexandra'},
            {id: 4, name: 'Nasty'},
            {id: 5, name: 'Mia'},
        ],
        messages: [
            {id: 1, message: 'Hey'},
            {id: 2, message: 'Hello'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo-Yo-Yolki'},
        ],
    },
    sideBar: {
        friend: [
            {
                id: '1',
                avatar: 'https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png',
                name: 'Andrew'
            }, {
                id: '2',
                avatar: 'https://vsekidki.ru/uploads/posts/2016-08/1470735121_lecdaa3axdc.jpg',
                name: 'Mihail'
            }, {
                id: '3',
                avatar: 'https://i.pinimg.com/736x/8e/3a/af/8e3aafb2b6cfcb43b4f1443374535d1b.jpg',
                name: 'Nasty'
            },
            {
                id: '4',
                avatar: 'https://avatarko.ru/img/kartinka/1/Shrek.jpg',
                name: 'Shrek'
            },
        ],
    }
}

export default state;