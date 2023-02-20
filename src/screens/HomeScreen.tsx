import React, { useCallback } from 'react';
import { View } from 'react-native';
import { Button } from '../components/Button';
import { Header } from '../components/Header/Header';
import { LottoNumberView } from '../components/LottoNumberView';
import { Spacer } from '../components/Spacer';
import { Typography } from '../components/Typography';

export const HomeScreen = () => {
    const onPressGetNumber = useCallback(() => {}, []);

    return (
        <View style={{ flex: 1 }}>
            <Header>
                <Header.Title title="HOME" />
            </Header>
            <View
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    paddingHorizontal: 12,
                }}>
                <View
                    style={{
                        height: 250,
                        flexDirection: 'column',
                        paddingHorizontal: 24,
                        backgroundColor: 'white',
                        borderColor: 'gray',
                    }}>
                    <LottoNumberView numbers={[1, 2, 3, 4, 5, 6]} />
                </View>
                <Spacer space={20} />
                <Button onPress={onPressGetNumber}>
                    <View style={{ backgroundColor: 'black', paddingVertical: 24, alignItems: 'center' }}>
                        <Typography color="white" fontSize={18}>
                            로또 번호 추출하기
                        </Typography>
                    </View>
                </Button>
            </View>
        </View>
    );
};
