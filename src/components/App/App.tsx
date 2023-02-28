import React from 'react';

import Playground from '../Playground/Playground';

import gameIcon from '../../assets/images/game-icon.svg';

import '../../assets/styles/style.scss';
import './app.css';

// /. imports

const App: React.FC = () => {
    return (
        <div className="App">
            <div className="board">
                <div className="board__wrapper">
                    <section className="board__header">
                        <a
                            className="board__image"
                            href="#"
                        >
                            <img
                                src={gameIcon}
                                alt="game-icon"
                            />
                        </a>
                        <h1 className="board__name">Minesweeper</h1>
                    </section>
                    <section className="board__body">
                        <div className="board__information information">
                            <div className="information__mines-count">
                                <span>036</span>
                            </div>
                            <div className="information__status">
                                <button
                                    type="button"
                                    aria-label="restart game"
                                >
                                    <svg
                                        width="22"
                                        height="22"
                                        viewBox="0 0 22 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M2.58472 6.40712L1.08472 8.90712L1.58472 13.9071L6.08472 19.9071H7.08472L8.08472 20.4071H13.5847L14.5847 19.9071H16.0847L19.5847 15.4071L20.5847 13.4071V8.40712L19.5847 7.40712V5.90712L16.5847 2.90712L13.5847 1.40712H8.08472L2.58472 5.40712V6.40712Z"
                                            fill="#FFFF00"
                                        />
                                        <path
                                            d="M4.26082 4.14587H3.03546V5.39212H4.26082V4.14587Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M18.9646 4.14587H17.7393V5.39212H18.9646V4.14587Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M5.48616 2.89961H4.2608V4.14586H5.48616V2.89961Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M7.93685 7.88461H6.71149V9.13086H7.93685V7.88461Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M9.16219 7.88461H7.93683V9.13086H9.16219V7.88461Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M7.93685 9.13086H6.71149V10.3771H7.93685V9.13086Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M9.16219 9.13086H7.93683V10.3771H9.16219V9.13086Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M14.0632 7.88461H12.8378V9.13086H14.0632V7.88461Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M15.2885 7.88461H14.0632V9.13086H15.2885V7.88461Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M14.0632 9.13086H12.8378V10.3771H14.0632V9.13086Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M15.2885 9.13086H14.0632V10.3771H15.2885V9.13086Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M17.7393 2.89961H16.5139V4.14586H17.7393V2.89961Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M3.03542 5.39211H1.81006V6.63836H3.03542V5.39211Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M3.03542 6.63836H1.81006V7.88461H3.03542V6.63836Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M20.19 5.39211H18.9647V6.63836H20.19V5.39211Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M20.19 6.63836H18.9647V7.88461H20.19V6.63836Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M1.81008 7.88461H0.584717V9.13086H1.81008V7.88461Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M1.81008 9.13086H0.584717V10.3771H1.81008V9.13086Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M1.81008 10.3771H0.584717V11.6234H1.81008V10.3771Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M1.81008 11.6234H0.584717V12.8696H1.81008V11.6234Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M1.81008 12.8696H0.584717V14.1159H1.81008V12.8696Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M21.4154 7.88461H20.19V9.13086H21.4154V7.88461Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M21.4154 9.13086H20.19V10.3771H21.4154V9.13086Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M21.4154 10.3771H20.19V11.6234H21.4154V10.3771Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M21.4154 11.6234H20.19V12.8696H21.4154V11.6234Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M21.4154 12.8696H20.19V14.1159H21.4154V12.8696Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M7.93683 20.3466V21.5929H9.16219V20.3466H7.93683Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M9.16223 20.3466V21.5929H10.3876V20.3466H9.16223Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M10.3876 20.3466V21.5929H11.6129V20.3466H10.3876Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M11.6124 20.3466V21.5929H12.8378V20.3466H11.6124Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M12.8378 20.3466V21.5929H14.0632V20.3466H12.8378Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M7.9364 15.3616V16.6079H9.16176V15.3616H7.9364Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M9.16174 15.3616V16.6079H10.3871V15.3616H9.16174Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M10.3871 15.3616V16.6079H11.6124V15.3616H10.3871Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M11.6124 15.3616V16.6079H12.8378V15.3616H11.6124Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M12.8378 15.3621V16.6084H14.0632V15.3621H12.8378Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M7.9364 0.407117V1.65337H9.16176V0.407117H7.9364Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M9.16174 0.407117V1.65337H10.3871V0.407117H9.16174Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M10.3871 0.407117V1.65337H11.6124V0.407117H10.3871Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M11.6124 0.407117V1.65337H12.8378V0.407117H11.6124Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M12.8378 0.407598V1.65385H14.0632V0.407598H12.8378Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M3.03542 14.1154H1.81006V15.3616H3.03542V14.1154Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M3.03542 15.3616H1.81006V16.6079H3.03542V15.3616Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M20.19 14.1154H18.9647V15.3616H20.19V14.1154Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M20.19 15.3616H18.9647V16.6079H20.19V15.3616Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M4.26082 16.6079H3.03546V17.8541H4.26082V16.6079Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M5.48616 17.8541H4.2608V19.1004H5.48616V17.8541Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M6.7115 12.8696H5.48615V14.1159H6.7115V12.8696Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M18.9646 16.6079H17.7393V17.8541H18.9646V16.6079Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M17.7393 17.8541H16.5139V19.1004H17.7393V17.8541Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M16.5139 12.8696H15.2886V14.1159H16.5139V12.8696Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M6.7115 19.1004H5.48615V20.3466H6.7115V19.1004Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M7.93685 19.1004H6.71149V20.3466H7.93685V19.1004Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M7.93685 14.1154H6.71149V15.3616H7.93685V14.1154Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M15.2885 19.1004H14.0632V20.3466H15.2885V19.1004Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M15.2885 14.1154H14.0632V15.3616H15.2885V14.1154Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M16.5139 19.1004H15.2886V20.3466H16.5139V19.1004Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M6.7115 1.65337H5.48615V2.89962H6.7115V1.65337Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M7.93685 1.65337H6.71149V2.89962H7.93685V1.65337Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M15.2885 1.65337H14.0632V2.89962H15.2885V1.65337Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M16.5139 1.65337H15.2886V2.89962H16.5139V1.65337Z"
                                            fill="black"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <div className="information__timer">
                                <span>015</span>
                            </div>
                        </div>
                        <Playground />
                    </section>
                </div>
            </div>
        </div>
    );
};

export default App;