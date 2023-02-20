import { createNewNumbers, CREATE_NEW_NUMBERS } from '../actions/lottoNumbers';

type LottoNumbersAction = ReturnType<typeof createNewNumbers>;
type LottoNumbersState = {
    currentNumber: number[];
    history: { date: Date; numbers: number[] }[];
};

const defaultState: LottoNumbersState = {
    currentNumber: [],
    history: [],
};

export const lottoNumberReducers = (state = defaultState, action: LottoNumbersAction) => {
    if (action.type === CREATE_NEW_NUMBERS) {
        return {
            ...state,
            currentNumber: action.numbers,
            history: state.history.concat([
                {
                    date: new Date(),
                    numbers: action.numbers,
                },
            ]),
        };
    }

    return {
        ...state,
    };
};
