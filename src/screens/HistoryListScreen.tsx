import React from 'react';
import { View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { Header } from '../components/Header/Header';
import { LottoNumberView } from '../components/LottoNumberView';
import { Typography } from '../components/Typography';
import { RootState } from '../store/store';

export const HistoryListScreen = () => {
    const history = useSelector((state: RootState) => state.numbers.history);

    return (
        <View style={{ flex: 1 }}>
            <Header>
                <Header.Title title="History" />
            </Header>
            <FlatList
                style={{ flex: 1 }}
                data={history}
                contentContainerStyle={{
                    paddingTop: 24,
                    paddingBottom: 24,
                }}
                renderItem={({ item }) => {
                    return (
                        <View
                            style={{
                                paddingHorizontal: 20,
                                paddingVertical: 12,
                                marginHorizontal: 24,
                                height: 120,
                                backgroundColor: 'white',
                            }}>
                            <Typography fontSize={16}>
                                {item.date.getFullYear()}. {item.date.getMonth() + 1}. {item.date.getDate()}
                            </Typography>
                            <LottoNumberView numbers={item.numbers} />
                        </View>
                    );
                }}
            />
        </View>
    );
};
