// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';

const initialState = {
    page2Data: {
        selectEmoji: '', // 페이지 2에 해당하는 초기값 설정
    },
    page3Data: {
        writerName: '',
        letterContent: '',
    },
    page4Data: {},
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PAGE2_DATA':
            console.log('Page2 : ' + action.payload);
            return { ...state, page2Data: action.payload };
        case 'SET_PAGE3_DATA':
            console.log('Page3' + action.payload);
            return { ...state, page3Data: action.payload };
        case 'SET_PAGE4_DATA':
            console.log('Page4' + action.payload);
            return { ...state, page4Data: action.payload };
        default:
            return state;
    }
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;
