import { useState } from 'react';
import { prizes } from '../../data/prizes';
import RoulettePro from 'react-roulette-pro';
import 'react-roulette-pro/dist/index.css';

const winPrizeIndex = 0;

const reproductionArray = (array = [], length = 0) => [
    ...Array(length)
        .fill('_')
        .map(() => array[Math.floor(Math.random() * array.length)]),
];

const reproducedPrizeList = [
    ...prizes,
    ...reproductionArray(prizes, prizes.length * 3),
    ...prizes,
    ...reproductionArray(prizes, prizes.length),
];

const generateId = () =>
    `${Date.now().toString(36)}-${Math.random().toString(36).substring(2)}`;

const prizeList = reproducedPrizeList.map((prize) => ({
    ...prize,
    id: typeof crypto.randomUUID === 'function' ? crypto.randomUUID() : generateId(),
}));

export const Game = () => {

    const [start, setStart] = useState(false);

    const prizeIndex = prizes.length * 4 + winPrizeIndex;

    const handleStart = () => {
        setStart((prevState) => !prevState);
    };

    const handlePrizeDefined = () => {
        console.log('🥳 Prize defined! 🥳');
    };

    return (

        <header id="home" className="header">
            <div className="overlay text-white text-center">
                <div className='Game_container'>

                    <RoulettePro
                        className="Roullete"
                        prizes={prizeList}
                        prizeIndex={prizeIndex}
                        start={start}
                        onPrizeDefined={handlePrizeDefined}
                        // soundWhileSpinning="https://react-roulette-pro.ivanadmaers.com/assets/f3722b4574da2a35a4ef.mp3"
                        options={{ stopInCenter: true, withoutAnimation: true, }}
                        defaultDesignOptions={{ prizesWithText: true }}
                    />
                    <button className='btn_custom-primary' onClick={handleStart}>Start</button>

                </div>

            </div>
        </header >
    );

};

