import { createNewNumbers, CREATE_NEW_NUMBERS } from '../actions/lottoNumbers';

export type LottoNumbersAction = ReturnType<typeof createNewNumbers>;
type LottoNumbersState = {
    currentNumber: number[];
    history: { date: string; numbers: number[] }[];
};

const defaultState: LottoNumbersState = {
    currentNumber: [],
    history: [],
};

export const lottoNumberReducers = (state = defaultState, action: LottoNumbersAction) => {
    if (action.type === CREATE_NEW_NUMBERS) {
        const date = new Date();

        return {
            ...state,
            currentNumber: action.numbers,
            history: state.history.concat([
                {
                    date: `${date.getFullYear()}. ${
                        date.getMonth() + 1
                    }. ${date.getDate()} ${date.getHours()}:${date.getMinutes()}`,
                    numbers: action.numbers,
                },
            ]),
        };
    }

    return {
        ...state,
    };
};
