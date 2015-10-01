import React, { Component } from 'react';
import $ from 'jquery';
import { api, formValidate } from './utils';
import settings from './settings.js';

class Application extends Component {
    static defaultProps = {
        url: settings.debug ? 'http://localhost:8000/api/minecraft/launcher/auth/check/' : 'http://minecraft.mimi-cloud.com/api/minecraft/launcher/auth/check/'
    };

    state = {
        status: false,
        loading: false
    };

    handleSubmit(e) {
        e.preventDefault();

        var form = React.findDOMNode(this.refs.form),
            $form = $(form),
            params = $form.serialize();

        this.setState({
            loading: true
        });

        api.post(this.props.url, params, (data) => {
            formValidate($form, data['errors']);

            this.setState({
                loading: false
            });

            if (data['status']) {
                this.setState(data);

                this.runMinecraft(this.state.auth_token);
            }
        }, () => {
            this.setState({
                loading: false
            });
        });
    }

    runMinecraft(auth_token) {
        startMinecraft(auth_token);
    }

    handleSaveUsername(e) {
        store.set('username', e.target.value);
        this.setState({username: e.target.value});
    }

    handleSavePassword(e) {
        store.set('password', e.target.value);
        this.setState({password: e.target.value});
    }

    handleOpenLink(e) {
        e.preventDefault();

        console.log(e.target.getAttribute('href'));
    }

    render() {
        return (
            <div className="login-container">
                <h1 className="logo">Minecraft</h1>

                <form ref="form" onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-row">
                        <label htmlFor="username">Имя пользователя:</label>
                        <input
                            disabled={this.state.loading}
                            name="username"
                            type="text"
                            defaultValue={store.get('username')}
                            onChange={this.handleSaveUsername.bind(this)}
                            id="username"/>
                        <ul className="errors"></ul>
                    </div>
                    <div className="form-row">
                        <label htmlFor="password">Пароль:</label>
                        <input
                            disabled={this.state.loading}
                            name="password"
                            type="password"
                            defaultValue={store.get('password')}
                            onChange={this.handleSavePassword.bind(this)}
                            id="password"/>
                        <ul className="errors"></ul>
                    </div>
                    <div className="form-row">
                        <input
                            disabled={this.state.loading}
                            className="button"
                            type="submit" value={this.state.loading ? "Загрузка..." : "Авторизация"}/>
                    </div>
                    <div className="form-row">
                        <a
                            href="http://minecraft.mimi-cloud.com/user/registration/"
                            onClick={this.handleOpenLink.bind(this)}
                            className="button">Регистрация</a>
                    </div>
                </form>
            </div>
        );
    }
}

React.render(<Application />, document.getElementById('app'));