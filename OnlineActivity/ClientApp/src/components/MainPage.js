﻿import {Link} from "react-router-dom";
import React from "react";
import PropTypes from 'prop-types';
import Gapped from "@skbkontur/react-ui/Gapped";
import Button from "@skbkontur/react-ui/Button";
import Input from "@skbkontur/react-ui/Input";
import {registrationPage, loginPage} from "../Routing";
import * as styles from './MainPage.module.css';

const newGameId = '1234-abcd';

const JoinGame = () => {
    const gameIdPlaceholder = 'Идентификатор игры';
    return (
        <form className={'vertical'} action={''} method={'XXX'}>
            <Input placeholder={gameIdPlaceholder} required/>
            <Button type={'submit'}>Присоединиться</Button>
        </form>
    );
};

const InitGame = () => (
    <Gapped gap={20} vertical>
        <Button
            onClick={() => alert(`Идентификатор игры: ${newGameId}.\nОтправьте его друзьям и они смогут присоединиться к вам!`)}>Начать
            новую игру</Button>
        <JoinGame/>
    </Gapped>
);

export const MainPage = ({loggedOn = false}) => {
    return (
        <div className={'centered'}>
            <header className={'page-header'}>
                Online Activity
            </header>

            {loggedOn
                ? <InitGame/>
                : (
                    <nav>
                        <ul className={styles.navigation}>
                            <li className={styles.navItem}><Link to={registrationPage}>Регистрация</Link></li>
                            <li className={styles.navItem}><Link to={loginPage}>Вход</Link></li>
                        </ul>
                    </nav>
                )
            }

        </div>
    );
};

MainPage.propTypes = {
    loggedOn: PropTypes.bool
};

export const LoggedOnPage = () => <MainPage loggedOn/>;